import { motion } from 'framer-motion';

export const ProjectLinks = ({ liveUrl, repoUrl }: { liveUrl?: string; repoUrl?: string }) => (
  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-16">
    {liveUrl && (
      <motion.a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto text-center px-8 py-3 bg-primary text-lightText rounded-sm font-semibold shadow hover:bg-primary/70 transition"
      >
        View Live
      </motion.a>
    )}
    {repoUrl && (
      <motion.a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto text-center px-8 py-3 bg-purple text-lightText rounded-sm font-semibold shadow hover:bg-purple/70 transition"
      >
        GitHub Repo
      </motion.a>
    )}
  </div>
);