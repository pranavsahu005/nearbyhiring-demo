import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const CounterNum = ({ target, suffix }: { target: number; suffix: string }) => {
  const { language } = useLanguage();
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = Math.round(eased * target);
            el.textContent = val.toLocaleString(language === "hi" ? "hi-IN" : "en-IN") + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, language]);

  return (
    <span ref={ref} className="counter-num">
      0{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 500, suffix: "+", label: t("stat_active_jobs") },
    { value: 10000, suffix: "+", label: t("stat_registered_users") },
    { value: 200, suffix: "+", label: t("stat_verified_employers") },
    { value: 5000, suffix: "+", label: t("stat_candidates_placed") },
  ];

  return (
    <section className="relative section-padding overflow-hidden" style={{ background: "var(--gradient-card)" }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #00D4FF 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B2FFF 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center"
              data-reveal
              data-delay={`${i * 100}`}
            >
              <div
                className="text-3xl font-black text-white md:text-4xl"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.04em" }}
              >
                <CounterNum target={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
