
import React from "react";
import { ShieldAlert, Ban, UserCheck, Mail, Info, FileWarning } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const EmploymentServices = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "रोजगार सेवाएँ" : "Employment Services"}
        subtitle={language === 'hi' ? "Employment Services" : "Employment Services"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Employment Services" : "Employment Services"}
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-24 text-center" data-reveal>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
                Employment Support <br/><span className="text-blue-600 italic">Services Policy</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <p className="text-slate-500 font-bold text-lg">Eduskill Employment Division</p>
                <div className="px-4 py-1 bg-blue-premium text-white rounded-full text-xs font-black uppercase tracking-widest mt-2">
                  Version: July 01, 2025
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <section className="bg-white p-12 md:p-20 rounded-[5rem] shadow-2xl shadow-blue-100/50 border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-16 w-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
                    <Info className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">About Our Services</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8 text-xl font-medium">
                  <p>
                    Accepting consulting fees or payments for employment services is deemed <span className="text-red-500 font-black italic uppercase underline decoration-2 offset-4">undesirable</span> at Eduskill Employment Division. We strictly prohibit any form of monetary transaction prior to, during, or following the provision of employment support.
                  </p>
                  <p>
                    We are dedicated to conducting our business with ethical standards and integrity, ensuring that no bribes occur within our own business or supply chain. We hold all of our partners to the same rigorous standards.
                  </p>
                </div>
              </section>

              <section className="bg-blue-premium p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="flex items-center gap-6 mb-12 relative z-10">
                  <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-blue-400">
                    <ShieldAlert className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tight">Scope of Policy</h2>
                </div>
                <div className="space-y-8 relative z-10">
                  <p className="text-slate-400 text-xl font-medium leading-relaxed">
                    This policy is applicable to all directors and employees, as well as individuals working within our supply chain, such as agents, contractors, and external consultants.
                  </p>
                  <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl flex gap-6 items-start">
                    <Ban className="h-8 w-8 text-red-500 shrink-0" />
                    <p className="text-red-200 font-bold text-lg">
                      Any employee who violates this employment policy will be subject to disciplinary measures, leading to termination for severe misconduct.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-white rounded-[5rem] p-12 md:p-20 border border-slate-100 shadow-xl overflow-hidden group" data-reveal>
                <div className="flex flex-col md:flex-row items-center gap-12">
                   <div className="flex-1 space-y-6">
                      <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">Prohibition & Reporting</h3>
                      <p className="text-slate-500 text-lg font-bold leading-relaxed">
                        All directors and agents have a collective responsibility to prevent and report any form of commercial engagement in employment within our business.
                      </p>
                      <a 
                        href="mailto:info@eduskill.org" 
                        className="inline-flex items-center gap-3 text-blue-600 font-black text-xl uppercase italic tracking-widest hover:gap-6 transition-all"
                      >
                        <Mail className="h-6 w-6" />
                        Report a Violation
                      </a>
                   </div>
                   <div className="h-48 w-48 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <FileWarning className="h-20 w-20 text-blue-600" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};


export default EmploymentServices;
