import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import ParallaxImage from '../ui/ParallaxImage';
import Magnetic from '../ui/Magnetic';

const projects = [
  { 
    name: 'Vitality Vangard', 
    url: 'https://vitalityvangard.com/', 
    category: 'Shopify Plus / Health',
    color: 'bg-[#1a1025]',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2640&auto=format&fit=crop',
    description: 'A global wellness brand redefined through cinematic UI and streamlined checkout systems.'
  },
  { 
    name: 'Yama Kits', 
    url: 'https://yamakits.com/', 
    category: 'UI/UX / Apparel',
    color: 'bg-[#0f172a]',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop',
    description: 'High-performance ecommerce architecture for a minimalist lifestyle brand.'
  },
  { 
    name: 'Bombas', 
    url: 'https://bombas.com/', 
    category: 'Optimization / Enterprise',
    color: 'bg-[#064e3b]',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2660&auto=format&fit=crop',
    description: 'Strategic CRO and technical implementation for one of Shopifys biggest success stories.'
  },
  { 
    name: 'Sopotex', 
    url: 'https://sopotex.eu/', 
    category: 'Ecommerce Growth',
    color: 'bg-[#1e1b4b]',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
    description: 'Scaling a European fashion staple to 7-figure monthly recurring revenue.'
  },
  { 
    name: 'Doglyness UK', 
    url: 'https://doglynessuk.myshopify.com/', 
    category: 'Shopify Migration',
    color: 'bg-[#065f46]',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop',
    description: 'Sustainable pet care migration with a focus on high-LTV customer retention.'
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-brand-purple/10 rounded-full mb-6">
            <span className="text-[10px] font-caps font-bold tracking-[0.4em] text-brand-purple uppercase">REVENUE FOCUSED</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[88px] leading-[1.1] md:leading-[0.85] font-display font-black mb-6 tracking-tighter">
            We build for<br />
            <span className="italic font-light text-brand-purple playfair">conversions.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-display max-w-xl">
            Selected projects that demonstrate our commitment to high-ticket ecommerce performance and design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Portfolio Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                className={`group relative overflow-hidden rounded-[32px] min-h-[450px] md:min-h-[550px] flex flex-col justify-end p-8 md:p-12 ${project.color} ${
                  i % 3 === 0 ? 'md:col-span-12' : 
                  i % 3 === 1 ? 'md:col-span-12 lg:col-span-12' : 
                  'md:col-span-12'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                {/* Image Area - Parallax Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <ParallaxImage 
                     src={project.image} 
                     alt={project.name}
                     className="w-full h-full opacity-30 group-hover:opacity-50 transition-all duration-1000 grayscale group-hover:grayscale-0"
                     strength={40}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-brand-purple/40 transition-colors duration-700" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[9px] font-caps font-bold tracking-[0.2em] text-white/50 uppercase border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight">{project.name}</h3>
                  <p className="text-white/60 text-base md:text-lg mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white uppercase group-hover:text-brand-purple transition-colors border-b border-white/20 group-hover:border-brand-purple pb-1"
                  >
                    VIEW SITE <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <motion.div 
               className="p-8 md:p-12 rounded-[2.5rem] bg-brand-dark/[0.03] border border-brand-dark/5 relative overflow-hidden"
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 blur-3xl -z-10" />
              
              <div className="mb-10">
                <span className="text-[10px] font-caps font-bold tracking-[0.3em] text-brand-purple uppercase mb-4 block">Our Expertise</span>
                <h4 className="text-3xl font-display font-black tracking-tighter mb-6">Expert Scale.</h4>
                <p className="text-brand-dark/60 leading-relaxed mb-8">
                   We provide premium Shopify solutions designed to solve the most complex ecommerce challenges for brands ready to lead.
                </p>
                
                <ul className="space-y-4">
                   {[
                     "High-Performance Theme Dev",
                     "Custom Checkout Integration",
                     "Headless Commerce Architect",
                     "Revenue-Led UX Design"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-display font-bold text-brand-dark/80">
                        <CheckCircle2 size={16} className="text-brand-purple" />
                        {item}
                     </li>
                   ))}
                </ul>
              </div>

              <div className="pt-10 border-t border-brand-dark/5">
                <p className="text-sm text-brand-dark/40 mb-8 italic">
                   "We don't just build websites; we engineer conversion-centric growth engines."
                </p>
                
                <Magnetic>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('toggle-contact'))}
                    className="w-full py-6 bg-brand-purple text-white rounded-2xl font-display font-black tracking-widest text-xs uppercase flex items-center justify-center gap-3 hover:bg-brand-dark transition-all duration-500 shadow-xl"
                  >
                    BOOK A STRATEGY CALL <Calendar size={16} />
                  </button>
                </Magnetic>
              </div>
            </motion.div>

            {/* Newsletter or Secondary CTA */}
            <motion.div 
                className="p-8 rounded-[2rem] border border-brand-dark/10 flex items-center justify-between group cursor-pointer hover:border-brand-purple/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => window.dispatchEvent(new CustomEvent('toggle-contact'))}
            >
                <div>
                   <p className="text-xs font-bold tracking-[0.2em] text-brand-dark/30 uppercase mb-1">Scale your ROI</p>
                   <p className="text-lg font-display font-bold">Request a Free Audit</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all transform group-hover:rotate-45">
                   <ArrowRight size={18} />
                </div>
            </motion.div>
          </aside>
        </div>

        <div className="mt-20 text-center lg:text-left">
            <Magnetic>
              <button className="px-10 py-5 bg-brand-dark text-white rounded-full font-display font-black tracking-widest text-xs hover:bg-brand-purple transition-all duration-300 shadow-xl">
                  VIEW ALL CASE STUDIES
              </button>
            </Magnetic>
        </div>
      </div>
    </section>
  );
}
