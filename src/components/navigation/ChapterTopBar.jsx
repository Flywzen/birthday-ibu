import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { chapters } from '../../data/content';

/**
 * Minimal top bar — no link list, no scroll-jump anchors. Just a slim
 * chapter-progress line, the current chapter's name, and a small menu
 * trigger that opens the full chapter list (ChapterMenu).
 */
export default function ChapterTopBar({ index, total, onOpenMenu }) {
  const current = chapters[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 z-[61] h-[3px] w-full"
        aria-hidden="true"
      >
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(to right, #F7CAC9, #8DA65C, #C7DD9D)' }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        />
      </div>

      <motion.div
        className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-xl"
        style={{
          backgroundColor: 'rgba(255,248,248,0.78)',
          border: '1px solid rgba(247,202,201,0.45)',
          boxShadow: '0 8px 32px rgba(141,166,92,0.06)',
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 28 }}
      >
        <span
          className="font-title text-xs tracking-widest"
          style={{ color: '#8DA65C' }}
        >
          {current.numeral} · {current.label}
        </span>

        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Buka daftar bab"
          className="flex h-7 w-7 items-center justify-center rounded-full"
          style={{ color: '#8DA65C' }}
        >
          <Menu size={17} />
        </button>
      </motion.div>
    </>
  );
}
