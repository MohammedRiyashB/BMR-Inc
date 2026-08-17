import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC to close and Body Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Company', href: '/#about' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Products', href: '/#products' },
    { name: 'Research', href: '/#vision' },
    { name: 'Journey', href: '/#journey' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0047FF] rounded-sm" aria-label="BMR Inc. Home">
          <img src="/logo.png?v=5" alt="" className="h-10 w-auto object-contain" aria-hidden="true" />
          <span className="font-semibold tracking-wide text-white uppercase text-sm">BMR Inc.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-[#888888] hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full h-[100dvh] bg-[#050505] flex flex-col py-8 px-6 lg:hidden gap-6 overflow-y-auto pb-32"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-[#888888] hover:text-white focus:outline-none focus:text-white min-h-[44px] flex items-center"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
