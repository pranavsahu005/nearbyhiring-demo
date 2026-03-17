import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Search, MapPin, Building2, Calendar, Briefcase, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "TechSolutions Pvt Ltd",
    location: "Prayagraj, UP",
    category: "Permanent",
    description: "Looking for an experienced developer with expertise in React, Node.js and PostgreSQL. Join our dynamic team building next-gen platforms.",
    ctc: "₹6 LPA - ₹12 LPA",
    expiry: "Mar 30, 2026",
    openings: 3,
    posted: "Mar 15, 2026"
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Creative Digital",
    location: "Noida, UP",
    category: "Full Time",
    description: "Design and implement beautiful user interfaces using modern CSS frameworks and React. Focus on performance and accessibility.",
    ctc: "₹5 LPA - ₹9 LPA",
    expiry: "Apr 05, 2026",
    openings: 5,
    posted: "Mar 14, 2026"
  },
  {
    id: 3,
    title: "HR Executive",
    company: "Global Services",
    location: "Prayagraj, UP",
    category: "Contractual",
    description: "Manage end-to-end recruitment cycle and employee engagement activities. Excellent communication skills required.",
    ctc: "₹3 LPA - ₹5 LPA",
    expiry: "Mar 28, 2026",
    openings: 2,
    posted: "Mar 13, 2026"
  }
];

const LatestJobs = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "नवीनतम नौकरियाँ" : "Latest Jobs"}
        subtitle={language === 'hi' ? "Latest Job Openings" : "Latest Job Openings"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Latest Jobs" : "Latest Jobs"}
      />
      <div className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-blue-premium p-12 mb-16 rounded-[4rem] text-center shadow-2xl relative overflow-hidden" data-reveal>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic uppercase tracking-tighter">
                Dream <span className="text-blue-400">Careers</span>
              </h2>
              <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto font-bold italic uppercase tracking-widest">
                Discover your next move in your city.
              </p>

              <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto bg-white/5 p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="relative flex-1 group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search roles..." 
                    className="w-full bg-transparent border-0 px-16 py-5 text-white placeholder:text-white/30 outline-none text-lg font-bold italic"
                  />
                </div>
                <div className="h-10 w-px bg-white/10 hidden md:block self-center" />
                <div className="relative flex-1 group">
                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Location..." 
                      className="w-full bg-transparent border-0 px-16 py-5 text-white placeholder:text-white/30 outline-none text-lg font-bold italic"
                    />
                </div>
                <button className="bg-blue-600 text-white font-black px-12 py-5 rounded-[1.5rem] hover:bg-white hover:text-blue-600 transition-all duration-500 italic uppercase tracking-widest">
                  SEARCH
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between mb-4" data-reveal>
               <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 italic uppercase tracking-tight">
                 <Briefcase className="h-8 w-8 text-blue-600" />
                 Recent Opportunities ({jobs.length})
               </h3>
               <button className="flex items-center gap-2 text-sm font-black text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest italic">
                  <Filter className="h-5 w-5" /> Filters
               </button>
            </div>

            {jobs.map((job, i) => (
              <div 
                key={job.id}
                className="group bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-100 transition-all duration-700"
                data-reveal
              >
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="space-y-6 flex-1">
                    <div className="flex flex-wrap items-center gap-4">
                       <span className={`px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-widest shadow-sm ${
                         job.category === 'Permanent' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-blue-50 text-blue-600 border border-blue-100'
                       }`}>
                         {job.category}
                       </span>
                       <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 italic">
                         <Calendar className="h-4 w-4" /> POSTED {job.posted}
                       </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors italic uppercase tracking-tight">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold text-lg italic">
                        <span className="flex items-center gap-2 group-hover:text-slate-900 transition-colors tracking-tight"><Building2 className="h-5 w-5 text-blue-500" /> {job.company}</span>
                        <span className="flex items-center gap-2 group-hover:text-slate-900 transition-colors tracking-tight"><MapPin className="h-5 w-5 text-blue-500" /> {job.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed font-bold text-lg opacity-80 group-hover:opacity-100 transition-all duration-500">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-10 pt-4 border-t border-slate-50">
                       <div className="space-y-1">
                         <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest italic">Package</span>
                         <p className="font-black text-xl text-slate-900 italic tracking-tight">{job.ctc}</p>
                       </div>
                       <div className="space-y-1">
                         <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest italic">Openings</span>
                         <p className="font-black text-xl text-slate-900 italic tracking-tight">{job.openings}</p>
                       </div>
                       <div className="space-y-1">
                         <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest italic">Apply Before</span>
                         <p className="font-black text-xl text-rose-500 italic tracking-tight">{job.expiry}</p>
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end">
                    <Link to={`/job/${job.id}`} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-premium text-white font-black uppercase italic tracking-widest rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl group/btn">
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center" data-reveal>
             <button className="inline-flex items-center gap-4 px-12 py-6 border-4 border-blue-600 rounded-3xl font-black uppercase italic tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl">
               Load More Jobs
             </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LatestJobs;
