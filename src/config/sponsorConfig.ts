import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
    // Judul halaman
    title: "Dukung Kami",

    // Teks deskripsi halaman
    description: "Jika konten saya bermanfaat bagi Anda, silakan dukung melalui metode di bawah ini. Dukungan Anda adalah motivasi bagi saya untuk terus berkarya!",

    // Penjelasan penggunaan donasi
    usage:
        "Dukungan Anda akan digunakan untuk pemeliharaan server, pembuatan konten, dan pengembangan fitur, membantu saya terus menyediakan konten berkualitas.",

    // Apakah menampilkan daftar sponsor
    showSponsorsList: true,

    // Apakah menampilkan kolom komentar (harus diaktifkan di commentConfig.ts terlebih dahulu)
    showComment: true,

    // Apakah menampilkan tombol sponsor di bagian bawah halaman detail artikel
    showButtonInPost: true,

    // Daftar metode dukungan/donasi
    methods: [
        {
            name: "Alipay",
            icon: "fa7-brands:alipay",
            qrCode: "/assets/images/sponsor/alipay.png",
            link: "",
            description: "Gunakan Alipay untuk scan kode QR dan berdonasi",
            enabled: true,
        },
        {
            name: "WeChat",
            icon: "fa7-brands:weixin",
            qrCode: "/assets/images/sponsor/wechat.png",
            link: "",
            description: "Gunakan WeChat untuk scan kode QR dan berdonasi",
            enabled: true,
        },
        {
            name: "Ko-fi",
            icon: "simple-icons:kofi",
            qrCode: "",
            link: "https://ko-fi.com/username-anda",
            description: "Belikan kopi untuk kami",
            enabled: true,
        },
        {
            name: "Saweria",
            icon: "simple-icons:afdian",
            qrCode: "",
            link: "https://saweria.co/username-anda",
            description: "Dukung kami melalui Saweria",
            enabled: true,
        },
    ],

    // Daftar sponsor (opsional)
    sponsors: [
        // Contoh: Sponsor terverifikasi/bernama
        {
            name: "Kolega SHL",
            avatar:
                "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
            amount: "Rp 50.000",
            date: "2026-07-24",
        },

        // Contoh: Sponsor anonim
        {
            name: "Pengguna Anonim",
            // avatar: "",
            amount: "Rp 20.000",
            date: "2026-07-24",
        },
    ],
};