import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Vicky Stiwell",
    role: "CEO @ Vitality Vanguard",
    niche: "Health & Wellness",
    quote: "Gela Digitals transformed our digital presence. Since launching the Shopify Plus store, our mobile conversion rate has nearly doubled. Their strategic approach to checkout optimization was the game-changer we needed.",
    label: "CONVERSION GROWTH",
    metrics: "+94% CR",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Yama Kits Team",
    role: "Global Ecommerce @ Yamakits",
    niche: "Tech Apparel",
    quote: "Working with Gela Digitals was seamless. They understood our brand aesthetic perfectly and built a high-performance store that manages our global inventory with ease.",
    label: "UI/UX DESIGN",
    metrics: "Sub-2s",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Senior Lead @ Bombas",
    niche: "Enterprise Apparel",
    quote: "The technical expertise Gela Digitals brought to our Shopify backend integration saved us months of manual work. A truly professional partner for high-scale ecommerce.",
    label: "TECHNICAL BUILD",
    metrics: "100%",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    name: "Alex Rivett",
    role: "Marketing Director @ Sopotex",
    niche: "Sustainable Fashion",
    quote: "Gela Digitals didn't just build a store; they built a growth engine. Our conversion rate increased by 40% within the first month of the new site launch.",
    label: "STRATEGIC GROWTH",
    metrics: "+40%",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-brand-dark py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.02] font-display font-black text-[40vw] md:text-[30vw] select-none pointer-events-none text-white leading-none">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 md:mb-32 text-center lg:text-left max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-brand-purple/20 rounded-full mb-8">
            <span className="text-[10px] font-caps font-bold tracking-[.4em] text-brand-purple uppercase">PROVEN RESULTS</span>
          </div>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-8xl font-display font-black leading-[1.1] md:leading-[0.85] mb-8 tracking-tighter text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Trusted by global<br />
            <span className="italic font-light text-brand-purple playfair">ecommerce leaders.</span>
          </motion.h2>
          <p className="text-white/40 text-base md:text-xl font-display max-w-2xl">
            We don't just build stores; we engineer competitive advantages. Our work for high-scale Shopify Plus brands speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group p-8 md:p-16 lg:p-20 bg-brand-dark transition-all duration-700 relative overflow-hidden border border-transparent hover:border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                type: "spring", 
                stiffness: 100,
                scale: { duration: 0.4 }
              }}
            >
              <div className="flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <span className="inline-block text-[8px] md:text-[9px] font-caps font-bold tracking-[0.3em] bg-brand-purple text-white px-3 py-1 rounded-full whitespace-nowrap">
                        {t.label}
                      </span>
                      <span className="inline-block text-[8px] md:text-[9px] font-caps font-bold tracking-[0.3em] text-white/40 border border-white/10 px-3 py-1 rounded-full group-hover:border-brand-purple/50 group-hover:text-white transition-colors whitespace-nowrap">
                        {t.niche}
                      </span>
                    </div>
                  </div>
                  <div className="text-white font-display font-black text-2xl md:text-4xl tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-700 group-hover:text-brand-purple flex flex-col items-end">
                    {t.metrics}
                    <span className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase font-bold opacity-50">Impact</span>
                  </div>
                </div>
                
                <div className="relative mb-12 md:mb-16">
                  <Quote size={40} className="absolute -top-6 -left-6 text-brand-purple/20 group-hover:text-brand-purple/40 transition-colors hidden sm:block" />
                  <p className="text-lg sm:text-xl md:text-3xl text-white/90 font-light leading-[1.4] md:leading-[1.3] italic tracking-tight playfair relative z-10">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-8 md:pt-12 border-t border-white/5">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative">
                      {/* Purple Glow Ring */}
                      <motion.div 
                        className="absolute inset-[-4px] rounded-full border-2 border-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-bg relative z-10 shadow-xl overflow-hidden flex items-center justify-center">
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-display font-black text-base md:text-xl tracking-tight mb-1">{t.name}</p>
                      <p className="text-[9px] md:text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-purple transition-colors">{t.role}</p>
                    </div>
                  </div>
                  
                  {/* Subtle Agency Watermark */}
                  <div className="opacity-5 group-hover:opacity-10 transition-opacity duration-700 hidden sm:block">
                     <img src="/logo.png" className="w-6 h-6 md:w-8 md:h-8 object-contain invert grayscale" alt="Gela Logo" />
                  </div>
                </div>
              </div>
              
              {/* Animated Background Fluid Accent */}
              <motion.div 
                 className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none"
                 animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
