
import React from "react";
import { ShieldCheck, FileText, Lock, Database, Search, Users, ClipboardCheck, Info, Mail, UserCheck, Scale, Globe, Eye, Settings } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const RecruitmentData = () => {
  const { language } = useLanguage();
  useScrollReveal();
  
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "भर्ती डेटा सुरक्षा" : "Recruitment Data Protection"}
        subtitle="Recruitment Data Protection Policy"
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Recruitment Data"
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
                Recruitment Data{" "}
                <span className="text-blue-600">Protection Policy</span>
              </h2>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm">Eduskill Employment Division (Eduskill Technologies Private Limited)</p>
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white rounded-full border border-slate-100 shadow-sm mt-4">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-slate-500 font-bold italic text-xs uppercase tracking-widest">Effective since 01.07.2025</span>
              </div>
            </div>

            <div className="grid gap-8">
              {/* 1. Introduction */}
              <section className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                    <Info className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">1. Introduction</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-normal italic text-sm space-y-4">
                  <p>
                    At Eduskill Employment Division, ensuring the safeguarding of your privacy is of utmost importance. We prioritize the establishment of trust by handling your personal data with caution and transparency, while also respecting your privacy rights. When handling your personal data, we comply with the Digital Personal Data Protection, India and General Data Protection Regulation and other data protection laws, and we consistently adhere to the highest standards of privacy.
                  </p>
                  <p>
                    Eduskill Employment Division, a division of Eduskill Technologies Private Limited, utilizes this Data Protection Notice to outline the methods by which we gather, handle, and safeguard personal data during the recruitment and onboarding processes for employees, as well as in collaboration with our employment partners around the country.
                  </p>
                </div>
              </section>

              {/* 2. Data Processing */}
              <section className="bg-blue-900 p-6 md:p-10 rounded-2xl text-white relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl text-blue-400 border border-white/10">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase italic relative z-10">2. Purposes of Data Processing</h3>
                </div>
                <div className="relative z-10 space-y-6">
                  <p className="text-white font-semibold italic text-sm">
                    We exclusively gather and handle personal data solely for explicitly defined objectives. The following data may be processed:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "The candidate's name and contact information",
                      "The candidate's email address",
                      "Details of Pan Card and Aadhar Card at onboarding",
                      "Information provided in the job application or CV",
                      "Language skills, education, abilities and qualifications",
                      "Video interviews, interview notes, and references",
                      "Assessments of suitability and personality",
                      "Credit and security reports"
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 text-white text-xs font-bold italic flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mt-6">
                    <h4 className="text-blue-300 font-black uppercase italic text-xs mb-2 tracking-wider">Recruitment Communication</h4>
                    <p className="text-slate-200 text-xs font-bold italic">
                      Contact details including permanent and current address, email address, phone number, WhatsApp number, and social media mobile number.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Legal Purposes */}
              <section className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
                    <Scale className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">3. Legal Purposes</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                  <p className="font-bold text-sm italic">
                    Data protection legislation mandates that the processing of personal data must be grounded on the legal principles outlined in the Digital Personal Data Policy 2023.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Legitimate Interest</h4>
                      <p className="text-xs font-bold text-slate-500 italic">Serves as a lawful justification for processing employment applications and assessing candidates.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Consent</h4>
                      <p className="text-xs font-bold text-slate-500 italic">Processing contingent upon explicit consent, including talent community participation and onboarding documentation.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Legal Obligation</h4>
                      <p className="text-xs font-bold text-slate-500 italic">Compliance with governmental and regulatory requirements mandating data processing.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4 & 5: Sources + Transfers */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                      <Search className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic">4. Sources of Data</h3>
                  </div>
                  <p className="text-slate-500 font-normal italic text-sm leading-relaxed mb-6">
                    Personal data is primarily obtained directly from individuals. Under some circumstances mandated by laws, we may also gather personal information from external sources, such as official registries.
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
                      <li key={i} className="flex items-start gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] font-black italic text-slate-600 uppercase tracking-wider">
                        <div className="h-1 w-1 rounded-full bg-blue-600 mt-1 shrink-0" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic">5. Transfers & Disclosures</h3>
                  </div>
                  <div className="space-y-6 text-slate-500 font-normal italic text-sm leading-relaxed">
                    <div>
                      <h4 className="text-slate-900 font-black uppercase mb-2">5.1 Personal data transfers</h4>
                      <p>A data transfer occurs when the data controller (referred to as Eduskill Group in this case) provides personal data to a third party for their independent use. Eduskill Group has the ability to transmit data to the client company only to the amount required for the assignment.</p>
                      <p className="mt-2 text-slate-500">The customer firm must belong to either the Eduskill Employment Division or Eduskill Technologies Private Limited companies. If you desire to apply for a different position within the group, your personal information can be transmitted to the new firm within the group.</p>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black uppercase mb-2">5.2 Personal data disclosures</h4>
                      <p>Personal data disclosure occurs when a data controller shares personal data with a third party who does not treat the data for their own purposes. For instance, when a specific business procedure, such the assessment of suitability, is delegated to an external entity.</p>
                      <p className="mt-2 text-primary font-bold">A portion of the personal data is processed and stored outside of India, such as when service providers are situated outside of India. Secured by Godaddy Enterprise Servers.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic">6. Technical Measures</h3>
                  </div>
                  <p className="text-slate-500 font-normal italic text-sm leading-relaxed">
                    We ensure the security of your personal data by implementing suitable technical and organizational measures including firewalls, encryption techniques, backup copies, and secure data rooms. Only authorized personnel, such as workers and employers, have access to your personal data in accordance with their designated roles.
                  </p>
                </section>

                <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-rose-50 rounded-xl text-rose-600">
                      <Settings className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic">7. Automated Decision-making</h3>
                  </div>
                  <p className="text-slate-500 font-normal italic text-sm leading-relaxed">
                    It refers to the process of using computer algorithms and artificial intelligence to make decisions without human intervention. Automated decision-making is not involved in the processing of your personal data at Eduskill Employment Division or Eduskill Group. No decisions are made without human involvement.
                  </p>
                </section>
              </div>

              {/* 8. Data Retention */}
              <section className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-50 rounded-xl text-green-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase italic">8. Data Retention Period</h3>
                </div>
                <p className="text-slate-500 font-normal italic text-sm leading-relaxed">
                  We retain your personal data for the duration necessary for the data processing purposes, unless a legal need mandates a longer retention period. Once the retention period is finished, your personal data is either overwritten in the backup copies and system background or transformed into an unrecognizable form. The candidate profile, job application, and CV are automatically removed from the system three years after the individual's most recent update.
                </p>
              </section>

              {/* 9. Data Subject Rights */}
              <section className="bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">9. Data Subject Rights</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "9.1 Right to Information", desc: "You are entitled to receive information regarding handling of your personal data in a clear and easily available manner. This privacy notice facilitates your comprehension of our procedures." },
                    { title: "9.2 Access Rights", desc: "You are entitled to receive confirmation of the personal data we process about you. You may assess and verify that the data is treated according to law and obtain a duplicate." },
                    { title: "9.3 Data Portability", desc: "Obtain personal information you shared with us in a structured, machine-readable format and transfer this data to another entity if you choose." },
                    { title: "9.4 Right to Rectification", desc: "Request correction of inaccurate personal data pertaining to you and the addition of any insufficient personal data promptly." },
                    { title: "9.5 Right to Restrict Processing", desc: "Limit processing under specific circumstances such as correctness questioning, illegal processing objection, or establishing legal claims." },
                    { title: "9.6 Right to Object", desc: "Object to processing based on public interest, official authority, or legitimate interests. Direct marketing objection is absolute and requires no specific reasons." },
                    { title: "9.7 Right to Erasure", desc: "Individuals possess the right to be forgotten, which entails the complete erasure of their personal data from our systems when no longer required." },
                    { title: "9.8 Withdrawal of Consent", desc: "Revoke consent at any moment; processing will cease unless there is another legal justification, such as a legal requirement." },
                    { title: "9.9 Regulatory Grievance", desc: "Entitlement to lodge a formal grievance with a regulatory body if you perceive our protocols are not in compliance. The Data Protection Ombudsman is the authority." },
                    { title: "9.10 Payment for Data", desc: "Exercising rights typically does not require payment. If multiple duplicates are requested, a fee corresponding to expenses may be needed in advance." }
                  ].map((right, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1 duration-500 group">
                      <h4 className="text-sm font-black mb-2 uppercase italic tracking-tight">{right.title}</h4>
                      <p className="text-xs font-bold opacity-60 group-hover:opacity-90">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-normal italic text-slate-500">
                    <strong className="font-black text-slate-900">9.11 Timelines:</strong> We promptly address all requestsEnsuring a maximum response time of one month. For complex cases, an extension of up to 3 months may be required with thorough explanation for the delay.
                  </p>
                </div>
              </section>

              {/* 10 & 11: DPDP + Contact */}
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden" data-reveal>
                <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter shadow-sm">10. Digital Personal Data Protection</h2>
                  <div className="grid md:grid-cols-2 gap-10 text-left">
                    <div>
                      <h4 className="text-blue-300 font-black uppercase italic text-sm mb-4">Complaint Mechanism</h4>
                      <p className="text-slate-300 text-xs font-bold italic leading-relaxed">
                        To make a complaint with the supervisory authority, please refer to the website of the Office of the Data Protection Ombudsman at meity.gov.in for additional information regarding the Digital Personal Data Protection Act 2023.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-black uppercase italic text-sm mb-4">Controller Appointment</h4>
                      <p className="text-slate-300 text-xs font-bold italic leading-relaxed">
                        The data controller is Eduskill Group. Eduskill Group, as a retail company, establishes the objectives and criteria for handling the personal data of its workers, acting as the primary data controller.
                      </p>
                    </div>
                  </div>
                  <div className="p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 text-left">
                     <h4 className="text-white font-black uppercase italic text-sm mb-4">Internal Data Protection Expert</h4>
                     <p className="text-white/60 text-xs font-bold italic leading-relaxed mb-6">
                       Eduskill Employment Division and Eduskill Group have designated an internal expert as their data protection officer. The DPO oversees handling, provides guidance, and serves as a point of contact for inquiries.
                     </p>
                     <a 
                      href="mailto:info@eduskill.org" 
                      className="inline-flex items-center gap-3 px-8 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-white hover:text-blue-600 transition-all text-xs uppercase italic tracking-widest"
                    >
                      <Mail className="h-4 w-4" />
                      Contact DPO Unit: info@eduskill.org
                    </a>
                  </div>
                  <div className="pt-8 border-t border-white/5 text-left">
                    <h3 className="text-lg font-black text-white uppercase italic mb-4">11. Revisions to the Data Protection Declaration</h3>
                    <p className="text-white/70 text-xs font-bold italic leading-relaxed">
                      Our privacy practices are always being enhanced, and as a result, this privacy notice will be periodically updated. Updates may result from modifications in legislation. We advise you to revisit this page in order to stay updated on any potential alterations. If necessary, we may also notify you directly.
                    </p>
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

export default RecruitmentData;
