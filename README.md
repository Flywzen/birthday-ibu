# For Mama — React

Website ulang tahun personal untuk Mama. Dibangun dengan React + Vite +
Tailwind CSS + Framer Motion sebagai one-page tribute site. Tema: floral /
botanical / soft pink & green — hangat, elegan, feminin.

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

## Mengubah konten

Semua wording personal ada di **satu file**: `src/data/content.js`.
Komponen tidak menyimpan teks hardcoded. Cari komentar `// TODO` untuk
bagian yang perlu disesuaikan:

| Field | Lokasi | Keterangan |
|---|---|---|
| `profile.birthDate` | `content.js` | Tanggal lahir asli, format `YYYY-MM-DD` |
| `timeline.items` | `content.js` | 5 milestone keluarga dengan tanggal & cerita nyata |
| `timeline.todayItem.title` | `content.js` | Ganti `[USIA]` dengan usia asli Mama |
| `letter.paragraphs` | `content.js` | Isi surat dari keluarga (ganti juga `[USIA]` di paragraf ke-8) |
| `traits.items` | `content.js` | 8 hal yang dicintai dari Mama — sesuaikan dengan cerita nyata |
| `quotes.slides` | `content.js` | 5 kutipan / doa (sudah ada placeholder yang layak pakai) |

## Musik

Ganti file `public/assets/music/bgm.mp3` dengan lagu instrumental / lo-fi
yang diinginkan. Nama file harus tetap `bgm.mp3`, atau ubah path-nya di
`src/components/MusicPlayer.jsx`.

## Foto

Versi ini **tidak menggunakan foto sama sekali**. Semua section menggunakan
botanical icon, gradient, dan ilustrasi SVG sebagai pengganti visual. Tidak
perlu menambahkan file gambar apa pun.

## Struktur section

```
Hero          → sambutan + typewriter + age counter
Stats Strip   → tahun / bulan / hari bersama Mama
Timeline      → perjalanan hidup Mama (botanical icon cards)
Trait Grid    → "Things We Love About You" (8 kartu)
Quote Cards   → kutipan & doa (carousel geser)
Letter        → surat dengan envelope interaktif
Footer        → penutup
Music Player  → floating, persisten
```

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
