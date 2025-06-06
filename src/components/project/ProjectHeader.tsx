import { ShareActions } from './ShareActions';

export const ProjectHeader = ({ title, teaser }: { title: string; teaser: string }) => (
  <header className="mb-2">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-beige leading-tight">
        {title}
      </h1>
      <ShareActions title={title} description={teaser} />
    </div>
    <p className="text-lg text-darkText/80 italic">{teaser}</p>
  </header>
);