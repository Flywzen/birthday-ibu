import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { garden } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
};

/**
 * A single "flower" — closed by default (bud + title only), taps open into
 * bloom (icon pops, description unfolds). This replaces the old always-open
 * hover-lift card so the section reads as something to discover rather than
 * a static grid to scan.
 */
function GardenCard({ item, offset }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setOpen((v) => !v)}
      variants={card}
      aria-expanded={open}
      className={`group relative overflow-hidden rounded-2xl p-6 text-center ${offset ? 'sm:translate-y-4' : ''}`}
      style={{
        background: open ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.55)',
        border: open ? '1px solid rgba(141,166,92,0.45)' : '1px solid rgba(199,221,157,0.4)',
        backdropFilter: 'blur(8px)',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(141,166,92,0.45)',
        boxShadow: '0 12px 36px rgba(141,166,92,0.12)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      {/* Subtle radial glow when bloomed */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(199,221,157,0.22) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      <motion.span
        className="relative mb-3 block text-4xl"
        animate={open ? { scale: [0.85, 1.2, 1], rotate: [0, -6, 0] } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
      >
        {open ? item.icon : '🌱'}
      </motion.span>

      <h3
        className="relative mb-1 font-title text-base font-semibold leading-snug"
        style={{ color: '#4A4A4A' }}
      >
        {item.title}
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden font-body text-xs leading-relaxed"
            style={{ color: 'rgba(74,74,74,0.62)' }}
          >
            {item.desc}
          </motion.p>
        )}
      </AnimatePresence>

      {!open && (
        <p
          className="relative mt-1 font-body text-[0.6rem] uppercase tracking-[0.25em]"
          style={{ color: 'rgba(141,166,92,0.5)' }}
        >
          Klik di sini untuk melihat kenangan
        </p>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-b-2xl transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background: 'linear-gradient(to right, rgba(247,202,201,0.6), rgba(141,166,92,0.5))',
        }}
      />
    </motion.button>
  );
}

export default function GardenChapter() {
  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 py-24">
      <SectionHeading
        num={garden.numeral}
        subtitle={garden.eyebrow}
        subtitlePosition="above"
        title={garden.title}
      />

      <p
        className="relative z-10 mx-auto mt-4 max-w-xs text-center font-body text-[0.7rem] uppercase tracking-[0.25em]"
        style={{ color: 'rgba(141,166,92,0.6)' }}
      >
        {garden.hint}
      </p>

      <motion.div
        className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {garden.items.map((item, i) => (
          <GardenCard key={item.title} item={item} offset={i % 2 === 1} />
        ))}
      </motion.div>
    </section>
  );
}
