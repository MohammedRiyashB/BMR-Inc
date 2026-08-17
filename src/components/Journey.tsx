import { motion } from 'motion/react';

export function Journey() {
  const milestones = [
    {
      year: '2026',
      title: 'BMR Inc. technology initiative',
      description: 'Establishment of the core technology and digital development initiative.'
    },
    {
      year: '2026',
      title: 'UmeTVChat development',
      description: 'Creation of a new random video and text chat platform.'
    },
    {
      year: '2026',
      title: 'EARTH AI development',
      description: 'Research and development of intelligent systems and computing projects.'
    }
  ];

  return (
    <section id="journey" className="py-32 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#555555] uppercase block mb-4">
            Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
            The Journey
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] bg-[#0047FF] rounded-full ring-4 ring-[#111111] z-10" />
                
                {/* Content */}
                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="text-sm font-semibold tracking-widest text-[#0047FF] mb-2">{item.year}</div>
                  <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-[#888888] font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
