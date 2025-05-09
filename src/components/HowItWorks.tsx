
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Key, Facebook, CreditCard, Zap } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-24 dark:bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-[120px] -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-[120px] -z-10"></div>
      
      {/* Horizontal glowing line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent top-1/2 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-primary/30 shadow-[0_0_10px_rgba(0,190,255,0.2)]">
            <Key className="h-3.5 w-3.5 mr-1 text-primary" />
            The Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">
            How Our Agency Licensing Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple process to get you connected directly with Facebook and supercharge your agency
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Key className="h-10 w-10 text-primary" />,
                title: "Apply for License",
                description: "Complete our simple application process to see if you qualify for our agency licensing program.",
                step: "01"
              },
              {
                icon: <Facebook className="h-10 w-10 text-primary" />,
                title: "Account Creation",
                description: "Once approved, we connect you directly with Facebook to create your licensed agency accounts.",
                step: "02"
              },
              {
                icon: <CreditCard className="h-10 w-10 text-primary" />,
                title: "Credit Line Setup",
                description: "Your accounts are configured with direct Facebook credit lines and unlimited spending capability.",
                step: "03"
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Start Operating",
                description: "Begin managing your clients' campaigns with superior performance, cashback, and ban protection.",
                step: "04"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-primary/30 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3),0_0_15px_rgba(0,190,255,0.2)] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-black/80 border border-primary/30 flex items-center justify-center text-sm font-mono text-primary shadow-[0_0_10px_rgba(0,190,255,0.3)]">
                  {step.step}
                </div>
                
                <div className="relative h-20 w-20 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
                  <div className="relative p-4 rounded-full bg-black/50 border border-primary/30 shadow-[0_0_15px_rgba(0,190,255,0.2)]">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
