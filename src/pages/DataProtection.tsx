import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ShieldCheck, UserCheck, Globe, FileText, Info, Lock, Database, Mail, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DataProtection = () => {
  const { language } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "डेटा सुरक्षा नीति" : "Data Protection Policy"}
        subtitle="Data Protection Policy"
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Data Protection"
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
              {/* 1. Introduction */}
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

              {/* 2. Purpose & Processing Table */}
              <section className="bg-white overflow-hidden rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">2. Purpose & Processing</h2>
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
                        <td className="p-8 text-slate-600">Processing of contacts received</td>
                        <td className="p-8 text-slate-600">Legitimate interest or consent</td>
                        <td className="p-8 text-slate-600">Name, email, message data</td>
                        <td className="p-8 text-slate-600 text-blue-600">3 Years from last contact</td>
                      </tr>
                      <tr>
                        <td className="p-8 text-slate-600">Direct Marketing</td>
                        <td className="p-8 text-slate-600">Legitimate Interest</td>
                        <td className="p-8 text-slate-600">Name, Email, Phone</td>
                        <td className="p-8 text-slate-600 text-blue-600">3 Years</td>
                      </tr>
                      <tr>
                        <td className="p-8 text-slate-600">CRM & Statistical Analysis</td>
                        <td className="p-8 text-slate-600">Promoting Relationship</td>
                        <td className="p-8 text-slate-600">Name, Title, Company, Communication data</td>
                        <td className="p-8 text-slate-600 text-blue-600">Duration of Relationship</td>
                      </tr>
                      <tr>
                        <td className="p-8 text-slate-600">Invoicing</td>
                        <td className="p-8 text-slate-600">Contractual / Legal</td>
                        <td className="p-8 text-slate-600">Organization Data, TLE info</td>
                        <td className="p-8 text-slate-600 text-blue-600">As per law</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3. Legal Basis */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 shadow-sm">
                    <Scale className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">3. Legal Basis</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className="font-bold text-lg">
                    Data protection legislation mandates that the processing of personal data must be grounded on the legal principles outlined in the Digital Personal Data Policy 2023.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Legitimate Interest</h4>
                      <p className="text-sm font-bold text-slate-500">Serves as a lawful justification for processing, evaluated against data privacy laws to ensure no unjustified risk.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Consent</h4>
                      <p className="text-sm font-bold text-slate-500">Under specific circumstances, only your explicit prior approval allows personal data processing.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Legal Obligation</h4>
                      <p className="text-sm font-bold text-slate-500">Compliance with governmental and regulatory requirements that mandate data processing.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Sources & Transfers */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 shadow-sm">
                    <Database className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">4. Sources & Transfers</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Sources of Personal Data</h3>
                    <p className="font-bold text-lg">
                      Personal data is primarily obtained directly from you. Under some circumstances mandated by laws, we may also gather personal information from external sources, such as official registries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Transfers & Disclosures</h3>
                    <p className="font-bold text-lg">
                      We handle personal data with strict confidentiality and never engage in the unnecessary sale, rental, or disclosure of your personal data to external entities. Personal data is given to the client company only to the extent required for the assignment.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. International Data Transfer */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 shadow-sm">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">5. International Data Transfer</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    Occasionally, the service providers we use may handle personal data in locations outside of India, such as the United States, EU/ETA, and MENA. Personal data will be sent outside of India only if it meets the requirements set by data protection legislation. A portion of the personal data is processed and stored outside of India, and the service providers have made a contractual commitment to ensure a sufficient level of data protection.
                  </p>
                </div>
              </section>

              {/* 6. Protection Measures */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-green-50 rounded-2xl text-green-600 shadow-sm">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">6. Protection Measures</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    We employ suitable technical and organizational measures to safeguard personal data from loss, unauthorized access, and other forms of misuse. Some examples of these precautions include the implementation of firewalls, encryption technology, data backups, and safe computer rooms. Internal measures, including technological and physical access control, limited access credentials, and monitoring rules, are used to control access to your personal data. Only authorized personnel within their designated roles have access to your personal data.
                  </p>
                </div>
              </section>

              {/* 7. Data Retention */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-rose-50 rounded-2xl text-rose-600 shadow-sm">
                    <Lock className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">7. Data Retention Period</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    We retain your personal data for the duration necessary for the data processing purposes, unless a legal need mandates a longer retention period. Once the retention period is finished, your personal data is either overwritten in the backup copies and system background or transformed into an unrecognizable form that prevents the identification of an individual.
                  </p>
                </div>
              </section>

              {/* 8. Your Rights */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 shadow-sm">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">8. Your Rights</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Right to be informed", desc: "Know what data we process and how it is used." },
                    { title: "Right to access", desc: "Receive confirmation and a copy of your data." },
                    { title: "Right to data portability", desc: "Obtain data in a structured, machine-readable format." },
                    { title: "Right to rectification", desc: "Correct inaccurate or incomplete personal data." },
                    { title: "Right to restrict processing", desc: "Limit how your data is processed under specific conditions." },
                    { title: "Right to object", desc: "Object to processing based on legitimate interest or direct marketing." },
                    { title: "Right to erasure", desc: "Request complete deletion of your personal data." },
                    { title: "Right to withdraw consent", desc: "Revoke consent for data processing at any time." },
                  ].map((right, idx) => (
                    <div key={idx} className="p-8 bg-slate-50/50 rounded-3xl border border-slate-100 group hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm hover:shadow-xl hover:-translate-y-2 duration-500">
                      <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight">{right.title}</h3>
                      <p className="text-lg font-bold opacity-60 group-hover:opacity-100">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Contact DPO */}
              <section className="bg-blue-900 p-8 md:p-12 rounded-[3rem] shadow-xl text-white text-center" data-reveal>
                <h2 className="text-2xl font-black uppercase italic tracking-tight mb-4">9. Data Protection Officer</h2>
                <p className="text-white/70 font-bold text-lg mb-6 max-w-2xl mx-auto">
                  Eduskill Employment Division has designated an internal data protection expert. The contact information of the data controller can be reached at:
                </p>
                <a 
                  href="mailto:info@eduskill.org" 
                  className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all text-sm uppercase italic tracking-widest shadow-2xl"
                >
                  <Mail className="h-5 w-5" />
                  info@eduskill.org
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DataProtection;
