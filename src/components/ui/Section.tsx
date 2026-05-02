import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'bottom' | 'none';
  delay?: number;
}

export default function Section({ children, id, className = "", direction = 'up', delay = 0 }: SectionProps) {
  const variants = {
    hidden: { 
      opacity: 0, 
      ...(direction === 'up' && { y: 100 }),
      ...(direction === 'left' && { x: -100 }),
      ...(direction === 'right' && { x: 100 }),
      ...(direction === 'bottom' && { y: -100 }),
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1], // Epic cubic-bezier for high-end feel
        delay: delay
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
