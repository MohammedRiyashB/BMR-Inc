import { motion } from 'motion/react';
import { ParticleNetwork } from './ParticleNetwork';

export function Future() {
  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden flex items-center justify-center border-y border-white/5">
      
      {/* Dynamic Background */}
      <ParticleNetwork />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8"
        >
          The Future Is Built.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#888888] font-light leading-relaxed mb-12 max-w-2xl"
        >
          BMR Inc. continues to explore new ideas across artificial intelligence, digital products and emerging technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#products"
            className="px-10 py-5 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-sm inline-block"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
