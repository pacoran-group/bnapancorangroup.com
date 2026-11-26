/**
 * Semua konten utama situs Banyuwangi Nature Adventure ada di file ini.
 * Ubah teks, nomor WhatsApp, jam buka, atau daftar zona di sini —
 * semua halaman otomatis ikut berubah setelah build.
 */

export const site = {
  name: 'Banyuwangi Nature Adventure',
  shortName: 'BNA',
  tagline: 'Main seharian, terpukau saat malam',
  description:
    'Hybrid Eco-Lifestyle Park di Genteng, Banyuwangi: Playland ber-AC, Kawah Ijen Blue Fire Waterpark, taman cahaya malam, kuliner bernuansa Osing, dan venue acara.',
  url: 'https://bnapancorangroup.com',
  location: 'Genteng, Banyuwangi',
  status: 'Soft Opening · Q4 2026',
  parent: { name: 'Pancoran Group', url: 'https://www.pancorangroup.com' },
  email: 'info@pancorangroup.com',
  // Nomor WhatsApp layanan pelanggan (format internasional tanpa +)
  whatsapp: '628133728031',
  whatsappDisplay: '+62 813-3728-031',
  // Ganti dengan link Google Maps resmi BNA bila sudah tersedia
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Banyuwangi Night Amazing, Genteng, Banyuwangi'),
};

export const wa = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const waLinks = {
  info: wa('Halo, saya ingin info tiket & jam buka Banyuwangi Nature Adventure.'),
  venue: wa('Halo, saya ingin menanyakan sewa venue di Banyuwangi Nature Adventure untuk acara saya.'),
  tenant: wa('Halo, saya tertarik menjadi tenant F&B di Banyuwangi Nature Adventure. Mohon info unit yang tersedia.'),
  rombongan: wa('Halo, saya ingin menanyakan paket kunjungan rombongan ke Banyuwangi Nature Adventure.'),
};

export const img = (name: string) => `/images/${name}.webp`;

export const hours = [
  { label: 'Sesi Siang', value: '10.00 – 16.00' },
  { label: 'Sesi Malam', value: '17.00 – 22.00' },
];

export const facts = [
  { label: 'Lokasi', value: 'Genteng, Banyuwangi' },
  ...hours,
  { label: 'Playland ber-AC', value: '250 anak' },
  { label: 'Unit Kuliner', value: '12 tenant' },
];

export type Zone = { title: string; desc: string; image: string; contain?: boolean };

export const zonesDay: Zone[] = [
  {
    title: 'Area Playland',
    desc: 'Taman bermain indoor ber-AC berkapasitas 250 anak. Aman, bersih, dan nyaman, sementara orang tua bersantai di dekatnya.',
    image: img('playland'),
  },
  {
    title: 'Kawah Ijen Blue Fire Waterpark',
    desc: '"The Mystic Crater Adventure": perosotan air yang melingkari gunung bertema Kawah Ijen, lengkap dengan kolam anak dan sewa ban.',
    image: img('kawah-ijen-waterpark'),
    contain: true,
  },
  {
    title: 'Area Kuliner',
    desc: '12 unit kuliner dari masakan Nusantara, Thai, Western, hingga kopi, tempat makan siang keluarga dan camilan segar.',
    image: img('kuliner-interior'),
  },
];

export const zonesNight: Zone[] = [
  {
    title: 'Taman Pohon & Bunga Menyala',
    desc: 'Jalan setapak di antara pohon, bunga raksasa, dan rumput yang bercahaya. Spot foto terbaik setelah matahari terbenam.',
    image: img('taman-pohon'),
  },
  {
    title: 'Taman Ubur-Ubur Menyala',
    desc: 'Instalasi ubur-ubur cahaya biru yang seolah melayang di atas kolam, terinspirasi api biru Kawah Ijen.',
    image: img('taman-ubur-ubur'),
  },
  {
    title: 'Taman Hewan Menyala',
    desc: 'Gajah, rusa, dan satwa lain dalam patung cahaya. Seru untuk anak, sekaligus mengenalkan ragam satwa.',
    image: img('taman-hewan'),
  },
  {
    title: 'Gajah Oling LED Bridge',
    desc: 'Jembatan berlorong cahaya yang terinspirasi motif batik Gajah Oling khas Banyuwangi.',
    image: img('jembatan-cahaya'),
  },
  {
    title: 'Wahana Swing Swinger',
    desc: 'Wahana ayun berputar di tengah taman, dikelilingi Taman Bunga dan Taman Kembang Api Menyala.',
    image: img('suasana-malam'),
  },
];

export const mapLegend = [
  'Area Waterpark & Kolam Anak',
  'Taman Pohon Menyala',
  'Taman Kembang Api Menyala',
  'Taman Ubur-Ubur Menyala',
  'Taman Rumput Menyala',
  'Taman Hewan Menyala',
  'Taman Bunga Menyala',
  'Wahana Swing Swinger',
  'Area Playland (indoor)',
  'Area Foodcourt (12 unit)',
  'Garden Party',
];

export const eventTypes = ['Pernikahan', 'Gathering Kantor', 'Ulang Tahun', 'Kegiatan Sekolah', 'Komunitas'];

export const tenantFormats = [
  {
    name: 'Anchor Tenant',
    desc: 'Unit terluas di titik paling strategis. Untuk restoran atau brand yang menjadi magnet pengunjung.',
  },
  {
    name: 'Standard Kiosk',
    desc: 'Ruang menengah untuk makanan cepat saji, makanan penutup, atau minuman kekinian.',
  },
  {
    name: 'Pop-Up / Island Booth',
    desc: 'Camilan ringan dan minuman. Titik masuk fleksibel dengan komitmen rendah.',
  },
];

export const tenantBenefits = [
  { title: 'Booth siap pakai', desc: 'Fasad arsitektur Osing modern tanpa biaya konstruksi tambahan bagi tenant.' },
  { title: 'Ramai siang & malam', desc: 'Keluarga di siang hari, anak muda dan tamu acara di malam hari.' },
  { title: 'Katering acara', desc: 'Tenant mitra menjadi vendor prioritas untuk acara komersial di BNA.' },
  { title: 'Fasilitas bersama', desc: 'Area makan komunal, keamanan, parkir terintegrasi, dan pengelolaan limbah terpusat.' },
];

export const tenantCriteria = [
  'Legalitas usaha lengkap: NIB, PIRT, dan sertifikasi Halal bila berlaku',
  'Memenuhi standar kebersihan dan keamanan pangan',
  'Bersedia melayani acara komersial di luar jam standar',
  'Menghormati desain fasad Osing dan konsistensi visual kawasan',
];

export const timeline = [
  { when: 'Sekarang', what: 'Pendaftaran, kurasi & fit-out tenant' },
  { when: 'Q4 2026', what: 'Soft opening' },
  { when: 'Desember 2026', what: 'Musim liburan akhir tahun' },
];

export const marketStats = [
  { value: '513 rb+', label: 'Penduduk 5 kecamatan sekitar Genteng', source: 'BPS Banyuwangi 2024' },
  { value: '3,67 jt', label: 'Kunjungan wisatawan Banyuwangi 2025 (+7,25%)', source: 'Disbudpar Banyuwangi' },
  { value: '66,4%', label: 'Penduduk usia produktif', source: 'BPS Banyuwangi' },
  { value: '3,5–5 jam', label: 'Proyeksi lama kunjungan', source: 'Comparative Tourism Study 2024' },
];

export const faqs = [
  {
    q: 'Kapan Banyuwangi Nature Adventure buka?',
    a: 'BNA dijadwalkan soft opening pada kuartal IV 2026. Tanggal pasti akan diumumkan melalui WhatsApp dan media sosial Pancoran Group.',
  },
  {
    q: 'Jam berapa BNA buka?',
    a: 'Sesi siang pukul 10.00–16.00 dan sesi malam pukul 17.00–22.00. Jam operasional dapat menyesuaikan selama masa soft opening.',
  },
  {
    q: 'Berapa harga tiket masuk?',
    a: 'Harga tiket akan diumumkan menjelang soft opening. Hubungi kami lewat WhatsApp untuk info terbaru dan harga rombongan.',
  },
  {
    q: 'Apakah cocok untuk anak-anak?',
    a: 'Sangat cocok. Ada Playland indoor ber-AC berkapasitas 250 anak dan kolam anak di area waterpark, serta taman cahaya yang aman dijelajahi bersama keluarga.',
  },
  {
    q: 'Bisakah BNA disewa untuk acara?',
    a: 'Bisa. Area Garden Party dapat digunakan untuk pernikahan, gathering kantor, ulang tahun, maupun kegiatan sekolah. Tenant kuliner BNA dapat menjadi katering acara Anda.',
  },
  {
    q: 'Bagaimana cara menjadi tenant kuliner?',
    a: 'Pilih format unit (Anchor Tenant, Standard Kiosk, atau Pop-Up Booth) lalu hubungi tim kami lewat WhatsApp. Slot tiap zona terbatas.',
  },
];
