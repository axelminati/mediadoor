
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import AccountFeatures from "@/components/AccountFeatures";
import CashbackSection from "@/components/CashbackSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="text-center my-8">
          <Link 
            to="/ecommerce" 
            className="inline-block text-lg font-medium text-purple-500 hover:text-purple-400 transition-colors"
          >
            E-commerce store owner? Visit our dedicated landing page →
          </Link>
        </div>
        <Benefits />
        {!isMobile && <AccountFeatures />}
        <HowItWorks />
        <CashbackSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
