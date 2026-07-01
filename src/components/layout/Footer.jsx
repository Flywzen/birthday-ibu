import { motion } from 'framer-motion';
import { footer } from '../../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 26 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 py-12 text-center"
      style={{
        background: 'rgba(254,224,233,0.35)',
        borderTop: '1px solid rgba(247,202,201,0.4)',
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Decorative gradient bar */}
      <motion.div
        variants={item}
        className="mx-auto mb-5 h-[2px] w-24 rounded-full"
        style={{
          background: 'linear-gradient(to right, #F7CAC9, #8DA65C, #C7DD9D)',
        }}
      />

      {/* Title */}
      <motion.p
        variants={item}
        className="mb-2 font-title text-2xl md:text-3xl"
        style={{ color: '#4A4A4A' }}
      >
        {footer.title}
      </motion.p>

      {/* Subtitle */}
      <motion.p
        variants={item}
        className="font-body text-xs uppercase tracking-[0.3em]"
        style={{ color: 'rgba(74,74,74,0.45)' }}
      >
        {footer.subtitle}
      </motion.p>

      {/* Floral icon row */}
      <motion.div variants={item} className="mt-6 flex justify-center gap-6 text-xl">
        {['🌸', '🌿', '🌼'].map((emoji, i) => (
          <motion.span
            key={emoji}
            className="animate-icon-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
            whileHover={{ scale: 1.3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>

      {/* Note */}
      <motion.p
        variants={item}
        className="mt-5 font-body text-xs"
        style={{ color: 'rgba(74,74,74,0.35)' }}
      >
        {footer.note}
      </motion.p>
    </motion.footer>
  );
}
