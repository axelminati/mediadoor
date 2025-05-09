
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "What services does PhaseDigital offer?",
      answer: "PhaseDigital provides licensed Facebook ad accounts with unlimited spending potential, extensive credit lines, and managed account services for digital marketing agencies and e-commerce businesses. We also offer TikTok ad accounts and additional platform support to help you scale your advertising efforts."
    },
    {
      question: "How does the unlimited spending feature work?",
      answer: "Our Facebook ad accounts come with pre-approved high spending limits that can be increased as your campaigns scale. Unlike regular accounts that might hit unexpected spending caps, our accounts are managed to ensure your campaigns can scale without interruption. We actively monitor performance and proactively increase limits when needed."
    },
    {
      question: "Are these accounts compliant with Facebook's policies?",
      answer: "Yes, all our accounts are fully compliant with Facebook's terms of service and advertising policies. We maintain strict adherence to platform rules while optimizing account structures for maximum performance and stability. Our compliance team stays up-to-date with policy changes to ensure ongoing account health."
    },
    {
      question: "What happens if an ad account gets restricted?",
      answer: "While our accounts have significantly lower restriction rates than industry averages, we provide rapid support in case of any issues. Our team works directly with platform representatives to resolve restrictions quickly. In rare cases where an account cannot be recovered, we provide replacement accounts to ensure your campaigns continue running with minimal disruption."
    },
    {
      question: "How long does it take to get set up with an account?",
      answer: "For most clients, we can provide access to an ad account within 1-2 business days after your application is approved. Enterprise clients with larger spending needs may require a more customized setup process, which typically takes 3-5 business days to complete."
    },
    {
      question: "Can I use my existing creative assets and targeting?",
      answer: "Absolutely. You maintain complete control over your campaign creative, targeting, and strategy. Our service focuses on providing the account infrastructure, spending capacity, and support you need to execute your marketing vision without technical limitations."
    },
    {
      question: "Do you offer payment terms or credit lines?",
      answer: "Yes, qualified clients can access flexible payment terms and credit lines to help manage cash flow. Depending on your business needs and qualification, we offer net-15, net-30, and in some cases, extended payment terms for enterprise clients. This allows you to scale campaigns before waiting for conversion revenue."
    },
    {
      question: "Is there a minimum ad spend requirement?",
      answer: "Our services are designed for scaling businesses with meaningful ad budgets. While we don't have a strict minimum, our solutions are most cost-effective for businesses spending at least $10,000 per month on digital advertising. Enterprise solutions are available for clients spending $100,000+ monthly."
    },
    {
      question: "How do I track performance and billing?",
      answer: "You'll have access to our client dashboard where you can monitor account performance, spending, and billing information in real-time. The dashboard integrates with platform data to provide unified reporting across all your advertising activities. We also provide regular performance reports and insights."
    },
    {
      question: "Can I speak with an account representative before signing up?",
      answer: "Yes, we recommend scheduling a consultation call with our team to discuss your specific needs and determine the best solution for your business. During this call, we can answer detailed questions, provide custom pricing information, and outline the onboarding process for your organization."
    }
  ];

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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about PhaseDigital's services and how we can help scale your advertising efforts.
            </motion.p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left py-6 dark:text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Still have questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is ready to answer any specific questions you might have about our services, pricing, or how we can help with your unique situation.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <a 
                href="mailto:support@phasedigital.com" 
                className="rounded-full px-8 py-4 text-white bg-primary hover:bg-primary/90 transition font-medium dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
