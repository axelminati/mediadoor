
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <section className="container-custom mb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">Privacy Policy</h1>
              <div className="text-muted-foreground space-y-6 mb-10">
                <p className="text-lg">
                  Effective Date: August 1, 2023
                </p>
                <p>
                  At PhaseDigital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy and our <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Information We Collect</h2>
                <div className="text-muted-foreground space-y-4">
                  <h3 className="text-xl font-medium mt-6 mb-2 dark:text-gray-300">Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Register for an account</li>
                    <li>Express interest in obtaining information about our services</li>
                    <li>Participate in activities on our Services</li>
                    <li>Contact us with inquiries or for support</li>
                  </ul>
                  <p>
                    Personal information may include your name, email address, phone number, business information, payment information, and other information you choose to provide.
                  </p>

                  <h3 className="text-xl font-medium mt-6 mb-2 dark:text-gray-300">Automatically Collected Information</h3>
                  <p>
                    When you access our Services, we may automatically collect certain information from your device, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Time zone setting and location</li>
                    <li>Pages you view</li>
                    <li>How you interact with our Services</li>
                  </ul>
                  <p>
                    We collect this information using cookies, web beacons, and other similar technologies. For more information about our use of cookies, please see the "Cookies and Other Tracking Technologies" section below.
                  </p>

                  <h3 className="text-xl font-medium mt-6 mb-2 dark:text-gray-300">Information from Third Parties</h3>
                  <p>
                    We may receive information about you from third parties, including business partners, marketing agencies, and advertising networks. This information may include your name, contact information, and information about your interactions with their services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. How We Use Your Information</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We may use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing, maintaining, and improving our Services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Sending administrative information, service updates, and marketing communications</li>
                    <li>Responding to your comments, questions, and requests</li>
                    <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
                    <li>Detecting, preventing, and addressing technical issues, fraud, or illegal activity</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. How We Share Your Information</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We may share your information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.</li>
                    <li><strong>With Advertising Partners:</strong> We may share your information with third-party advertising companies to display ads that may be relevant to your interests.</li>
                    <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                    <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
                    <li><strong>For Legal Reasons:</strong> We may disclose your information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information, or to otherwise protect our rights.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Cookies and Other Tracking Technologies</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We and our third-party service providers use cookies, web beacons, and other tracking technologies to track information about your use of our Services. We may combine this information with other personal information we collect from you.
                  </p>
                  <p>
                    <strong>Cookies:</strong> Cookies are small data files stored on your device that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits.
                  </p>
                  <p>
                    <strong>Web Beacons:</strong> Web beacons (also known as clear GIFs, pixel tags, or web bugs) are tiny graphics with a unique identifier that may be included in our Services for analytics purposes or to deliver personalized content and advertising.
                  </p>
                  <p>
                    Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Data Security</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">6. Data Retention</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">7. Your Privacy Rights</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access the personal information we have about you</li>
                    <li>The right to request that we correct or update any personal information we have about you</li>
                    <li>The right to request that we delete or anonymize your personal information</li>
                    <li>The right to object to or restrict processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the contact information provided below.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">8. Children's Privacy</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Our Services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">9. Changes to this Privacy Policy</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" at the top of this page. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">10. Contact Us</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    If you have questions or comments about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    PhaseDigital<br />
                    123 Market Street<br />
                    Suite 456<br />
                    San Francisco, CA 94105<br />
                    privacy@phasedigital.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
