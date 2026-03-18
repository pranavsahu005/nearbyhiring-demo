import { useEffect, useRef, useState } from "react";
import { Search, MapPin, ChevronDown, Briefcase, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slides = [
    {
      img: "/assets/img/hero-carousel/hero-carousel-1.jpg",
      heading: t("hero_slide_1_heading"),
      sub: t("hero_slide_1_sub"),
    },
    {
      img: "/assets/img/hero-carousel/hero-carousel-2.jpg",
      heading: t("hero_slide_2_heading"),
      sub: t("hero_slide_2_sub"),
    },
    {
      img: "/assets/img/hero-carousel/hero-carousel-3.jpg",
      heading: t("hero_slide_3_heading"),
      sub: t("hero_slide_3_sub"),
    },
    {
      img: "/assets/img/hero-carousel/hero-carousel-4.png",
      heading: t("hero_slide_4_heading"),
      sub: t("hero_slide_4_sub"),
    },
    {
      img: "/assets/img/hero-carousel/hero-carousel-5.png",
      heading: t("hero_slide_5_heading"),
      sub: t("hero_slide_5_sub"),
    },
    {
      img: "/assets/img/hero-carousel/hero-carousel-6.png",
      heading: t("hero_slide_6_heading"),
      sub: t("hero_slide_6_sub"),
    },
  ];

  /* Entry animations */
  useEffect(() => {
    const els = contentRef.current?.querySelectorAll(".hero-anim");
    if (!els) return;
    els.forEach((el, i) => {
      const h = el as HTMLElement;
      h.style.opacity = "0";
      h.style.transform = "translateY(32px)";
      h.style.transition = `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`;
      requestAnimationFrame(() => setTimeout(() => {
        h.style.opacity = "1";
        h.style.transform = "translateY(0)";
      }, 80));
    });
  }, []);

  /* Auto-advance carousel */
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-[72vh] lg:min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Background carousel slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: active === i ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            onError={(e) => {
              // Fallback to gradient if image fails
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ))}

      {/* Fallback gradient bg (shows if images fail to load) */}
      <div className="absolute inset-0 hero-animated-bg -z-10" />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="hero-particle pointer-events-none"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
            background: i % 2 === 0
              ? "rgba(0, 212, 255, 0.25)"
              : "rgba(123, 47, 255, 0.2)",
            animationDuration: `${3 + i * 0.8}s`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 pt-32 pb-6 text-center">
        <div className="mx-auto max-w-3xl">

          {/* Eyebrow badge */}
          <div className="hero-anim mb-6 flex justify-center">
            <span className="badge-neon">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {t("hero_eyebrow")}
            </span>
          </div>

          {/* Animated heading from slide */}
          <h1
            className="hero-anim font-extrabold leading-tight text-white mb-4"
            style={{
              fontSize: "clamp(1.5rem, 4.5vw, 2.75rem)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {slides[active].heading}{" "}
            <span style={{ color: "#00D4FF" }}>{slides[active].sub}</span>
          </h1>

          {/* Hindi subtitle */}
          <p
            className="hero-anim mt-1 text-white/80 font-medium"
            style={{ fontSize: "0.95rem" }}
          >
            {t("hero_hindi_subtitle")}
          </p>

          {/* Body */}
          <p
            className="hero-anim mx-auto mt-4 max-w-xl text-white/75 leading-relaxed"
            style={{ fontSize: "0.9rem" }}
          >
            {t("hero_desc")}
          </p>

          {/* Search bar */}
          <div className="hero-anim mx-auto mt-10 max-w-2xl">
            <div
              className="flex flex-col gap-2 rounded-2xl bg-white p-2.5 sm:flex-row sm:items-center"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.22)" }}
            >
              <div className="flex flex-1 items-center gap-2 px-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <input
                  type="text"
                  placeholder={t("hero_search_loc_placeholder")}
                  className="w-full border-0 bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  aria-label="Location"
                />
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <select
                className="border-0 bg-transparent px-3 py-2 text-sm text-muted-foreground outline-none"
                aria-label="Job category"
              >
                <option>{t("hero_cat_all")}</option>
                <option>{t("hero_cat_retail")}</option>
                <option>{t("hero_cat_delivery")}</option>
                <option>{t("hero_cat_it")}</option>
                <option>{t("hero_cat_manufacturing")}</option>
                <option>{t("hero_cat_healthcare")}</option>
                <option>{t("hero_cat_education")}</option>
              </select>
              <button
                className="btn-primary btn-shimmer flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm touch-target"
                aria-label="Search jobs"
              >
                <Search className="h-4 w-4" />
                <span>{t("search_btn")}</span>
              </button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hero-anim mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/latest-jobs" className="btn-primary btn-shimmer touch-target">
              <Briefcase className="h-4 w-4" />
              {t("hero_browse_jobs")}
            </a>
            <a href="/registration" className="btn-ghost-white touch-target">
              {t("hero_register_free")} →
            </a>
          </div>

          {/* Floating stat badges */}
          <div className="hero-anim mt-10 flex flex-wrap justify-center gap-4">
            <div
              className="hero-badge glass-card-dark flex items-center gap-2 rounded-full px-4 py-2 text-white"
              style={{ fontSize: "0.85rem" }}
            >
              <Briefcase className="h-3.5 w-3.5 text-accent-neon" style={{ color: "#00D4FF" }} />
              <strong>500+</strong> {t("hero_stat_active_jobs")}
            </div>
            <div
              className="hero-badge-2 glass-card-dark flex items-center gap-2 rounded-full px-4 py-2 text-white"
              style={{ fontSize: "0.85rem" }}
            >
              <Users className="h-3.5 w-3.5" style={{ color: "#00D4FF" }} />
              <strong>10K+</strong> {t("hero_stat_registered_users")}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: active === i ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: active === i ? "white" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Scroll arrow */}
      <a
        href="#what-we-do"
        className="animate-bounce-arrow absolute bottom-5 z-10 text-white/60 hover:text-white transition-colors"
        style={{ left: "50%", bottom: "1.5rem" }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
};

export default HeroSection;
