import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { MouseEvent } from 'react';
import { ArrowRight, Video, Cpu } from 'lucide-react';

export function Products() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="products" 
      className="py-32 bg-[#111111] relative border-t border-white/5 group/section overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition duration-500 opacity-0 group-hover/section:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.04),
              transparent 80%
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-[#0047FF] rounded-sm" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#888888] uppercase">
              Current Portfolio
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            Built by BMR Inc.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* Product 01 */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
            className="group relative bg-white/[0.02] backdrop-blur-xl rounded-sm border border-white/10 hover:border-[#0047FF]/40 hover:shadow-[0_0_40px_rgba(0,71,255,0.15)] transition-all duration-500 overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.15em] text-[#888888] uppercase mb-4 block">
                  Social Technology
                </span>
                <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                  UmeTVChat
                </h3>
                <p className="text-lg text-[#888888] leading-relaxed max-w-lg mb-12 font-light">
                  An online platform designed to help people meet and communicate through random video and text conversations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <a 
                  href="https://umetvchat.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-sm inline-flex items-center gap-2"
                >
                  Visit UmeTVChat
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="/umetv.wp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 rounded-sm inline-flex items-center gap-2"
                >
                  White Paper
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="text-sm text-[#555555]">
                Support: <a href="mailto:support.umetvchat@gmail.com" className="text-[#888888] hover:text-white transition-colors">support.umetvchat@gmail.com</a>
              </div>
            </div>
            
            {/* Abstract Visual */}
            <div className="flex-1 min-h-[300px] lg:min-h-auto relative bg-black/20 overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 group-hover:border-[#0047FF]/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,71,255,0.03)] to-transparent" />
              <div className="relative z-10 flex items-center justify-center gap-8">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md relative">
                  <div className="absolute inset-0 rounded-full border border-[#0047FF]/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                  <Video className="w-8 h-8 text-white/70" />
                </div>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#0047FF]/50 to-transparent relative">
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#0047FF] rounded-full -translate-y-1/2 animate-[ping_2s_infinite]" />
                </div>
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md relative">
                  <div className="absolute inset-0 rounded-full border border-[#0047FF]/20 animate-ping opacity-20" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <Video className="w-8 h-8 text-white/70" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 02 */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl rounded-sm border border-white/10 hover:border-[#7B00FF]/40 hover:shadow-[0_0_40px_rgba(123,0,255,0.15)] transition-all duration-500 overflow-hidden flex flex-col lg:flex-row-reverse"
          >
            <div className="flex-1 p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[0.15em] text-[#888888] uppercase mb-4 block">
                  Artificial Intelligence
                </span>
                <h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                  EARTH AI
                </h3>
                <p className="text-lg text-[#888888] leading-relaxed max-w-lg mb-12 font-light">
                  An evolving AI technology project focused on intelligent systems, experimentation and next-generation digital intelligence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a 
                  href="mailto:earthaispace@gmail.com"
                  className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 rounded-sm inline-flex items-center gap-2"
                >
                  Explore EARTH AI
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="text-sm text-[#555555] mt-6">
                Contact: <a href="mailto:earthaispace@gmail.com" className="text-[#888888] hover:text-white transition-colors">earthaispace@gmail.com</a>
              </div>
            </div>
            
            {/* Abstract Visual */}
            <div className="flex-1 min-h-[300px] lg:min-h-auto relative bg-black/20 overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-r border-white/10 group-hover:border-[#7B00FF]/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-[rgba(123,0,255,0.03)] to-transparent" />
              <div className="relative z-10 flex items-center justify-center">
                {/* Core/Network Visualization */}
                <div className="w-40 h-40 relative flex items-center justify-center">
                  <div className="absolute inset-0 border border-white/10 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-1000 ease-in-out" />
                  <div className="absolute inset-4 border border-white/5 rounded-sm -rotate-12 group-hover:rotate-45 transition-transform duration-1000 delay-100 ease-in-out" />
                  <div className="w-16 h-16 bg-[#111111] border border-white/20 flex items-center justify-center z-10 rounded-sm shadow-[0_0_30px_rgba(123,0,255,0.1)]">
                    <Cpu className="w-6 h-6 text-white/80" />
                  </div>
                  {/* Floating particles around core */}
                  <div className="absolute top-0 right-10 w-1 h-1 bg-[#7B00FF] rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/2 -right-4 w-1 h-1 bg-[#0047FF] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
