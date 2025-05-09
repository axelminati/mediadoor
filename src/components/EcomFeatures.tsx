import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CreditCard, BarChart4, ShieldCheck, Zap, CheckCircle, TrendingUp } from "lucide-react";
const EcomFeatures = () => {
  return <section className="bg-gradient-to-b from-background to-background/50 relative overflow-hidden py-[38px]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-purple-500/30 dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <BarChart4 className="h-3.5 w-3.5 mr-1 text-purple-500" />
            Performance Boost
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">
            Premium Ad Account Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Our e-commerce optimized Facebook ad accounts deliver superior performance in key metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="rounded-2xl overflow-hidden bg-black/40 shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10" initial={{
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
            <div className="p-6 border-b border-white/10">
              <h3 className="text-xl font-semibold mb-1 text-white">Standard Facebook Account</h3>
              <p className="text-muted-foreground">Typical account limitations</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Vulnerable, unpredictable</h4>
                  <p className="text-sm text-muted-foreground">Ad account bans can jeopardize the entire Facebook account from ever running ads again</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Spending Limits</h4>
                  <p className="text-sm text-muted-foreground">New accounts often capped at $50/day for weeks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Higher CPMs</h4>
                  <p className="text-sm text-muted-foreground">Average CPMs $15-25 for e-commerce targeting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Ban Risk</h4>
                  <p className="text-sm text-muted-foreground">High risk of account shutdown for policy violations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Standard Support</h4>
                  <p className="text-sm text-muted-foreground">Limited to unhelpful chat support</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/70 to-black/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-purple-500/20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <div className="p-6 border-b border-purple-500/20 bg-purple-500/10">
              <h3 className="text-xl font-semibold mb-1 text-white flex items-center">
                Premium E-commerce Account
                <Badge variant="outline" className="ml-2 bg-purple-500/20 text-purple-300 border-purple-500/40">
                  Superior
                </Badge>
              </h3>
              <p className="text-gray-300">Enhanced features for store growth</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Zap className="h-3 w-3 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Safe assets</h4>
                  <p className="text-sm text-gray-300">Ad account bans are rare and don't affect the profile or other assets</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <CreditCard className="h-3 w-3 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Unlimited Spending</h4>
                  <p className="text-sm text-gray-300">No daily or lifetime spending caps, scale as needed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <BarChart4 className="h-3 w-3 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Reduced CPMs (40% Lower)</h4>
                  <p className="text-sm text-gray-300">Average CPMs $10-15 for identical e-commerce targeting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-3 w-3 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Ban Protection</h4>
                  <p className="text-sm text-gray-300">95% reduction in account shutdowns with proactive monitoring</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Priority Support</h4>
                  <p className="text-sm text-gray-300">Dedicated account manager and direct Facebook rep access</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="mt-16 pt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 py-[3px]">
          <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <BarChart4 className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-white">-40%</h3>
            <p className="text-sm text-muted-foreground">Average CPM Reduction</p>
          </div>
          
          <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-white">+37%</h3>
            <p className="text-sm text-muted-foreground">Average ROAS Improvement</p>
          </div>
          
          <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-white">95%</h3>
            <p className="text-sm text-muted-foreground">Ban Protection Rate</p>
          </div>
          
          <div className="bg-black/30 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-white">∞</h3>
            <p className="text-sm text-muted-foreground">Spending Potential</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default EcomFeatures;