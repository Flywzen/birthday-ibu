import { motion } from 'framer-motion';
import { useAgeCounter } from '../hooks/useAgeCounter';
import { profile, stats } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
};

export default function StatsStrip() {
  const age = useAgeCounter(profile.birthDate);
  const values = {
    years: age.years,
    months: age.months,
    days: age.totalDaysFormatted,
  };

  return (
    <motion.section
      id="stats"
      className="relative z-10 mx-auto grid max-w-3xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item}
          className="rounded-2xl px-4 py-6 text-center backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(247,202,201,0.4)',
          }}
          whileHover={{
            scale: 1.04,
            borderColor: 'rgba(141,166,92,0.4)',
            backgroundColor: 'rgba(255,255,255,0.75)',
            boxShadow: '0 8px 32px rgba(141,166,92,0.12)',
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        >
          <motion.span
            className="block font-title text-3xl tabular-nums"
            style={{ color: '#8DA65C' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 240, damping: 22, delay: 0.15 }}
          >
            {values[stat.id]}
          </motion.span>
          <span
            className="mt-2 block font-body text-[0.65rem] uppercase tracking-[0.25em]"
            style={{ color: 'rgba(74,74,74,0.55)' }}
          >
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.section>
  );
}
