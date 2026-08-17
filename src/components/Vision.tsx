import { motion } from 'motion/react';

export function Vision() {
  return (
    <section id="vision" className="py-40 bg-[#111111] relative border-y border-white/5 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract Vision" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-16"
        >
          Technology should move humanity forward.
        </motion.h2>

        <div className="flex flex-col gap-8 text-xl md:text-2xl text-[#888888] font-light leading-relaxed max-w-4xl mx-auto text-left md:text-center backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-sm border border-white/5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            BMR Inc. exists to explore what technology can become when engineering, creativity and ambitious ideas come together.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We focus on building meaningful digital products and intelligent systems with the potential to solve real-world problems and create new possibilities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
