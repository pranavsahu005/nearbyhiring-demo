import { useState } from "react";
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {t('contact_eyebrow')}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed font-medium">
            {t('contact_subheader')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[38%_62%] gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left - Contact Info (Blue Gradient & Glassmorphism) */}
          <div 
            className="bg-gradient-to-br from-[#1B5EF7] to-[#004aad] rounded-[32px] p-8 md:p-12 border border-white/10 shadow-xl space-y-12 text-white relative overflow-hidden flex flex-col h-full"
            data-reveal
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 tracking-tight text-white">{t('contact_info_title')}</h3>
              <p className="text-white leading-relaxed font-medium text-sm opacity-90">
                {t('contact_desc')}
              </p>
            </div>

            <div className="space-y-8 relative z-10 mt-auto">
              <div className="flex gap-5 group">
                <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/30 transition-all shadow-lg shadow-blue-900/20">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white/60 font-bold uppercase text-[10px] tracking-widest mb-1">{t('contact_location_title')}</h4>
                  <p className="text-white text-sm font-bold leading-snug">
                    {t('contact_info_address')}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/30 transition-all shadow-lg shadow-blue-900/20">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white/60 font-bold uppercase text-[10px] tracking-widest mb-1">{t('contact_phone_title')}</h4>
                  <p className="text-white text-lg font-black tracking-tight">+91 9312189789</p>
                  <p className="text-white text-lg font-black tracking-tight">+91 7522802290</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white/30 transition-all shadow-lg shadow-blue-900/20">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white/60 font-bold uppercase text-[10px] tracking-widest mb-1">{t('contact_email_title')}</h4>
                  <p className="text-white text-sm font-bold">info@nearbyhiring.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form Card (White) */}
          <div 
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-slate-100 flex flex-col h-full"
            data-reveal
            data-delay="200"
          >
             <h3 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10 tracking-tight">{t('contact_title')}</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6 text-left flex-grow">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">{t('contact_label_name')}</label>
                    <input 
                      type="text" 
                      placeholder={t('contact_placeholder_name')}
                      className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-slate-700 ml-1">{t('contact_label_email')}</label>
                    <input 
                      type="email" 
                      placeholder={t('contact_placeholder_email')}
                      className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-[13px] font-bold text-slate-700 ml-1">{t('contact_label_subject')}</label>
                 <input 
                   type="text" 
                   placeholder={t('contact_placeholder_subject')}
                   className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                 />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[13px] font-bold text-slate-700 ml-1">{t('contact_label_message')}</label>
                 <textarea 
                   rows={4} 
                   placeholder={t('contact_placeholder_msg')}
                   className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                 />
               </div>

               {/* ReCAPTCHA */}
               <div className="flex justify-center py-2">
                  <div 
                    className="g-recaptcha scale-90 md:scale-100" 
                    data-sitekey="6Le7KkssAAAAAIAG8sUMju9ACTkSEKcxmEriliUr"
                  ></div>
               </div>

               <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#0061DC] hover:bg-blue-700 text-white font-black px-10 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-70 flex items-center gap-2 text-base tracking-tight"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {t('contact_status_loading')}
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        {t('contact_status_success')}
                      </>
                    ) : (
                      t('contact_btn_send')
                    )}
                  </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
