import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { motion } from 'framer-motion';
import remarkGfm from 'remark-gfm';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`https://api.github.com/repositories/${id}`, {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json', 
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Kunne ikke hente prosjektdata');
        return res.json();
      })
      .then(repo => {
        setProject(repo);

        fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`)
          .then(res => res.json())
          .then(readmeData => {
            const content = atob(readmeData.content);
            setReadme(content);
          })
          .catch(() => {
            setReadme(null);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4">Laster prosjekt...</div>;
  if (error) return <div className="p-4 text-red-600">Feil: {error}</div>;
  if (!project) return <div className="p-4">Fant ikke prosjektet.</div>;

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-extrabold mb-4">{project.name}</h1>
      <p className="mb-6 text-gray-700">{project.description || 'Ingen beskrivelse tilgjengelig.'}</p>

      {project.topics?.length > 0 && (
        <div className="flex flex-wrap gap-2 my-4">
          {project.topics.map((topic: string) => (
            <span
              key={topic}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"
            >
              #{topic}
            </span>
          ))}
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Detaljer</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>⭐️ <strong>Stjerner:</strong> {project.stargazers_count}</li>
          <li>🍴 <strong>Forks:</strong> {project.forks_count}</li>
          <li>🕒 <strong>Sist oppdatert:</strong> {new Date(project.updated_at).toLocaleDateString('no-NO')}</li>
          <li>🧑‍💻 <strong>Eier:</strong> {project.owner.login}</li>
        </ul>
      </div>

      <div className="flex space-x-4 mb-6">
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            🔗 Se deployet app
          </a>
        )}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          🔍 Se GitHub repo
        </a>
      </div>

      {readme && (
        <motion.div
          className="prose max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-2">📄 README</h2>
          <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => {
              const src = props.src?.startsWith('http')
                ? props.src
                : `https://raw.githubusercontent.com/${project.owner.login}/${project.name}/main/${props.src}`;

      return (
        <img
          {...props}
          src={src}
          alt={props.alt}
          className="rounded-lg my-4 shadow max-w-full"
        />
      );
    }
  }}
>
  {readme}
</ReactMarkdown>
        </motion.div>
      )}
    </motion.div>
  );
};
