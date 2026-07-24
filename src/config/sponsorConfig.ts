import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
    title: "Dukung Kami",
    description: "Jika konten kami bermanfaat bagi Anda, silakan dukung melalui metode di bawah ini. Dukungan Anda adalah motivasi bagi kami untuk terus berkembang!",
    usage:
        "Dukungan Anda akan digunakan untuk pemeliharaan server, pembuatan konten, dan pengembangan fitur, membantu saya terus menyediakan konten berkualitas.",

    showSponsorsList: true,
    showComment: true,
    showButtonInPost: true,

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

    sponsors: [
        {
            name: "Kolega SHL",
            avatar:
                "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
            amount: "Rp 50.000",
            date: "2026-07-24",
        },
        {
            name: "Pengguna Anonim",
            amount: "Rp 20.000",
            date: "2026-07-24",
        },
    ],
};