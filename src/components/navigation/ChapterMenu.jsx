import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { chapters } from '../../data/content';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

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

/**
 * Fullscreen chapter list — "a small chapter menu" option from the brief.
 * Repurposes the motion pattern of the original mobile nav (staggered
 * links, floral footer ornament), but each item now jumps to a chapter
 * via state instead of scrolling to an anchor.
 */
export default function ChapterMenu({ open, currentIndex, onClose, onGoTo }) {
  const prefersReducedMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Move focus into the dialog when it opens, and back to whatever
  // triggered it (the topbar's menu button) once it closes — standard
  // modal-dialog focus behaviour, previously missing entirely.
  useEffect(() => {
    if (open) {
      previouslyFocusedRef.current = document.activeElement;
      closeButtonRef.current?.focus();
    } else {
      previouslyFocusedRef.current?.focus?.();
    }
  }, [open]);

  // Escape closes the dialog; Tab is trapped inside it so keyboard focus
  // can't silently leave into the chapter content sitting behind it.
  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="chapter-menu"
          ref={dialogRef}
          id="chapter-menu-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Daftar bab"
          variants={prefersReducedMotion ? {} : menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8 backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(255,248,248,0.97)' }}
        >
          <motion.button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute right-6 top-6"
            style={{ color: '#8DA65C' }}
            aria-label="Tutup daftar bab"
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
            Daftar Bab
          </motion.p>

          <motion.ul
            variants={linkListVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {chapters.map((chapter, i) => (
              <motion.li key={chapter.id} variants={linkItemVariants}>
                <button
                  type="button"
                  onClick={() => {
                    onGoTo(i);
                    onClose();
                  }}
                  className="flex items-center gap-3 font-title text-2xl tracking-widest"
                  style={{ color: i === currentIndex ? '#8DA65C' : 'rgba(74,74,74,0.55)' }}
                >
                  <span className="text-lg" aria-hidden="true">{chapter.icon}</span>
                  {chapter.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>

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
  );
}
