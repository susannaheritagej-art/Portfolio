import { motion } from 'motion/react';

const clients = [
  { name: 'Vitality Vangard', domain: 'vitalityvangard.com' },
  { name: 'Yama Kits', domain: 'yamakits.com' },
  { name: 'Bombas', domain: 'bombas.com' },
  { name: 'Sopotex', domain: 'sopotex.eu' },
  { name: 'Doglyness', domain: 'doglynessuk.myshopify.com' },
  { name: 'Rokia', domain: 'rokiajewelries.com' },
  { name: 'HCMore', domain: 'hcmore.nl' },
  { name: 'WatchSights', domain: 'watchsights.com' }
];

export default function LogoGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Professional Polish Highlight Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple relative z-20"></div>

      <div className="py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
          <motion.div 
            className="inline-block px-4 py-1.5 bg-brand-purple/20 rounded-full mb-6 border border-brand-purple/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-caps font-bold tracking-[0.4em] text-brand-purple uppercase">
              STRATEGIC PARTNERSHIPS
            </span>
          </motion.div>
          
          <motion.p 
            className="text-white text-3xl md:text-5xl font-serif leading-[1.1] mb-12 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We've helped these industry leaders <span className="italic font-light text-brand-purple">dominate</span> their niche through strategic shopify engineering.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border border-white/5 relative z-10 bg-brand-dark/50 backdrop-blur-sm">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className={`h-48 flex flex-col items-center justify-center border border-white/5 group hover:bg-brand-purple/5 transition-all duration-700`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="relative mb-2">
                <span className="text-white/20 group-hover:text-white transition-all duration-500 font-display text-lg md:text-xl font-black tracking-widest uppercase text-center px-4">
                  {client.name}
                </span>
                <div className="absolute -bottom-1 left-4 right-4 h-px bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
              <span className="text-[8px] font-caps font-bold tracking-[0.3em] text-white/5 uppercase opacity-0 group-hover:opacity-40 transition-opacity">
                {client.domain}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
