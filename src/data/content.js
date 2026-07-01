// ============================================================================
// Semua wording personal ada di sini — nama, tanggal lahir, teks surat, dll.
// Ini SATU-SATUNYA file yang perlu disentuh untuk mengganti data customer.
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

export const nav = {
  brand: 'Untuk Mama',
  links: [
    { label: 'Beranda', href: '#hero' },
    { label: 'Perjalanan', href: '#timeline' },
    { label: 'Kita Cinta', href: '#traits' },
    { label: 'Kutipan', href: '#quotes' },
    { label: 'Surat', href: '#letter' },
  ],
};

export const hero = {
  eyebrow: 'Barakallah fii umrik',
  typewriterLines: [
    'Happy Birthday to our dearest Mama 🌸',
    'Thank you for your endless warmth and gentle love.',
    'You are the heart that holds this family together.',
    'Wishing you a life full of joy, peace, and beautiful days.',
  ],
  quote: {
    // TODO: Ganti dengan kutipan atau kata-kata yang lebih personal jika perlu.
    text: 'Home is not just a place — it is the warmth that Mama carries wherever she goes. Every meal, every embrace, every quiet moment of care is a gift we are still learning to fully understand.',
    attribution: '— For Mama, our first home',
  },
  ctaPrimary: { label: 'Buka Surat', href: '#letter' },
  ctaSecondary: { label: 'Lihat Perjalanan', href: '#timeline' },
  counterLabel: "Mama's Time With Us",
  counterUnits: { days: 'Hari', hours: 'Jam', minutes: 'Menit', seconds: 'Detik' },
};

export const stats = [
  { id: 'years', label: 'Years of Love' },
  { id: 'months', label: 'Months of Warmth' },
  { id: 'days', label: 'Days With Us' },
];

export const timeline = {
  eyebrowNum: '01',
  eyebrow: 'The Years That Shaped Our Home',
  title: "Mama's Journey",
  items: [
    {
      // TODO: Sesuaikan tanggal dan deskripsi dengan cerita nyata keluarga.
      date: 'May 10, 1970',
      title: 'Mama Was Born',
      desc: "This is where it all began. Long before she became our Mama, she was someone's daughter — learning the meaning of love, warmth, and home.",
      icon: '🌷',
    },
    {
      date: 'August 21, 1993',
      title: 'Mama Got Married',
      desc: 'On this day, Mama started building the family we know and love. She brought patience, grace, and warmth into every corner of our home.',
      icon: '💍',
    },
    {
      date: 'June 3, 1994',
      title: 'Mama Became a Mother',
      desc: 'For the first time, Mama held her child in her arms. Everything she had — her heart, her time, her quiet strength — she gave freely and without asking anything in return.',
      icon: '🌿',
    },
    {
      date: 'October 27, 2004',
      title: 'The Family Grew',
      desc: 'Her love only multiplied. Another child, another story, another reason for Mama to give even more of herself — and she did, without hesitation.',
      icon: '🌸',
    },
    {
      date: 'May 2, 2007',
      title: 'More Laughter at Home',
      desc: 'The house became fuller — more noise, more stories, and Mama there through all of it. Steady, loving, and always present.',
      icon: '🌼',
    },
  ],
  todayItem: {
    // TODO: Ganti usia Mama yang benar di bagian title.
    dateLabel: 'Today',
    title: 'Happy Birthday, Mama 🎂',
    desc: 'Today, we want you to rest, to feel celebrated, and to know just how deeply you are loved — not for what you do, but simply for who you are.',
    icon: '🎂',
  },
};

export const traits = {
  eyebrowNum: '02',
  eyebrow: 'Things We Love About You',
  title: 'Everything That Makes You, You',
  // TODO: Sesuaikan dengan hal-hal spesifik yang customer dan keluarga sukai dari Mama.
  items: [
    {
      icon: '🍳',
      title: 'Your Cooking',
      desc: 'No restaurant will ever compare. Every dish you make carries something extra — something only you know how to add.',
    },
    {
      icon: '🤍',
      title: 'Your Patience',
      desc: 'You have waited, forgiven, and started over more times than we can count. It still amazes us.',
    },
    {
      icon: '🏡',
      title: 'How You Make Home',
      desc: 'Wherever you are, that is where home feels like. You carry it with you without even trying.',
    },
    {
      icon: '🌿',
      title: 'Your Calmness',
      desc: 'In the middle of chaos, you are the calm. Your presence alone has always been enough to settle things.',
    },
    {
      icon: '🌸',
      title: 'Your Gentle Heart',
      desc: 'You notice the little things. You remember what matters. You care in ways that people often miss.',
    },
    {
      icon: '📖',
      title: 'The Way You Teach',
      desc: 'Not with lectures, but with example. We learned most of what we know simply by watching you.',
    },
    {
      icon: '🌙',
      title: 'Your Quiet Prayers',
      desc: 'We may not always hear them, but we feel them — every single day. Thank you for always praying for us.',
    },
    {
      icon: '🎁',
      title: 'How You Show Up',
      desc: 'For birthdays, big days, ordinary days — you always show up. You make every moment feel meaningful.',
    },
  ],
};

export const quotes = {
  eyebrowNum: '03',
  eyebrow: 'Words for You',
  title: 'Blessings & Thoughts',
  // TODO: Ganti atau tambah kutipan yang lebih personal jika perlu.
  slides: [
    {
      text: "A mother's love is the purest light a family will ever know. It does not demand to be seen, yet it brightens every corner of the home.",
      attribution: '— For Mama, with gratitude',
    },
    {
      text: 'May Allah grant you long years of health, open doors of ease in every direction, and fill your heart with the same peace you have given all of us.',
      attribution: '— A quiet prayer, for you',
    },
    {
      text: 'The things you sacrificed quietly — the sleep you lost, the little joys you set aside — none of it was invisible. We see it now. And we are so grateful.',
      attribution: '— From those who grew up in your care',
    },
    {
      text: 'May every kindness you planted in us bloom back into your life. You deserve all the warmth you have so generously given away.',
      attribution: '— With love, your family',
    },
    {
      text: 'Home was never just the four walls around us. It was always you — your presence, your voice, your love that made it feel safe.',
      attribution: '— Always and forever',
    },
  ],
};

export const letter = {
  eyebrowNum: '04',
  title: 'A Letter for Mama',
  subtitle: 'Words We Do Not Always Say Out Loud',
  openLabel: 'Buka Surat',
  openAriaLabel: 'Buka surat untuk Mama',
  closeLabel: 'Tutup Surat',
  salutation: 'Dear Mama,',
  // TODO: Ganti seluruh isi paragraf dengan surat yang ditulis langsung
  // oleh customer atau keluarga. Ini adalah placeholder hangat yang bisa
  // digunakan sebagai kerangka.
  paragraphs: [
    'Ada banyak hal yang ingin kami katakan, tapi entah bagaimana kata-kata itu sering terasa tidak cukup ketika berhadapan langsung dengan Mama.',
    'Semakin kami tumbuh dewasa, semakin kami menyadari betapa banyak hal yang sudah Mama lakukan — bukan hanya yang terlihat, tapi terutama yang tidak terlihat. Yang diam-diam.',
    'Semua makan malam yang Mama siapkan meski Mama sendiri lelah. Semua malam yang Mama terjaga karena kami sakit. Semua kekhawatiran yang Mama simpan sendiri supaya kami tidak ikut cemas.',
    'Kami tumbuh besar di dalam kasih sayang yang Mama berikan — dan kami tidak selalu menyadarinya pada saat itu. Mungkin kami terlalu sibuk jadi anak-anak, terlalu sibuk dengan dunia kami sendiri.',
    'Tapi hari ini, kami ingin Mama tahu: kami tahu. Dan kami bersyukur lebih dari yang bisa kami ungkapkan.',
    'Mama mengajarkan kami banyak hal tanpa pernah terasa seperti sedang mengajar. Mama mengajarkan kami sabar — lewat cara Mama menghadapi kami di hari-hari terburuk kami. Mama mengajarkan kami ikhlas — lewat cara Mama memberi tanpa pernah menghitung.',
    'Mama mengajarkan kami bahwa rumah bukan tentang tempatnya. Rumah adalah tentang siapa yang ada di dalamnya. Dan bagi kami, rumah selalu berarti Mama.',
    'Di ulang tahun Mama yang ke-[USIA] ini, kami hanya ingin satu hal: supaya Mama bisa merasakan betapa dicintainya Mama — bukan karena apa yang Mama lakukan, tapi karena siapa Mama apa adanya.',
    'Barakallahu fii umrik, Mama. Semoga Allah selalu menjaga Mama, memudahkan setiap langkah Mama, dan memberikan Mama lebih banyak hari-hari yang ringan dan penuh kedamaian.',
    'Semoga setiap kebaikan yang Mama tanamkan dalam diri kami kembali kepada Mama dalam bentuk yang paling indah.',
  ],
  closing: {
    line1: 'Barakallah fii umrik, Mama.',
    line2: 'With love, from your children.',
  },
};

export const footer = {
  title: 'Made with Love',
  subtitle: 'Untuk Mama · dengan doa, syukur, dan cinta',
  note: 'Thank you for every quiet sacrifice that words will never fully capture',
};
