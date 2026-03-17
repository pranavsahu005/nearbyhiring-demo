import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const StackedHeaders = () => {
  const { t } = useLanguage();

  const headers = [
    { text: t("hero_stack_1"), color: "text-slate-900" },
    { text: t("hero_stack_2"), color: "text-blue-600" },
    { text: t("hero_stack_3"), color: "text-slate-400" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-2">
          {headers.map((header, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
              className={`text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none ${header.color}`}
            >
              {header.text}
            </motion.h2>
          ))}
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="text-slate-500 text-lg md:text-xl font-bold italic mt-8 max-w-2xl opacity-70"
          >
            {t("hero_stack_desc")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default StackedHeaders;
