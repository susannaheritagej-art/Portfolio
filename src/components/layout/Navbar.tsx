import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Menu, X, ArrowRight, Globe, MessageCircle } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const navLinks = [
  { name: 'Our Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // ScrollSpy Logic
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }

    if (href === '#contact') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('toggle-contact'));
      setIsMobileMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const topOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-brand-dark py-2 px-6 flex justify-between items-center text-[11px] font-sans text-white/80 tracking-wider">
        <div className="flex items-center gap-4">
          <a href="mailto:gelageladigitals.info@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={12} className="text-brand-purple" />
            gelageladigitals.info@gmail.com
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="https://wa.me/2347018952827" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MessageCircle size={12} className="text-brand-purple" />
            WhatsApp: +234 701 895 2827
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 py-4 px-6 md:px-12 flex justify-between items-center h-20 relative overflow-hidden ${isScrolled ? 'glass-nav shadow-lg' : 'bg-white/40 backdrop-blur-md border-b border-purple-100'}`}>
        {/* Scrolled Background Animation Overlay */}
        {isScrolled && (
          <motion.div 
            className="absolute inset-0 bg-brand-purple/5 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(107,33,168,0.1),transparent_70%)]"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}

        <Magnetic>
          <a 
            href="/" 
            onClick={(e) => handleNavLinkClick(e, '/')}
            className="flex items-center gap-3 group relative z-10 transition-transform duration-500"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              {/* Elegant rotation effect around the logo */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-brand-purple/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative z-10 bg-white p-1 shadow-xl">
                <img 
                  src="/logo.png" 
                  alt="Gela Digitals" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-tr', 'from-brand-purple', 'to-brand-blue');
                  }}
                />
                <Globe className="text-white w-5 h-5 absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-3xl font-display font-black tracking-tighter" style={{ letterSpacing: '-0.06em' }}>
                GELA <span className="text-brand-purple">DIGITALS</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-display font-bold tracking-[0.4em] uppercase text-brand-purple/60 mt-1">Shopify Partner Agency</span>
            </div>
          </a>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8 text-[13px] font-display font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`transition-all duration-300 relative group flex items-center gap-1 ${
                  activeSection === link.href ? 'text-brand-purple' : 'hover:text-brand-purple'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-purple transition-all duration-500 ease-out ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
                <motion.span 
                  className={`w-1 h-1 rounded-full bg-brand-purple transition-opacity ${
                    activeSection === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  initial={false}
                  animate={{ scale: activeSection === link.href ? 1.5 : 1 }}
                />
              </a>
            ))}
          </div>
          <Magnetic strength={0.25}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-contact'))}
              className="px-6 py-2.5 bg-brand-dark text-white text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-brand-purple transition-all duration-300 rounded-full"
            >
              GET IN TOUCH
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-brand-dark/5'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden fixed inset-0 z-[100] bg-brand-dark p-12 flex flex-col justify-center gap-10 overflow-hidden"
          >
            {/* Background Accent for mobile menu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-purple/10 blur-[150px] rounded-full -z-10" />
            
            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white"
            >
                <X size={32} />
            </button>

            <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                    className={`text-5xl md:text-7xl font-display font-black tracking-tighter transition-colors ${
                    activeSection === link.href ? 'text-brand-purple' : 'text-white'
                    }`}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                    {link.name}
                </motion.a>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col gap-6"
            >
                <div className="h-px bg-white/10 w-full mb-4" />
                <a href="mailto:gelageladigitals.info@gmail.com" className="text-white/60 font-display font-bold">+234 701 895 2827</a>
                <button
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.dispatchEvent(new CustomEvent('toggle-contact'));
                    }}
                    className="w-full py-6 bg-brand-purple text-white rounded-2xl font-display font-black tracking-widest text-[14px] uppercase flex items-center justify-center gap-3"
                >
                    GET IN TOUCH <ArrowRight size={20} />
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
