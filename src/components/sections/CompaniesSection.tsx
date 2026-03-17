import { useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const logos = [
  { src: "/assets/img/clients/clients-1.webp", alt: "Client 1" },
  { src: "/assets/img/clients/clients-2.webp", alt: "Client 2" },
  { src: "/assets/img/clients/clients-3.webp", alt: "Client 3" },
  { src: "/assets/img/clients/clients-4.webp", alt: "Client 4" },
  { src: "/assets/img/clients/clients-5.webp", alt: "Client 5" },
  { src: "/assets/img/clients/clients-6.webp", alt: "Client 6" },
];

const LogoStrip = ({ direction = 1, speed = 1 }: { direction?: 1 | -1, speed?: number }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const xRef = useRef<number>(0);

  useEffect(() => {
    const total = trackRef.current?.scrollWidth ?? 0;
    const step = 0.5 * speed * direction;

    const tick = () => {
      xRef.current += step;
      if (direction > 0 && xRef.current >= total / 2) xRef.current = 0;
      if (direction < 0 && xRef.current <= 0) xRef.current = total / 2;
      
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${xRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed, direction]);

  return (
    <div className="relative overflow-hidden py-4">
      <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
        {[...logos, ...logos, ...logos].map((l, i) => (
          <div
            key={i}
            className="flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-white/30 backdrop-blur-sm px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={l.src}
              alt={l.alt}
              className="max-h-10 max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.parentElement!.innerHTML = `<span style="font-size:0.75rem;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em">Partner</span>`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CompaniesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-offwhite section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center" data-reveal>
          <p className="section-eyebrow">{t("companies_eyebrow")}</p>
          <h2 className="section-title">
            {t("companies_title_prefix")}{" "}
            <span className="gradient-text">{t("companies_title_accent")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-md">
            {t("companies_desc")}
          </p>
        </div>
        <div className="space-y-5">
          <LogoStrip direction={1} speed={1} />
          <LogoStrip direction={-1} speed={0.8} />
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
