import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        scale: 1.01,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={cn(
        "aspect-square rounded-full group/bento transition-all duration-700 p-2 md:p-4 justify-center items-center flex flex-col space-y-2 relative overflow-hidden border border-white/40 bg-white/10 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.12)] hover:border-blue-200/50",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none opacity-0 group-hover/bento:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover/bento:scale-x-100 transition-transform duration-700" />
      {header}
      <div className="relative z-10 text-center flex flex-col items-center group-hover/bento:translate-y-[-2px] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <div className="flex flex-col items-center gap-0.5 mb-0.5">
          {icon}
          <div className="font-black text-slate-900 uppercase tracking-tighter italic text-[14px] md:text-[16px] leading-none">
            {title}
          </div>
        </div>
        <div className="font-black text-blue-600/40 text-[8px] md:text-[9px] leading-relaxed italic group-hover:text-blue-600 transition-colors uppercase tracking-[0.25em]">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
