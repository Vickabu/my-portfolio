import logo from "../../assets/images/Logo-dark.png";
import { useGoToSection } from "../../hooks/useGoToSection";

export const Logo = () => {
  const goToSection = useGoToSection();

  const handleClick = () => {
    goToSection("hero");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer flex items-center gap-2">
      <img src={logo} alt="logo-dark" className="h-16" />
    </div>
  );
};