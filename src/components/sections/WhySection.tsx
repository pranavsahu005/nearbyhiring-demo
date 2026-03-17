import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck, MapPin, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const WhySection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: MapPin,
      title: t("feature_hyper_local_title"),
      body: t("feature_hyper_local_body"),
      color: "#1B5EF7",
    },
    {
      icon: ShieldCheck,
      title: t("feature_verified_title"),
      body: t("feature_verified_body"),
      color: "#7B2FFF",
    },
    {
      icon: Zap,
      title: t("feature_apply_title"),
      body: t("feature_apply_body"),
      color: "#00AACC",
    },
    {
      icon: CheckCircle2,
      title: t("feature_free_title"),
      body: t("feature_free_body"),
      color: "#1B5EF7",
    },
  ];

  // useScrollReveal hook handles the animation globally

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="section-white section-padding"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left — image */}
          <div data-reveal="left" className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/assets/img/whyus.jpg"
                alt="Why NearbyHiring"
                className="h-full w-full object-cover"
                style={{ minHeight: "380px", maxHeight: "520px" }}
                loading="lazy"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.parentElement!.classList.add("placeholder-img");
                  t.style.display = "none";
                }}
              />
              {/* Gradient overlay on image */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(27,94,247,0.15) 0%, rgba(123,47,255,0.1) 100%)",
                }}
              />
            </div>
            {/* Floating achievement card */}
            <div
              className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 shadow-xl hidden sm:block"
              style={{ border: "1px solid rgba(27,94,247,0.15)" }}
            >
              <p className="text-xs text-muted-foreground mb-1">{t("why_achievement_placed")}</p>
              <p
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                5,000+
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{t("why_achievement_country")}</p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="section-eyebrow">{t("why_eyebrow")}</p>
            <h2 className="section-title mb-5">
              {t("why_title_prefix")}
              <span className="gradient-text">{t("why_title_accent")}</span>
            </h2>
            <p className="section-subtitle mb-8 max-w-md">
              {t("why_desc")}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="why-card card-gradient-border p-5 group cursor-default"
                  data-reveal
                  data-delay={i * 100}
                >
                  <div
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${f.color}14` }}
                  >
                    <f.icon className="h-5 w-5" style={{ color: f.color }} />
                  </div>
                  <h3
                    className="mb-1.5 text-sm font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
