import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-colors duration-300 ${
        isScrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-serif text-2xl uppercase tracking-widest z-10">
          S<span className="italic text-accent">K</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {['Works', 'Stories', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden font-mono text-xs uppercase tracking-widest border border-ink px-3 py-1 torn-edge">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}
