import { Link } from 'react-router-dom';

type Props = {
  id: string,
  title: string;
  description: string;
  image: string;
};

export const ProjectCard = ({ id, title, description, image }: Props) => (
  <Link to={`/projects/${id}`}
    className="block rounded-md overflow-hidden bg-surface text-lightText hover:shadow-md shadow-surface hover:scale-[1.02] transition-transform duration-300 border border-darkText/10"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover " />
    <div className="p-4">
      <h3 className="text-xl font-bold text-beige mb-2">{title}</h3>
      <p className="text-sm text-darkText">{description}</p>
    </div>
  </Link>
);
