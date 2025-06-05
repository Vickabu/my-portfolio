import { BsX } from "react-icons/bs";
import { NavLink } from "./NavLink";
import { useGoToSection } from "../../hooks/useGoToSection";
import type { MobileMenuProps } from "../../types";


export const MobileMenu = ({
  activeSection,
  sectionIds,
  closeMenu,
  animateOut,
  menuRef,
}: MobileMenuProps) => {
  const goToSection = useGoToSection();

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-72 bg-background shadow-xl p-6 
       flex flex-col items-end z-50
      ${animateOut ? "animate-slide-out-bounce" : "animate-slide-in"}`}
    >
      <button onClick={closeMenu} className="text-lightText text-4xl mb-10">
        <BsX />
      </button>

      <div className="flex flex-col w-full items-end">
        {sectionIds.map((id) => (
          <NavLink
            key={id}
            id={id}
            active={activeSection}
            onClick={(clickedId) => {
              goToSection(clickedId);
              closeMenu();
            }}
            className="mb-6 text-xl font-semibold"
          />
        ))}
      </div>
    </nav>
  );
};
