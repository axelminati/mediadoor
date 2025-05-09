import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, ShieldCheck, Zap, User, Badge, BadgeCheck, MessageCircle, Send, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  return <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden dark:bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white -z-10 dark:hidden" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-100/40 to-transparent -z-10 dark:hidden" />
      
      <div className="absolute top-0 left-0 w-full h-full dark:block hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-70"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>
      </div>
      
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-[30%] hidden dark:block -z-10"></div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-accent border border-blue-100 shadow-sm mb-6 dark:from-primary/20 dark:to-accent/20 dark:border-primary/30 dark:shadow-[0_0_10px_rgba(0,190,255,0.2)]">
                <Facebook className="h-4 w-4 mr-2" />
                Get Licensed Today
              </div>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance dark:text-white" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              <span className="text-white dark:text-white">Issue your own </span>
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Agency Ad Accounts</span>
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>Get licensed to issue agency accounts and step into this highly profitable industry. Start your own agency by supplying 
unlimited, ban-proof ad accounts to brands across the world, and profit off their ad spend cashback and retainer fees.</motion.p>
            
            <motion.div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                <Button size="lg" className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 dark:shadow-[0_0_15px_rgba(34,197,94,0.3)]" 
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=34647838656&text=Hi%2C+I%27m+interested+in+your+agency+ad+accounts%21&type=phone_number&app_absent=0", "_blank")}>
                  <span className="absolute -inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-70"></span>
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4 text-white" />
                    Chat on WhatsApp
                  </span>
                </Button>
                <Button size="lg" className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]" onClick={() => window.open("https://t.me/+34647838656", "_blank")}>
                  <span className="absolute -inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-70"></span>
                  <span className="relative z-10 flex items-center mx-px">
                    <Send className="mr-2 h-4 w-4 text-white" />
                    Chat on Telegram
                  </span>
                </Button>
              </div>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-purple-200 hover:bg-purple-50 transition-all dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/5 group" onClick={() => window.open("https://calendly.com/phasedigital-agency/30min", "_blank")}>
                <Calendar className="mr-2 h-4 w-4 text-purple-500 transition-transform group-hover:scale-110" />
                <span>Book a Call</span>
              </Button>
            </motion.div>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50/80 text-green-700 shadow-sm border border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 transition-colors hover:bg-green-50">
                <ShieldCheck className="h-5 w-5 text-green-500 dark:text-green-400 shrink-0" />
                <span className="text-sm">Recurring subscriptions from all your clients</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 text-amber-700 shadow-sm border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20 transition-colors hover:bg-amber-50">
                <Zap className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0" />
                <span className="text-sm">Earn cashback from your clients' Ad Spend</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100 dark:bg-primary/10 dark:text-primary dark:border-primary/20 transition-colors hover:bg-blue-50">
                <Facebook className="h-5 w-5 text-blue-500 dark:text-primary shrink-0" />
                <span className="text-sm">Earn extra from setup fees</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/80 text-purple-700 shadow-sm border border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20 transition-colors hover:bg-purple-50">
                <User className="h-5 w-5 text-purple-500 dark:text-purple-400 shrink-0" />
                <span className="text-sm">Make connections</span>
              </div>
            </motion.div>
          </div>
          
          {isMobile ? null : <div className="w-full lg:w-1/2 relative">
              <motion.div className="aspect-square max-w-[500px] mx-auto relative" initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} style={{
            perspective: "1000px"
          }}>
                <motion.div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:mix-blend-screen dark:bg-primary/20 dark:opacity-50" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
                <motion.div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:mix-blend-screen dark:bg-accent/20 dark:opacity-50" animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} />
                
                <motion.div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent dark:via-primary/10" animate={{
              opacity: [0, 0.5, 0],
              backgroundPosition: ['0% 0%', '100% 100%']
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
                
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-lg transform hover:scale-[1.02] transition-transform dark:from-black/60 dark:to-black/40 dark:border-white/10 dark:shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:dark-glow">
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-primary via-accent to-blue-400 blur-sm dark:opacity-20" />
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6 relative">
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:mix-blend-screen dark:opacity-10"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                        <motion.div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]" whileHover={{
                      scale: 1.1,
                      rotate: 5
                    }} transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}>
                          <Facebook className="h-5 w-5 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold dark:text-white">Agency Account</h3>
                          <p className="text-xs text-muted-foreground">Premium License</p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div whileHover={{
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 150, 0.1)"
                }} className="flex-1 bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none py-[38px]">
                      <h4 className="font-medium mb-3 flex items-center dark:text-white">
                        <motion.span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" animate={{
                      scale: [1, 1.3, 1]
                    }} transition={{
                      duration: 2,
                      repeat: Infinity
                    }}></motion.span>
                        Client Campaigns
                      </h4>
                      <div className="space-y-3">
                        <motion.div className="flex items-center justify-between py-2 border-b border-gray-200/50 transition-colors hover:bg-white/20 dark:border-white/5 dark:hover:bg-white/5" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.1
                    }} whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      x: 5
                    }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-50 border border-white/70 flex items-center justify-center shadow-sm dark:bg-blue-500/10 dark:border-white/10">
                              <BadgeCheck className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                            </div>
                            <div>
                              <span className="font-medium dark:text-white">NexTech Solutions</span>
                              <div className="text-xs text-muted-foreground">E-commerce - $25K/month</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 text-xs bg-green-50 px-2 py-0.5 rounded-full border border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20">Active</span>
                          </div>
                        </motion.div>
                        
                        <motion.div className="flex items-center justify-between py-2 border-b border-gray-200/50 transition-colors hover:bg-white/20 dark:border-white/5 dark:hover:bg-white/5" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.2
                    }} whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      x: 5
                    }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-purple-50 border border-white/70 flex items-center justify-center shadow-sm dark:bg-purple-500/10 dark:border-white/10">
                              <Badge className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                            </div>
                            <div>
                              <span className="font-medium dark:text-white">CloudFlow SaaS</span>
                              <div className="text-xs text-muted-foreground">Software - $42K/month</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-600 text-xs bg-green-50 px-2 py-0.5 rounded-full border border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20">Active</span>
                          </div>
                        </motion.div>
                        
                        <motion.div className="flex items-center justify-between py-2 transition-colors hover:bg-white/20 dark:hover:bg-white/5" initial={{
                      opacity: 0,
                      y: 20
                    }} animate={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.3
                    }} whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      x: 5
                    }}>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-green-50 border border-white/70 flex items-center justify-center shadow-sm dark:bg-green-500/10 dark:border-white/10">
                              <User className="h-4 w-4 text-green-500 dark:text-green-400" />
                            </div>
                            <div>
                              <span className="font-medium dark:text-white">Metro Fitness Co.</span>
                              <div className="text-xs text-muted-foreground">Fitness - $15K/month</div>
                            </div>
                          </div>
                          <div>
                            <span className="text-blue-600 text-xs bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">New</span>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="mt-4 pt-2 grid grid-cols-3 gap-2">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Total Client Spend</p>
                          <p className="font-semibold dark:text-white">$82K/mo</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Clients</p>
                          <p className="font-semibold dark:text-white">3</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Cashback</p>
                          <p className="font-semibold dark:text-white">$6.5K/mo</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div className="absolute -top-5 -right-5 w-40 h-20 bg-gradient-to-r from-primary/30 to-accent/30 rounded-lg rotate-12 blur-xl -z-10 dark:opacity-30" animate={{
              rotate: [12, 15, 12, 10, 12],
              scale: [1, 1.05, 1, 0.98, 1]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}></motion.div>
                
                <motion.div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/20 dark:shadow-primary/30" animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}></motion.div>
                <motion.div className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/20 dark:shadow-accent/30" animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              scale: [1, 1.3, 1]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}></motion.div>
              </motion.div>
            </div>}
        </div>
      </div>
    </div>;
};
export default Hero;
