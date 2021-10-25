import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Brayden W",
  title: "Front-End Developer/Designer",
  social: {
    github: "https://github.com/BraydenTW",
    dribbble: "https://github.com/BraydenTW",
    twitter: "https://github.com/BraydenTW",
    email: "someone@example.com",
  },
  about: {
    title: "My Background",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentW/braydentw"
    }
  ]
};
export default data;
