
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowRight, DollarSign, Percent, TrendingUp } from "lucide-react";

const CashbackSection = () => {
  return (
    <section className="py-24 dark:bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
      
      {/* Animated particle dots */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Cashback visualization */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary via-accent to-purple-600 shadow-[0_0_40px_rgba(0,190,255,0.3)]">
              <div className="bg-black p-8 md:p-10 rounded-[calc(1.5rem-4px)] h-full">
                <div className="flex items-center mb-10 gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Cashback Program</h4>
                    <p className="text-primary/80">Earn while your clients spend</p>
                  </div>
                </div>
                
                {/* Cashback calculation example */}
                <div className="space-y-6 mb-8">
                  <motion.div 
                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-400" />
                        <span className="text-white">Monthly Ad Spend</span>
                      </div>
                      <div className="text-xl font-mono font-semibold text-white">$500,000</div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <Percent className="h-5 w-5 text-primary" />
                        <span className="text-white">Cashback Rate</span>
                      </div>
                      <div className="text-xl font-mono font-semibold text-primary">5%</div>
                    </div>
                    
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-accent" />
                          <span className="text-white">Monthly Revenue</span>
                        </div>
                        <div className="text-xl font-mono font-semibold text-accent">$25,000</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-white">Annual Ad Spend</div>
                      <div className="text-xl font-mono font-semibold text-white">$6,000,000</div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-400" />
                        <span className="text-white">Annual Cashback</span>
                      </div>
                      <div className="text-xl font-mono font-semibold text-green-400">$300,000</div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="text-center text-xs text-gray-500">
                  *Example calculation. Actual cashback rates may vary based on total ad spend volume.
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Cashback info */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 dark:border-primary/30 shadow-[0_0_10px_rgba(0,190,255,0.2)]">
              <DollarSign className="h-3.5 w-3.5 mr-1 text-primary" />
              Passive Revenue
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight dark:text-white dark:dark-glow-text">
              Earn <span className="gradient-text">Cashback</span> On All Client Ad Spend
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Our unique agency licensing program allows you to earn between 1-3% cashback on all advertising spend that runs through your accounts.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Automatic Enrollment</h4>
                  <p className="text-gray-400">
                    All licensed agency accounts are automatically enrolled in our cashback program with no additional setup required.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Volume-Based Rates</h4>
                  <p className="text-gray-400">
                    Your cashback percentage increases with higher total ad spend volume, incentivizing you to scale your client base.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Monthly Payouts</h4>
                  <p className="text-gray-400">
                    Receive your cashback earnings via direct deposit on a monthly basis, creating a reliable revenue stream for your agency.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:to-primary hover:opacity-90 text-white shadow-[0_0_20px_rgba(0,190,255,0.3)]"
              size="lg"
              onClick={() => window.open("https://calendly.com/your-calendly-link", "_blank")}
            >
              <span className="mr-2">Calculate Your Potential Earnings</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;
