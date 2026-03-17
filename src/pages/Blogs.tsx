
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Calendar, User, ArrowRight, Sparkles, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  id: number;
}

const BlogCard = ({ title, excerpt, date, author, category, image, id }: BlogCardProps) => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-3 flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute top-6 left-6">
          <span className="px-5 py-2 bg-white/20 backdrop-blur-xl text-white rounded-full font-black text-[10px] uppercase tracking-widest border border-white/20">
            {category}
          </span>
        </div>
        <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
            <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-colors border border-white/10 shadow-lg">
              <Heart className="h-4 w-4 text-white" />
            </button>
            <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-colors border border-white/10 shadow-lg">
              <Share2 className="h-4 w-4 text-white" />
            </button>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-6 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] italic mb-6">
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-blue-600" /> {date}</span>
          <span className="flex items-center gap-2"><User className="h-4 w-4 text-blue-600" /> {author}</span>
        </div>
        <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase italic tracking-tighter leading-tight mb-5 line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-500 font-bold text-sm leading-relaxed italic opacity-80 line-clamp-3 mb-8 flex-1">
          {excerpt}
        </p>
        <div className="pt-8 border-t border-slate-50 mt-auto">
          <Link to={`/blog/${id}`} className="group/link flex items-center justify-between text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] italic">
            <span className="group-hover/link:text-blue-600 transition-colors">{t("nav_learn_more")}</span>
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-50 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all shadow-sm">
              <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  useScrollReveal();
  const { t } = useLanguage();
  
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Modern Recruitment",
      excerpt: "Explore how artificial intelligence is transforming how companies find and hire talent in 2026. From automated screening to prediction models.",
      date: "Mar 15, 2026",
      author: "Amit Jaitly",
      category: "TECHNOLOGY",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Essential Skills for the Gig Economy",
      excerpt: "Master the art of freelancing and gig work with these essential skills that every professional needs in the modern workforce.",
      date: "Mar 12, 2026",
      author: "Deepika Agrawal",
      category: "CAREER",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Building a Multi-Role Career Platform",
      excerpt: "Behind the scenes of NearbyHiring's journey to create a unified platform for students, associates, and government agencies.",
      date: "Mar 10, 2026",
      author: "Tech Team",
      category: "INSIGHTS",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Strategies for Global Talent Mobility",
      excerpt: "How companies are navigating the complexities of international hiring and remote team management in a global world.",
      date: "Mar 08, 2026",
      author: "Sanjeev Verma",
      category: "STRATEGY",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "The Rise of Specialized IT Institutes",
      excerpt: "Why specialized training centers are becoming vital for bridging the gap between student education and industry demand.",
      date: "Mar 05, 2026",
      author: "Education Wing",
      category: "EDUCATION",
      image: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Data Ethics in Candidate Evaluation",
      excerpt: "Understanding the balance between data-driven hiring and personal privacy in the digital age of recruitment.",
      date: "Mar 02, 2026",
      author: "Legal Team",
      category: "POLICIES",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 7,
      title: "Unlocking Bharat's Rural Talent Pool",
      excerpt: "How NearbyHiring is reaching deep into rural districts to connect talented youth with premium global opportunities.",
      date: "Feb 28, 2026",
      author: "Mission Team",
      category: "IMPACT",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 8,
      title: "Preparing for the Next Industrial Drive",
      excerpt: "Everything you need to know about upcoming recruitment drives and how ITI students can prepare for success.",
      date: "Feb 25, 2026",
      author: "Career Coach",
      category: "TRAINING",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={t("nav_blogs")}
        subtitle={t("blog_hero_subtitle") || "Insights & Professional Stories"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={t("nav_blogs")}
      />
      <div className="py-32 bg-[#F8FAFC] min-h-screen relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-24" data-reveal>
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-50 text-blue-600 rounded-full font-black text-[11px] mb-8 uppercase tracking-[0.3em] italic border border-blue-100">
                  <Sparkles className="h-4 w-4" />
                  {t("blog_latest_insights")}
              </div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 mb-10 italic uppercase leading-none">
                  {t("blog_title_part1")} <span className="text-blue-600">{t("blog_title_part2")}</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-bold italic uppercase tracking-widest max-w-2xl mx-auto leading-relaxed opacity-70">
                  {t("blog_desc")}
              </p>
          </div>

          {/* Equal 4x2 Grid on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {posts.map((post) => (
              <div key={post.id}>
                 <BlogCard {...post} />
              </div>
            ))}
          </div>

          {/* Premium Newsletter Section */}
          <div className="mt-40 p-16 md:p-32 rounded-[4.5rem] bg-slate-950 relative overflow-hidden shadow-2xl" data-reveal>
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                  <div>
                      <h3 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-10 leading-none">
                          {t("blog_news_title_1")} <span className="text-blue-500">{t("blog_news_title_2")}</span>
                      </h3>
                      <p className="text-white/40 text-xl font-bold italic uppercase tracking-[0.1em] mb-16 max-w-xl">
                          {t("blog_news_desc")}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-5">
                          <input 
                              type="email" 
                              placeholder={t("blog_email_placeholder")} 
                              className="flex-[2] bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-white font-black text-sm tracking-widest focus:ring-4 focus:ring-blue-500/20 transition-all outline-none"
                          />
                          <button className="flex-1 px-12 py-6 bg-blue-600 text-white font-black rounded-3xl shadow-xl shadow-blue-900/40 hover:scale-105 active:scale-95 transition-all text-sm uppercase italic tracking-[0.2em]">
                              {t("blog_subscribe_btn")}
                          </button>
                      </div>
                  </div>
                  <div className="hidden lg:block">
                      <div className="grid grid-cols-2 gap-8">
                          {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="aspect-square rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-all duration-700 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                                  <Sparkles className="h-12 w-12 text-white/10 group-hover:text-blue-500 transition-colors" />
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default Blogs;
