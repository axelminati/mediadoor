
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, BarChart, CreditCard, CheckCircle } from "lucide-react";

const StorePerformanceCard = () => {
  return (
    <motion.div 
      className="aspect-square max-w-[500px] mx-auto relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ perspective: "1000px" }}
    >
      {/* 3D perspective container */}
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
        {/* Background glow effects */}
        <motion.div 
          className="absolute -top-10 -right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:mix-blend-screen dark:bg-purple-500/20 dark:opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:mix-blend-screen dark:bg-accent/20 dark:opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Holographic light effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-400/5 to-transparent dark:via-purple-500/10"
          animate={{
            opacity: [0, 0.5, 0],
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main card with store performance dashboard */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-lg transform hover:scale-[1.02] transition-transform dark:from-black/60 dark:to-black/40 dark:border-white/10 dark:shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] dark:dark-glow">
          {/* Prismatic edge effect */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-400 blur-sm dark:opacity-20" />
          </div>
          
          <div className="absolute inset-0 p-4 flex flex-col">
            {/* Card header */}
            <div className="flex items-center justify-between mb-3 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:mix-blend-screen dark:opacity-10 py-0"></div>
            </div>
            
            {/* Store performance dashboard */}
            <ScrollArea className="flex-1 pr-2 py-[3px]">
              <StorePerformanceContent />
            </ScrollArea>
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-5 -right-5 w-40 h-20 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-lg rotate-12 blur-xl -z-10 dark:opacity-30"
          animate={{
            rotate: [12, 15, 12, 10, 12],
            scale: [1, 1.05, 1, 0.98, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* 3D floating decorative elements */}
        <motion.div 
          className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/20 dark:shadow-purple-500/30"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/30"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

const StorePerformanceContent = () => {
  return (
    <motion.div 
      whileHover={{
        boxShadow: "0 10px 30px -5px rgba(0, 0, 150, 0.1)"
      }} 
      className="flex-1 bg-white/60 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none"
    >
      <h4 className="font-medium mb-2 flex items-center dark:text-white text-xs md:text-sm">
        <motion.span 
          className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"
          animate={{
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        ></motion.span>
        Store Performance
      </h4>
      
      {/* Performance metrics */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white/80 p-2 rounded-lg border border-white/70 shadow-sm dark:bg-white/10 dark:border-white/5">
          <div className="text-xs text-muted-foreground mb-0.5">Revenue (30d)</div>
          <div className="text-base md:text-lg font-bold dark:text-white">$24,856</div>
          <div className="text-xs text-green-500 flex items-center mt-0.5">
            <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
            <span>+32%</span>
          </div>
        </div>
        <div className="bg-white/80 p-2 rounded-lg border border-white/70 shadow-sm dark:bg-white/10 dark:border-white/5">
          <div className="text-xs text-muted-foreground mb-0.5">ROAS</div>
          <div className="text-base md:text-lg font-bold dark:text-white">3.2x</div>
          <div className="text-xs text-green-500 flex items-center mt-0.5">
            <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
            <span>+0.8</span>
          </div>
        </div>
      </div>
      
      {/* Facebook ad metrics */}
      <h5 className="font-medium text-xs md:text-sm mb-1.5 dark:text-white">Facebook Ad Performance</h5>
      <div className="space-y-1.5">
        <AdMetric 
          icon={<BarChart className="h-3 w-3 text-purple-500 dark:text-purple-400" />}
          title="CPM"
          value="$8.40"
          change="-40%"
          iconBgClass="bg-purple-50 dark:bg-purple-500/10"
          iconTextClass="text-purple-500 dark:text-purple-400"
          badgeClass="text-green-600 bg-green-50 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20"
          delay={0.1}
        />
        
        <AdMetric 
          icon={<CreditCard className="h-3 w-3 text-indigo-500 dark:text-indigo-400" />}
          title="Ad Spend"
          value="$7,820"
          change="No Limits"
          iconBgClass="bg-indigo-50 dark:bg-indigo-500/10"
          iconTextClass="text-indigo-500 dark:text-indigo-400"
          badgeClass="text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
          delay={0.2}
        />
        
        <AdMetric 
          icon={<CheckCircle className="h-3 w-3 text-green-500 dark:text-green-400" />}
          title="Status"
          value="Protected"
          change="Active"
          iconBgClass="bg-green-50 dark:bg-green-500/10"
          iconTextClass="text-green-500 dark:text-green-400"
          badgeClass="text-green-600 bg-green-50 border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20"
          delay={0.3}
          noBorder
        />
      </div>

      {/* Summary metrics */}
      <div className="mt-2 pt-1 grid grid-cols-3 gap-2">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Conv.</p>
          <p className="font-semibold text-xs md:text-sm dark:text-white">418</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">CTR</p>
          <p className="font-semibold text-xs md:text-sm dark:text-white">2.4%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">CPA</p>
          <p className="font-semibold text-xs md:text-sm dark:text-white">$18.70</p>
        </div>
      </div>
    </motion.div>
  );
};

interface AdMetricProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  iconBgClass: string;
  iconTextClass: string;
  badgeClass: string;
  delay: number;
  noBorder?: boolean;
}

const AdMetric = ({ 
  icon, 
  title, 
  value, 
  change, 
  iconBgClass, 
  iconTextClass, 
  badgeClass, 
  delay,
  noBorder = false
}: AdMetricProps) => {
  return (
    <motion.div 
      className={`flex items-center justify-between py-1 ${!noBorder ? 'border-b border-gray-200/50 dark:border-white/5' : ''} transition-colors hover:bg-white/20 dark:hover:bg-white/5`}
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay
      }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        x: 5
      }}
    >
      <div className="flex items-center space-x-2">
        <div className={`w-6 h-6 rounded-full ${iconBgClass} border border-white/70 flex items-center justify-center shadow-sm dark:border-white/10`}>
          {icon}
        </div>
        <div>
          <span className="font-medium text-xs dark:text-white">{title}</span>
          <div className="text-xs text-muted-foreground">{value}</div>
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-xs ${badgeClass} px-1.5 py-0.5 rounded-full border`}>{change}</span>
      </div>
    </motion.div>
  );
};

export default StorePerformanceCard;
