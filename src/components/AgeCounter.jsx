import { motion } from 'framer-motion';
import { useAgeCounter } from '../hooks/useAgeCounter';
import { profile, cover } from '../data/content';

const UNITS = [
  { key: 'days',    label: cover.counterUnits.days,    wide: true },
  { key: 'hours',   label: cover.counterUnits.hours },
  { key: 'minutes', label: cover.counterUnits.minutes },
  { key: 'seconds', label: cover.counterUnits.seconds },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const unitItem = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

export default function AgeCounter() {
  const age = useAgeCounter(profile.birthDate);

  return (
    <motion.div
      className="mx-auto w-full max-w-xl rounded-2xl px-4 py-5 backdrop-blur-md sm:px-6"
      style={{
        background: 'rgba(255,255,255,0.55)',
        border: '1px solid rgba(247,202,201,0.45)',
      }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.3 }}
    >
      <p
        className="mb-4 text-center font-body text-[0.65rem] uppercase tracking-[0.35em]"
        style={{ color: 'rgba(141,166,92,0.7)' }}
      >
        {cover.counterLabel}
      </p>

      <motion.div
        className="grid grid-cols-[1.18fr_0.9fr_0.9fr_0.9fr] gap-2 sm:gap-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {UNITS.map((unit) => (
          <motion.div
            key={unit.key}
            variants={unitItem}
            className="rounded-xl py-3 text-center"
            style={{
              background: 'rgba(255,248,248,0.7)',
              border: '1px solid rgba(247,202,201,0.35)',
            }}
            whileHover={{
              borderColor: 'rgba(141,166,92,0.35)',
              backgroundColor: 'rgba(255,255,255,0.85)',
            }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="block font-title text-xl tabular-nums sm:text-2xl"
              style={{ color: '#4A4A4A' }}
            >
              {age[unit.key]}
            </span>
            <span
              className="mt-1 block font-body text-[0.6rem] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(74,74,74,0.5)' }}
            >
              {unit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
