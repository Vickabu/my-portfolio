import { Link } from 'react-router-dom';
import type { ProjectCardProps } from "../../types";

export const ProjectCard = ({
  id,
  title,
  description,
  image,
}: ProjectCardProps) => (
  <Link
    to={`/projects/${id}`}
    className=" group block rounded overflow-hidden shadow-surface text-lightText border border-darkText/10 shadow-md  hover:shadow-purple transition-shadow duration-300 transform hover:-translate-y-2 mx-auto"
    style={{ height: '24rem' }}
  >
    <div className="relative overflow-hidden" style={{ height: '14rem' }}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 "></div>
    </div>
    <div className="p-5" style={{ height: '10rem' }}>
      <h3 className="text-xl font-semibold text-beige mb-2">{title}</h3>
      <p className="text-sm text-darkText leading-relaxed overflow-hidden ">
        {description}
      </p>
    </div>
  </Link>
);
