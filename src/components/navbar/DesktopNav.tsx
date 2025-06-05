import { NavLink } from "./NavLink";
import { useGoToSection } from "../../hooks/useGoToSection";
import type { DesktopNavProps } from "../../types";



export const DesktopNav = ({ activeSection, sectionIds }: DesktopNavProps) => {
  const goToSection = useGoToSection();

  return (
    <nav className="hidden md:flex items-center gap-4 font-medium text-md">
      {sectionIds.map((id) => (
        <NavLink key={id} id={id} active={activeSection} onClick={goToSection} />
      ))}
    </nav>
  );
};