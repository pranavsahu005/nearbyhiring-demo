
import React from "react";
import { Handshake, Globe, BarChart4, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";

const Partnership = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  
  const benefits = [
    { title: "Wide Reach", icon: Globe, desc: "Connect with ITIs and Vocational Institutes across India." },
    { title: "Quality Talent", icon: Users, desc: "Access a verified pool of skilled local talent." },
    { title: "Analytics", icon: BarChart4, desc: "Deep insights into recruitment trends and outcomes." },
    { title: "Growth", icon: TrendingUp, desc: "Scale your recruitment process with automation." }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "साझेदारी" : "Partnership"}
        subtitle={language === 'hi' ? "Partnership" : "Partnership"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Partnership" : "Partnership"}
      />
      
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm mb-6 uppercase tracking-widest">
                <Handshake className="h-4 w-4" />
                Strategic Partnership
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase text-center">
                Grow Your <span className="text-blue-600 italic">Business With Us</span>
              </h2>
              <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                Partner with NearbyHiring to revolutionize the local recruitment ecosystem and access verified talent.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-blue-100/10 hover:shadow-blue-100 hover:-translate-y-4 transition-all duration-700" data-reveal data-delay={i * 100}>
                   <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <b.icon className="h-8 w-8" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight italic">{b.title}</h3>
                   <p className="text-slate-500 font-bold text-lg leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-premium rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden group" data-reveal>
               <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
               
               <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
                  <div className="flex-1 space-y-8 text-center lg:text-left">
                     <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic leading-none">
                        Become a <br/><span className="text-blue-400">Partner</span>
                     </h2>
                     <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                        Whether you're an ITI, a placement associate, or a corporate employer, we have a scaleable partnership model built for your success.
                     </p>
                     <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                        <button className="px-12 py-6 bg-white text-slate-900 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-xl uppercase italic tracking-wider shadow-2xl">
                           Apply Now
                        </button>
                        <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all text-xl uppercase italic tracking-wider backdrop-blur-md">
                           Contact Sales
                        </button>
                     </div>
                  </div>

                  <div className="w-full lg:w-px h-px lg:h-64 bg-white/10" />

                  <div className="flex-1 space-y-10">
                     {[
                        { label: "Institution Partners", value: "200+", color: "blue" },
                        { label: "Corporate Associates", value: "500+", color: "teal" },
                        { label: "Satisfaction Rate", value: "98%", color: "pink" }
                     ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-8 group">
                           <div className={`h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <CheckCircle2 className={`h-8 w-8 text-blue-400`} />
                           </div>
                           <div>
                              <div className="text-3xl font-black italic">{stat.value}</div>
                              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Partnership;
