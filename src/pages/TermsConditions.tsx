import { motion } from 'motion/react';

export function TermsConditions() {
  return (
    <main className="pt-32 pb-24 relative min-h-screen">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[#050505] -z-10" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-b from-[#7B00FF]/10 to-transparent blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-[#7B00FF] uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-12">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-invert prose-p:text-[#888888] prose-p:font-light prose-p:leading-relaxed prose-h2:text-white prose-h2:font-medium prose-h2:mt-12 max-w-none">
            <p className="text-lg">Last updated: August 2026</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and BMR Inc. ("we," "us" or "our"), concerning your access to and use of our website and services (including UmeTVChat and EARTH AI).
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
            </p>

            <h2>3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
            </p>

            <h2>4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <ul className="text-[#888888] font-light leading-relaxed list-disc pl-6 mb-6">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
              <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            </ul>

            <h2>5. Modifications and Interruptions</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of the jurisdiction in which BMR Inc. operates. BMR Inc. and yourself irrevocably consent that the courts of this jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:support.bmrinc@gmail.com" className="text-white hover:text-[#7B00FF] transition-colors">support.bmrinc@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
