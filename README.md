# UMIBA - Website Pendaftaran Online

Proyek **UMIBA** adalah website berbasis **React**, **Vite**, dan **Tailwind CSS** yang dikembangkan untuk mendukung pendaftaran online di kampus Universitas Mitra Bangsa. Website ini mencakup fitur-fitur utama seperti formulir pendaftaran, halaman informasi fakultas & program studi, berita kampus, dan fasilitas kampus.

---

## Fitur Utama

- **Formulir Pendaftaran Online**: Formulir multistep dengan validasi untuk memudahkan calon mahasiswa mendaftar.
- **Halaman Program Studi**: Informasi lengkap tentang program studi, kompetensi, dan prospek karier.
- **Halaman Fasilitas Kampus**: Menampilkan fasilitas kampus dalam bentuk galeri.
- **Berita Kampus**: Berita dan informasi terkini dari Universitas Mitra Bangsa.
- **Tampilan Responsif**: Menggunakan Tailwind CSS untuk tampilan responsif di berbagai perangkat.

---

## Cara Menjalankan Proyek

### 1. Clone Repository

Clone repository ini ke perangkat:

```bash
git clone https://github.com/username/umiba-website.git
```

### 2. Install Dependencies

Masuk ke folder proyek dan jalankan perintah berikut untuk menginstal semua dependensi:

```bash
cd umiba-website
npm install
```

### 3. Menjalankan Aplikasi

Gunakan perintah berikut untuk menjalankan aplikasi dalam mode pengembangan:

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:5173](http://localhost:5173).

---

## Struktur Folder

Berikut adalah penjelasan tentang struktur folder proyek:

```
📁src
```

### **📁assets**

Folder ini berisi semua aset seperti gambar, logo, dan ikon yang digunakan di website. Folder utama di dalamnya:

- **📁banner**: Gambar banner untuk halaman tertentu.
- **📁fakultas-prodi**: Gambar untuk fakultas dan program studi.
- **📁images**: Gambar untuk konten berita, fasilitas, dan elemen lainnya.
- **📁muka**: Foto profil dosen maupun foto profil lainnya.
- **📁page-banners**: Gambar banner spesifik untuk halaman seperti berita, fasilitas, dan pendaftaran online.

---

### **📁components**

Berisi komponen React yang digunakan di seluruh aplikasi. Komponen pentingnya seperti:

- **`Navbar.jsx`**: Komponen navigasi utama.
- **`Footer.jsx`**: Footer di bagian bawah halaman.
- **📁Homepage**: Berisi komponen spesifik untuk halaman beranda.
- **📁Multistep**: Berisi komponen formulir multistep, seperti:
  - **`MultiStepForm.jsx`**: Formulir utama.
  - **`StepOne.jsx`**, **`StepTwo.jsx`**, **`StepThree.jsx`**, **`SummaryForm.jsx`**: Langkah-langkah dalam formulir.
- **`NewsCard.jsx`**: Komponen untuk menampilkan kartu berita.

Jika komponen yang dibuat ditaruh diluar selain didalam folder, maka komponen itu milik global.

---

### **📁constants**

Berisi file untuk data statis yang digunakan di berbagai halaman, seperti:

- **`homepage.js`**: Data untuk halaman beranda.
- **`multiStep.js`**: Data untuk formulir multistep.
- **📁programstudi**: Data untuk program studi.

---

### **📁layouts**

Berisi layout utama yang digunakan di aplikasi, seperti:

- **`MainLayout.jsx`**: Layout utama yang mencakup navbar, footer, dan konten halaman.

---

### **📁pages**

Folder ini berisi semua halaman utama website, contohnya seperti:

- **`Berita.jsx`**, **`BeritaDetailPage.jsx`**: Halaman berita dan detail berita.
- **`Fasilitas.jsx`**: Halaman fasilitas kampus.
- **`FormPendaftaran.jsx`**: Halaman formulir pendaftaran.
- **`HomePage.jsx`**: Halaman utama beranda.
- **`ProgramStudiPage.jsx`**: Halaman program studi.

---

### **📁routes**

- **`AppRoutes.jsx`**: Mengatur semua routing dalam aplikasi menggunakan React Router.

---

### **📁types**

- **`FakultasPropTypes.js`**: Definisi tipe data untuk fakultas menggunakan PropTypes.

---

### **📁utils**

Folder ini berisi fungsi-fungsi utilitas yang digunakan di seluruh aplikasi. Saat ini belom ada apa-apa

---

### **File Penting**

- **`App.jsx`**: Entry point utama untuk aplikasi React.
- **`main.jsx`**: File utama untuk merender aplikasi ke DOM.
- **`index.css`**, **`App.css`**, dan **`Tailwind.config.js`**: File CSS untuk gaya aplikasi.

---

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun UI Website.
- **Vite**: Build tool cepat untuk pengembangan dan production.
- **Tailwind CSS**: Framework CSS untuk desain responsif dan utility-first.
- **React Router**: Library untuk navigasi antar halaman.

---
