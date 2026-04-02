import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Play, Camera, BookOpen } from 'lucide-react';

export default function Hero() {
  const fullText = "Hi there! I’m a visual artist, video editor, and professional observer of everyday things. My brain is basically a mix of vivid movie scenes, random story ideas, and a constant urge to create. You’ll usually find me stitching together visuals, patiently tweaking stop-motion animations, or diving into hands-on crafts. I love taking the stories floating around in my head and turning them into something you can actually see and feel.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayedText(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(interval);
        }
      }, 20); // Typing speed
      return () => clearInterval(interval);
    }, 800); // Delay before typing starts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ink/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-ink"></span>
            <span className="font-mono text-xs uppercase tracking-[0.2em]">About me</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 2, rotate: 15 }}
            animate={{ opacity: 0.9, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200, damping: 12 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-accent border-[4px] md:border-[8px] border-accent p-4 md:p-6 rounded-2xl mix-blend-multiply inline-block hover:text-ink hover:border-ink transition-colors duration-300 cursor-default"
          >
            Sakshith <br />
            <span className="italic">Kotian</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-sm md:text-base lg:text-lg mt-8 max-w-2xl leading-relaxed min-h-[160px] md:min-h-[120px]"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-2 h-4 bg-accent ml-1 align-middle"
            />
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex gap-6"
          >
            <a href="#works" className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
              Explore Works <ArrowDownRight size={14} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Collage */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 h-[500px] md:h-[600px] w-full flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative w-4/5 h-4/5 bg-paper border border-ink p-3 shadow-xl z-20"
          >
            {/* Scribble / Annotation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-6 -left-6 z-30 font-serif italic text-accent text-2xl -rotate-12 drop-shadow-md"
            >
              * pinned
            </motion.div>
            
            <motion.div 
              initial="initial"
              whileHover="hover"
              className="w-full h-full relative group overflow-hidden cursor-pointer"
            >
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 0.97 }
                }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="w-full h-full relative"
              >
                {/* Hover Image */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1Crhr0U9nAEVU5dnFn7acPXMsi2uLxDZt" 
                  alt="Portrait Hover" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Main Image */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1G1AHIQAGF5vkntP1sQ0TCXFfaY7f1zt5" 
                  alt="Portrait" 
                  className="relative w-full h-full object-cover transition-opacity duration-100 group-hover:opacity-0"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Flash Overlay */}
              <motion.div 
                variants={{
                  initial: { opacity: 0 },
                  hover: { 
                    opacity: [0, 1, 0],
                    transition: { duration: 0.3, times: [0, 0.2, 1] }
                  }
                }}
                className="absolute inset-0 bg-white pointer-events-none z-30"
              />
              
              {/* Shutter Sound Simulation (Visual) */}
              <motion.div 
                variants={{
                  initial: { opacity: 0 },
                  hover: { 
                    opacity: [0, 0.8, 0],
                    transition: { duration: 0.1, times: [0, 0.5, 1] }
                  }
                }}
                className="absolute inset-0 bg-black pointer-events-none z-20"
              />
            </motion.div>
            <p className="font-mono text-[10px] uppercase mt-2 text-ink/70">Fig 1. Portrait</p>
            {/* Tape */}
            <div className="absolute -bottom-3 right-4 w-16 h-6 tape rotate-3 z-20"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
