import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const stats = [
  { label: 'Conversion Rate', value: '+41%', suffix: 'Increase' },
  { label: 'Organic Traffic', value: '+62%', suffix: 'Growth' },
  { label: 'Average Order Value', value: '+28%', suffix: 'Lift' },
  { label: 'ROAS Improvement', value: '2.7x', suffix: 'Average' },
];

export default function Results() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="results" ref={containerRef} className="py-32 px-6 md:px-12 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-brand-purple/10 rounded-full mb-8">
            <span className="text-[10px] font-caps font-bold tracking-[.2em] text-brand-purple uppercase">REAL GROWTH. REAL RESULTS.</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[1.1] md:leading-tight mb-8 tracking-tighter text-center">
            Numbers that<br />
            <span className="font-light italic text-brand-purple playfair">speak for themselves.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-6 md:p-10 bg-white rounded-[2rem] border border-brand-dark/5 text-center group relative overflow-hidden shadow-sm flex flex-col justify-center items-center min-h-[180px] md:min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              {/* Shimmer & Background Accents */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-x-[-100%] top-0 bottom-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none" />
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-purple/20 transition-all rounded-[2rem] duration-500 scale-95 group-hover:scale-100" />
              
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 flex flex-col items-center">
                <div className="mb-4">
                    <p className="text-4xl md:text-6xl font-display font-black text-brand-purple tracking-tighter leading-none mb-1">
                        {stat.value}
                    </p>
                    <div className="h-1.5 w-8 bg-brand-purple/20 rounded-full mx-auto group-hover:w-12 transition-all duration-500" />
                </div>
                
                <div className="space-y-1">
                  <p className="text-[10px] md:text-[11px] font-display font-bold uppercase tracking-[0.2em] text-brand-dark/50 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-[9px] md:text-[10px] text-brand-dark/30 font-medium italic playfair tracking-widest uppercase">
                    {stat.suffix}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Store Architecture Transformation</h3>
            <p className="text-brand-dark/50 max-w-xl mx-auto">Improved trust flow, UX structure, and conversion architecture designed to scale with your brand.</p>
          </div>

          <div 
            ref={sliderRef}
            className="relative aspect-[16/10] bg-brand-dark rounded-3xl overflow-hidden cursor-ew-resize select-none border-4 border-brand-dark shadow-2xl"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
          >
            {/* After Image */}
            <img 
              src="https://uploads.onecompiler.io/43psmc9e9/44gvgspzu/Screenshot%202025-12-20%20002922.png" 
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image with Clip */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://uploads.onecompiler.io/43psmc9e9/44hye9d8a/Screenshot%202025-11-30%20012925.png" 
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%` }}
              />
            </div>
            
            {/* Divider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-brand-purple z-20 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(107,33,168,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center -translate-x-1/2 shadow-xl ring-4 ring-white/10">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-white" />
                  <div className="w-0.5 h-3 bg-white" />
                </div>
              </div>
              <div className="absolute top-10 left-10 bg-brand-dark/80 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white font-bold tracking-widest whitespace-nowrap">
                DRAG TO COMPARE
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-10 bg-brand-dark/40 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-bold tracking-widest">
                BEFORE
            </div>
            <div className="absolute bottom-6 right-6 z-10 bg-brand-purple/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-bold tracking-widest">
                AFTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
