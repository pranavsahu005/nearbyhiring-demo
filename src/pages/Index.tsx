
import MainLayout from "@/components/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import StatsSection from "@/components/sections/StatsSection";
import WhySection from "@/components/sections/WhySection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import JobsSection from "@/components/sections/JobsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import LegacyAboutSection from "@/components/sections/LegacyAboutSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <MainLayout>
      <HeroSection />
      <WhatWeDoSection />
      <StatsSection />
      <WhySection />
      <ChallengesSection />
      <CompaniesSection />
      <TestimonialsSection />
      <JobsSection />
      <HowItWorksSection />
      <LegacyAboutSection />
      <HighlightsSection />
      <CategoriesSection />
      <ContactSection />
      <NewsletterSection />
    </MainLayout>
  );
};


export default Index;
