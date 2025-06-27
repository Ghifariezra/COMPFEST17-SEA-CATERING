# 🥗 SEA-CATERING

**SEA-CATERING** adalah proyek web-app yang dikembangkan untuk seleksi **Technical Challenge COMPFEST SEA**. Aplikasi ini memungkinkan pengguna untuk berlangganan makanan sehat yang dapat dikustomisasi dan dikirim ke berbagai kota di Indonesia. Aplikasi dibangun dari awal menggunakan stack modern seperti Next.js, Tailwind, Prisma, dan PostgreSQL.

---

## 📌 Deskripsi Singkat

SEA Catering berawal dari bisnis kecil yang menyediakan makanan sehat yang bisa dikustomisasi dan dikirimkan ke berbagai kota di Indonesia. Karena viral dan permintaan yang meningkat, SEA membutuhkan aplikasi web modern yang memungkinkan pelanggan untuk:

* Memesan dan menyesuaikan rencana makan
* Melihat informasi nutrisi
* Mengatur langganan
* Mengakses dashboard user dan admin

---

## 🧰 Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **Prisma ORM**
* **Node.js**
* **PostgreSQL**
* **pnpm** (package manager)

---

## 📁 Struktur Folder

```bash
sea-catering/                          # Root folder project
├── ACCOUNT.TXT                        # Catatan akun admin atau user
├── README.md                          # Dokumentasi proyek
├── app                                # Direktori utama routing & logic App Router Next.js
│   ├── (auth)                         # Folder khusus halaman autentikasi
│   │   ├── admin                      # Halaman login admin
│   │   └── get-started               # Halaman login & register user
│   ├── api                            # Folder untuk API routes
│   │   ├── (auth)                     # API untuk autentikasi (login, register)
│   │   └── (rest)                     # API lainnya (subscription, testimonial, dll)
│   ├── components                     # Komponen UI reusable
│   │   ├── Contact                    # Komponen kontak
│   │   ├── Hero                       # Section hero di homepage
│   │   ├── Login                      # Komponen form login
│   │   ├── MenuPlans                 # Komponen daftar meal plan
│   │   ├── Navbar                     # Navigasi utama
│   │   ├── Profile                    # Komponen profil user
│   │   ├── Service                    # Komponen fitur layanan
│   │   ├── Subscriptions              # Komponen detail langganan
│   │   ├── Testimonials               # Komponen review/testimoni
│   │   └── ToggleMenu                 # Menu navigasi responsif mobile
│   ├── favicon.ico                    # Ikon browser
│   ├── generated                      # Folder file hasil generate (seperti Prisma client)
│   │   └── prisma                     # Output Prisma
│   ├── globals.css                    # File CSS global
│   ├── hooks                          # Custom React hooks
│   │   └── useCheckAuth.ts           # Hook untuk mengecek autentikasi user
│   ├── layout.tsx                     # Layout utama aplikasi (wrapping halaman)
│   ├── menu                           # Folder untuk halaman menu meal plans
│   │   └── page.tsx                  # Halaman menu
│   ├── page.tsx                       # Halaman homepage
│   ├── subscriptions                  # Folder halaman langganan
│   │   └── page.tsx                  # Halaman form subscription
│   └── utils                          # Helper/utility functions
│       └── auth.ts                   # Fungsi utilitas terkait autentikasi
├── eslint.config.mjs                 # Konfigurasi ESLint
├── next-env.d.ts                     # File env otomatis dari Next.js (TypeScript support)
├── next.config.ts                    # Konfigurasi Next.js
├── package-lock.json                 # Lockfile (jika pakai npm)
├── package.json                      # Info dependencies dan scripts
├── pnpm-lock.yaml                    # Lockfile khusus untuk pnpm
├── postcss.config.mjs               # Konfigurasi PostCSS (untuk Tailwind)
├── prisma                            # Folder skema & konfigurasi Prisma ORM
│   ├── prisma.ts                     # File inisialisasi Prisma Client
│   └── schema.prisma                 # Definisi skema database
├── public                            # Folder untuk aset statis
│   ├── file.svg                       # Aset ikon/file
│   ├── globe.svg                      # Aset ikon/globe
│   ├── next.svg                       # Logo Next.js
│   ├── vercel.svg                     # Logo Vercel
│   └── window.svg                     # Aset ikon/window
├── sql                               # SQL script untuk setup database
│   ├── addAcount.sql                 # Script menambah akun
│   └── createTable.sql               # Script membuat tabel awal
├── structure.txt                     # Catatan manual struktur folder (opsional)
└── tsconfig.json                     # Konfigurasi TypeScript

```

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Clone Repo & Install Dependencies

```bash
git clone https://github.com/Ghifariezra/COMPFEST17-SEA-CATERING.git
cd sea-catering
pnpm install
```

### 2. Buat File `.env`

Berdasarkan file `.env.example`, isi environment variable yang dibutuhkan:

```env
NEXT_PUBLIC_BASE_URL="YOUR_DOMAIN"
JWT_SECRET="SECRET"
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE?schema=public"
```

### 3. Prisma Setup

```bash
npx prisma migrate dev --name init
npx prisma db pull
npx prisma generate
```

### 4. Jalankan Development Server

```bash
pnpm dev
```

Akses aplikasi di: [http://localhost:3000](http://localhost:3000)

---

## 🎯 Fitur Berdasarkan Level

### ✅ Level 1: Homepage

* Brand dan slogan: *"Healthy Meals, Anytime, Anywhere"*
* Info pengantar bisnis & layanan
* Kontak: Brian - 08123456789

### ✅ Level 2: Interaktivitas

* Navigasi responsif
* Halaman Menu dengan detail meal plan
* Testimonial (form dan carousel)

### ✅ Level 3: Sistem Langganan

* Form lengkap dengan:

  * Nama, kontak, plan, jenis makan, hari pengiriman, alergi
  * Hitung otomatis total biaya
* Integrasi ke database menggunakan Prisma

### ✅ Level 4: Keamanan

* Autentikasi: Register & Login
* Hash password (bcrypt)
* Role-based authorization (user & admin)
* Validasi & sanitasi input: cegah XSS, SQLi, CSRF

### ✅ Level 5: Dashboard

* **User**: lihat, pause, cancel langganan
* **Admin**: lihat metrik (MRR, jumlah langganan, growth)

---

## 🔐 Admin Setup

Untuk menjadikan user sebagai admin, ubah nilai kolom `role` di database menjadi `"admin"` pada tabel `User`.

---

## 🌍 Deployment

Aplikasi ini dideploy menggunakan **Vercel**:

🔗 [https://compfest-17-sea-catering.vercel.app/](https://compfest-17-sea-catering.vercel.app/)

---

## 📦 Scripts

```bash
pnpm dev          # Jalankan development
pnpm build        # Build production
pnpm start        # Jalankan production
pnpm lint         # Linting
```

---

## 📄 Penilaian COMPFEST

* ✅ Fitur lengkap per level
* ✅ Clean code & arsitektur modular
* ✅ Layout responsif
* ✅ Dokumentasi README
* ✅ Riwayat git commit bertahap

---

## 👨‍💻 Developer

- **Nama**: Ghifari Ezra Ramadhan
- 📧 Email: [ghifariezraramadhan@gmail.com](mailto:ghifariezraramadhan@gmail.com)
- 🔗 LinkedIn: [https://github.com/Ghifariezra](https://github.com/Ghifariezra)