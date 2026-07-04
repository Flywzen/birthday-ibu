import { motion } from 'framer-motion';

/**
 * Reusable section heading — refined motion pass:
 *   - watermark numeral: slow ambient float (CSS `animate-float-slow`)
 *     that only starts after the fade-in, so it doesn't fight the entrance.
 *   - eyebrow → title → divider reveal on a proper stagger with a softer
 *     spring curve, all triggered when the heading enters the viewport.
 *   - title uses a per-word slide-in for a subtle "typeset" feel without
 *     going full letter-by-letter (which reads cartoony).
 *   - divider draws in from the center, then breathes (animate-divider-glow)
 *     so a chapter that stays on screen keeps a small living detail.
 *
 * Props unchanged from the previous version — drop-in replacement.
 */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const softRise = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const watermarkVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionHeading({
  num,
  decoration = 'number',
  subtitle,
  subtitlePosition = 'below',
  title,
  titleClassName = '',
  showDivider = true,
}) {
  const words = typeof title === 'string' ? title.split(' ') : [title];

  return (
    <motion.div
      className="relative text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Large watermark numeral — fades in, then floats gently forever. */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 select-none whitespace-nowrap font-title text-[clamp(6rem,18vw,14rem)] leading-none animate-float-slow"
        style={{
          letterSpacing: '-0.05em',
          color: 'rgba(141,166,92,0.06)',
          transform: 'translateX(-50%)',
          willChange: 'transform, opacity',
        }}
        variants={watermarkVariants}
      >
        {num}
      </motion.span>

      {/* Floral decoration or plain number badge */}
      {decoration === 'floral' ? (
        <motion.div
          className="relative z-10 mx-auto flex max-w-[280px] items-center justify-center gap-3 text-base tracking-[0.2rem]"
          style={{ color: '#6E8347' }}
          variants={softRise}
        >
          <motion.span
            className="h-px max-w-[100px] flex-1 bg-gradient-to-r from-transparent to-current opacity-40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ transformOrigin: 'right center' }}
          />
          🌸&nbsp;🌿&nbsp;🌸
          <motion.span
            className="h-px max-w-[100px] flex-1 bg-gradient-to-l from-transparent to-current opacity-40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{ transformOrigin: 'left center' }}
          />
        </motion.div>
      ) : (
        <motion.span
          className="relative z-10 mb-2 block font-body text-[0.55rem] uppercase tracking-[0.55em]"
          style={{ color: 'rgba(141,166,92,0.5)' }}
          variants={softRise}
        >
          {num}
        </motion.span>
      )}

      {subtitle && subtitlePosition === 'above' && (
        <motion.p
          className="relative z-10 font-body text-xs uppercase tracking-[0.3em]"
          style={{ color: 'rgba(141,166,92,0.7)' }}
          variants={softRise}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Title — per-word slide-in on top of the container stagger */}
      <motion.h2
        className={`relative z-10 font-title text-3xl md:text-5xl text-text ${titleClassName}`}
        variants={containerVariants}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block"
            style={{ marginRight: i < words.length - 1 ? '0.28em' : 0 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      {subtitle && subtitlePosition === 'below' && (
        <motion.p
          className="relative z-10 mt-3 font-body text-xs uppercase tracking-[0.3em]"
          style={{ color: 'rgba(141,166,92,0.65)' }}
          variants={softRise}
        >
          {subtitle}
        </motion.p>
      )}

      {showDivider && (
        <motion.div
          className="relative z-10 mx-auto mt-4 h-px w-20 animate-divider-glow"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(141,166,92,0.55), transparent)',
            transformOrigin: 'center',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        />
      )}
    </motion.div>
  );
}
