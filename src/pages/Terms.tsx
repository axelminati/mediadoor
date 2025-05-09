
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">Terms of Service</h1>
              <div className="text-muted-foreground space-y-6 mb-10">
                <p className="text-lg">
                  Effective Date: August 1, 2023
                </p>
                <p>
                  Welcome to PhaseDigital. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Acceptance of Terms</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    By accessing or using our Services, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
                  </p>
                  <p>
                    We may revise these Terms at any time by updating this page. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. Services Description</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    PhaseDigital provides digital advertising infrastructure and support services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Managed Facebook and TikTok advertising accounts</li>
                    <li>Credit facilities for advertising expenses</li>
                    <li>Compliance monitoring and support</li>
                    <li>Account restoration assistance</li>
                    <li>Performance analytics and reporting</li>
                  </ul>
                  <p>
                    The specific services available to you depend on your selected plan and any custom arrangements outlined in separate agreements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. Account Registration and Requirements</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    To access certain features of our Services, you must register for an account. When registering, you agree to provide accurate, current, and complete information about yourself and your business.
                  </p>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                  <p>
                    You must be at least 18 years old and have the legal authority to bind yourself and any business entity you represent to these Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Fees and Payment</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    By using our paid Services, you agree to pay all fees specified at the time of purchase. Fees are non-refundable unless expressly stated otherwise.
                  </p>
                  <p>
                    We may change our fees at any time. We will provide you with advance notice of any fee changes through our Services or by email. Your continued use of our Services after the fee change becomes effective constitutes your agreement to pay the updated fees.
                  </p>
                  <p>
                    For subscription-based Services, you authorize us to charge you on an ongoing basis according to your selected billing cycle. You are responsible for maintaining current payment information.
                  </p>
                  <p>
                    If your payment is overdue, we may suspend or terminate your access to our Services after reasonable notice.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Platform Compliance</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    You agree to comply with all terms, policies, and guidelines of third-party platforms (such as Facebook and TikTok) when using our Services. This includes advertising policies, community standards, and terms of service.
                  </p>
                  <p>
                    We may provide guidance on platform compliance, but you retain ultimate responsibility for ensuring that your content, products, services, and advertising practices comply with all applicable platform policies.
                  </p>
                  <p>
                    We reserve the right to reject or remove any content that we believe violates platform policies or could jeopardize the integrity of our Services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">6. Limitation of Liability</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PHASEDIGITAL, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;</li>
                    <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;</li>
                    <li>ANY CONTENT OBTAINED FROM THE SERVICES; AND</li>
                    <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT,</li>
                  </ul>
                  <p>
                    WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">7. Termination</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">8. Governing Law</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">9. Contact Us</h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p>
                    PhaseDigital<br />
                    123 Market Street<br />
                    Suite 456<br />
                    San Francisco, CA 94105<br />
                    legal@phasedigital.com
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

export default Terms;
