import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ShieldCheck, UserCheck, Globe, FileText, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DataProtection = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "डेटा सुरक्षा नीति" : "Data Protection Policy"}
        subtitle={language === 'hi' ? "Data Protection Policy" : "Data Protection Policy"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Data Protection" : "Data Protection"}
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 italic uppercase">
                Data Protection <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest">Valid Since July 01, 2025</p>
            </div>

            <div className="space-y-12">
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <Info className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">1. Introduction</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className="font-bold text-lg">
                    At Eduskill Employment Division, we prioritize the trustworthiness of our data handling practices, ensuring cautious and transparent treatment of your personal information while respecting your privacy. When handling your personal data, we adhere closely to the Digital Personal Data Protection Regulations (DPDP) in India and other data protection laws.
                  </p>
                  <p className="font-bold text-lg">
                    Our goal is to consistently follow best practices in data protection. This data protection statement outlines the methods by which we gather, handle, and safeguard the personal information of our B2B clients.
                  </p>
                </div>
              </section>

              <section className="bg-white overflow-hidden rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">Purpose & Processing</h2>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100/50">
                        <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-500 italic">Purpose</th>
                        <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-500 italic">Legal Basis</th>
                        <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-500 italic">Data Types</th>
                        <th className="p-8 text-xs font-black uppercase tracking-widest text-slate-500 italic">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 uppercase italic tracking-tight font-black text-xs">
                      <tr>
                        <td className="p-8 text-slate-600">Direct Marketing</td>
                        <td className="p-8 text-slate-600">Legitimate Interest</td>
                        <td className="p-8 text-slate-600">Name, Email, Phone</td>
                        <td className="p-8 text-slate-600 text-blue-600">3 Years</td>
                      </tr>
                      <tr>
                        <td className="p-8 text-slate-600">CRM</td>
                        <td className="p-8 text-slate-600">Promoting Relationship</td>
                        <td className="p-8 text-slate-600">Name, Title, Company</td>
                        <td className="p-8 text-slate-600 text-blue-600">Duration of Relationship</td>
                      </tr>
                      <tr>
                        <td className="p-8 text-slate-600">Invoicing</td>
                        <td className="p-8 text-slate-600">Contractual / Legal</td>
                        <td className="p-8 text-slate-600">Organization Data</td>
                        <td className="p-8 text-slate-600 text-blue-600">As per law</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 shadow-sm">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">International Data Transfer</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    Occasionally, the service providers we use may handle personal data in locations outside of India, such as the United States, EU/ETA, and MENA. Personal data will be sent outside of India only if it meets the requirements set by data protection legislation.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 shadow-sm">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">Protection Measures</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    We employ suitable technical and organizational measures to safeguard personal data from loss, unauthorized access, and other forms of misuse. Some examples of these precautions include the implementation of firewalls, encryption technology, data backups, and safe computer rooms.
                  </p>
                </div>
              </section>

              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 shadow-sm">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">Your Rights</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Right to be informed", desc: "Know what data we process." },
                    { title: "Right to access", desc: "Receive a copy of your data." },
                    { title: "Right to rectification", desc: "Correct inaccurate data." },
                    { title: "Right to erasure", desc: "The 'right to be forgotten'." },
                    { title: "Right to object", desc: "Stop processing for personal reasons." },
                    { title: "Right to withdraw consent", desc: "Withdraw permission at any time." },
                  ].map((right, idx) => (
                    <div key={idx} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500">
                      <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{right.title}</h3>
                      <p className="text-lg font-bold opacity-60 group-hover:opacity-100">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataProtection;
