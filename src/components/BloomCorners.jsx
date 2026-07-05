import { useReducedMotion } from 'framer-motion';

/**
 * BloomCorners — dekorasi bunga kecil di pojok kanan-atas viewport, dipasang
 * sekali secara global (bukan per-chapter) supaya konsisten di semua halaman.
 * Fixed position, jadi gak ikut scroll dan gak perlu diulang di tiap chapter.
 *
 * Murni ambient/dekoratif: aria-hidden, pointer-events-none, dan otomatis
 * ganti ke poster statis kalau prefers-reduced-motion aktif.
 */
export default function BloomCorners() {
  const reduceMotion = useReducedMotion();
  const src = reduceMotion
    ? '/assets/decor/bloom-sway-poster.webp'
    : '/assets/decor/bloom-sway.webp';

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute right-1 top-1 h-12 w-12 opacity-45 sm:right-2 sm:top-2 sm:h-16 sm:w-16"
      />
    </div>
  );
}