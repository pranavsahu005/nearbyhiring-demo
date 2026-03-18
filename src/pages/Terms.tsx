import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Shield, FileText, Gavel, Copyright, Globe, Lock, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Terms = () => {
  useScrollReveal();
  const { language } = useLanguage();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "नियम और शर्तें" : "Terms and Conditions"}
        subtitle={language === 'hi' ? "उपयोगकर्ता समझौता" : "User Agreement"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "नियम और शर्तें" : "Terms"}
      />
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
                Terms and{" "}
                <span className="text-blue-600">Conditions</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm">Last updated: July 01, 2025</p>
            </div>

            <div className="space-y-8">
              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Welcome</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    <strong>Greetings and welcome to the Eduskill Employment Division (Eduskill Group) website.</strong>
                  </p>
                  <p>
                    This website is the property of Eduskill Group & its allied companies duly registered with Ministry of Corporate Affairs, Government of India under the provision of Indian Companies Act. Eduskill Technologies Private Limited, a company incorporated in India under the registration number U80211UP2013PTC061607. The business's Head office is located in Prayagraj, Uttar Pradesh, India whereas other offices in Mumbai, Maharashtra and Noida, Uttar Pradesh. Users of this website are obligated to adhere to the subsequent conditions of use. It is advised to thoroughly review these terms before to proceeding further.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-orange-50 rounded-2xl text-orange-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Disclaimers</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    Eduskill Employment Division (Eduskill Group) and its employees absolve themselves of all responsibility, financial loss, or any danger resulting from the utilization and execution of the information presented on this website. Eduskill Employment Division (Eduskill Group) offers this website as a resource for anyone seeking information on training, employment, and career management related to Eduskill Employment Division (Eduskill Group) principles and approaches.
                  </p>
                  <p>
                    Eduskill Employment Division (Eduskill Group) disclaims all liability for any adverse outcomes arising from the incorrect utilization or application of the information provided herein or in any manner related to the content contained on this website.
                  </p>
                  <p>
                    Eduskill Employment Division (Eduskill Group) assumes no responsibility and explicitly denies any duty for any damages resulting from the use, reference to, or reliance on any material found on this website. Although this website is regularly updated, it is important to note that new facts, information, or future developments may impact the topics discussed. Therefore, there is no assurance that the material provided on this website is accurate, comprehensive, and current.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-teal-50 rounded-2xl text-teal-600">
                    <Copyright className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Copyrights & Trademarks</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    The content on this site, including text, graphics, logos, button icons, photos, and software, is owned by Eduskill Employment Division (Eduskill Group) and is safeguarded by copyright laws in India and elsewhere.
                  </p>
                  <p>
                    The terms "Eduskill Employment Division (Eduskill Group)", "Eduskill Group", and other visual representations, symbols, and names used to identify services are legally protected trademarks owned by Eduskill Group, its subsidiary companies, authorized licensees, or intellectual property holders across the globe.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-green-50 rounded-2xl text-green-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Use of Website Contents</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>The use of website content is permitted under the following conditions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The copyright notice must be included in all copies, along with this permission notice.</li>
                    <li>The documents may only be used for informational, non-commercial, or personal purposes. They may not be copied or posted on any network computer or broadcast in any media.</li>
                    <li>No modifications may be made to any documents. Any use for purposes other than those explicitly allowed by law is strictly forbidden and may lead to significant legal and criminal consequences.</li>
                  </ul>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-600">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Data Protection</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    Data protection refers to the measures and practices implemented to safeguard sensitive information against unauthorized access, use, or disclosure. The personal information submitted to Eduskill Employment Division (Eduskill Group) via this website will be utilized only in compliance with our Privacy Policy. Kindly peruse this document attentively prior to proceeding with your exploration of our website. By disclosing your personal information to us, you are giving your consent for its utilization in compliance with our Privacy policy.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-600">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Third-party Websites</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    The hyperlinks on this website will redirect you away from the Eduskill Employment Division (Eduskill Group)'s website. Eduskill Employment Division (Eduskill Group) or Eduskill Group does not have authority over the connected sites, and therefore, Eduskill Employment Division (Eduskill Group) or Eduskill Group and its allied companies cannot be held responsible for the content of any linked site, any link within a linked site, or any modifications or updates made to such sites.
                  </p>
                  <p>
                    Eduskill Employment Division (Eduskill Group) and Eduskill Group allied companies are not liable for webcasting or any other type of transmission received from any connected site. Eduskill Employment Division (Eduskill Group) is offering these links solely for your convenience, and the presence of any link does not indicate Eduskill Employment Division (Eduskill Group)'s sponsorship of the website.
                  </p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-red-50 rounded-2xl text-red-600">
                    <Gavel className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Jurisdiction</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed text-sm space-y-3 font-normal italic">
                  <p>
                    Jurisdiction refers to the legal authority or power that a court or other legal body has to hear and decide a case. The terms and conditions of this agreement are subject to Indian law and any disputes related to these terms or the website, whether contractual or otherwise, will be resolved in Indian courts.
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

export default Terms;
