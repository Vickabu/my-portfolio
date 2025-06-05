import { FaLinkedin, FaGithub } from "react-icons/fa";


export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="snap-start h-screen justify-center px-4 sm:px-8 flex flex-col items-center text-lightText py-8"
    >
      <div className="text-center max-w-2xl py-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-purple mb-4 p-6 border-b border-secondary">
          Get in Touch
        </h2>
        <p className="text-lg text-lightText">
          I’m currently finishing my studies and working part-time, so I’m not available for freelance or collaborative projects right now.
        </p>
        <p className="text-lg text-lightText p-8 border-b mb-8 border-secondary">But feel free to reach out if it’s future-related or just to connect!</p>

        <div className="flex gap-6 justify-center">
          <a
            href="www.linkedin.com/in/vicktoria-alexandra-bure-a98b1815a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightText hover:text-purple transition text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Vickabu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightText hover:text-purple transition text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      {/* <a
          href="email@will-come-here-when-ready"
          className="mt-8 inline-block bg-secondary text-background px-6 py-3 rounded-md shadow-lg hover:bg-darkPurple transition"
        >
          Send me an email
        </a> */}
    </section>
  );
};
