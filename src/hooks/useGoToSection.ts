import { useNavigate, useLocation } from "react-router-dom";

export const useGoToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return goToSection;
};