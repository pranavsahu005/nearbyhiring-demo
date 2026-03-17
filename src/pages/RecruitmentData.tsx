
import React from "react";
import { ShieldCheck, FileText, Lock, Database, Search, Users, ClipboardCheck, Info, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const RecruitmentData = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "भर्ती डेटा सुरक्षा" : "Recruitment Data Protection"}
        subtitle={language === 'hi' ? "Recruitment Data Protection" : "Recruitment Data Protection"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Recruitment Data" : "Recruitment Data"}
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
                Recruitment Data <span className="text-blue-600">Protection Policy</span>
              </h2>
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-slate-500 font-bold italic text-xs uppercase tracking-widest">Effective since July 01, 2025</span>
              </div>
            </div>

            <div className="grid gap-8">
              <section className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                    <Info className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic">1. Introduction</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-bold italic text-sm space-y-4">
                  <p>
                    At Eduskill Employment Division, we prioritize the trustworthiness of our data handling practices, ensuring cautious and transparent treatment of your personal information while respecting your privacy.
                  </p>
                  <p>
                    When handling your personal data, we adhere closely to the Digital Personal Data Protection Regulations (DPDP) in India and other data protection laws. Our goal is to consistently follow best practices in data protection.
                  </p>
                  <p>
                    This statement outlines the methods by which we gather, handle, and safeguard the personal information of our B2B clients and candidates during recruitment processes.
                  </p>
                </div>
              </section>

              <section className="bg-blue-premium p-8 md:p-12 rounded-[3.5rem] text-white relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-400 border border-white/10">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase italic relative z-10">2. Data Analysis & Processing</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    {[
                        { title: "Processing of Contacts", reason: "Legitimate interest in received contact", data: "Name, email, message data" },
                        { title: "Direct Marketing", reason: "Establishing customer relationships", data: "Name, Company, Title, Phone" },
                        { title: "Statistical Analysis", reason: "Legitimate interest & research", data: "Relationship data, communication" },
                        { title: "Invoicing", reason: "Contractual relationship management", data: "Organization details, TLE info" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                            <h4 className="text-blue-400 font-black uppercase italic text-xs mb-2 tracking-tighter">{item.title}</h4>
                            <p className="text-white text-xs font-bold italic mb-3 opacity-60 leading-tight">{item.reason}</p>
                            <div className="text-white/40 text-[10px] uppercase font-black tracking-widest">{item.data}</div>
                        </div>
                    ))}
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                            <Lock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic">3. Protection Measures</h3>
                    </div>
                    <p className="text-slate-500 font-bold italic text-sm leading-relaxed mb-6">
                        We employ technical measures like firewalls, encryption, and data backups. Only authorized personnel within their responsibilities access your data.
                    </p>
                    <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-blue-600 text-xs font-black uppercase italic tracking-wider text-slate-600 shadow-sm">
                        Secured by Godaddy Enterprise Servers
                    </div>
                </section>

                <section className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-slate-100" data-reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-50 rounded-xl text-green-600">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic">4. Retention Policy</h3>
                    </div>
                    <ul className="space-y-3 text-xs font-bold italic text-slate-500 uppercase tracking-widest list-none p-0">
                        <li className="flex items-center gap-2"><span className="h-1 w-4 bg-green-400 rounded-full" /> 3 Years from last contact</li>
                        <li className="flex items-center gap-2"><span className="h-1 w-4 bg-green-400 rounded-full" /> 3 Years from data collection</li>
                        <li className="flex items-center gap-2"><span className="h-1 w-4 bg-green-400 rounded-full" /> Statutory periods for invoicing</li>
                    </ul>
                </section>
              </div>

              <div className="bg-blue-premium rounded-[3.5rem] p-10 text-center text-white relative overflow-hidden" data-reveal>
                <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl" />
                <div className="relative z-10">
                    <h2 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Exercise Your DPDP Rights</h2>
                    <p className="text-white/50 text-sm font-bold italic mb-8 max-w-xl mx-auto">
                        Right to inform, access, rectification, erasure, and portability. Requests are free and addressed within statutory timelines.
                    </p>
                    <a 
                    href="mailto:info@eduskill.org" 
                    className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all text-sm uppercase italic tracking-widest shadow-2xl"
                    >
                    <Mail className="h-5 w-5" />
                    Contact DPO Unit
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RecruitmentData;
