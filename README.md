# Landing-Page

Tugas 6 WebDev Vinix7.

## Cara Pasang dan Menjalankan

### 1. Prasyarat

- [Node.js](https://nodejs.org/).
- Cek versi Node dan npm:

```bash
node -v
npm -v
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan project (mode development)

```bash
npm run dev
```

Setelah itu buka URL yang muncul di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk production

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist`.

### 5. Preview hasil build

```bash
npm run preview
```

## Deploy ke GitHub Pages

Project ini sudah disiapkan untuk GitHub Pages lewat GitHub Actions.

1. Push kode ke branch `main`.
2. Buka tab `Settings` di repository GitHub.
3. Masuk ke `Pages`.
4. Pada bagian `Build and deployment`, pilih `GitHub Actions`.
5. Setelah itu setiap push ke `main` akan otomatis build dan publish ke GitHub Pages.

Catatan: konfigurasi Vite memakai `base: './'` supaya asset tetap aman saat di-host di subpath GitHub Pages.
