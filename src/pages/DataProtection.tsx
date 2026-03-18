import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ShieldCheck, FileText, Lock, UserCheck, Globe, Shield, Scale, AlertCircle, CheckCircle2, Info, Database, Mail } from "lucide-react";
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
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
                Data Protection{" "}
                <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest">Valid Since July 01, 2025</p>
            </div>

            <div className="space-y-12">
              {/* 1. General */}
              <section className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">1. General</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-normal italic text-sm space-y-4">
                  <p>
                    NearbyHiring (NearbyHiring Employment Division) and NearbyHiring (NearbyHiring technologies private limited) respects your privacy and we consistently adhere to the highest standards of privacy. This Data Protection Notice is intended to delineate how we collect, handle, and safeguard personal data.
                  </p>
                </div>
              </section>

              {/* 2. Purpose & Processing Table */}
              <section className="bg-white overflow-hidden rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                      <FileText className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">2. Purpose & Processing</h2>
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
                        <td className="p-6 text-slate-700">Processing of contacts received</td>
                        <td className="p-6 text-slate-500">Legitimate interest in received contact</td>
                        <td className="p-6 text-slate-500">Name, email, message data</td>
                        <td className="p-6 text-blue-600">3 Years from last contact</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">Direct Marketing</td>
                        <td className="p-6 text-slate-500">Legitimate interest in Customer Relationships</td>
                        <td className="p-6 text-slate-500">Name, Company, Title, Email, Phone</td>
                        <td className="p-6 text-blue-600">3 Years from last update</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">Personalized marketing</td>
                        <td className="p-6 text-slate-500">Consent, legitimate interest</td>
                        <td className="p-6 text-slate-500">Name, Company, Title, Email, Phone</td>
                        <td className="p-6 text-blue-600">3 Years from last contact</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">Statistical analysis</td>
                        <td className="p-6 text-slate-500">Consent, contract</td>
                        <td className="p-6 text-slate-500">Name, email address, title</td>
                        <td className="p-6 text-blue-600">3 Years from last event</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">Conducting research and surveys</td>
                        <td className="p-6 text-slate-500">Consent</td>
                        <td className="p-6 text-slate-500">Name, email address, title</td>
                        <td className="p-6 text-blue-600">3 Years from collection</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">CRM & Statistical Analysis</td>
                        <td className="p-6 text-slate-500">Promoting Relationship</td>
                        <td className="p-6 text-slate-500">Name, Title, Company, Communication data</td>
                        <td className="p-6 text-blue-600">3 Years from update</td>
                      </tr>
                      <tr>
                        <td className="p-6 text-slate-700">Assignment management & invoicing</td>
                        <td className="p-6 text-slate-500">Contractual Relationship</td>
                        <td className="p-6 text-slate-500">Name, email, title, company</td>
                        <td className="p-6 text-blue-600">Duration of Relationship + Accounting period</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3. Legal Basis */}
              <section className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 shadow-sm">
                    <Scale className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">3. Legal Basis</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className="font-normal text-sm italic">
                    The processing of personal data must be based on the legal principles outlined in laws.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">4. Legitimate Interest</h4>
                      <p className="text-xs font-normal text-slate-500 italic">This constitutes a valid legal basis for data processing in situations where the individual is a client or their contact person.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">5. Consent</h4>
                      <p className="text-xs font-normal text-slate-500 italic">Processing is predicated on the individual's specific consent, provided through electronic forms or other direct interactions.</p>
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
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">4. Sources & Transfers</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Sources of Personal Data</h3>
                    <div className="space-y-4">
                      <p className="font-bold text-lg">
                        Personal data is primarily obtained directly from you. We also gather information from strategic and official sources to ensure the best career matching.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                        {[
                          "Direct submission via registration forms and profile updates",
                          "Educational institutions (ITI, Polytechnic, Vocational Centers) for verification",
                          "Government databases and official registries (with explicit consent)",
                          "Professional networking platforms and public career profiles",
                          "Industry-specific skill assessment partners and testing agencies",
                          "Employment exchanges and government-affiliated job portals"
                        ].map((source, i) => (
                          <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold italic text-slate-900">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">5. International Data Transfer</h2>
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
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">6. Protection Measures</h2>
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
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">7. Data Retention Period</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p className="font-bold text-lg">
                    We retain your personal data for the duration necessary for the data processing purposes, unless a legal need mandates a longer retention period. Once the retention period is finished, your personal data is either overwritten in the backup copies and system background or transformed into an unrecognizable form that prevents the identification of an individual.
                  </p>
                </div>
              </section>

              {/* 8. Entitlements */}
              <section className="bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">8. Data Subjects' Entitlements</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { 
                      title: "Right to be informed", 
                      desc: "The data subjects have a right to be informed about what personal data regarding them we process and receive a copy of the data in question." 
                    },
                    { 
                      title: "Right to access", 
                      desc: "Data subjects have the right to request access to their data, assess and verify that the data is treated according to law." 
                    },
                    { 
                      title: "Right to rectification", 
                      desc: "Data subjects have the right to request rectification or correction of their data, in which case we will complete inaccurate or incorrect data promptly." 
                    },
                    { 
                      title: "Right to erasure", 
                      desc: "The data subjects have the right to have all their personal data erased, that is, to be forgotten. This right may be limited by legal obligations." 
                    }
                  ].map((right, idx) => (
                    <div key={idx} className="p-6 md:p-8 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all group duration-500">
                      <div className="flex items-start gap-4">
                        <div className="bg-white p-2 rounded-xl group-hover:bg-blue-500 text-blue-600 group-hover:text-white transition-colors">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-black mb-3 uppercase italic tracking-wider">{right.title}</h4>
                          <p className="text-xs font-normal leading-relaxed opacity-60 group-hover:opacity-100">{right.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 9. Your Rights */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 shadow-sm">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 italic uppercase tracking-tight">9. Your Rights</h2>
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
              <section className="bg-blue-900 p-8 md:p-12 rounded-3xl shadow-xl text-center relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-white">9. Data Protection Officer</h2>
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
