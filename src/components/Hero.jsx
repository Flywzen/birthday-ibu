import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { hero, profile } from '../data/content';
import AgeCounter from './AgeCounter';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 28 },
  },
};

/** Decorative botanical SVG silhouette — light, no external deps. */
function FloralCorner({ side = 'left' }) {
  const flip = side === 'right' ? 'scale(-1,1)' : undefined;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 200"
      className="absolute bottom-0 h-40 w-28 opacity-[0.12] sm:h-52 sm:w-36"
      style={{
        [side]: 0,
        transform: flip,
        color: '#8DA65C',
        fill: 'currentColor',
      }}
    >
      {/* Stem */}
      <path d="M70 200 Q68 140 60 100 Q50 60 30 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="50" cy="90" rx="22" ry="10" transform="rotate(-35,50,90)" />
      <ellipse cx="42" cy="128" rx="18" ry="8" transform="rotate(20,42,128)" />
      <ellipse cx="66" cy="68" rx="16" ry="7" transform="rotate(-55,66,68)" />
      {/* Small bloom */}
      <circle cx="28" cy="27" r="7" />
      <circle cx="20" cy="16" r="4.5" />
      <circle cx="36" cy="14" r="5" />
      <circle cx="26" cy="38" r="4" />
    </svg>
  );
}

export default function Hero() {
  const typedText = useTypewriter(hero.typewriterLines);
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center"
    >
      {/* Background: soft layered botanical gradient — no photo needed */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #fff8f8 0%, #fee8ef 25%, #f9f5f0 55%, #eef5e6 80%, #fff8f8 100%)',
          }}
        />
        {/* Subtle radial bloom at center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(247,202,201,0.22) 0%, transparent 70%)',
          }}
        />
        {/* Bottom fade into page */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,248,248,0.9))',
          }}
        />
      </motion.div>

      {/* Botanical corner accents */}
      <FloralCorner side="left" />
      <FloralCorner side="right" />

      {/* Large watermark bloom */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none text-[20rem] leading-none opacity-[0.04]"
      >
        🌸
      </span>

      <motion.div
        className="relative z-10 flex w-full flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="mb-3 font-body text-xs uppercase tracking-[0.4em]"
          style={{ color: 'rgba(141,166,92,0.85)' }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="mb-2 font-title text-5xl font-semibold leading-tight md:text-7xl"
          style={{
            background: 'linear-gradient(135deg, #8DA65C 0%, #6e8347 40%, #4A4A4A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {profile.name}
        </motion.h1>

        {/* Floral separator */}
        <motion.div variants={fadeUp} className="my-3 text-xl tracking-widest opacity-60" style={{ color: '#8DA65C' }}>
          🌸 🌿 🌸
        </motion.div>

        {/* Divider line */}
        <motion.div
          variants={fadeUp}
          className="mb-5 h-px w-24"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(141,166,92,0.5), transparent)',
          }}
        />

        {/* Typewriter */}
        <motion.div variants={fadeUp} className="z-10 mb-6 min-h-[3.5rem] px-2">
          <p
            className="font-title text-lg italic md:text-2xl"
            style={{ color: 'rgba(74,74,74,0.78)' }}
          >
            {typedText}
            <span className="animate-cursor-blink" style={{ color: '#8DA65C' }}>|</span>
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="mb-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href={hero.ctaPrimary.href}
            className="rounded-full px-7 py-3 font-body text-sm font-medium text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #8DA65C 0%, #6e8347 100%)',
              boxShadow: '0 8px 24px rgba(141,166,92,0.32)',
            }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 12px 32px rgba(141,166,92,0.46)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            {hero.ctaPrimary.label}
          </motion.a>
          <motion.a
            href={hero.ctaSecondary.href}
            className="rounded-full px-7 py-3 font-body text-sm font-medium backdrop-blur-sm"
            style={{
              border: '1.5px solid rgba(141,166,92,0.4)',
              color: 'rgba(141,166,92,0.9)',
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(141,166,92,0.7)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            {hero.ctaSecondary.label}
          </motion.a>
        </motion.div>

        {/* Age counter */}
        <motion.div variants={fadeUp} className="mb-10 w-full">
          <AgeCounter />
        </motion.div>

        {/* Quote block */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-xl rounded-2xl p-6"
          style={{
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(247,202,201,0.5)',
            backdropFilter: 'blur(8px)',
          }}
          whileHover={{
            borderColor: 'rgba(141,166,92,0.4)',
            backgroundColor: 'rgba(255,255,255,0.75)',
          }}
          transition={{ duration: 0.3 }}
        >
          <p
            className="text-justify font-title text-sm italic leading-relaxed"
            style={{ color: 'rgba(74,74,74,0.82)' }}
          >
            "{hero.quote.text}"
          </p>
          <p
            className="mt-3 text-right font-body text-xs tracking-widest"
            style={{ color: 'rgba(141,166,92,0.75)' }}
          >
            {hero.quote.attribution}
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          variants={fadeUp}
          href="#stats"
          aria-label="Scroll down"
          className="mt-10"
          style={{ color: 'rgba(141,166,92,0.6)' }}
          whileHover={{ y: 4, color: '#8DA65C' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="animate-scroll-bounce block">
            <ChevronDown size={22} />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
