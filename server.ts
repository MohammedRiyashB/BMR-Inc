import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import xss from "xss";
import dotenv from "dotenv";
import helmet from "helmet";
import crypto from "crypto";
import cors from "cors";
import { Redis } from "@upstash/redis";

dotenv.config();

// Redis setup for distributed rate limiting
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// We instantiate Redis if credentials are provided.
// If not, we fall back to a mock in-memory version for local dev without credentials,
// but the architecture is strictly Redis-based.
const memoryStore = new Map<string, string>();
const redis = (REDIS_URL && REDIS_TOKEN) 
  ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN }) 
  : { 
      get: async (key: string) => memoryStore.get(key) || null,
      set: async (key: string, value: any, opts?: any) => {
        memoryStore.set(key, String(value));
        if (opts?.ex) {
          setTimeout(() => memoryStore.delete(key), opts.ex * 1000);
        }
        return "OK";
      }
    };

const TWENTY_FOUR_HOURS_SEC = 24 * 60 * 60;

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const isProd = process.env.NODE_ENV === "production";
  
  // Canonical URL - Single source of truth
  const PUBLIC_SITE_URL = process.env.VITE_PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL || "https://bmrinc.com";

  // Trust proxy for rate limiting (since we're behind a reverse proxy in the container)
  app.set("trust proxy", 1);
  app.use(express.json({ limit: '10kb' })); // STRICT limit for safety on contact forms
  
  // Strict CORS configuration
  const allowedOrigins = [PUBLIC_SITE_URL];
  if (!isProd) {
    allowedOrigins.push("http://localhost:3000");
  }
  
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests) if desired, but here we strict check if origin matches
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false); // Block quietly
      }
    },
    methods: ["GET", "POST"]
  }));
  
  // Security headers using Helmet
  app.use(helmet({
    contentSecurityPolicy: isProd ? {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"], // Allow inline for Vite runtime
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "blob:", "https:"],
        connectSrc: ["'self'", PUBLIC_SITE_URL, "https://api.brevo.com"],
        fontSrc: ["'self'", "data:", "https:"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    } : false, // Disabled CSP in dev to prevent breaking Vite HMR
    crossOriginEmbedderPolicy: false, // Prevents loading external images/fonts if strictly true
  }));

  // Contact Form Rate Limiter (Short-window IP flood protection)
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: "Too many requests from this IP, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Dynamic SEO Routes
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${PUBLIC_SITE_URL}/sitemap.xml`);
  });

  app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${PUBLIC_SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${PUBLIC_SITE_URL}/privacy-policy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${PUBLIC_SITE_URL}/terms-conditions</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`);
  });

  // Contact API Route
  app.post(
    "/api/contact",
    contactLimiter,
    [
      body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }).withMessage("Name too long"),
      body("email").trim().isEmail().withMessage("Valid email is required").isLength({ max: 150 }).withMessage("Email too long"),
      body("subject").trim().notEmpty().withMessage("Subject is required").isLength({ max: 200 }).withMessage("Subject too long"),
      body("message").trim().notEmpty().withMessage("Message is required").isLength({ min: 10, max: 5000 }).withMessage("Message must be between 10 and 5000 characters"),
    ],
    async (req: express.Request, res: express.Response): Promise<void> => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ error: "Validation failed. Please check your inputs." });
        return;
      }

      try {
        const { name, email, subject, message } = req.body;

        // Normalize email and grab IP
        const normalizedEmail = email.trim().toLowerCase();
        const clientIp = req.ip || req.socket.remoteAddress || "unknown";

        // Generate secure hashes for tracking without storing PII in the tracker
        const emailHash = crypto.createHash('sha256').update(`email_${normalizedEmail}`).digest('hex');
        const ipHash = crypto.createHash('sha256').update(`ip_${clientIp}`).digest('hex');

        const redisEmailKey = `contact:email:${emailHash}`;
        const redisIpKey = `contact:ip:${ipHash}`;

        // Check 24-hour strict limits via Redis
        const [lastEmailSubmission, lastIpSubmission] = await Promise.all([
          redis.get(redisEmailKey),
          redis.get(redisIpKey)
        ]);

        if (lastEmailSubmission || lastIpSubmission) {
          res.status(429).json({ error: "You’ve already submitted an enquiry today. Please try again tomorrow." });
          return;
        }

        // Sanitize inputs
        const safeName = xss(name);
        const safeEmail = xss(email);
        const safeSubject = xss(subject);
        const safeMessage = xss(message);

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'support.bmrinc@gmail.com';
        const senderName = process.env.BREVO_SENDER_NAME || 'BMR Inc';

        if (!apiKey) {
          console.error("[CONTACT ERROR] Internal Email Configuration Missing.");
          res.status(500).json({ error: "Unable to process your request right now. Please try again later." });
          return;
        }

        // 1. Send the enquiry to BMR Inc. Inbox
        const adminEmailContent = `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #0047FF;">New Website Enquiry</h2>
            <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
            <p><strong>Time:</strong> ${new Date().toUTCString()}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="white-space: pre-wrap;">${safeMessage}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">Source: Official BMR Inc. Website</p>
          </div>
        `;

        const adminPayload = {
          sender: { name: senderName, email: senderEmail },
          to: [{ email: senderEmail, name: "BMR Inc Support" }],
          replyTo: { email: safeEmail, name: safeName },
          subject: `Website Enquiry: ${safeSubject}`,
          htmlContent: adminEmailContent
        };

        const adminResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "api-key": apiKey,
            "content-type": "application/json"
          },
          body: JSON.stringify(adminPayload)
        });

        if (!adminResponse.ok) {
          console.error("[CONTACT ERROR] Corporate delivery failed.");
          throw new Error("Failed to send admin email");
        }

        // 2. Send Auto-reply to Visitor
        const visitorEmailContent = `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 4px;">
            <h2 style="color: #050505;">We received your message &mdash; BMR Inc.</h2>
            <p>Dear ${safeName},</p>
            <p>We have successfully received your enquiry regarding <strong>"${safeSubject}"</strong>.</p>
            <p>Our team will review your message and get back to you if necessary.</p>
            <br />
            <p>Best regards,</p>
            <p><strong>The BMR Inc. Team</strong></p>
            <p><a href="${PUBLIC_SITE_URL}" style="color: #0047FF; text-decoration: none;">${new URL(PUBLIC_SITE_URL).hostname}</a></p>
          </div>
        `;

        const visitorPayload = {
          sender: { name: senderName, email: senderEmail },
          to: [{ email: safeEmail, name: safeName }],
          subject: "We received your message — BMR Inc.",
          htmlContent: visitorEmailContent
        };

        try {
          const visitorResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "accept": "application/json",
              "api-key": apiKey,
              "content-type": "application/json"
            },
            body: JSON.stringify(visitorPayload)
          });
          if (!visitorResponse.ok) {
             console.warn("[CONTACT WARNING] Visitor confirmation failed.");
          }
        } catch (autoReplyError) {
          console.warn("[CONTACT WARNING] Visitor confirmation failed.");
        }

        // ONLY AFTER SUCCESS: Update the tracking map to consume the quota in Redis
        const nowStr = Date.now().toString();
        await Promise.all([
          redis.set(redisEmailKey, nowStr, { ex: TWENTY_FOUR_HOURS_SEC }),
          redis.set(redisIpKey, nowStr, { ex: TWENTY_FOUR_HOURS_SEC })
        ]);

        console.log(`[CONTACT SUCCESS] Corporate delivery successful.`);
        res.status(200).json({ success: true, message: "Your message has been sent successfully." });

      } catch (error) {
        console.error("[CONTACT ERROR] Exception during submission.");
        res.status(500).json({ error: "Unable to process your request right now. Please try again later." });
      }
    }
  );

  // Vite middleware for development
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
