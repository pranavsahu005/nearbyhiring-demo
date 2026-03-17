import { useEffect, useRef } from "react";
import { UserPlus, Search, FileCheck, PartyPopper } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: UserPlus,
      title: t("step_1_title"),
      body: t("step_1_body"),
      color: "#1B5EF7",
    },
    {
      icon: Search,
      title: t("step_2_title"),
      body: t("step_2_body"),
      color: "#7B2FFF",
    },
    {
      icon: FileCheck,
      title: t("step_3_title"),
      body: t("step_3_body"),
      color: "#00AACC",
    },
    {
      icon: PartyPopper,
      title: t("step_4_title"),
      body: t("step_4_body"),
      color: "#1B5EF7",
    },
  ];

  useEffect(() => {
    const connectors = sectionRef.current?.querySelectorAll(".step-connector");
    const stepNums = sectionRef.current?.querySelectorAll(".step-num");
    if (!connectors && !stepNums) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            connectors?.forEach((c, i) => {
              setTimeout(() => c.classList.add("revealed"), i * 300 + 200);
            });
            stepNums?.forEach((n, i) => {
              setTimeout(() => (n as HTMLElement).style.transform = "scale(1)", i * 300 + 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="section-offwhite section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center" data-reveal>
          <p className="section-eyebrow">{t("how_it_works_eyebrow")}</p>
          <h2 className="section-title">
            {t("how_it_works_title_prefix")}{" "}
            <span className="gradient-text">{t("how_it_works_title_accent")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 max-w-xl text-base font-medium opacity-70">
            {t("how_it_works_desc")}
          </p>
        </div>

        {/* Steps — vertical timeline */}
        <div className="relative space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-center sm:items-start group">
              {/* Left: step number + connector line */}
              <div className="flex flex-col items-center">
                <div
                  className="step-num relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-white text-xl font-black shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${i % 2 === 0 ? "#7B2FFF" : "#00D4FF"})`,
                    transform: "scale(0.8)",
                    transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s`,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="step-connector mt-4 hidden sm:block"
                    style={{ minHeight: "80px" }}
                  />
                )}
              </div>

              {/* Right: content card */}
              <div
                className={`card-premium-dark flex-1 p-8 rounded-[30px] w-full transition-all duration-500`}
                data-reveal
                data-delay={`${i * 100}`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 shadow-xl"
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-black mb-3 text-white tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-medium">{step.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-reveal>
          <a href="/register" className="btn-primary btn-shimmer inline-flex items-center gap-2 px-10 py-5 text-lg">
            {t("how_it_works_cta")}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
