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
  title: 'Selamat Ulang Tahun ya, Ma',
  lang: 'id',
};

// ----------------------------------------------------------------------------
// Chapter registry — dipakai oleh ChapterNav (dots) & ChapterMenu (daftar bab).
// "cover" sengaja tidak dimasukkan di sini: ia adalah ritual pembuka, bukan
// bab yang dilompati lewat titik navigasi.
// ----------------------------------------------------------------------------
export const chapters = [
  { id: 'garden', numeral: '01', icon: '🌷', label: 'Tentang Mama' },
  { id: 'bloom', numeral: '02', icon: '💐', label: 'Sekuntum Bunga untuk Mama' },
  { id: 'blessing', numeral: '03', icon: '🕊️', label: 'Doa-Doa Kecilku' },
  { id: 'timeline', numeral: '04', icon: '🌿', label: 'Yang Tak Terlupakan' },
  { id: 'letter', numeral: '05', icon: '💌', label: 'Sepucuk Surat untuk Mama' },
  { id: 'final', numeral: '06', icon: '🌸', label: 'Ucapan Penutup' },
];

// ----------------------------------------------------------------------------
// 1 · Opening / Gift Cover
// ----------------------------------------------------------------------------
export const cover = {
  eyebrow: 'Barakallah fii umrik Mama',
  typewriterLines: [
    'Untuk Mama, yang selalu peka dengan keadaanku',
    'Sampai kadang, aku lupa kalau Mama juga sedang menjalani hari yang berat',
    'Hari ini, Amel cuma ingin Mama merasa dirayakan.',
  ],
  openLabel: 'Buka kadonya, ya Ma',
  openHint: 'Ketuk Di sini',
  openAriaLabel: 'Buka kado untuk Mama',
  counterLabel: 'Perjalanan Usia Mama',
  counterUnits: { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' },
  // {years} dan {days} diganti otomatis oleh komponen dengan angka hasil
  // hitungan usia — lihat useAgeCounter.
  statsTemplate: '{years} tahun Mama menjadi Rumah untuk Aku Pulang',
};

// ----------------------------------------------------------------------------
// 2 · Garden of Love — replaces "Things We Love About You" grid.
// ----------------------------------------------------------------------------
export const garden = {
  numeral: '01',
  title: 'Hal-Hal yang Selalu Aku Ingat dari Mama',
  hint: 'Ketuk setiap Pucuknya ya, Ma',
  // TODO: Sesuaikan dengan hal-hal spesifik yang customer dan keluarga sukai dari Mama.
  items: [
    {
      icon: '🍳',
      title: 'Masakan Mama',
      desc: 'Masakan Mama selalu punya rasa yang sulit dijelaskan. Barangkali karena di setiap masakan itu selalu ada cinta dan perhatian.',
    },
    {
      icon: '🤍',
      title: 'Kesabaran Mama',
      desc: 'Kesabaran Mama mengajarkanku bahwa kasih sayang sering kali hadir dalam bentuk kesempatan untuk belajar dan memperbaiki diri.',
    },
    {
      icon: '🏡',
      title: 'Kehangatan Mama',
      desc: 'Kehadiran Mama selalu membuat rumah terasa lebih hangat, seolah setiap lelahku menemukan tempat untuk beristirahat.',
    },
    {
      icon: '🌿',
      title: 'Ketenangan Mama',
      desc: 'Di tengah banyaknya hal yang datang silih berganti, Nasihat dan senyuman Mama selalu menghadirkan ketenangan.',
    },
    {
      icon: '🌸',
      title: 'Kepekaan Mama',
      desc: 'Mama seringkali memahami apa yang kurasakan, bahkan sebelum aku mampu mengungkapkannya.',
    },
    {
      icon: '📖',
      title: 'Cara Mama Mengajar',
      desc: 'Banyak pelajaran yang kuterima bukan dari nasihat, melainkan dari cara Mama menjalani hidup setiap hari.',
    },
    {
      icon: '🌙',
      title: 'Tulusnya Doa Mama',
      desc: 'Aku mungkin tidak selalu mendengar doa-doa Mama, tetapi aku percaya namaku selalu ada di dalamnya.',
    },
    {
      icon: '🎁',
      title: 'Mama yang Selalu Hadir',
      desc: 'Kehadiran Mama, bahkan dalam hal-hal yang tampak sederhana, selalu membawa arti yang begitu besar bagiku.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 2 · Bunga untuk Mama — halaman visual singkat, jeda sebelum masuk ke doa.
// ----------------------------------------------------------------------------
export const bloom = {
  numeral: '02',
  title: 'Bunga untuk Mama',
  caption: 'Semoga bunga ini bisa mewakili rasa syukur yang sulit aku ungkapkan dengan kata-kata.'
}
// ----------------------------------------------------------------------------
// 3 · Blessing Room — calm prayers, wishes, soft quotes.
// ----------------------------------------------------------------------------
export const blessing = {
  numeral: '03',
  title: 'Doa-Doa Kecilku',
  // TODO: Ganti atau tambah kutipan yang lebih personal jika perlu.
  slides: [
    {
      text: 'Semoga Allah senantiasa menjaga kesehatan Mama, memberkahi umur Mama, dan menghadirkan ketenangan sebagaimana Mama selalu menghadirkannya untukku.',
    },
    {
      text: 'Ada begitu banyak hal yang Mama lakukan tanpa pernah mengharapkan untuk diketahui. Terima kasih karena tetap memilih melakukan semuanya dengan penuh kasih.',
    },
    {
      text: 'Semoga setiap kebaikan yang Mama berikan kepada orang lain menjadi jalan untuk datangnya kebaikan yang berlipat untuk Mama.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 4 · Little Timeline — short, soft moments (not a "legacy journey").
// ----------------------------------------------------------------------------
export const timeline = {
  numeral: '04',
  eyebrow: 'Kenangan Kecil',
  title: 'Kenangan yang Akan Selalu Kurayakan',
  // TODO: Sesuaikan dengan momen kecil nyata yang berkesan buat keluarga —
  // tidak harus tanggal formal seperti milestone besar, boleh momen sehari-hari.
  items: [
    {
      icon: '🍼',
      note: 'Dulu',
      desc: 'Waktu kecil aku belum tahu bahwa semua kasih sayang dan perhatian Mama lahir dari rasa cinta yang Mama pupuk setiap hari.',
    },
    {
      icon: '🌱',
      note: 'Beranjak Dewasa',
      desc: 'Semakin aku bertambah besar, aku mulai melihat bahwa di balik banyak hal yang terlihat sederhana, selalu ada waktu, tenaga, dan doa yang Mama berikan tanpa banyak aku ketahui.',
    },
    {
      icon: '💐',
      note: 'Hari Ini',
      desc: 'Karena itu, hari ini bukan hanya tentang ulang tahun Mama. Pada hari ini aku ingin mengucapkan terima kasih untuk semua yang mungkin belum sempat aku ucapkan.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5 · Letter Room — the emotional peak.
// ----------------------------------------------------------------------------
export const letter = {
  numeral: '05',
  title: 'Surat untuk Mama',
  subtitle: 'Kalimat yang Tidak Selalu Bisa Aku Ungkapkan',
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
    'Semoga langkah Mama dimudahkan, semua doa Mama perlahan dikabulkan, dan hari-hari Mama senantiasa dipenuhi ketenangan.',
  blessingLine: 'Barakallah fii umrik, Mama.',
  fromLine: 'Dari Amel, dengan Penuh Cinta.',
  replayLabel: 'Baca ulang',
  // Quiet closing signature — replaces the old separate Footer section.
  signature: 'Dari Amel, Untuk Mama.',
};