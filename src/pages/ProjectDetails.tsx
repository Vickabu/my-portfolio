import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';
import { motion } from 'framer-motion';
import { useGoToSection } from '../hooks/useGoToSection';
import { ProjectHeader } from '../components/project/ProjectHeader';
import { ProjectDescription } from '../components/project/ProjectDescription';
import { ProjectLinks } from '../components/project/ProjectLinks';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioProjects.find(p => p.id === id);
  const goToSection = useGoToSection();

  if (!project) {
    return (
      <motion.div
        className="max-w-4xl mx-auto px-8 py-16 mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">Project not found</h2>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800 transition text-lg"
        >
          Go back to homepage
        </Link>
      </motion.div>
    );
  }

  return (
    <article className="min-h-screen pt-[96px] pb-24 px-6 sm:px-10 md:px-16 text-lightText">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.detailImage && (
          <div className="mb-12">
            <img
              src={project.detailImage.src}
              alt={project.detailImage.alt}
              className="rounded-sm shadow-lg w-full h-[300px] sm:h-[420px] md:h-[450px] object-cover"
            />
          </div>
        )}

        <ProjectHeader title={project.title} teaser={project.teaserDescription || ''} />
        <ProjectDescription
          main={project.mainDescription}
          commit={project.lastCommitText}
        />
        <ProjectLinks liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
        <button
          onClick={() => goToSection('projects')}
          className="text-md text-lightText underline hover:text-secondary transition"
        >
          ← Back to Projects
        </button>
      </motion.div>
    </article>
  );
};