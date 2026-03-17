import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ChallengesSection = () => {
  const { t } = useLanguage();

  const challenges = [
    t("challenge_1"),
    t("challenge_2"),
    t("challenge_3"),
    t("challenge_4"),
    t("challenge_5")
  ];

  const solutions = [
    t("solution_1"),
    t("solution_2"),
    t("solution_3"),
    t("solution_4"),
    t("solution_5")
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
            {t("challenges_title_prefix")} <span className="text-blue-600">{t("challenges_title_accent")}</span>
          </h2>
          <p className="text-slate-500 text-base font-medium max-w-xl mx-auto opacity-70">
             {t("challenges_desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-reveal>
            <div className="bg-red-50/50 p-10 rounded-[40px] border border-red-100">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                 <AlertCircle className="h-4 w-4" /> {t("challenges_eb_challenges")}
               </div>
               <ul className="space-y-5">
                 {challenges.map((c, i) => (
                   <li key={i} className="flex gap-4 text-slate-700 font-medium leading-tight">
                     <span className="h-2 w-2 rounded-full bg-red-400 mt-2 shrink-0" />
                     {c}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="space-y-8" data-reveal data-delay="100">
            <div className="bg-green-50/50 p-10 rounded-[40px] border border-green-100">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                 <CheckCircle2 className="h-4 w-4" /> {t("challenges_eb_solutions")}
               </div>
               <ul className="space-y-5">
                 {solutions.map((s, i) => (
                   <li key={i} className="flex gap-4 text-slate-700 font-medium leading-tight">
                     <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                     {s}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center" data-reveal data-delay="200">
           <div className="card-premium-dark p-8 rounded-[32px] max-w-4xl mx-auto">
             <p className="text-white/80 font-medium leading-relaxed">
               {t("challenges_bottom_text")}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
