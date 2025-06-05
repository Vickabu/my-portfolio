import { useLocation } from "react-router-dom";
import type { NavLinkProps } from "../../types";

export const NavLink = ({ id, active, onClick, className = "" }: NavLinkProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isActive = isHome && active === id;

  return (
    <button
      onClick={() => onClick(id)}
      className={`relative text-lightText px-2 py-1 transition-colors duration-300
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transition-all after:duration-300
        ${isActive
          ? "text-secondary after:bg-secondary"
          : "hover:text-secondary after:bg-transparent"}
        ${className}`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </button>
  );
};
