import { useLanguage } from "@/context/LanguageContext";

const LegacyAboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-reveal>
             <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[50px] blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                  alt={t('about_heading_main')} 
                  className="rounded-[40px] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                />
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8" data-reveal data-delay="100">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
               {t('about_heading_main')}
            </h2>
            <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
               <p>
                 {t('about_desc_main_1')}
               </p>
               <p>
                 {t('about_desc_main_2')}
               </p>
            </div>
            <div className="pt-6">
               <button className="btn-primary rounded-2xl px-10 py-4 btn-shimmer">
                 {t('nav_our_story')}
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyAboutSection;
