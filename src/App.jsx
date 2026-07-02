import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import BackgroundEffects from './components/BackgroundEffects';
import AnimatedParticles from './components/AnimatedParticles';
import MusicPlayer from './components/MusicPlayer';
import ChapterTopBar from './components/navigation/ChapterTopBar';
import ChapterNav from './components/navigation/ChapterNav';
import ChapterMenu from './components/navigation/ChapterMenu';

import CoverChapter from './chapters/CoverChapter';
import GardenChapter from './chapters/GardenChapter';
import BlessingChapter from './chapters/BlessingChapter';
import TimelineChapter from './chapters/TimelineChapter';
import LetterChapter from './chapters/LetterChapter';
import FinalBloomChapter from './chapters/FinalBloomChapter';

import { useChapterNavigation } from './hooks/useChapterNavigation';

// Order here must match `chapters` in data/content.js.
const CHAPTER_COMPONENTS = [
  GardenChapter,
  BlessingChapter,
  TimelineChapter,
  LetterChapter,
  FinalBloomChapter,
];

const pageVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useChapterNavigation(CHAPTER_COMPONENTS.length, { keyboardDisabled: menuOpen });
  const [hasInteracted, setHasInteracted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { phase, index, direction, isFirst, isLast, goNext, goPrev, goTo, openGift, restart, swipeHandlers } = nav;

  const CurrentChapter = CHAPTER_COMPONENTS[index];
  const pageTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="relative min-h-screen font-body" style={{ color: '#4A4A4A' }}>
      <BackgroundEffects />
      <AnimatedParticles />

      {phase === 'chapters' && (
        <>
          <ChapterTopBar
            index={index}
            total={CHAPTER_COMPONENTS.length}
            menuOpen={menuOpen}
            onOpenMenu={() => setMenuOpen(true)}
          />
          <ChapterNav
            index={index}
            total={CHAPTER_COMPONENTS.length}
            isFirst={isFirst}
            isLast={isLast}
            onPrev={goPrev}
            onNext={goNext}
            onGoTo={goTo}
          />
          <ChapterMenu
            open={menuOpen}
            currentIndex={index}
            onClose={() => setMenuOpen(false)}
            onGoTo={goTo}
          />
        </>
      )}

      <main
        className="relative"
        {...(phase === 'chapters' ? swipeHandlers : {})}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {phase === 'cover' ? (
            <motion.div
              key="cover"
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              <CoverChapter
                onFirstInteraction={() => setHasInteracted(true)}
                onContinue={openGift}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`chapter-${index}`}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
            >
              <CurrentChapter onReplay={restart} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {hasInteracted && <MusicPlayer />}
    </div>
  );
}
