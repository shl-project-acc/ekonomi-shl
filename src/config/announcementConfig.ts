import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Announcement",

	// 公告内容
	content: "Ilmu tidak akan datang menghampirimu; kamulah yang perlu mencarinya. Ia tidak menunggu, namun menuntut untuk dikejar dengan kesungguhan",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "Learn More",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
