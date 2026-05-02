import { motion } from 'motion/react';
import { X, Send, Mail, Phone, MessageCircle, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ContactOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactOverlay({ isOpen, onClose }: ContactOverlayProps) {
  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: isOpen ? 0 : '100%' }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-brand-dark flex flex-col p-6 md:p-12 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center">
                <img src="/logo.png" className="w-6 h-6 object-contain" alt="Gela" />
            </div>
            <span className="text-white font-display font-black tracking-tighter text-xl underline decoration-brand-purple/50 underline-offset-4 decoration-2">GET IN TOUCH</span>
        </div>
        
        <button 
          onClick={onClose}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-500 group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Side: Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -50 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter mb-12">
            Let's scale your <br />
            <span className="text-brand-purple italic font-light playfair">revenue.</span>
          </h2>
          
          <p className="text-xl text-white/50 mb-16 max-w-md font-display leading-relaxed">
            We are selective with our partners. If you're serious about growth, let's talk economics.
          </p>

          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-caps tracking-[0.4em] text-brand-purple uppercase mb-4">Direct Lines</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:gelageladigitals.info@gmail.com" className="text-2xl md:text-3xl text-white hover:text-brand-purple transition-colors font-display font-medium">gelageladigitals.info@gmail.com</a>
                <a href="tel:+2347018952827" className="text-2xl md:text-3xl text-white hover:text-brand-purple transition-colors font-display font-medium">+234 701 895 2827</a>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-caps tracking-[0.4em] text-brand-purple uppercase mb-6">Social Capital</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/gela_digital/#" },
                  { icon: MessageCircle, href: "https://wa.me/2347018952827" },
                  { icon: Linkedin, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-purple hover:border-brand-purple transition-all duration-500 hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
           transition={{ delay: 0.6, duration: 0.8 }}
           className="relative"
        >
          <form 
            action="https://submit-form.com/prOiQyUgk" 
            method="POST"
            className="bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[3rem] backdrop-blur-xl relative"
          >
            <div className="space-y-10">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-brand-purple focus:outline-none transition-all placeholder:text-white/20" 
                />
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-brand-purple focus:outline-none transition-all placeholder:text-white/20" 
                />
              </div>

              <div className="relative group">
                <input 
                  type="url" 
                  name="store_url" 
                  placeholder="Store URL (Optional)"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-brand-purple focus:outline-none transition-all placeholder:text-white/20" 
                />
              </div>

              <div className="relative group">
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  placeholder="How can we scale you?"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-brand-purple focus:outline-none transition-all placeholder:text-white/20 resize-none" 
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-brand-purple text-white rounded-2xl font-display font-black tracking-[0.3em] text-xs hover:bg-brand-blue transition-all duration-500 shadow-2xl shadow-brand-purple/20 flex items-center justify-center gap-3 group"
              >
                SUBMIT BRIEF <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="mt-8 text-center text-white/30 text-[10px] font-display uppercase tracking-widest">
              We usually respond within 12 hours.
            </p>
          </form>

          {/* Decorative Gradient */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/10 blur-[120px] pointer-events-none" />
        </motion.div>
      </div>

      <div className="mt-auto pt-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex flex-col gap-2">
            <span className="text-white/20 text-[10px] font-display tracking-[0.5em] uppercase">Gela Digitals Group</span>
            <span className="text-white/50 text-xs">© 2026. All rights reserved. Shopify Plus Partner.</span>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/40 text-[10px] font-display tracking-widest uppercase">Currently taking new projects</span>
        </div>
      </div>
    </motion.div>
  );
}
