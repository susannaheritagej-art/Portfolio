/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import LogoGrid from './components/sections/LogoGrid';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Results from './components/sections/Results';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Section from './components/ui/Section';
import FloatingText from './components/ui/FloatingText';
import LiquidBackground from './components/ui/LiquidBackground';
import ContactOverlay from './components/sections/ContactOverlay';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Custom event to open contact overlay from anywhere
    const handleToggleContact = () => setIsContactOpen(true);
    window.addEventListener('toggle-contact', handleToggleContact);

    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // Intersection observer for legacy clip-path reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.clip-path-reveal').forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      window.removeEventListener('toggle-contact', handleToggleContact);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-purple selection:text-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%',
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center p-12"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 mb-8 relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-brand-purple/20" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-t-brand-purple border-r-transparent border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <img src="/logo.png" className="absolute inset-4 object-contain" alt="Gela Digitals" />
              </motion.div>
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white text-3xl font-display font-black tracking-tighter"
                >
                  GELA <span className="text-brand-purple">DIGITALS</span>
                </motion.h2>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-[1px] bg-brand-purple/50 mt-4"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <LiquidBackground />
      
      {/* Background Atmosphere Typography */}
      <FloatingText text="SHOP" top="10%" left="-5%" speed={150} opacity={0.03} rotate={-15} />
      <FloatingText text="CONVERT" top="40%" right="-10%" speed={-200} opacity={0.02} rotate={10} />
      <FloatingText text="GROWTH" top="70%" left="-8%" speed={250} opacity={0.04} rotate={-5} />

      {/* Premium Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Section direction="none">
          <Hero />
        </Section>
        
        <Section direction="up" id="brands">
          <LogoGrid />
        </Section>
        
        <Section direction="left" id="services">
          <Services />
        </Section>
        
        <Section direction="right" id="work">
          <Portfolio />
        </Section>
        
        <Section direction="up" id="results">
          <Results />
        </Section>
        
        <Section direction="left">
          <Testimonials />
        </Section>
        
        <Section direction="right">
          <Process />
        </Section>
        
        <Section direction="up" id="about">
          <About />
        </Section>
        
        <Section direction="bottom" id="contact">
          <Contact />
        </Section>
      </main>
      
      <Footer />

      <AnimatePresence>
        {isContactOpen && (
          <ContactOverlay 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
