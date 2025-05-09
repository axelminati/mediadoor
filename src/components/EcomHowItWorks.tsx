
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { PhoneCall, CreditCard, CheckCircle, BarChart4, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
const EcomHowItWorks = () => {
  return <section className="dark:bg-background relative overflow-hidden py-[34px]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-purple-500/30 dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <CheckCircle className="h-3.5 w-3.5 mr-1 text-purple-500" />
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">
            How to Get Your Premium Ad Account
          </h2>
          <p className="text-muted-foreground text-lg">
            A straightforward three-step process to supercharge your e-commerce advertising
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
          icon: <PhoneCall className="h-12 w-12 text-purple-500" />,
          step: "01",
          title: "Reach Out",
          description: "Contact us through your preferred channel to discuss your e-commerce advertising needs and goals."
        }, {
          icon: <CreditCard className="h-12 w-12 text-indigo-500" />,
          step: "02",
          title: "Get Your Premium Account",
          description: "After approval, we'll provide you with a dedicated premium ad account optimized for e-commerce products and conversions."
        }, {
          icon: <BarChart4 className="h-12 w-12 text-pink-500" />,
          step: "03",
          title: "Scale With Confidence",
          description: "Launch campaigns with lower CPMs, better targeting, and no spending limits. Our team provides ongoing optimization support."
        }].map((step, index) => <motion.div key={index} className="relative" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              {/* Connecting line between steps */}
              {index < 2 && <div className="hidden md:block absolute top-24 left-full w-full h-px bg-gradient-to-r from-purple-500/50 via-purple-500/30 to-transparent -z-10"></div>}
              
              <div className="bg-black/40 border border-white/10 rounded-2xl p-8 h-full transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:border-purple-500/30">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-purple-500/20">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>)}
        </div>
        
        <motion.div className="mt-16 p-8 rounded-2xl bg-black/40 border border-white/10 max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2 text-white">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Ready to learn more about our premium ad accounts? Reach out through your preferred channel below and our team will get back to you promptly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-white flex items-center justify-center gap-2 py-5 h-auto" onClick={e => {
                e.preventDefault();
                window.open("https://wa.me/34647838656", "_blank");
              }}>
                  <MessageSquare className="h-5 w-5 text-green-400" />
                  <span>WhatsApp</span>
                </Button>
                
                <Button variant="outline" className="border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-white flex items-center justify-center gap-2 py-5 h-auto" onClick={e => {
                e.preventDefault();
                window.open("https://t.me/Phasedigitalagency", "_blank");
              }}>
                  <Send className="h-5 w-5 text-blue-400" />
                  <span>Telegram</span>
                </Button>
                
                <Button variant="outline" className="border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-white flex items-center justify-center gap-2 py-5 h-auto" onClick={e => {
                e.preventDefault();
                window.open("https://calendly.com/phasedigital-agency/30min", "_blank");
              }}>
                  <PhoneCall className="h-5 w-5 text-purple-400" />
                  <span>Book a Call</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default EcomHowItWorks;
