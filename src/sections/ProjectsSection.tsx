import { portfolioProjects } from '../data/portfolioProjects';
import { ProjectCard } from '../components/project/ProjectCard';
import type { ProjectCardProps } from "../types";
import { motion } from 'framer-motion';


export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen justify-center px-4 sm:px-8 flex flex-col items-center py-10 md:py-0"
    >
      <motion.div
        className="text-center mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-beige">
          Projects
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Three selected projects with a focus on usability and reflection.
        </p>
      </motion.div>

      <motion.div
          className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
        {portfolioProjects.map((project: ProjectCardProps) => (
          <div key={project.id} className="flex justify-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
