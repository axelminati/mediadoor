
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import CallToAction from "./CallToAction";
import FeatureBadges from "./FeatureBadges";

const HeroContent = () => {
  return <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        
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
        <span className="text-white dark:text-white">Powerful, unlimited spend </span>
        <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Facebook Ad Accounts</span>
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
    }}>
        Scale your e-commerce store with PhaseDigital's premium Facebook ad accounts that deliver lower CPMs, higher ROAS, and are virtually ban-proof. Stop worrying about ad account shutdowns and start focusing on growing your business.
      </motion.p>
      
      {/* Call to Action buttons */}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.3
    }}>
        <CallToAction />
      </motion.div>
      
      <FeatureBadges />
    </div>;
};

export default HeroContent;
