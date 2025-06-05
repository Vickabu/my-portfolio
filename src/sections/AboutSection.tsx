import { aboutCards } from "../data/aboutCards";
import { motion } from "framer-motion";
import type { AboutCard } from "../types";


export const AboutSection = () => {
  return (
    <section
      id="about"
      className="snap-start min-h-screen px-4 sm:px-8 text-lightText flex flex-col items-center justify-center py-10 md:py-0"
    >
      <motion.div
        className="text-center mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-beige">
          So, who am I?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          A frontend developer with a creative core and passion for beautiful, usable web experiences.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        {aboutCards.map(({ title, icon: Icon, content }: AboutCard) => (
          <motion.div
            key={title}
            className="p-6 rounded-md shadow-lg hover:shadow-xl bg-primary/60 transition text-left"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex mb-4 border-b pb-4">
              <Icon className="text-3xl text-secondary mr-4" />
              <h3 className="text-xl font-bold text-secondary">{title}</h3>
            </div>
            <p className="text-lightText text-sm leading-relaxed">
              {content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
