import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Users, Star, Award, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TeamMember {
  name: string;
  role?: string;
  image: string;
  category: "core" | "advisory";
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2" data-reveal>
    <div className="relative mb-6 overflow-hidden rounded-[2.5rem] aspect-[4/5]">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
        <div className="flex gap-4">
          <a href="#" className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center">
      <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
        {member.name}
      </h3>
      {member.role && (
        <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">
          {member.role}
        </p>
      )}
    </div>
  </div>
);

const OurTeam = () => {
  const { language, t } = useLanguage();
  useScrollReveal();
  const team: TeamMember[] = [
    { name: "Amit Jaitly", image: "/assets/img/team/amit.png", category: "core" },
    { name: "Deepika Agrawal", image: "/assets/img/team/deepika.png", category: "core" },
    { name: "Ram Tripathi", image: "/assets/img/team/ram.png", category: "core" },
    { name: "Yashi Jain", image: "/assets/img/team/yashi.jpg", category: "core" },
    { name: "Deepanshi Malviya", image: "/assets/img/team/deepanshi.jpg", category: "core" },
    { name: "Ravi Raj Singh", image: "/assets/img/team/ravi.jpg", category: "core" },
  ];

  const advisory: TeamMember[] = [
    { name: "Dr Rakesh Dube", image: "/assets/img/team/rakesh.png", category: "advisory" },
    { name: "Mr Anurag Chaturvedi", image: "/assets/img/team/anurag.png", category: "advisory" },
    { name: "Ms Keren Sumi", image: "/assets/img/team/keren.png", category: "advisory" },
  ];

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "हमारी टीम" : "Our Team"}
        subtitle={language === 'hi' ? "Meet Our Visionaries" : "Meet Our Visionaries"}
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb={language === 'hi' ? "Our Team" : "Our Team"}
      />
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20" data-reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-bold text-sm mb-6">
                <Star className="h-4 w-4" />
                Excellence Driven
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 italic uppercase">
                The <span className="text-blue-600">Leadership</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-bold opacity-80 uppercase italic tracking-widest">
                A diverse team of experts dedicated to revolutionizing the recruitment and training landscape.
              </p>
            </div>

            <div className="mb-24">
              <div className="flex items-center gap-4 mb-12" data-reveal>
                <div className="h-12 w-2 bg-blue-600 rounded-full" />
                <h3 className="text-3xl font-black text-slate-900 italic uppercase tracking-tight">Core Leadership</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {team.map((member, idx) => (
                  <TeamMemberCard key={idx} member={member} />
                ))}
              </div>
            </div>

            <div className="relative py-20 px-10 bg-blue-premium rounded-[4rem] overflow-hidden" data-reveal>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex items-center gap-4 mb-12 justify-center">
                <Award className="h-8 w-8 text-blue-400" />
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">Advisory Board</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {advisory.map((member, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-[3rem] border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-500 group">
                    <div className="mb-6 overflow-hidden rounded-[2.5rem] aspect-square shadow-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                    </div>
                    <h4 className="text-xl font-black text-white text-center uppercase italic tracking-tight">{member.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OurTeam;
