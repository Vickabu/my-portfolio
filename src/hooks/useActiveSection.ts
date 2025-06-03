import { useEffect, useState } from "react";

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(ids[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
};
