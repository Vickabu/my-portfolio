import { useEffect, useState } from 'react';
import { ProjectCard } from '../components/project/ProjectCard';
import { motion } from 'framer-motion';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Vickabu/repos')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: any) => repo.homepage);
        setProjects(filtered);
      });
  }, []);

  return (
    <motion.section
      className="py-16 px-6 bg-background min-h-screen items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="projects"
    >
      <div className="max-w-5xl mx-auto text-center mb-12 items-center">
        <h2 className="text-4xl font-bold text-primary dark:text-beige">Prosjekter</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Noen av tingene jeg har laget</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard
          key={project.id}
          id={project.id}
          title={project.name}
          description={project.description}
          homepage={project.homepage}
          repoUrl={project.html_url}
        />
        ))}
      </div>
    </motion.section>
  );
};
