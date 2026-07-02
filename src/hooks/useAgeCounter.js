import { useEffect, useState } from 'react';

function pad(n, len = 2) {
  return String(n).padStart(len, '0');
}

// Logika ini sengaja dibuat identik dengan versi vanilla lama supaya angka
// yang tampil tidak berubah: totalDays dari selisih ms, lalu years/months
// dari pembagian sederhana (bukan kalender presisi) — ini pilihan asli
// project lama, bukan bug, jadi dipertahankan.
function computeAge(birthDateStr) {
  const now = Date.now();
  // Parsing manual supaya diinterpretasikan sebagai local time (WIB/GMT+7),
  // bukan UTC. new Date('YYYY-MM-DD') selalu UTC midnight, yang berarti
  // tahun baru flip jam 07:00 pagi WIB — bukan tengah malam.
  const [y, m, d] = birthDateStr.split('-').map(Number);
  const birth = new Date(y, m - 1, d).getTime();
  const diff = now - birth;
  const totalDays = Math.floor(diff / 86400000);

  return {
    days: pad(totalDays, 5),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    minutes: pad(Math.floor((diff % 3600000) / 60000)),
    seconds: pad(Math.floor((diff % 60000) / 1000)),
    years: Math.floor(totalDays / 365.25),
    months: Math.floor(totalDays / 30),
    totalDaysFormatted: totalDays.toLocaleString('id-ID'),
  };
}

// Hook kecil, dipakai independen oleh AgeCounter (di Cover) supaya
// masing-masing cukup re-render sendiri tiap detik (tidak menyeret ulang
// seluruh App tree). Update per-detik via setInterval -- ini BUKAN
// requestAnimationFrame loop, jadi tidak termasuk kategori "animasi berat
// permanen" yang dihindari di komponen lain (BackgroundEffects, dsb).
export function useAgeCounter(birthDateStr) {
  const [age, setAge] = useState(() => computeAge(birthDateStr));

  useEffect(() => {
    const id = setInterval(() => setAge(computeAge(birthDateStr)), 1000);
    return () => clearInterval(id);
  }, [birthDateStr]);

  return age;
}
