import { FaChevronDown } from "react-icons/fa";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { SectionId } from "../../types";


type ScrollToNextProps = {
  sectionIds: readonly SectionId[];
};

export const ScrollToNext = ({ sectionIds }: ScrollToNextProps) => {
  const activeSection = useActiveSection(sectionIds);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const currentIndex = sectionIds.indexOf(activeSection);
    const nextSectionId = sectionIds[currentIndex + 1];
    if (nextSectionId) {
      const nextEl = document.getElementById(nextSectionId);
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isMobile) return null;

  return (
    <div className="mt-6 transform -translate-x-1/2 hidden md:block">
      <button
        onClick={handleScroll}
        aria-label="Scroll to next section"
        className="animate-bounce text-darkText text-2xl hover:text-purple transition-colors"
      >
        <FaChevronDown />
      </button>
    </div>
  );
};
