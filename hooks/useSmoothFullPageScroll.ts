import { useEffect, useRef } from "react";

const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};

export const useSmoothFullPageScroll = (
    sectionIds: string[],
    duration: number = 1500
) => {
    const currentIndex = useRef(0);
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling.current) {
                e.preventDefault();
                return;
            }

            const delta = e.deltaY;
            const direction = delta > 0 ? 1 : -1;
            const currentSection = document.getElementById(sectionIds[currentIndex.current]);
            if (!currentSection) return;

            const scrollTop = window.scrollY;
            const sectionTop = currentSection.offsetTop;
            const sectionHeight = currentSection.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollOffset = scrollTop - sectionTop;

            const canScrollDown = direction > 0 && scrollOffset + windowHeight < sectionHeight - 10;
            const canScrollUp = direction < 0 && scrollOffset > 10;

            if (canScrollDown || canScrollUp) {
                return;
            }

            e.preventDefault();

            const newIndex = currentIndex.current + direction;
            if (newIndex < 0 || newIndex >= sectionIds.length) return;

            const targetSection = document.getElementById(sectionIds[newIndex]);
            if (!targetSection) return;

            isScrolling.current = true;
            currentIndex.current = newIndex;

            smoothScrollTo(targetSection.offsetTop, duration);

            setTimeout(() => {
                isScrolling.current = false;
            }, duration + 100);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [sectionIds, duration]);
};
