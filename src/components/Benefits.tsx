import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Facebook, Zap, TrendingUp } from "lucide-react";
const Benefits = () => {
  return <section className="py-24 dark:bg-background relative overflow-hidden">
      {/* Dark mode background elements */}
      <div className="absolute top-0 left-0 w-full h-full dark:block -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>
      </div>
      
      {/* Horizontal glowing line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-[30%] hidden dark:block -z-10"></div>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-primary/30 dark:shadow-[0_0_10px_rgba(0,190,255,0.2)]">
            <Facebook className="h-3.5 w-3.5 mr-1 text-primary" />
            Core Benefits
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">Why Agencies Choose Our Ad Accounts Licenses</h2>
          <p className="text-muted-foreground text-lg">
            Direct access to Facebook with premium benefits unavailable to standard accounts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          icon: <ShieldCheck className="h-12 w-12 text-primary" />,
          title: "Ban-Resistant Accounts",
          description: "Our accounts feature enhanced protection systems that dramatically reduce the risk of bans, allowing you to run campaigns with confidence."
        }, {
          icon: <CreditCard className="h-12 w-12 text-accent" />,
          title: "Direct Credit Line",
          description: "Access Facebook-backed credit lines directly through our licensed accounts, improving your cash flow and scaling capabilities."
        }, {
          icon: <Zap className="h-12 w-12 text-amber-400" />,
          title: "Unlimited Ad Spend",
          description: "No more hitting spend caps or daily limits. Scale your clients' campaigns as high as needed with our unlimited spend accounts."
        }, {
          icon: <TrendingUp className="h-12 w-12 text-green-400" />,
          title: "Cashback on Ad Spend",
          description: "Earn back a percentage of your clients' ad spend, creating an additional revenue stream for your agency."
        }, {
          icon: <Facebook className="h-12 w-12 text-primary" />,
          title: "Better CPM Performance",
          description: "Our licensed accounts receive preferential treatment from Facebook's ad delivery systems, resulting in significantly lower CPMs."
        }, {
          icon: <Zap className="h-12 w-12 text-purple-400" />,
          title: "Direct Facebook Connection",
          description: "Bypass the standard support channels and connect directly with Facebook representatives for faster issue resolution."
        }].map((benefit, index) => <motion.div key={index} className="group p-8 rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,190,255,0.2)] transition-all duration-300" initial={{
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
              <div className="mb-6 relative">
                <div className="absolute -z-10 rounded-full w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent blur-xl"></div>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Benefits;