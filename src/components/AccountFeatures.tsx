
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle2, Facebook, Shield } from "lucide-react";

const AccountFeatures = () => {
  return (
    <section className="py-24 dark:bg-background/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] -z-10"></div>
      
      {/* Cosmic dots */}
      <div className="absolute inset-0 overflow-hidden -z-10 dark:block hidden dark:cosmic-dots opacity-30"></div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left column - Account features */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 dark:border-primary/30 shadow-[0_0_10px_rgba(0,190,255,0.2)]">
              <Shield className="h-3.5 w-3.5 mr-1 text-primary" />
              Premium Accounts
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight dark:text-white dark:dark-glow-text">
              Facebook Ad Accounts <span className="gradient-text">Engineered for Agencies</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Our licensed accounts provide agencies with exclusive features and protections unavailable through standard channels.
            </p>
            
            <div className="space-y-5">
              {[
                "Advanced ban prevention systems built into each account",
                "Unlimited daily spending potential from day one",
                "Preferential ad delivery resulting in 30-50% lower CPMs",
                "Direct credit line backed by Facebook with flexible terms",
                "Cashback program returning 1-3% of your clients' total ad spend",
                "Priority access to Facebook representatives for support",
                "Multiple business manager capabilities with seamless client onboarding"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="dark:text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Visualized account */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square max-w-[500px] mx-auto relative" style={{ perspective: "1000px" }}>
              <motion.div
                className="relative w-full h-full"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -5, 0, 5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Account visualization - glowing card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 dark:bg-black/40 backdrop-blur-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:dark-glow">
                  {/* Prismatic edge effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-primary via-accent to-primary/50 blur-sm" />
                    <div className="absolute inset-0 opacity-10 dark:dark-grid-bg" />
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Card header with glowing accent */}
                    <div className="flex items-center justify-between mb-8 relative">
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full mix-blend-screen filter blur-xl opacity-10"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,190,255,0.3)]"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Facebook className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-white text-xl">Licensed Account</h3>
                          <p className="text-primary/80">Premium Agency Access</p>
                        </div>
                      </div>
                      <motion.div 
                        className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Activated
                      </motion.div>
                    </div>
                    
                    {/* Metrics dashboard */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <motion.div 
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px -5px rgba(0, 190, 255, 0.15)",
                          translateY: -2
                        }}
                      >
                        <p className="text-xs text-gray-400">Daily Spend Limit</p>
                        <p className="font-semibold text-xl text-white">Unlimited</p>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 25px -5px rgba(0, 190, 255, 0.15)",
                          translateY: -2
                        }}
                      >
                        <p className="text-xs text-gray-400">Ban Risk Level</p>
                        <p className="font-semibold text-xl text-white">Minimal</p>
                        <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                          <div className="h-full w-[10%] bg-green-400 rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* CPM Comparison */}
                    <motion.div 
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 flex-1"
                      whileHover={{ boxShadow: "0 10px 30px -5px rgba(0, 190, 255, 0.1)" }}
                    >
                      <h4 className="font-medium mb-4 text-white flex items-center">
                        <motion.span 
                          className="inline-block w-2 h-2 rounded-full bg-primary mr-2"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.span>
                        CPM Performance Comparison
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Standard Accounts</span>
                            <span className="text-white">$12.40</span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full">
                            <div className="h-full w-full bg-gray-600/50 rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Licensed Accounts</span>
                            <span className="text-primary">$6.20</span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full">
                            <div className="h-full w-1/2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="pt-2 flex justify-between items-center">
                          <span className="text-xs text-gray-400">Average improvement</span>
                          <span className="text-green-400 text-sm font-medium">+50% Performance</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/30"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountFeatures;
