/**
 * GSAP helpers for scroll-based animations.
 * GSAP is loaded via CDN in index.html (deferred). This file provides
 * typed wrappers that safely access window.gsap after DOM ready.
 */

// Type-safe reference to the global GSAP instance loaded via CDN
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gsap: any;

let gsapReady = false;

export const initGSAP = (): Promise<void> => {
  return new Promise((resolve) => {
    if (gsapReady) { resolve(); return; }
    const check = () => {
      if (typeof gsap !== "undefined" && typeof gsap.registerPlugin === "function") {
        try {
          // ScrollTrigger is also loaded via CDN
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const ST = (window as any).ScrollTrigger;
          if (ST) gsap.registerPlugin(ST);
        } catch { /* noop */ }
        gsapReady = true;
        resolve();
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
};

/** Fade + slide up text elements in a container */
export const gsapFadeIn = (selector: string, stagger = 0.12) => {
  initGSAP().then(() => {
    try {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: selector, start: "top 85%", once: true },
        }
      );
    } catch { /* noop */ }
  });
};

/** Stacked cards scroll animation */
export const stackedCardsTrigger = (container: string) => {
  initGSAP().then(() => {
    try {
      const cards = document.querySelectorAll(`${container} .stacked-card`);
      cards.forEach((card, i) => {
        gsap.set(card, { y: i * 12, rotateX: i * 2, scale: 1 - i * 0.04 });
        gsap.to(card, {
          y: 0, rotateX: 0, scale: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: {
            trigger: container, start: `top ${80 - i * 5}%`, once: true,
          },
        });
      });
    } catch { /* noop */ }
  });
};

/** Animated counter (count-up) triggered on scroll */
export const animateCounter = (el: HTMLElement, target: number, duration = 1.8) => {
  initGSAP().then(() => {
    try {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target, duration, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString("en-IN");
        },
      });
    } catch { /* noop */ }
  });
};
