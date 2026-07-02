import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { chapters } from '../../data/content';

/**
 * Minimal top bar — motion polish pass:
 *   - Progress bar: gradient width tween as before, plus a soft moving
 *     shimmer highlight (CSS `animate-progress-shimmer`) so a paused
 *     screen still has one living detail.
 *   - Chapter label: AnimatePresence slide+fade between chapters, so the
 *     numeral/label swap feels intentional instead of a hard swap.
 *   - Menu button: hover deepens background + rotates the icon slightly;
 *     tap gives a small scale-in.
 */

const labelVariants = {
  enter: { opacity: 0, y: 6 },
  center: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

export default function ChapterTopBar({ index, total, menuOpen, onOpenMenu }) {
  const current = chapters[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[61] h-[3px] w-full overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="relative h-full"
          style={{ background: 'linear-gradient(to right, #F7CAC9, #8DA65C, #C7DD9D)' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          {/* Traveling highlight — 40%-wide translucent sweep across the
              filled portion of the progress bar. */}
          <span
            className="pointer-events-none absolute inset-y-0 w-2/5 animate-progress-shimmer"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(255,255,255,0.55), transparent)',
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-xl"
        style={{
          backgroundColor: 'rgba(255,248,248,0.78)',
          border: '1px solid rgba(247,202,201,0.45)',
        }}
        initial={{ opacity: 0, y: -16, boxShadow: '0 4px 16px rgba(141,166,92,0.04)' }}
        animate={{ opacity: 1, y: 0, boxShadow: '0 8px 32px rgba(141,166,92,0.06)' }}
        whileHover={{ boxShadow: '0 12px 36px rgba(141,166,92,0.14)' }}
        transition={{ type: 'spring', stiffness: 240, damping: 28 }}
      >
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current.id}
              variants={labelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="block font-title text-xs tracking-widest"
              style={{ color: '#8DA65C' }}
            >
              {current.numeral} · {current.label}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.button
          type="button"
          onClick={onOpenMenu}
          aria-label="Buka daftar bab"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="chapter-menu-dialog"
          className="focus-moss flex h-8 w-8 items-center justify-center rounded-full"
          style={{ color: '#8DA65C' }}
          whileHover={{ backgroundColor: 'rgba(141,166,92,0.12)', rotate: 6 }}
          whileTap={{ scale: 0.88, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 24 }}
        >
          <Menu size={17} strokeWidth={2.2} />
        </motion.button>
      </motion.div>
    </>
  );
}
