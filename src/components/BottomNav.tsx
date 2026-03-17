import { Link, useLocation } from "react-router-dom";
import { Home, Layout, Sparkles, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BottomNav = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { icon: Home, label: "nav_home", path: "/" },
    { icon: Layout, label: "nav_media", path: "/media" },
    { icon: Sparkles, label: "nav_jobs", path: "/jobs" },
    { icon: User, label: "nav_login", path: "/login" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      <div className="bg-white/95 backdrop-blur-2xl border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-[24px] px-8 py-5 flex items-center justify-between pointer-events-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-2 transition-all group no-underline"
            >
              <div className={`
                p-2.5 rounded-full transition-all duration-500 flex items-center justify-center
                ${isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110 -translate-y-1" 
                  : "bg-slate-100/80 text-slate-500 group-hover:bg-slate-200 group-hover:text-primary"}
              `}>
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`
                text-[9px] font-black uppercase italic tracking-[0.15em] leading-none transition-all
                ${isActive ? "text-primary opacity-100" : "text-slate-400 opacity-80"}
              `}>
                {t(item.label).split("/")[0].trim().split(" ")[0] || t(item.label)}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
