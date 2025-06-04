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
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Project not found
        </h2>
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
    <article className="min-h-screen pt-32 pb-24 px-6 sm:px-10 md:px-16 bg-background text-lightText">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero image */}
        <div className="mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl shadow-lg w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
          />
        </div>

        {/* Tittel og intro */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-beige mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-darkText/80 italic">
            Focused on usability, simplicity and thoughtful design.
          </p>
        </header>

        {/* Innhold */}
        <section className="prose prose-lg prose-invert max-w-none mb-16">
          <p>{project.description}</p>

          <p>
            This project was designed to be intuitive and efficient, with a strong emphasis on visual hierarchy and accessibility.
          </p>

          <h2>Tech stack</h2>
          <ul>
            <li>React + TypeScript</li>
            <li>TailwindCSS</li>
            <li>Framer Motion</li>
          </ul>

          <h2>Reflection & learning</h2>
          <p>
            Throughout this project, I gained valuable experience with responsive layouts, design systems, and creating meaningful animations using Framer Motion.
          </p>
        </section>

        {/* Knapper */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-10">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-beige rounded-lg font-semibold shadow hover:bg-purple transition text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            View Live
          </motion.a>
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-secondary text-background rounded-lg font-semibold shadow hover:bg-beige transition text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            GitHub Repo
          </motion.a>
        </div>

          <button
            onClick={() => goToSection("projects")}
            className="underline hover:text-darkText transition"
          >
            ← Back to Projects
          </button>
      </motion.div>
    </article>
  );
};
