
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Users, 
  BarChart, 
  Target, 
  Lightbulb, 
  GraduationCap, 
  Rocket 
} from "lucide-react";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <section className="container-custom mb-24">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-primary">PhaseDigital</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering digital marketing agencies and e-commerce businesses with premium advertising solutions since 2019.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At PhaseDigital, we envision a world where digital marketing agencies and e-commerce businesses can scale without limitations. We're building the infrastructure that enables seamless advertising operations, unlimited spending potential, and exceptional growth opportunities.
              </p>
              <p className="text-lg text-muted-foreground">
                Our goal is to remove the technical and financial barriers that prevent businesses from reaching their full potential in the digital advertising space. By providing reliable, scalable solutions, we empower our clients to focus on what matters most: growing their business and delivering results for their customers.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                alt="PhaseDigital team meeting" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The core principles that drive everything we do at PhaseDigital.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-10 w-10 text-primary" />,
                  title: "Results-Focused",
                  description: "We measure success by the growth and ROI we deliver to our clients."
                },
                {
                  icon: <Lightbulb className="h-10 w-10 text-primary" />,
                  title: "Innovation",
                  description: "We constantly evolve our solutions to stay ahead of platform changes and market trends."
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Partnership",
                  description: "We view ourselves as an extension of your team, committed to your long-term success."
                },
                {
                  icon: <BarChart className="h-10 w-10 text-primary" />,
                  title: "Data-Driven",
                  description: "We base our strategies and solutions on analytics and proven performance metrics."
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-primary" />,
                  title: "Expertise",
                  description: "Our team combines deep technical knowledge with marketing strategy excellence."
                },
                {
                  icon: <Rocket className="h-10 w-10 text-primary" />,
                  title: "Scalability",
                  description: "We build solutions that grow with your business, from startup to enterprise."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-black/20 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-10 border border-gray-100 dark:border-white/5">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Story</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                PhaseDigital was founded in 2019 by a team of digital marketing experts who recognized a critical gap in the industry: reliable, scalable ad accounts for agencies and e-commerce businesses looking to grow.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Having managed millions in ad spend across various platforms, our founders experienced firsthand the frustrations of account bans, spending limits, and inconsistent platform support that hindered growth for even the most successful campaigns.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We built PhaseDigital to solve these challenges. Starting with a small group of agency partners, we developed a solution that provided stable, high-performing ad accounts with unlimited spending potential and dedicated support.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we serve hundreds of agencies and e-commerce businesses worldwide, managing tens of millions in monthly ad spend across our network. Our team has grown to include experts in advertising platform policies, compliance, financial services, and agency operations—all focused on one mission: helping our clients scale without limits.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
