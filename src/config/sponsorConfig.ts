import type { SponsorConfig } from "../types/sponsorConfig";



export const sponsorConfig: SponsorConfig = {

    // 页面标题，如果留空则使用 i18n 中的翻译
	// Judul halaman (Sengaja diisi agar teks bahasa Mandarin bawaan tertimpa)

    title: "Dukung Kami",



    // 页面描述文本，如果留空则使用 i18n 中的翻译
	// Teks deskripsi halaman

    description: "Terima kasih atas apresiasi dan dukungan Anda terhadap SHL Project.",



    // 打赏用途说明
	// Penjelasan penggunaan dana dukungan

    usage:

        "Dukungan Anda akan digunakan untuk pemeliharaan server, pembuatan konten, dan pengembangan fitur, membantu saya terus menyediakan konten berkualitas."",



    // 是否显示打赏者列表

    showSponsorsList: true,



    // 是否显示评论区，需要先在commentConfig.ts启用评论系统
	// Apakah ingin menampilkan daftar nama sponsor/donatur? (true = ya, false = tidak)

    showComment: true,


    // 是否在文章详情页底部显示打赏按钮
	// Apakah ingin menampilkan kolom komentar? (Perlu diaktifkan dulu di commentConfig.ts)

    showButtonInPost: true,



    // 打赏方式列表
	// Daftar metode dukungan / pembayaran

    methods: [

        {

            name: "Alipay",

            icon: "fa7-brands:alipay",

            // 收款码图片路径（需要放在 public 目录下）使用 支付宝 扫码打赏

            qrCode: "/assets/images/sponsor/alipay.png",

            link: "",

            description: "Alipay",

            enabled: true,

        },

        {

            name: "wechat",

            icon: "fa7-brands:weixin",

            qrCode: "/assets/images/sponsor/wechat.png",

            link: "",

            description: "使用 微信 扫码打赏",

            enabled: true,

        },

        {

            name: "ko-fi",

            icon: "simple-icons:kofi",

            qrCode: "",

            link: "https://ko-fi.com/cuteleaf",

            description: "Buy a Coffee for Firefly",

            enabled: true,

        },

        {

            name: "爱发电",

            icon: "simple-icons:afdian",

            qrCode: "",

            link: "https://ifdian.net/a/cuteleaf",

            description: "通过 爱发电 进行打赏",

            enabled: true,

        },

    ],



    // 打赏者列表（可选）
	// Daftar Donatur / Sponsor (Opsional)

    sponsors: [

        // 示例：已实名打赏者
		// Contoh: Donatur dengan nama asli/profil

        {

            name: "夏叶",

            avatar:

                "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",

            amount: "¥50",

            date: "2025-10-01",

        },



        // 示例：匿名打赏者
		// Contoh: Donatur anonim ya

        {

            name: "匿名用户",

            // avatar: "",

            amount: "¥20",

            date: "2025-10-01",

        },

    ],

}; 

