// Konfigurasi partikel: tiap baris = { emoji, left%, size(px), duration, delay, drift, spin }
// Nilai statis (bukan Math.random saat render) supaya stabil dan tidak butuh re-compute.
// Partikel bertema floral/botanical menggantikan ✈️ ⭐ ☁️ dari versi ayah.
const PARTICLES = [
  { emoji: '🌸', left: '6%',  size: 14, duration: '26s', delay: '-4s',  drift: '14px',  spin: '80deg',  mobile: true  },
  { emoji: '🍃', left: '15%', size: 16, duration: '32s', delay: '-14s', drift: '-16px', spin: '-60deg', mobile: false },
  { emoji: '🌿', left: '27%', size: 18, duration: '38s', delay: '-8s',  drift: '10px',  spin: '120deg', mobile: true  },
  { emoji: '✨', left: '37%', size: 12, duration: '21s', delay: '-20s', drift: '-8px',  spin: '45deg',  mobile: false },
  { emoji: '🌸', left: '48%', size: 15, duration: '42s', delay: '-10s', drift: '12px',  spin: '-90deg', mobile: true  },
  { emoji: '🍃', left: '57%', size: 13, duration: '28s', delay: '-3s',  drift: '-14px', spin: '70deg',  mobile: false },
  { emoji: '🌼', left: '67%', size: 16, duration: '35s', delay: '-22s', drift: '18px',  spin: '-110deg',mobile: true  },
  { emoji: '✨', left: '76%', size: 11, duration: '22s', delay: '-12s', drift: '-10px', spin: '55deg',  mobile: false },
  { emoji: '🌿', left: '85%', size: 17, duration: '40s', delay: '-28s', drift: '8px',   spin: '-75deg', mobile: false },
  { emoji: '🌸', left: '93%', size: 13, duration: '25s', delay: '-17s', drift: '-12px', spin: '100deg', mobile: true  },
];

/**
 * Kelopak / daun / bintang kecil yang melayang naik pelan dari bawah.
 * Pure CSS animation (transform only), bukan canvas/rAF — ringan di semua device.
 * Separuh partikel disembunyikan di mobile (hidden sm:block) supaya DOM tetap
 * ringan di layar kecil.
 */
export default function AnimatedParticles() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute select-none will-change-transform ${
            p.mobile ? '' : 'hidden sm:block'
          }`}
          style={{
            left: p.left,
            top: '98%',
            fontSize: p.size,
            opacity: 0.35,
            animation: `petal-drift ${p.duration} linear infinite`,
            animationDelay: p.delay,
            '--drift': p.drift,
            '--spin': p.spin,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
