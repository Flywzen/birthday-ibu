import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/common/SectionHeading';
import OpeningEmblem from '../components/common/OpeningEmblem';
import { letter } from '../data/content';

const letterParaVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const paraItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 26 },
  },
};

/** Floral ornament above the envelope — three soft botanical badges. */
function FloralOrnament() {
  const items = [
    { emoji: '🌷', label: 'Cinta' },
    { emoji: '🌿', label: 'Kehangatan' },
    { emoji: '🌼', label: 'Syukur' },
  ];

  return (
    <div className="mx-auto mb-10 flex items-end justify-center gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: i * 0.1 }}
          whileHover={{ y: -6, scale: 1.06 }}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-sm"
            style={{
              background:
                'linear-gradient(135deg, rgba(247,202,201,0.35) 0%, rgba(255,248,248,0.7) 100%)',
              border: '1.5px solid rgba(247,202,201,0.55)',
            }}
          >
            {item.emoji}
          </div>
          <span
            className="font-body text-[0.6rem] uppercase tracking-[0.2em]"
            style={{ color: 'rgba(141,166,92,0.65)' }}
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function LetterChapter() {
  const [isOpen, setIsOpen] = useState(false);
  const [flapBehind, setFlapBehind] = useState(false);
  const [hasFired, setHasFired] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function openLetter() {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => setFlapBehind(true), 300);

    if (!hasFired && !prefersReducedMotion) {
      setHasFired(true);
      setTimeout(() => {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F7CAC9', '#F5C9D4', '#C7DD9D', '#8DA65C', '#FEE0E9', '#fff8f8'],
        });
      }, 650);
    }
  }

  function closeLetter() {
    setIsOpen(false);
    setFlapBehind(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLetter();
    }
  }

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 py-24">
      <SectionHeading
        num={letter.numeral}
        title={letter.title}
        titleClassName="font-title italic"
        subtitle={letter.subtitle}
        subtitlePosition="below"
        showDivider={false}
      />

      <div className="mx-auto mt-14 w-full max-w-xl">
        <FloralOrnament />

        {!isOpen && (
          <motion.div
            role="button"
            tabIndex={0}
            aria-label={letter.openAriaLabel}
            onClick={openLetter}
            onKeyDown={handleKeyDown}
            className="group mx-auto flex w-fit cursor-pointer flex-col items-center gap-4"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <div
              className="relative h-[220px] w-[320px] sm:h-[260px] sm:w-[380px]"
              style={{
                perspective: 600,
                filter:
                  'drop-shadow(0 0 18px rgba(247,202,201,0.5)) drop-shadow(0 8px 32px rgba(0,0,0,0.10))',
              }}
            >
              <div
                className="absolute inset-0 z-10 rounded-xl"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(255,248,248,0.98) 0%, rgba(254,240,245,0.99) 100%)',
                  border: '1.5px solid rgba(247,202,201,0.65)',
                }}
              />

              <motion.div
                className="absolute left-0 right-0 top-0 h-[55%] rounded-t-xl"
                style={{
                  transformOrigin: 'top center',
                  transformPerspective: 600,
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  zIndex: flapBehind ? 10 : 30,
                  background:
                    'linear-gradient(180deg, rgba(245,201,212,0.6) 0%, rgba(254,240,245,0.7) 100%)',
                  border: '1.5px solid rgba(247,202,201,0.55)',
                  borderBottom: 'none',
                }}
                animate={{ rotateX: isOpen ? -180 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 z-20 flex h-[60%] flex-col items-center justify-center gap-2 rounded-b-xl pt-7 sm:pt-10"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(255,248,248,0.98) 0%, rgba(255,248,248,0.9) 100%)',
                  borderTop: '1px solid rgba(247,202,201,0.4)',
                }}
              >
                <p
                  className="font-title text-sm uppercase tracking-[0.25em]"
                  style={{ color: '#8DA65C' }}
                >
                  {letter.openLabel}
                </p>
                <p
                  className="font-body text-[0.7rem] tracking-widest"
                  style={{ color: 'rgba(141,166,92,0.5)' }}
                >
                  ↑ {letter.openHint} ↑
                </p>
              </div>

              <div
                className="animate-seal-pulse absolute left-1/2 top-1/2 z-40 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #F7CAC9 0%, #F5C9D4 100%)',
                  border: '2.5px solid rgba(141,166,92,0.6)',
                  boxShadow:
                    '0 0 0 4px rgba(141,166,92,0.08), 0 4px 20px rgba(247,202,201,0.4)',
                }}
              >
                <div className="h-9 w-9">
                  <OpeningEmblem variant="icon" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
              className="relative rounded-2xl p-6 sm:p-10"
              style={{
                background: 'rgba(255,255,255,0.88)',
                border: '1px solid rgba(247,202,201,0.5)',
                backdropFilter: 'blur(12px)',
                backgroundImage:
                  'repeating-linear-gradient(transparent, transparent 31px, rgba(247,202,201,0.12) 31px, rgba(247,202,201,0.12) 32px)',
                backgroundSize: '100% 32px',
                backgroundPosition: '0 56px',
              }}
            >
              <motion.p
                className="text-center text-base tracking-[0.5em]"
                style={{ color: 'rgba(141,166,92,0.4)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                🌸 · 🌿 · 🌸
              </motion.p>

              <motion.p
                className="mt-6 font-title text-lg italic"
                style={{ color: '#4A4A4A' }}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.25 }}
              >
                {letter.salutation}
              </motion.p>

              <motion.div
                className="mt-4 space-y-5"
                variants={letterParaVariants}
                initial="hidden"
                animate="visible"
              >
                {letter.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={paraItem}
                    className="font-body text-[0.95rem] leading-[2.1]"
                    style={{ color: 'rgba(74,74,74,0.85)' }}
                  >
                    {p}
                  </motion.p>
                ))}
              </motion.div>

              <motion.p
                className="mt-6 font-title text-lg italic"
                style={{ color: '#4A4A4A' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {letter.closing.line1}
              </motion.p>
              <motion.p
                className="font-title text-lg italic"
                style={{ color: '#4A4A4A' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                {letter.closing.line2}
              </motion.p>

              <motion.p
                className="mt-6 text-center text-base tracking-[0.5em]"
                style={{ color: 'rgba(141,166,92,0.4)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                🌸 · 🌿 · 🌸
              </motion.p>

              <motion.button
                onClick={closeLetter}
                className="mx-auto mt-8 block rounded-full px-6 py-2 font-body text-xs uppercase tracking-[0.2em]"
                style={{
                  border: '1px solid rgba(141,166,92,0.35)',
                  color: 'rgba(141,166,92,0.8)',
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, type: 'spring', stiffness: 220, damping: 26 }}
                whileHover={{
                  borderColor: 'rgba(141,166,92,0.65)',
                  color: '#8DA65C',
                  backgroundColor: 'rgba(141,166,92,0.06)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                {letter.closeLabel}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}