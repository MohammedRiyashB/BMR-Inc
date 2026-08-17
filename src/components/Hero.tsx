import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ParticleNetwork } from './ParticleNetwork';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for a premium feel
  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Deep background layer (moves slowly opposite to mouse)
  const bgX = useTransform(springX, [-1000, 1000], [25, -25]);
  const bgY = useTransform(springY, [-1000, 1000], [25, -25]);

  // Mid glow layer (moves slightly with the mouse)
  const midX = useTransform(springX, [-1000, 1000], [-15, 15]);
  const midY = useTransform(springY, [-1000, 1000], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate mouse position relative to center of screen
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-12"
      onMouseMove={handleMouseMove}
    >
      {/* Abstract 3D / Particles Background with Parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }} 
        className="absolute inset-[-5%] w-[110%] h-[110%] z-0 pointer-events-none"
      >
        <ParticleNetwork />
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-10" />
      <motion.div 
        style={{ x: midX, y: midY }}
        className="absolute inset-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(255,255,255,0.03)] via-transparent to-transparent pointer-events-none z-10" 
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start justify-center">
        
        {/* Huge Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-medium leading-[1.05] tracking-tight text-white max-w-5xl"
        >
          Building <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#888888]">Intelligence</span> <br />
          for the <br className="hidden md:block"/>
          Future.
        </motion.h1>

        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 text-lg md:text-xl text-[#888888] max-w-2xl leading-relaxed font-light"
        >
          BMR Inc. develops intelligent technologies, digital platforms, and future-focused products engineered for the next generation.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Link 
            to="/#about"
            className="min-w-[44px] min-h-[44px] px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-sm text-center flex items-center justify-center gap-2 group"
          >
            Explore BMR
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
            to="/#products"
            className="min-w-[44px] min-h-[44px] px-8 py-4 bg-transparent text-white border border-white/20 text-sm font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300 rounded-sm text-center flex items-center justify-center"
          >
            Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
