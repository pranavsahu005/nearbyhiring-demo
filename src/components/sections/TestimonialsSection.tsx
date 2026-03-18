import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  // --- Indian Clients ---
  {
    name: "Rahul Sharma",
    role: "Delivery Associate, Delhi",
    avatar: "/assets/img/person/rahul.png",
    initials: "RS",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "I found a job within 2 days of registering on NearbyHiring. The process was so easy — just filled my profile and employers started calling me!",
  },
  {
    name: "Priya Verma",
    role: "Retail Staff, Mumbai",
    avatar: "/assets/img/person/priya.png",
    initials: "PV",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "NearbyHiring showed me jobs literally 5 minutes from my house. I didn't have to travel far and the salary was better than what I expected.",
  },
  {
    name: "Atul Kumar",
    role: "IT Support, Bangalore",
    avatar: "/assets/img/person/atul.png",
    initials: "AK",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "Best job platform for freshers. No experience was needed and my interview got scheduled within 48 hours of applying.",
  },
  {
    name: "Sunita Devi",
    role: "Healthcare Worker, Pune",
    avatar: "/assets/img/person/sunita.png",
    initials: "SD",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "NearbyHiring is simple and in Hindi too. I was scared to use job portals but this one made everything easy for me. I love it!",
  },
  {
    name: "Rohan Gupta",
    role: "Security Guard, Hyderabad",
    avatar: "/assets/img/person/rahul.png",
    initials: "RG",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "Got my job within a week. The employer was verified and genuine. NearbyHiring ye sach mein kaam karta hai!",
  },
  {
    name: "Kavya Nair",
    role: "Receptionist, Kochi",
    avatar: "/assets/img/person/kavya.png",
    initials: "KN",
    rating: 5,
    tag: "🇮🇳 India",
    quote: "NearbyHiring helped me find the right job near my home. The process was fast and the employers were professional.",
  },
  // --- Global Clients ---
  {
    name: "Sarah Mitchell",
    role: "HR Manager, USA",
    avatar: "/assets/img/person/person-f-3.webp",
    initials: "SM",
    rating: 5,
    tag: "🌍 Global",
    quote: "We partnered with ITI-Eduskill to hire skilled ITI graduates and the quality of talent we received was exceptional. Highly recommend.",
  },
  {
    name: "James Rowland",
    role: "Operations Head, UK",
    avatar: "/assets/img/person/person-m-2.webp",
    initials: "JR",
    rating: 5,
    tag: "🌍 Global",
    quote: "The platform is incredibly well-organized. Finding industry-ready candidates from India has never been easier for our global projects.",
  },
  {
    name: "Linda Hoffmann",
    role: "Talent Acquisition, Germany",
    avatar: "/assets/img/person/person-f-5.webp",
    initials: "LH",
    rating: 5,
    tag: "🌍 Global",
    quote: "We needed skilled tradespeople for our manufacturing facility. NearbyHiring delivered the right candidates quickly and efficiently.",
  },
  {
    name: "Carlos Ortega",
    role: "Project Lead, UAE",
    avatar: "/assets/img/person/person-m-9.webp",
    initials: "CO",
    rating: 5,
    tag: "🌍 Global",
    quote: "Working with ITI-Eduskill has been a game changer for our Dubai operations. The candidates are skilled, disciplined and ready to work.",
  },
  {
    name: "Aisha Al-Rashid",
    role: "Placement Officer, Qatar",
    avatar: "/assets/img/person/person-f-8.webp",
    initials: "AA",
    rating: 5,
    tag: "🌍 Global",
    quote: "The recruitment process with NearbyHiring was seamless. We placed 25 ITI graduates and all of them exceeded expectations.",
  },
  {
    name: "Robert Chen",
    role: "CEO, Singapore",
    avatar: "/assets/img/person/person-m-12.webp",
    initials: "RC",
    rating: 5,
    tag: "🌍 Global",
    quote: "Partnering with Nearby Hiring gave us access to India's best technical talent. A platform I trust for all our Asia-Pacific hiring needs.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => { setCurrent(i); startTimer(); };
  const prev = () => { setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); startTimer(); };
  const next = () => { setCurrent((p) => (p + 1) % testimonials.length); startTimer(); };

  const t = testimonials[current];

  return (
    <section className="section-offwhite section-padding" id="testimonials">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center" data-reveal>
          <p className="section-eyebrow">Success Stories</p>
          <h2 className="section-title">
            Real People,{" "}
            <span className="gradient-text">Real Jobs</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-md">
            Thousands of job seekers across India trust NearbyHiring to find their next opportunity.
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="relative" data-reveal>
          <div
            className="card-base p-8 md:p-12 relative overflow-hidden"
            key={current}
            style={{ animation: "page-in 0.4s ease both" }}
          >
            {/* Quote decoration */}
            <Quote
              className="absolute top-6 right-8 opacity-5"
              style={{ width: "80px", height: "80px", color: "#1B5EF7" }}
            />

            {/* Stars + Tag */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#F59E0B" }} />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-50 text-blue-500 border border-blue-100">
                {t.tag}
              </span>
            </div>

            {/* Quote */}
            <p
              className="text-xl font-medium leading-relaxed mb-8"
              style={{
                color: "hsl(var(--text-dark))",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-white shadow-md flex items-center justify-center">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      img.parentElement!.innerHTML = `<span style="color:#3b82f6;font-weight:900;font-size:1.1rem;font-style:italic">${t.initials}</span>`;
                    }}
                  />
                ) : (
                  <span className="text-lg font-black text-blue-600 italic tracking-tighter">
                    {t.initials}
                  </span>
                )}
              </div>
              <div>
                <p className="font-extrabold text-base text-slate-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t.name}
                </p>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              className="touch-target flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: current === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: current === i ? "#1B5EF7" : "rgba(27,94,247,0.2)",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="touch-target flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
