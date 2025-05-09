
import { motion } from "framer-motion";
import { ShieldCheck, Zap, CreditCard, Rocket } from "lucide-react";

const FeatureBadges = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50/80 text-green-700 shadow-sm border border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 transition-colors hover:bg-green-50">
        <ShieldCheck className="h-5 w-5 text-green-500 dark:text-green-400 shrink-0" />
        <span className="text-sm">Ban-Resistant</span>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/80 text-amber-700 shadow-sm border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20 transition-colors hover:bg-amber-50">
        <Zap className="h-5 w-5 text-amber-500 dark:text-amber-400 shrink-0" />
        <span className="text-sm">Better ROAS</span>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/80 text-purple-700 shadow-sm border border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20 transition-colors hover:bg-purple-50">
        <CreditCard className="h-5 w-5 text-purple-500 dark:text-purple-400 shrink-0" />
        <span className="text-sm">Lower CPMs</span>
      </div>
      
      <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/80 text-blue-700 shadow-sm border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 transition-colors hover:bg-blue-50">
        <Rocket className="h-5 w-5 text-blue-500 dark:text-blue-400 shrink-0" />
        <span className="text-sm">Unlimited Scaling</span>
      </div>
    </motion.div>
  );
};

export default FeatureBadges;
