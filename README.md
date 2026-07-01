# For Ayah — React

Website ulang tahun personal untuk Ayah. Migrasi dari HTML/CSS/JS vanilla ke
React + Vite + Tailwind CSS + Framer Motion, tetap sebagai one-page site
(bukan web app), tema aviasi / langit malam / flight log dipertahankan.

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

## Foto yang perlu kamu tambahkan

Project lama yang di-upload tidak menyertakan folder `assets/images/`
(foto-foto Ayah), jadi tidak ada satu pun yang "dikarang" di sini. Tinggal
taruh file dengan **nama persis** seperti tabel berikut ke
`public/assets/images/`:

| Nama file | Dipakai di |
|---|---|
| `photo-hero.jpg` | Latar belakang Hero |
| `photo-tl1.jpg` … `photo-tl6.jpg` | 6 foto di Flight Timeline |
| `photo-b1.jpg` … `photo-b6.jpg` | Photo Highlights (bento grid) |
| `photo-b1.jpg` … `photo-b5.jpg` | Gallery slider (reuse foto bento, sama seperti project lama) |
| `photo-s1.jpg` … `photo-s5.jpg` | Filmstrip |
| `photo-p1.jpg` … `photo-p3.jpg` | Polaroid di section surat |

Selama foto belum ada, tiap slot otomatis menampilkan placeholder
(emoji + gradient) — bukan ikon gambar rusak. Kalau format fotomu bukan
`.jpg`, tinggal ubah field `image` yang bersangkutan di
`src/data/content.js`.

`assets/gif/hero.gif` dan `assets/music/bgm.mp3` sudah dibawa langsung dari
project lama, tidak perlu ditambahkan ulang.

## Mengubah konten

Semua wording personal (nama, tanggal, isi surat, quote, caption) ada di
**satu file**: `src/data/content.js`. Komponen tidak punya teks hardcoded.

## Deploy ke Vercel

1. Push project ini ke GitHub/GitLab/Bitbucket.
2. Di Vercel: **New Project** → import repo ini.
3. Framework preset otomatis terdeteksi sebagai **Vite** — build command
   `vite build`, output directory `dist`. Tidak perlu mengubah apa pun.
4. Deploy.

Atau lewat CLI tanpa hubungkan repo dulu:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production
```

Tidak ada environment variable atau konfigurasi tambahan yang dibutuhkan.
