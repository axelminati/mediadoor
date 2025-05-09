
import React from 'react';
import { motion } from "framer-motion";
import { ShieldCheck, Ban, AlertTriangle, ThumbsUp, CheckSquare, MessageCircle, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContact } from "@/utils/facebookPixel";
import { trackRedditEvent } from "@/utils/redditPixel";
import { trackLeadEvent } from "@/utils/gtmTracking";
import { useIsMobile } from "@/hooks/use-mobile";

const EcomIntroSection = () => {
  const isMobile = useIsMobile();
  const handleWhatsAppClick = () => {
    trackContact();
    trackRedditEvent('Lead', {
      lead_type: 'intro_whatsapp'
    });
    trackLeadEvent({
      source: "Intro WhatsApp Button",
      buttonText: "WhatsApp",
      buttonLocation: "EcomIntroSection"
    });
    window.open("https://api.whatsapp.com/send/?phone=34647838656&text=Hi%2C+I%27m+interested+in+your+agency+ad+accounts%21&type=phone_number&app_absent=0", "_blank");
  };
  const handleTelegramClick = () => {
    trackContact();
    trackRedditEvent('Lead', {
      lead_type: 'intro_telegram'
    });
    trackLeadEvent({
      source: "Intro Telegram Button",
      buttonText: "Telegram",
      buttonLocation: "EcomIntroSection"
    });
    window.open("https://t.me/Phasedigitalagency", "_blank");
  };
  const handleCallClick = () => {
    trackContact();
    trackRedditEvent('Lead', {
      lead_type: 'intro_call'
    });
    trackLeadEvent({
      source: "Intro Call Button",
      buttonText: "Call",
      buttonLocation: "EcomIntroSection"
    });
    window.open("https://calendly.com/phasedigital-agency/30min", "_blank");
  };
  return <section className="dark:bg-background relative overflow-hidden border-b border-purple-500/20 py-[35px] md:py-[60px] lg:py-[80px]">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-red-500/5 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div className="grid md:grid-cols-7 gap-8 md:gap-12 lg:gap-16 items-center" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            <motion.div className="md:col-span-4 space-y-5 text-center md:text-center order-1" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-2 justify-center mx-auto w-auto">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Facebook Ad Struggles
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-center">
                <span className="text-white">Ad account bans </span>
                <span className="text-white">slowing your growth?</span>{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">We've got your back.</span>
              </h1>
              
              <p className="text-lg text-center text-slate-50">
                Get a ban-resistant ad account today - click below to speak with us instantly.
              </p>
              
              {isMobile && <motion.div className="bg-black/40 border border-purple-500/30 p-6 rounded-xl shadow-lg shadow-purple-500/10 mt-6 text-center" initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 border border-green-500/30">
                      <ShieldCheck className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Our Solution</h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-left">
                      <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-white">Ban-resistant Facebook ad accounts</span> that keep running even with &#34;risky&#34; products
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3 text-left">
                      <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-white">Affordable for all business sizes</span> from small dropshippers to large stores
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3 text-left">
                      <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-white">40% lower CPMs</span> means better ROAS and higher profits for you
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3 text-left">
                      <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-white">Setup within 24 hours</span> so you can get back to scaling fast
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Button className="w-full sm:w-auto relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white" onClick={handleWhatsAppClick}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button className="w-full sm:w-auto relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white" onClick={handleTelegramClick}>
                      <Send className="mr-2 h-4 w-4" />
                      Telegram
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-purple-200 hover:bg-purple-50 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/5" onClick={handleCallClick}>
                      <Calendar className="mr-2 h-4 w-4 text-purple-500" />
                      Call
                    </Button>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3">No commitments, just solutions to your ad problems. We'll answer any questions and get you setup ASAP.</p>
                </motion.div>}
              
              <div className="space-y-3 pt-2 text-center">
                <div className="flex items-start gap-3 text-left">
                  <Ban className="h-5 w-5 text-red-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Constant Account Bans</h4>
                    <p className="text-sm text-gray-400">Tired of waking up to "Your ad account has been disabled" notifications?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-left">
                  <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">High CPMs & Poor Results</h4>
                    <p className="text-sm text-gray-400">Frustrating ad costs eating into your profit margins and hurting ROAS?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-left">
                  <CheckSquare className="h-5 w-5 text-red-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">&#34;Risky&#34; Products</h4>
                    <p className="text-sm text-gray-400">Selling products that Facebook's policy team frequently flags or rejects?</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {!isMobile && <motion.div className="md:col-span-3 bg-black/40 border border-purple-500/30 p-6 rounded-xl shadow-lg shadow-purple-500/10 order-2" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500/20 border border-green-500/30">
                    <ShieldCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Our Solution</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-left">
                    <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white">Ban-resistant Facebook ad accounts</span> that keep running even with &#34;risky&#34; products
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 text-left">
                    <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white">Affordable for all business sizes</span> from small dropshippers to large stores
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 text-left">
                    <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white">40% lower CPMs</span> means better ROAS and higher profits for you
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3 text-left">
                    <ThumbsUp className="h-5 w-5 text-green-400 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-white">Setup within 24 hours</span> so you can get back to scaling fast
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <Button className="w-full sm:w-auto relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white" onClick={handleWhatsAppClick}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button className="w-full sm:w-auto relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white" onClick={handleTelegramClick}>
                    <Send className="mr-2 h-4 w-4" />
                    Telegram
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto border-purple-200 hover:bg-purple-50 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/5" onClick={handleCallClick}>
                    <Calendar className="mr-2 h-4 w-4 text-purple-500" />
                    Call
                  </Button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-3">No commitments, just solutions to your ad problems. We'll answer any questions and get you setup ASAP.</p>
              </motion.div>}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default EcomIntroSection;
