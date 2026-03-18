import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { BrainCircuit, GraduationCap, Database, Rocket, ShieldCheck, Sparkles, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Employability = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  const features = [
    {
      title: t("emp_feat_1_title"),
      desc: t("emp_feat_1_desc"),
      icon: BrainCircuit,
      image: "/assets/img/services1.png"
    },
    {
      title: t("emp_feat_2_title"),
      desc: t("emp_feat_2_desc"),
      icon: GraduationCap,
      image: "/assets/img/options.png"
    },
    {
        title: t("emp_feat_3_title"),
        desc: t("emp_feat_3_desc"),
        icon: Sparkles,
        image: "/assets/img/skilling.png"
    },
    {
        title: t("emp_feat_4_title"),
        desc: t("emp_feat_4_desc"),
        icon: Database,
        image: "/assets/img/dataInfuse.png"
    },
    {
        title: t("emp_feat_5_title"),
        desc: t("emp_feat_5_desc"),
        icon: Rocket,
        image: "/assets/img/sustainability.png"
    }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={t("employability_banner_title")}
        subtitle={t("employability_banner_subtitle")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("employability_banner_title")}
      />
      <div className="py-12 bg-slate-50 overflow-hidden pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16" data-reveal>
                <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-blue-50 text-blue-600 rounded-full font-black text-[10px] mb-4 uppercase tracking-widest italic shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t("employability_elite_training")}
                </div>
                <h2 className="text-lg md:text-3xl font-black tracking-tight text-slate-900 mb-4 italic uppercase leading-none">
                    {t("employability_powering")} <span className="text-blue-600">{t("employability_careers")}</span>
                </h2>
                <p className="text-slate-500 text-xs md:text-sm font-normal opacity-80 uppercase italic tracking-widest leading-relaxed max-w-2xl mx-auto">
                    {t("employability_module_eyebrow")}
                </p>
            </div>

            <div className="space-y-24 md:space-y-40">
                {features.map((f, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1" data-reveal>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl md:rounded-3xl blur-2xl group-hover:bg-blue-600/10 transition-all duration-700" />
                                <div className="relative z-10 overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border-4 border-white group-hover:border-blue-50 transition-all duration-700">
                                    <img 
                                        src={f.image} 
                                        alt={f.title} 
                                        className="w-full h-[300px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                                        <div className="h-12 w-12 bg-white/10 backdrop-blur-2xl rounded-xl flex items-center justify-center border border-white/20">
                                            <f.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6" data-reveal>
                            <div className="inline-flex items-center gap-3 text-blue-600 font-black italic uppercase tracking-widest text-xs">
                                <span className="h-1 w-8 bg-blue-600 rounded-full" />
                                MODULE {i + 1}
                            </div>
                             <h3 className="text-lg md:text-2xl font-black text-slate-900 uppercase italic tracking-tight leading-tight">
                                {f.title?.split(' ').map((word, idx) => (
                                    <span key={idx} className={idx > 0 ? "ml-2" : ""}>{word}</span>
                                ))}
                            </h3>
                            <p className="text-slate-600 text-[13px] md:text-sm font-normal leading-relaxed italic opacity-80">
                                {f.desc}
                            </p>
                            <button className="flex items-center gap-3 group text-slate-900 font-black uppercase italic tracking-widest text-[10px] hover:text-blue-600 transition-colors">
                                {t("employability_learn_more")} 
                                <span className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <ShieldCheck className="h-4 w-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                ))}

                <div className="relative py-12 px-6 md:py-16 md:px-20 bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl" data-reveal>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 text-center">
                        <div className="h-16 w-16 bg-blue-600/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-2xl">
                            <Database className="h-8 w-8 text-blue-400" />
                        </div>
                        <h3 className="text-base md:text-2xl font-black text-white mb-4 uppercase italic tracking-tight leading-none">
                            {t("employability_contact_title")}
                        </h3>
                        <p className="text-white/50 text-[13px] md:text-sm font-normal italic tracking-wide leading-relaxed max-w-2xl mx-auto mb-8">
                            {t("employability_contact_desc")}
                        </p>
                        <button className="group relative inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-500 text-sm md:text-lg shadow-2xl uppercase italic tracking-widest overflow-hidden">
                            <span className="relative z-10 flex items-center gap-3">
                                <Mail className="h-4 w-4 md:h-6 md:w-6 group-hover:animate-bounce" /> 
                                training@eduskill.org
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Employability;
