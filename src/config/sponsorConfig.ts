import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
    // Judul halaman (Sengaja diisi agar teks bahasa Mandarin bawaan tertimpa)
    title: "Dukung Kami",

    // Teks deskripsi halaman
    description: "Terima kasih atas apresiasi dan dukungan Anda terhadap SHL Project.",

    // Penjelasan penggunaan dana dukungan
    usage:
        "Dukungan Anda akan digunakan untuk pemeliharaan server, pengembangan konten, dan operasional SHL Project agar kami dapat terus memberikan karya dan informasi yang bermanfaat.",

    // Apakah ingin menampilkan daftar nama sponsor/donatur? (true = ya, false = tidak)
    showSponsorsList: true,

    // Apakah ingin menampilkan kolom komentar? (Perlu diaktifkan dulu di commentConfig.ts)
    showComment: true,

    // Apakah tombol "Sponsor" ingin ditampilkan di bagian bawah setiap artikel?
    showButtonInPost: true,

    // Daftar metode dukungan / pembayaran
    methods: [
        {
            name: "QRIS / Transfer Bank",
            icon: "fa6-solid:qrcode", 
            // Path gambar QR Code (harus diletakkan di dalam folder public seperti avatar tadi)
            qrCode: "/qris-anda.png", // <--- Ganti dengan nama file gambar QRIS Anda nanti
            link: "",
            description: "Dukung via QRIS (M-Banking / e-Wallet)",
            // Di-set false dulu sementara sampai Anda punya gambar QRIS di folder public
            enabled: false, 
        },
        {
            name: "Saweria",
            icon: "fa6-solid:hand-holding-dollar",
            qrCode: "",
            link: "https://saweria.co/username-anda", // <--- Ganti dengan link Saweria Anda
            description: "Dukung kami melalui Saweria",
            enabled: true,
        },
        {
            name: "Ko-fi",
            icon: "simple-icons:kofi",
            qrCode: "",
            link: "https://ko-fi.com/username-anda", // <--- Ganti dengan link Ko-fi Anda
            description: "Belikan kami kopi via Ko-fi",
            enabled: true,
        },
        {
            name: "Trakteer",
            icon: "fa6-solid:mug-hot",
            qrCode: "",
            link: "https://trakteer.id/username-anda", // <--- Ganti dengan link Trakteer Anda
            description: "Trakteer kami via Trakteer",
            enabled: false, // Ubah ke true jika Anda punya akun Trakteer
        },
    ],

    // Daftar Donatur / Sponsor (Opsional)
    sponsors: [
        // Contoh: Donatur dengan nama asli/profil
        {
            name: "Kolega SHL",
            avatar:
                "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
            amount: "Rp 50.000",
            date: "2026-07-24",
        },

        // Contoh: Donatur anonim
        {
            name: "Hamba Allah",
            // avatar: "",
            amount: "Rp 20.000",
            date: "2026-07-24",
        },
    ],
};