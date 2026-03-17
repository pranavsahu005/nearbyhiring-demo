const LegacyAboutSection = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" data-reveal>
             <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-[50px] blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                  alt="About NearbyHiring" 
                  className="rounded-[40px] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                />
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8" data-reveal data-delay="100">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
               हमारे बारे में <br /><span className="text-blue-600">(About Us)</span>
            </h2>
            <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
               <p>
                 शिक्षा, कौशल और रोजगार क्षेत्र में एक दशक से अधिक का अनुभव रखने वाला एडुस्किल समूह आज न केवल शिक्षण संस्थानों को सशक्त बना रहा है, बल्कि उन्हें उद्योग की बदलती प्रवृत्तियों के अनुसार तैयार कर रहा है।
               </p>
               <p>
                 आर्टिफिशियल इंटेलिजेंस और डाटा साइंस जैसी आधुनिक तकनीकों का उपयोग करके हम भविष्य की कार्यदुनिया की रूपरेखा तैयार कर रहे हैं।
               </p>
            </div>
            <div className="pt-6">
               <button className="btn-primary rounded-2xl px-10 py-4 btn-shimmer">
                 Read Full Story
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyAboutSection;
