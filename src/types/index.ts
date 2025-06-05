// Navbar types
export type NavLinkProps = {
  id: string;
  active: string;
  onClick: (id: string) => void;
  className?: string;
};

export type DesktopNavProps = {
  activeSection: SectionId;
  sectionIds: readonly SectionId[];
};

export type MobileMenuProps = {
  activeSection: SectionId;
  sectionIds: readonly SectionId[];
  closeMenu: () => void;
  animateOut: boolean;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

// project images
export type ProjectImage = {
  src: string;
  alt: string;
};

// Project card
export type ProjectCardProps = {
  id: string;
  title: string;
  teaserDescription?: string;
  mainImage: ProjectImage;
  detailImage?: ProjectImage;
  groupImages?: ProjectImage[];
  mainDescription?: string;
  lastCommitText?: string;
  techUsed?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// About card
import type { IconType } from "react-icons";

export type AboutCard = {
  title: string;
  icon: IconType;
  content: string;
};

//Tech stack
export type TechIconKey =
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'tailwind'
  | 'bootstrap'
  | 'css'
  | 'vite'
  | 'git'
  | 'github'
  | 'vscode'
  | 'figma'
  | 'database'
  | 'robot'
  | 'jira'
  | 'trello'
  | 'eslint'
  | 'prettier'
  | 'jest'
  | 'cypress'
  | 'canva';

export type TechItem = {
  name: string;
  icon: TechIconKey;
  url: string;
};


// section id
export const sectionIds = [
  "welcome",
  "about",
  "projects",
  "skills",
  "contact",
] as const;

export type SectionId = typeof sectionIds[number];