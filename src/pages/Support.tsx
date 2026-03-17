import { Mail, Phone, MessageCircle, Clock, ChevronDown, HelpCircle, MapPin, Send } from "lucide-react";
import { useState } from "react";
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
              We're Always <span className="text-blue-600">Here for You</span>
            </h2>
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
              <div key={i} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-blue-100/40 flex flex-col items-start gap-6 hover:-translate-y-2 transition-all duration-500">
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
          <div className="bg-white rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-blue-100/30 mb-20" data-reveal>
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

          {/* Contact Form */}
          <div className="bg-white rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-blue-100/30" data-reveal>
            <h3 className="text-3xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter flex items-center gap-4">
              <span className="h-10 w-2 bg-blue-600 rounded-full" />
              Send Us a Message
            </h3>
            <form className="grid md:grid-cols-2 gap-8">
              {[
                { label: "Your Name", placeholder: "Rahul Sharma", type: "text" },
                { label: "Email Address", placeholder: "rahul@example.com", type: "email" },
                { label: "Phone Number", placeholder: "+91 9312189789", type: "tel" },
                { label: "Subject", placeholder: "e.g. Job not showing", type: "text" },
              ].map((field) => (
                <div key={field.label} className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                  />
                </div>
              ))}
              <div className="md:col-span-2 space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your issue or query..."
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-5 rounded-2xl uppercase italic tracking-wider transition-all hover:scale-105 shadow-xl shadow-blue-200"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
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
