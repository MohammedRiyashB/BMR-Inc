import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Facebook, Youtube, BookOpen, AtSign } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/MohammedRiyashB' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/bmrinternational.inc?igsh=cW5tN2liZnNuNnFk' },
    { name: 'Blogspot', icon: <BookOpen size={20} />, href: 'https://mohammedriyashb.blogspot.com/?m=1' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mohammed-riyash-b-55b190366?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Facebook', icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/19GA7kexrU/' },
    { name: 'Threads', icon: <AtSign size={20} />, href: 'https://www.threads.com/@__rexzz_' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: 'https://youtube.com/@riyashmusic?si=gBYSxII5SciPtxWz' }
  ];

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          
          {/* Brand */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png?v=5" alt="BMR Inc. Logo" className="h-10 w-auto object-contain" />
              <span className="font-semibold tracking-wide text-white uppercase text-sm">BMR Inc.</span>
            </div>
            <p className="text-[#888888] font-light text-sm">
              Technology • AI • Digital Innovation
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs text-[#555555]">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-[#888888] hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link to="/#products" className="text-[#888888] hover:text-white transition-colors text-sm">Projects</Link></li>
                <li><Link to="/#technology" className="text-[#888888] hover:text-white transition-colors text-sm">Technology</Link></li>
                <li><Link to="/#about" className="text-[#888888] hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link to="/#vision" className="text-[#888888] hover:text-white transition-colors text-sm">Vision</Link></li>
                <li><Link to="/#contact" className="text-[#888888] hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs text-[#555555]">Products</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="https://umetvchat.web.app/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors text-sm">UmeTVChat</a></li>
                <li><a href="mailto:earthaispace@gmail.com" className="text-[#888888] hover:text-white transition-colors text-sm">EARTH AI</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs text-[#555555]">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="mailto:support.bmrinc@gmail.com" className="text-[#888888] hover:text-white transition-colors text-sm break-all">support.bmrinc@gmail.com</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs text-[#555555]">Legal</h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/privacy-policy" className="text-[#888888] hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-[#888888] hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#555555] text-xs uppercase tracking-widest order-2 md:order-1 text-center md:text-left">
            © 2026 BMR Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 order-1 md:order-2 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555555] hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
