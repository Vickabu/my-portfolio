import { FiCode, FiMusic, FiFeather } from "react-icons/fi";
import { FaDog, FaPaintBrush } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import type { AboutCard } from "../types";


export const aboutCards: AboutCard[] = [
  {
    title: "Creative Soul",
    icon: FaPaintBrush,
    content:
      "Outside of coding, you'll find me painting, drawing, sculpting or crocheting. I love exploring new ways to express creativity.",
  },
  {
    title: "Frontend Developer",
    icon: FiCode,
    content:
      "I craft responsive, accessible and functional websites using modern tech like React, TypeScript and Tailwind CSS.",
  },
  {
    title: "Music Lover",
    icon: FiMusic,
    content:
      "Music fuels my workflow and keeps me inspired – from chill beats to chaotic metal, there's always something playing.",
  },
  {
    title: "Animal Advocate",
    icon: FaDog,
    content:
      "I believe animals make life better. Whether it’s dogs, cats, or hedgehogs – they’ve all got a place in my heart.",
  },
  {
    title: "Detail-Oriented",
    icon: BsStars,
    content:
      "I care deeply about the little things – from polished UIs to clean code. It’s the details that make the difference.",
  },
  {
    title: "Always Learning",
    icon: FiFeather, 
    content:
      "Tech is always evolving – and so am I. I'm constantly exploring new frameworks, tools and trends to stay sharp.",
  },
];
