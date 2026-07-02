// Lazily loads canvas-confetti so it never sits in the main JS bundle.
// It only enters the network/parse cost the first time a chapter actually
// needs to launch it — which, thanks to the prefers-reduced-motion guards
// already in Cover/Letter/FinalBloom, may be never for some visitors.
// The resolved module is cached so repeat calls (Cover → Letter → Final
// Bloom) reuse the same import instead of re-fetching.
let confettiPromise;

export function loadConfetti() {
  if (!confettiPromise) {
    confettiPromise = import('canvas-confetti').then((mod) => mod.default);
  }
  return confettiPromise;
}
