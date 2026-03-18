import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { FileText, Sparkles, Send, Zap, MousePointer2, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AiCoverLetter = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "AI कवर लेटर" : "AI Cover Letter"}
        subtitle={language === 'hi' ? "AI COVER LETTER GENERATOR" : "AI COVER LETTER GENERATOR"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "AI Cover Letter" : "AI Cover Letter"}
      />
      <div className="py-12 bg-white flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center" data-reveal>
            <div className="h-32 w-32 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center mx-auto mb-16 shadow-inner animate-bounce text-blue-600">
                <FileText className="h-16 w-16" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter leading-none text-slate-900">
              Personalized <br/><span className="text-blue-600">Impact</span>
            </h1>
            
            <p className="text-slate-500 text-base md:text-lg font-bold mb-16 italic opacity-80 uppercase tracking-widest max-w-2xl mx-auto">
                आपका अगला जॉब आवेदन अब और भी प्रभावशाली होगा। AI कवर लेटर जल्द आ रहा है।
            </p>

            <div className="bg-blue-premium rounded-[5rem] p-12 md:p-20 text-left relative overflow-hidden group mb-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-blue-400 font-black italic uppercase tracking-widest text-sm">
                            <span className="h-1 w-12 bg-blue-600" />
                            FEATURE PREVIEW
                        </div>
                        <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">One Click <br/><span className="text-blue-400">Creation</span></h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-xl text-white"><Zap className="h-5 w-5" /></div>
                            <div className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-xl text-white"><MousePointer2 className="h-5 w-5" /></div>
                            <div className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-xl text-white"><UserCheck className="h-5 w-5" /></div>
                        </div>
                    </div>
                    <button className="px-12 py-6 bg-blue-600 text-white font-black rounded-[2rem] hover:bg-white hover:text-slate-900 transition-all uppercase italic tracking-[0.2em] shadow-2xl flex items-center gap-4">
                        GET NOTIFIED <Send className="h-6 w-6" />
                    </button>
                </div>
            </div>

            <div className="inline-flex items-center gap-2 text-slate-300 font-black uppercase text-xs italic tracking-widest">
                <Sparkles className="h-4 w-4" />
                POWERED BY NEARBY HIRING CORE AI
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default AiCoverLetter;
