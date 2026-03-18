import { useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const topImages = [
  { src: "/assets/img/1.png", alt: "NearbyHiring Highlights 1" },
  { src: "/assets/img/2.png", alt: "NearbyHiring Highlights 2" },
  { src: "/assets/img/3.png", alt: "NearbyHiring Highlights 3" },
  { src: "/assets/img/4.png", alt: "NearbyHiring Highlights 4" },
  { src: "/assets/img/5.png", alt: "NearbyHiring Highlights 5" },
];

const bottomImages = [
  { src: "/assets/img/6.png", alt: "NearbyHiring Highlights 6" },
  { src: "/assets/img/7.png", alt: "NearbyHiring Highlights 7" },
  { src: "/assets/img/8.png", alt: "NearbyHiring Highlights 8" },
  { src: "/assets/img/9.png", alt: "NearbyHiring Highlights 9" },
  { src: "/assets/img/10.png", alt: "NearbyHiring Highlights 10" },
];

const GalleryStrip = ({ 
  images,
  offset = 0, 
  speed = 1, 
  direction = 1 
}: {
  images: { src: string; alt: string }[];
  offset?: number;
  speed?: number;
  direction?: 1 | -1;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const xRef = useRef<number>(offset);

  useEffect(() => {
    const total = trackRef.current?.scrollWidth ?? 0;
    const step = 0.4 * speed * direction;

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
    <div className="overflow-hidden py-2">
      <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
            style={{ width: "260px", height: "160px" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                const p = (e.target as HTMLImageElement).parentElement;
                if (p) {
                  p.style.background = "linear-gradient(135deg, #EEF2FF 0%, #F0EDFF 100%)";
                  (e.target as HTMLImageElement).style.display = "none";
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HighlightsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="media" className="section-offwhite section-padding overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center" data-reveal>
          <p className="section-eyebrow">{t("highlights_eyebrow")}</p>
          <h2 className="section-title">
            {t("highlights_title_prefix")}{" "}
            <span className="gradient-text">{t("highlights_title_accent")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-md">
            {t("highlights_desc")}
          </p>
        </div>
      </div>

      {/* Full-bleed gallery strips */}
      <div className="space-y-4 -mx-4 md:-mx-8 lg:-mx-16">
        <GalleryStrip images={topImages} speed={1} direction={1} />
        <GalleryStrip images={bottomImages} speed={0.7} direction={-1} offset={130} />
      </div>

      <div className="container mx-auto max-w-6xl mt-10 text-center" data-reveal>
        <a href="/media" className="btn-outline inline-flex items-center gap-2">
          {t("highlights_view_all_cta")}
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default HighlightsSection;
