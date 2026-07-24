import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
    title: "Dukung Kami",
    description: "Terima kasih atas apresiasi dan dukungan Anda terhadap SHL Project.",
    usage:
        "Dukungan Anda akan digunakan untuk pemeliharaan server, pengembangan konten, dan operasional SHL Project agar kami dapat terus memberikan karya dan informasi yang bermanfaat.",

    showSponsorsList: true,
    showComment: true,
    showButtonInPost: true,

    methods: [
        {
            name: "Saweria",
            icon: "", 
            qrCode: "",
            link: "https://saweria.co/username-anda",
            description: "Dukung kami melalui Saweria",
            enabled: true,
        },
        {
            name: "Ko-fi",
            icon: "",
            qrCode: "",
            link: "https://ko-fi.com/username-anda",
            description: "Belikan kami kopi via Ko-fi",
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
            name: "Hamba Allah",
            amount: "Rp 20.000",
            date: "2026-07-24",
        },
    ],
};