import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';

import BackgroundEffects from './components/BackgroundEffects';
import AnimatedParticles from './components/AnimatedParticles';
import Navbar from './components/layout/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import FlightTimeline from './components/FlightTimeline';
import TraitGrid from './components/TraitGrid';
import QuoteCards from './components/QuoteCards';
import LetterEnvelope from './components/LetterEnvelope';
import Footer from './components/layout/Footer';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const hasFiredRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Guard against React StrictMode double-invoke in dev.
    if (hasFiredRef.current || prefersReducedMotion) return;
    hasFiredRef.current = true;

    // Opening confetti burst — floral palette.
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.35 },
      colors: ['#F7CAC9', '#F5C9D4', '#C7DD9D', '#8DA65C', '#FEE0E9', '#fff8f8'],
    });
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen font-body" style={{ color: '#4A4A4A' }}>
      <BackgroundEffects />
      <AnimatedParticles />
      <Navbar />

      <main className="relative">
        {/* 1 · Hero — full-screen welcome with typewriter + age counter */}
        <Hero />

        {/* 2 · Stats strip — years / months / total days */}
        <StatsStrip />

        {/* 3 · Timeline — Mama's milestones, botanical icon cards */}
        <FlightTimeline />

        {/* 4 · Trait grid — "Things We Love About You" */}
        <TraitGrid />

        {/* 5 · Quote carousel — blessings & floating thoughts */}
        <QuoteCards />

        {/* 6 · Letter envelope — heartfelt letter with floral seal */}
        <LetterEnvelope />
      </main>

      <Footer />
      <MusicPlayer />
    </div>
  );
}
