import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Globe } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; type: string }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = 15;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 100 + 40,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.08 + 0.04,
          type: ['circle', 'triangle', 'line'][Math.floor(Math.random() * 3)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = Math.random() > 0.5 ? '#6B21A8' : '#3B82F6';
        ctx.lineWidth = 1;

        if (p.type === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (p.type === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x + p.size, p.y + p.size);
          ctx.lineTo(p.x - p.size, p.y + p.size);
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(p.x - p.size, p.y - p.size);
          ctx.lineTo(p.x + p.size, p.y + p.size);
          ctx.stroke();
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;
        
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 overflow-hidden flex items-center bg-[#faf8ff]">
      {/* Premium Breathing Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-brand-purple/10 blur-[130px] rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-[10%] -right-[10%] w-[55%] h-[55%] bg-brand-blue/10 blur-[160px] rounded-full"
          animate={{
            x: [0, -50, 0],
            y: [0, -70, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-30" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center relative z-10">
        <motion.div
           className="col-span-12 lg:col-span-10 xl:col-span-8"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           style={{ y: y1 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-[#7C3AED]/10 rounded-full mb-8">
            <span className="text-[10px] font-display font-bold tracking-[0.3em] text-[#7C3AED] uppercase">
              STRATEGIC SHOPIFY & GROWTH ENGINEERING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.1] md:leading-[0.85] mb-10 font-display font-black tracking-tighter">
            Ecommerce that<br />
            <span className="italic font-light text-brand-purple playfair">converts at scale.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-[24px] text-brand-dark/70 font-display font-medium leading-relaxed mb-12 max-w-2xl px-2 md:px-0">
            Gela Digitals is a specialized Shopify Partner helping premium brands build high-performing storefronts through conversion-centric design and technical excellence.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-20">
            <Magnetic strength={0.2}>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-contact'))}
                className="px-10 py-5 bg-brand-purple text-white text-[14px] font-display font-black tracking-widest uppercase hover:bg-brand-dark transition-all duration-500 shadow-2xl shadow-brand-purple/30 flex items-center gap-3 group rounded-full"
              >
                START A PROJECT <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a 
                href="#work" 
                className="px-10 py-5 border-2 border-brand-dark text-brand-dark text-[14px] font-display font-black tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-all duration-500 rounded-full"
              >
                VIEW CASE STUDIES
              </a>
            </Magnetic>
          </div>

          <div className="flex flex-wrap gap-16 border-t border-purple-100 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-4xl font-display font-black text-brand-purple">94%</p>
              <p className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-[0.2em]">Conversion Lift</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-4xl font-display font-black text-brand-purple">2.4s</p>
              <p className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-[0.2em]">Faster Load</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-4xl font-display font-black text-brand-purple">12+</p>
              <p className="text-[11px] font-display font-bold text-gray-400 uppercase tracking-[0.2em]">Global Markets</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
