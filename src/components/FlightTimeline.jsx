import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';
import { timeline } from '../data/content';

// Animation variants — same spring choreography as the original.
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 180, damping: 22 },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 22, delay: 0.1 },
  },
};

/**
 * Botanical icon badge — replaces photo/ImageWithFallback.
 * Each timeline item now gets a styled emoji in a soft gradient circle.
 */
function IconBadge({ icon, isToday }) {
  return (
    <div
      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-sm"
      style={{
        background: isToday
          ? 'linear-gradient(135deg, rgba(141,166,92,0.18) 0%, rgba(199,221,157,0.25) 100%)'
          : 'linear-gradient(135deg, rgba(247,202,201,0.25) 0%, rgba(245,201,212,0.3) 100%)',
        border: isToday
          ? '1.5px solid rgba(141,166,92,0.35)'
          : '1.5px solid rgba(247,202,201,0.5)',
      }}
    >
      {icon}
    </div>
  );
}

function TimelineCard({ item, isToday }) {
  return (
    <motion.div
      className="rounded-2xl p-5 text-center md:text-left"
      style={{
        background: isToday
          ? 'rgba(255,255,255,0.72)'
          : 'rgba(255,255,255,0.55)',
        border: isToday
          ? '1.5px solid rgba(141,166,92,0.35)'
          : '1px solid rgba(247,202,201,0.45)',
        backdropFilter: 'blur(8px)',
      }}
      whileHover={{
        y: -4,
        borderColor: isToday ? 'rgba(141,166,92,0.55)' : 'rgba(247,202,201,0.7)',
        boxShadow: isToday
          ? '0 12px 36px rgba(141,166,92,0.14)'
          : '0 12px 36px rgba(247,202,201,0.22)',
        backgroundColor: 'rgba(255,255,255,0.82)',
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
    >
      <IconBadge icon={item.icon} isToday={isToday} />

      <p
        className="mb-1 font-body text-xs uppercase tracking-[0.2em]"
        style={{ color: isToday ? '#8DA65C' : 'rgba(141,166,92,0.7)' }}
      >
        {item.date}
      </p>
      <h3
        className="mb-2 font-title text-lg md:text-xl"
        style={{ color: '#4A4A4A' }}
      >
        {item.title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: 'rgba(74,74,74,0.68)' }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function FlightTimeline() {
  const today = new Date().getFullYear();
  const items = [
    ...timeline.items,
    {
      ...timeline.todayItem,
      date: `${timeline.todayItem.dateLabel} · ${today}`,
      isToday: true,
    },
  ];

  return (
    <section id="timeline" className="relative z-10 px-6 py-24">
      <SectionHeading
        num={timeline.eyebrowNum}
        decoration="floral"
        subtitle={timeline.eyebrow}
        subtitlePosition="above"
        title={timeline.title}
        titleClassName=""
      />

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical connector line */}
        <motion.div
          className="absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              'linear-gradient(to bottom, rgba(247,202,201,0.5), rgba(141,166,92,0.25), transparent)',
          }}
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={item.title}
              className={`relative mb-10 pl-10 last:mb-0 md:mb-16 md:w-1/2 md:pl-0 ${
                isLeft ? 'md:mr-auto md:pr-10 md:text-right' : 'md:ml-auto md:pl-10 md:text-left'
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Timeline dot */}
              <motion.span
                className={`absolute top-6 h-3 w-3 rounded-full ring-4 left-[11px] md:left-auto ${
                  isLeft ? 'md:-right-[7px]' : 'md:-left-[7px]'
                }`}
                style={{
                  backgroundColor: item.isToday ? '#8DA65C' : '#F7CAC9',
                  ringColor: '#fff8f8',
                }}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />
              <TimelineCard item={item} isToday={Boolean(item.isToday)} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
