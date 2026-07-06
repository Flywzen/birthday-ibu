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
  { id: 'bloom', numeral: '02', icon: '💐', label: 'Bunga untuk Mama' },
  { id: 'blessing', numeral: '03', icon: '🕊️', label: 'Doa untuk Mama' },
  { id: 'timeline', numeral: '04', icon: '🌿', label: 'Yang Aku Ingat' },
  { id: 'letter', numeral: '05', icon: '💌', label: 'Surat untuk Mama' },
  { id: 'final', numeral: '06', icon: '🌸', label: 'Satu Doa Kecil' },
];

// ----------------------------------------------------------------------------
// 1 · Opening / Gift Cover
// ----------------------------------------------------------------------------
export const cover = {
  eyebrow: 'Barakallah fii umrik',
  typewriterLines: [
    'Untuk Mama, yang sering tahu duluan kalau ada yang nggak beres samaku.',
    'Untuk setiap lelah yang jarang Mama ceritakan.',
    'Untuk Mama, yang nunjukkin sayang tanpa perlu bilang-bilang.',
    'Hari ini, Amel cuma pengen Mama merasa dirayakan.',
  ],
  openLabel: 'Buka hadiah kecil ini',
  openHint: 'Ketuk pelan, ya',
  openAriaLabel: 'Buka hadiah kecil untuk Mama',
  counterLabel: 'Usia Mama Sekarang',
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
      desc: 'Masakan Mama emang beda. Susah dijelasin rasanya, tapi selalu bikin kangen.',
    },
    {
      icon: '🤍',
      title: 'Kesabaran Mama',
      desc: 'Mama sudah menunggu dan memaafkan lebih banyak dari yang bisa kuhitung. Sampai sekarang, aku kadang masih nggak percaya.',
    },
    {
      icon: '🏡',
      title: 'Kalau Ada Mama, Rumah Lebih Tenang',
      desc: 'Aku nggak tahu persis kenapa. Tapi kalau ada Mama, semuanya kerasa lebih tenang, di mana pun itu.',
    },
    {
      icon: '🌿',
      title: 'Ketenangan Mama',
      desc: 'Di tengah yang ramai dan kacau, Mama selalu paling tenang. Kadang cuma butuh satu kalimat dari Mama, dan semuanya kerasa baik-baik aja.',
    },
    {
      icon: '🌸',
      title: 'Mama Peka Sama Hal Kecil',
      desc: 'Mama sering nyadar hal-hal kecil duluan, bahkan sebelum aku cerita apa-apa.',
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
      desc: 'Di hari besar atau hari biasa, Mama selalu ada. Itu bukan hal kecil buatku.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2 · Bunga untuk Mama — halaman visual singkat, jeda sebelum masuk ke doa.
// ----------------------------------------------------------------------------
export const bloom = {
  numeral: '02',
  eyebrow: 'Sekuntum Kecil',
  title: 'Bunga untuk Mama',
  caption: 'Nggak ada alasan khusus. Cuma pengen Mama lihat ini mekar.',
};

// ----------------------------------------------------------------------------
// 3 · Blessing Room — calm prayers, wishes, soft quotes.
// ----------------------------------------------------------------------------
export const blessing = {
  numeral: '03',
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
      text: 'Semoga semua hal baik yang Mama kasih ke orang lain, pelan-pelan balik juga ke Mama. Mama juga pantas ngerasain itu. Selama ini Mama yang lebih sering ngasih.',
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
  numeral: '04',
  eyebrow: 'Momen-Momen yang Masih Aku Ingat',
  title: 'Kenangan-Kenangan Kecil',
  // TODO: Sesuaikan dengan momen kecil nyata yang berkesan buat keluarga —
  // tidak harus tanggal formal seperti milestone besar, boleh momen sehari-hari.
  items: [
    {
      icon: '🌷',
      note: 'Sebelum Menjadi Mama',
      desc: 'Jauh sebelum jadi Mama buatku, Mama juga pernah jadi anak kecil, yang waktu itu lagi belajar sendiri apa artinya rumah dan sayang.',
    },
    {
      icon: '🍚',
      note: 'Cara Mama Memastikan Semuanya Cukup',
      desc: 'Aku nggak selalu sadar capeknya. Tapi Mama selalu mikirin biar semuanya cukup, dari yang penting sampai yang kelihatannya sepele. Baru belakangan aku ngeh, itu nggak segampang kelihatannya.',
    },
    {
      icon: '🌙',
      note: 'Menunggu Sampai Larut',
      desc: 'Aku pulang larut, dan selalu ada satu lampu kecil yang masih menyala. Mama juga masih terjaga di sana.',
    },
    {
      icon: '🌼',
      note: 'Hal-Hal Kecil yang Dirayakan',
      desc: 'Buat Mama, rapor atau hari Selasa biasa aja tetap layak dirayain.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5 · Letter Room — the emotional peak.
// ----------------------------------------------------------------------------
export const letter = {
  numeral: '05',
  title: 'Surat untuk Mama',
  subtitle: 'Kata-Kata yang Tidak Selalu Aku Ucapkan',
  openLabel: 'Buka Surat',
  openHint: 'Ketuk amplopnya, ya',
  openAriaLabel: 'Buka surat untuk Mama',
  closeLabel: 'Tutup Surat',
  salutation: 'Mama,',
  // Surat asli dari client (Amel), Juli 2026. Kata-katanya tidak diubah —
  // cuma dipecah jadi beberapa paragraf pendek biar enak dibaca, mengikuti
  // jeda alami dari tulisan aslinya.
  paragraphs: [
    'Selamat ulang tahun, Ma. 🤍',
    'Terima kasih karena sudah menjadi perempuan yang begitu kuat dan selalu berusaha memberikan yang terbaik untuk keluarga. Semoga di usia yang baru ini Mama selalu diberikan kesehatan, kebahagiaan, hati yang tenang, dan umur yang penuh berkah. Semoga setiap doa dan harapan Mama satu per satu dikabulkan oleh Allah.',
    'Aku juga berharap semoga kita bisa terus bertumbuh bersama sebagai keluarga. Tidak harus menjadi keluarga yang sempurna, tetapi menjadi keluarga yang saling mendengarkan, saling memahami, dan selalu menjadi tempat pulang yang paling nyaman.',
    'Terima kasih untuk semua kasih sayang, perhatian, dan pengorbanan yang sudah Mama berikan selama ini. Aku tahu menjadi seorang ibu bukanlah hal yang mudah. Ada begitu banyak hal yang harus dipikirkan, dijaga, dan diperjuangkan setiap harinya.',
    'Di hari spesial Mama, aku hanya ingin menitipkan satu harapan kecil. Semoga seiring bertambahnya usia, kita semua bisa semakin saling memahami dan saling mendengarkan.',
    'Kadang, seseorang tidak selalu membutuhkan jawaban atau penilaian, melainkan hanya ingin didengar dan dipahami lebih dulu. Aku percaya, ketika hati merasa aman untuk bercerita, akan lebih mudah bagi kita untuk saling mengerti dan saling menguatkan.',
    'Aku berharap rumah kita selalu menjadi tempat yang nyaman untuk berbagi cerita, tempat di mana tawa, tangis, dan segala perasaan diterima dengan penuh kasih. Karena bagiku, keluarga adalah tempat pertama untuk pulang dan menemukan rasa tenang.',
    'Terima kasih sudah menjadi Mama yang selalu berusaha memberikan yang terbaik. Semoga Allah membalas setiap kebaikan Mama dengan kesehatan, kebahagiaan, rezeki yang berlimpah, dan hati yang selalu dipenuhi kedamaian.',
    'Selamat bertambah usia, Ma. Semoga tahun ini membawa lebih banyak kebahagiaan daripada tahun-tahun sebelumnya.',
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
  numeral: '06',
  eyebrow: 'Untuk Mama',
  title: 'Selamat Ulang Tahun, Mama',
  // TODO: Boleh diganti dengan doa penutup yang lebih personal.
  message:
    'Semoga langkah Mama dimudahkan, doa Mama dikabulkan, dan hari-hari Mama dipenuhi ketenangan, setenang yang Mama kasih ke aku selama ini.',
  blessingLine: 'Barakallah fii umrik, Mama.',
  fromLine: 'Dari Amel, yang sayang Mama.',
  replayLabel: 'Baca dari awal lagi',
  // Quiet closing signature — replaces the old separate Footer section.
  signature: 'Dibuat pelan-pelan, untuk Mama.',
};