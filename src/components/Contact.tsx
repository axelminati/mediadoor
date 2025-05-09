import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MailCheck, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our licensed Facebook accounts? Our team is here to help you find the right solution for your agency.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="feature-icon-wrapper">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Chat With Us</h3>
                  <p className="text-muted-foreground">
                    Our support team is available to answer your questions via live chat during business hours.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="feature-icon-wrapper">
                  <MailCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-muted-foreground">
                    Send us an email at <span className="text-accent font-medium">support@agencyboost.com</span> and we'll respond within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="feature-icon-wrapper">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-muted-foreground">
                    For immediate assistance, call us at <span className="text-accent font-medium">(555) 123-4567</span> Monday to Friday, 9am-5pm EST.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="company" className="text-sm font-medium">
                  Agency/Company
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
