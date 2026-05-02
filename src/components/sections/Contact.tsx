import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            className="bg-brand-dark rounded-[4rem] p-12 md:p-32 relative overflow-hidden text-center group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#6B21A8 1px, transparent 1px), linear-gradient(90deg, #6B21A8 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/20 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-[10px] font-display font-bold tracking-[0.6em] text-brand-purple uppercase mb-8 block">THE FINALE</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-display font-black text-white mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
                        READY TO SCALE<br />
                        <span className="text-brand-purple italic playfair font-light tracking-normal">your revenue?</span>
                    </h2>
                </motion.div>
                <p className="text-lg md:text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-display font-medium leading-relaxed">
                    Stop guessing. Start growing. Let's audit your funnel and build a conversion machine that dominates your niche.
                </p>
                
                <div className="flex flex-col items-center gap-10">
                    <Magnetic strength={0.2}>
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('toggle-contact'))}
                            className="px-12 py-7 bg-brand-purple text-white rounded-full font-display font-black tracking-[0.2em] text-[14px] uppercase hover:bg-white hover:text-brand-dark transition-all duration-700 shadow-2xl shadow-brand-purple/40 group relative flex items-center gap-4"
                        >
                            <span className="relative z-10">PROJECT INQUIRY</span>
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                            <div className="absolute inset-0 rounded-full bg-brand-purple animate-ping opacity-10 group-hover:opacity-0" />
                        </button>
                    </Magnetic>
                    
                    <div className="flex flex-wrap justify-center gap-10 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                        <a href="https://wa.me/2347018952827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-xs font-display font-bold tracking-widest uppercase hover:text-brand-purple transition-colors">
                            <MessageCircle size={16} /> WhatsApp Direct
                        </a>
                        <a href="mailto:gelageladigitals.info@gmail.com" className="flex items-center gap-2 text-white text-xs font-display font-bold tracking-widest uppercase hover:text-brand-purple transition-colors">
                            <Mail size={16} /> Business Email
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
