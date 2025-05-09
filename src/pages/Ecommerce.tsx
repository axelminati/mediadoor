
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import EcomHero from "@/components/EcomHero";
import EcomBenefits from "@/components/EcomBenefits";
import EcomHowItWorks from "@/components/EcomHowItWorks";
import EcomFeatures from "@/components/EcomFeatures";
import EcomCashback from "@/components/EcomCashback";
import EcomCallToAction from "@/components/EcomCallToAction";
import EcomIntroBar from "@/components/EcomIntroBar";
import EcomIntroSection from "@/components/EcomIntroSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Ecommerce = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Update document title and meta description
    document.title = "Phase Digital Agency - Powerful Ad Accounts";
    
    // Find meta description tag or create it if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Powerful ad accounts for your agency');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="pt-0">
          <EcomIntroBar />
          <EcomIntroSection />
          <EcomHero />
          <EcomBenefits />
          <EcomCashback />
          <EcomFeatures />
          <Testimonials />
          <EcomHowItWorks />
          <EcomCallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;
