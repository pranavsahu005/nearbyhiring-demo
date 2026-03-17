import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Users, Briefcase, Heart, Rocket, Mail, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitProps) => (
  <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-700 group hover:-translate-y-4" data-reveal>
    <div className="h-20 w-20 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-500 shadow-inner">
      <div className="text-blue-600 group-hover:text-white transition-colors scale-125">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight italic uppercase">{title}</h3>
    <p className="text-slate-500 font-bold text-lg leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">{description}</p>
  </div>
);

const JoinUs = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "हमारे साथ जुड़ें" : "Join Us"}
        subtitle={language === 'hi' ? "Be Part of Our Mission" : "Be Part of Our Mission"}
        backgroundImage="/assets/img/joinus-bg.jpg"
        breadcrumb={language === 'hi' ? "Join Us" : "Join Us"}
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-6 uppercase tracking-widest italic">
                <Globe className="h-5 w-5" />
                Global Careers
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase text-center leading-[1.1]">
                Join the <span className="text-blue-600 italic">Movement</span>
              </h2>
              <p className="text-slate-500 text-xl max-w-3xl mx-auto font-bold opacity-80 uppercase italic tracking-widest leading-relaxed">
                सफलता की नई दिशा—एडुस्किल समूह टीम के साथ! नवाचार और सहयोग की संस्कृति।
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-32">
              <div className="bg-blue-premium rounded-[5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl" data-reveal>
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                 <h3 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter italic leading-none relative z-10">
                   गिग वर्क <br/><span className="text-blue-400">Earn While Learn</span>
                 </h3>
                 <p className="text-slate-400 text-xl font-bold italic tracking-wide mb-12 relative z-10">
                   हम उन छात्रों का स्वागत करते हैं जो पढ़ाई के साथ-साथ कमाई करना चाहते हैं।
                 </p>
                 <ul className="space-y-6 mb-12 relative z-10">
                   {[
                     "स्नातक एवं छात्र - उन्नतिके अवसर",
                     "प्रबंधन स्नातक - इंटर्नशिप विकल्प",
                     "पूर्व कार्यरत महिलाएं - नया सफर",
                     "दिव्यांग स्नातक - समान अवसर"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-4 text-slate-100 font-black italic uppercase text-sm tracking-tight border-b border-white/5 pb-4">
                       <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="bg-white rounded-[5rem] p-12 md:p-20 border border-slate-100 shadow-xl flex flex-col justify-center relative overflow-hidden" data-reveal>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl" />
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic leading-none relative z-10">
                  अवसर और <br/><span className="text-blue-600">Career Growth</span>
                </h3>
                <p className="text-slate-500 text-xl font-bold italic tracking-wide mb-12 relative z-10">
                  अनुभवी पेशेवरों के लिए आकर्षक वेतन आधारित भूमिकाएँ।
                </p>
                <div className="p-10 bg-blue-50/50 rounded-[3rem] border border-blue-100 relative z-10 backdrop-blur-3xl shadow-lg">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="h-20 w-20 bg-blue-600 rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-blue-200">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-900 italic uppercase">Talent Pool</h4>
                        <p className="font-bold text-blue-600 italic uppercase tracking-widest text-xs">Direct Application</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-bold mb-8 italic uppercase text-sm tracking-widest">
                    Submit your resume / profile at:
                  </p>
                  <a href="mailto:career@eduskill.org" className="text-3xl font-black text-blue-600 hover:text-slate-900 transition-colors uppercase italic tracking-tighter break-words">
                    career@eduskill.org
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <BenefitCard 
                title="Work Flexibility" 
                description="हम आयु, लिंग या पृष्ठभूमि की परवाह किए बिना ऐसे सभी व्यक्तियों का स्वागत करते हैं।" 
                icon={<Rocket className="h-10 w-10" />}
              />
              <BenefitCard 
                title="Career Growth" 
                description="यहाँ हर किसी को अपनी योग्यता के अनुरूप आगे बढ़ने और सीखने के समान अवसर मिलते हैं।" 
                icon={<Briefcase className="h-10 w-10" />}
              />
              <BenefitCard 
                title="Social Impact" 
                description="समाज के युवा वर्ग की समस्याओं के समाधान में सक्रिय सहभागिता का गौरव।" 
                icon={<Heart className="h-10 w-10" />}
              />
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JoinUs;
