import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { timeline } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 24 },
  },
};

/**
 * Little Timeline — deliberately not a vertical "journey" line like a
 * legacy/milestone timeline. Small memory notes in a horizontal, swipeable
 * strip, closer to flipping through a few keepsake cards than reading a
 * chronology.
 */
export default function TimelineChapter() {
  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-6 py-24">
      <SectionHeading
        num={timeline.numeral}
        subtitle={timeline.eyebrow}
        subtitlePosition="above"
        title={timeline.title}
      />

      <p
        className="relative z-10 mx-auto mt-4 max-w-xs text-center font-body text-[0.7rem] uppercase tracking-[0.25em]"
        style={{ color: 'rgba(141,166,92,0.6)' }}
      >
        Geser untuk melihat lebih banyak
      </p>

      <motion.div
        className="mx-auto mt-10 flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
        style={{ scrollbarWidth: 'none' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {timeline.items.map((item) => (
          <motion.div
            key={item.note}
            variants={card}
            className="w-[240px] shrink-0 snap-center rounded-2xl p-6 text-center sm:w-[260px]"
            style={{
              background: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(247,202,201,0.45)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{
              y: -4,
              borderColor: 'rgba(141,166,92,0.45)',
              boxShadow: '0 12px 36px rgba(141,166,92,0.12)',
              backgroundColor: 'rgba(255,255,255,0.82)',
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          >
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-sm"
              style={{
                background:
                  'linear-gradient(135deg, rgba(247,202,201,0.25) 0%, rgba(245,201,212,0.3) 100%)',
                border: '1.5px solid rgba(247,202,201,0.5)',
              }}
            >
              {item.icon}
            </div>
            <p
              className="mb-1 font-body text-[0.65rem] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(141,166,92,0.7)' }}
            >
              {item.note}
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'rgba(74,74,74,0.68)' }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
        {/* Trailing spacer: without this, snap-center can't always reach the
            last card on a real swipe, because centering it needs more scroll
            room than the container has. This guarantees that room. */}
        <div className="w-[45vw] shrink-0 sm:w-[30vw]" aria-hidden="true" />
      </motion.div>
    </section>
  );
}