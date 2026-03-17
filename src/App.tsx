import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import Media from "./pages/Media";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DataProtection from "./pages/DataProtection";
import EmploymentServices from "./pages/EmploymentServices";
import RecruitmentData from "./pages/RecruitmentData";
import PaymentRefund from "./pages/PaymentRefund";
import Faq from "./pages/Faq";
import LatestJobs from "./pages/LatestJobs";
import NewsEvents from "./pages/NewsEvents";
import OurTeam from "./pages/OurTeam";
import UpcomingDrive from "./pages/UpcomingDrive";
import JoinUs from "./pages/JoinUs";
import Registration from "./pages/Registration";
import Partnership from "./pages/Partnership";
import Employability from "./pages/Employability";
import Blogs from "./pages/Blogs";
import AiResumeBuilder from "./pages/AiResumeBuilder";
import AiMockInterview from "./pages/AiMockInterview";
import AiCoverLetter from "./pages/AiCoverLetter";
import Support from "./pages/Support";
import Disclosure from "./pages/Disclosure";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import ScrollRestoration from "./components/ScrollRestoration";
import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient();

const App = () => {
  console.log("App Rendering...");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter>
            <ScrollRestoration />
            <SmoothScroll>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/media" element={<Media />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/data-protection" element={<DataProtection />} />
                <Route path="/employment-services" element={<EmploymentServices />} />
                <Route path="/recruitment-data" element={<RecruitmentData />} />
                <Route path="/payment-refund" element={<PaymentRefund />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/latest-jobs" element={<LatestJobs />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/upcoming-drive" element={<UpcomingDrive />} />
                <Route path="/join-us" element={<JoinUs />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/employability" element={<Employability />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/ai-resume-builder" element={<AiResumeBuilder />} />
                <Route path="/ai-mock-interview" element={<AiMockInterview />} />
                <Route path="/ai-cover-letter" element={<AiCoverLetter />} />
                <Route path="/support" element={<Support />} />
                <Route path="/disclosure" element={<Disclosure />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SmoothScroll>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
