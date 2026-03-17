import { MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const JobsSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "remote" | "fresher">("all");

  const jobs = [
    {
      title: "Delivery Executive",
      company: "Zomato",
      location: "Mumbai, MH",
      type: t("job_type_full_time"),
      salary: "₹15,000 – ₹22,000/mo",
      tags: ["Fresher OK", "Bike Required"],
      color: "#E71D36",
      initials: "Z",
    },
    {
      title: "Retail Sales Associate",
      company: "Reliance Retail",
      location: "Delhi, DL",
      type: t("job_type_full_time"),
      salary: "₹12,000 – ₹18,000/mo",
      tags: ["No Experience", "Female OK"],
      color: "#1B5EF7",
      initials: "RR",
    },
    {
      title: "Customer Support",
      company: "Flipkart",
      location: "Bangalore, KA",
      type: t("job_type_wfh"),
      salary: "₹18,000 – ₹25,000/mo",
      tags: ["WFH", "Graduate"],
      color: "#F7971B",
      initials: "FK",
    },
    {
      title: "Security Guard",
      company: "G4S India",
      location: "Hyderabad, TS",
      type: t("job_type_full_time"),
      salary: "₹10,000 – ₹14,000/mo",
      tags: ["12th Pass", "Male Only"],
      color: "#2D6A4F",
      initials: "G4",
    },
    {
      title: "Warehouse Staff",
      company: "Amazon India",
      location: "Pune, MH",
      type: t("job_type_contract"),
      salary: "₹14,000 – ₹20,000/mo",
      tags: ["Fresher OK", "10th Pass"],
      color: "#FF9900",
      initials: "AI",
    },
    {
      title: "Data Entry Operator",
      company: "TCS iON",
      location: "Chennai, TN",
      type: t("job_type_part_time"),
      salary: "₹10,000 – ₹15,000/mo",
      tags: ["WFH Option", "Typing 30wpm"],
      color: "#4B0082",
      initials: "TC",
    },
  ];

  const JobCard = ({ job }: { job: typeof jobs[0] }) => (
    <div className="job-card">
      <div className="flex items-start gap-3 mb-4">
        <div
          className="company-logo"
          style={{ background: `${job.color}18`, color: job.color }}
        >
          {job.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-bold text-sm leading-tight truncate"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {job.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{job.company}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "hsl(var(--muted))", color: "hsl(var(--text-body))" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 flex-shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3 w-3 flex-shrink-0" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#1B5EF7" }}>
          <Briefcase className="h-3 w-3 flex-shrink-0" />
          <span>{job.salary}</span>
        </div>
      </div>

      <a
        href="/jobs"
        className="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-all"
        style={{
          background: "hsl(var(--primary) / 0.08)",
          color: "hsl(var(--primary))",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "#1B5EF7";
          (e.currentTarget as HTMLElement).style.color = "white";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "hsl(var(--primary) / 0.08)";
          (e.currentTarget as HTMLElement).style.color = "hsl(var(--primary))";
        }}
      >
        {t("job_apply_now")} →
      </a>
    </div>
  );

  const filtered = jobs.filter((j) => {
    if (activeTab === "remote") return j.tags.some((t) => t.includes("WFH"));
    if (activeTab === "fresher") return j.tags.some((t) => t.includes("Fresher"));
    return true;
  });

  return (
    <section id="jobs" className="section-white section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center" data-reveal>
          <p className="section-eyebrow">{t("jobs_eyebrow")}</p>
          <h2 className="section-title">
            {t("jobs_title_prefix")}{" "}
            <span className="gradient-text">{t("jobs_title_accent")}</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 max-w-md">
            {t("jobs_desc")}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex justify-center gap-2 flex-wrap" data-reveal>
          {(["all", "remote", "fresher"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeTab === tab ? "#1B5EF7" : "hsl(var(--muted))",
                color: activeTab === tab ? "white" : "hsl(var(--text-body))",
                boxShadow: activeTab === tab ? "0 4px 12px rgba(27,94,247,0.3)" : "none",
              }}
            >
              {tab === "all" ? t("jobs_tab_all") : tab === "remote" ? t("jobs_tab_remote") : t("jobs_tab_fresher")}
            </button>
          ))}
        </div>

        {/* Job cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {filtered.map((job, i) => (
            <div
              key={i}
              data-reveal
              data-delay={`${i * 80}`}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center" data-reveal>
          <a href="/jobs" className="btn-primary btn-shimmer inline-flex items-center gap-2">
            {t("jobs_view_all_cta")}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
