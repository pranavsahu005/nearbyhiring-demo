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
    <section id="about" className="section-white section-padding-lg">
      <div className="container mx-auto px-4" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[45%_55%]">
          {/* Left */}
          <div>
            <h2 className="font-extrabold" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              {t("contact_title")}
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              {t("contact_desc")}
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-body">{t("contact_info_address")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-body">contact@nearbyhiring.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-body">+91 8103 244 491</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-[20px] bg-white p-8 md:p-10" style={{ boxShadow: "0 8px 40px rgba(27,94,247,0.08)" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t("contact_label_name")}</label>
                <input type="text" required className="form-input w-full rounded-[10px] border-[1.5px] px-4 py-3 text-sm" style={{ borderColor: "hsl(224 50% 92%)" }} placeholder={t("contact_placeholder_name")} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{t("contact_label_email")}</label>
                  <input type="email" required className="form-input w-full rounded-[10px] border-[1.5px] px-4 py-3 text-sm" style={{ borderColor: "hsl(224 50% 92%)" }} placeholder={t("contact_placeholder_email")} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{t("contact_label_phone")}</label>
                  <input type="tel" className="form-input w-full rounded-[10px] border-[1.5px] px-4 py-3 text-sm" style={{ borderColor: "hsl(224 50% 92%)" }} placeholder={t("contact_placeholder_phone")} />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t("contact_label_subject")}</label>
                <select className="form-input w-full rounded-[10px] border-[1.5px] px-4 py-3 text-sm" style={{ borderColor: "hsl(224 50% 92%)" }}>
                  <option>{t("contact_option_general")}</option>
                  <option>{t("contact_option_partnership")}</option>
                  <option>{t("contact_option_support")}</option>
                  <option>{t("contact_option_feedback")}</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t("contact_label_message")}</label>
                <textarea rows={4} required className="form-input w-full rounded-[10px] border-[1.5px] px-4 py-3 text-sm resize-none" style={{ borderColor: "hsl(224 50% 92%)" }} placeholder={t("contact_placeholder_message")} />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-submit flex w-full items-center justify-center gap-2 rounded-[10px] py-3 text-sm font-semibold touch-target disabled:opacity-70"
              >
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "success" && <CheckCircle2 className="h-4 w-4" />}
                {status === "idle" && <Send className="h-4 w-4" />}
                {status === "idle" ? t("contact_status_idle") : status === "loading" ? t("contact_status_loading") : t("contact_status_success")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
