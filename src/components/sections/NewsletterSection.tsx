import { useLanguage } from "../../context/LanguageContext";

const NewsletterSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl box-premium-green p-12 md:p-16 rounded-[40px] text-center relative overflow-hidden" data-reveal>
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-white font-black tracking-tighter" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-heading)" }}>
            {t("newsletter_title_prefix")}<span className="text-green-300">{t("newsletter_title_accent")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/70 text-lg font-medium leading-relaxed">
            {t("newsletter_desc")}
          </p>

          <form onSubmit={e => e.preventDefault()} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder={t("newsletter_placeholder")}
              className="flex-1 rounded-2xl border-0 px-6 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 shadow-xl"
            />
            <button className="rounded-2xl px-8 py-4 text-sm font-black text-white transition-all hover:scale-105 active:scale-95 shadow-xl bg-blue-premium hover:bg-blue-600 touch-target">
              {t("newsletter_cta")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
