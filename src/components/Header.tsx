import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, X, Globe, ChevronDown, 
  Briefcase, Newspaper, Users, 
  Shield, FileText, Info, 
  Mic2, Wrench, Send, Layout,
  Crown, GraduationCap, Building2, UserCircle2, Settings,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const megaMenuItems = {
  about: {
    label: "nav_about",
    featured: {
      title: "nav_about_feat_title",
      desc: "nav_about_feat_desc",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    sections: [
      {
        title: "Who We Are",
        items: [
          { label: "nav_our_story", sub: "Learn about our vision, mission and values", to: "/about", icon: Info },
          { label: "nav_our_team", sub: "Meet the experts building the future of hiring", to: "/our-team", icon: Users },
        ]
      },
      {
        title: "Work With Us",
        items: [
          { label: "nav_partnership", sub: "Grow your business with our strategic relations", to: "/partnership", icon: Building2 },
          { label: "nav_join_us", sub: "Start your career journey with NearbyHiring", to: "/join-us", icon: Briefcase },
        ]
      }
    ]
  },
  jobs: {
    label: "nav_jobs",
    featured: {
      title: "nav_jobs_feat_title",
      desc: "nav_jobs_feat_desc",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    sections: [
      {
        title: "Search Jobs",
        items: [
          { label: "nav_latest_openings", sub: "Explore hundreds of verified local jobs", to: "/jobs", icon: Briefcase },
          { label: "nav_upcoming_drive", sub: "Join our next mass recruitment drive", to: "/upcoming-drive", icon: Building2 },
        ]
      },
      {
        title: "Career Growth",
        items: [
          { label: "nav_employment_services", sub: "Professional career matching and guidance", to: "/employment-services", icon: Wrench },
          { label: "nav_employability", sub: "Test your skills with industry standards", to: "/employability", icon: GraduationCap },
        ]
      }
    ]
  },
  media: {
    label: "nav_media",
    featured: {
      title: "nav_media_feat_title",
      desc: "nav_media_feat_desc",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    },
    sections: [
      {
        title: "Newsroom",
        items: [
          { label: "nav_media_presence", sub: "Our mentions and features in major media", to: "/media", icon: Layout },
          { label: "nav_news_events", sub: "Latest happening inside NearbyHiring", to: "/news-events", icon: Newspaper },
        ]
      },
      {
        title: "Insights",
        items: [
          { label: "nav_blogs", sub: "Expert tips for your next interview", to: "/blogs", icon: Newspaper },
        ]
      }
    ]
  },
  resources: {
    label: "nav_resources",
    featured: {
      title: "nav_res_feat_title",
      desc: "nav_res_feat_desc",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    sections: [
      {
        title: "Career Tools",
        items: [
          { label: "nav_resume_builder", sub: "Create a world-class resume with AI", to: "/ai-resume-builder", icon: FileText },
          { label: "nav_mock_interview", sub: "Practice interviewing with our AI bot", to: "/ai-mock-interview", icon: Mic2 },
          { label: "nav_cover_letter", sub: "Generate persuasive cover letters fast", to: "/ai-cover-letter", icon: Send },
        ]
      },
      {
        title: "Safety & Legal",
        items: [
          { label: "nav_policies", sub: "Read our commitment to your privacy", to: "/privacy", icon: Shield },
        ]
      }
    ]
  }
};

const loginRoles = [
  { label: "nav_student_jobseeker", to: "/login?role=student", icon: GraduationCap, color: "text-blue-500", bgColor: "bg-blue-600" },
  { label: "nav_admin_login", to: "/login?role=admin", icon: Shield, color: "text-red-500", bgColor: "bg-red-600" },
  { label: "nav_associate_partner", to: "/login?role=associate", icon: Building2, color: "text-amber-500", bgColor: "bg-amber-600" },
  { label: "nav_govt_authority", to: "/login?role=govt", icon: Shield, color: "text-orange-500", bgColor: "bg-orange-600" },
  { label: "nav_iti_institution", to: "/login?role=iti", icon: UserCircle2, color: "text-emerald-500", bgColor: "bg-emerald-600" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileSubmenu(null);
    }
  }, [menuOpen]);

  // Standardize glass effect to only trigger on scroll for all pages
  const showGlass = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        showGlass ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group z-[101]">
            <div className="relative overflow-hidden h-9 w-9 rounded-lg">
              <img
                src="/assets/img/logo.webp"
                alt="NearbyHiring"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.classList.add("bg-primary"); }}
              />
            </div>
            <span
              className={`text-xl font-black tracking-tight ${showGlass ? "text-slate-900" : "text-white"}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Nearby<span className={showGlass ? "text-primary" : "text-primary"}>Hiring</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-bold transition-all rounded-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] ${
                  isActive 
                  ? (showGlass ? "text-primary bg-primary/5" : "text-white bg-white/20") 
                  : (showGlass ? "text-slate-600 hover:text-primary hover:bg-slate-50" : "text-white hover:text-white hover:bg-white/10")
                }`
              }
            >
              {t("nav_home")}
            </NavLink>

            {Object.entries(megaMenuItems).map(([key, section]) => (
              <div 
                key={key} 
                className="group"
                onMouseEnter={() => setActiveMega(key)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-all rounded-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${
                    activeMega === key
                      ? (showGlass ? "text-primary bg-primary/5" : "text-white bg-white/20")
                      : (showGlass ? "text-slate-600 hover:text-primary hover:bg-slate-50" : "text-white hover:text-white hover:bg-white/10")
                  }`}
                >
                  {t(section.label)}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-500 ${activeMega === key ? "rotate-180 text-primary" : ""}`} />
                </button>
              </div>
            ))}
          </nav>

          {/* Crossover-Style Mega Menus (Dark Theme, Compact, Stable) */}
          <div 
            className={`fixed top-[72px] left-0 right-0 z-[101] transition-all duration-700 ease-out-expo pointer-events-none ${
              activeMega ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {/* Dark Backdrop */}
            <div 
              className={`fixed inset-0 bg-black/40 backdrop-blur-sm -z-10 transition-opacity duration-700 pointer-events-auto ${activeMega ? "opacity-100" : "opacity-0 invisible"}`} 
              onMouseEnter={() => setActiveMega(null)}
            />
            
            <div className="container mx-auto px-10 pointer-events-auto">
              <div className="relative w-full max-w-[1200px] mx-auto pt-2">
                {Object.entries(megaMenuItems).map(([key, section]) => (
                  <div 
                    key={key}
                    onMouseEnter={() => setActiveMega(key)}
                    onMouseLeave={() => setActiveMega(null)}
                    className={`absolute top-0 left-0 right-0 bg-gradient-to-br from-[#E1DFEA] via-white to-[#E1DFEA]/90 backdrop-blur-2xl rounded-2xl shadow-[0_40px_80px_-15px_rgba(30,58,138,0.15)] border border-white/40 overflow-hidden flex min-h-[340px] transition-all duration-700 ease-out-expo ${
                      activeMega === key ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.99] translate-y-1 pointer-events-none"
                    }`}
                  >
                    {/* Left: Compact Nav links */}
                    <div className="flex-1 p-10 grid grid-cols-2 gap-x-12 gap-y-8 bg-gradient-to-br from-white/[0.02] to-transparent">
                      {section.sections.map((subSection) => (
                        <div key={subSection.title} className="space-y-5">
                          <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-900/40 px-3">
                            {subSection.title}
                          </h5>
                          <div className="space-y-1.5">
                            {subSection.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5"
                                onClick={() => setActiveMega(null)}
                              >
                                <div className="p-2 rounded-lg bg-blue-50 text-blue-400 group-hover/item:bg-primary group-hover/item:text-white transition-all shadow-sm">
                                  <item.icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-[13px] font-black text-slate-800 group-hover/item:text-primary transition-colors flex items-center justify-between uppercase italic tracking-tighter">
                                    {t(item.label)}
                                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary" />
                                  </h4>
                                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight font-bold italic truncate max-w-[180px]">
                                    {item.sub}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Featured Section (Dark & Premium) */}
                    <div className="w-[340px] relative flex flex-col justify-end p-10 overflow-hidden group/feat border-l border-white/10">
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={section.featured.image} 
                          alt="" 
                          className="w-full h-full object-cover opacity-90 brightness-[0.4] group-hover/feat:scale-110 group-hover/feat:brightness-[0.5] transition-all duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      
                      <div className="relative z-10 space-y-5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/90 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20">
                          <Crown className="h-3 w-3 fill-white animate-pulse" />
                          Recommended
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                            {t(section.featured.title)}
                          </h3>
                          <p className="text-[12px] text-white/90 font-bold italic leading-relaxed drop-shadow-sm">
                            {t(section.featured.desc)}
                          </p>
                        </div>

                        <Link 
                          to={section.sections[0].items[0].to} 
                          className="flex items-center justify-center gap-3 w-full bg-white text-primary hover:bg-primary hover:text-white px-6 py-3.5 rounded-xl text-[11px] font-black uppercase italic tracking-widest transition-all shadow-2xl group/btn"
                        >
                          {t("nav_learn_more")}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Utilities */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all hover:bg-white hover:shadow-sm ${
                showGlass ? "border-slate-200 text-slate-600" : "border-white/10 text-white/90"
              }`}
            >
              <img src="/assets/img/translator.png" alt="Translate" className="h-5 w-5 object-contain" />
              <span className="text-[10px] font-black uppercase tracking-wider">{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <div className="h-6 w-[1px] bg-slate-200 mx-1 opacity-50" />

            <div className="relative group/login">
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                showGlass ? "text-slate-700 hover:text-primary hover:bg-slate-50" : "text-white/90 hover:text-white"
              }`}>
                {t("nav_login")}
                <ChevronDown className="h-4 w-4 transition-transform group-hover/login:rotate-180" />
              </button>
              <div className="absolute right-0 top-full pt-3 w-72 opacity-0 invisible translate-y-2 group-hover/login:opacity-100 group-hover/login:visible group-hover/login:translate-y-0 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {loginRoles.map((r) => (
                      <Link
                        key={r.to}
                        to={r.to}
                        onClick={() => setMenuOpen(false)}
                        className="flex flex-col items-center gap-2.5 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <div className={`h-11 w-11 rounded-xl ${r.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <r.icon className="h-5.5 w-5.5 text-white" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-primary text-center leading-tight">
                          {t(r.label)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/register"
              className="bg-primary text-white text-sm font-black px-6 py-2.5 rounded-xl shadow-[0_10px_20px_-5px_rgba(27,94,247,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              {t("nav_register")}
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 z-[101]">
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className={`p-2.5 rounded-xl border transition-all ${
                showGlass ? "border-slate-200 bg-white shadow-sm" : "border-white/20 bg-white/10 text-white"
              }`}
            >
              <img src="/assets/img/translator.png" alt="Translate" className="h-6 w-6 object-contain" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2.5 rounded-xl transition-all ${
                showGlass ? "bg-slate-900 text-white" : "bg-white/10 text-white"
              }`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-[85%] h-full bg-white shadow-2xl transition-transform duration-500 flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 pt-24 flex-1 overflow-y-auto custom-scrollbar">
            <div className="space-y-6">
              <NavLink 
                to="/" 
                end 
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `block text-base font-black p-4 rounded-xl transition-all ${isActive ? "bg-primary/5 text-primary" : "text-slate-800 active:bg-slate-50"}`}
              >
                {t("nav_home")}
              </NavLink>

              <div className="space-y-2">
                <p className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Categories</p>
                {Object.entries(megaMenuItems).map(([key, section]) => (
                  <div key={key} className="border-b border-slate-50 last:border-0 overflow-hidden">
                    <button 
                      onClick={() => setMobileSubmenu(mobileSubmenu === key ? null : key)}
                      className="flex items-center justify-between w-full p-4 rounded-xl active:bg-slate-50 transition-all"
                    >
                      <span className={`font-black ${mobileSubmenu === key ? "text-primary" : "text-slate-800"}`}>{t(section.label)}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileSubmenu === key ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${mobileSubmenu === key ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden space-y-4 px-4 pt-2">
                        {section.sections.map((subSection) => (
                          <div key={subSection.title} className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              {subSection.title}
                            </p>
                            <div className="space-y-1">
                              {subSection.items.map((item) => (
                                <Link 
                                  key={item.label} 
                                  to={item.to} 
                                  onClick={() => setMenuOpen(false)}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 text-slate-600"
                                >
                                  <item.icon className="h-4 w-4 text-slate-400" />
                                  <span className="text-sm font-bold">{t(item.label)}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Account Access</p>
                <div className="grid grid-cols-1 gap-2 p-2">
                  {loginRoles.map((role) => (
                    <Link 
                      key={role.label} 
                      to={role.to} 
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 active:scale-95 transition-all"
                    >
                      <div className="p-2.5 rounded-xl bg-white shadow-sm">
                        <role.icon className={`h-5 w-5 ${role.color}`} />
                      </div>
                      <span className="text-sm font-bold text-slate-800">{t(role.label)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
            <Link 
              to="/register" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-white font-black shadow-lg"
            >
              {t("nav_register")}
            </Link>
            <button 
              onClick={() => { setLanguage(language === "en" ? "hi" : "en"); setMenuOpen(false); }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-black shadow-sm"
            >
              <img src="/assets/img/translator.png" alt="Translate" className="h-6 w-6 object-contain" />
              Switch to {language === "en" ? "हिन्दी" : "English"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
