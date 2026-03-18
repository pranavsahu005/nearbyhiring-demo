import React from "react";
import { ChevronDown, Search, HelpCircle, MessageCircle, ExternalLink, Briefcase, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const FaqItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-50 last:border-0 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-center justify-between text-left transition-all"
      >
        <div className="flex items-start gap-8 pr-10">
          <span className={`text-2xl font-black mt-1 italic transition-colors duration-500 ${isOpen ? "text-blue-600" : "text-slate-200"}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-all duration-500 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
            {question}
          </span>
        </div>
        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-50 text-slate-300"}`}>
            <ChevronDown className="h-6 w-6" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[800px] pb-12 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pl-16 md:pl-20 text-slate-500 text-lg md:text-xl font-bold leading-relaxed italic opacity-80 border-l-4 border-blue-100">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  
  const faqs = [
    { question: t("faq_1_q"), answer: t("faq_1_a") },
    { question: t("faq_2_q"), answer: t("faq_2_a") },
    { question: t("faq_3_q"), answer: t("faq_3_a") },
    { question: t("faq_4_q"), answer: t("faq_4_a") },
    { question: t("faq_5_q"), answer: t("faq_5_a") },
    { question: t("faq_6_q"), answer: t("faq_6_a") },
    { question: t("faq_7_q"), answer: t("faq_7_a") },
    { question: t("faq_8_q"), answer: t("faq_8_a") },
    { question: t("faq_9_q"), answer: t("faq_9_a") },
    { question: t("faq_10_q"), answer: t("faq_10_a") },
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={t("faq_title")}
        subtitle={t("faq_subtitle")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("faq_title")}
      />
      
      <div className="bg-white py-24 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-6 uppercase tracking-widest italic animate-bounce">
                <HelpCircle className="h-5 w-5" />
                {t("faq_support_hub")}
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase leading-[1.1]">
                Smart <span className="text-blue-600 italic">Guidance</span>
              </h2>
              <p className="text-slate-500 text-xl font-bold opacity-80 uppercase italic tracking-widest max-w-2xl mx-auto">
                {t("faq_subtitle")}
              </p>
            </div>

            <div className="relative mb-24 max-w-3xl mx-auto group" data-reveal>
              <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 h-8 w-8 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder={t("faq_search_placeholder")}
                className="w-full pl-24 pr-12 py-8 bg-slate-50 border-none rounded-full text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-8 focus:ring-blue-50 transition-all font-black italic uppercase tracking-widest text-lg md:text-xl shadow-inner"
              />
            </div>

            <div className="bg-white rounded-[5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 overflow-hidden mb-32" data-reveal>
              <div className="p-8 md:p-24">
                <div className="flex items-center gap-6 mb-16">
                   <div className="h-20 w-20 bg-blue-50 rounded-[2rem] flex items-center justify-center text-blue-600 rotate-6 group-hover:rotate-0 transition-transform">
                      <Zap className="h-10 w-10 fill-current" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">{t("faq_cat_language")}</h3>
                </div>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <FaqItem key={idx} index={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-600 p-16 rounded-[5rem] text-white shadow-2xl group hover:-translate-y-6 transition-all duration-1000 relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <div className="h-20 w-20 bg-white/10 backdrop-blur-3xl rounded-3xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                        <MessageCircle className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-4xl font-black mb-8 uppercase italic tracking-tighter leading-tight">Need More <br/>Support?</h4>
                    <p className="text-white/80 font-bold text-lg mb-12 italic uppercase tracking-widest leading-relaxed">
                      Our elite support team is online 24/7.
                    </p>
                    <button className="flex items-center gap-4 bg-blue-premium text-white px-12 py-6 rounded-3xl font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-2xl">
                    TALK TO US
                    <ExternalLink className="h-6 w-6" />
                    </button>
                </div>
              </div>

              <div className="bg-white p-16 rounded-[5rem] border-4 border-slate-100 shadow-2xl group hover:-translate-y-6 transition-all duration-1000 relative overflow-hidden" data-reveal>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50" />
                <div className="relative z-10">
                    <div className="h-20 w-20 bg-blue-premium rounded-3xl flex items-center justify-center mb-10 text-white shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Briefcase className="h-10 w-10" />
                    </div>
                    <h4 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter leading-tight">For <br/>Employers</h4>
                    <p className="text-slate-500 font-bold text-lg mb-12 italic uppercase tracking-widest leading-relaxed">
                      Enterprise-level recruitment assistance.
                    </p>
                    <button className="flex items-center gap-4 text-blue-600 font-black uppercase italic tracking-[0.2em] text-sm group/btn">
                        RECRUITER CENTER
                        <ChevronDown className="-rotate-90 h-6 w-6 transition-transform group-hover/btn:translate-x-3" />
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

export default Faq;
