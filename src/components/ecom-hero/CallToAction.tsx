
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Calendar, CheckCircle2 } from "lucide-react";
import { trackContact } from "@/utils/facebookPixel";
import { trackRedditEvent } from "@/utils/redditPixel";
import { trackLeadEvent } from "@/utils/gtmTracking";

const CallToAction = () => {
  // Function to scroll to the bottom CTA section and track contact event
  const scrollToBottomCTA = () => {
    // Track Facebook Pixel event
    trackContact();
    
    // Track Reddit Pixel event
    trackRedditEvent('Lead', { lead_type: 'hero_cta' });
    
    // Track in GTM dataLayer
    trackLeadEvent({
      source: "Hero CTA Button",
      buttonText: "Bypass Account Bans Today",
      buttonLocation: "EcomHero"
    });
    
    // Scroll to CTA section
    const ctaSection = document.getElementById('ecom-cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <div className="flex flex-col gap-4">
      {/* Primary CTA Button */}
      <Button size="lg" className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg text-lg font-medium px-8 py-6 h-auto animate-pulse hover:animate-none" onClick={scrollToBottomCTA}>
        Bypass Account Bans Today
      </Button>
      
      {/* Trust Signals - Redesigned for a cleaner look */}
      <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">No commitment required</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">Fast, human support</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">Used by 300+ brands globally</span>
        </div>
      </div>
    </div>;
};

export default CallToAction;
