import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Lock, ArrowRight, UserCircle2, Shield, Building2, ChevronDown, GraduationCap, Eye, EyeOff } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";

const Login = () => {
  const { t } = useLanguage();
  useScrollReveal();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") || "student";
  
  const [role, setRole] = useState(initialRole);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const r = searchParams.get("role");
    if (r) setRole(r);
  }, [searchParams]);

  return (
    <MainLayout>
      <div className="auth-bg flex min-h-screen items-center justify-center p-4 pt-24">
        {/* Card */}
        <div className="w-full max-w-md page-enter">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/assets/img/logo.webp" 
                alt="NearbyHiring" 
                className="h-10 w-auto" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Nearby<span className="text-primary">Hiring</span>
              </span>
            </Link>
          </div>

          <div className="auth-card p-6 sm:p-8 mb-6 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-100/50">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-black uppercase italic tracking-tighter mb-2 text-slate-900">{t("login_welcome")}</h1>
              <p className="text-[11px] font-bold text-slate-500 uppercase italic tracking-widest">{t("login_subtitle")}</p>
            </div>

            {/* Role Selection Dropdown (Stabilized) */}
            <div className="space-y-4 mb-6">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest italic ml-1">
                {t("login_select_identity")}
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary z-10">
                  {role === 'admin' ? <Shield className="h-5 w-5" /> : 
                   role === 'associate' ? <Building2 className="h-5 w-5" /> :
                   role === 'govt' ? <Shield className="h-5 w-5 text-orange-500" /> :
                   role === 'iti' ? <GraduationCap className="h-5 w-5 text-green-500" /> :
                   <UserCircle2 className="h-5 w-5" />}
                </div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-primary transition-all appearance-none font-bold italic text-sm shadow-inner relative z-0"
                >
                  <option value="student">{t("nav_student_jobseeker")}</option>
                  <option value="admin">{t("nav_admin_login")}</option>
                  <option value="associate">{t("nav_associate_partner")}</option>
                  <option value="govt">{t("nav_govt_authority")}</option>
                  <option value="iti">{t("nav_iti_institution")}</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-primary transition-colors h-4 w-4 z-10" />
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic ml-1">{t("login_email")}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder={t("login_email_placeholder")} 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary transition-all shadow-inner"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{t("login_password")}</label>
                  <Link to="/forgot-password" title="Forgot Password" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:underline">
                    {t("login_forgot_password")}
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder={t("login_password_placeholder")} 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-12 text-sm font-bold focus:outline-none focus:border-primary transition-all shadow-inner"
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Google reCAPTCHA */}
              <div className="flex flex-col items-center justify-center py-2">
                <div 
                  className="g-recaptcha" 
                  data-sitekey="6Le7KkssAAAAAIAG8sUMju9ACTkSEKcxmEriliUr"
                  data-size="normal"
                ></div>
                <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-green-600 animate-pulse">
                  <Shield className="h-3 w-3" />
                  <span className="uppercase tracking-widest italic">System Secured: Auto-Verification Active</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-premium hover:bg-blue-600 text-white py-4 rounded-2xl text-[11px] font-black uppercase italic tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 group">
                {t("login_sign_in")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative bg-white px-4 text-[9px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                {t("nav_login")} with
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex justify-center gap-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <img src="https://uidisplay.com/assets/img/icon-google.svg" alt="Google" className="h-5 w-5" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </button>
            </div>
          </div>

          <div className="text-center pb-10">
             <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest italic mb-3 opacity-60">New to NearbyHiring?</p>
             <Link 
               to="/register" 
               className="inline-flex items-center gap-2 bg-white border-2 border-slate-100 px-8 py-3 rounded-2xl text-[11px] font-black uppercase italic tracking-widest text-primary shadow-sm hover:shadow-md hover:border-primary/20 transition-all hover:scale-[1.02]"
             >
               {t("login_create_account")}
               <UserCircle2 className="h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
