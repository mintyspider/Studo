import { DefaultTheme } from "vitepress";

export const navigation: DefaultTheme.NavItem[] = [
  {
    text: "Все дисциплины",
    activeMatch: "^/disciplines/",
    items: [
      {
        text: "Теория вероятностей",
        link: "/disciplines/prob/",
      },
      {
        text: "Математическая статистика",
        link: "/disciplines/stat/",
      },
      {
        text: "Алгоритмы и структуры данных",
        link: "/disciplines/ads/",
      },
    ],
  },
  {
    text: "О проекте",
    link: "/about",
  },
  {
    text: "Гайды",
    link: "/guides/",
  },
];
