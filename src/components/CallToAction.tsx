
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Facebook, ShieldCheck, CreditCard, TrendingUp, MessageCircle, Send, Infinity } from "lucide-react";
import { trackContact } from "@/utils/facebookPixel";
import { trackRedditEvent } from "@/utils/redditPixel";
import { trackLeadEvent } from "@/utils/gtmTracking";

const CallToAction = () => {
  // Handle WhatsApp click with tracking
  const handleWhatsAppClick = () => {
    // Track Facebook Pixel event
    trackContact();
    
    // Track Reddit Pixel event
    trackRedditEvent('Lead', { lead_type: 'whatsapp' });
    
    // Track in GTM dataLayer
    trackLeadEvent({
      source: "WhatsApp Button",
      buttonText: "Chat on WhatsApp",
      buttonLocation: "MainCallToAction"
    });
    
    // Open WhatsApp with updated link
    window.open("https://api.whatsapp.com/send/?phone=34647838656&text=Hi%2C+I%27m+interested+in+your+agency+ad+accounts%21&type=phone_number&app_absent=0", "_blank");
  };

  // Handle Telegram click with tracking
  const handleTelegramClick = () => {
    // Track Facebook Pixel event
    trackContact();
    
    // Track Reddit Pixel event
    trackRedditEvent('Lead', { lead_type: 'telegram' });
    
    // Track in GTM dataLayer
    trackLeadEvent({
      source: "Telegram Button",
      buttonText: "Chat on Telegram",
      buttonLocation: "MainCallToAction"
    });
    
    // Open Telegram
    window.open("https://t.me/Phasedigitalagency", "_blank");
  };

  // Handle Call booking click with tracking
  const handleCallBookingClick = () => {
    // Track Facebook Pixel event
    trackContact();
    
    // Track Reddit Pixel event
    trackRedditEvent('Lead', { lead_type: 'call' });
    
    // Track in GTM dataLayer
    trackLeadEvent({
      source: "Call Button",
      buttonText: "Book a Call",
      buttonLocation: "MainCallToAction"
    });
    
    // Open Calendly
    window.open("https://calendly.com/phasedigital-agency/30min", "_blank");
  };

  return (
    <section className="py-24 dark:bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>
      </div>
      
      {/* Cosmic dots */}
      <div className="absolute inset-0 overflow-hidden -z-10 dark:cosmic-dots opacity-30"></div>

      <div className="container-custom">
        <motion.div 
          className="max-w-4xl mx-auto bg-black/40 border border-white/10 p-10 md:p-16 rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Background glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          
          {/* Prismatic border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-20 animate-glow"></div>
          
          {/* Content */}
          <div className="relative text-center">
            <motion.div 
              className="flex items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ShieldCheck className="h-10 w-10 text-primary" />
              <Facebook className="h-10 w-10 text-accent" />
              <CreditCard className="h-10 w-10 text-green-400" />
              <TrendingUp className="h-10 w-10 text-amber-400" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white dark-glow-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Advertising Agency?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Get licensed to issue unlimited-spend, ban-resistant Facebook accounts with direct credit lines and cashback on all client ad spend.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] text-md px-8 py-6 h-auto"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] text-md px-8 py-6 h-auto"
                onClick={handleTelegramClick}
              >
                <Send className="mr-2 h-5 w-5" />
                <span>Chat on Telegram</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-white shadow-[0_0_20px_rgba(168,85,247,0.1)] text-md px-8 py-6 h-auto"
                onClick={handleCallBookingClick}
              >
                <Calendar className="mr-2 h-5 w-5 text-purple-400" />
                <span>Book a Call</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-10 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-3xl font-bold text-primary mb-1">50%+</div>
                <div className="text-sm text-gray-400">Improved CPMs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">
                  <Infinity className="h-8 w-8 inline-block" />
                </div>
                <div className="text-sm text-gray-400">Spend Limits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">5%</div>
                <div className="text-sm text-gray-400">Max Cashback</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1">95%</div>
                <div className="text-sm text-gray-400">Ban Protection</div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Get setup today and start earning within 24 hours
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
