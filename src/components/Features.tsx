
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  CreditCard, 
  Users, 
  Globe, 
  TrendingUp, 
  CheckCircle2, 
  Facebook, 
  Key,
  Lightbulb
} from "lucide-react";

const features = [
  {
    icon: <Key />,
    title: "Licensed Agency Accounts",
    description: "Get licensed to issue your own Facebook agency accounts and start building your advertising business."
  },
  {
    icon: <ShieldCheck />,
    title: "Ban-Resistant Accounts",
    description: "Our accounts are specially configured to be resilient against bans and restrictions, keeping your client campaigns running."
  },
  {
    icon: <TrendingUp />,
    title: "Better CPM Performance",
    description: "Experience superior cost-per-impression rates that maximize your client's ad spend and improve campaign ROI."
  },
  {
    icon: <CreditCard />,
    title: "Unlimited Spend Potential",
    description: "Scale your campaigns without hitting spending caps, letting you grow your client campaigns without limitations."
  },
  {
    icon: <Users />,
    title: "Client Acquisition Training",
    description: "Learn proven strategies to find and retain high-value clients for your growing agency business."
  },
  {
    icon: <Lightbulb />,
    title: "Agency Launch Blueprint",
    description: "Follow our step-by-step guide to successfully launch your own advertising agency from scratch."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Facebook className="h-3.5 w-3.5 mr-1" />
            Agency Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Build Your Own Advertising Agency</h2>
          <p className="text-muted-foreground text-lg">
            Get everything you need to launch and grow a successful Facebook advertising agency with our licensed accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="feature-icon-wrapper mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Hover effect corner gradient */}
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-10 rounded-2xl glass-card border border-gray-100 bg-white/50 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <Badge variant="outline" className="mb-4 bg-blue-50">Why Choose Us</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Launch Your Agency With Confidence</h3>
              <p className="text-muted-foreground mb-6">
                Get everything you need to start and grow a successful advertising agency with our comprehensive solution.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Licensed to issue your own agency accounts",
                  "Accounts resilient against bans and restrictions",
                  "Superior CPM performance for better client results",
                  "Unlimited spend capability for scaling campaigns",
                  "Client acquisition strategies and training",
                  "Ongoing support as your agency grows"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-4">
                      <Facebook className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Start Your Agency Today</h4>
                    <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                      Everything you need to launch a successful Facebook advertising agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
