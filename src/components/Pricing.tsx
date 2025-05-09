import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, CreditCard, Zap, ShieldCheck, Calendar } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter Agency",
      price: "$997",
      description: "Perfect for new agency owners looking to acquire their first clients.",
      features: [
        "1 Licensed Agency Account",
        "Basic Ban-Resistance Protection",
        "Unlimited Spend Capability",
        "Improved CPM Performance",
        "Basic Client Acquisition Guide",
        "Email Support"
      ],
      highlight: false,
    },
    {
      name: "Growth Agency",
      price: "$1,997",
      description: "Ideal for growing agencies looking to scale their client base.",
      features: [
        "3 Licensed Agency Accounts",
        "Enhanced Ban-Resistance Protection",
        "Unlimited Spend Capability",
        "Premium CPM Performance",
        "Complete Client Acquisition System",
        "Agency Launch Blueprint",
        "Priority Support"
      ],
      highlight: true,
      badge: "Most Popular",
    },
    {
      name: "Agency Empire",
      price: "$4,997",
      description: "For established agencies wanting to build a full-scale operation.",
      features: [
        "10 Licensed Agency Accounts",
        "Maximum Ban-Resistance Protection",
        "Unlimited Spend Capability",
        "Elite CPM Performance",
        "Advanced Client Acquisition Masterclass",
        "Agency Empire Blueprint",
        "White-Label Options",
        "1-on-1 Coaching Sessions",
        "24/7 VIP Support"
      ],
      highlight: false,
    }
  ];

  const openCalendly = () => {
    console.log("Opening Calendly scheduling page");
    window.open("https://calendly.com/phasedigital-agency/30min", "_blank");
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <CreditCard className="h-3.5 w-3.5 mr-1" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Choose Your Agency Package</h2>
          <p className="text-muted-foreground text-lg">
            Select the perfect plan to launch and grow your own advertising agency with our licensed accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 border ${
                tier.highlight 
                  ? "border-accent bg-accent/5 relative shadow-lg" 
                  : "border-gray-200 shadow-sm"
              } hover:shadow-md transition-shadow animate-fade-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ one-time</span>
                </div>
                <p className="text-muted-foreground mt-3">{tier.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className={`h-5 w-5 ${tier.highlight ? 'text-accent' : 'text-green-500'} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={openCalendly}
                className={`w-full ${tier.highlight ? 'bg-accent hover:bg-accent/90' : ''}`}
                variant={tier.highlight ? "default" : "outline"}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-10 rounded-2xl border border-gray-100 bg-gray-50 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ShieldCheck className="h-10 w-10 text-green-500" />
            <Zap className="h-10 w-10 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Ready to Build Your Agency?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join the growing network of successful agency owners who have transformed their business with our licensed accounts and training.
          </p>
          <Button size="lg" onClick={openCalendly}>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
