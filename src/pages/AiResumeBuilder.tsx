import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Wrench, Sparkles, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AiResumeBuilder = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "AI रेज़्यूमे बिल्डर" : "AI Resume Builder"}
        subtitle={language === 'hi' ? "AI RESUME BUILDER" : "AI RESUME BUILDER"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "AI Resume Builder" : "AI Resume Builder"}
      />
      <div className="py-12 bg-white flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-reveal>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-12 uppercase tracking-[0.2em] italic animate-pulse">
              <Sparkles className="h-6 w-6" />
              Revolutionizing Careers
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter leading-none text-slate-900">
              AI <span className="text-blue-600">Resume</span> <br/>Evolution
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-bold mb-12 italic opacity-80 uppercase tracking-widest max-w-2xl mx-auto">
                हमारा अत्याधुनिक AI रेज़्यूमे बिल्डर जल्द ही उपलब्ध होगा। 
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-20">
                {[
                    { title: "Smart Keywords", desc: "ATS optimized" },
                    { title: "Dynamic Layouts", desc: "Modern designs" },
                    { title: "AI Analysis", desc: "Expert feedback" }
                ].map((item, idx) => (
                    <div key={idx} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:bg-blue-600 transition-colors duration-700">
                        <CheckCircle2 className="h-10 w-10 text-blue-600 mx-auto mb-6 group-hover:text-white transition-colors" />
                        <h4 className="text-xl font-black text-slate-900 uppercase italic mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest group-hover:text-white/60 transition-colors">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="relative inline-block group">
                <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <button className="relative px-16 py-8 bg-blue-premium text-white rounded-[2.5rem] font-black uppercase italic tracking-[0.3em] flex items-center gap-6 group">
                    <Wrench className="h-6 w-6 group-hover:rotate-45 transition-transform" />
                    UNDER CONSTRUCTION
                    <Rocket className="h-6 w-6 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default AiResumeBuilder;
