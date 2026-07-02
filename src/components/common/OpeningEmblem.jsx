/**
 * OpeningEmblem — polished floral gift-seal medallion used as the "open the
 * site" symbol in CoverChapter.
 *
 * Redesigned as a soft-cream GIFT BOX with a blush-pink ribbon + bow, moss
 * botanical wreath, and a gentle circular medallion glow behind it. Feels
 * like a small, handcrafted birthday gift — warm, feminine, premium.
 *
 * Composition (viewBox 0 0 160 160, center 80,80):
 *   - ambient breathing halo + hover-only lift halo (both behind everything)
 *   - circular cream/blush medallion with hairline moss ring + pearled rim
 *   - mirrored botanical wreath (leaves + small blooms) hugging the box
 *   - soft-cream gift BOX (rounded rect) with a horizontal ribbon band
 *   - blush ribbon bow + knot sitting on the top edge of the box
 *   - two tiny shimmer sparkles that twinkle softly on the ribbon/petals
 *
 * All decorative motion is CSS-only using the existing animate-emblem-*
 * utilities in index.css. Hover/tap polish rides on the parent button's
 * `group` class — this component only reacts to it. Whole SVG is
 * aria-hidden; the parent button supplies the accessible name.
 *
 * Palette: moss #8DA65C / deep moss #6E8347 / rose quartz #F7CAC9 /
 * blush #F5C9D4 / light pink #FEE0E9 / cream #FFF8F8.
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
        {/* Medallion background — cream fading to blush */}
        <radialGradient id="emblemFill" cx="42%" cy="36%" r="72%">
          <stop offset="0%" stopColor="#FFF8F8" />
          <stop offset="50%" stopColor="#FEE0E9" />
          <stop offset="100%" stopColor="#F5C9D4" />
        </radialGradient>

        {/* Gift box body — soft cream with a whisper of blush shading */}
        <linearGradient id="emblemBox" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFF8F8" />
          <stop offset="100%" stopColor="#FEE0E9" />
        </linearGradient>

        {/* Blush ribbon */}
        <linearGradient id="emblemRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F7CAC9" />
          <stop offset="100%" stopColor="#F5C9D4" />
        </linearGradient>

        {/* Moss leaves */}
        <linearGradient id="emblemLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8DA65C" />
          <stop offset="100%" stopColor="#6E8347" />
        </linearGradient>

        {/* Ambient halo */}
        <radialGradient id="emblemGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5C9D4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F5C9D4" stopOpacity="0" />
        </radialGradient>

        {/* Reusable botanical shapes */}
        <g id="emblemLeafShape">
          <path
            d="M0,0 C-5,-9 -3,-18 0,-24 C3,-18 5,-9 0,0 Z"
            fill="url(#emblemLeaf)"
          />
        </g>
        <g id="emblemBloomShape">
          <circle cx="0" cy="-5.5" r="3.6" fill="currentColor" />
          <circle cx="5.2" cy="-1.7" r="3.6" fill="currentColor" />
          <circle cx="3.2" cy="4.5" r="3.6" fill="currentColor" />
          <circle cx="-3.2" cy="4.5" r="3.6" fill="currentColor" />
          <circle cx="-5.2" cy="-1.7" r="3.6" fill="currentColor" />
          <circle cx="0" cy="0" r="2.2" fill="#FFF8F8" stroke="#8DA65C" strokeWidth="0.5" />
        </g>
      </defs>

      {/* Ambient breathing glow */}
      <circle
        cx="80"
        cy="80"
        r="68"
        fill="url(#emblemGlow)"
        className="animate-emblem-glow origin-center"
        style={{ transformBox: 'fill-box' }}
      />

      {/* Hover-only lift halo */}
      <circle
        cx="80"
        cy="80"
        r="76"
        fill="url(#emblemGlow)"
        opacity="0"
        className="transition-opacity duration-700 ease-out group-hover:opacity-90 group-focus-visible:opacity-90"
      />

      {/* Pearled bead border */}
      <g style={{ opacity: 0.5 }}>
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

      {/* Botanical wreath — mirrored around the box, sitting slightly behind */}
      <g
        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 60%' }}
      >
        {/* upper mirrored leaves flanking the bow */}
        <use href="#emblemLeafShape" transform="translate(52,55) rotate(-40) scale(0.62)" opacity="0.9" />
        <use href="#emblemLeafShape" transform="translate(108,55) rotate(40) scale(0.62)" opacity="0.9" />

        {/* mid mirrored leaves along the box sides */}
        <use href="#emblemLeafShape" transform="translate(38,92) rotate(-115) scale(0.85)" />
        <use href="#emblemLeafShape" transform="translate(122,92) rotate(115) scale(0.85)" />

        {/* lower mirrored leaves cradling the base */}
        <use href="#emblemLeafShape" transform="translate(52,124) rotate(-155) scale(0.7)" opacity="0.92" />
        <use href="#emblemLeafShape" transform="translate(108,124) rotate(155) scale(0.7)" opacity="0.92" />

        {/* side blooms tucked into the wreath */}
        <use href="#emblemBloomShape" transform="translate(36,110) scale(0.8)" style={{ color: '#F5C9D4' }} />
        <use href="#emblemBloomShape" transform="translate(124,110) scale(0.8)" style={{ color: '#F5C9D4' }} />
        <use href="#emblemBloomShape" transform="translate(80,132) scale(0.95)" style={{ color: '#F7CAC9' }} />
      </g>

      {/* --- GIFT BOX --- */}
      <g
        className="transition-transform duration-500 ease-out group-hover:-translate-y-[1px]"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
      >
        {/* soft cast shadow under the box */}
        <ellipse cx="80" cy="122" rx="30" ry="3.2" fill="#6E8347" opacity="0.12" />

        {/* box body (rounded rect) */}
        <rect
          x="52"
          y="72"
          width="56"
          height="48"
          rx="5"
          fill="url(#emblemBox)"
          stroke="#6E8347"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* subtle box highlight along the top-left */}
        <path
          d="M55,76 Q55,73 58,73 L100,73"
          stroke="#FFFFFF"
          strokeOpacity="0.9"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* vertical ribbon band down the middle of the box */}
        <rect x="75.5" y="72" width="9" height="48" fill="url(#emblemRibbon)" />
        <rect x="75.5" y="72" width="9" height="48" fill="none" stroke="#E9A6B4" strokeOpacity="0.5" strokeWidth="0.6" />
      </g>

      {/* --- RIBBON BOW on top of the box --- */}
      <g
        className="transition-transform duration-500 ease-out group-hover:-rotate-2"
        style={{ transformBox: 'fill-box', transformOrigin: '50% 68%' }}
      >
        {/* left loop */}
        <path
          d="M80,68 C66,58 54,60 54,68 C54,76 68,74 80,68 Z"
          fill="url(#emblemRibbon)"
          stroke="#E9A6B4"
          strokeOpacity="0.5"
          strokeWidth="0.6"
        />
        {/* right loop */}
        <path
          d="M80,68 C94,58 106,60 106,68 C106,76 92,74 80,68 Z"
          fill="url(#emblemRibbon)"
          stroke="#E9A6B4"
          strokeOpacity="0.5"
          strokeWidth="0.6"
        />
        {/* ribbon inner shading in loops */}
        <path d="M62,64 C58,66 58,70 62,71" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="0.7" fill="none" strokeLinecap="round" />
        <path d="M98,64 C102,66 102,70 98,71" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="0.7" fill="none" strokeLinecap="round" />

        {/* short ribbon tails hanging over the box lip */}
        <path d="M76,70 L72,80 L76,79 L78,72 Z" fill="url(#emblemRibbon)" />
        <path d="M84,70 L88,80 L84,79 L82,72 Z" fill="url(#emblemRibbon)" />

        {/* knot */}
        <rect x="76" y="63.5" width="8" height="9" rx="2" fill="#E9A6B4" />
        <circle cx="80" cy="68" r="2.2" fill="#FFF8F8" stroke="#6E8347" strokeOpacity="0.4" strokeWidth="0.5" />
      </g>

      {/* Tiny shimmer sparkles */}
      <path
        d="M108,58 L109.2,60.2 L111.4,61.4 L109.2,62.6 L108,64.8 L106.8,62.6 L104.6,61.4 L106.8,60.2 Z"
        fill="#FFF8F8"
        className="animate-emblem-shimmer origin-center"
        style={{ transformBox: 'fill-box' }}
      />
      <path
        d="M50,102 L51,104 L53,105 L51,106 L50,108 L49,106 L47,105 L49,104 Z"
        fill="#FFF8F8"
        className="animate-emblem-shimmer origin-center [animation-delay:1.3s]"
        style={{ transformBox: 'fill-box' }}
      />
    </svg>
  );
}
