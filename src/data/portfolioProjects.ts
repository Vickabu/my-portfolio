import lazySales from '../assets/projectimages/LazySales.JPG';
import stealthBid from '../assets/projectimages/BrightLog.png';
import holidaze from '../assets/projectimages/HOLI-DAZE.JPG';
import type { ProjectCardProps } from "../types";

export const portfolioProjects: ProjectCardProps[] = [
  {
    id: 'js-frameworks',
    title: 'Lazy Sales',
    description: 'Course Assignment: Lazy Sales is a React-based eCommerce platform designed for those who love to shop with zero effort.',
    image: lazySales,
    liveUrl: 'https://lazysales.netlify.app/',
    repoUrl: 'https://github.com/Vickabu/ca-js-frameworks'
  },
  {
    id: 'semester',
    title: 'StealthBid',
    description: 'Semester Project: StealthBid offers an exciting way to participate in online auctions for rare finds and valuable items.',
    image: stealthBid,
    liveUrl: 'https://stealth-bid.netlify.app/',
    repoUrl: 'https://github.com/Vickabu/StealthBid'
  },
  {
    id: 'exam',
    title: 'Holidaze',
    description: 'Exam project second year: A modern React application for discovering, managing, and booking venues.',
    image: holidaze,
    liveUrl: 'https://holidaze-mode.netlify.app/',
    repoUrl: 'https://github.com/Vickabu/holidaze-pe2'
  }
];