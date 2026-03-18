import { Target, Lightbulb, Shield, Zap, CheckCircle2, Globe, Users, Award, ArrowRight, Sparkles, Briefcase, Verified, Cpu, LineChart } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const ValueCard = ({ title, icon, desc }: { title: string; icon: React.ReactNode; desc: string }) => (
  <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-3 md:gap-4 group hover:shadow-xl hover:shadow-blue-50 transition-all duration-700 hover:-translate-y-2" data-reveal>
    <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
      <div className="scale-100 md:scale-110">
        {icon}
      </div>
    </div>
    <div>
        <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter italic mb-1 md:mb-2">{title}</h4>
        <p className="text-slate-500 font-bold text-[10px] md:text-xs italic opacity-80 group-hover:opacity-100 transition-opacity uppercase tracking-widest leading-relaxed">{desc}</p>
    </div>
  </div>
);

const About = () => {
  useScrollReveal();
  const { t, language } = useLanguage();

  return (
    <MainLayout>
      <PageBanner 
        title={t("about_hero_title")}
        subtitle={t("about_hero_subtitle")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("about_hero_title")}
      />
      
      <div className="py-8 md:py-12 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-20 md:space-y-32">
            <div data-reveal="up" className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-black text-[9px] mb-3 uppercase tracking-[0.2em] italic shadow-sm">
                <Sparkles className="h-3 w-3" />
                {t("about_impact_eyebrow")}
              </div>
              <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-4 md:mb-6 italic uppercase leading-[1.1] tracking-tighter">
                {t("about_impact_title_prefix")} <span className="text-blue-600">{t("about_impact_title_accent")}</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-10 md:mb-14">
                <p className="text-slate-600 text-xs md:text-base font-bold leading-relaxed italic opacity-90 uppercase tracking-wide">
                  {t("about_whatwedo_subtitle")}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
                  <div className="p-3 md:p-4 bg-white rounded-2xl border-b-4 border-blue-100 shadow-sm">
                    <p className="text-slate-500 font-bold text-[9px] md:text-[10px] italic uppercase leading-relaxed">
                      {t("about_whatwedo_item1")}
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-white rounded-2xl border-b-4 border-blue-100 shadow-sm">
                    <p className="text-slate-500 font-bold text-[9px] md:text-[10px] italic uppercase leading-relaxed">
                      {t("about_whatwedo_item2")}
                    </p>
                  </div>
                  <div className="p-3 md:p-4 bg-white rounded-2xl border-b-4 border-blue-100 shadow-sm">
                    <p className="text-slate-500 font-bold text-[9px] md:text-[10px] italic uppercase leading-relaxed">
                      {t("about_whatwedo_item3")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <button className="px-5 py-2.5 bg-blue-600 text-white font-black rounded-xl hover:bg-slate-900 transition-all duration-500 uppercase italic tracking-widest text-[9px] md:text-[10px] shadow-lg border-b-4 border-blue-800 active:border-b-0 active:translate-y-1">
                    {t("about_get_hired_on_nearby")}
                  </button>
                  <button className="px-5 py-2.5 border-2 border-slate-900 text-slate-900 font-black rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-500 uppercase italic tracking-widest text-[9px] md:text-[10px] shadow-sm">
                    {t("about_hire_on_nearby")}
                  </button>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="px-2 md:px-0" data-reveal>
              <div className="relative w-full max-w-[calc(100vw-20px)] mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white aspect-video md:aspect-auto md:h-[600px] group/video">
                <video 
                  src="/assets/video/slider.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Thick Dark Blue Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="text-center px-4 space-y-4">
                    <h3 className="text-white text-2xl md:text-4xl font-black uppercase italic tracking-[0.2em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                      {t("about_video_title_prefix")} {t("about_video_title_accent")} <span className="text-blue-600">{t("about_video_title_suffix")}</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <p className="text-blue-600 font-black text-xs md:text-lg italic uppercase tracking-[0.3em] leading-relaxed">
                  {t("about_video_tagline")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20 items-center">
              <div className="relative group mx-4 md:mx-0" data-reveal>
                <div className="absolute inset-0 bg-blue-600 rounded-[2rem] md:rounded-[3rem] rotate-3 scale-105 opacity-5 group-hover:rotate-6 transition-transform duration-1000" />
                <div className="relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border-4 border-white group-hover:border-blue-50 transition-all duration-700">
                    <img 
                      src="/assets/img/about/Vision.png" 
                      alt="Vision" 
                      className="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6" data-reveal>
                <div className="inline-flex items-center gap-3 text-blue-600 font-black italic uppercase tracking-widest text-xs">
                    <span className="h-1 w-6 md:w-8 bg-blue-600 rounded-full" />
                    {t("about_foundation_label")}
                </div>
                <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight md:leading-none">
                  {t("about_vision_title_prefix")} <br/><span className="text-blue-600">MISSION 2030</span>
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-bold leading-relaxed italic opacity-80">
                  {t("about_vision_2030_desc")}
                </p>
                <div className="pt-2">
                    <button className="flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-6 md:py-3 border-[3px] border-slate-900 rounded-2xl font-black uppercase italic tracking-widest text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all duration-500">
                        {t("nav_learn_more")} <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20 items-center">
               <div className="lg:order-2 relative group mx-4 md:mx-0" data-reveal>
                <div className="absolute inset-0 bg-slate-900 rounded-[2rem] md:rounded-[3rem] -rotate-3 scale-105 opacity-5 group-hover:-rotate-6 transition-transform duration-1000" />
                <div className="relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border-4 border-white group-hover:border-slate-50 transition-all duration-700">
                    <img 
                      src="/assets/img/about/Mission.png" 
                      alt="Mission" 
                      className="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
              </div>
              <div className="lg:order-1 space-y-4 md:space-y-6" data-reveal>
                <div className="inline-flex items-center gap-3 text-slate-900 font-black italic uppercase tracking-widest text-[10px] md:text-xs">
                    <span className="h-1 w-6 md:w-8 bg-slate-900 rounded-full" />
                    {t("about_strategy_label")}
                </div>
                <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter italic leading-tight md:leading-none">
                  {t("about_mission_title_prefix")} <br/><span className="text-slate-400 font-black">CORE FOCUS</span>
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    t("about_mission_1"),
                    t("about_mission_2"),
                    t("about_mission_3")
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-all duration-500 group/item">
                      <div className="h-6 w-6 md:h-8 md:w-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                        <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4" />
                      </div>
                      <span className="text-slate-600 font-bold text-xs md:text-sm italic tracking-tight leading-snug pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nearby Hiring Difference Section */}
            <div className="space-y-12 md:space-y-16 py-8">
              <div className="text-center mb-4 md:mb-8" data-reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-black text-[9px] mb-3 uppercase tracking-[0.2em] italic shadow-sm">
                  <Target className="h-3 w-3" />
                  {t("about_diff_eyebrow")}
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
                  {t("about_diff_title_prefix")} <span className="text-blue-600">{t("about_diff_title_accent")}</span> {t("about_diff_title_suffix")}
                </h2>
              </div>

              {/* Box 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-md border-b-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/box" data-reveal>
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1 rounded-[1.5rem] md:rounded-[2rem] shadow-lg group-hover/box:rotate-1 transition-transform duration-700">
                   <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.9rem] bg-white aspect-[4/3]">
                      <img src="/assets/img/options.png" alt="Options" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="space-y-6 relative overflow-visible">
                  <span className="absolute -top-12 -left-6 text-8xl md:text-[10rem] font-black text-slate-100/60 -z-10 group-hover/box:text-blue-50 group-hover/box:scale-110 transition-all duration-700 select-none">1</span>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/box:animate-bounce">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{t("about_diff_box1_title")}</h3>
                  </div>
                  <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed italic opacity-80">
                    {t("about_diff_box1_desc")}
                  </p>
                  <div className="p-4 bg-blue-50 rounded-2xl border-l-[6px] border-blue-600 italic font-bold text-slate-600 text-[10px] md:text-xs shadow-inner">
                    {t("about_diff_box1_quote")}
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-md border-b-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/box text-right md:text-left" data-reveal>
                <div className="md:order-2 bg-gradient-to-bl from-blue-600 to-blue-800 p-1 rounded-[1.5rem] md:rounded-[2rem] shadow-lg group-hover/box:-rotate-1 transition-transform duration-700">
                   <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.9rem] bg-white aspect-[4/3]">
                      <img src="/assets/img/services1.png" alt="Service 1" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="md:order-1 space-y-6 relative overflow-visible">
                  <span className="absolute -top-12 md:-right-6 text-8xl md:text-[10rem] font-black text-slate-100/60 -z-10 group-hover/box:text-blue-50 group-hover/box:scale-110 transition-all duration-700 select-none">2</span>
                  <div className="flex items-center gap-4 justify-end md:justify-start">
                    <div className="md:hidden h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/box:animate-spin">
                      <Verified className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{t("about_diff_box2_title")}</h3>
                    <div className="hidden md:flex h-10 w-10 bg-blue-600 rounded-xl items-center justify-center text-white shadow-lg group-hover/box:animate-spin">
                      <Verified className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed italic opacity-80">
                    {t("about_diff_box2_desc")}
                  </p>
                  <div className="p-4 bg-blue-50 rounded-2xl border-r-4 md:border-r-0 md:border-l-[6px] border-blue-600 italic font-bold text-slate-600 text-[10px] md:text-xs shadow-inner">
                    {t("about_diff_box2_quote")}
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-md border-b-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/box" data-reveal>
                <div className="bg-gradient-to-tr from-blue-600 to-blue-800 p-1 rounded-[1.5rem] md:rounded-[2rem] shadow-lg group-hover/box:rotate-1 transition-transform duration-700">
                   <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.9rem] bg-white aspect-[4/3]">
                      <img src="/assets/img/service2.png" alt="Service 2" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="space-y-6 relative overflow-visible">
                  <span className="absolute -top-12 -left-6 text-8xl md:text-[10rem] font-black text-slate-100/60 -z-10 group-hover/box:text-blue-50 group-hover/box:scale-110 transition-all duration-700 select-none">3</span>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/box:animate-pulse">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{t("about_diff_box3_title")}</h3>
                  </div>
                  <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed italic opacity-80">
                    {t("about_diff_box3_desc")}
                  </p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-md border-b-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/box text-right md:text-left" data-reveal>
                <div className="md:order-2 bg-gradient-to-tl from-blue-600 to-blue-800 p-1 rounded-[1.5rem] md:rounded-[2rem] shadow-lg group-hover/box:-rotate-1 transition-transform duration-700">
                   <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.9rem] bg-white aspect-[4/3]">
                      <img src="/assets/img/service3.png" alt="Service 3" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="md:order-1 space-y-6 relative overflow-visible">
                  <span className="absolute -top-12 md:-right-6 text-8xl md:text-[10rem] font-black text-slate-100/60 -z-10 group-hover/box:text-blue-50 group-hover/box:scale-110 transition-all duration-700 select-none">4</span>
                  <div className="flex items-center gap-4 justify-end md:justify-start">
                    <div className="md:hidden h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/box:animate-bounce">
                      <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{t("about_diff_box4_title")}</h3>
                    <div className="hidden md:flex h-10 w-10 bg-blue-600 rounded-xl items-center justify-center text-white shadow-lg group-hover/box:animate-bounce">
                      <Globe className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed italic opacity-80">
                    {t("about_diff_box4_desc")}
                  </p>
                </div>
              </div>

              {/* Box 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-md border-b-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group/box" data-reveal>
                 <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1 rounded-[1.5rem] md:rounded-[2.5rem] shadow-lg group-hover/box:rotate-1 transition-transform duration-700">
                   <div className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.9rem] bg-white aspect-[4/3]">
                      <img src="/assets/img/service4.png" alt="Service 4" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="space-y-6 relative overflow-visible">
                  <span className="absolute -top-12 -left-6 text-8xl md:text-[10rem] font-black text-slate-100/60 -z-10 group-hover/box:text-blue-50 group-hover/box:scale-110 transition-all duration-700 select-none">5</span>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover/box:animate-pulse">
                      <LineChart className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{t("about_diff_box5_title")}</h3>
                  </div>
                  <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed italic opacity-80">
                    {t("about_diff_box5_desc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-10" data-reveal>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight italic">
                    {t("about_pillars_main_title")} <span className="text-blue-600 italic">{t("about_pillars_title_accent")}</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard title={t("about_value_1")} desc="Absolute Trust" icon={<Shield className="h-8 w-8" />} />
                <ValueCard title={t("about_value_2")} desc="Total Transparency" icon={<Lightbulb className="h-8 w-8" />} />
                <ValueCard title={t("about_value_3")} desc="High Ethics" icon={<Award className="h-8 w-8" />} />
                <ValueCard title={t("about_value_4")} desc="Long-term Stability" icon={<Zap className="h-8 w-8" />} />
              </div>
            </div>

            <div className="relative bg-blue-premium rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 overflow-hidden shadow-2xl" data-reveal>
              <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[80px] -translate-x-1/2 translate-y-1/2" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-5 md:space-y-6">
                  <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 transition-transform duration-700">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                    Path to <br className="hidden md:block"/><span className="text-blue-400 md:ml-0 ml-2">Excellence</span>
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm font-bold italic tracking-wide leading-relaxed">
                    {t("about_excellence_summary")}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <div className="bg-white/5 border border-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-black italic uppercase tracking-widest text-[9px] md:text-[10px] flex items-center gap-2 text-blue-400">
                      <Target className="h-3 w-3" />
                      {t("about_growth_driven")}
                    </div>
                    <div className="bg-white/5 border border-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-black italic uppercase tracking-widest text-[9px] md:text-[10px] flex items-center gap-2 text-blue-400">
                      <Users className="h-3 w-3" />
                      {t("about_zero_cost")}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10 bg-white rounded-[1.5rem] md:rounded-[2.5rem] text-slate-900 shadow-xl rotate-1 hover:rotate-0 transition-all duration-700">
                  <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase italic tracking-tighter leading-tight">{t("about_dreams_reality")}</h4>
                  <p className="text-slate-500 font-bold text-xs md:text-sm mb-6 md:mb-8 leading-relaxed italic opacity-80">
                    {t("about_dreams_msg")}
                  </p>
                  <button className="w-full py-3 md:py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-slate-900 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 uppercase italic tracking-widest shadow-md text-[10px] md:text-xs border-b-4 border-[#0C41D4] active:border-b-0 active:translate-y-[4px]">
                    {t("about_join_mission_btn")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
