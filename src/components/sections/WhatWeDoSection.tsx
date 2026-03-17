import { Target, Globe, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Target,
      title: t("pillar_mission_title"),
      body: t("pillar_mission_body"),
      color: "#1B5EF7",
    },
    {
      icon: Globe,
      title: t("pillar_vision_title"),
      body: t("pillar_vision_body"),
      color: "#7B2FFF",
    },
    {
      icon: Users,
      title: t("pillar_community_title"),
      body: t("pillar_community_body"),
      color: "#00AACC",
    },
  ];

  return (
    <section id="what-we-do" className="section-offwhite section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-reveal>
          <p className="section-eyebrow">{t("what_we_do_eyebrow")}</p>
          <h2 className="section-title">
            {t("what_we_do_title_prefix")}{" "}
            <span className="gradient-text">{t("what_we_do_title_accent")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-xl">
            {t("what_we_do_desc")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-base p-6 flex flex-col gap-4"
              data-reveal
              data-delay={`${i * 120}`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: `${p.color}14` }}
              >
                <p.icon className="h-6 w-6" style={{ color: p.color }} />
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              <div
                className="h-1 w-12 rounded-full"
                style={{ background: `linear-gradient(to right, ${p.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
