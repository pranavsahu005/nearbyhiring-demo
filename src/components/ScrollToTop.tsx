import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    // With Lenis enabled, native `window.scrollTo` can be ignored; prefer Lenis when present.
    const target = hash ? hash : 0;
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(target as any, { immediate: true, force: true });
      return;
    }

    if (typeof target === "string" && target.startsWith("#")) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
