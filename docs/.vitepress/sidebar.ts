import { DefaultTheme } from "vitepress";
import { getLectures } from "../../utils";

export const sidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      text: "Вступление",
      items: [
        {
          text: "О проекте",
          link: "/about",
        },
        {
          text: "Доступные дисциплины",
          link: "/introduction",
        },
      ],
    },
    {
      text: "Гайды",
      items: [
        {
          text: "Как добавить свою лекцию",
          link: "/guides/lecture.md",
        },
      ],
    },
  ],
  "/disciplines/stat": [
    {
      text: "Введение",
      items: [
        {
          text: "Описание дисциплины",
          link: "/disciplines/stat/",
        },
        {
          text: "Слова благодарности",
          link: "/disciplines/stat/contributors",
        },
      ],
    },
    {
      text: "Лекции",
      items: getLectures("./docs/disciplines/stat/lectures"),
    },
  ],
  "/disciplines/prob": [
    {
      text: "Введение",
      items: [
        {
          text: "Описание дисциплины",
          link: "/disciplines/prob/",
        },
        {
          text: "Слова благодарности",
          link: "/disciplines/prob/contributors",
        },
      ],
    },
    {
      text: "Лекции",
      items: getLectures("./docs/disciplines/prob/lectures"),
    },
  ],
};
