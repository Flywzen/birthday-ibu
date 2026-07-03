// ============================================================================
// Semua wording personal ada di sini — nama, tanggal lahir, teks surat, dll.
// Ini SATU-SATUNYA file yang perlu disentuh untuk mengganti data customer.
//
// Struktur konten sekarang mengikuti "chapter" (bab), bukan section halaman
// panjang. Setiap chapter kecil (cover, garden, blessing, timeline, letter,
// finalBloom) punya blok wording sendiri di bawah.
//
// Penanda TODO menunjukkan bagian yang harus diisi dengan data asli.
// ============================================================================

// TODO: Pastikan birthDate sudah tanggal lahir Mama yang benar (format
// YYYY-MM-DD) — ini menggerakkan angka "tahun kehangatan" & hitungan
// hari langsung di AgeCounter, jadi kalau salah, angkanya juga salah.
export const profile = {
  name: 'Mama',
  birthDate: '1974-07-31',
};

export const meta = {
  title: 'Selamat Ulang Tahun, Mama',
  lang: 'id',
};

// ----------------------------------------------------------------------------
// Chapter registry — dipakai oleh ChapterNav (dots) & ChapterMenu (daftar bab).
// "cover" sengaja tidak dimasukkan di sini: ia adalah ritual pembuka, bukan
// bab yang dilompati lewat titik navigasi.
// ----------------------------------------------------------------------------
export const chapters = [
  { id: 'garden', numeral: '01', icon: '🌷', label: 'Tentang Mama' },
  { id: 'blessing', numeral: '02', icon: '🕊️', label: 'Doa untuk Mama' },
  { id: 'timeline', numeral: '03', icon: '🌿', label: 'Yang Aku Ingat' },
  { id: 'letter', numeral: '04', icon: '💌', label: 'Surat untuk Mama' },
  { id: 'final', numeral: '05', icon: '🌸', label: 'Satu Doa Kecil' },
];

// ----------------------------------------------------------------------------
// 1 · Opening / Gift Cover
// ----------------------------------------------------------------------------
export const cover = {
  eyebrow: 'Barakallah fii umrik',
  typewriterLines: [
    'Untuk Mama, yang sering tahu duluan kalau ada yang nggak beres samaku.',
    'Untuk setiap lelah yang jarang Mama ceritakan.',
    'Untuk cinta yang sering hadir lewat hal-hal sederhana.',
    'Hari ini, Amel cuma pengen Mama merasa dirayakan.',
  ],
  openLabel: 'Buka hadiah kecil ini',
  openHint: 'Ketuk untuk membuka',
  openAriaLabel: 'Buka hadiah kecil untuk Mama',
  counterLabel: 'Usia Mama Sampai Detik Ini',
  counterUnits: { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' },
  // {years} dan {days} diganti otomatis oleh komponen dengan angka hasil
  // hitungan usia — lihat useAgeCounter.
  statsTemplate: '{years} tahun kehangatan Mama · {days} hari yang aku syukuri',
};

// ----------------------------------------------------------------------------
// 2 · Garden of Love — replaces "Things We Love About You" grid.
// ----------------------------------------------------------------------------
export const garden = {
  numeral: '01',
  eyebrow: 'Yang Aku Sayangi dari Mama',
  title: 'Hal-Hal Kecil yang Membuat Mama, Mama',
  hint: 'Ketuk setiap kelopak untuk mekar',
  // TODO: Sesuaikan dengan hal-hal spesifik yang customer dan keluarga sukai dari Mama.
  items: [
    {
      icon: '🍳',
      title: 'Masakan Mama',
      desc: 'Belum pernah aku menemukan rasa masakan yang sehangat buatan Mama. Ada sesuatu di setiap masakannya yang tidak pernah kutemukan di tempat lain.',
    },
    {
      icon: '🤍',
      title: 'Kesabaran Mama',
      desc: 'Mama sudah menunggu dan memaafkan lebih banyak dari yang bisa kuhitung. Sampai sekarang aku masih kagum, dan kadang masih tidak percaya.',
    },
    {
      icon: '🏡',
      title: 'Kalau Ada Mama, Rumah Lebih Tenang',
      desc: 'Aku nggak tahu persis kenapa, tapi kalau ada Mama, semuanya kerasa lebih tenang—di mana pun itu.',
    },
    {
      icon: '🌿',
      title: 'Ketenangan Mama',
      desc: 'Di tengah semua yang ramai dan kacau, Mama selalu jadi yang paling tenang. Satu kalimat dari Mama bisa membuat semuanya terasa baik-baik saja.',
    },
    {
      icon: '🌸',
      title: 'Mama Peka Sama Hal Kecil',
      desc: 'Mama memperhatikan hal-hal kecil yang sering luput dari orang lain. Caranya peduli tidak selalu terlihat, tapi selalu terasa.',
    },
    {
      icon: '📖',
      title: 'Cara Mama Mengajar',
      desc: 'Mama tidak pernah banyak menasihati. Aku justru belajar paling banyak dari cara Mama menjalani harinya sendiri.',
    },
    {
      icon: '🌙',
      title: 'Mama Sering Mendoakan Tanpa Banyak Cerita',
      desc: 'Aku jarang mendengar Mama berdoa, tapi aku percaya doa itu selalu ada. Terima kasih sudah terus mendoakanku, Ma.',
    },
    {
      icon: '🎁',
      title: 'Cara Mama Selalu Hadir',
      desc: 'Di hari besar atau hari yang biasa saja, Mama selalu ada. Itu yang membuat waktu bersama Mama terasa berarti.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3 · Blessing Room — calm prayers, wishes, soft quotes.
// ----------------------------------------------------------------------------
export const blessing = {
  numeral: '02',
  eyebrow: 'Kata-Kata untuk Mama',
  title: 'Doa-Doa Hangat',
  // TODO: Ganti atau tambah kutipan yang lebih personal jika perlu.
  slides: [
    {
      text: 'Banyak hal dari Mama yang mungkin terlihat biasa, tapi justru itu yang paling sering aku ingat.',
      attribution: 'Untuk Mama, dengan syukur',
    },
    {
      text: 'Semoga Allah memberi Mama umur yang panjang, sehat, dan mudah, serta hati setenang yang selama ini Mama berikan untukku.',
      attribution: 'Doa kecil, untuk Mama',
    },
    {
      text: 'Ada banyak pengorbanan yang Mama simpan sendiri: tidur yang hilang, kesenangan yang Mama tunda. Aku melihatnya sekarang, dan aku berterima kasih.',
      attribution: 'Dari Amel, yang sayang Mama',
    },
    {
      text: 'Semoga semua hal baik yang Mama berikan ke orang lain, pelan-pelan balik juga ke Mama. Mama juga pantas ngerasain itu, bukan cuma selalu jadi yang kasih.',
      attribution: 'Dengan sayang, Amel',
    },
    {
      text: 'Aku nggak tahu persis sejak kapan, tapi suara Mama sering jadi hal yang bikin semuanya terasa lebih aman.',
      attribution: 'Untuk Mama, hari ini',
    },
  ],
};

// ----------------------------------------------------------------------------
// 4 · Little Timeline — short, soft moments (not a "legacy journey").
// ----------------------------------------------------------------------------
export const timeline = {
  numeral: '03',
  eyebrow: 'Momen-Momen yang Masih Aku Ingat',
  title: 'Kenangan-Kenangan Kecil',
  // TODO: Sesuaikan dengan momen kecil nyata yang berkesan buat keluarga —
  // tidak harus tanggal formal seperti milestone besar, boleh momen sehari-hari.
  items: [
    {
      icon: '🌷',
      note: 'Sebelum Menjadi Mama',
      desc: 'Jauh sebelum menjadi Mamaku, dia dulu adalah anak seseorang juga, yang sedang belajar apa arti rumah dan kasih sayang.',
    },
    {
      icon: '🍚',
      note: 'Cara Mama Memastikan Semuanya Cukup',
      desc: 'Aku nggak selalu sadar capeknya, tapi Mama selalu mikirin semuanya ada—dari yang penting sampai yang kelihatannya sepele. Baru belakangan aku ngeh itu nggak segampang kelihatannya.',
    },
    {
      icon: '🌙',
      note: 'Menunggu Sampai Larut',
      desc: 'Aku pulang larut, dan selalu ada satu lampu kecil yang masih menyala. Mama juga masih terjaga di sana.',
    },
    {
      icon: '🌼',
      note: 'Hal-Hal Kecil yang Dirayakan',
      desc: 'Rapor, atau hari Selasa yang biasa saja, Mama selalu merayakannya seolah itu penting.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5 · Letter Room — the emotional peak.
// ----------------------------------------------------------------------------
export const letter = {
  numeral: '04',
  title: 'Surat untuk Mama',
  subtitle: 'Kata-Kata yang Tidak Selalu Aku Ucapkan',
  openLabel: 'Buka Surat',
  openHint: 'Ketuk untuk membuka',
  openAriaLabel: 'Buka surat untuk Mama',
  closeLabel: 'Tutup Surat',
  salutation: 'Mama,',
  // TODO: Ganti seluruh isi paragraf dengan surat yang ditulis langsung
  // oleh customer. Ini adalah placeholder hangat yang bisa digunakan sebagai
  // kerangka. Angka usia di bawah dihitung dari birthDate di atas (1974 →
  // ulang tahun ke-52 di tahun 2026) — cek ulang dan sesuaikan bila perlu.
  paragraphs: [
    'Ada banyak hal yang ingin aku katakan, tapi kata-katanya sering hilang begitu saja setiap kali aku duduk di depan Mama.',
    'Semakin aku dewasa, semakin aku sadar berapa banyak yang sudah Mama lakukan diam-diam, tanpa pernah benar-benar aku lihat.',
    'Makan malam yang tetap Mama siapkan meski Mama sendiri lelah. Malam-malam Mama terjaga karena aku sakit, dan kekhawatiran yang Mama simpan sendiri supaya aku tetap tenang.',
    'Aku tumbuh besar di dalam kasih sayang yang Mama berikan, walau saat itu aku tidak selalu menyadarinya. Mungkin aku terlalu sibuk menjadi anak kecil, sibuk dengan duniaku sendiri.',
    'Hari ini Amel cuma ingin Mama tahu: aku sadar, dan aku bersyukur lebih dari yang bisa diucapkan.',
    'Mama mengajarkan aku banyak hal tanpa pernah terasa seperti sedang mengajar: sabar, lewat cara Mama menghadapiku di hari-hari terburukku, dan ikhlas, lewat cara Mama memberi tanpa pernah menghitung.',
    'Mama juga yang mengajarkan aku, meski nggak pernah bilang langsung, bahwa rumah itu bukan soal tempat, tapi soal siapa yang ada di dalamnya. Buat aku, itu Mama.',
    'Di ulang tahun Mama yang ke-52 ini, aku hanya ingin Mama merasakan betapa Mama dicintai apa adanya, bukan karena apa yang Mama lakukan untukku.',
    'Barakallahu fii umrik, Mama. Semoga Allah menjaga Mama, memudahkan langkah-langkah Mama, dan memberi lebih banyak hari yang ringan dan tenang.',
    'Amel cuma berharap, pelan-pelan, semua hal baik yang Mama kasih ke orang lain juga balik ke Mama sendiri.',
  ],
  closing: {
    line1: 'Barakallah fii umrik, Mama.',
    line2: 'Dari Amel, yang sayang Mama.',
  },
};

// ----------------------------------------------------------------------------
// 6 · Final Bloom — the emotional ending, not a footer.
// ----------------------------------------------------------------------------
export const finalBloom = {
  numeral: '05',
  eyebrow: 'Untuk Mama',
  title: 'Selamat Ulang Tahun, Mama',
  // TODO: Boleh diganti dengan doa penutup yang lebih personal.
  message:
    'Semoga langkah Mama dimudahkan, doa Mama dikabulkan, dan hari-hari Mama dipenuhi ketenangan, ketenangan yang sama seperti yang selama ini Mama berikan untukku.',
  blessingLine: 'Barakallah fii umrik, Mama.',
  fromLine: 'Dari Amel, yang sayang Mama.',
  replayLabel: 'Baca dari awal lagi',
  // Quiet closing signature — replaces the old separate Footer section.
  signature: 'Dibuat pelan-pelan, untuk Mama.',
};