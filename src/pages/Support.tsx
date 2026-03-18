import { Mail, Phone, MessageCircle, Clock, ChevronDown, HelpCircle, MapPin, Send, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "How do I register on NearbyHiring?",
    a: "Simply visit the Register page, fill in your details, and submit. Our team will verify your profile and connect you with nearby employers within 24-48 hours.",
  },
  {
    q: "Is NearbyHiring free for job seekers?",
    a: "Yes! NearbyHiring is completely free for all job seekers. There are no hidden charges or subscription fees.",
  },
  {
    q: "How can employers post a job?",
    a: "Employers can contact us via email or phone to register and post verified job listings. We have dedicated account managers to assist you.",
  },
  {
    q: "How long does it take to get hired?",
    a: "On average, registered candidates receive interview calls within 2-5 days. Placement depends on your skill set and the current openings in your area.",
  },
  {
    q: "What if I face issues with a job listing?",
    a: "Report the issue directly from the job card or contact our support team at support@nearbyhiring.com. We resolve all verified complaints within 24 hours.",
  },
];

const SupportFaqItem = ({ q, a, idx }: { q: string; a: string; idx: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left gap-6"
      >
        <div className="flex items-start gap-4">
          <span className={`text-lg font-black italic shrink-0 transition-colors ${open ? "text-blue-600" : "text-slate-200"}`}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className={`text-base md:text-lg font-black uppercase italic tracking-tight transition-colors ${open ? "text-blue-600" : "text-slate-900"}`}>
            {q}
          </span>
        </div>
        <div className={`h-9 w-9 shrink-0 rounded-xl flex items-center justify-center transition-all ${open ? "bg-blue-600 text-white rotate-180" : "bg-slate-50 text-slate-300"}`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pl-10 text-slate-500 font-bold leading-relaxed border-l-4 border-blue-100 italic">
          {a}
        </p>
      </div>
    </div>
  );
};

const Support = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <MainLayout>
      <PageBanner
        title="Support Center"
        subtitle="We're here to help. Reach out anytime."
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Support"
      />

      <div className="bg-slate-50 py-20 min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Hero Info */}
          <div className="text-center mb-20" data-reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-xs uppercase tracking-widest mb-6">
              <HelpCircle className="h-4 w-4" />
              How Can We Help?
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
              We're Always <span className="text-blue-600">Here for You</span>
            </h1>
            <p className="text-slate-500 text-lg font-bold max-w-2xl mx-auto">
              Our support team is available 7 days a week to help you with jobs, registrations, employer queries, and technical issues.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20" data-reveal>
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Call Us",
                detail: "+91 9312189789",
                sub: "Mon – Sat, 9AM – 7PM IST",
                color: "bg-blue-600",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Us",
                detail: "support@nearbyhiring.com",
                sub: "We reply within 24 hours",
                color: "bg-indigo-600",
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Live Chat",
                detail: "Chat via WhatsApp",
                sub: "Available 24/7",
                color: "bg-emerald-600",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-blue-100/40 flex flex-col items-start gap-6 hover:-translate-y-2 transition-all duration-500">
                <div className={`${card.color} p-4 rounded-2xl text-white shadow-lg`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{card.title}</p>
                  <p className="text-xl font-black text-slate-900 mb-1">{card.detail}</p>
                  <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
                    <Clock className="h-3 w-3" /> {card.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-100 shadow-2xl shadow-blue-100/30 mb-20" data-reveal>
            <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter flex items-center gap-4">
              <span className="h-10 w-2 bg-blue-600 rounded-full" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <SupportFaqItem key={idx} q={faq.q} a={faq.a} idx={idx} />
              ))}
            </div>
          </div>

          {/* Help Desk Form */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-blue-100/30" data-reveal>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl text-white uppercase italic tracking-tighter mb-2">
                Help Desk
              </h3>
              <p className="text-blue-100 font-bold italic">
                Our team usually responds within 2-4 hours. Please provide as much detail as possible.
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Your Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91 9312189789"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Subject / Category</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none appearance-none cursor-pointer">
                      <option value="">Select a subject...</option>
                      <option value="job">Job Search Assistance</option>
                      <option value="registration">Registration Issues</option>
                      <option value="employer">Employer Queries</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Special Note / Description</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all outline-none resize-none"
                    required
                  />
                </div>
                {/* Google reCAPTCHA */}
                <div className="md:col-span-2 flex flex-col items-center justify-center py-4 border-y border-slate-50 my-4">
                  <div 
                    className="g-recaptcha" 
                    data-sitekey="6Le7KkssAAAAAIAG8sUMju9ACTkSEKcxmEriliUr"
                    data-size="normal"
                  ></div>
                  <div className="mt-3 flex items-center gap-2 text-[10px] font-black text-blue-600 animate-pulse uppercase tracking-widest italic">
                    <Shield className="h-3 w-3" />
                    Verified Help Desk Security Active
                  </div>
                </div>
                {/* Privacy Checkbox */}
                <div className="md:col-span-2 flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                    required
                  />
                  <label htmlFor="privacy" className="text-sm font-bold text-slate-500 cursor-pointer leading-tight">
                    I have read and agree to the <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>.
                  </label>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-2xl uppercase italic tracking-wider transition-all hover:scale-105 shadow-xl shadow-blue-200 group"
                  >
                    Submit Support Request
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Office */}
          <div className="mt-20 flex flex-col md:flex-row gap-6 items-center justify-center text-center" data-reveal>
            <MapPin className="h-6 w-6 text-blue-400 shrink-0" />
            <p className="text-sm font-bold text-slate-500">
              ITI-Eduskill Group HQ — MIG-84, Preetam Nagar Colony, Prayagraj, Uttar Pradesh 211011
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default Support;
