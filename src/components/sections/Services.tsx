import { motion } from 'motion/react';
import { ShoppingBag, Zap, Target, TrendingUp, BarChart, Search, Layers, ShieldCheck, MailOpen } from 'lucide-react';

const mainPlatforms = [
  {
    title: 'Shopify & Shopify Plus',
    desc: "The world's most powerful commerce platform — built for brands ready to scale.",
    gradient: 'from-brand-purple/20 to-transparent'
  },
  {
    title: 'Web3 & Headless Commerce',
    desc: 'Future-proof your brand with decentralized storefronts and headless architecture.',
    gradient: 'from-brand-blue/20 to-transparent'
  }
];

const services = [
  { title: 'Shopify CRO', desc: 'Conversion rate optimization that turns browsers into buyers', icon: Target },
  { title: 'Product Page Optimization', desc: 'Trust-led design that sells', icon: Layers },
  { title: 'Ecommerce Growth Strategy', desc: 'Profitable scaling systems', icon: TrendingUp },
  { title: 'Email & Retention Marketing', desc: 'LTV-maximizing flows', icon: MailOpen },
  { title: 'Performance Marketing', desc: 'Paid ads that scale profitably', icon: BarChart },
  { title: 'SEO & Organic Growth', desc: 'Long-term traffic ownership', icon: Search },
  { title: 'Shopify Store Builds', desc: 'Premium custom development', icon: ShoppingBag },
  { title: 'Web3 / Headless Dev', desc: 'Next-gen commerce architecture', icon: Globe },
  { title: 'Conversion Audits', desc: 'Find and fix revenue leaks', icon: ShieldCheck },
];

function Globe({ size, className }: { size?: number, className?: string }) {
  return <TrendingUp size={size} className={className} />; // Placeholder
}

export default function Services() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainPlatforms.map((platform, i) => (
            <motion.div
              key={i}
              className={`p-12 rounded-3xl bg-white border border-brand-dark/5 relative overflow-hidden group shadow-sm`}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-4">{platform.title}</h3>
                <p className="text-brand-dark/60 mb-8 max-w-sm leading-relaxed">{platform.desc}</p>
                <a 
                  href="#contact"
                  className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-purple hover:gap-4 transition-all"
                >
                  LEARN MORE <Zap size={14} className="fill-brand-purple" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-8 bg-white border border-brand-dark/5 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                rotateX: -2,
                rotateY: 2,
                z: 20,
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-purple transition-all duration-500 group-hover:h-full" />
              <div className="mb-6 w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-500">
                <service.icon size={24} />
              </div>
              <h4 className="text-lg font-display font-bold mb-3 leading-tight transition-colors group-hover:text-brand-purple">{service.title}</h4>
              <p className="text-sm text-brand-dark/50 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
