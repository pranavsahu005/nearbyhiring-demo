
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumb?: string;
}

const PageBanner = ({ title, subtitle, backgroundImage, breadcrumb }: PageBannerProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  
  let dynamicImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg";
  if (path.includes("about")) dynamicImage = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg";
  else if (path.includes("job") || path.includes("search") || path.includes("drive")) dynamicImage = "https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg";
  else if (path.includes("media") || path.includes("news") || path.includes("blog")) dynamicImage = "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg";
  else if (path.includes("team")) dynamicImage = "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg";
  else if (path.includes("service") || path.includes("employability") || path.includes("partnership")) dynamicImage = "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg";
  else if (path.includes("contact") || path.includes("join")) dynamicImage = "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg";
  else if (path.includes("faq")) dynamicImage = "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg";
  else if (path.includes("privacy") || path.includes("terms") || path.includes("data") || path.includes("payment") || path.includes("register")) dynamicImage = "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"; 

  // Resolve topic-specific image if default is passed or missing
  const resolvedImage = backgroundImage && backgroundImage !== "/assets/img/slider.jpg" 
    ? backgroundImage 
    : dynamicImage;

  // Helper to split title for dual-color effect
  const renderTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 1) return <span className="text-white">{text}</span>;
    
    const firstPart = words[0];
    const restPart = words.slice(1).join(" ");
    
    return (
      <>
        <span className="text-white">{firstPart}</span>
        <span className="text-white ml-3">{restPart}</span>
      </>
    );
  };

  return (
    <div className="relative h-[260px] md:h-[350px] flex items-center overflow-hidden">
      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={resolvedImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-slate-950/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl pt-6 md:pt-10 flex flex-col items-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/60 font-black text-[10px] uppercase tracking-[0.2em] mb-4">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{breadcrumb || title}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase px-4 leading-[1.1]">
            {renderTitle(title)}
          </h1>
          {subtitle && (
            <p className="text-blue-100/90 text-base md:text-lg font-bold italic tracking-wide max-w-2xl mx-auto px-6 drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageBanner;