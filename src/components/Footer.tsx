import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, Instagram, Linkedin, Youtube, 
  MapPin, Phone, Mail, Twitter, Github,
  ArrowUp
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = {
    USEFUL_LINKS: [
      { label: t("nav_media"), to: "/media" },
      { label: t("nav_terms"), to: "/terms" },
      { label: t("nav_privacy"), to: "/privacy" },
      { label: t("footer_disclosure_statement"), to: "/disclosure" },
      { label: t("footer_data_protection_policy"), to: "/data-protection" },
      { label: t("footer_employment_services_policy"), to: "/employment-services" },
      { label: t("footer_recruitment_data_protection_policy"), to: "/recruitment-data" },
      { label: t("footer_payment_refund_policy"), to: "/payment-refund" },
    ],
    DISCOVER: [
      { label: t("nav_latest_openings"), to: "/jobs" },
      { label: t("nav_news_events"), to: "/news-events" },
      { label: t("nav_our_team"), to: "/our-team" },
      { label: t("nav_upcoming_drive"), to: "/upcoming-drive" },
      { label: t("footer_support"), to: "/support" },
      { label: t("nav_join_us"), to: "/join-us" },
      { label: t("nav_employability"), to: "/employability" },
      { label: t("nav_faq"), to: "/faq" },
      { label: t("nav_register"), to: "/register" },
      { label: t("nav_partnership"), to: "/partnership" },
      { label: t("nav_blogs"), to: "/blogs" },
    ],
    AI_CAREER_TOOLS: [
      { label: t("nav_resume_builder"), to: "/ai-resume-builder" },
      { label: t("nav_mock_interview"), to: "/ai-mock-interview" },
      { label: t("nav_cover_letter"), to: "/ai-cover-letter" },
    ]
  };

  return (
    <footer className="footer-bg text-white">
      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* Top Newsletter / Divider */}
        <div className="flex flex-col items-center mb-16 px-4">
           <p className="text-white/60 text-sm mb-6 text-center">Join 10,000+ candidates getting scholarships, networking events and career related information.</p>
           <div className="w-full max-w-2xl bg-white rounded-2xl md:rounded-full p-1.5 flex flex-col md:flex-row shadow-2xl overflow-hidden">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent px-6 py-4 md:py-3 text-slate-900 outline-none text-base min-w-0" 
              />
              <button className="bg-blue-600 text-white px-8 py-4 md:py-3 rounded-xl md:rounded-full font-bold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
           </div>
        </div>

        {/* Brand Block Centered */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl transition-transform hover:scale-110">
            <img src="/assets/img/logo.webp" alt="ITI-Eduskill" className="w-10 h-10 object-contain" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white mb-2">ITI-Eduskill</h2>
          <p className="text-white/60 text-sm max-w-md text-center">{t("footer_brand_tagline") || "ITI-Eduskill is a Premium Career Platform focused on India's growth."}</p>
        </div>

        {/* Link Sections Grid - 3 large columns */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-1 space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">{t("footer_links_title")}</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.USEFUL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">{t("footer_discover_title")}</h4>
             <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-3">
                {sections.DISCOVER.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors leading-tight block">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">{t("footer_ai_tools_title")}</h4>
             <ul className="space-y-4">
                {sections.AI_CAREER_TOOLS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">{t("footer_contact_title")}</h4>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-full bg-white/5 border border-white/10"><Phone className="h-4 w-4 text-blue-400" /></div>
                   <span className="text-[13px] font-bold text-white/80">+91 9312189789 | 7522802290</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-full bg-white/5 border border-white/10"><Mail className="h-4 w-4 text-blue-400" /></div>
                   <span className="text-[13px] font-bold text-white/80">{t("footer_career_email")}</span>
                </div>
                <div className="flex gap-4 pt-2">
                  {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-all">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
             </div>
          </div>
        </div>

        {/* Address & Contact Bar */}
        <div className="grid md:grid-cols-3 gap-12 items-start py-12 border-t border-white/10 mb-8">
           <div className="flex gap-4 group">
             <MapPin className="h-5 w-5 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
             <div className="space-y-1">
               <p className="text-[13px] leading-relaxed text-white/70">{t("footer_addr_noida")}</p>
             </div>
           </div>
           
           <div className="flex gap-4 group">
             <MapPin className="h-5 w-5 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
             <div className="space-y-1">
               <p className="text-[13px] leading-relaxed text-white/70">{t("footer_addr_mumbai")}</p>
             </div>
           </div>

           <div className="flex gap-4 group">
             <MapPin className="h-5 w-5 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
             <div className="space-y-1">
               <p className="text-[13px] leading-relaxed text-white/70">{t("footer_addr_prayagraj")}</p>
             </div>
           </div>
        </div>

        {/* Contact & Social Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
           <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6">
              <div className="flex items-center gap-3">
                 <div className="p-2 rounded-full bg-white/5 border border-white/10"><Phone className="h-4 w-4 text-blue-400" /></div>
                 <span className="text-[13px] font-bold text-white/80">+91 9312189789 | 7522802290 | 8840612519</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="p-2 rounded-full bg-white/5 border border-white/10"><Mail className="h-4 w-4 text-blue-400" /></div>
                 <span className="text-[13px] font-bold text-white/80">info@nearbyhiring.com</span>
              </div>
           </div>

           <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[11px] font-medium text-white/40">© 2026 ITI-Eduskill (ITI-Eduskill Group). All rights reserved. Last updated March 2026</p>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                 <span className="text-[11px] font-bold text-white/60">{t("footer_made_in_house")}</span>
                 <a 
                   href="https://github.com/pranavsahu005" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-[11px] font-black text-white hover:text-blue-400 transition-colors group"
                 >
                   <Github className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                   {t("footer_pranav_sahu")}
                 </a>
              </div>
           </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-24 right-6 md:right-10 z-[90] p-4 rounded-2xl bg-primary text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 ${
            showScrollTop ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible pointer-events-none"
          }`}
          aria-label="Back to Top"
        >
          <ArrowUp className="h-6 w-6" />
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse -z-10 blur-xl opacity-50" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
