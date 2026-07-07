# For Mama — React

Website ulang tahun personal untuk Mama. Dibangun dengan React + Vite +
Tailwind CSS + Framer Motion sebagai **pengalaman berbasis chapter** (bukan
one-page scroll) — seperti membuka hadiah digital kecil, bab demi bab.
Tema: floral / botanical / soft pink & green — hangat, elegan, intim.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Untuk build produksi:

```bash
npm run build   # output ke folder dist/
npm run preview # preview hasil build secara lokal
```

## Struktur chapter

Situs ini tidak lagi berupa halaman panjang yang di-scroll. Ada satu layar
pembuka (Cover) lalu enam chapter yang dijelajahi satu per satu:

```
Cover           → amplop/hadiah kecil, ketuk untuk membuka
                  (typewriter greeting + AgeCounter muncul setelah dibuka)
01 · Garden of Love    → kartu "mekar" berisi hal-hal yang dicintai dari Mama
02 · Bunga untuk Mama  → jeda visual singkat, satu ilustrasi bunga bergoyang
03 · Blessing Room     → carousel doa & kutipan (geser/swipe)
04 · Little Timeline   → kartu kenangan kecil, geser horizontal
05 · Letter Room       → surat dengan interaksi amplop (puncak emosional)
06 · Final Bloom       → penutup + doa akhir + tombol "baca ulang"
```

**Navigasi** ada di dua tempat, sengaja bukan navbar tradisional:
- Bar bawah (`ChapterNav`) — tombol back/next + titik-titik chapter yang bisa
  diketuk langsung.
- Bar atas (`ChapterTopBar`) — progress tipis + tombol menu yang membuka
  daftar chapter fullscreen (`ChapterMenu`).
- Juga bisa geser (swipe) di layar sentuh, atau tombol panah kiri/kanan di
  keyboard.

Tidak ada routing library (react-router dll). Navigasi memakai satu hook
kecil, `useChapterNavigation`, yang menyimpan index chapter di React state.
Untuk pengalaman sekali-baca yang tidak butuh URL per-chapter atau tombol
back browser, ini lebih ringan daripada menambah dependency routing —
lihat bagian "Kenapa tidak pakai routing?" di bawah.

## Mengubah konten

Semua wording personal ada di **satu file**: `src/data/content.js`, dibagi
per chapter. Cari komentar `// TODO` untuk bagian yang masih perlu data asli:

| Field | Chapter | Keterangan |
|---|---|---|
| `profile.birthDate` | — | Tanggal lahir asli, format `YYYY-MM-DD` |
| `garden.items` | Garden of Love | 8 hal yang dicintai dari Mama |
| `bloom.caption` | Bunga untuk Mama | Teks singkat di halaman jeda visual |
| `blessing.slides` | Blessing Room | 5 kutipan / doa |
| `timeline.items` | Little Timeline | 4 kenangan kecil (bukan milestone formal) |
| `letter.paragraphs` | Letter Room | Isi surat asli dari Amel — sudah final, jangan diubah |
| `finalBloom.message` | Final Bloom | Doa penutup (opsional diganti) |

## Musik

Ganti file `public/assets/music/bgm.mp3` dengan lagu instrumental / lo-fi
yang diinginkan. Nama file harus tetap `bgm.mp3`, atau ubah path-nya di
`src/components/MusicPlayer.jsx`. Player ini sekarang baru muncul **setelah**
Mama membuka hadiah di Cover — bukan langsung saat halaman dimuat.

## Foto

Situs ini **tidak menggunakan foto sama sekali**. Semua chapter memakai
botanical icon, gradient, dan ilustrasi SVG/emoji sebagai pengganti visual.
Tidak perlu menambahkan file gambar apa pun.

## Kenapa tidak pakai routing?

Brief awal meminta penjelasan dulu kalau routing dibutuhkan. Untuk situs ini,
routing (react-router atau semacamnya) sengaja **tidak** dipakai karena:

- Ini pengalaman sekali-jalan yang dibuka dari satu link — tidak ada
  kebutuhan orang lain membuka langsung ke "chapter 3" lewat URL.
- Menambah routing berarti menambah dependency, config, dan kompleksitas
  (page transitions jadi lebih rumit dikoordinasikan dengan animasi chapter)
  untuk manfaat yang tidak dipakai di sini.
- State React biasa (`useState` + satu hook kecil) sudah cukup untuk index
  chapter, arah transisi, swipe, dan keyboard — persis pola yang sudah
  dipakai carousel kutipan di versi sebelumnya, hanya diperluas ke seluruh
  situs.

Kalau nanti dibutuhkan (misalnya: mau share link langsung ke Letter Room),
opsi paling ringan adalah sinkronisasi `chapterIndex` ke `window.location.hash`
tanpa library tambahan — bukan mengganti ke React Router.

## Deploy ke Vercel

1. Push project ini ke GitHub/GitLab/Bitbucket.
2. Di Vercel: **New Project** → import repo ini.
3. Framework preset otomatis terdeteksi sebagai **Vite** — build command
   `vite build`, output directory `dist`. Tidak perlu mengubah apa pun.
4. Deploy.

Atau lewat CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production
```

Tidak ada environment variable atau konfigurasi tambahan yang dibutuhkan.
