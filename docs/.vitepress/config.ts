import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { navigation } from "./navigation";
import { katex } from '@mdit/plugin-katex';

export default defineConfig({
  title: "StuDo",
  description: "База знаний ИСиТ ПетрГУ",
  base: "/Studo/",
  themeConfig: {
    editLink: {
      pattern: "https://github.com/mintyspider/Studo/edit/main/docs/:path",
      text: "Редактировать на GitHub",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mintyspider/Studo",
      },
    ],
    sidebar,
    nav: navigation,
    footer: {
      message: "Студенты ИСиТ",
      copyright: "2025 ©mintyspider",
    },
  },
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // Подключаем плагин KaTeX
      md.use(katex)
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
});
