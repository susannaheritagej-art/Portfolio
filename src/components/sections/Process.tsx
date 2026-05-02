import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    title: 'Discovery & Audit',
    desc: "We deep-dive into your analytics, tech stack, and customer behavior to identify every conversion leak and untapped growth opportunity.",
    color: 'bg-brand-purple'
  },
  {
    title: 'Strategy & Design',
    desc: "We engineer a custom growth roadmap and premium UI/UX design that doesn't just look world-class, but is architected to perform.",
    color: 'bg-brand-blue'
  },
  {
    title: 'Build & Optimize',
    desc: "Our senior developers launch high-performance Shopify stores and growth marketing channels with a focus on speed, stability, and scale.",
    color: 'bg-brand-accent'
  },
  {
    title: 'Scale & Grow',
    desc: "Continuous monitoring, A/B testing, and growth marketing execution to ensure your brand dominates its niche and scales predictably.",
    color: 'bg-brand-purple'
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="sticky top-40">
            <div className="inline-block px-4 py-1.5 bg-brand-purple/10 rounded-full mb-8">
              <span className="text-[10px] font-caps font-bold tracking-[.2em] text-brand-purple uppercase">HOW WE WORK</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-[0.95] mb-8 tracking-tighter">
              A system built for<br />
              <span className="text-editorial-italic font-light italic text-brand-purple">serious growth.</span>
            </h2>
            <p className="text-lg text-brand-dark/50 max-w-sm leading-relaxed">
              We've refined our process over 50+ successful launches to ensure every project is delivered with precision and performance.
            </p>
          </div>
        </div>

        <div className="relative pt-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-[28px] top-0 bottom-0 w-px bg-brand-dark/5" />
          <motion.div 
            className="absolute left-[20px] md:left-[28px] top-0 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-purple origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative pl-16 md:pl-24"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Node */}
                <motion.div 
                   className={`absolute left-0 top-0 w-10 md:w-14 h-10 md:h-14 rounded-full ${step.color} z-10 flex items-center justify-center font-display font-bold text-white shadow-xl shadow-brand-purple/20`}
                   whileInView={{ scale: [0.8, 1.2, 1] }}
                   transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {i + 1}
                </motion.div>

                <div className="group">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-brand-purple transition-colors">{step.title}</h3>
                  <p className="text-lg text-brand-dark/60 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
