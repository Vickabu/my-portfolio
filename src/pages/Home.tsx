import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { TechStackSection } from '../components/TechStackSection';
// import { AboutSection } from '../components/AboutSection';
// import { ContactSection } from '../components/ContactSection';

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
      {/* <section id="tech">
        <TechStackSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section> */}
    </>
  );
};