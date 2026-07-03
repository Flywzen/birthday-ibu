import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { chapters } from '../../data/content';

/**
 * Floating chapter navigation — motion polish pass:
 *   - Whole pill: hover lifts slightly and deepens the shadow, so the
 *     control feels responsive before you even click a dot.
 *   - Active dot: soft moss glow (box-shadow) plus a pulsing halo ring
 *     that fades outward — makes the current chapter visibly "alive".
 *   - Inactive dots: bloom on hover (scale + color) so tap targets feel
 *     tactile on mobile too.
 *   - Prev/next: chevrons nudge in their direction on hover, spring back
 *     on tap, and disabled state fades softly instead of hard-cutting.
 */

const pillHover = { y: -2, boxShadow: '0 14px 40px rgba(141,166,92,0.18)' };
const pillRest = { y: 0, boxShadow: '0 8px 32px rgba(141,166,92,0.12)' };
const softSpring = { type: 'spring', stiffness: 320, damping: 26 };

export default function ChapterNav({ index, total, isFirst, isLast, onPrev, onNext, onGoTo }) {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.2 }}
    >
      <motion.div
        className="flex items-center gap-3 rounded-full px-3 py-2 backdrop-blur-xl sm:gap-4 sm:px-4"
        style={{
          backgroundColor: 'rgba(255,248,248,0.9)',
          border: '1px solid rgba(247,202,201,0.5)',
        }}
        initial={pillRest}
        whileHover={pillHover}
        animate={pillRest}
        transition={softSpring}
      >
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Bab sebelumnya"
          className="focus-moss flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ color: '#8DA65C' }}
          whileHover={isFirst ? {} : { x: -2, backgroundColor: 'rgba(141,166,92,0.1)' }}
          whileTap={isFirst ? {} : { scale: 0.9, x: -4 }}
          transition={softSpring}
        >
          <ChevronLeft size={18} strokeWidth={2.2} />
        </motion.button>

        <LayoutGroup>
          <div className="flex items-center gap-2">
            {chapters.map((chapter, i) => {
              const isActive = i === index;
              return (
                // Outer button is the actual hit target: p-2 -m-2 adds 8px
                // of invisible padding on every side (cancelled for layout
                // by the matching negative margin) so even the 8px inactive
                // dot gets a ~24px touch target, without changing the pill's
                // visual footprint or the gap between dots.
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => onGoTo(i)}
                  aria-label={`Ke bab ${chapter.numeral} · ${chapter.label}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="focus-moss -m-2 flex items-center justify-center rounded-full p-2"
                >
                  <motion.span
                    className="relative block h-2 rounded-full"
                    style={{ width: isActive ? 24 : 8 }}
                    animate={{ width: isActive ? 24 : 8 }}
                    whileHover={isActive ? {} : { scale: 1.4 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                  >
                    <span
                      className="block h-full w-full rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: isActive ? '#8DA65C' : 'rgba(141,166,92,0.28)',
                      }}
                    />
                    {isActive && (
                      <>
                        <motion.span
                          layoutId="chapter-active-dot"
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: '#8DA65C',
                            boxShadow: '0 0 0 3px rgba(141,166,92,0.18), 0 0 12px rgba(141,166,92,0.35)',
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                        {/* Pulsing halo — CSS only, respects reduced-motion globally */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring"
                          style={{ backgroundColor: 'rgba(141,166,92,0.35)' }}
                        />
                      </>
                    )}
                  </motion.span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <motion.button
          type="button"
          onClick={onNext}
          disabled={isLast}
          aria-label="Bab berikutnya"
          className="focus-moss flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-25 disabled:cursor-not-allowed"
          style={{ color: '#8DA65C' }}
          whileHover={isLast ? {} : { x: 2, backgroundColor: 'rgba(141,166,92,0.1)' }}
          whileTap={isLast ? {} : { scale: 0.9, x: 4 }}
          transition={softSpring}
        >
          <ChevronRight size={18} strokeWidth={2.2} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
