import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Calendar, MapPin, ArrowRight, Bell, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EventCard = ({ title, date, location, category }: { title: string, date: string, location: string, category: string }) => (
  <div className="group bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2" data-reveal>
    <div className="flex items-start justify-between mb-8">
      <div className="px-6 py-2 bg-blue-50 text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em]">
        {category}
      </div>
      <div className="h-16 w-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
        <Calendar className="h-8 w-8" />
      </div>
    </div>
    <h4 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors uppercase italic tracking-tight leading-tight">
      {title}
    </h4>
    <div className="space-y-4 mb-10">
      <div className="flex items-center gap-3 text-slate-500 font-bold text-lg italic tracking-tight">
        <Calendar className="h-5 w-5 text-blue-500" />
        {date}
      </div>
      <div className="flex items-center gap-3 text-slate-500 font-bold text-lg italic tracking-tight">
        <MapPin className="h-5 w-5 text-red-500" />
        {location}
      </div>
    </div>
    <button className="w-full py-5 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white rounded-[1.5rem] font-black uppercase italic tracking-widest transition-all duration-500 flex items-center justify-center gap-3 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-200">
      DETAILS
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
    </button>
  </div>
);

const NewsEvents = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  const events = [
    {
      title: "National ITI Placement Drive 2025",
      date: "October 15, 2025",
      location: "Virtual & On-site (Multiple Locations)",
      category: "Placement"
    },
    {
      title: "AI in Recruitment: Future Trends Workshop",
      date: "November 02, 2025",
      location: "New Delhi, India",
      category: "Workshop"
    },
    {
      title: "Annual Skill Excellence Awards",
      date: "December 20, 2025",
      location: "Mumbai, Maharashtra",
      category: "Awards"
    }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "समाचार और घटनाएँ" : "News and Events"}
        subtitle={language === 'hi' ? "Stay Informed & Updated" : "Stay Informed & Updated"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "News & Events" : "News & Events"}
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-sm mb-6 uppercase tracking-widest italic">
                <Bell className="h-5 w-5 animate-bounce" />
                Latest Flash
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 italic uppercase">
                Industry <span className="text-blue-600">Pulse</span>
              </h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-bold opacity-80 uppercase italic tracking-widest">
                Real-time updates on placement drives and global summits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {events.map((event, idx) => (
                <EventCard key={idx} {...event} />
              ))}
            </div>

            <div className="relative bg-blue-premium rounded-[5rem] p-16 md:p-24 overflow-hidden shadow-2xl" data-reveal>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[100px]" />
              </div>
              
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center h-24 w-24 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] mb-10 shadow-2xl border border-white/10">
                  <Sparkles className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">
                  Join the Inner Circle
                </h3>
                <p className="text-white/60 text-xl mb-12 font-bold italic tracking-wide leading-relaxed">
                  Get priority notifications for mega drives in your sector.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 p-4 bg-white/5 rounded-[3rem] backdrop-blur-2xl border border-white/10 shadow-2xl">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL..." 
                    className="flex-1 px-10 py-6 bg-transparent rounded-2xl text-white font-black uppercase italic tracking-widest placeholder:text-white/20 outline-none"
                  />
                  <button className="px-12 py-6 bg-blue-600 text-white font-black rounded-[2rem] hover:bg-white hover:text-blue-600 transition-all duration-500 shadow-xl uppercase italic tracking-widest">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsEvents;
