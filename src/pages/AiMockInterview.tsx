import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Brain, Sparkles, Mic2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const AiMockInterview = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "AI मॉक इंटरव्यू" : "AI Mock Interview"}
        subtitle={language === 'hi' ? "AI MOCK INTERVIEW" : "AI MOCK INTERVIEW"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "AI Mock Interview" : "AI Mock Interview"}
      />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20" data-reveal>
                <div className="space-y-8">
                     <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-xs uppercase tracking-widest italic">
                        <Brain className="h-5 w-5" />
                        Next-Gen Preparation
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-[0.9] text-slate-900">
                        Interview <br/><span className="text-blue-600">Revisited</span>
                    </h1>
                    <p className="text-slate-500 text-base md:text-lg font-bold italic opacity-80 leading-relaxed max-w-lg">
                        असली साक्षात्कार (Interview) का अनुभव लें हमारे AI पावर्ड सिमुलेशन के साथ। अपनी गलतियों को सुधारें और आत्मविश्वास बढ़ाएं।
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-8 py-4 bg-blue-premium text-white rounded-2xl font-black uppercase italic tracking-widest text-xs flex items-center gap-3">
                            <Sparkles className="h-4 w-4" /> COMING SOON
                        </div>
                        <div className="px-8 py-4 bg-slate-100 text-slate-400 rounded-2xl font-black uppercase italic tracking-widest text-xs flex items-center gap-3">
                            NOTIFY ME <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600 rounded-[5rem] rotate-6 scale-105 opacity-10 group-hover:rotate-12 transition-transform" />
                    <div className="relative h-[600px] bg-blue-premium rounded-[4rem] flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        <div className="relative z-10 p-12 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 text-center">
                            <Mic2 className="h-20 w-20 text-blue-400 mx-auto mb-8 animate-pulse" />
                            <div className="h-2 w-48 bg-white/20 rounded-full mx-auto relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500 w-1/2 animate-[shimmer_2s_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: "Voice Analysis", icon: Mic2, desc: "Real-time feedback" },
                    { title: "Behavioral Intel", icon: Brain, desc: "Smart assessment" },
                    { title: "Secure Data", icon: ShieldCheck, desc: "Full privacy" }
                ].map((f, i) => (
                    <div key={i} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 hover:border-blue-600 transition-all duration-500 group" data-reveal data-delay={i*100}>
                        <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <f.icon className="h-8 w-8" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">{f.title}</h4>
                        <p className="text-slate-500 font-bold italic opacity-70 uppercase tracking-widest text-xs">{f.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default AiMockInterview;
