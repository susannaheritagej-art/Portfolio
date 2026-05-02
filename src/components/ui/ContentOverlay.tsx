import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface ContentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  category?: string;
  children: React.ReactNode;
}

export default function ContentOverlay({ isOpen, onClose, title, subtitle, category, children }: ContentOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-brand-dark/95 backdrop-blur-md cursor-pointer"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-y-0 right-0 z-[120] w-full lg:w-1/2 bg-white flex flex-col p-6 md:p-16 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="flex flex-col gap-2">
                {category && (
                  <span className="text-[10px] font-caps tracking-[.3em] text-brand-purple uppercase font-bold">
                    {category}
                  </span>
                )}
                <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-brand-dark">
                  {title}
                </h3>
              </div>
              
              <button 
                onClick={onClose}
                className="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-500 group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="flex-1">
              {subtitle && (
                <p className="text-2xl font-display font-medium text-brand-dark/50 mb-12 italic playfair leading-tight">
                  {subtitle}
                </p>
              )}
              
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-p:text-brand-dark/70 prose-p:leading-relaxed">
                {children}
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-display tracking-[.4em] uppercase text-brand-dark/30">Next Step</span>
                <button 
                   onClick={() => {
                     onClose();
                     window.dispatchEvent(new CustomEvent('toggle-contact'));
                   }}
                   className="text-brand-dark font-display font-black tracking-tighter text-xl hover:text-brand-purple transition-colors flex items-center gap-2 group"
                >
                  Request a Custom Strategy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
