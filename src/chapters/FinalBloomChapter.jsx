import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { finalBloom } from '../data/content';
import { loadConfetti } from '../utils/confetti';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 26 },
  },
};

/**
 * Final Bloom — the emotional ending of the site, not a footer. Fires a
 * one-time slow petal burst (emoji-shaped confetti, distinct from the
 * circular confetti used at Cover/Letter) the first time this chapter is
 * reached, then settles into a quiet closing message + a small signature
 * line that used to live in a separate Footer section.
 */
export default function FinalBloomChapter({ onReplay }) {
  const hasFiredRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (hasFiredRef.current || prefersReducedMotion) return;
    hasFiredRef.current = true;
    let cancelled = false;

    loadConfetti().then((confetti) => {
      if (cancelled) return;
      const petal = confetti.shapeFromText({ text: '🌸', scalar: 2.2 });
      const leaf = confetti.shapeFromText({ text: '🌿', scalar: 2 });

      confetti({
        particleCount: 50,
        spread: 90,
        startVelocity: 22,
        gravity: 0.5,
        ticks: 260,
        origin: { y: 0.15 },
        shapes: [petal, leaf],
        scalar: 1,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[18rem] leading-none opacity-[0.04]"
      >
        🌸
      </span>

      <motion.div
        className="relative z-10 flex w-full max-w-lg flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 font-body text-xs uppercase tracking-[0.4em]"
          style={{ color: 'rgba(141,166,92,0.85)' }}
        >
          {finalBloom.eyebrow}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-4 text-xl tracking-widest opacity-60" style={{ color: '#8DA65C' }}>
          🌸 🌿 🌸
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mb-6 font-title text-4xl font-semibold leading-tight sm:text-5xl"
          style={{
            background: 'linear-gradient(135deg, #8DA65C 0%, #6e8347 40%, #4A4A4A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {finalBloom.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mb-8 font-body text-sm leading-relaxed sm:text-base"
          style={{ color: 'rgba(74,74,74,0.75)' }}
        >
          {finalBloom.message}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-title text-lg italic"
          style={{ color: '#4A4A4A' }}
        >
          {finalBloom.blessingLine}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mb-10 font-title text-lg italic"
          style={{ color: '#4A4A4A' }}
        >
          {finalBloom.fromLine}
        </motion.p>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={onReplay}
          className="mb-14 flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-xs uppercase tracking-[0.2em]"
          style={{
            border: '1px solid rgba(141,166,92,0.35)',
            color: 'rgba(141,166,92,0.8)',
          }}
          whileHover={{
            borderColor: 'rgba(141,166,92,0.65)',
            color: '#8DA65C',
            backgroundColor: 'rgba(141,166,92,0.06)',
          }}
          whileTap={{ scale: 0.96 }}
        >
          <RotateCcw size={14} />
          {finalBloom.replayLabel}
        </motion.button>

        <motion.div variants={fadeUp} className="flex justify-center gap-6 text-lg">
          {['🌸', '🌿', '🌼'].map((emoji, i) => (
            <motion.span
              key={emoji}
              className="animate-icon-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 font-body text-[0.7rem]"
          style={{ color: 'rgba(74,74,74,0.4)' }}
        >
          {finalBloom.signature}
        </motion.p>
      </motion.div>
    </section>
  );
}
