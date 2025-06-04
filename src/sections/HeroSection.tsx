import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import profileImg from "../assets/images/profileimg.png";
import { useIsMobile } from "../hooks/useIsMobile";


export const HeroSection = () => {
  const [typed, setTyped] = useState('');
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement | null>(null);
  const fullText = 'Frontend developer focused on detail, functionality and clean design.';

useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      setTyped((prev) => prev + (fullText[i] ?? ''));
      i++;
    } else {
      clearInterval(interval);
    }
  }, 40);
  return () => clearInterval(interval);
}, []);


  return (
    <section
      ref={heroRef}
      id="Welcome"
      className="relative snap-start min-h-screen flex flex-col items-center justify-center px-6 bg-background text-lightText"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        <motion.div
          className="w-40 h-40 lg:w-80 lg:h-80 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg shadow-purple/60 shrink-0 bg-gradient-to-r from-purple to-background"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={profileImg}
            alt="Portrait of Vicktoria"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-lightText mb-4 leading-tight">
            Hi, I’m Vicktoria Alexandra
          </h1>
          <p className="text-lg md:text-xl text-lightText/80 min-h-[2.5rem] mb-6">
            {typed}
          </p>

       
        </motion.div>
      </div>

      {!isMobile && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce text-darkText text-4xl">↓</div>
        </div>
      )}
    </section>
  );
};
