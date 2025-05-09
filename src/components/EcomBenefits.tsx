import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, ShoppingBag, BarChart, Zap, Share2 } from "lucide-react";
const EcomBenefits = () => {
  return <section className="dark:bg-background relative overflow-hidden py-0">
      {/* Dark mode background elements */}
      <div className="absolute top-0 left-0 w-full h-full dark:block -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-500/10 blur-[100px]"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>
      
      {/* Horizontal glowing line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent top-[30%] hidden dark:block -z-10"></div>

      <div className="container-custom py-[40px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-purple-500/30 dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <ShoppingBag className="h-3.5 w-3.5 mr-1 text-purple-500" />
            For E-commerce Stores
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">
            Why Our Ad Accounts Drive Higher Sales
          </h2>
          <p className="text-muted-foreground text-lg">
            Get access to premium Facebook advertising features and protection that help scale your store faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[{
          icon: <ShieldCheck className="h-12 w-12 text-green-400" />,
          title: "Ban-Resistant Protection",
          description: "Our accounts have advanced protection protocols that reduce the risk of bans by 95%, allowing you to advertise with confidence."
        }, {
          icon: <BarChart className="h-12 w-12 text-purple-500" />,
          title: "Lower CPMs, Higher ROAS",
          description: "Enjoy CPMs that are 40% lower than standard accounts, dramatically improving your return on ad spend and profitability."
        }, {
          icon: <Zap className="h-12 w-12 text-amber-400" />,
          title: "Unlimited Scaling Potential",
          description: "No more spending limits or account restrictions. Scale your ad campaigns as high as your budget allows without platform constraints."
        }, {
          icon: <TrendingUp className="h-12 w-12 text-green-400" />,
          title: "Dedicated Account Manager",
          description: "Get personalized guidance from an experienced account manager who understands e-commerce advertising strategies."
        }].map((benefit, index) => <motion.div key={index} className="group p-8 rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300" initial={{
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
                <div className="absolute -z-10 rounded-full w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent blur-xl"></div>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white group-hover:text-purple-400 transition-colors">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default EcomBenefits;