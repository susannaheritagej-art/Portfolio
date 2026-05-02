import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LiquidBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-brand-bg" />
      
      {/* Liquid Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-purple/5 blur-[120px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[120px] rounded-full"
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-purple-500/5 blur-[100px] rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M-100 100 Q 200 300 500 100 T 1100 300"
          stroke="url(#purple-gradient)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M-100 100 Q 200 300 500 100 T 1100 300",
              "M-100 300 Q 200 100 500 300 T 1100 100",
              "M-100 100 Q 200 300 500 100 T 1100 300"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-100 500 Q 300 700 700 500 T 1200 700"
          stroke="url(#purple-gradient)"
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0.5 }}
          animate={{
            d: [
              "M-100 500 Q 300 700 700 500 T 1200 700",
              "M-100 700 Q 300 500 700 700 T 1200 500",
              "M-100 500 Q 300 700 700 500 T 1200 700"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B21A8" stopOpacity="0" />
            <stop offset="50%" stopColor="#6B21A8" stopOpacity="1" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-purple/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [null, "-20%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
        />
      ))}

      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Dynamic Scanline */}
      <motion.div 
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent"
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
