
import React, { useState } from "react";
import { UserPlus, CheckCircle2, ClipboardCheck, Smartphone, Mail, Briefcase, GraduationCap, MapPin, FileUp, Send, Loader2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";

const Registration = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <MainLayout>
        <div className="bg-slate-50 pt-32 pb-20 flex items-center justify-center px-6">
          <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-slate-100 shadow-2xl shadow-blue-100 max-w-2xl w-full text-center">
            <div className="h-24 w-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-12">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">
              {t("registration_success_title")}
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed mb-12">
              {t("registration_success_msg")}
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all uppercase italic tracking-wider"
            >
              {t("registration_go_back")}
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageBanner 
        title={t("registration_form_title")}
        subtitle={t("registration_hero_accent")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("registration_form_title")}
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
                <UserPlus className="h-4 w-4" />
                {t("registration_hero_badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase text-center">
                {t("registration_hero_title")} <span className="text-blue-600 italic">{t("registration_hero_accent")}</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-blue-100/50">
                <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tight italic flex items-center gap-4">
                  <span className="h-10 w-2 bg-blue-600 rounded-full" />
                  {t("registration_how_to_title")}
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: <ClipboardCheck className="text-blue-600" />, key: "registration_step_1" },
                    { icon: <Smartphone className="text-purple-600" />, key: "registration_step_2" },
                    { icon: <MapPin className="text-orange-600" />, key: "registration_step_3" },
                    { icon: <CheckCircle2 className="text-green-600" />, key: "registration_step_4" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-slate-600 text-lg font-bold leading-relaxed pt-2">
                        {t(item.key)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-premium p-12 rounded-[4rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tight italic flex items-center gap-4 relative z-10">
                  <span className="h-10 w-2 bg-white rounded-full" />
                  {t("registration_benefits_title")}
                </h3>
                <div className="space-y-8 relative z-10">
                  {[
                    "registration_ben_1",
                    "registration_ben_2",
                    "registration_ben_3"
                  ].map((key, idx) => (
                    <div key={idx} className="flex gap-6 items-center group">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-all flex-shrink-0">
                        <Zap className="h-6 w-6 text-blue-400" />
                      </div>
                      <p className="text-white/80 text-lg font-bold">
                        {t(key)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[5rem] p-8 md:p-20 border border-slate-100 shadow-2xl shadow-blue-100">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 uppercase tracking-tight italic text-center">
                {t("registration_form_title")} <span className="text-blue-600">{t("registration_form_accent")}</span>
              </h2>

              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <UserPlus className="h-4 w-4" /> {t("registration_input_fname")}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="Rahul"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4">
                    {t("registration_input_lname")}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="Kumar"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <Smartphone className="h-4 w-4" /> {t("registration_input_phone")}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="+91 9312189789"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {t("registration_input_email")}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all"
                    placeholder="rahul@example.com"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" /> {t("registration_input_industry")}
                  </label>
                  <select className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                    <option>Automobiles - ऑटोमोबाइल</option>
                    <option>IT & Software - सूचना प्रौद्योगिकी</option>
                    <option>Healthcare - स्वास्थ्य सेवा</option>
                    <option>Manufacturing - विनिर्माण</option>
                    <option>Construction - बुनियादी ढाँचा</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                     <GraduationCap className="h-4 w-4" /> {t("registration_input_education")}
                  </label>
                  <select className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all appearance-none cursor-pointer">
                    <option>ITI - आईटीआई</option>
                    <option>Polytechnic - पॉलिटेक्निक</option>
                    <option>Graduate - स्नातक</option>
                    <option>High School - हाई स्कूल</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {t("registration_input_address")}
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-8 py-5 bg-slate-50 border-none rounded-3xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                    placeholder="Enter your current district and state..."
                    required
                  />
                </div>

                <div className="md:col-span-2 p-12 bg-blue-50 rounded-[3rem] border-2 border-dashed border-blue-200 group hover:border-blue-600 transition-all">
                  <div className="text-center">
                    <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <FileUp className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">{t("registration_upload_title")}</h4>
                    <p className="text-slate-500 font-bold mb-6">{t("registration_upload_desc")}</p>
                    <input type="file" className="hidden" id="resume-upload" />
                    <label 
                      htmlFor="resume-upload"
                      className="px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl shadow-blue-200/50 cursor-pointer hover:bg-blue-600 hover:text-white transition-all inline-block"
                    >
                      {t("registration_upload_btn")}
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="flex gap-4 items-start p-2">
                    <input type="checkbox" className="mt-1 h-6 w-6 rounded-lg text-blue-600 focus:ring-blue-100 border-slate-200" required />
                    <span className="text-slate-500 font-bold leading-relaxed">
                      {t("registration_terms_confirm")}
                    </span>
                  </div>
                  <div className="flex gap-4 items-start p-2">
                    <input type="checkbox" className="mt-1 h-6 w-6 rounded-lg text-blue-600 focus:ring-blue-100 border-slate-200" required />
                    <span className="text-slate-500 font-bold leading-relaxed">
                      {t("registration_terms_privacy")}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2 flex justify-center mt-8">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full md:w-96 py-6 bg-blue-premium text-white font-black rounded-[2rem] hover:scale-105 hover:bg-blue-600 transition-all text-xl uppercase italic tracking-wider flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-6 w-6 animate-spin" />
                          {t("registration_submitting")}
                        </>
                      ) : (
                        <>
                          {t("registration_submit_btn")}
                          <Send className="h-6 w-6" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Registration;
