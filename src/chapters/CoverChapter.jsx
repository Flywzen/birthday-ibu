import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAgeCounter } from '../hooks/useAgeCounter';
import { cover, profile } from '../data/content';
import FloralCorner from '../components/common/FloralCorner';
import AgeCounter from '../components/AgeCounter';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 28 },
  },
};

/**
 * The gift ribbon knot — a small wrapped-gift motif, distinct from the
 * envelope-and-seal used later in the Letter Room, so the two "open this"
 * moments in the site don't feel like the same interaction reskinned twice.
 */
function GiftKnot({ pulsing }) {
  return (
    <div
      className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full sm:h-36 sm:w-36"
      style={{
        background: 'linear-gradient(135deg, #F7CAC9 0%, #F5C9D4 55%, #FEE0E9 100%)',
        border: '2px solid rgba(141,166,92,0.35)',
        boxShadow: '0 12px 40px rgba(141,166,92,0.22)',
      }}
    >
      {/* Ribbon bars */}
      <span
        className="absolute h-full w-[18%] rounded-full"
        style={{ background: 'rgba(141,166,92,0.5)' }}
        aria-hidden="true"
      />
      <span
        className="absolute w-full h-[18%] rounded-full"
        style={{ background: 'rgba(141,166,92,0.5)' }}
        aria-hidden="true"
      />
      <span
        className={`relative z-10 text-4xl sm:text-5xl ${pulsing ? 'animate-icon-pulse' : ''}`}
        aria-hidden="true"
      >
        🌷
      </span>
    </div>
  );
}

export default function CoverChapter({ onFirstInteraction, onContinue }) {
  const [unwrapped, setUnwrapped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const typedText = useTypewriter(cover.typewriterLines);
  const age = useAgeCounter(profile.birthDate);

  const statsLine = cover.statsTemplate
    .replace('{years}', age.years)
    .replace('{days}', age.totalDaysFormatted);

  function handleOpen() {
    if (unwrapped) return;
    setUnwrapped(true);
    onFirstInteraction?.();

    if (!prefersReducedMotion) {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.35 },
        colors: ['#F7CAC9', '#F5C9D4', '#C7DD9D', '#8DA65C', '#FEE0E9', '#fff8f8'],
      });
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  }

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      {/* Background: soft layered botanical gradient — no photo needed */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #fff8f8 0%, #fee8ef 25%, #f9f5f0 55%, #eef5e6 80%, #fff8f8 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(247,202,201,0.22) 0%, transparent 70%)',
          }}
        />
      </div>

      <FloralCorner side="left" />
      <FloralCorner side="right" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] leading-none opacity-[0.04]"
      >
        🌸
      </span>

      <motion.div
        className="relative z-10 flex w-full max-w-md flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 font-body text-xs uppercase tracking-[0.4em]"
          style={{ color: 'rgba(141,166,92,0.85)' }}
        >
          {cover.eyebrow}
        </motion.p>

        <AnimatePresence mode="wait">
          {!unwrapped ? (
            <motion.div
              key="wrapped"
              className="flex w-full flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <motion.h1
                variants={fadeUp}
                className="mb-8 font-title text-4xl font-semibold leading-tight sm:text-5xl"
                style={{
                  background: 'linear-gradient(135deg, #8DA65C 0%, #6e8347 40%, #4A4A4A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                For {profile.name}
              </motion.h1>

              <motion.button
                type="button"
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                aria-label={cover.openAriaLabel}
                className="mb-6"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <GiftKnot pulsing />
              </motion.button>

              <motion.p
                className="mb-8 font-title text-lg italic"
                style={{ color: 'rgba(74,74,74,0.8)' }}
              >
                {cover.openLabel}
              </motion.p>

              <motion.p
                className="font-body text-[0.7rem] uppercase tracking-[0.3em]"
                style={{ color: 'rgba(141,166,92,0.55)' }}
              >
                {cover.openHint}
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="unwrapped"
              className="flex w-full flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <motion.div variants={fadeUp} className="mb-3 text-xl tracking-widest opacity-60" style={{ color: '#8DA65C' }}>
                🌸 🌿 🌸
              </motion.div>

              <div className="z-10 mb-8 min-h-[3.5rem] px-2">
                <p
                  className="font-title text-lg italic sm:text-xl"
                  style={{ color: 'rgba(74,74,74,0.78)' }}
                >
                  {typedText}
                  <span className="animate-cursor-blink" style={{ color: '#8DA65C' }}>|</span>
                </p>
              </div>

              <div className="mb-4 w-full">
                <AgeCounter />
              </div>

              <p
                className="mb-10 font-body text-xs tracking-widest"
                style={{ color: 'rgba(141,166,92,0.75)' }}
              >
                {statsLine}
              </p>

              <motion.button
                type="button"
                onClick={onContinue}
                className="flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #8DA65C 0%, #6e8347 100%)',
                  boxShadow: '0 8px 24px rgba(141,166,92,0.32)',
                }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 32px rgba(141,166,92,0.46)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                Masuk ke taman kecil
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
