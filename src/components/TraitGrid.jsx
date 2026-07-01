import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import { traits } from '../data/content';

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
 * "Things We Love About You" — replaces PhotoBento.
 *
 * 4-column responsive grid (1 col mobile → 2 col sm → 4 col lg).
 * Each card: large emoji icon + title + one-line description.
 * Intentionally minimal — no images, no fallbacks, purely typographic
 * and icon-based so the section always looks exactly as designed.
 */
export default function TraitGrid() {
  return (
    <section id="traits" className="relative z-10 px-6 py-24">
      <SectionHeading
        num={traits.eyebrowNum}
        subtitle={traits.eyebrow}
        subtitlePosition="above"
        title={traits.title}
        titleClassName=""
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {traits.items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={card}
            className="group relative overflow-hidden rounded-2xl p-6 text-center"
            style={{
              background: 'rgba(255,255,255,0.58)',
              border: '1px solid rgba(247,202,201,0.42)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(141,166,92,0.45)',
              backgroundColor: 'rgba(255,255,255,0.82)',
              boxShadow: '0 12px 36px rgba(141,166,92,0.12)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            {/* Subtle radial glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(199,221,157,0.18) 0%, transparent 70%)',
              }}
            />

            {/* Icon */}
            <motion.span
              className="mb-4 block text-4xl"
              whileHover={{ scale: 1.18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {item.icon}
            </motion.span>

            {/* Title */}
            <h3
              className="mb-2 font-title text-base font-semibold leading-snug"
              style={{ color: '#4A4A4A' }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="font-body text-xs leading-relaxed"
              style={{ color: 'rgba(74,74,74,0.62)' }}
            >
              {item.desc}
            </p>

            {/* Subtle bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 rounded-b-2xl transition-transform duration-300 group-hover:scale-x-100"
              style={{
                background:
                  'linear-gradient(to right, rgba(247,202,201,0.6), rgba(141,166,92,0.5))',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
