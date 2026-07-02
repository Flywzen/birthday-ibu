/**
 * OpeningEmblem — the premium floral + ribbon-seal medallion used as the
 * site's main "open this" symbol in CoverChapter.
 *
 * Composition (viewBox 0 0 160 160, center 80,80):
 *   - ambient glow (breathing) + a hover-only halo, both behind everything
 *   - filled circular medallion (soft cream → blush radial gradient)
 *   - a hairline inner ring + a pearled bead border on the rim, like a
 *     wax-seal/medallion edge
 *   - a botanical wreath along the lower half: one center bloom flanked by
 *     two mirrored side blooms, plus two mirrored pairs of leaves — all
 *     positions/rotations are derived from a shared radius so the left and
 *     right sides are true mirror images of each other
 *   - a small ribbon bow/knot ("gift seal") sitting just above center
 *   - two tiny shimmer sparkles that twinkle very softly
 *
 * All decorative motion is CSS-only (animate-emblem-* utilities defined in
 * index.css), matching the rest of the site's animation approach. Hover/tap
 * polish rides on Tailwind's `group` variant — the parent button carries
 * `group`, this component only reacts to it. The whole SVG is aria-hidden;
 * the parent button already supplies the accessible name.
 */
export default function OpeningEmblem({ className = '' }) {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      focusable="false"
      className={`h-full w-full overflow-visible ${className}`}
    >
      <defs>
        <radialGradient id="emblemFill" cx="42%" cy="36%" r="72%">
          <stop offset="0%" stopColor="#FFF8F8" />
          <stop offset="48%" stopColor="#FEE0E9" />
          <stop offset="100%" stopColor="#F5C9D4" />
        </radialGradient>
        <linearGradient id="emblemRibbon" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#8DA65C" />
          <stop offset="100%" stopColor="#6E8347" />
        </linearGradient>
        <linearGradient id="emblemLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8DA65C" />
          <stop offset="100%" stopColor="#6E8347" />
        </linearGradient>
        <radialGradient id="emblemGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5C9D4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F5C9D4" stopOpacity="0" />
        </radialGradient>

        {/* Shared shapes, reused via <use> to keep the file light. */}
        <g id="emblemLeafShape">
          <path
            d="M0,0 C-5,-9 -3,-18 0,-24 C3,-18 5,-9 0,0 Z"
            fill="url(#emblemLeaf)"
          />
        </g>
        <g id="emblemBloomShape">
          <circle cx="0" cy="-6.5" r="4.2" fill="currentColor" />
          <circle cx="6.2" cy="-2" r="4.2" fill="currentColor" />
          <circle cx="3.8" cy="5.3" r="4.2" fill="currentColor" />
          <circle cx="-3.8" cy="5.3" r="4.2" fill="currentColor" />
          <circle cx="-6.2" cy="-2" r="4.2" fill="currentColor" />
          <circle cx="0" cy="0" r="2.6" fill="#FFF8F8" stroke="#8DA65C" strokeWidth="0.6" />
        </g>
      </defs>

      {/* Ambient breathing glow — always on, very soft */}
      <circle
        cx="80"
        cy="80"
        r="68"
        fill="url(#emblemGlow)"
        className="animate-emblem-glow origin-center"
        style={{ transformBox: 'fill-box' }}
      />

      {/* Hover-only halo — fades in on hover/focus for a "lift" glow */}
      <circle
        cx="80"
        cy="80"
        r="76"
        fill="url(#emblemGlow)"
        opacity="0"
        className="transition-opacity duration-700 ease-out group-hover:opacity-90"
      />

      {/* Pearled bead border, like a medallion/seal rim */}
      <g
        className="transition-opacity duration-500 ease-out"
        style={{ opacity: 0.5 }}
      >
        {[
          [144.0, 80.0], [139.1, 104.5], [125.3, 125.3], [104.5, 139.1],
          [80.0, 144.0], [55.5, 139.1], [34.7, 125.3], [20.9, 104.5],
          [16.0, 80.0], [20.9, 55.5], [34.7, 34.7], [55.5, 20.9],
          [80.0, 16.0], [104.5, 20.9], [125.3, 34.7], [139.1, 55.5],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#8DA65C" />
        ))}
      </g>

      {/* Medallion base */}
      <circle
        cx="80"
        cy="80"
        r="60"
        fill="url(#emblemFill)"
        stroke="#6E8347"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        className="transition-[stroke-opacity] duration-500 ease-out group-hover:stroke-opacity-70 group-active:brightness-95"
      />
      {/* Hairline inner ring */}
      <circle
        cx="80"
        cy="80"
        r="50"
        fill="none"
        stroke="#8DA65C"
        strokeOpacity="0.28"
        strokeWidth="1"
      />

      {/* Botanical wreath — mirrored left/right for soft symmetry */}
      <g
        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 78%' }}
      >
        {/* top crest leaf */}
        <use href="#emblemLeafShape" transform="translate(80,28) rotate(0) scale(0.62)" />

        {/* outer leaf pair (mirrored) */}
        <use href="#emblemLeafShape" transform="translate(128.9,97.8) rotate(110) scale(0.75)" opacity="0.92" />
        <use href="#emblemLeafShape" transform="translate(31.1,97.8) rotate(250) scale(0.75)" opacity="0.92" />

        {/* inner leaf pair (mirrored) */}
        <use href="#emblemLeafShape" transform="translate(119.8,113.4) rotate(130) scale(0.9)" />
        <use href="#emblemLeafShape" transform="translate(40.2,113.4) rotate(230) scale(0.9)" />

        {/* side blooms (mirrored) */}
        <use href="#emblemBloomShape" transform="translate(102,127.1) scale(0.85)" style={{ color: '#F5C9D4' }} />
        <use href="#emblemBloomShape" transform="translate(58,127.1) scale(0.85)" style={{ color: '#F5C9D4' }} />

        {/* center bloom */}
        <use href="#emblemBloomShape" transform="translate(80,132) scale(1.08)" style={{ color: '#F7CAC9' }} />
      </g>

      {/* Ribbon bow / gift seal knot */}
      <g
        className="transition-transform duration-500 ease-out group-hover:-rotate-2"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
      >
        {/* tails */}
        <path d="M76,73 L70,95 L73,98 L77,96 L80,73 Z" fill="url(#emblemRibbon)" opacity="0.9" />
        <path d="M84,73 L90,95 L87,98 L83,96 L80,73 Z" fill="url(#emblemRibbon)" opacity="0.9" />
        {/* loops */}
        <path d="M80,68 C64,56 50,60 50,72 C50,82 64,80 80,68 Z" fill="url(#emblemRibbon)" />
        <path d="M80,68 C96,56 110,60 110,72 C110,82 96,80 80,68 Z" fill="url(#emblemRibbon)" />
        {/* knot */}
        <rect x="75.5" y="61.5" width="9" height="13" rx="3" fill="#6E8347" />
        <circle cx="80" cy="68" r="2.6" fill="#F7CAC9" stroke="#FFF8F8" strokeWidth="0.6" />
      </g>

      {/* Tiny shimmer sparkles */}
      <path
        d="M112,47 L113.4,49.6 L116,51 L113.4,52.4 L112,55 L110.6,52.4 L108,51 L110.6,49.6 Z"
        fill="#FFF8F8"
        className="animate-emblem-shimmer origin-center"
        style={{ transformBox: 'fill-box' }}
      />
      <path
        d="M46,110 L47.2,112.2 L49.4,113.4 L47.2,114.6 L46,116.8 L44.8,114.6 L42.6,113.4 L44.8,112.2 Z"
        fill="#FFF8F8"
        className="animate-emblem-shimmer origin-center [animation-delay:1.3s]"
        style={{ transformBox: 'fill-box' }}
      />
    </svg>
  );
}
