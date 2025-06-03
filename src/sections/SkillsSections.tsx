// components/SkillsSection.tsx
import { SiReact, SiTypescript, SiTailwindcss, SiVite, SiGithub } from 'react-icons/si';

export const SkillsSection = () => {
  const skills = [
    { icon: <SiReact size={40} />, name: 'React' },
    { icon: <SiTypescript size={40} />, name: 'TypeScript' },
    { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
    { icon: <SiVite size={40} />, name: 'Vite' },
    { icon: <SiGithub size={40} />, name: 'GitHub' },
  ];

  return (
    <section id="skills" className="py-20 bg-beige dark:bg-primary transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary dark:text-beige">Mine Skills</h2>
        <p className="mb-12 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Her er noen av teknologiene og verktøyene jeg mestrer og bruker i mine prosjekter.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 justify-center items-center">
          {skills.map(({ icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 text-primary dark:text-beige hover:text-secondary dark:hover:text-secondary transition cursor-default"
              title={name}
            >
              {icon}
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
