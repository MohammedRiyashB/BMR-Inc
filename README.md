# BMR Inc. — Official Corporate Website

This repository contains the source code for the official BMR Inc. corporate website, serving as the global presence for BMR Inc., the parent organization of intelligent technologies such as UmeTVChat and EARTH AI.

## Project Purpose
To provide a secure, ultra-high-performance, accessible (WCAG 2.2 AA), and visually premium interface that clearly communicates the BMR Inc. brand identity, values, and product portfolio to investors, clients, and partners.

## Architecture

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4.
- **Backend**: Node.js, Express (Minimal API footprint restricted to strictly required functional endpoints).
- **Animations**: Framer Motion, adaptive canvas particle engine with `prefers-reduced-motion` compliance.
- **Persistence**: File-based local JSON key-value store (specifically for rate-limiting without the overhead of external databases).

## Security & Rate Limiting

The backend architecture focuses heavily on protecting the organization from spam and volumetric abuse:

1. **Helmet & CSP**: Strict Content Security Policies applied in production.
2. **CORS Restrictions**: Automatically bound to `PUBLIC_SITE_URL` to reject unauthorized cross-origin requests.
3. **Payload Limits**: Contact form payload strictly capped at 10kb.
4. **Anti-Spam (Dual-Layer)**:
   - **Short-Window IP Limiter**: Max 5 requests per 15 minutes to block automated flooding.
   - **Persistent 24-Hour Limits**: Hashed client IPs and normalized email addresses are stored persistently. Visitors are restricted to **one successful submission per 24 hours**.

## Brevo Integration

The contact form is completely decoupled from the client. It integrates server-side with the Brevo Transactional Email API to relay messages securely to the official BMR inbox (`support.bmrinc@gmail.com`).
- Generates a rich HTML summary for the admin inbox.
- Sends an automated, safely branded auto-reply to the visitor.
- **API Keys are heavily guarded** and read exclusively via server `.env` files.

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
NODE_ENV=production
PORT=3000
PUBLIC_SITE_URL=https://bmrinc.com
BREVO_API_KEY=your-secure-key
BREVO_SENDER_EMAIL=support.bmrinc@gmail.com
BREVO_SENDER_NAME="BMR Inc."
CONTACT_EMAIL=support.bmrinc@gmail.com
```
*Note: Ensure `.env` is never committed to source control.*

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Deployment

```bash
npm run build
npm run start
```
The build command compiles the Vite static frontend and bundles the Express backend into an optimized `server.cjs` executable via ESBuild.

## SEO & Accessibility

- Fully semantic HTML and structured headings.
- Valid `JSON-LD` schemas explicitly defining the BMR Inc. Corporate structure.
- Accessible focus states, trapping, and ARIA labels.
- Assets are aggressively optimized.

---
**Copyright © 2026 BMR Inc. All Rights Reserved.**
