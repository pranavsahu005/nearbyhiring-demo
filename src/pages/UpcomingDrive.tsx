import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Send, MapPin, Calendar, ArrowRight, Zap, Target } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DriveCardProps {
  company: string;
  role: string;
  date: string;
  location: string;
  type: string;
}

const DriveCard = ({ company, role, date, location, type }: DriveCardProps) => (
  <div className="group bg-white p-10 rounded-[4rem] shadow-sm border border-slate-50 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-700 hover:-translate-y-4" data-reveal>
    <div className="flex items-center justify-between mb-10">
      <div className="h-20 w-20 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 transition-all duration-500 shadow-inner">
        <Send className="h-10 w-10 text-slate-300 group-hover:text-white transition-colors" />
      </div>
      <div className="px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-sm border border-blue-100">
        {type}
      </div>
    </div>
    <div className="space-y-2 mb-8">
      <h4 className="text-xl font-black text-slate-400 uppercase italic tracking-widest">
        {company}
      </h4>
      <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase italic tracking-tighter leading-tight">
        {role}
      </h3>
    </div>
    <div className="space-y-4 mb-10 border-t border-slate-50 pt-8">
      <div className="flex items-center gap-4 text-slate-500 font-bold text-lg italic tracking-tight">
        <Calendar className="h-6 w-6 text-blue-500" />
        {date}
      </div>
      <div className="flex items-center gap-4 text-slate-500 font-bold text-lg italic tracking-tight">
        <MapPin className="h-6 w-6 text-red-500" />
        {location}
      </div>
    </div>
    <button className="w-full py-6 bg-blue-premium text-white rounded-[2rem] font-black uppercase italic tracking-[0.2em] group-hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-xl hover:shadow-blue-300">
      APPLY NOW
      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-3" />
    </button>
  </div>
);

const UpcomingDrive = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  const drives = [
    {
      company: "Tech Mahindra",
      role: "Associate Software Engineer",
      date: "October 20, 2025",
      location: "Virtual (PAN India)",
      type: "Pooled Drive"
    },
    {
      company: "Reliance Industries",
      role: "Graduate Engineer Trainee",
      date: "November 05, 2025",
      location: "On-site, Mumbai",
      type: "Campus Drive"
    },
    {
      company: "Tata Motors",
      role: "Diploma Engineer Trainee",
      date: "November 12, 2025",
      location: "On-site, Pune",
      type: "Bulk Hiring"
    }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "आगामी ड्राइव" : "Upcoming Drive"}
        subtitle={language === 'hi' ? "Future Hiring Events" : "Future Hiring Events"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Upcoming Drives" : "Upcoming Drives"}
      />
      <div className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-6 uppercase tracking-widest italic animate-pulse">
                <Zap className="h-5 w-5 fill-current" />
                Live Slots
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase">
                Turbo <span className="text-blue-600">Hiring</span>
              </h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-bold opacity-80 uppercase italic tracking-widest leading-relaxed">
                Direct pathways into top-tier global multinationals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-36">
              {drives.map((drive, idx) => (
                <DriveCard key={idx} {...drive} />
              ))}
            </div>

            <div className="bg-blue-premium rounded-[5rem] p-16 md:p-32 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-20" data-reveal>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex-1 relative z-10 text-center md:text-left">
                <div className="h-24 w-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mb-10 mx-auto md:mx-0 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic tracking-tighter leading-none">
                  Get <span className="text-blue-400">Profiled</span>
                </h3>
                <p className="text-white/50 text-xl font-bold italic tracking-wide leading-relaxed max-w-xl">
                  Unlock priority invites for restricted drives in your region.
                </p>
              </div>

              <div className="flex-shrink-0 relative z-10">
                <button className="group relative inline-flex items-center justify-center px-16 py-8 bg-white text-slate-900 font-black rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-500 text-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] uppercase italic tracking-widest hover:-translate-y-4">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpcomingDrive;
