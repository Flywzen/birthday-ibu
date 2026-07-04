import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { chapters } from '../../data/content';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Fullscreen chapter list — motion polish pass:
 *   - Backdrop: fades in with a blur ramp instead of just sliding in from
 *     the right, so the transition into "menu space" feels more spatial.
 *   - Items: staggered slide-in from the right on open, with each item
 *     having its own hover choreography (subtle rightward shift + moss
 *     color deepen) plus an active pill indicator.
 *   - Close button: hover rotates and gently scales; tap snaps 90°.
 *   - Footer floral row: fades in last as a soft closing beat.
 */

const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(20px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};
const panelVariants = {
  hidden: { opacity: 0, x: '8%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 260, damping: 30 },
  },
  exit: {
    opacity: 0,
    x: '8%',
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
};
const linkListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};
const linkItemVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
  exit: { opacity: 0, x: 24, transition: { duration: 0.18 } },
};

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

  useEffect(() => {
    if (open) {
      previouslyFocusedRef.current = document.activeElement;
      closeButtonRef.current?.focus();
    } else {
      previouslyFocusedRef.current?.focus?.();
    }
  }, [open]);

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
          variants={prefersReducedMotion ? {} : backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'rgba(255,248,248,0.94)' }}
        >
          <motion.div
            variants={prefersReducedMotion ? {} : panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex w-full flex-col items-center gap-8 px-6"
          >
            <motion.button
              ref={closeButtonRef}
              onClick={onClose}
              className="focus-moss absolute right-2 -top-16 flex h-10 w-10 items-center justify-center rounded-full"
              style={{ color: '#6E8347', backgroundColor: 'rgba(141,166,92,0.06)' }}
              aria-label="Tutup daftar bab"
              whileHover={{ rotate: 12, backgroundColor: 'rgba(141,166,92,0.14)', scale: 1.06 }}
              whileTap={{ scale: 0.85, rotate: 90 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <X size={20} strokeWidth={2.2} />
            </motion.button>

            <motion.p
              className="font-title text-xs uppercase tracking-[0.5em]"
              style={{ color: 'rgba(141,166,92,0.5)' }}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Daftar Bab
            </motion.p>

            <motion.ul
              variants={linkListVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-5"
            >
              {chapters.map((chapter, i) => {
                const isActive = i === currentIndex;
                return (
                  <motion.li key={chapter.id} variants={linkItemVariants}>
                    <motion.button
                      type="button"
                      onClick={() => {
                        onGoTo(i);
                        onClose();
                      }}
                      aria-current={isActive ? 'true' : undefined}
                      className="focus-moss flex items-center gap-4 rounded-full px-3 py-1 font-title text-2xl tracking-widest"
                      style={{
                        color: isActive ? '#6E8347' : 'rgba(74,74,74,0.55)',
                      }}
                      whileHover={{ x: 6, color: '#6E8347' }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: isActive ? '#8DA65C' : 'rgba(141,166,92,0.25)',
                          boxShadow: isActive ? '0 0 10px rgba(141,166,92,0.55)' : 'none',
                        }}
                      />
                      <span className="text-lg" aria-hidden="true">
                        {chapter.icon}
                      </span>
                      {chapter.label}
                    </motion.button>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.p
              className="text-2xl tracking-widest"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              🌸 🌿 🌸
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
