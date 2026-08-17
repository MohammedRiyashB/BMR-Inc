import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#050505] pt-32 pb-20 px-6">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-white/10 tracking-tighter"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-medium text-white tracking-tight mt-4 mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#888888] mb-10 max-w-md mx-auto"
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            to="/"
            className="px-8 py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-sm inline-block"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
