import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface FloatingTextProps {
  text: string;
  top: string;
  left?: string;
  right?: string;
  speed?: number;
  opacity?: number;
  rotate?: number;
}

export default function FloatingText({ text, top, left, right, speed = 100, opacity = 0.03, rotate = 0 }: FloatingTextProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 5000], [0, speed]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0 font-display font-black whitespace-nowrap text-brand-dark uppercase overflow-hidden select-none"
      style={{ 
        top, 
        left, 
        right, 
        opacity, 
        y, 
        rotate: `${rotate}deg`,
        fontSize: '20vw',
        letterSpacing: '-0.05em',
        lineHeight: 0.8
      }}
    >
      {text}
    </motion.div>
  );
}
