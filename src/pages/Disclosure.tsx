import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Info, ShieldCheck, Eye, Lock, RefreshCw, Briefcase, HeartHandshake, Mail, UserCheck, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const Disclosure = () => {
  const { t } = useLanguage();
  useScrollReveal();
  
  return (
    <MainLayout>
      <PageBanner 
        title="Disclosure Statement"
        subtitle="Full transparency on how we manage your career data."
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Disclosure"
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
                Disclosure{" "}
                <span className="text-blue-600">Statement</span>
              </h1>
              <div className="inline-flex flex-col items-center">
                <p className="text-slate-500 font-black italic uppercase tracking-[0.2em] text-sm">Eduskill Employment Division (Eduskill Group)</p>
                <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
                <p className="text-slate-400 text-[10px] mt-4 font-black uppercase tracking-widest">Effective Date: July 01, 2025</p>
              </div>
            </div>

            <div className="space-y-16">
              {/* 1. Overview */}
              <section className="bg-white p-10 md:p-16 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden" data-reveal>
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <Info size={120} />
                </div>
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                    <Info className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">1. Overview</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-bold text-lg italic">
                  <p>
                    Eduskill Employment Division and Eduskill Group and its allied companies are dedicated to offering our clients transparent and ethical talent management services characterized by the utmost integrity and adherence to best business practices. The purpose of this Disclosure Policy is to provide a clear and concise overview of the data we gather, how we utilize it, and how we share it in relation to the services we offer, such as training, employment, career coaching, and management.
                  </p>
                </div>
              </section>

              {/* 2. Data We Collect */}
              <section className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/5 border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">2. Data We Collect</h2>
                </div>
                <p className="text-slate-500 font-bold mb-10 text-lg">To ensure optimal service, we gather information from you. The data provided may encompass the following:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "Personal Info", desc: "Includes name, contact details (address, phone number, email), date of birth, and any other pertinent details required for identification purposes.", icon: UserCheck, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Professional Info", desc: "Includes a resume, employment experience, education, abilities, certifications, and pay expectations.", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
                    { title: "Assessments", desc: "The outcomes of personality, pre-assessment, certification, skills, or aptitude tests via our services or partners.", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { title: "Documents", desc: "Educational transcripts, Social Security number, PAN card, Aadhar card, and passport-size picture for onboarding.", icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
                    { title: "Communication", desc: "A log of your communication with us, including emails, phone calls, and internet activities.", icon: Mail, color: "text-rose-600", bg: "bg-rose-50" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-10 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                      <div className={cn("p-4 rounded-xl w-fit mb-6 transition-transform group-hover:scale-110", item.bg, item.color)}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-black text-slate-900 mb-4 uppercase italic tracking-tight text-xl">{item.title}</h3>
                      <p className="text-sm font-bold text-slate-500 leading-relaxed italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Data We Utilize */}
              <section className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/5 border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-200">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">3. Data We Utilize</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-slate-500 font-bold text-lg italic underline decoration-blue-200 decoration-4 underline-offset-8 mb-8">The information collected is utilized for the following purposes:</p>
                  <div className="grid gap-6">
                    {[
                      "Facilitate the provision of our services, which involve connecting you with prospective companies and offering appropriate training programs.",
                      "Engage in discussions regarding employment prospects, services, exhibitions, and gatherings.",
                      "Customize your experience on our website and tailor our services to your preferences.",
                      "Conduct data analysis to enhance the quality and range of our services and products."
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-dotted border-slate-200">
                        <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</div>
                        <p className="text-sm font-black text-slate-700 italic">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-10 bg-blue-900 rounded-3xl text-white">
                    <h4 className="text-xl font-black uppercase italic tracking-tight mb-6 text-blue-300">Disclosure of Information</h4>
                    <p className="text-blue-100/80 font-bold mb-8 italic">Your personal information will only be shared with third parties if you give us your consent, unless the following circumstances arise:</p>
                    <ul className="space-y-4">
                      {[
                        "We are partnering with employers or recruiters to ensure your successful placement in a job.",
                        "Service providers, such as companies specializing in background checks, aid us in delivering our services.",
                        "We adhere to the law and cooperate with any necessary legal processes.",
                        "We ensure the protection of our own rights, the safety of our users, and the well-being of others."
                      ].map((li, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm font-black italic">
                          <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Your Choices & 5. Protection */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100" data-reveal>
                  <h3 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight mb-8">4. Your Choices</h3>
                  <p className="text-slate-500 font-bold mb-8 italic text-sm">You have options concerning the handling of your information:</p>
                  <ul className="space-y-4">
                    {[
                      "To access and modify your information, please get in touch with us.",
                      "You have the option to decline receiving marketing communications from us.",
                      "You have the option to make a formal request for the deletion of your information (subject to restrictions)."
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-black text-slate-700 italic">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-slate-900 p-10 rounded-3xl shadow-xl text-white" data-reveal>
                  <h3 className="text-2xl font-black italic uppercase tracking-tight mb-8 text-blue-400">5. Data Protection</h3>
                  <p className="text-blue-100/70 font-bold leading-relaxed text-sm italic">
                    We implement measures to safeguard your information against unauthorized access, utilization, disclosure, modification, or eradication. 
                    <br /><br />
                    Your data is securely stored on the <span className="text-white underline decoration-blue-500">Godaddy server</span>, following the highest standards of data security. By adopting our regulations, you also agree to abide by the data security measures implemented by Godaddy.
                  </p>
                </section>
              </div>

              {/* 7. Supplementary Disclosures */}
              <section className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/5 border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-rose-600 rounded-2xl text-white shadow-lg shadow-rose-200">
                    <HeartHandshake className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">7. Supplementary Disclosures</h2>
                </div>
                <div className="grid gap-6">
                  {[
                    { title: "Training Programs", text: "We provide info regarding completion rates, job placement results, and other pertinent data." },
                    { title: "Job Placement", text: "We cannot provide a promise of employment placement. Success is contingent upon proficiency, expertise, and market conditions." },
                    { title: "Career Management", text: "Users are required to maintain continuous communication with our staff for guidance without any charges." },
                    { title: "Partnership", text: "We collaborate directly with renowned brands to provide training and assessment without involving any intermediaries." },
                    { title: "Uncompensated Assistance", text: "We grant access to the majority of our employment-related services without charge—no payment necessary before, during, or after." },
                    { title: "Paid Programs", text: "Campus, Hybrid, or Virtual paid programs incur distinct expenses. Online payments must be submitted through our portal." },
                    { title: "Community Building", text: "Our community development initiatives are provided at no cost, and include assistance with employment." },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group">
                      <span className="text-sm font-black uppercase italic tracking-widest text-blue-600 shrink-0 md:w-48 group-hover:translate-x-2 transition-transform">{item.title}</span>
                      <p className="text-sm font-bold text-slate-500 italic flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer Policies */}
              <div className="grid md:grid-cols-2 gap-8 italic">
                <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="font-black text-blue-900 uppercase tracking-widest text-xs mb-4">6. Policy Modifications</h4>
                  <p className="text-[13px] font-bold text-blue-700/70">
                    Periodically, we may revise this policy. The most recent version was revised on July 01, 2025.
                  </p>
                </div>
                <div className="p-10 bg-slate-900 rounded-3xl text-white flex flex-col justify-center items-center text-center">
                  <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-blue-400">8. Get In Touch</h4>
                  <p className="text-[13px] font-bold opacity-70 mb-6">If you have any inquiries regarding our policy, kindly reach out.</p>
                  <a href="mailto:info@eduskill.org" className="text-lg font-black italic hover:text-blue-400 transition-colors">info@eduskill.org</a>
                </div>
              </div>

              {/* CTA */}
              <section className="bg-gradient-to-br from-blue-600 to-indigo-800 p-12 md:p-20 rounded-3xl md:rounded-[2.5rem] shadow-2xl text-center text-white relative overflow-hidden" data-reveal>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                    Need More <span className="text-blue-200">Clarity?</span>
                  </h2>
                  <p className="text-xl font-bold mb-12 opacity-80 italic max-w-xl mx-auto">
                    Our compliance team is ready to answer any specific questions about our disclosure standards.
                  </p>
                  <a 
                    href="mailto:info@eduskill.org" 
                    className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 font-black uppercase italic tracking-widest rounded-[2rem] hover:scale-105 transition-all duration-500 shadow-2xl shadow-blue-900/40"
                  >
                    <Mail className="h-6 w-6" />
                    Contact Support
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
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

export default Disclosure;
