
import React from "react";
import { Play, Image as ImageIcon, Newspaper, Mic2, ArrowRight, Share2, Download, ExternalLink, PlayCircle } from "lucide-react";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface MediaItem {
  title: string;
  description: string;
  type: "video" | "image" | "article";
  image: string;
}

const MediaCard = ({ item }: { item: MediaItem }) => (
  <div className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-700">
    <div className="relative aspect-video overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
        {item.type === "video" ? (
          <PlayCircle className="h-16 w-16 text-white" />
        ) : (
          <div className="flex gap-4">
            <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
              <ExternalLink className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
        {item.type === "video" ? <Play className="h-3 w-3 fill-current" /> : <ImageIcon className="h-3 w-3" />}
        {item.type}
      </div>
    </div>
    <div className="p-10">
      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight">
        {item.title}
      </h3>
      <p className="text-slate-500 font-medium leading-relaxed mb-8">
        {item.description}
      </p>
      <button className="flex items-center gap-2 text-blue-600 font-black uppercase text-sm tracking-wider hover:gap-4 transition-all">
        Read More
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const Media = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  const mediaItems: MediaItem[] = [
    {
      title: t("media_news_1_title"),
      description: t("media_news_1_desc"),
      type: "video",
      image: "/assets/img/features/media_job_fair.png"
    },
    {
      title: t("media_news_2_title"),
      description: t("media_news_2_desc"),
      type: "article",
      image: "/assets/img/features/media_govt_schemes.png"
    },
    {
      title: t("media_news_3_title"),
      description: t("media_news_3_desc"),
      type: "image",
      image: "/assets/img/features/media_success_stories.png"
    }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={t("media_title")}
        subtitle={t("media_subtitle")}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("media_title")}
      />
      
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-black text-[9px] mb-3 uppercase tracking-[0.2em] italic shadow-sm">
                <Mic2 className="h-3 w-3" />
                Press & Media
              </div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-4 italic uppercase text-center leading-[1.1]">
                Latest <span className="text-blue-600">Industry Updates</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {mediaItems.map((item, idx) => (
                <MediaCard key={idx} item={item} />
              ))}
            </div>

            <div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl text-center md:text-left">
                  <Newspaper className="h-12 w-12 text-blue-200 mb-6 mx-auto md:mx-0" />
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight italic">
                    Download Media Kit
                  </h2>
                  <p className="text-blue-100 text-lg font-medium leading-relaxed">
                    Access official press releases, brand assets, and high-resolution images for publication.
                  </p>
                </div>
                <button className="flex-shrink-0 px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-premium hover:text-white transition-all text-sm shadow-xl shadow-blue-900/20 uppercase italic flex items-center gap-3">
                  Download Kit
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Media;

