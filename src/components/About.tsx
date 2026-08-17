import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8"
          >
            About BMR Inc.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#888888] font-light leading-relaxed max-w-lg mb-12 space-y-6"
          >
            <p>
              BMR Inc. is an independent technology company focused on developing intelligent digital products, artificial intelligence technologies, and future-ready software platforms from the ground up. Founded by Mohammed Riyash B., BMR Inc. builds practical technology with a focus on engineering, innovation, and human-centered experiences.
            </p>
            <p>
              Our portfolio includes UmeTVChat and EARTH AI, alongside ongoing research and development in AI, software technology, digital communication, and next-generation platforms. We prioritize engineering excellence, precise design, security, and practical utility in everything we build.
            </p>
          </motion.div>
          
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
            alt="BMR Inc Technology" 
            className="w-full h-48 object-cover rounded-sm border border-white/5 opacity-80"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full bg-[#111111] border border-white/5 rounded-sm relative overflow-hidden flex flex-col"
        >
          <div className="h-48 w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
              alt="Data Core" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[rgba(0,71,255,0.2)] to-transparent pointer-events-none" />
          </div>
          
          <div className="p-10 md:p-12 relative z-10 -mt-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#555555] uppercase block mb-8">
              Leadership
            </span>
            
            <h3 className="text-3xl font-medium text-white mb-2">
              Mohammed Riyash B.
            </h3>
            <p className="text-[#0047FF] font-medium tracking-wide uppercase text-sm mb-6">
              Founder & Engineer
            </p>
            
            <p className="text-[#888888] font-light leading-relaxed">
              Leading the vision, engineering, and product development across BMR Inc.'s entire portfolio, shaping the intersection of AI and human communication.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
