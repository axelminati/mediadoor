
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ShoppingBag, ChevronRight, ArrowRight, BarChart4, TrendingUp, ShieldCheck, Zap, CreditCard, MessageCircle, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FacebookAds = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Effective Facebook Ad Examples
              </motion.h1>
              <motion.p 
                className="text-lg text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Inspire your marketing strategy with these high-performing Facebook ads crafted specifically for ecommerce businesses.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]">
                  Get Your Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ad Example 1 - Problem-Solution */}
        <section className="py-16 bg-white dark:bg-black/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Problem-Solution Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="shadow-lg border-slate-200 dark:border-slate-800">
                <CardHeader className="bg-red-600 text-white py-4 px-6 flex flex-row items-start gap-4 rounded-t-lg">
                  <AlertCircle className="w-6 h-6 mt-0.5" />
                  <div>
                    <CardTitle className="text-xl mb-1">We restricted your ad account</CardTitle>
                    <CardDescription className="text-white/90 text-sm">
                      You can't run ads. We restricted your account because some of your activity looks like it doesn't follow our rules. You can request a review if you think this is a mistake.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">Tired of Facebook Ad Account Shutdowns?</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    E-commerce store owners lose thousands in revenue every time their Facebook ad account gets restricted. Don't let Meta's algorithms control your business growth.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    <p className="font-medium dark:text-white">
                      PhaseDigital provides ban-resistant ad accounts
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Sponsored · PhaseDigital
                  </p>
                  <Button size="sm">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Addresses a Major Pain Point</p>
                      <p className="text-slate-600 dark:text-slate-400">Shows the exact error message e-commerce owners dread seeing</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Clear Value Proposition</p>
                      <p className="text-slate-600 dark:text-slate-400">Immediately positions PhaseDigital as the solution to ad account bans</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Emotional Trigger</p>
                      <p className="text-slate-600 dark:text-slate-400">Evokes the frustration of losing revenue during account shutdowns</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Example 2 - Benefit-Focused */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Benefit-Focused Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Focuses on Key Benefits</p>
                      <p className="text-slate-600 dark:text-slate-400">Highlights lower CPMs and higher ROAS as direct business benefits</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Comparative Advantage</p>
                      <p className="text-slate-600 dark:text-slate-400">Shows exactly how much better performance can be</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Social Proof</p>
                      <p className="text-slate-600 dark:text-slate-400">Includes success metrics that build credibility</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Card className="order-1 lg:order-2 shadow-lg border-slate-200 dark:border-slate-800">
                <CardHeader className="border-b">
                  <CardTitle className="text-xl dark:text-white">Scale Your E-commerce Store with Better Metrics</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <p className="font-medium dark:text-white">Lower CPMs</p>
                      <p className="font-bold text-green-600 dark:text-green-400">-30%</p>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <p className="font-medium dark:text-white">Higher ROAS</p>
                      <p className="font-bold text-blue-600 dark:text-blue-400">+40%</p>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                      <p className="font-medium dark:text-white">Unlimited Ad Scaling</p>
                      <p className="font-bold text-purple-600 dark:text-purple-400">24/7</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-md">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      "Our premium ad accounts have helped over 200+ e-commerce brands scale past $1M in monthly ad spend without restrictions."
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Sponsored · PhaseDigital
                  </p>
                  <Button size="sm">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Ad Example 3 - Visual Impact */}
        <section className="py-16 bg-white dark:bg-black/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Visual Impact Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="shadow-lg border-slate-200 dark:border-slate-800">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/0aa26676-1df7-4a67-a1cf-a6d8c56283f4.png" 
                    alt="Facebook Ad Account Restricted" 
                    className="w-full object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 dark:text-white">Never See This Message Again</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      PhaseDigital provides Facebook ad accounts that won't get shut down. Maintain consistent traffic to your store without interruptions.
                    </p>
                    
                    <Alert className="mb-4 bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-300">
                      <AlertTitle className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" /> Stop losing sales
                      </AlertTitle>
                      <AlertDescription>
                        Every day your ads are down costs thousands in lost revenue. Our accounts stay active.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Sponsored · PhaseDigital
                  </p>
                  <Button size="sm">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Visual Storytelling</p>
                      <p className="text-slate-600 dark:text-slate-400">Uses a familiar error message image that immediately resonates</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Direct Promise</p>
                      <p className="text-slate-600 dark:text-slate-400">"Never See This Message Again" creates a powerful value proposition</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Urgent Call to Action</p>
                      <p className="text-slate-600 dark:text-slate-400">Creates a sense of urgency by highlighting financial loss</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Ad Example 4 - Feature Badge Style */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Feature Badge Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="shadow-lg border-slate-200 dark:border-slate-800">
                <CardHeader className="border-b">
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 border border-purple-100 shadow-sm mb-3 dark:from-purple-500/20 dark:to-indigo-500/20 dark:border-purple-500/30 dark:text-purple-400">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    For E-commerce Stores
                  </div>
                  <CardTitle className="text-xl dark:text-white">3 Reasons Why E-commerce Stores Choose Our Ad Accounts</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-700 shadow-sm border border-green-100 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 shrink-0">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 dark:text-white">Ban-Resistant Protection</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">95% less chance of account shutdowns compared to regular accounts</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-700 shadow-sm border border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20 shrink-0">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 dark:text-white">Better ROAS</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Our clients see an average 3.2x return on ad spend with our premium accounts</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 text-purple-700 shadow-sm border border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20 shrink-0">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 dark:text-white">Lower CPMs</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Enjoy 30-45% lower CPMs than standard accounts for identical targeting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Sponsored · PhaseDigital
                  </p>
                  <Button size="sm">
                    Get Your Account <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Visual Feature Highlights</p>
                      <p className="text-slate-600 dark:text-slate-400">Colorful badges create visual interest and emphasize key benefits</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Specific Numbers</p>
                      <p className="text-slate-600 dark:text-slate-400">Uses concrete statistics (95%, 3.2x, 30-45%) that build credibility</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Clean Organization</p>
                      <p className="text-slate-600 dark:text-slate-400">Three clear benefits make the value proposition easy to understand</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Ad Example 5 - Metrics Comparison */}
        <section className="py-16 bg-white dark:bg-black/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Data Comparison Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Direct Comparison</p>
                      <p className="text-slate-600 dark:text-slate-400">Creates a clear "before and after" scenario that highlights the value</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Data Visualization</p>
                      <p className="text-slate-600 dark:text-slate-400">Uses metrics cards with visual contrast to show improvement</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Clear Call to Action</p>
                      <p className="text-slate-600 dark:text-slate-400">Drives immediate action with a value-focused CTA button</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Card className="shadow-lg border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <Badge variant="outline" className="mb-3 bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400">
                    <BarChart4 className="h-3.5 w-3.5 mr-1" />
                    Performance Comparison
                  </Badge>
                  <CardTitle className="text-xl dark:text-white">See The Difference In Your Ad Performance</CardTitle>
                  <CardDescription>Before vs. After using PhaseDigital's Premium Ad Accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="text-center p-3 rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Standard Account</p>
                        <div className="flex items-center justify-center gap-2">
                          <BarChart4 className="h-5 w-5 text-slate-400" />
                          <p className="text-xl font-bold text-slate-600 dark:text-slate-300">$15-25</p>
                        </div>
                        <p className="text-xs text-slate-400">Average CPM</p>
                      </div>
                      
                      <div className="text-center p-3 rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Standard Account</p>
                        <div className="flex items-center justify-center gap-2">
                          <TrendingUp className="h-5 w-5 text-slate-400" />
                          <p className="text-xl font-bold text-slate-600 dark:text-slate-300">2.1x</p>
                        </div>
                        <p className="text-xs text-slate-400">Average ROAS</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center p-3 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
                        <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Premium Account</p>
                        <div className="flex items-center justify-center gap-2">
                          <BarChart4 className="h-5 w-5 text-green-500" />
                          <p className="text-xl font-bold text-green-600 dark:text-green-400">$8-12</p>
                        </div>
                        <p className="text-xs text-green-500 dark:text-green-500">Average CPM</p>
                      </div>
                      
                      <div className="text-center p-3 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700">
                        <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Premium Account</p>
                        <div className="flex items-center justify-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          <p className="text-xl font-bold text-green-600 dark:text-green-400">3.5x</p>
                        </div>
                        <p className="text-xs text-green-500 dark:text-green-500">Average ROAS</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 rounded-md bg-purple-50 border border-purple-100 dark:bg-purple-900/20 dark:border-purple-700">
                    <p className="text-sm text-center text-purple-700 dark:text-purple-300">
                      Upgrade to our premium ad accounts and see better performance from day one.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Sponsored · PhaseDigital
                  </p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Upgrade Now <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* NEW: Ad Example 6 - CTA Style from EcomCallToAction */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Call-to-Action Focused Ads</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="shadow-lg border-slate-200 dark:border-slate-800 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
                  <Badge className="bg-white/20 text-white border-0 mb-2">Limited Time Offer</Badge>
                  <CardTitle className="text-xl">Ready to Scale Your E-commerce Store?</CardTitle>
                  <CardDescription className="text-white/80">
                    Premium Facebook ad accounts with unlimited scaling potential
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                      <p className="text-sm dark:text-white">95% Ban Protection</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart4 className="h-5 w-5 text-blue-500" />
                      <p className="text-sm dark:text-white">30-45% Lower CPMs</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-purple-500" />
                      <p className="text-sm dark:text-white">Unlimited Spending Potential</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 mt-6">
                    <Button 
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white" 
                      onClick={() => window.open("https://api.whatsapp.com/send/?phone=34649748097&text&type=phone_number&app_absent=0", "_blank")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </Button>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white" 
                      onClick={() => window.open("https://t.me/yourusername", "_blank")}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      <span>Chat on Telegram</span>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400" 
                      onClick={() => window.open("https://calendly.com/phasedigital-agency/30min", "_blank")}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Book a Call</span>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex w-full justify-between">
                    <div className="text-center">
                      <p className="text-xl font-bold text-purple-600 dark:text-purple-400">45%</p>
                      <p className="text-xs text-slate-500">Lower CPMs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">3.2x</p>
                      <p className="text-xs text-slate-500">Avg ROAS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600 dark:text-green-400">95%</p>
                      <p className="text-xs text-slate-500">Protection</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Why This Ad Works:</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-semibold dark:text-white">Multiple CTAs</p>
                      <p className="text-slate-600 dark:text-slate-400">Offers several ways to engage based on customer preference</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-semibold dark:text-white">Visual Appeal</p>
                      <p className="text-slate-600 dark:text-slate-400">Gradient header and colorful icons create visual interest</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-semibold dark:text-white">Social Proof Metrics</p>
                      <p className="text-slate-600 dark:text-slate-400">Bottom metrics reinforce the value proposition with concrete numbers</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your E-commerce Store?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Get access to premium Facebook ad accounts that deliver lower CPMs, higher ROAS, and unlimited scaling potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-blue-700 hover:bg-blue-50">
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FacebookAds;

