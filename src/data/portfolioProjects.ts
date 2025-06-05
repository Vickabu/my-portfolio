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
  lastCommitText: `
    Latest update: Added a constants file and implemented doFetch and useFetch hooks for easier and reusable API handling.
    This setup improves flexibility for future enhancements like authentication and custom headers.
  `,
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
    StealthBid is a semester project where I developed an auction marketplace built with modern React techniques.
    It offers users a dynamic and mobile-responsive platform to browse, search, sort, and bid on unique auction items.
    
    Key features include live auction listings with product details, keyword search, sorting options by time, price, or alphabet, and pagination for easy navigation.
    The platform is optimized for seamless use across devices, ensuring a smooth bidding experience anywhere.

    This project helped me deepen my understanding of React, state management, and creating interactive real-time features.
  `,
  lastCommitText: 'No major improvements yet, but I plan to add more features soon.',
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