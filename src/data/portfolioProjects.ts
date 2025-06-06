import lazySalesLogo from '../assets/projectimages/LazySales.JPG';
import lazySalesDisplay from '../assets/projectimages/LazySales-screen.JPG';
import stealthBidLogo from '../assets/projectimages/BrightLog.png';
import stealthBidDisplay from '../assets/projectimages/StealthBid-screen.JPG';
import holidazeLogo from '../assets/projectimages/HOLI-DAZE.JPG';
import holidazeDisplay from '../assets/projectimages/Holidaze.JPG';
import type { ProjectCardProps } from "../types";

export const portfolioProjects: ProjectCardProps[] = [
  {
  id: 'js-frameworks',
  title: 'Lazy Sales',
  teaserDescription: 'Group assignment: A React-based eCommerce platform focused on effortless and stress-free shopping.',
  mainImage: { src: lazySalesLogo, alt: 'LazySales Logo' },
  detailImage: { src: lazySalesDisplay, alt: 'Screenshot of LazySales product page' },
  mainDescription: `
    Lazy Sales was a group project as part of a school course, where our goal was to build a React-based eCommerce platform emphasizing user-friendliness and simplicity.
    We aimed to create a shopping experience as relaxed as a Sunday morning — without complicated processes or stress.

    The app features:
    - A clear, searchable product list on the homepage
    - Product detail pages with essential information and quick add-to-cart functionality
    - A simple and efficient checkout process
    - A success page with a randomly generated order number for fun
    - A contact form with validation for easy inquiries

    Technologies used include React, React Router, and styled-components, alongside API integration to fetch real-time product data.

    This project gave us valuable experience collaborating as a team, working with React, and handling live data.
  `,
  lastCommitText: `Refactored the project to use a centralized API constants file and custom useFetch hook, improving maintainability and aligning with feedback on best practices for environment flexibility and cleaner code.`,
  liveUrl: 'https://lazysales.netlify.app/',
  repoUrl: 'https://github.com/Vickabu/ca-js-frameworks',
  },
  {
  id: 'semester',
  title: 'StealthBid',
  teaserDescription: 'Semester project: An exciting platform for online auctions of rare and valuable items.',
  mainImage: { src: stealthBidLogo, alt: 'StealthBid Logo' },
  detailImage: { src: stealthBidDisplay, alt: 'Screenshot of StealthBid auction page' },
  mainDescription: `
    StealthBid is a semester project where I built a responsive and interactive auction platform using modern JavaScript, Vite, and Tailwind CSS.
    The application allows users to browse, search, sort, and place bids on unique auction items in real time.

    Key features include live auction listings with detailed item descriptions, keyword-based search, sorting options by time, price, or name, and pagination for smooth navigation.
    The interface is fully responsive and optimized for both mobile and desktop devices.

    This project gave me valuable hands-on experience with vanilla JavaScript, DOM manipulation, real-time interactivity, and modern frontend workflows—entirely without relying on frontend frameworks like React.
  `,
  lastCommitText: 'Improved the bidding feature with input validation, user-friendly error handling, and a loading indicator for better UX. Removed developer logs for cleaner production code.',
  techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
  liveUrl: 'https://stealth-bid.netlify.app/',
  repoUrl: 'https://github.com/Vickabu/StealthBid',
  },
  {
  id: 'exam',
  title: 'Holidaze',
  teaserDescription: 'Final exam project: A modern React app for discovering, managing, and booking venues.',
  mainImage: { src: holidazeLogo, alt: 'Holidaze Logo' },
  detailImage: { src: holidazeDisplay, alt: 'Screenshot of Holidaze venue booking page' },
  mainDescription: `
    Holidaze is my final exam project where I built a comprehensive platform for both guests and venue hosts.
    Guests can browse and book venues with rich image galleries and detailed information, while hosts can manage their listings through a dedicated dashboard with CRUD functionality.
    
    The app features a responsive, user-friendly design built with React and Tailwind CSS, incorporating modals, pagination, form validation, and custom hooks for API interaction.

    This project was submitted as part of my course final, and no further changes have been made pending feedback.
  `,
  lastCommitText: 'Final submission commit — awaiting feedback, no further updates made yet.',
  techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Custom Hooks'],
  liveUrl: 'https://holidaze-mode.netlify.app/',
  repoUrl: 'https://github.com/Vickabu/holidaze-pe2',
}
];





// export const portfolioProjects: ProjectCardProps[] = [
//   {
//     id: 'js-frameworks',
//     title: 'Lazy Sales',
//     description: 'Course Assignment: Lazy Sales is a React-based eCommerce platform designed for those who love to shop with zero effort.',
//     image: lazySales,
//     liveUrl: 'https://lazysales.netlify.app/',
//     repoUrl: 'https://github.com/Vickabu/ca-js-frameworks'
//   },
//   {
//     id: 'semester',
//     title: 'StealthBid',
//     description: 'Semester Project: StealthBid offers an exciting way to participate in online auctions for rare finds and valuable items.',
//     image: stealthBid,
//     liveUrl: 'https://stealth-bid.netlify.app/',
//     repoUrl: 'https://github.com/Vickabu/StealthBid'
//   },
//   {
//     id: 'exam',
//     title: 'Holidaze',
//     description: 'Exam project second year: A modern React application for discovering, managing, and booking venues. ',
//     image: holidaze,
//     liveUrl: 'https://holidaze-mode.netlify.app/',
//     repoUrl: 'https://github.com/Vickabu/holidaze-pe2'
//   }
// ];