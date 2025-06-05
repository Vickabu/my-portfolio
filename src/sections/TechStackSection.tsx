import { techStack } from '../data/techStack';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap,
  SiCss3, SiVite, SiGit, SiGithub,
  SiFigma, SiMysql
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';

const iconMap: Record<string, IconType> = {
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
  sql: SiMysql,
  database: SiMysql,
  robot: FaRobot,
};

export const TechStackSection = () => {
  return (
    <section
      id="tech"
      className="snap-start min-h-screen pt-32 px-4 sm:px-8 flex flex-col items-center text-lightText"
    >
      <motion.div
        className="text-center mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-beige">
          Tools & Skills
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
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
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition"
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
