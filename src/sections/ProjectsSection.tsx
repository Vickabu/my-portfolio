import { portfolioProjects } from '../data/portfolioProjects';
import { ProjectCard } from '../components/project/ProjectCard';

export const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-background min-h-screen max-w-5xl mx-auto" id="projects">
      <div className="mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary dark:text-beige">Prosjekter</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Her er tre utvalgte prosjekter med refleksjoner.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};
