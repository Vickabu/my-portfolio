import { NavLink } from "./NavLink";
import { useGoToSection } from "../../hooks/useGoToSection";

type Props = {
  activeSection: string;
  sectionIds: string[];
};

export const DesktopNav = ({ activeSection, sectionIds }: Props) => {
  const goToSection = useGoToSection();

  return (
    <nav className="hidden md:flex items-center gap-4 font-medium text-md">
      {sectionIds.map((id) => (
        <NavLink key={id} id={id} active={activeSection} onClick={goToSection} />
      ))}
    </nav>
  );
};