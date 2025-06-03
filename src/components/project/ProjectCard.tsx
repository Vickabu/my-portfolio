import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  homepage?: string;
  repoUrl: string;
}

export const ProjectCard = ({ id, title, description, homepage, repoUrl }: ProjectCardProps) => (
  <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-xl transition cursor-pointer group">
    <Link to={`/project/${id}`}>
      <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-beige group-hover:underline">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description || 'Ingen beskrivelse tilgjengelig.'}
      </p>
    </Link>

    <div className="flex gap-4">
      {homepage && (
        <a
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-opacity-90 transition"
          onClick={e => e.stopPropagation()}
        >
          🔗 Live
        </a>
      )}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        onClick={e => e.stopPropagation()}
      >
        💻 GitHub
      </a>
    </div>
  </div>
);
