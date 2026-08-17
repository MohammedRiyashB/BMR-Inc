import { motion } from 'motion/react';
import { Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://bmr-contact.mohdriyash10.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight"
          >
            Let's Build What's Next.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-6 justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-[#050505] border border-white/5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-[#0047FF]/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 shrink-0 bg-[#111111] flex items-center justify-center rounded-sm text-white group-hover:bg-[#0047FF] transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-2">Corporate Headquarters</h3>
                <p className="text-[#888888] text-sm mb-4 leading-relaxed max-w-md">
                  For general inquiries, corporate partnerships, and media relations, please reach out to our primary communication channel.
                </p>
                <a href="mailto:support.bmrinc@gmail.com" className="inline-flex text-white font-medium hover:text-[#0047FF] transition-colors text-base border-b border-white/20 hover:border-[#0047FF] pb-1">
                  support.bmrinc@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#050505] p-10 border border-white/5 rounded-sm"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-sm flex items-center gap-3">
                  <CheckCircle2 size={18} />
                  Your message has been sent successfully. We will be in touch shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-sm flex items-center gap-3">
                  <AlertCircle size={18} className="shrink-0" />
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-widest text-[#555555] uppercase mb-2">Name <span className="text-[#0047FF]">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-white/10 p-4 text-white rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors"
                    placeholder="John Doe"
                    aria-required="true"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-[#555555] uppercase mb-2">Email <span className="text-[#0047FF]">*</span></label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#111111] border border-white/10 p-4 text-white rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors"
                    placeholder="john@example.com"
                    aria-required="true"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold tracking-widest text-[#555555] uppercase mb-2">Subject <span className="text-[#0047FF]">*</span></label>
                <input 
                  type="text" 
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/10 p-4 text-white rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors"
                  placeholder="General Inquiry"
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-widest text-[#555555] uppercase mb-2">Message <span className="text-[#0047FF]">*</span></label>
                <textarea 
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#111111] border border-white/10 p-4 text-white rounded-sm focus:outline-none focus:border-[#0047FF] transition-colors resize-none"
                  placeholder="How can we collaborate?"
                  aria-required="true"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                className="mt-2 w-full px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
