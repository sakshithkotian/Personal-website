import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Stories() {
  return (
    <section id="stories" className="py-24 px-6 md:px-12 relative bg-ink text-paper overflow-hidden">
      {/* Texture overlay for dark section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-paper) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl uppercase tracking-tighter group cursor-default"
          >
            <span className="text-paper group-hover:text-accent transition-colors duration-500">Blogs &</span> <span className="italic text-accent group-hover:text-paper transition-colors duration-500">Stories</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-accent mt-8"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Featured Story */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 border border-paper/20 p-6 md:p-10 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://picsum.photos/seed/story1/600/800?grayscale" 
                  alt="Story image" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Oct 12, 2025</p>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">The Grain of Truth in Analog</h3>
                <div className="font-mono text-sm leading-relaxed text-paper/70 space-y-4">
                  <p>
                    There is something inherently honest about film. It captures not just the light, but the physical reaction of chemicals to that light. 
                  </p>
                  <p>
                    In a digital world where perfection is a slider away, the imperfections of analog—the dust, the scratches, the unpredictable grain—become the signature of reality.
                  </p>
                </div>
                <button className="mt-8 self-start font-mono text-xs uppercase tracking-widest border-b border-paper/30 pb-1 hover:text-accent hover:border-accent transition-colors">
                  Read Full Entry
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Stories */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {[
              { date: 'Sep 28, 2025', title: 'Textures of the City', excerpt: 'Finding beauty in peeling paint and rusted metal.' },
              { date: 'Aug 14, 2025', title: 'Why I Still Shoot Super 8', excerpt: 'The mechanical whir, the limited time, the intentionality.' },
              { date: 'Jul 02, 2025', title: 'Mixed Media Process', excerpt: 'Combining digital scans with physical tearing and taping.' }
            ].map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-paper/20 pb-6 group cursor-pointer"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-paper/50 mb-2 group-hover:text-accent transition-colors">{story.date}</p>
                <h4 className="font-serif text-xl mb-2 group-hover:italic transition-all">{story.title}</h4>
                <p className="font-mono text-xs text-paper/60 line-clamp-2">{story.excerpt}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a href="#all-blogs" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-paper px-8 py-4 torn-edge hover:bg-paper hover:text-ink transition-colors" style={{ borderColor: 'var(--color-paper)' }}>
            View More Blogs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
