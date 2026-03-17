
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import ReadingProgress from "./ReadingProgress";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#F4F7FF" }}>
      <ReadingProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default MainLayout;
