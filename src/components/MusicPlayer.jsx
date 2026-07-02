import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music } from 'lucide-react';

/**
 * Floating music player — same iOS Safari autoplay workaround as before.
 * Only the visual palette is changed (dark navy → soft cream/moss).
 */
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const hasStarted = useRef(false);

  // Try autoplay on mount — browser will usually block it until a gesture.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setPlaying(true);
          hasStarted.current = true;
        })
        .catch(() => {
          setNeedsGesture(true);
        });
    }
  }, []);

  // IMPORTANT: NOT async — iOS Safari requires synchronous call from user gesture.
  function startAudio() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    const audio = audioRef.current;
    if (!audio) return;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setPlaying(true);
          setNeedsGesture(false);
        })
        .catch(() => {
          hasStarted.current = false;
        });
    } else {
      setPlaying(true);
      setNeedsGesture(false);
    }
  }

  // Attach to whole document when prompt is active — any tap will start music.
  useEffect(() => {
    if (!needsGesture) return;
    function handleAnyTap() { startAudio(); }
    document.addEventListener('click', handleAnyTap, { once: true });
    document.addEventListener('touchstart', handleAnyTap, { once: true, passive: true });
    return () => {
      document.removeEventListener('click', handleAnyTap);
      document.removeEventListener('touchstart', handleAnyTap);
    };
  }, [needsGesture]);

  // Toggle play / pause.
  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!hasStarted.current) { startAudio(); return; }
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      const promise = audio.play();
      if (promise !== undefined) {
        promise.then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        setPlaying(true);
      }
    }
  }

  return (
    <>
      {/* Full-width tap-to-start banner */}
      <AnimatePresence>
        {needsGesture && (
          <motion.button
            onClick={startAudio}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed left-0 right-0 top-0 z-[61] w-full cursor-pointer border-0 bg-transparent p-0"
            aria-label="Tap untuk mulai musik"
          >
            <div
              className="flex items-center justify-center gap-2.5 px-4 py-3.5 backdrop-blur-md"
              style={{
                background: 'rgba(199,221,157,0.22)',
                borderBottom: '1px solid rgba(141,166,92,0.25)',
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                🎵
              </motion.span>
              <span
                className="select-none font-body text-sm font-semibold tracking-wide"
                style={{ color: '#6e8347' }}
              >
                Tap di mana saja untuk mulai musik
              </span>
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut', delay: 0.6 }}
              >
                🎵
              </motion.span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating music toggle button */}
      <motion.button
        onClick={toggle}
        aria-label="Toggle music"
        aria-pressed={playing}
        className={`fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md ${
          playing ? 'animate-music-pulse' : ''
        }`}
        style={{
          background: 'rgba(255,248,248,0.92)',
          border: playing
            ? '1.5px solid rgba(141,166,92,0.55)'
            : '1px solid rgba(247,202,201,0.55)',
          color: '#8DA65C',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 1 }}
        whileHover={{
          scale: 1.12,
          borderColor: 'rgba(141,166,92,0.7)',
          boxShadow: '0 0 24px rgba(141,166,92,0.25)',
        }}
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {playing ? (
            <motion.span
              key="eq"
              className="flex h-[18px] w-[22px] items-end justify-center gap-[2.5px]"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            >
              <span className="animate-eq-bar h-1.5 w-[3px] rounded-sm [animation-delay:0s]" style={{ background: '#8DA65C' }} />
              <span className="animate-eq-bar h-[15px] w-[3px] rounded-sm [animation-delay:.12s]" style={{ background: '#8DA65C' }} />
              <span className="animate-eq-bar h-2.5 w-[3px] rounded-sm [animation-delay:.24s]" style={{ background: '#8DA65C' }} />
              <span className="animate-eq-bar h-4 w-[3px] rounded-sm [animation-delay:.36s]" style={{ background: '#8DA65C' }} />
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            >
              <Music size={17} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* preload="metadata" (not "auto"): this component only mounts after
          the visitor has already interacted once (see App's hasInteracted
          gate), and playback is attempted immediately on mount via
          .play() below — which itself triggers the browser to start
          fetching audio data. "auto" would additionally keep eagerly
          buffering the whole file in the background while the "tap
          anywhere to start music" banner is waiting for a second gesture,
          which is unnecessary network use on mobile connections. */}
      <audio ref={audioRef} loop preload="metadata">
        <source src="/assets/music/bgm.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
