import { useParams, Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary dark:text-beige">Fant ikke prosjektet</h2>
        <Link to="/" className="text-blue-600 underline hover:text-blue-800 transition">
          Gå tilbake til forsiden
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 mt-40 bg-surface rounded-2xl shadow-xl text-lightText">
      <h1 className="text-5xl font-extrabold mb-6 text-beige">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 md:h-96 object-cover rounded-lg mb-8 shadow-md"
      />
      <p className="mb-8 leading-relaxed text-darkText">{project.description}</p>

      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-12">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-beige rounded-lg font-semibold shadow hover:bg-purple transition"
        >
          Se live
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-secondary text-primary rounded-lg font-semibold shadow hover:bg-beige transition"
        >
          GitHub Repo
        </a>
      </div>

      <section className="bg-background p-6 rounded-lg border border-darkText/20 shadow-inner">
        <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-beige">Refleksjoner og forbedringer</h2>
        <p className="text-darkText leading-relaxed">
          Her kan du beskrive hva du lærte, utfordringer du møtte, og hva du har forbedret etter tilbakemeldinger.
        </p>
      </section>
    </div>
  );
};
