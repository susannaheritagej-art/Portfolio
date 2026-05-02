import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Top Line */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:rotate-[360deg]">
                <Globe className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-2xl text-white tracking-tight">
                  GELA <span className="text-brand-purple">DIGITALS</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-purple/60">Global Shopify Partner</span>
              </div>
            </a>
            <p className="text-white/40 max-w-sm mb-12 leading-relaxed text-sm">
              Convert-focused Shopify Partner helping ecommerce brands scale through design-led engineering, CRO, and strategic digital experiences.
            </p>
            <div className="flex gap-4">
               {[
                 { name: 'Instagram', url: 'https://www.instagram.com/gela_digital/#' },
                 { name: 'WhatsApp', url: 'https://wa.me/2347018952827' },
                 { name: 'LinkedIn', url: '#' }
               ].map((social) => (
                 <a 
                   key={social.name} 
                   href={social.url} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-xs font-caps tracking-widest text-white/40 hover:text-white hover:tracking-[0.15em] transition-all"
                 >
                   {social.name}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest mb-8 uppercase text-[10px]">Navigation</h4>
            <ul className="space-y-4">
              {['Our Work', 'Services', 'About', 'Results', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      if (item === 'Contact') {
                        window.dispatchEvent(new CustomEvent('toggle-contact'));
                      } else {
                        const idMap: Record<string, string> = {
                          'Our Work': 'work',
                          'Services': 'services',
                          'About': 'about',
                          'Results': 'results',
                          'Contact': 'contact'
                        };
                        const id = idMap[item] || item.toLowerCase().replace(' ', '');
                        const element = document.getElementById(id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-white/50 hover:text-brand-purple transition-all hover:pl-2 flex items-center group text-left w-full"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-purple mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest mb-8 uppercase text-[10px]">Contact Us</h4>
            <div className="space-y-6">
              <a href="mailto:gelageladigitals.info@gmail.com" className="block text-white/50 hover:text-brand-purple transition-colors">
                 gelageladigitals.info@gmail.com
              </a>
              <a href="tel:+2347018952827" className="block text-white/50 hover:text-brand-purple transition-colors">
                 +234 701 895 2827
              </a>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] mt-4">
                Lagos · London · Global
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-caps tracking-widest text-white/20">
          <p>© {currentYear} GELA DIGITALS · Shopify Partner · Ecommerce & Web3 Agency</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none" />
    </footer>
  );
}
