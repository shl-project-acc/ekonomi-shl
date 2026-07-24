import type { GalleryConfig } from "@/types/galleryConfig";

// Konfigurasi Galeri
export const galleryConfig: GalleryConfig = {
    // Daftar Album
    albums: [
        // Mendukung format gambar: jpg/png/webp/avif/gif
        // id: Pengenal unik album (digunakan untuk nama folder dan URL), contoh: id: "kegiatan-2026", maka foldernya harus ada di public/gallery/kegiatan-2026/
        // cover: Menentukan gambar sampul manual (opsional, jika dikosongkan sistem akan mencari file bernama "cover.*", jika tidak ada juga, gambar pertama di folder akan dijadikan sampul)
        // name: Nama Album
        // description: Deskripsi singkat album
        // location: Lokasi pengambilan gambar
        // date: Tanggal album (Format: YYYY-MM-DD), digunakan untuk mengurutkan album
        // tags: Tag/Label album, digunakan untuk kategori dan filter pencarian
        // password: Kata sandi akses (opsional, jika diisi maka pengunjung harus memasukkan sandi untuk melihat isi album)
        // passwordHint: Petunjuk sandi (opsional, muncul jika pengunjung salah memasukkan sandi)
        // CATATAN: Setiap menambahkan satu kurung kurawal { ... } berarti Anda menambahkan satu album baru. Pastikan membuat folder yang sesuai di dalam public/gallery/
        
        {
            id: "kegiatan-2026",
            name: "Album Internal",
            description: "Ini adalah contoh album rahasia. Hanya kolega yang memiliki kata sandi yang dapat melihat dokumen dan dokumentasi di dalamnya.",
            location: "Kantor SHL",
            date: "2026-07-24",
            tags: ["Eksklusif", "Internal"],
			password: "shl",
            passwordHint: "Contoh sandi untuk membuka album ini adalah: shl",
        },
        {
            id: "album-eksklusif",
            name: "Album Internal",
            description: "Dokumentasi kegiatan, riset, dan praktik lapangan yang dilakukan oleh tim SHL Project.",
            location: "Kantor SHL",
            date: "2026-02-01",
            tags: ["Eksklusif", "Internal"],

        },
    ],

    // Lebar minimum kolom galeri foto (dalam satuan px). 
    // Browser akan otomatis menghitung jumlah kolom berdasarkan lebar layar. Bawaan: 240
    // Semakin kecil nilainya = semakin banyak kolomnya. Semakin besar = semakin sedikit kolomnya.
    columnWidth: 240,
};