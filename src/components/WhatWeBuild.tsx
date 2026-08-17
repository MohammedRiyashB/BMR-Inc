import { motion } from 'motion/react';
import { Network, Blocks, Globe } from 'lucide-react';

export function WhatWeBuild() {
  const categories = [
    {
      title: 'AI Systems',
      description: 'Digital intelligence and AI technologies engineered for the future.',
      icon: <Network className="w-6 h-6 text-[#0047FF]" />,
    },
    {
      title: 'Digital Products',
      description: 'Practical products designed around real user needs and problems.',
      icon: <Blocks className="w-6 h-6 text-white" />,
    },
    {
      title: 'Connected Experiences',
      description: 'Platforms that enable seamless communication and interaction.',
      icon: <Globe className="w-6 h-6 text-[#888888]" />,
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-32 bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
            className="text-xl text-[#888888] font-light leading-relaxed"
          >
            BMR Inc. develops technology products that connect people, intelligence and digital experiences.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-10 bg-[#111111] border border-white/5 rounded-sm hover:bg-[#1a1a1a] transition-colors duration-500 flex flex-col h-full"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.4 
                }}
                className="w-14 h-14 bg-black/50 border border-white/5 rounded-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500"
              >
                {cat.icon}
              </motion.div>
              <h3 className="text-xl font-medium text-white mb-4 tracking-wide">{cat.title}</h3>
              <p className="text-[#888888] leading-relaxed font-light flex-grow">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
