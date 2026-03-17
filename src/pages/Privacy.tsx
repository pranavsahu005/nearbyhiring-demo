import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Lock, Eye, ShieldCheck, Database, Cookie, Share2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
  useScrollReveal();
  const { t, language } = useLanguage();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "गोपनीयता नीति" : "Privacy Policy"}
        subtitle={language === 'hi' ? "व्यक्तिगत जानकारी की सुरक्षा" : "Protection of personal information"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "गोपनीयता नीति" : "Privacy"}
      />
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3 italic uppercase">
                Privacy <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-slate-500 text-sm font-bold italic">Protection of personal information — Since 01.07.2025</p>
            </div>

            <div className="space-y-8">
              <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Our Commitment</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p className="font-bold text-base">
                    Eduskill Group and Eduskill Technologies Private Limited (Eduskill Technologies Pvt. Ltd.) acknowledges the significance of privacy to users and is fully dedicated to safeguarding the personal information that may be disclosed while accessing and utilizing the materials on the Eduskill Group website.
                  </p>
                  <p className="font-bold text-base">
                    We prioritize the proper management of your data, ensuring that we respect your particular personal rights and your right to control your own information. Your personal data and documents are collected, processed, and used in accordance with the current legislation, specifically the Indian data protection directives and their implementation in national law.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                    <Cookie className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">1. Anonymous Usage & Cookies</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p className="font-bold text-base">Our website allows for anonymous usage, as it does not require any personal information. Usage data is never associated with you in scenarios described in our Cookie Policy.</p>
                  <p className="font-bold text-base">We utilize Google Universal Analytics to examine how our website is used. This persistent cookie consists of a combination of random integers that allows the browser to recognize our website. IP anonymization is enabled on our website.</p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-50 rounded-2xl text-purple-600 shadow-sm">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">2. Social Networks & External Links</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p className="font-bold text-base">
                    The website features links to several social networks. Clicking the link is the only way to establish a connection with the social network's web server. No usage data will be transmitted to the social network until the associated link is clicked.
                  </p>
                  <p className="font-bold text-base">
                    Data protection on linked websites is the responsibility of the respective partner companies.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600 shadow-sm">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">3. Data Subject Rights</h2>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                  <p className="font-bold text-base">
                    You have the ability to exercise your rights as a data subject to access, correct, delete, or restrict the stored data, as well as withdraw any consent you have given to us at any time.
                  </p>
                  <p className="font-bold text-base">
                    To inquire about data protection, please get in touch with our Data Protection Officer by sending an email with the subject line "Data Support Unit" to info@eduskill.org.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
