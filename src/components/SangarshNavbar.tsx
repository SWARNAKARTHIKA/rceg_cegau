
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'transformed', label: 'LIVES WE TRANSFORMED' },
  { id: 'patrons', label: 'Patrons' },

  { id: 'legacy', label: 'Legacy' },
  { id: 'contact', label: 'Contact Us' },
  
];

const SangarshNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scrollspy: determine active section
  useEffect(() => {
    const ids = sections.map(s => s.id);
    const handle = () => {
      const threshold = window.innerHeight * 0.25;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) current = id;
      }
      setActive(current);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 0; // navbar overlays content
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="flex justify-center w-full px-4 py-3 pointer-events-auto">
        <div className="w-full max-w-6xl mx-auto relative">
          {/* Oval container */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={`hidden md:flex items-center justify-center mx-auto text-amber-100 backdrop-blur-sm border rounded-full py-2 px-4 gap-6 transition-all duration-300 ease-out ${
              scrolled ? 'bg-black/90 border-white/20 shadow-2xl' : 'bg-black/40 border-white/10'
            }`}
          >
            {sections.map(s => (
              <div key={s.id} className="relative">
                <a
                  href={`#${s.id}`}
                  onClick={handleClick(s.id)}
                  className={`text-sm md:text-base px-3 py-1 rounded-md transition-colors inline-block ${
                    active === s.id ? 'text-amber-200 font-semibold' : 'text-amber-100'
                  }`}
                >
                  {s.label}
                </a>
                <motion.span
                  layout
                  initial={false}
                  animate={{ width: active === s.id ? '100%' : '0%' }}
                  transition={{ duration: 0.25 }}
                  className="block h-[2px] bg-amber-300 rounded-full absolute left-0 bottom-0"
                />
              </div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
              className="ml-2 p-2 rounded-md bg-black/40 text-amber-100 border border-white/10"
            >
              {open ? 'Close' : 'Menu'}
            </button>
            {/* Center small oval hint on mobile */}
            <div className="mx-auto bg-black/30 text-amber-100 rounded-full px-3 py-1">
              SANGARSH
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="md:hidden absolute left-1/2 transform -translate-x-1/2 mt-14 w-11/12 bg-black/60 text-amber-100 backdrop-blur-sm rounded-lg p-3 shadow-2xl"
              >
                <div className="flex flex-col gap-2">
                  {sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={handleClick(s.id)}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        active === s.id ? 'bg-black/30 font-semibold' : 'hover:bg-black/30'
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default SangarshNavbar;
