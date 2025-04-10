import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    image: "/images/expense-tracker.png"
  }

];

export const BtnList: BtnListType[] = [
  {
    label: "Blog",
    link: "https://medium.com/@amitamrutiya2210",
    icon: "blog",
    newTab: true,
  },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Services", link: "/service", icon: "service", newTab: false },
  { label: "Reels", link: "/reels", icon: "reels", newTab: false },


  {
    label: "Github",
    link: "https://www.github.com/amitamrutiya",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/amitamrutiya",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/AmitAmrutiya2",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];