import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TechStackSection } from '../sections/TechStackSection';
// import { AboutSection } from '../sections/AboutSection';
// import { ContactSection } from '../sections/ContactSection';

export const Home = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
        <HeroSection />
        <ProjectsSection />
      <section id="tech">
        <TechStackSection />
      </section>
      {/* <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section> */}
    </>
  );
};