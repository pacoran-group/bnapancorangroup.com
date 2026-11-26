# bnapancorangroup.com — Banyuwangi Nature Adventure

Situs resmi **Banyuwangi Nature Adventure (BNA)**, Hybrid Eco-Lifestyle Park di Genteng, Banyuwangi.
Bagian dari Pancoran Group.

Dibangun dengan Astro (situs statis) + Tailwind CSS, dan di-deploy otomatis ke Jagoan Hosting.

## Halaman

| URL | File | Isi |
|---|---|---|
| `/` | `src/pages/index.astro` | Beranda: hero, zona Siang/Malam, Kawah Ijen, peta, kuliner, event, info, FAQ |
| `/kemitraan` | `src/pages/kemitraan.astro` | Untuk calon tenant F&B |
| `/event` | `src/pages/event.astro` | Sewa venue / Garden Party |
| `/lumi` | `src/pages/lumi.astro` | Serial YouTube 12 episode maskot Lumi |
| `/404` | `src/pages/404.astro` | Halaman tidak ditemukan |

## Mengubah konten

Hampir semua teks ada di **`src/data/bna.ts`**: nomor WhatsApp, jam buka, daftar zona, FAQ,
format tenant, jadwal, dan link Google Maps. Ubah di sana, semua halaman ikut berubah.

Gambar ada di `public/images/` (format WebP). Saat ini seluruhnya **ilustrasi konsep** dari proposal;
ganti dengan foto asli begitu tersedia, dengan nama file yang sama.

### Menambahkan episode Lumi

Di `src/data/bna.ts`, cari `lumiEpisodes` lalu tempel link YouTube ke kolom `youtube` episode yang baru tayang
(boleh `youtu.be/...`, `youtube.com/watch?v=...`, atau `youtube.com/shorts/...`). Judul dan sinopsis juga bisa diisi.

```ts
{ no: 1, title: 'Judul Episode 1', synopsis: 'Ringkasan singkat…', youtube: 'https://youtu.be/XXXXXXXXXXX' },
```

Episode yang link-nya masih kosong otomatis tampil "Segera Tayang". Link channel/playlist diisi di `lumi.channelUrl`
atau `lumi.playlistUrl` agar tombol "Ikuti di YouTube" muncul.

## Menjalankan di komputer

```sh
npm ci          # pasang dependency (pertama kali)
npm run dev     # buka http://localhost:4321
npm run build   # hasil di folder dist/
```

## Deploy

Setiap push ke branch `main` menjalankan `.github/workflows/deploy.yml`:
build di GitHub Actions, lalu upload folder `dist/` via FTP ke Jagoan Hosting.

Secrets yang dibutuhkan (GitHub → Settings → Secrets and variables → Actions):

| Secret | Isi |
|---|---|
| `FTP_SERVER` | `ftp.bnapancorangroup.com` |
| `FTP_USERNAME` | username akun FTP khusus BNA (mis. `deploy-bna@bnapancorangroup.com`) |
| `FTP_PASSWORD` | password akun FTP tersebut |

> Penting: akun FTP harus **dibatasi ke folder `bnapancorangroup.com`**. Workflow meng-upload ke `/`
> milik akun FTP. Jangan pakai akun FTP utama cPanel, karena `/` miliknya adalah folder home.

`public/.htaccess` memaksa HTTPS dan menyatukan `www.` ke domain utama.
