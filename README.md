# 🥗 SEA-CATERING

**SEA-CATERING** adalah aplikasi web modern untuk layanan langganan makanan sehat, dikembangkan untuk seleksi **Technical Challenge COMPFEST SEA**.  
Aplikasi ini memungkinkan pengguna memesan, mengatur, dan memantau langganan makanan sehat secara fleksibel.

---

## 🚀 Fitur Utama

- **Homepage**: Brand, slogan, pengantar bisnis, kontak.
- **Menu**: Daftar meal plan lengkap dengan detail nutrisi.
- **Testimonial**: Carousel & form feedback pelanggan.
- **Langganan**: Form pemesanan, hitung otomatis harga, custom meal & hari.
- **Dashboard User**: Lihat, pause, cancel langganan.
- **Dashboard Admin**: Metrik bisnis (MRR, jumlah langganan, growth).
- **Keamanan**: Register, login, hash password, role-based, validasi input.

---

## 🧰 Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS**
- **Prisma ORM**
- **Node.js**
- **PostgreSQL**
- **pnpm** (package manager)

---

## 📁 Struktur Folder

```bash
sea-catering/
├── app/                # Source code utama (pages, api, components, hooks, utils)
├── prisma/             # Schema & migration Prisma
├── public/             # Static assets
├── sql/                # SQL seed/manual scripts
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## ⚡️ Cara Menjalankan Aplikasi

### 1. Clone Repo & Install Dependencies

```bash
git clone https://github.com/Ghifariezra/COMPFEST17-SEA-CATERING.git
cd sea-catering
pnpm install
```

### 2. Setup Environment Variable

Buat file `.env` berdasarkan `.env.example`:

```env
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
JWT_SECRET="SECRET"
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/YOUR_DATABASE?schema=public"
```

### 3. Setup Database & Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Jika ingin sinkronisasi ulang dengan database yang sudah ada:
```bash
npx prisma db pull
```

### 4. Jalankan Development Server

```bash
pnpm dev
```

Akses aplikasi di: [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Struktur & Relasi Database (Prisma)
### ERD
![ERD-SEA-CATERING](./ERD/sea_catering.png)

Aplikasi ini menggunakan PostgreSQL dengan Prisma ORM.  
Berikut relasi utama antar tabel (lihat juga `prisma/schema.prisma`):

- **users** ⟷ **subscriptions** (1 user bisa punya banyak subscription)
- **users** ⟷ **carts** (1 user bisa punya banyak cart)
- **users** ⟷ **testimonials** (1 user bisa memberi banyak testimonial)
- **meal_plans** ⟷ **subscriptions** (1 meal plan bisa dipilih banyak subscription)
- **meal_plans** ⟷ **carts** (1 meal plan bisa ada di banyak cart)

Contoh relasi di Prisma:
```prisma
model users {
  id             Int             @id @default(autoincrement())
  email          String          @unique
  password       String
  full_name      String
  phone          String
  created_at     DateTime        @default(now())
  role           String?
  carts          carts[]
  subscriptions  subscriptions[]
  testimonials   testimonials[]
}

model meal_plans {
  id             String          @id
  name           String
  // ...field lain
  carts          carts[]
  subscriptions  subscriptions[]
}

model carts {
  id             Int         @id @default(autoincrement())
  user_id        Int
  meal_plan_id   String
  // ...
  user           users       @relation(fields: [user_id], references: [id])
  meal_plan      meal_plans  @relation(fields: [meal_plan_id], references: [id])
}

model subscriptions {
  id             Int         @id @default(autoincrement())
  user_id        Int
  plan_id        String
  // ...
  user           users       @relation(fields: [user_id], references: [id])
  meal_plan      meal_plans  @relation(fields: [plan_id], references: [id])
}

model testimonials {
  id             Int         @id @default(autoincrement())
  user_id        Int
  // ...
  user           users       @relation(fields: [user_id], references: [id])
}
```

---

## 🔐 Admin Setup

Untuk menjadikan user sebagai admin, ubah kolom `role` pada tabel `users` menjadi `"admin"`.

---

## 🌍 Deployment

Aplikasi ini dideploy di **Vercel**:  
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

## 🎯 Fitur Berdasarkan Level

### ✅ Level 1: Homepage
- Brand & slogan: *"Healthy Meals, Anytime, Anywhere"*
- Info pengantar bisnis & layanan
- Kontak: Brian - 08123456789

### ✅ Level 2: Interaktivitas
- Navigasi responsif
- Halaman Menu dengan detail meal plan
- Testimonial (form & carousel)

### ✅ Level 3: Sistem Langganan
- Form lengkap: nama, kontak, plan, jenis makan, hari pengiriman, alergi
- Hitung otomatis total biaya
- Integrasi database (Prisma)

### ✅ Level 4: Keamanan
- Register & Login
- Hash password (bcrypt)
- Role-based (user/admin)
- Validasi & sanitasi input (XSS, SQLi, CSRF)

### ✅ Level 5: Dashboard
- **User**: lihat, pause, cancel langganan
- **Admin**: lihat metrik (MRR, jumlah langganan, growth)

---

## 📄 Penilaian COMPFEST

- ✅ Fitur lengkap per level
- ✅ Clean code & arsitektur modular
- ✅ Layout responsif
- ✅ Dokumentasi README
- ✅ Riwayat git commit bertahap

---

## ❓ FAQ & Bantuan

- **Error koneksi database?**  
  Pastikan `DATABASE_URL` di `.env` sudah benar dan PostgreSQL berjalan.

- **Mau reset data?**  
  Jalankan `npx prisma migrate reset` (akan menghapus semua data).

- **Butuh seed data?**  
  Lihat folder `/sql` untuk contoh seed SQL.

---