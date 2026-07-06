import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { bloom } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 24 } },
};

/**
 * Bloom — halaman singkat, murni visual. Bukan bab bercerita seperti yang
 * lain; ini jeda sejenak sebelum masuk ke Doa, satu gambar bunga yang
 * bergoyang pelan, tanpa banyak teks di sekelilingnya.
 */
export default function BloomChapter() {
  const reduceMotion = useReducedMotion();
  const src = reduceMotion
    ? '/assets/decor/bloom-sway-poster.webp'
    : '/assets/decor/bloom-sway.webp';

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 py-24 text-center">
      <SectionHeading
        num={bloom.numeral}
        subtitle={bloom.eyebrow}
        subtitlePosition="above"
        title={bloom.title}
      />

      <motion.img
        src={src}
        alt="Bunga kecil yang bergoyang pelan"
        className="mt-10 h-56 w-56 sm:h-72 sm:w-72"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      />

      <motion.p
        className="relative z-10 mt-8 max-w-xs font-body text-sm"
        style={{ color: 'rgba(74,74,74,0.75)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ delay: 0.15 }}
      >
        {bloom.caption}
      </motion.p>
    </section>
  );
}
