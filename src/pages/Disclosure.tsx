import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Info, ShieldCheck, Eye, Lock, RefreshCw, Briefcase, HeartHandshake, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Disclosure = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "प्रकटीकरण विवरण" : "Disclosure Statement"}
        subtitle={language === 'hi' ? "Disclosure Statement" : "Disclosure Statement"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Disclosure" : "Disclosure"}
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 italic uppercase">
                Disclosure <span className="text-blue-600">Statement</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest">Eduskill Employment Division (Eduskill Group)</p>
              <p className="text-slate-400 text-sm mt-4 font-black">RELEASE: JULY 01, 2025</p>
            </div>

            <div className="space-y-12">
              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <Info className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">1. Overview</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-bold text-lg">
                  <p>
                    Eduskill Employment Division and Eduskill Group are dedicated to offering our clients transparent and ethical talent management services. This Disclosure Policy provides an overview of the data we gather, how we utilize it, and how we share it in relation to training, employment, career coaching, and management.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">2. Data Metrics</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Personal Info", desc: "Name, contact details, DOB, and ID details.", icon: UserCheck },
                    { title: "Professional Info", desc: "Resume, experience, skills, and pay expectations.", icon: Briefcase },
                    { title: "Assessments", desc: "Skill tests, personality, and aptitude outcomes.", icon: ShieldCheck },
                    { title: "Documents", desc: "Transcripts, PAN, Aadhar, and photos.", icon: FileText },
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                      <h3 className="font-black text-slate-900 mb-4 uppercase italic tracking-tight text-xl">{item.title}</h3>
                      <p className="text-lg font-bold text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 shadow-sm">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">3. Supplementary Notes</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 p-8 bg-purple-600 rounded-3xl text-white shadow-lg">
                    <Briefcase className="h-10 w-10 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-2xl font-black uppercase italic italic tracking-tight mb-2">No Placement Promises</p>
                      <p className="text-lg font-bold opacity-80">We cannot promise deployment success as it depend on several proficiency element and market condition.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 p-8 bg-green-600 rounded-3xl text-white shadow-lg">
                    <HeartHandshake className="h-10 w-10 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-2xl font-black uppercase italic italic tracking-tight mb-2">Zero-Cost Assistance</p>
                      <p className="text-lg font-bold opacity-80">We grant access to employment-related services without charge—no payment necessary before, during, or after.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-blue-premium p-12 rounded-[4rem] shadow-2xl text-center text-white relative overflow-hidden" data-reveal>
                <h2 className="text-3xl font-black uppercase italic tracking-tight mb-6">Concerns?</h2>
                <p className="text-xl font-bold mb-10 opacity-70">If you have any inquiries regarding our policy, kindly reach out to us.</p>
                <a 
                  href="mailto:info@eduskill.org" 
                  className="group inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-3xl hover:translate-x-4 transition-all duration-500"
                >
                  <Mail className="h-6 w-6" />
                  Connect Now
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

import { UserCheck, FileText } from "lucide-react";
export default Disclosure;
