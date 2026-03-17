import React from "react";
import {
  ShoppingBag, Truck, Monitor, Factory, HeartPulse,
  GraduationCap, Utensils, Building2, Wrench, ChevronRight,
  Plus, Minus
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { motion, AnimatePresence } from "framer-motion";


const CategoriesSection = () => {
  const { t } = useLanguage();

  const cats = [
    { 
      icon: <ShoppingBag className="h-6 w-6 text-emerald-600" />, 
      label: t("cat_retail_sales"), 
      count: 120, 
      className: "",
      bgImg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      icon: <Truck className="h-6 w-6 text-amber-500" />, 
      label: t("cat_delivery"), 
      count: 95,
      className: "",
      bgImg: "https://images.unsplash.com/photo-1510511459019-5dee9954889c?auto=format&fit=crop&q=80&w=400"
    },
    { 
      icon: <Monitor className="h-6 w-6 text-blue-600" />, 
      label: t("cat_it_tech"), 
      count: 60,
      className: "",
      bgImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
    },
    { 
      icon: <Factory className="h-6 w-6 text-orange-600" />, 
      label: t("cat_manufacturing"), 
      count: 80, 
      className: "",
      bgImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
    },
    { 
      icon: <HeartPulse className="h-6 w-6 text-rose-600" />, 
      label: t("cat_healthcare"), 
      count: 45,
      className: "",
      bgImg: "https://images.unsplash.com/photo-1538108197003-8ad73674f91e?auto=format&fit=crop&q=80&w=400"
    },
    { 
      icon: <GraduationCap className="h-6 w-6 text-violet-600" />, 
      label: t("cat_education"), 
      count: 35,
      className: "",
      bgImg: "https://images.unsplash.com/photo-1523050337422-42da09669651?auto=format&fit=crop&q=80&w=400"
    },
  ];

  const accordionCats = [
    {
      title: "Administration & Management",
      description: "Roles focused on organizational efficiency, data management, and strategic operations.",
      items: ["Office Admin", "HR Manager", "Operations Lead", "Executive Assistant"],
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Government & Public Bodies",
      description: "Opportunities within municipal corporations, local authorities, and public sector units.",
      items: ["Clerical Staff", "Technical Assistant", "Public Safety", "Municipal Engineer"],
      icon: <Factory className="h-6 w-6" />
    },
    {
      title: "Logistics & Supply Chain",
      description: "Manage the flow of goods and services with precision and speed.",
      items: ["Warehouse Head", "Supply Chain Expert", "Inventory Controller", "Fleet Manager"],
      icon: <Truck className="h-6 w-6" />
    },
    {
      title: "Technical & Vocational",
      description: "Specialized roles for ITI and Diploma holders in various industrial sectors.",
      items: ["Electrician", "Fitter", "CNC Operator", "Quality Controller"],
      icon: <Wrench className="h-6 w-6" />
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-[#f8fafc] py-32 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-blue-600/5 text-blue-600 rounded-full font-bold text-[10px] mb-4 uppercase tracking-[0.4em] italic border border-blue-600/10 shadow-sm">
            DISCOVER YOUR PATH
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 mb-6 italic uppercase leading-tight">
            {t("bento_title_part1")} <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-4">{t("bento_title_part2")}</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-bold italic max-w-xl mx-auto leading-relaxed uppercase tracking-[0.3em] opacity-70">
            {t("bento_subtitle")}
          </p>
        </div>

        <BentoGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-7xl mx-auto px-4">
          {cats.map((cat, i) => (
            <BentoGridItem
              key={i}
              title={cat.label}
              description={`${cat.count}+ ${t("category_openings_suffix")}`}
              header={
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover/bento:scale-110 transition-all duration-700 relative overflow-hidden shadow-inner border border-slate-100/50 mb-1">
                    {cat.bgImg && (
                      <img 
                        src={cat.bgImg} 
                        className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover/bento:opacity-10 transition-all duration-700 grayscale" 
                        alt="" 
                      />
                    )}
                    <div className="p-3 rounded-full bg-white shadow-lg relative z-10 group-hover/bento:-rotate-12 transition-all duration-500 border border-slate-50 flex items-center justify-center">
                       <div className="scale-90 md:scale-100 transition-transform duration-500 group-hover/bento:scale-110">
                        {cat.icon}
                       </div>
                    </div>
                    <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover/bento:border-blue-500/10 transition-all duration-700" />
                </div>
              }
              icon={null}
              className={`!rounded-full p-2 md:p-4 aspect-square bg-white hover:bg-slate-50 transition-all duration-700 relative group overflow-hidden`}
              onClick={() => window.location.href = "/jobs"}
            />
          ))}
        </BentoGrid>

        <div className="mt-32 max-w-4xl mx-auto">
          <div className="mb-12 text-center" data-reveal>
             <h3 className="text-3xl md:text-5xl font-black text-slate-900 italic tracking-tight uppercase">
               Job Providing <span className="text-blue-600">Facilities</span>
             </h3>
             <p className="mt-4 text-slate-500 font-bold italic uppercase tracking-widest text-sm">Detailed Sector Exploration</p>
          </div>

          <div className="space-y-4">
            {accordionCats.map((item, idx) => (
              <div 
                key={idx}
                className={`group border rounded-[2rem] overflow-hidden transition-all duration-700 ${openIndex === idx ? 'bg-white shadow-2xl border-blue-200 scale-[1.01]' : 'bg-gradient-to-br from-blue-100/80 via-white to-blue-50/30 border-slate-200 hover:border-blue-300 hover:shadow-xl'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-all duration-700 ${openIndex === idx ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 rotate-6' : 'bg-white text-blue-600 border border-blue-100 shadow-sm'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl font-black italic tracking-tight uppercase transition-colors duration-500 ${openIndex === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm font-bold italic ${openIndex === idx ? 'text-slate-400' : 'text-slate-400/80'}`}>{item.items.length} SPECIALIZATIONS</p>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full transition-all duration-700 ${openIndex === idx ? 'bg-blue-50 text-blue-600' : 'bg-white text-blue-100 border border-blue-50 group-hover:bg-blue-600 group-hover:text-white'}`}>
                    {openIndex === idx ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-10 pb-10 pt-2 bg-gradient-to-b from-transparent to-slate-50/30">
                        <div className="h-px w-full bg-slate-100 mb-8" />
                        <p className="text-slate-500 text-lg font-bold leading-relaxed mb-8 italic">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {item.items.map((sub, sidx) => (
                            <div 
                              key={sidx}
                              className="px-6 py-4 bg-white border border-slate-100 rounded-2xl text-slate-600 font-black text-xs uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 flex items-center gap-3 italic"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                              {sub}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center" data-reveal>
          <a 
            href="/jobs" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-blue-premium text-white rounded-[1.5rem] font-black uppercase text-sm tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-blue-900/10 italic"
          >
            {t("categories_view_all_cta")}
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default CategoriesSection;
