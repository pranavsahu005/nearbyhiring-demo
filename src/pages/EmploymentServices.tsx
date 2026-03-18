
import React from "react";
import { ShieldAlert, Ban, UserCheck, Mail, Info, FileWarning, AlertTriangle, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const EmploymentServices = () => {
  const { language } = useLanguage();
  useScrollReveal();
  
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "रोजगार सेवाएँ" : "Employment Services"}
        subtitle="Employment Support Services Policy"
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Employment Services"
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
                Employment Support{" "}
                <br/><span className="text-blue-600 italic">Services Policy</span>
              </h1>
              <div className="flex flex-col items-center gap-2">
                <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm">Eduskill Employment Division (Eduskill Technologies Private Limited)</p>
                <div className="px-4 py-1 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mt-2">
                  Version: July 01, 2025
                </div>
              </div>
            </div>

            <div className="space-y-16">
              {/* About */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-16 w-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-inner">
                    <Info className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">About Our Services</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-8 text-sm font-normal italic">
                  <p>
                    Accepting consulting fees or payments for employment services is deemed <span className="text-red-500 font-black italic uppercase underline decoration-2 underline-offset-4">undesirable</span> at Eduskill Employment Division (Eduskill Technologies Private Limited). We strictly prohibit any form of monetary transaction prior to, during, or following the provision of employment support.
                  </p>
                  <p>
                    We are dedicated to conducting our business with ethical standards and integrity, ensuring that no bribes, consultancy fees, or any other form of payment occur within our own business or supply chain. We hold all of our vendors, contractors, suppliers, and other business partners in our supply chain to the same rigorous standards.
                  </p>
                </div>
              </section>

              {/* Scope */}
              <section className="bg-blue-900 p-6 md:p-10 rounded-3xl text-white relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="flex items-center gap-6 mb-12 relative z-10">
                  <div className="h-16 w-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-blue-400">
                    <ShieldAlert className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tight relative z-10">Scope of Policy</h2>
                </div>
                <div className="space-y-8 relative z-10">
                  <p className="text-slate-400 text-xl font-medium leading-relaxed">
                    This policy on Non-commercial employment support is applicable to all directors and employees within the group, as well as individuals working within our supply chain, such as agents, contractors, and external consultants.
                  </p>
                  <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl flex gap-6 items-start">
                    <Ban className="h-8 w-8 text-red-500 shrink-0" />
                    <p className="text-red-200 font-bold text-lg">
                      Any employee who violates this employment policy will be subject to disciplinary measures, which may lead to termination for severe misconduct. Any individual who is not an employee who violates this employment policy may have their contract terminated promptly and may face legal consequences.
                    </p>
                  </div>
                </div>
              </section>

              {/* Prohibition */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-16 w-16 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 shadow-inner">
                    <AlertTriangle className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">Prohibition & Reporting</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-8 text-sm font-normal italic">
                  <p>
                    All directors, employees, vendors, external agencies, and channels have a collective responsibility to prevent, ban, and report any form of commercial engagement in employment within our business or supply chains. Employees must refrain from engaging in any behavior that could potentially result in or imply a violation of this policy.
                  </p>
                  <p>
                    Should workers have any belief or suspicion regarding any commercial engagement, such as the execution of an employment bond or the preservation of school transcripts, in the functioning of Eduskill Employment Division (Eduskill Group) or any of our suppliers or contractors, they are required to instantly inform a director. Our policy on reporting misconduct will encompass such reports.
                  </p>
                  <p>
                    If an employee is uncertain about whether a specific action, the treatment of workers in general, or their working conditions at any level of our supply chains constitutes any type of violation of employment policies, they must report it to a director or contact us at <a href="mailto:info@eduskill.org" className="text-blue-600 hover:underline">info@eduskill.org</a>.
                  </p>
                </div>
              </section>

              {/* Contact CTA */}
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl overflow-hidden group" data-reveal>
                <div className="flex flex-col md:flex-row items-center gap-12">
                   <div className="flex-1 space-y-6">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">Report a Violation</h3>
                      <p className="text-slate-500 text-lg font-bold leading-relaxed">
                        If you have encountered any violation of employment policies within our organization or supply chain, please report it immediately.
                      </p>
                      <a 
                        href="mailto:info@eduskill.org" 
                        className="inline-flex items-center gap-3 text-blue-600 font-black text-xl uppercase italic tracking-widest hover:gap-6 transition-all"
                      >
                        <Mail className="h-6 w-6" />
                        Report Now
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
