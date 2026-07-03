import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useAgeCounter } from '../hooks/useAgeCounter';
import { cover, profile } from '../data/content';
import { loadConfetti } from '../utils/confetti';
import FloralCorner from '../components/common/FloralCorner';
import OpeningEmblem from '../components/common/OpeningEmblem';
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
 * Typed greeting line — isolated in its own component so the ~30-65ms
 * per-character state updates from useTypewriter only re-render this one
 * <p>, instead of re-rendering the whole "unwrapped" tree (AgeCounter,
 * stats line, continue button) on every keystroke of the loop.
 */
function TypedGreeting({ lines }) {
  const typedText = useTypewriter(lines);
  return (
    <div className="z-10 mb-8 min-h-[3.5rem] px-2">
      <p className="font-title text-lg italic sm:text-xl" style={{ color: 'rgba(74,74,74,0.78)' }}>
        {typedText}
        <span className="animate-cursor-blink" style={{ color: '#8DA65C' }}>|</span>
      </p>
    </div>
  );
}

/**
 * Stats line ("X tahun kehangatan · Y hari bersama kami") — isolated for
 * the same reason as TypedGreeting: it's the one piece of this screen that
 * ticks every second (via useAgeCounter), so it shouldn't drag the rest of
 * the cover along for the re-render.
 */
function StatsLine({ template }) {
  const age = useAgeCounter(profile.birthDate);
  const statsLine = template.replace('{years}', age.years).replace('{days}', age.totalDaysFormatted);
  return (
    <p className="mb-10 font-body text-xs tracking-widest" style={{ color: 'rgba(141,166,92,0.75)' }}>
      {statsLine}
    </p>
  );
}

export default function CoverChapter({ onFirstInteraction, onContinue }) {
  const [unwrapped, setUnwrapped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  async function handleOpen() {
    if (unwrapped) return;
    setUnwrapped(true);
    onFirstInteraction?.();

    if (!prefersReducedMotion) {
      const confetti = await loadConfetti();
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
              'linear-gradient(160deg, #FFF8F8 0%, #FEE0E9 25%, #FFF8F8 55%, #EEF5E6 80%, #FFF8F8 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(247,202,201,0.16) 0%, transparent 70%)',
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
                className="group mb-6 h-32 w-32 rounded-full sm:h-36 sm:w-36 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fff8f8]"
                style={{ '--tw-ring-color': 'rgba(141,166,92,0.55)' }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <OpeningEmblem />
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

              <TypedGreeting lines={cover.typewriterLines} />

              <div className="mb-4 w-full">
                <AgeCounter />
              </div>

              <StatsLine template={cover.statsTemplate} />

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
