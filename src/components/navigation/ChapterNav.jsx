import { motion, LayoutGroup } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { chapters } from '../../data/content';

/**
 * Soft chapter navigation — replaces the traditional navbar that jumps to
 * scroll anchors. A floating pill at the bottom with back/next buttons and
 * a row of chapter dots that can be tapped to jump directly. This is the
 * primary way to move between chapters once the gift has been opened.
 */
export default function ChapterNav({ index, total, isFirst, isLast, onPrev, onNext, onGoTo }) {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.2 }}
    >
      <div
        className="flex items-center gap-3 rounded-full px-3 py-2 backdrop-blur-xl sm:gap-4 sm:px-4"
        style={{
          backgroundColor: 'rgba(255,248,248,0.9)',
          border: '1px solid rgba(247,202,201,0.5)',
          boxShadow: '0 8px 32px rgba(141,166,92,0.12)',
        }}
      >
        <motion.button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Bab sebelumnya"
          className="flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-25"
          style={{ color: '#8DA65C' }}
          whileHover={isFirst ? {} : { scale: 1.12, backgroundColor: 'rgba(141,166,92,0.08)' }}
          whileTap={isFirst ? {} : { scale: 0.92 }}
        >
          <ChevronLeft size={18} />
        </motion.button>

        <LayoutGroup>
          <div className="flex items-center gap-2">
            {chapters.map((chapter, i) => (
              <motion.button
                key={chapter.id}
                type="button"
                onClick={() => onGoTo(i)}
                aria-label={`Ke bab ${chapter.numeral} · ${chapter.label}`}
                aria-current={i === index ? 'true' : undefined}
                className="relative h-2 rounded-full"
                style={{ width: i === index ? 22 : 8 }}
                animate={{ width: i === index ? 22 : 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <span
                  className="block h-full w-full rounded-full transition-colors duration-200"
                  style={{ backgroundColor: i === index ? '#8DA65C' : 'rgba(141,166,92,0.25)' }}
                />
                {i === index && (
                  <motion.span
                    layoutId="chapter-active-dot"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: '#8DA65C' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </LayoutGroup>

        <motion.button
          type="button"
          onClick={onNext}
          disabled={isLast}
          aria-label="Bab berikutnya"
          className="flex h-8 w-8 items-center justify-center rounded-full disabled:opacity-25"
          style={{ color: '#8DA65C' }}
          whileHover={isLast ? {} : { scale: 1.12, backgroundColor: 'rgba(141,166,92,0.08)' }}
          whileTap={isLast ? {} : { scale: 0.92 }}
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
