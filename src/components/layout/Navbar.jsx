import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav as navContent } from '../../data/content';

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 280, damping: 30 },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { type: 'spring', stiffness: 320, damping: 36 },
  },
};

const linkListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
};

const navInitialVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 28, delay: 0.1 },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const navRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(pct, 1)})`;
      }
      if (navRef.current) {
        const scrolled = window.scrollY > 24;
        navRef.current.style.backgroundColor = scrolled
          ? 'rgba(255,248,248,0.97)'
          : 'rgba(255,248,248,0.78)';
        navRef.current.style.boxShadow = scrolled
          ? '0 4px 24px rgba(141,166,92,0.09), 0 1px 0 rgba(247,202,201,0.4)'
          : '0 8px 32px rgba(141,166,92,0.06)';
      }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-[61] h-[3px] w-full origin-left scale-x-0"
        style={{
          background: 'linear-gradient(to right, #F7CAC9, #8DA65C, #C7DD9D)',
        }}
      />

      <motion.nav
        ref={navRef}
        variants={prefersReducedMotion ? {} : navInitialVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 items-center justify-between gap-6 rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-500"
        style={{
          backgroundColor: 'rgba(255,248,248,0.78)',
          border: '1px solid rgba(247,202,201,0.45)',
          boxShadow: '0 8px 32px rgba(141,166,92,0.06)',
        }}
      >
        <span
          className="font-title text-sm tracking-widest"
          style={{ color: '#8DA65C' }}
        >
          {navContent.brand}
        </span>

        <ul className="hidden gap-8 text-xs font-medium tracking-widest uppercase md:flex">
          {navContent.links.map((link) => (
            <li key={link.href} className="relative">
              <motion.a
                href={link.href}
                className="relative transition-colors"
                style={{ color: 'rgba(74,74,74,0.65)' }}
                whileHover={{ color: '#8DA65C' }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left"
                  style={{ background: '#8DA65C' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.button
          onClick={() => setMenuOpen(true)}
          className="shrink-0 md:hidden"
          style={{ color: '#8DA65C' }}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={22} />
        </motion.button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={prefersReducedMotion ? {} : menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-xl"
            style={{ backgroundColor: 'rgba(255,248,248,0.97)' }}
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6"
              style={{ color: '#8DA65C' }}
              aria-label="Tutup menu"
              whileTap={{ scale: 0.85, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <X size={22} />
            </motion.button>

            <motion.p
              className="font-title text-xs uppercase tracking-[0.5em]"
              style={{ color: 'rgba(141,166,92,0.4)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Menu
            </motion.p>

            <motion.ul
              variants={linkListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navContent.links.map((link) => (
                <motion.li key={link.href} variants={linkItemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-title text-2xl tracking-widest"
                    style={{ color: '#8DA65C' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Subtle floral ornament */}
            <motion.p
              className="text-2xl tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4 }}
            >
              🌸 🌿 🌸
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
