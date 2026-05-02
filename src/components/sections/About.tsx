import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContentOverlay from '../ui/ContentOverlay';

export default function About() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-brand-purple/10 rounded-full mb-8">
            <span className="text-[10px] font-caps font-bold tracking-[.2em] text-brand-purple uppercase">ABOUT GELA DIGITALS</span>
          </div>
          <p className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
            We are a Shopify Partner agency at the intersection of design, technology, and growth marketing.
          </p>
          <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed max-w-xl mb-10">
            <p>
              We don't build generic stores. We engineer high-converting ecommerce systems for brands that refuse to settle. Our approach combines data-led strategy with world-class design to create experiences that actually move the needle.
            </p>
          </div>

          <button 
            onClick={() => setIsOverlayOpen(true)}
            className="group flex items-center gap-3 text-brand-dark font-display font-black tracking-tighter text-xl hover:text-brand-purple transition-all"
          >
            Our Philosophy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-bg bg-brand-purple/20 flex items-center justify-center text-xs font-bold text-brand-purple overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Team Member" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-brand-dark">Shopify Partner Since 2021</p>
              <p className="text-xs text-brand-dark/50 uppercase tracking-widest">Global Expertise · Local Focus</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="aspect-square relative flex items-center justify-center">
            {/* Animated Orbitals */}
            <div className="absolute inset-0 border border-brand-dark/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-10 border border-brand-purple/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-20 border border-brand-blue/10 rounded-full animate-[spin_25s_linear_infinite]" />
            
            <motion.div 
               className="relative z-10 w-48 h-48 bg-white rounded-full p-6 shadow-2xl flex items-center justify-center overflow-hidden"
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/logo.png" 
                alt="Gela Digitals" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden">
                 <Globe size={60} className="text-brand-purple animate-pulse" />
              </div>
            </motion.div>

            {/* Orbiting Dots */}
            {[...Array(6)].map((_, i) => (
               <motion.div
                 key={i}
                 className={`absolute w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-brand-purple' : 'bg-brand-blue'}`}
                 animate={{
                   rotate: 360
                 }}
                 transition={{
                   duration: 10 + i * 2,
                   repeat: Infinity,
                   ease: "linear"
                 }}
                 style={{
                   width: '100%',
                   transformOrigin: 'center center'
                 }}
               >
                 <div className={`w-3 h-3 rounded-full absolute left-0 ${i % 2 === 0 ? 'bg-brand-purple shadow-[0_0_10px_rgba(107,33,168,0.8)]' : 'bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]'}`} />
               </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ContentOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        title="Our Philosophy"
        subtitle="We build high-performance growth engines, not just websites."
        category="Deep Dive"
      >
        <div className="space-y-12">
          <section>
            <h4 className="text-2xl font-display font-bold text-brand-dark mb-4">The Conversion-First Approach</h4>
            <p className="text-brand-dark/70 leading-relaxed">
              Most agencies focus on how a site looks. We focus on how it performs. Aesthetic is useless if it doesn't guide the user towards a conversion. We use data-driven design patterns and psychological triggers to minimize friction and maximize trust.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-brand-dark/[0.02] rounded-3xl border border-brand-dark/5">
              <CheckCircle2 className="text-brand-purple mb-4" />
              <h5 className="font-bold text-brand-dark mb-2">Technical Rigor</h5>
              <p className="text-sm text-brand-dark/60">Pixel-perfect development with focus on page speed, mobile responsiveness, and SEO-optimized architecture.</p>
            </div>
            <div className="p-8 bg-brand-dark/[0.02] rounded-3xl border border-brand-dark/5">
              <CheckCircle2 className="text-brand-purple mb-4" />
              <h5 className="font-bold text-brand-dark mb-2">Strategic Growth</h5>
              <p className="text-sm text-brand-dark/60">We don't just hand over a site. We provide the roadmap for scaling post-launch through CRO and technical support.</p>
            </div>
          </div>

          <section>
            <h4 className="text-2xl font-display font-bold text-brand-dark mb-4">Shopify Plus Expertise</h4>
            <p className="text-brand-dark/70 leading-relaxed">
              As specialized Shopify Partners, we know the ecosystem inside out. From complex app integrations and custom checkout extensions to headless commerce builds, we have the technical chops to handle enterprise-level requirements.
            </p>
          </section>
          
          <div className="aspect-video rounded-3xl bg-brand-dark/5 overflow-hidden relative overflow-hidden group">
            {/* Placeholder for an agency reel or workspace image */}
             <div className="absolute inset-0 bg-brand-purple/10 flex items-center justify-center">
                <Globe className="text-brand-purple/20 animate-pulse" size={100} />
             </div>
             <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60 mix-blend-multiply" />
          </div>
        </div>
      </ContentOverlay>
    </section>
  );
}
