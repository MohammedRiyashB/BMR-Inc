import { motion } from 'motion/react';

export function Technology() {
  const techs = [
    {
      title: "Artificial Intelligence",
      description: "Building intelligent models and systems capable of solving complex problems."
    },
    {
      title: "Real-Time Systems",
      description: "Low-latency communication networks powering seamless interaction."
    },
    {
      title: "Cloud Technology",
      description: "Scalable infrastructure designed for performance and reliability."
    },
    {
      title: "Human-Centered Design",
      description: "Interfaces engineered with precision, focusing on user experience."
    }
  ];

  return (
    <section id="technology" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[rgba(0,71,255,0.03)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20">
        
        <div className="flex-1 lg:sticky lg:top-40 self-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-2 h-2 bg-[#0047FF] rounded-sm mb-6" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8"
          >
            Technology Without Boundaries.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#888888] font-light leading-relaxed max-w-md"
          >
            We leverage modern stacks to create platforms that scale globally, run efficiently, and deliver exceptional digital experiences.
          </motion.p>
        </div>

        <div className="flex-1 flex flex-col gap-8 relative z-10">
          {techs.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border-l border-white/10 hover:border-[#0047FF]/50 transition-colors duration-500"
            >
              <h3 className="text-2xl font-medium text-white mb-3">{tech.title}</h3>
              <p className="text-[#888888] font-light leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
