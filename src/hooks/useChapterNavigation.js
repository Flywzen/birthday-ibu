import { useCallback, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 52;

/**
 * Drives the chapter-based navigation for the whole site.
 *
 * Two phases:
 *   'cover'    — the gift envelope, before the person has opened it.
 *   'chapters' — Garden → Blessing → Timeline → Letter → Final Bloom.
 *
 * Kept intentionally small: plain useState + a direction flag for the
 * AnimatePresence transition (same pattern QuoteCards already used for its
 * slide carousel), no routing library. See README for why routing isn't
 * needed here.
 */
export function useChapterNavigation(totalChapters) {
  const [phase, setPhase] = useState('cover');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const openGift = useCallback(() => {
    setPhase('chapters');
    setIndex(0);
    setDirection(1);
  }, []);

  const restart = useCallback(() => {
    setPhase('cover');
    setIndex(0);
    setDirection(-1);
  }, []);

  const goTo = useCallback(
    (nextIndex) => {
      const clamped = Math.max(0, Math.min(totalChapters - 1, nextIndex));
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, totalChapters],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Keyboard: ArrowRight/ArrowLeft to move between chapters once opened.
  useEffect(() => {
    if (phase !== 'chapters') return undefined;
    function handleKey(e) {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [phase, goNext, goPrev]);

  // Touch swipe support — same delta/threshold approach as the quote carousel.
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  return {
    phase,
    index,
    direction,
    isFirst: index === 0,
    isLast: index === totalChapters - 1,
    openGift,
    restart,
    goNext,
    goPrev,
    goTo,
    swipeHandlers: { onTouchStart, onTouchEnd },
  };
}
