import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, Instagram, Linkedin, Youtube, 
  MapPin, Phone, Mail, Twitter, Github,
  ArrowUp, HelpCircle
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
    LINKS: [
      { label: t("nav_media"), to: "/media" },
      { label: t("nav_terms"), to: "/terms" },
      { label: t("nav_privacy"), to: "/privacy" },
      { label: t("footer_disclosure_statement"), to: "/disclosure" },
      { label: t("footer_data_protection_policy"), to: "/data-protection" },
    ],
    POLICIES: [
      { label: t("footer_employment_services_policy"), to: "/employment-services" },
      { label: t("footer_recruitment_data_protection_policy"), to: "/recruitment-data" },
      { label: t("footer_payment_refund_policy"), to: "/payment-refund" },
      { label: t("nav_faq"), to: "/faq" },
    ],
    DISCOVER: [
      { label: t("nav_latest_openings"), to: "/jobs" },
      { label: t("nav_news_events"), to: "/news-events" },
      { label: t("nav_our_team"), to: "/our-team" },
      { label: t("nav_upcoming_drive"), to: "/upcoming-drive" },
      { label: "Support", to: "/support" },
    ],
    COMMUNITY: [
      { label: t("nav_join_us"), to: "/join-us" },
      { label: t("nav_employability"), to: "/employability" },
      { label: t("nav_register"), to: "/register" },
      { label: t("nav_partnership"), to: "/partnership" },
    ],
    AI_CAREER_TOOLS: [
      { label: t("nav_blogs"), to: "/blogs" },
      { label: t("nav_resume_builder"), to: "/ai-resume-builder" },
      { label: t("nav_mock_interview"), to: "/ai-mock-interview" },
      { label: t("nav_cover_letter"), to: "/ai-cover-letter" },
    ]
  };

  return (
    <footer className="footer-bg text-white">
      <div className="container mx-auto px-6 pt-16 pb-28 md:pb-16 relative z-10">
        
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
        <div className="flex flex-col items-center mb-10">
          <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-3 shadow-2xl transition-transform hover:scale-110 border border-white/10">
            <img src="/assets/img/logo.webp" alt="Nearby Hiring" className="w-6 h-6 object-contain brightness-0 invert" />
          </div>
          <h2 className="text-xl font-black tracking-tighter text-white mb-1 uppercase italic">Nearby<span className="text-blue-600">Hiring</span></h2>
          <p className="text-white/50 text-[10px] max-w-sm text-center italic font-bold">{t("footer_brand_tagline") || "Nearby Hiring is a Premium Career Platform focused on India's growth."}</p>
        </div>

        {/* Link Sections Grid */}
        <div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-16">
          <div className="space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">LINKS</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] font-bold text-white/70 hover:text-white transition-colors italic tracking-tighter">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">POLICIES</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.POLICIES.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] font-bold text-white/70 hover:text-white transition-colors italic tracking-tighter">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">DISCOVER</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.DISCOVER.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] font-bold text-white/70 hover:text-white transition-colors italic tracking-tighter">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">COMMUNITY</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.COMMUNITY.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] font-bold text-white/70 hover:text-white transition-colors italic tracking-tighter">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">AI TOOLS</h4>
             <ul className="grid grid-cols-1 gap-4">
                {sections.AI_CAREER_TOOLS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[13px] font-bold text-white/70 hover:text-white transition-colors italic tracking-tighter">
                      {link.label}
                    </Link>
                  </li>
                ))}
             </ul>
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
                 <span className="text-[13px] font-bold text-white/80">career@eduskill.org</span>
              </div>
           </div>

           <div className="flex flex-wrap gap-3">
              <a href="https://x.com/eduskilltech" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/eduskill/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/eduskilltechnologies" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/eduskilltech/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@eduskilltech" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-500 hover:-translate-y-1 transition-all">
                <Youtube className="h-5 w-5" />
              </a>
           </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
           <p className="text-[11px] font-medium text-white/40 text-center">© 2026 Nearby Hiring (Nearby Hiring Group). All rights reserved. Last updated March 2026</p>
           
           <div className="flex flex-col sm:flex-row items-center gap-4">
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
