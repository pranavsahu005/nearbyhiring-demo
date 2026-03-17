import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Lock, ArrowRight, UserCircle2, Shield, Building2, ChevronDown, GraduationCap } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";

const Login = () => {
  const { t } = useLanguage();
  useScrollReveal();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") || "student";
  
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [role, setRole] = useState(initialRole);

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
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                  {role === 'admin' ? <Shield className="h-5 w-5" /> : 
                   role === 'associate' ? <Building2 className="h-5 w-5" /> :
                   role === 'govt' ? <Shield className="h-5 w-5 text-orange-500" /> :
                   role === 'iti' ? <GraduationCap className="h-5 w-5 text-green-500" /> :
                   <UserCircle2 className="h-5 w-5" />}
                </div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-primary transition-all appearance-none font-bold italic text-sm shadow-inner"
                >
                  <option value="student">{t("nav_student_jobseeker")}</option>
                  <option value="admin">{t("nav_admin_login")}</option>
                  <option value="associate">{t("nav_associate_partner")}</option>
                  <option value="govt">{t("nav_govt_authority")}</option>
                  <option value="iti">{t("nav_iti_institution")}</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-primary transition-colors h-4 w-4" />
              </div>
            </div>

            {/* Toggle */}
            <div className="flex p-1.5 bg-slate-100/80 rounded-2xl mb-6 backdrop-blur-sm border border-slate-200/50">
              <button 
                className={`flex-1 py-2.5 text-[11px] font-black uppercase italic tracking-widest rounded-xl transition-all ${method === "phone" ? "bg-white text-primary shadow-md scale-[1.02]" : "text-slate-500 hover:text-slate-800"}`}
                onClick={() => setMethod("phone")}
              >
                Phone / OTP
              </button>
              <button 
                className={`flex-1 py-2.5 text-[11px] font-black uppercase italic tracking-widest rounded-xl transition-all ${method === "email" ? "bg-white text-primary shadow-md scale-[1.02]" : "text-slate-500 hover:text-slate-800"}`}
                onClick={() => setMethod("email")}
              >
                Email & Password
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {method === "phone" ? (
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input 
                    type="tel" 
                    placeholder="Enter 10-digit mobile number" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary transition-all"
                    required 
                  />
                </div>
              ) : (
                <>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary transition-all"
                      required 
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary transition-all"
                      required 
                    />
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:underline">Forgot password?</a>
                  </div>
                </>
              )}

              <button type="submit" className="w-full bg-blue-premium hover:bg-blue-600 text-white py-4 rounded-2xl text-[11px] font-black uppercase italic tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 group">
                {method === "phone" ? "Send OTP" : "Login Securely"}
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

          <p className="text-center text-sm text-slate-600 font-bold drop-shadow-sm pb-10">
            Don't have an account?{" "}
            <Link to="/register" className="font-black text-primary hover:underline italic uppercase tracking-wider">
              Register Free
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
