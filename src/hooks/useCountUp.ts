import { useEffect, useRef, useState } from "react";

export function useCountUp(end: number, suffix = "", duration = 2000) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.floor(eased * end);
            setDisplay(val.toLocaleString("en-IN"));
            if (t < 1) requestAnimationFrame(step);
            else setDisplay(end.toLocaleString("en-IN") + suffix);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, duration]);

  return { ref, display };
}
