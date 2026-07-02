/** Decorative botanical SVG silhouette — light, no external deps. Reused
 * across chapters (Cover, Garden) for a consistent botanical frame. */
export default function FloralCorner({ side = 'left', className = '' }) {
  const flip = side === 'right' ? 'scale(-1,1)' : undefined;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 140 200"
      className={`absolute bottom-0 h-40 w-28 opacity-[0.12] sm:h-52 sm:w-36 ${className}`}
      style={{
        [side]: 0,
        transform: flip,
        color: '#8DA65C',
        fill: 'currentColor',
      }}
    >
      {/* Stem */}
      <path d="M70 200 Q68 140 60 100 Q50 60 30 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="50" cy="90" rx="22" ry="10" transform="rotate(-35,50,90)" />
      <ellipse cx="42" cy="128" rx="18" ry="8" transform="rotate(20,42,128)" />
      <ellipse cx="66" cy="68" rx="16" ry="7" transform="rotate(-55,66,68)" />
      {/* Small bloom */}
      <circle cx="28" cy="27" r="7" />
      <circle cx="20" cy="16" r="4.5" />
      <circle cx="36" cy="14" r="5" />
      <circle cx="26" cy="38" r="4" />
    </svg>
  );
}
