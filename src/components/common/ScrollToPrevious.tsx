import { FaChevronUp } from "react-icons/fa";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { SectionId } from "../../types";

type ScrollToPreviousProps = {
  sectionIds: readonly SectionId[];
};

export const ScrollToPrevious = ({ sectionIds }: ScrollToPreviousProps) => {
  const activeSection = useActiveSection(sectionIds);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    const prevSectionId = sectionIds[currentIndex - 1];
    if (prevSectionId) {
      const prevEl = document.getElementById(prevSectionId);
      if (prevEl) {
        prevEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isMobile) return null;

  return (
    <div className="mt-6 transform -translate-x-1/2 hidden md:block">
      <button
        onClick={handleScroll}
        aria-label="Scroll to previous section"
        className="animate-bounce text-darkText text-2xl hover:text-purple transition-colors"
      >
        <FaChevronUp />
      </button>
    </div>
  );
};
