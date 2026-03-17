import { useEffect } from "react";

/**
 * Lightweight Intersection Observer hook for scroll reveal animations.
 * Adds "revealed" class to elements with [data-reveal] attribute.
 */
const useScrollReveal = (options?: IntersectionObserverInit) => {
  useEffect(() => {
    const defaults: IntersectionObserverInit = {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px",
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, defaults);

    const targets = document.querySelectorAll(
      "[data-reveal], .highlight-underline, .highlight-marker, .step-connector"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options]);
};

export default useScrollReveal;
