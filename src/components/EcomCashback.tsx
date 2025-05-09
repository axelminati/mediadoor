import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Infinity, Shield, ShieldOff, Globe, Users, Wallet, CreditCard, Bitcoin, DollarSign, BarChart, Target, FileStack, CheckCircle } from "lucide-react";
const EcomCashback = () => {
  return <section className="bg-gradient-to-b from-background to-background/50 relative overflow-hidden py-[49px]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px]"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 dark:border-purple-500/30 dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <CheckCircle className="h-3.5 w-3.5 mr-1 text-purple-500" />
            Industry Leaders
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight dark:text-white dark:dark-glow-text">
            The Best Solution for Small to Large Spenders
          </h2>
          <p className="text-muted-foreground text-lg">
            With over $50M+ in managed ad spend annually, our platform delivers unmatched flexibility and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-y-12 gap-x-8 items-start">
          <div className="space-y-8">
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
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <Infinity className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Unlimited Ad Account Access</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Unlike other providers with strict limits, we offer unlimited ad account openings to scale your business without constraints.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Account creation</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-white/5 px-[7px]">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">Unlimited</div>
                  <div className="text-sm text-gray-400">Scaling potential</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Versatile Account Options</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Choose from whitehat accounts for mainstream products or blackhat options for more aggressive advertising approaches.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white font-medium">Whitehat</span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span>Mainstream products</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span>Maximum account longevity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span>Platform-friendly content</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="flex items-center mb-3">
                    <ShieldOff className="h-5 w-5 text-red-400 mr-2" />
                    <span className="text-white font-medium">Blackhat</span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                      <span>Aggressive campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                      <span>High-risk verticals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                      <span>Rapid scaling tactics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Enterprise-Grade Scale</h3>
              </div>
              <p className="text-muted-foreground mb-6">We oversee more than $50 million in annual ad spend across 300+ active clients globally.</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-1">$50M+</div>
                  <div className="text-sm text-gray-400">Annual ad spend</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-1">300+</div>
                  <div className="text-sm text-gray-400">Active clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-1">9</div>
                  <div className="text-sm text-gray-400">Ad accounts issued daily</div>
                </div>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                <div className="text-sm text-gray-400 mb-2">Monthly Ad Spend Growth</div>
                <div className="flex items-end h-20 gap-1">
                  {[25, 40, 35, 50, 45, 60, 55, 70, 75, 85, 80, 95].map((height, i) => <div key={i} className="flex-1 bg-gradient-to-t from-amber-600/30 to-amber-400/70 rounded-sm" style={{
                  height: `${height}%`
                }}></div>)}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Dedicated Account Management</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Access your accounts anytime with 24/7 support from our team of dedicated agents who understand your business needs.
              </p>
              <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Response time</span>
                  <span className="text-white">Under 30 minutes</span>
                </div>
                <div className="h-2 bg-black/60 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[95%]"></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Agent availability</span>
                  <span className="text-white">24/7/365</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4">
                  <Wallet className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Payment Method Freedom</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Flexibility to use any payment method with our accounts, from traditional cards to cryptocurrency.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <CreditCard className="h-8 w-8 text-purple-400 mb-2" />
                  <span className="text-sm text-gray-400">Credit Card</span>
                </div>
                <div className="flex flex-col items-center">
                  <DollarSign className="h-8 w-8 text-green-400 mb-2" />
                  <span className="text-sm text-gray-400">Bank Transfer</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bitcoin className="h-8 w-8 text-amber-400 mb-2" />
                  <span className="text-sm text-gray-400">Crypto</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} viewport={{
            once: true
          }} className="p-8 bg-black/40 border border-white/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">International Multi-Currency Support</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Run campaigns globally with support for all major currencies and international payment processing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">USD $</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">EUR €</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">GBP £</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">JPY ¥</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">AUD A$</span>
                <span className="px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm border border-white/10">+15 more</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default EcomCashback;