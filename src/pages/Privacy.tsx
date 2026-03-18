import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Lock, Eye, ShieldCheck, Database, Cookie, Share2, Mail, Newspaper, Building, UserCheck, Link2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Privacy = () => {
  useScrollReveal();
  const { language } = useLanguage();
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
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
                Privacy{" "}
                <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm">Protection of personal information — Since 01.07.2025</p>
            </div>

            <div className="space-y-8">
              {/* Our Commitment */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Our Commitment</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-4 font-normal italic">
                  <p className="font-bold text-base">
                    Eduskill Group and Eduskill Technologies Private Limited (Eduskill Technologies Pvt. Ltd.) acknowledges the significance of privacy to users and is fully dedicated to safeguarding the personal information that may be disclosed while accessing and utilizing the materials on the Eduskill Group website.
                  </p>
                  <p className="font-bold text-base">
                    We prioritize the proper management of your data, ensuring that we respect your particular personal rights and your right to control your own information. Your personal data and documents are collected, processed, and used in accordance with the current legislation, specifically the Indian data protection directives and their implementation in national law. Eduskill Group and Eduskill Technologies Pvt. Ltd. have the authority to modify this privacy statement in accordance with updated legal norms and regulations.
                  </p>
                </div>
              </section>

              {/* 1. Anonymous Usage & Cookies */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                    <Cookie className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">1. Anonymous Usage & Cookies</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-4 font-normal italic">
                  <p className="font-bold text-base">Our website allows for anonymous usage, as it does not require any personal information. Usage data is never associated with you in the following scenarios.</p>
                  
                  <h3 className="text-lg font-black text-slate-800 mt-6">1.1 Cookies</h3>
                  <p className="font-bold text-base">Please refer to our Cookie Policy.</p>

                  <h3 className="text-lg font-black text-slate-800 mt-6">1.2 Google Universal Analytics</h3>
                  <p className="font-bold text-base">
                    This website utilizes Google Universal Analytics, a web analytics service provided by Google Inc. ("Google"). Google Universal Analytics utilizes cookies. A cookie is a digital file that is saved on your computer and allows for the examination of how a website is used. This persistent cookie consists of a combination of random integers that allows the browser to recognize our website. The data regarding the utilization of this website, which is collected by the cookie, is typically transmitted to and stored on a Google server situated in the United States.
                  </p>
                  <p className="font-bold text-base">
                    In the event that this cookie is not present, such as when it is intentionally removed after a session, Google Universal Analytics employs alternative techniques to identify the browser and maintain the ability to associate user actions with a pseudonym. These techniques are also used to other devices, such as tablets and smartphones, to conduct a comprehensive analysis of an individual's activity across various platforms.
                  </p>

                  <h4 className="text-base font-black text-slate-700 mt-4">IP Address Anonymization</h4>
                  <p className="font-bold text-base">
                    Our website has enabled IP anonymization, meaning that when your device's IP address is sent to the Google server, Google truncates the address before keeping it, thereby anonymizing it. To obtain more information regarding the process of anonymizing the IP address, please refer to the article titled "IP masking in Universal Analytics" on the Google Support website.
                  </p>

                  <h4 className="text-base font-black text-slate-700 mt-4">Purpose of Google Universal Analytics</h4>
                  <p className="font-bold text-base">
                    It is to provide advanced and comprehensive tracking and analysis of website and app data. Google will utilize the information provided by the website provider to analyze website usage, provide reports on website activity, and offer additional services linked to website and internet usage. The IP address sent by your browser via Google Analytics will not be merged with other Google data.
                  </p>

                  <h4 className="text-base font-black text-slate-700 mt-4">Options for Choosing Not to Participate</h4>
                  <p className="font-bold text-base">
                    To prohibit the collection and sharing of website- and usage-related data, including your IP address, by Google Universal Analytics, you can install a plug-in on your PC, Mac, or any other device that supports plug-ins. Google Analytics Browser add-on for opting out. The plug-in prevents Google Web Analysis from functioning on any website you visit.
                  </p>
                  <p className="font-bold text-base">
                    For Google's official documentation on data privacy and data security in Universal Analytics, please visit the following website: Protecting your Data - Google Support.
                  </p>
                </div>
              </section>

              {/* 1.3 Social Networks */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 shadow-sm">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">1.3 Social Network Links</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-4 font-normal italic">
                  <p className="font-bold text-base">
                    The website features links to several social networks. Clicking the link is the only way to establish a connection with the social network's web server. This means that no usage data will be transmitted to the social network until the associated link is clicked. The social network provider bears the responsibility for safeguarding your data within the network.
                  </p>
                </div>
              </section>

              {/* 2. Personal Data Processing */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 shadow-sm">
                    <Database className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">2. Personal Data Processing</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-4 font-normal italic">
                  <h3 className="text-lg font-black text-slate-800">2.1 Communication Bulletin</h3>
                  <p className="font-bold text-base">
                    If you choose to subscribe by checking the corresponding box or if we have obtained your email address through a download of further information, such as infographics, we will send you information about Eduskill Group, events, employment, seminars, services, and news. We send newsletters and ensure secure delivery through email tracking for each campaign.
                  </p>
                  <p className="font-bold text-base">
                    To unsubscribe from the newsletter, simply send an email to info@eduskill.org at any time. Additionally, every newsletter contains a hyperlink that allows you to unsubscribe from the list of recipients.
                  </p>
                </div>
              </section>

              {/* 3. Data Subject Rights */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600 shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">3. Data Subject Rights</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed space-y-6 font-normal italic">
                  <div>
                    <h3 className="text-lg font-black text-slate-800">3.1 The Office Responsible</h3>
                    <p className="font-bold text-base">
                      The company stated in the imprint is the responsible office for data protection. The corporation bears exclusive responsibility for the websites hosted on the Eduskill Group website domain. However, our website is not accountable for the content of our partners' websites that are linked to from our website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">3.2 Data Subject Rights and Consent Revocation</h3>
                    <p className="font-bold text-base">
                      You have the ability to exercise your rights as a data subject to access, correct, delete, or restrict the stored data, as well as withdraw any consent you have given to us at any time. In order to accomplish this, please send an electronic mail to info@eduskill.org.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">3.3 Utilizations</h3>
                    <p className="font-bold text-base">
                      Upon receiving your application, we will only retain your data with your explicit consent once the position has been filled. You have the ability to withdraw this permission at any time. To accomplish this, please reach out to us using the contact information provided in the Terms of Use.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">3.4 Linked Pages</h3>
                    <p className="font-bold text-base">
                      Data protection on the linked websites is the responsibility of the respective partner companies. To obtain additional details, go to the information provided in the imprint or privacy statement of the connected website. If you wish to exercise your right to access, correct, delete, or restrict the stored data, please contact the relevant partner's office.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">3.5 Data Protection Officer</h3>
                    <p className="font-bold text-base">
                      Eduskill Group has designated a Data Protection Officer who may be contacted for any inquiries related to data protection. To inquire about data protection, please get in touch with the Data Protection Officer.
                    </p>
                    <p className="font-bold text-base">
                      Ensure that you label your email with the subject line "Data Support Unit" and send it to <a href="mailto:info@eduskill.org" className="text-blue-600 hover:underline">info@eduskill.org</a>.
                    </p>
                  </div>
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
