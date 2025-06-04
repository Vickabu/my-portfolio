import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const ProjectCard = ({ id, title, description, image }: Props) => (
    <Link
    to={`/projects/${id}`}
    className=" group block rounded-md overflow-hidden bg-surface text-lightText border border-darkText/10 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 mx-auto"
    style={{ height: '24rem' }} 
  >
    <div className="relative overflow-hidden" style={{ height: '14rem' }}> 
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
    </div>
    <div className="p-5" style={{ height: '10rem' }}> 
      <h3 className="text-xl font-semibold text-beige mb-2">{title}</h3>
      <p className="text-sm text-darkText leading-relaxed overflow-hidden ">
        {description}
      </p>
    </div>
  </Link>
);