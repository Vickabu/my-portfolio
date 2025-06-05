import { useCallback, useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { sectionIds } from "../../types";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(sectionIds);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setMenuOpen(false);
        setAnimateOut(false);
      }, 400);
    } else {
      setMenuOpen(true);
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        toggleMenu();
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, toggleMenu]);

  return (
    <>
      <nav>
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between backdrop-blur-3xl">
          <Logo />
          <DesktopNav activeSection={activeSection} sectionIds={sectionIds} />
          <button onClick={toggleMenu} className="md:hidden text-lightText">
            <RxHamburgerMenu size={28} />
          </button>
        </div>
      </nav>

      {(menuOpen || animateOut) && (
        <MobileMenu
          activeSection={activeSection}
          sectionIds={sectionIds}
          closeMenu={toggleMenu}
          animateOut={animateOut}
          menuRef={menuRef}
        />
      )}
    </>
  );
};
