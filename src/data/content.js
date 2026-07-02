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

export const profile = {
  name: 'Mama',
  // TODO: Ganti dengan tanggal lahir asli. Format: YYYY-MM-DD
  birthDate: '1970-05-10',
};

export const meta = {
  title: 'Happy Birthday, Mama',
  lang: 'id',
};

// ----------------------------------------------------------------------------
// Chapter registry — dipakai oleh ChapterNav (dots) & ChapterMenu (daftar bab).
// "cover" sengaja tidak dimasukkan di sini: ia adalah ritual pembuka, bukan
// bab yang dilompati lewat titik navigasi.
// ----------------------------------------------------------------------------
export const chapters = [
  { id: 'garden', numeral: '01', icon: '🌷', label: 'Taman Cinta' },
  { id: 'blessing', numeral: '02', icon: '🕊️', label: 'Ruang Doa' },
  { id: 'timeline', numeral: '03', icon: '🌿', label: 'Kenangan Kecil' },
  { id: 'letter', numeral: '04', icon: '💌', label: 'Ruang Surat' },
  { id: 'final', numeral: '05', icon: '🌸', label: 'Penutup' },
];

// ----------------------------------------------------------------------------
// 1 · Opening / Gift Cover
// ----------------------------------------------------------------------------
export const cover = {
  eyebrow: 'Barakallah fii umrik',
  typewriterLines: [
    'Happy Birthday to our dearest Mama 🌸',
    'Thank you for the warmth you give without asking for anything back.',
    'You hold this family together.',
    'Wishing you joy that lasts long after today.',
  ],
  openLabel: 'Buka hadiah kecil ini',
  openHint: 'Ketuk untuk membuka',
  openAriaLabel: 'Buka hadiah kecil untuk Mama',
  counterLabel: "Mama's Time With Us",
  counterUnits: { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' },
  // {years} dan {days} diganti otomatis oleh komponen dengan angka hasil
  // hitungan usia — lihat useAgeCounter.
  statsTemplate: '{years} tahun kehangatan · {days} hari bersama kami',
};

// ----------------------------------------------------------------------------
// 2 · Garden of Love — replaces "Things We Love About You" grid.
// ----------------------------------------------------------------------------
export const garden = {
  numeral: '01',
  eyebrow: 'Hal-Hal yang Kami Cintai',
  title: 'Everything That Makes You, You',
  hint: 'Ketuk setiap kelopak untuk mekar',
  // TODO: Sesuaikan dengan hal-hal spesifik yang customer dan keluarga sukai dari Mama.
  items: [
    {
      icon: '🍳',
      title: 'Your Cooking',
      desc: 'No restaurant comes close. Every dish you cook carries something we\'ve never found anywhere else.',
    },
    {
      icon: '🤍',
      title: 'Your Patience',
      desc: 'You have waited and forgiven more times than we can count. It still amazes us.',
    },
    {
      icon: '🏡',
      title: 'How You Make Home',
      desc: 'Home is wherever you are. You carry it with you without trying.',
    },
    {
      icon: '🌿',
      title: 'Your Calmness',
      desc: 'In the middle of chaos, you are the calm. One word from you settles the room.',
    },
    {
      icon: '🌸',
      title: 'Your Gentle Heart',
      desc: 'You notice the little things and remember what matters. You care in ways people often miss.',
    },
    {
      icon: '📖',
      title: 'The Way You Teach',
      desc: 'You taught with example, not lectures. We learned most of what we know by watching you.',
    },
    {
      icon: '🌙',
      title: 'Your Quiet Prayers',
      desc: 'We rarely hear your prayers, but we feel them. Thank you for praying for us.',
    },
    {
      icon: '🎁',
      title: 'How You Show Up',
      desc: 'Big days or ordinary ones, you show up. That\'s what makes moments with you feel meaningful.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3 · Blessing Room — calm prayers, wishes, soft quotes.
// ----------------------------------------------------------------------------
export const blessing = {
  numeral: '02',
  eyebrow: 'Kata-Kata untuk Mama',
  title: 'Blessings & Thoughts',
  // TODO: Ganti atau tambah kutipan yang lebih personal jika perlu.
  slides: [
    {
      text: "A mother's love doesn't ask to be seen. It lights the room she's in.",
      attribution: 'For Mama, with gratitude',
    },
    {
      text: "May Allah grant you long years of health and ease, and fill your heart with the same peace you've given all of us.",
      attribution: 'A quiet prayer, for you',
    },
    {
      text: "You sacrificed quietly: the sleep you lost, the joys you set aside. We see all of it now, and we're grateful.",
      attribution: 'From those who grew up in your care',
    },
    {
      text: "May the kindness you planted in us bloom back into your life. You deserve the warmth you've given away.",
      attribution: 'With love, your family',
    },
    {
      text: 'Home was never the four walls around us. It was you: your voice, the way you made everything feel safe.',
      attribution: 'For always',
    },
  ],
};

// ----------------------------------------------------------------------------
// 4 · Little Timeline — short, soft moments (not a "legacy journey").
// ----------------------------------------------------------------------------
export const timeline = {
  numeral: '03',
  eyebrow: 'Kenangan yang Menghangatkan Rumah',
  title: 'Little Moments',
  // TODO: Sesuaikan dengan momen kecil nyata yang berkesan buat keluarga —
  // tidak harus tanggal formal seperti milestone besar, boleh momen sehari-hari.
  items: [
    {
      icon: '🌷',
      note: 'Where It Began',
      desc: 'Long before she became our Mama, she was someone\'s daughter, learning what love and home meant.',
    },
    {
      icon: '🍚',
      note: 'Sunday Mornings',
      desc: 'The smell of breakfast drifting through the house before anyone else woke up.',
    },
    {
      icon: '🌙',
      note: 'Late-Night Waiting',
      desc: "We'd come home late and find a small lamp still on, and so was she.",
    },
    {
      icon: '🌼',
      note: 'Small Celebrations',
      desc: 'Report cards and ordinary Tuesdays: Mama celebrated them like they mattered.',
    },
  ],
};

// ----------------------------------------------------------------------------
// 5 · Letter Room — the emotional peak.
// ----------------------------------------------------------------------------
export const letter = {
  numeral: '04',
  title: 'A Letter for Mama',
  subtitle: 'Words We Do Not Always Say Out Loud',
  openLabel: 'Buka Surat',
  openHint: 'Ketuk untuk membuka',
  openAriaLabel: 'Buka surat untuk Mama',
  closeLabel: 'Tutup Surat',
  salutation: 'Dear Mama,',
  // TODO: Ganti seluruh isi paragraf dengan surat yang ditulis langsung
  // oleh customer atau keluarga. Ini adalah placeholder hangat yang bisa
  // digunakan sebagai kerangka. Perhatikan juga tanda [USIA].
  paragraphs: [
    'Ada banyak hal yang ingin kami katakan, tapi kata-katanya sering hilang begitu kami duduk di depan Mama.',
    'Semakin kami tumbuh dewasa, semakin kami sadar berapa banyak yang sudah Mama lakukan diam-diam, tanpa pernah kami lihat.',
    'Makan malam yang Mama siapkan meski Mama sendiri lelah. Malam-malam Mama terjaga karena kami sakit, dan kekhawatiran yang Mama simpan sendiri supaya kami tetap tenang.',
    'Kami tumbuh besar di dalam kasih sayang yang Mama berikan, walau saat itu kami tidak selalu menyadarinya. Mungkin kami terlalu sibuk menjadi anak-anak, sibuk dengan dunia kami sendiri.',
    'Hari ini kami ingin Mama tahu bahwa kami sadar, dan kami bersyukur lebih dari yang bisa kami ucapkan.',
    'Mama mengajarkan kami banyak hal tanpa pernah terasa seperti sedang mengajar: sabar, lewat cara Mama menghadapi kami di hari-hari terburuk kami, dan ikhlas, lewat cara Mama memberi tanpa pernah menghitung.',
    'Mama mengajarkan kami bahwa rumah adalah soal siapa yang ada di dalamnya, bukan tempatnya. Bagi kami, rumah berarti Mama.',
    'Di ulang tahun Mama yang ke-[USIA] ini, kami hanya ingin Mama merasakan betapa dicintainya Mama apa adanya, bukan karena apa yang Mama lakukan untuk kami.',
    'Barakallahu fii umrik, Mama. Semoga Allah menjaga Mama, memudahkan langkah-langkah Mama, dan memberi lebih banyak hari yang ringan dan tenang.',
    'Semoga kebaikan yang Mama tanamkan dalam diri kami kembali kepada Mama dalam bentuk yang paling indah.',
  ],
  closing: {
    line1: 'Barakallah fii umrik, Mama.',
    line2: 'With love, from your children.',
  },
};

// ----------------------------------------------------------------------------
// 6 · Final Bloom — the emotional ending, not a footer.
// ----------------------------------------------------------------------------
export const finalBloom = {
  numeral: '05',
  eyebrow: 'Untuk Mama',
  title: 'Happy Birthday, Mama',
  // TODO: Boleh diganti dengan doa penutup yang lebih personal.
  message:
    'Semoga langkah Mama dimudahkan, doa Mama dikabulkan, dan hari-hari Mama dipenuhi ketenangan, ketenangan yang sama seperti yang selama ini Mama berikan untuk kami.',
  blessingLine: 'Barakallah fii umrik, Mama.',
  fromLine: 'With love, from your children.',
  replayLabel: 'Baca ulang dari awal',
  // Quiet closing signature — replaces the old separate Footer section.
  signature: 'Dibuat dengan cinta dan doa, untuk Mama.',
};
