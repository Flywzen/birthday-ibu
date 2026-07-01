import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const TYPING_SPEED = 65;
const DELETE_SPEED = 32;
const PAUSE_AFTER = 24; // tick sebelum mulai menghapus
const PAUSE_BEFORE = 8; // tick sebelum mulai mengetik baris berikutnya

// Efek ketik manual (bukan animasi Framer Motion) -- ini cuma mengganti
// potongan teks tiap beberapa puluh ms, jadi cukup setTimeout biasa, tidak
// perlu requestAnimationFrame.
//
// Menghormati prefers-reduced-motion seperti versi lama: kalau aktif, baris
// pertama ditampilkan langsung sebagai nilai turunan (bukan state) tanpa
// menjalankan timer apa pun.
export function useTypewriter(lines) {
  const prefersReducedMotion = useReducedMotion();
  const [typed, setTyped] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || lines.length === 0) {
      return undefined;
    }

    let lineIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pauseTicks = 0;

    function tick() {
      const current = lines[lineIdx];

      if (!deleting && charIdx <= current.length) {
        setTyped(current.slice(0, charIdx));
        charIdx += 1;
        if (charIdx > current.length) {
          deleting = true;
          pauseTicks = PAUSE_AFTER;
        }
        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      } else if (deleting && pauseTicks > 0) {
        pauseTicks -= 1;
        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      } else if (deleting && charIdx >= 0) {
        setTyped(current.slice(0, charIdx));
        charIdx -= 1;
        if (charIdx < 0) {
          deleting = false;
          pauseTicks = PAUSE_BEFORE;
          lineIdx = (lineIdx + 1) % lines.length;
          charIdx = 0;
        }
        timeoutRef.current = setTimeout(tick, DELETE_SPEED);
      } else {
        pauseTicks -= 1;
        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      }
    }

    // Tick pertama sengaja dijadwalkan lewat setTimeout (bukan dipanggil
    // langsung) supaya semua setState terjadi dari dalam callback timer,
    // bukan sinkron di body effect.
    timeoutRef.current = setTimeout(tick, TYPING_SPEED);

    return () => clearTimeout(timeoutRef.current);
  }, [prefersReducedMotion, lines]);

  if (prefersReducedMotion) return lines[0] ?? '';
  return typed;
}
