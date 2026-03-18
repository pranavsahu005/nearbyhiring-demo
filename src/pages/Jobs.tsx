import { useState, useEffect } from "react";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import { Search, MapPin, Briefcase, Filter, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import useScrollReveal from "@/hooks/useScrollReveal";
import { JobCardSkeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    title: "Delivery Executive",
    company: "Zomato",
    location: "Mumbai, MH",
    type: "Full-time",
    salary: "₹15,000 – ₹22,000/mo",
    tags: ["Fresher OK", "Bike Required"],
    color: "#E71D36",
    initials: "Z",
  },
  {
    title: "Retail Sales Associate",
    company: "Reliance Retail",
    location: "Delhi, DL",
    type: "Full-time",
    salary: "₹12,000 – ₹18,000/mo",
    tags: ["No Experience", "Female OK"],
    color: "#1B5EF7",
    initials: "RR",
  },
  {
    title: "Customer Support",
    company: "Flipkart",
    location: "Bangalore, KA",
    type: "Work From Home",
    salary: "₹18,000 – ₹25,000/mo",
    tags: ["WFH", "Graduate"],
    color: "#F7971B",
    initials: "FK",
  },
  {
    title: "Security Guard",
    company: "G4S India",
    location: "Hyderabad, TS",
    type: "Full-time",
    salary: "₹10,000 – ₹14,000/mo",
    tags: ["12th Pass", "Male Only"],
    color: "#2D6A4F",
    initials: "G4",
  },
  {
    title: "Warehouse Staff",
    company: "Amazon India",
    location: "Pune, MH",
    type: "Contract",
    salary: "₹14,000 – ₹20,000/mo",
    tags: ["Fresher OK", "10th Pass"],
    color: "#FF9900",
    initials: "AI",
  },
  {
    title: "Data Entry Operator",
    company: "TCS iON",
    location: "Chennai, TN",
    type: "Part-time",
    salary: "₹10,000 – ₹15,000/mo",
    tags: ["WFH Option", "Typing 30wpm"],
    color: "#4B0082",
    initials: "TC",
  },
];

const Jobs = () => {
  const { t } = useLanguage();
  useScrollReveal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <PageBanner 
        title={t("jobs_title")}
        subtitle={t("jobs_hero_desc")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("jobs_btn")}
      />
      
      <div className="py-20 bg-[#f8fafc] min-h-screen relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header Section */}
          <div className="mb-16 text-center" data-reveal>
            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
              {t("nav_latest_openings")}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">
              {t("jobs_local_jobs").split(' ')[0]} <span className="text-blue-600">{t("jobs_local_jobs").split(' ')[1]}</span>
            </h1>
          </div>

          {/* Premium Search Bar (Glassmorphism) */}
          <div className="mb-16 p-3 bg-white/40 backdrop-blur-3xl rounded-3xl border border-white/60 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)] flex flex-col md:flex-row gap-3" data-reveal>
            <div className="relative flex-1 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder={t("jobs_search_placeholder")}
                className="w-full pl-16 pr-6 py-5 bg-white/50 border-none rounded-3xl font-bold uppercase italic tracking-widest outline-none focus:ring-4 focus:ring-blue-100 transition-all text-xs"
              />
            </div>
            <div className="relative flex-1 group">
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder={t("jobs_location_placeholder")}
                className="w-full pl-16 pr-6 py-5 bg-white/50 border-none rounded-3xl font-bold uppercase italic tracking-widest outline-none focus:ring-4 focus:ring-blue-100 transition-all text-xs"
              />
            </div>
            <button className="px-12 py-5 bg-blue-premium text-white font-black rounded-[1.8rem] hover:scale-105 active:scale-95 transition-all duration-500 uppercase italic tracking-[0.2em] shadow-xl shadow-blue-200 text-sm">
              {t("jobs_search_btn")}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filter Sidebar (Premium Glassmorphism) */}
            <aside className="w-full lg:w-80 flex-shrink-0" data-reveal>
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-10 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.02)] sticky top-24">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                  <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
                    <Filter className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-black uppercase italic tracking-tighter">{t("jobs_filter_title")}</span>
                </div>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 italic">{t("jobs_filter_employment")}</h4>
                    <div className="space-y-4">
                      {["Full-time", "Part-time", "Contract", "Work From Home"].map(type => (
                        <label key={type} className="flex items-center gap-4 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="peer h-6 w-6 rounded-xl border-2 border-slate-100 bg-white checked:bg-blue-600 checked:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer" />
                            <div className="absolute text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none">
                              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                            </div>
                          </div>
                          <span className="text-slate-600 font-bold italic uppercase tracking-widest text-[11px] group-hover:text-blue-600 transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 italic">{t("jobs_filter_experience")}</h4>
                    <div className="space-y-4">
                      {["Fresher", "1-2 Years", "3-5 Years", "5+ Years"].map(exp => (
                        <label key={exp} className="flex items-center gap-4 cursor-pointer group">
                          <input type="radio" name="exp" className="h-6 w-6 border-2 border-slate-100 bg-white text-blue-600 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer" />
                          <span className="text-slate-600 font-bold italic uppercase tracking-widest text-[11px] group-hover:text-blue-600 transition-colors">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Job Grid */}
            <div className="flex-1">
              <div className="grid gap-8 md:grid-cols-2">
                <AnimatePresence mode="popLayout">
                  {loading ? (
                    Array(6).fill(0).map((_, i) => (
                      <motion.div
                        key={`skeleton-${i}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <JobCardSkeleton />
                      </motion.div>
                    ))
                  ) : (
                    [...jobs, ...jobs].map((job, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        key={i} 
                        className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] hover:-translate-y-3 transition-all duration-700 relative overflow-hidden" 
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-50 transition-colors duration-700" />
                        
                        <div className="flex items-start gap-6 mb-8 relative z-10">
                          <div 
                            className="h-20 w-20 rounded-[1.8rem] flex items-center justify-center font-black text-2xl shadow-inner group-hover:scale-110 transition-transform duration-700"
                            style={{ background: `${job.color}18`, color: job.color }}
                          >
                            {job.initials}
                          </div>
                          <div className="flex-1 min-w-0 pt-2">
                            <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase italic tracking-tighter leading-none mb-2">
                              {job.title}
                            </h3>
                            <p className="text-slate-400 font-black uppercase italic tracking-widest text-[11px] opacity-60">{job.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                          {job.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-black px-4 py-2 rounded-xl bg-slate-50 text-slate-500 uppercase tracking-widest border border-slate-100 group-hover:bg-blue-premium group-hover:text-white group-hover:border-transparent transition-all duration-500">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-auto border-t border-slate-50 pt-8 relative z-10">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Monthly Package</span>
                            <div className="flex items-center gap-2 text-blue-600 font-black uppercase italic tracking-widest text-sm">
                              <Briefcase className="h-4 w-4" />
                              {job.salary}
                            </div>
                          </div>
                          <motion.button className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-200 transition-all duration-500">
                            <ArrowRight className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
