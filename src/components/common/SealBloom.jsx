/**
 * SealBloom — small flower stamp used inside the letter's wax seal.
 *
 * Deliberately separate from OpeningEmblem (the gift-box medallion used
 * only on the cover's "open the site" button) — the letter shouldn't repeat
 * the gift/kado motif, so this is a simple pressed-blossom instead: cream
 * petals + two moss leaves over the seal's blush background, like a flower
 * stamped into wax.
 *
 * Palette: moss #8DA65C / deep moss #6E8347 / blush #F5C9D4 / cream #FFF8F8.
 */
export default function SealBloom({ className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={`h-full w-full ${className}`}
    >
      {/* two small leaves at the base of the blossom */}
      <path
        d="M20,30 C14.5,28 11.5,23.5 13.5,18.5 C18.5,19.5 21,24.5 20,30 Z"
        fill="#6E8347"
        opacity="0.85"
      />
      <path
        d="M20,30 C25.5,28 28.5,23.5 26.5,18.5 C21.5,19.5 19,24.5 20,30 Z"
        fill="#8DA65C"
        opacity="0.85"
      />

      {/* five-petal blossom, pressed-cream against the blush seal */}
      <g fill="#FFF8F8" opacity="0.95">
        <circle cx="20" cy="11.5" r="6.2" />
        <circle cx="27.4" cy="16.4" r="6.2" />
        <circle cx="24.6" cy="24.6" r="6.2" />
        <circle cx="15.4" cy="24.6" r="6.2" />
        <circle cx="12.6" cy="16.4" r="6.2" />
      </g>

      {/* flower center */}
      <circle cx="20" cy="18.5" r="3.6" fill="#F5C9D4" stroke="#8DA65C" strokeWidth="0.7" />
    </svg>
  );
}
