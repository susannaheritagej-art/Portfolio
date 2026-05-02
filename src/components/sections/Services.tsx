import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Zap, Target, TrendingUp, BarChart, Search, Layers, ShieldCheck, MailOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContentOverlay from '../ui/ContentOverlay';

const mainPlatforms = [
  {
    title: 'Shopify & Shopify Plus',
    desc: "The world's most powerful commerce platform — built for brands ready to scale.",
    gradient: 'from-brand-purple/20 to-transparent',
    details: "We specialize in Shopify's high-tier ecosystem. From theme development to complex backend integrations, we ensure your store is robust, fast, and scalable."
  },
  {
    title: 'Web3 & Headless Commerce',
    desc: 'Future-proof your brand with decentralized storefronts and headless architecture.',
    gradient: 'from-brand-blue/20 to-transparent',
    details: "Headless commerce decouples the frontend from the backend, providing ultimate flexibility in design and ultra-fast page speeds using Hydrogen or custom React frameworks."
  }
];

const services = [
  { 
    title: 'Shopify CRO', 
    desc: 'Conversion rate optimization that turns browsers into buyers', 
    icon: Target,
    fullDesc: 'Our CRO process involves rigorous A/B testing, heatmapping, and user journey analysis. We don\'t just move buttons; we redesign the emotional flow of your store to maximize revenue from existing traffic.'
  },
  { 
    title: 'Product Page Optimization', 
    desc: 'Trust-led design that sells', 
    icon: Layers,
    fullDesc: 'The product page is where the sale happens. We create persuasive PDPs with optimized imagery, social proof integration, and clear value propositions that reduce cart abandonment.'
  },
  { title: 'Ecommerce Growth Strategy', desc: 'Profitable scaling systems', icon: TrendingUp, fullDesc: 'Long-term growth requires a system. We audit your entire funnel to identify bottlenecks and build a sustainable roadmap for acquisition and retention.' },
  { title: 'Email & Retention Marketing', desc: 'LTV-maximizing flows', icon: MailOpen, fullDesc: 'Automate your revenue with Klaviyo. We build advanced segmentation flows and aesthetic campaigns that keep customers coming back.' },
  { title: 'Performance Marketing', desc: 'Paid ads that scale profitably', icon: BarChart, fullDesc: 'Data-driven ad management across Meta, Google, and TikTok, focused on ROAS and incremental growth.' },
  { title: 'SEO & Organic Growth', desc: 'Long-term traffic ownership', icon: Search, fullDesc: 'Technical SEO audits and content strategies designed to help you dominate search results for high-intent keywords.' },
  { title: 'Shopify Store Builds', desc: 'Premium custom development', icon: ShoppingBag, fullDesc: 'End-to-end builds from discovery to launch. We handle the heavy technical lifting so you can focus on your business.' },
  { title: 'Web3 / Headless Dev', desc: 'Next-gen commerce architecture', icon: Zap, fullDesc: 'Cutting-edge development for brands that want to lead. Blockchain integrations and headless speed.' },
  { title: 'Conversion Audits', desc: 'Find and fix revenue leaks', icon: ShieldCheck, fullDesc: 'A comprehensive deep-dive into your analytics and UI to uncover exactly where you are losing money.' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="inline-block px-4 py-1.5 bg-brand-purple/10 rounded-full mb-8">
            <span className="text-[10px] font-caps font-bold tracking-[0.2em] text-brand-purple uppercase">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[1.1] md:leading-[0.9] mb-8 tracking-tighter max-w-2xl">
            Which solution is<br />
            <span className="font-light italic text-brand-purple playfair">best for your brand?</span>
          </h2>
          <p className="text-base md:text-lg text-brand-dark/60 font-sans max-w-xl">
            No two brands are the same. We spend time understanding your goals, ecosystem, and customers before recommending a strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 [perspective:1000px]">
          {mainPlatforms.map((platform, i) => (
            <motion.div
              key={i}
              className={`p-12 rounded-3xl bg-white border border-brand-dark/5 relative overflow-hidden group shadow-sm cursor-pointer transform-gpu`}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedService({ title: platform.title, desc: platform.desc, icon: Zap, fullDesc: platform.details })}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-4">{platform.title}</h3>
                <p className="text-brand-dark/60 mb-8 max-w-sm leading-relaxed">{platform.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-purple group-hover:gap-4 transition-all">
                   LEARN MORE <Zap size={14} className="fill-brand-purple" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-8 bg-white border border-brand-dark/5 rounded-2xl relative overflow-hidden group cursor-pointer transform-gpu"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                y: -8,
                rotateX: -3,
                rotateY: 3,
                scale: 1.03,
                z: 10,
                transition: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-purple transition-all duration-500 group-hover:h-full" />
              <div className="mb-6 w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-500">
                <service.icon size={24} />
              </div>
              <h4 className="text-lg font-display font-bold mb-3 leading-tight transition-colors group-hover:text-brand-purple">{service.title}</h4>
              <p className="text-sm text-brand-dark/50 leading-relaxed">{service.desc}</p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-purple">
                DETAILS <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ContentOverlay
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
        category="Service Details"
        subtitle={selectedService?.desc}
      >
        <div className="space-y-12">
          <section>
            <h4 className="text-2xl font-display font-bold text-brand-dark mb-4">Our Methodology</h4>
            <p className="text-brand-dark/70 leading-relaxed text-lg">
              {selectedService?.fullDesc}
            </p>
          </section>

          <div className="space-y-6">
             <h4 className="text-xl font-display font-bold text-brand-dark">Key Deliverables</h4>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "In-depth market & competitor research",
                  "Conversion-centric wireframing",
                  "Pixel-perfect UI development",
                  "Rigorous performance testing",
                  "Scalable backend architecture",
                  "Continuous data-led optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-dark/60">
                    <CheckCircle2 size={18} className="text-brand-purple shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
             </ul>
          </div>

          <div className="p-8 bg-brand-purple/5 rounded-3xl border border-brand-purple/10">
             <p className="text-brand-purple font-display font-bold text-lg mb-4 italic playfair">"If you aren't optimizing for your mobile user, you aren't optimizing for today's market."</p>
             <p className="text-brand-dark/50 text-xs font-bold tracking-widest uppercase">— Gela Digitals Growth Team</p>
          </div>
        </div>
      </ContentOverlay>
    </section>
  );
}
