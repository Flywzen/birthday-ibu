/**
 * Ambient background untuk halaman Mama — cream sebagai warna dominan,
 * dengan glow blob sage/moss sebagai aksen utama dan rose/blush sebagai
 * aksen sekunder yang lebih halus.
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
            'linear-gradient(165deg, #FFF8F8 0%, #FEE0E9 22%, #FFF8F8 48%, #EEF5E6 75%, #FFF8F8 100%)',
        }}
      />

      {/* Blob 1 — soft rose, top-left (secondary accent — kept small & soft) */}
      <div
        className="animate-glow-drift absolute -left-[10%] top-[2%] h-[280px] w-[480px] rounded-full blur-[52px]"
        style={{
          background:
            'radial-gradient(ellipse at 35% 40%, rgba(247,202,201,0.20) 0%, transparent 62%)',
          animationDuration: '95s',
          opacity: 0.6,
        }}
      />

      {/* Blob 2 — sage green, right-center (main accent) */}
      <div
        className="animate-glow-drift absolute -right-[8%] top-[28%] h-[300px] w-[520px] rounded-full blur-[42px]"
        style={{
          background:
            'radial-gradient(ellipse at 60% 55%, rgba(199,221,157,0.34) 0%, transparent 65%)',
          animationDuration: '115s',
          animationDelay: '-30s',
          opacity: 0.85,
        }}
      />

      {/* Blob 3 — blush, bottom-left (secondary accent — kept light) */}
      <div
        className="animate-glow-drift absolute -left-[6%] top-[62%] h-[210px] w-[360px] rounded-full blur-[44px]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 70%, rgba(245,201,212,0.16) 0%, transparent 70%)',
          animationDuration: '125s',
          animationDelay: '-55s',
          opacity: 0.5,
        }}
      />

      {/* Blob 4 — light moss, top-right (main accent, paired with blob 2) */}
      <div
        className="animate-glow-drift absolute right-[12%] top-[6%] h-[320px] w-[320px] rounded-full blur-[46px]"
        style={{
          background:
            'radial-gradient(circle, rgba(141,166,92,0.20) 0%, transparent 70%)',
          animationDuration: '82s',
          animationDelay: '-12s',
          opacity: 0.85,
        }}
      />

      {/* Subtle top stripe — sage-led, with a soft blush accent in the middle */}
      <div
        className="absolute left-0 right-0 top-0 z-10 h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, #8DA65C 0%, #C7DD9D 25%, #FEE0E9 50%, #C7DD9D 75%, #8DA65C 100%)',
          opacity: 0.45,
        }}
      />
    </div>
  );
}
