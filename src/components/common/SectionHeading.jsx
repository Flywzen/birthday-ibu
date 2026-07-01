import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 26 },
  },
};

/**
 * Reusable section heading component.
 * Props:
 *   num          — large watermark numeral (e.g. '01')
 *   decoration   — 'number' (default) | 'floral' (shows 🌸 🌿 🌸 separator)
 *   subtitle     — small eyebrow text above or below the title
 *   subtitlePosition — 'above' | 'below' (default)
 *   title        — main heading text
 *   titleClassName — extra Tailwind classes for the <h2>
 *   showDivider  — whether to show the decorative hr line (default true)
 */
export default function SectionHeading({
  num,
  decoration = 'number',
  subtitle,
  subtitlePosition = 'below',
  title,
  titleClassName = '',
  showDivider = true,
}) {
  return (
    <motion.div
      className="relative text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Large watermark numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap font-title text-[clamp(6rem,18vw,14rem)] leading-none"
        style={{
          letterSpacing: '-0.05em',
          color: 'rgba(141,166,92,0.06)',
        }}
      >
        {num}
      </span>

      {/* Floral decoration or plain number badge */}
      {decoration === 'floral' ? (
        <motion.div
          className="relative z-10 mx-auto flex max-w-[280px] items-center justify-center gap-3 text-base tracking-[0.2rem]"
          style={{ color: '#8DA65C' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.1 }}
        >
          <span className="h-px max-w-[100px] flex-1 bg-gradient-to-r from-transparent to-current opacity-40" />
          🌸&nbsp;🌿&nbsp;🌸
          <span className="h-px max-w-[100px] flex-1 bg-gradient-to-l from-transparent to-current opacity-40" />
        </motion.div>
      ) : (
        <span
          className="relative z-10 mb-2 block font-body text-[0.55rem] uppercase tracking-[0.55em]"
          style={{ color: 'rgba(141,166,92,0.5)' }}
        >
          {num}
        </span>
      )}

      {subtitle && subtitlePosition === 'above' && (
        <p
          className="relative z-10 font-body text-xs uppercase tracking-[0.3em]"
          style={{ color: 'rgba(141,166,92,0.7)' }}
        >
          {subtitle}
        </p>
      )}

      <h2 className={`relative z-10 font-title text-3xl md:text-5xl text-text ${titleClassName}`}>
        {title}
      </h2>

      {subtitle && subtitlePosition === 'below' && (
        <p
          className="relative z-10 mt-3 font-body text-xs uppercase tracking-[0.3em]"
          style={{ color: 'rgba(141,166,92,0.65)' }}
        >
          {subtitle}
        </p>
      )}

      {showDivider && (
        <motion.div
          className="relative z-10 mx-auto mt-4 h-px w-20"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(141,166,92,0.55), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.2 }}
        />
      )}
    </motion.div>
  );
}
