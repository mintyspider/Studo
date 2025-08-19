import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { navigation } from "./navigation";
import mathjax3 from 'markdown-it-mathjax3';

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
      md.use(mathjax3);
    }
  },
  head: [
    ['script', { 
      src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' 
    }],
    ['script', {
      id: 'MathJax-script',
      src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
    }]
  ]
});
