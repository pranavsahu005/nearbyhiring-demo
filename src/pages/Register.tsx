import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Phone, 
  MapPin, 
  Briefcase, 
  Check, 
  GraduationCap, 
  FileUp, 
  ChevronRight,
  Mail,
  Building2,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import MainLayout from "@/components/MainLayout";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "reg_step_personal", icon: <User className="h-5 w-5" /> },
  { id: 2, name: "reg_step_professional", icon: <GraduationCap className="h-5 w-5" /> },
  { id: 3, name: "reg_step_preferences", icon: <Briefcase className="h-5 w-5" /> }
];

const Register = () => {
  useScrollReveal();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setStep(p => Math.min(p + 1, 3));
  };
  const prev = () => {
    setDirection(-1);
    setStep(p => Math.max(p - 1, 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    })
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f8fafc] flex flex-col relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="flex-1 flex items-center justify-center px-4 py-24 relative z-10">
          <div className="w-full max-w-[640px]">
            
            {/* Header */}
            <div className="text-center mb-12">
              <Link to="/" className="inline-block mb-8 group transition-transform hover:scale-105">
                <div className="h-16 w-16 bg-white rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center mb-4 mx-auto">
                   <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
              </Link>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight italic uppercase">
                {t("reg_hero_title").split(' ')[0]} <span className="text-blue-600">{t("reg_hero_title").split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm opacity-60">
                {t("reg_hero_subtitle")}
              </p>
            </div>

            {/* Premium Stepper Indicator */}
            <div className="relative mb-16 max-w-lg mx-auto">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -translate-y-1/2 transition-all duration-700 ease-in-out" 
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
              <div className="flex justify-between relative z-10">
                {steps.map((s) => (
                  <div key={s.id} className="flex flex-col items-center group">
                    <button
                      onClick={() => s.id < step && setStep(s.id)}
                      className={cn(
                        "h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-4",
                        step === s.id 
                          ? "bg-blue-600 text-white border-blue-50 shadow-xl shadow-blue-200 scale-110" 
                          : step > s.id 
                            ? "bg-white text-blue-600 border-blue-50 cursor-pointer" 
                            : "bg-white text-slate-300 border-slate-50"
                      )}
                    >
                      {step > s.id ? <Check className="h-6 w-6" /> : s.icon}
                    </button>
                    <span className={cn(
                      "mt-4 text-[10px] font-black uppercase tracking-[0.2em] italic transition-colors duration-500",
                      step === s.id ? "text-blue-600" : "text-slate-400"
                    )}>
                      {t(s.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.1)] p-8 md:p-12 overflow-hidden relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.form
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    if (step === 3) window.location.href = '/jobs'; 
                    else next(); 
                  }}
                  className="space-y-8"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-8">{t("reg_personal_title")}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_fullname_label")}</label>
                          <div className="relative group">
                            <User className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <input type="text" placeholder={t("reg_fullname_placeholder")} className="w-full pl-16 pr-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold placeholder:text-slate-300" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_contact_label")}</label>
                          <div className="relative group">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <input type="tel" placeholder={t("reg_contact_placeholder")} className="w-full pl-16 pr-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold placeholder:text-slate-300" required />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_email_label")}</label>
                          <div className="relative group">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <input type="email" placeholder="email@example.com" className="w-full pl-16 pr-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold placeholder:text-slate-300" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-8">{t("reg_pro_title")}</h3>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_edu_label")}</label>
                        <select className="w-full px-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold appearance-none cursor-pointer">
                          <option>{t("auto_51")} / {t("auto_136")}</option>
                          <option>{t("auto_165")}</option>
                          <option>{t("auto_157")}</option>
                          <option>{t("auto_9")}</option>
                        </select>
                      </div>

                      <div className="p-8 bg-blue-50/50 rounded-[2rem] border-2 border-dashed border-blue-200 group hover:border-blue-600 transition-all text-center">
                        <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100">
                          <FileUp className="h-8 w-8" />
                        </div>
                        <h4 className="text-lg font-black text-slate-900 mb-1 uppercase italic">{t("registration_upload_title")}</h4>
                        <p className="text-slate-400 text-sm font-bold mb-6 uppercase tracking-wider">{t("registration_upload_desc")}</p>
                        <input type="file" className="hidden" id="resume-upload" />
                        <label htmlFor="resume-upload" className="px-8 py-3 bg-white text-blue-600 font-black rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition-all cursor-pointer inline-block uppercase italic text-sm tracking-widest">
                          CHOOSE FILE
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-8">{t("reg_pref_title")}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_industry_label")}</label>
                          <div className="relative group">
                            <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <select className="w-full pl-16 pr-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold appearance-none cursor-pointer">
                              <option>{t("cat_manufacturing")}</option>
                              <option>{t("auto_126")}</option>
                              <option>{t("cat_retail_sales")}</option>
                              <option>{t("cat_healthcare")}</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-slate-400 ml-4 italic">{t("reg_location_label")}</label>
                          <div className="relative group">
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                            <input type="text" placeholder="e.g. Pune, Maharashtra" className="w-full pl-16 pr-8 py-5 bg-slate-50/50 border-none rounded-2xl focus:ring-4 focus:ring-blue-100 transition-all font-bold placeholder:text-slate-300" required />
                          </div>
                        </div>
                        <div className="md:col-span-2 p-6 bg-slate-50/50 rounded-2xl flex items-center gap-4">
                          <div className="h-10 w-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                             <Check className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-bold text-slate-600 leading-tight uppercase italic opacity-60">
                            {t("reg_verify_text")}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-8 flex gap-4">
                    {step > 1 && (
                      <button 
                        type="button" 
                        onClick={prev}
                        className="py-5 px-8 rounded-2xl border-2 border-slate-100 text-slate-400 font-black uppercase italic tracking-widest hover:bg-slate-50 transition-all"
                      >
                        {t("reg_back")}
                      </button>
                    )}
                    <button type="submit" className="flex-1 py-5 bg-blue-premium text-white rounded-3xl font-black uppercase italic tracking-widest text-lg md:text-xl shadow-2xl shadow-blue-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                      {step === 3 ? t("reg_complete") : t("reg_next_step")}
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </motion.form>
              </AnimatePresence>
            </div>

            <p className="text-center mt-12 text-slate-400 font-bold uppercase tracking-widest text-xs">
              Already a member? <Link to="/login" className="text-blue-600 hover:underline underline-offset-8">Login here</Link>
            </p>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
