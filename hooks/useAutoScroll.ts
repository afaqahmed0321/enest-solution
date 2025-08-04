import { useEffect, useRef } from "react";

interface UseAutoScrollProps {
  currentSectionId: string;
  previousSectionId?: string;
  nextSectionId?: string;
}

export const useAutoScroll = ({
  currentSectionId,
  previousSectionId,
  nextSectionId,
}: UseAutoScrollProps) => {
  const triggeredRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = document.getElementById(currentSectionId);
      const previousSection = previousSectionId
        ? document.getElementById(previousSectionId)
        : null;
      const nextSection = nextSectionId
        ? document.getElementById(nextSectionId)
        : null;

      if (!currentSection) return;

      const currentRect = currentSection.getBoundingClientRect();
      const previousRect = previousSection?.getBoundingClientRect();
      const nextRect = nextSection?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";

      lastScrollY.current = currentScrollY;

      if (
        scrollDirection === "down" &&
        nextSection &&
        currentRect.bottom <= viewportHeight * 0.9 &&
        !triggeredRef.current
      ) {
        triggeredRef.current = true;
        nextSection.scrollIntoView({ behavior: "smooth" });
      }

      if (
        scrollDirection === "up" &&
        previousSection &&
        currentRect.top > viewportHeight * 0.1 &&
        currentRect.top < viewportHeight &&
        !triggeredRef.current
      ) {
        triggeredRef.current = true;
        previousSection.scrollIntoView({ behavior: "smooth" });
      }

      if (
        scrollDirection === "up" &&
        nextSection &&
        nextRect &&
        nextRect.top > viewportHeight * 0.1 &&
        nextRect.top < viewportHeight &&
        !triggeredRef.current
      ) {
        triggeredRef.current = true;
        currentSection.scrollIntoView({ behavior: "smooth" });
      }

      const resetTrigger = () => {
        if (
          currentRect.top >= -50 &&
          currentRect.bottom <= viewportHeight + 50
        ) {
          triggeredRef.current = false;
        }
        if (
          previousRect &&
          previousRect.top >= -50 &&
          previousRect.bottom <= viewportHeight + 50
        ) {
          triggeredRef.current = false;
        }
        if (
          nextRect &&
          nextRect.top >= -50 &&
          nextRect.bottom <= viewportHeight + 50
        ) {
          triggeredRef.current = false;
        }
      };

      resetTrigger();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSectionId, previousSectionId, nextSectionId]);

  const scrollToNext = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    if (previousSectionId) {
      const previousSection = document.getElementById(previousSectionId);
      if (previousSection) previousSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    scrollToNext,
    scrollToPrevious,
  };
};