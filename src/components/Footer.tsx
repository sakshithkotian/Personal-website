import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-ink/20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-serif text-2xl uppercase tracking-widest">
            Sakshith<span className="italic text-accent">Kotian</span>
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {['Instagram', 'Vimeo', 'Email'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-mono text-xs uppercase tracking-widest hover:text-accent hover:italic transition-all"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="w-12 h-12 torn-edge flex items-center justify-center border-ink">
          <span className="font-serif italic text-xl">S</span>
        </div>

      </div>
    </footer>
  );
}
