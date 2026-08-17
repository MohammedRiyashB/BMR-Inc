import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 relative min-h-screen">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[#050505] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#0047FF]/10 to-transparent blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-[#0047FF] uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-12">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-p:text-[#888888] prose-p:font-light prose-p:leading-relaxed prose-h2:text-white prose-h2:font-medium prose-h2:mt-12 max-w-none">
            <p className="text-lg">Last updated: August 2026</p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to BMR Inc. ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="text-[#888888] font-light leading-relaxed list-disc pl-6 mb-6">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address (e.g., when you contact support.bmrinc@gmail.com) and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="text-[#888888] font-light leading-relaxed list-disc pl-6 mb-6">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>

            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:support.bmrinc@gmail.com" className="text-white hover:text-[#0047FF] transition-colors">support.bmrinc@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
