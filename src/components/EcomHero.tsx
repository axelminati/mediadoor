import { useIsMobile } from "@/hooks/use-mobile";
import BackgroundEffects from "./ecom-hero/BackgroundEffects";
import HeroContent from "./ecom-hero/HeroContent";
import StorePerformanceCard from "./ecom-hero/StorePerformanceCard";
const EcomHero = () => {
  const isMobile = useIsMobile();
  return <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden dark:bg-background py-[46px]">
      <BackgroundEffects />
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content with animations */}
          <HeroContent />
          
          {/* 3D hero image with dark mode styling - Hidden on mobile */}
          <div className={`w-full lg:w-1/2 relative ${isMobile ? 'hidden' : 'block'}`}>
            <StorePerformanceCard />
          </div>
        </div>
      </div>
    </div>;
};
export default EcomHero;