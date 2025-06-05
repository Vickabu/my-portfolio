import type { TechIconKey } from "../types";
import { techStack } from '../data/techStack';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap,
  SiCss3, SiVite, SiGit, SiGithub,
  SiFigma, SiMysql, SiJira, 
  SiTrello, 
  SiEslint, 
  SiPrettier, 
  SiJest, 
  SiCypress, 
  SiCanva, 
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';




const iconMap: Record<TechIconKey, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  css: SiCss3,
  vite: SiVite,
  git: SiGit,
  github: SiGithub,
  vscode: BiLogoVisualStudio,
  figma: SiFigma,
  database: SiMysql,
  robot: FaRobot,
  jira: SiJira,
  trello: SiTrello,
  eslint: SiEslint,
  prettier: SiPrettier,
  jest: SiJest,
  cypress: SiCypress,
  canva: SiCanva,
};

export const TechStackSection = () => {
  return (
    <section
      id="skills"
      className="snap-start min-h-screen py-10 md:py-0 px-4 sm:px-8 flex flex-col items-center text-lightText justify-center"
    >
      <motion.div
        className="text-center mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-beige">
          Tools & Skills
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Here are the technologies and tools I work with to design, build and deliver modern web experiences.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        {techStack.map(({ name, icon, url }) => {
          const Icon = iconMap[icon];
          if (!Icon) return null; 

          return (
            <a
              key={`${name}-${icon}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-md shadow-surface border border-darkText/10 shadow-md  hover:shadow-purple transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <Icon className="text-3xl md:text-4xl text-purple" />
              <span className="text-sm text-lightText">{name}</span>
            </a>
          );
        })}
      </motion.div>
    </section>
  );
};
