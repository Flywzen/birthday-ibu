import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, LayoutGroup } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { blessing } from '../data/content';

// Same carousel constants as the original quote carousel — tested & mobile-friendly.
const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 40;

const slideVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 56 : -56,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -56 : 56,
    scale: 0.97,
  }),
};

/**
 * A calm room for prayers, wishes and soft quotes — floating quote carousel.
 * Carries over the swipe/autoplay/drag mechanic proven in the original
 * quote section, now framed as its own chapter rather than a page section.
 */
export default function BlessingChapter() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const total = blessing.slides.length;

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  const goToSlide = useCallback(
    (i) => {
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion, go]);

  function onTouchStart(e) {
    e.stopPropagation();
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    e.stopPropagation();
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  const slide = blessing.slides[index];

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 py-24">
      <SectionHeading
        num={blessing.numeral}
        subtitle={blessing.eyebrow}
        subtitlePosition="above"
        title={blessing.title}
      />

      <div
        className="relative mx-auto mt-14 w-full max-w-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slide area — fixed min-height so layout doesn't shift between slides */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            minHeight: '220px',
            border: '1px solid rgba(199,221,157,0.4)',
            background: 'rgba(255,255,255,0.58)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12 text-center"
            >
              <span
                className="mb-4 font-title text-5xl leading-none select-none"
                style={{ color: 'rgba(141,166,92,0.2)' }}
                aria-hidden="true"
              >
                "
              </span>

              <motion.p
                className="font-title text-base italic leading-relaxed sm:text-lg"
                style={{ color: 'rgba(74,74,74,0.85)' }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                {slide.text}
              </motion.p>

              <motion.p
                className="mt-6 font-body text-xs tracking-widest"
                style={{ color: 'rgba(141,166,92,0.7)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
              >
                {slide.attribution}
              </motion.p>

              <motion.span
                className="mt-5 text-base"
                style={{ opacity: 0.35 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ delay: 0.45 }}
              >
                🌸
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => go(-1)}
          aria-label="Doa sebelumnya"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(199,221,157,0.45)',
            color: '#6E8347',
          }}
          whileHover={{
            scale: 1.12,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderColor: 'rgba(141,166,92,0.4)',
          }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        >
          <ChevronLeft size={18} />
        </motion.button>

        <motion.button
          onClick={() => go(1)}
          aria-label="Doa berikutnya"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(199,221,157,0.45)',
            color: '#6E8347',
          }}
          whileHover={{
            scale: 1.12,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderColor: 'rgba(141,166,92,0.4)',
          }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        >
          <ChevronRight size={18} />
        </motion.button>

        <LayoutGroup>
          <div className="mt-5 flex justify-center gap-2">
            {blessing.slides.map((s, i) => (
              // Outer button is a p-2 -m-2 hit target (see ChapterNav for the
              // same pattern) so the small dots stay comfortably tappable.
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Ke doa ${i + 1}`}
                className="focus-moss -m-2 flex items-center justify-center rounded-full p-2"
              >
                <motion.span
                  className="relative block h-2 rounded-full"
                  style={{ width: i === index ? 24 : 8 }}
                  animate={{ width: i === index ? 24 : 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <span
                    className="block h-full w-full rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor: i === index ? '#8DA65C' : 'rgba(141,166,92,0.25)',
                    }}
                  />
                  {i === index && (
                    <motion.span
                      layoutId="blessing-active-dot"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#8DA65C' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}