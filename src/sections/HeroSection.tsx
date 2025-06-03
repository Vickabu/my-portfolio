import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImg from "../assets/images/profileimg.png";


export const HeroSection = () => {
  const [typed, setTyped] = useState('');
  const fullText = 'Frontend-utvikler med sans for detaljer, funksjon og form.';
  

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Welcome" className="relative overflow-hidden py-24 min-h-screen flex items-center ">
      <svg className="absolute top-0 -left-32 w-[800px] h-[800px] opacity-20 dark:opacity-30 pointer-events-none" viewBox="0 0 200 200">
        <path fill="var(--color-primary)" d="..." transform="translate(100 100)" />
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="w-48 h-48 md:w-70 md:h-70 rounded-full overflow-hidden shadow-2xl border-4 border-beige dark:border-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={profileImg} alt="Portrett" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-beige mb-4">
            Hei, jeg er Vicktoria Alexandra
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 h-[2.5rem] mb-6">
            {typed}
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-primary text-white dark:bg-purple rounded-lg shadow hover:scale-105 transition-transform"
          >
            🚀 Utforsk prosjektene
          </a>
        </motion.div>

        
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-gray-400 dark:text-gray-600 text-2xl">↓</div>
      </div>
    </section>
  );
};
