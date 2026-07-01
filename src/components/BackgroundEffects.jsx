/**
 * Ambient background untuk halaman Mama — soft blush/cream gradients
 * dengan glow blob berwarna rose dan sage yang bergerak sangat pelan.
 *
 * Sama seperti versi lama: pure CSS animations, no canvas/JS loop.
 * Hanya 4 blob, semua pointer-events-none, tidak mengganggu interaksi.
 */
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base page gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(165deg, #fff8f8 0%, #fef2f4 28%, #fff5f7 55%, #f9fdf5 80%, #fff8f8 100%)',
        }}
      />

      {/* Blob 1 — soft rose, top-left */}
      <div
        className="animate-glow-drift absolute -left-[10%] top-[2%] h-[320px] w-[580px] rounded-full blur-[48px]"
        style={{
          background:
            'radial-gradient(ellipse at 35% 40%, rgba(247,202,201,0.38) 0%, transparent 62%)',
          animationDuration: '95s',
          opacity: 0.85,
        }}
      />

      {/* Blob 2 — sage green, right-center */}
      <div
        className="animate-glow-drift absolute -right-[8%] top-[30%] h-[260px] w-[460px] rounded-full blur-[42px]"
        style={{
          background:
            'radial-gradient(ellipse at 60% 55%, rgba(199,221,157,0.28) 0%, transparent 65%)',
          animationDuration: '115s',
          animationDelay: '-30s',
          opacity: 0.75,
        }}
      />

      {/* Blob 3 — blush, bottom-left */}
      <div
        className="animate-glow-drift absolute -left-[6%] top-[62%] h-[250px] w-[440px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 70%, rgba(245,201,212,0.28) 0%, transparent 70%)',
          animationDuration: '125s',
          animationDelay: '-55s',
          opacity: 0.7,
        }}
      />

      {/* Blob 4 — light moss, top-right */}
      <div
        className="animate-glow-drift absolute right-[12%] top-[6%] h-[280px] w-[280px] rounded-full blur-[44px]"
        style={{
          background:
            'radial-gradient(circle, rgba(141,166,92,0.12) 0%, transparent 70%)',
          animationDuration: '82s',
          animationDelay: '-12s',
          opacity: 0.8,
        }}
      />

      {/* Subtle top stripe — soft rose gradient */}
      <div
        className="absolute left-0 right-0 top-0 z-10 h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, #F7CAC9 0%, #F5C9D4 30%, #C7DD9D 60%, #8DA65C 85%, #F7CAC9 100%)',
          opacity: 0.55,
        }}
      />
    </div>
  );
}
