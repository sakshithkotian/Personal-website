import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

const videos = [
  {
    id: 'V01',
    title: 'Echoes of the City',
    category: 'Short Film / Director',
    image: 'https://picsum.photos/seed/video1/1920/1080?grayscale',
    rotation: '-rotate-1',
  },
  {
    id: 'V02',
    title: 'Neon Dreams',
    category: 'Music Video / Editor',
    image: 'https://picsum.photos/seed/video2/1920/1080?grayscale',
    rotation: 'rotate-1',
  },
  {
    id: 'V03',
    title: 'Midnight Stroll',
    category: 'Documentary / Editor',
    image: 'https://picsum.photos/seed/video3/1920/1080?grayscale',
    rotation: '-rotate-2',
  },
  {
    id: 'V04',
    title: 'Abstract Thoughts',
    category: 'Experimental / Visuals',
    image: 'https://picsum.photos/seed/video4/1920/1080?grayscale',
    rotation: 'rotate-2',
  }
];

const photos = [
  {
    id: 'P01',
    title: 'Urban Decay',
    category: 'Photography',
    image: 'https://picsum.photos/seed/urban/800/1000?grayscale',
    rotation: '-rotate-2',
    offset: 'mt-0',
  },
  {
    id: 'P02',
    title: 'Paper Textures',
    category: 'Mixed Media',
    image: 'https://picsum.photos/seed/paper/800/1000?grayscale',
    rotation: 'rotate-2',
    offset: 'mt-12 md:mt-24',
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 relative border-t border-ink/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter group cursor-default">
              <span className="text-ink group-hover:text-accent transition-colors duration-500">Selected</span> <span className="italic text-accent group-hover:text-ink transition-colors duration-500">Works</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest mt-4">Archive 2024—2026</p>
          </div>
          <div className="hidden md:block font-mono text-sm max-w-xs text-right">
            A curated selection of my works and ideas.
          </div>
        </div>

        {/* Videos Section (16:9) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-ink"></span>
            <h3 className="font-mono text-lg uppercase tracking-widest">Video Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {videos.map((work, index) => (
              <motion.div 
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative group`}
              >
                <div className="absolute inset-0 border border-ink translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                
                <div className={`relative bg-paper p-4 pb-16 border border-ink shadow-sm transition-all duration-500 ${work.rotation} group-hover:rotate-0 z-10`}>
                  <div className="overflow-hidden relative group-hover:cursor-pointer">
                    {/* 16:9 Aspect Ratio for Videos */}
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full aspect-video object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/10 group-hover:bg-transparent transition-colors duration-500">
                      <div className="w-16 h-16 rounded-full border-2 border-paper/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                        <Play className="text-paper ml-1" fill="currentColor" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="font-serif text-2xl font-semibold">{work.title}</p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink/60 mt-1">{work.category}</p>
                    </div>
                    <span className="font-mono text-sm text-accent">{work.id}</span>
                  </div>

                  {index % 2 === 0 ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 tape rotate-2 z-20"></div>
                  ) : (
                    <div className="absolute -bottom-4 right-10 w-16 h-6 tape -rotate-3 z-20"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <a href="#all-videos" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink px-8 py-4 torn-edge hover:bg-ink hover:text-paper transition-colors">
              View More Videos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Photography Section */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-[1px] bg-ink"></span>
            <h3 className="font-mono text-lg uppercase tracking-widest">Photography</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {photos.map((work, index) => (
              <motion.div 
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative group ${work.offset}`}
              >
                <div className="absolute inset-0 border border-ink translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                
                <div className={`relative bg-paper p-4 pb-16 border border-ink shadow-sm transition-all duration-500 ${work.rotation} group-hover:rotate-0 z-10`}>
                  <div className="overflow-hidden relative">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full aspect-[4/5] object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <p className="font-serif text-2xl font-semibold">{work.title}</p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-ink/60 mt-1">{work.category}</p>
                    </div>
                    <span className="font-mono text-sm text-accent">{work.id}</span>
                  </div>

                  {index % 2 === 0 ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 tape rotate-2 z-20"></div>
                  ) : (
                    <div className="absolute -bottom-4 right-10 w-16 h-6 tape -rotate-3 z-20"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <a href="#all-photos" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-ink px-8 py-4 torn-edge hover:bg-ink hover:text-paper transition-colors">
              View More Photos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
