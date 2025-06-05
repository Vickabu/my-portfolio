import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';
import { motion } from 'framer-motion';
import { useGoToSection } from '../hooks/useGoToSection';

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

        <header className="mb-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-beige mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-darkText/80 italic">
            {project.teaserDescription || "A thoughtfully designed modern web app."}
          </p>
        </header>


        <section className="prose prose-lg mb-12 whitespace-pre-line leading-relaxed">
          <p>{project.mainDescription}</p>
        </section>


        {project.lastCommitText && (
          <div className=" rounded-sm p-6 mb-12 text-lightText  shadow-md shadow-purple">
            <h2 className="text-2xl font-semibold mb-2">Last Commit</h2>
            <p className="whitespace-pre-line leading-relaxed">
              {project.lastCommitText}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-16">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center px-8 py-3 bg-primary text-lightText rounded-sm font-semibold shadow hover:bg-primary/70 transition"
            >
              View Live
            </motion.a>
          )}
          {project.repoUrl && (
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center px-8 py-3 bg-purple text-lightText rounded-sm font-semibold shadow hover:bg-purple/70 transition"
            >
              GitHub Repo
            </motion.a>
          )}
        </div>

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
