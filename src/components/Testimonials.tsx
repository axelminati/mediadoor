
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, TrendingUp, Rocket } from "lucide-react";

const testimonials = [{
  quote: "We scaled to $150K/month after switching to PhaseDigital. Their premium Facebook ad accounts gave us the stability we needed to aggressively scale our skincare brand.",
  author: "Sarah M.",
  company: "knemobeauty.com",
  stars: 5
}, {
  quote: "The ban resistance is real. After losing 3 accounts in a month, we haven't had a single issue since partnering with PhaseDigital. Our ROAS increased from 1.8 to 3.5.",
  author: "Michael T.",
  company: "tasmaniantigergear.com.au",
  stars: 5
}, {
  quote: "We went from spending $5K to $80K monthly in just 3 months with zero account issues. The lower CPMs are a game-changer for our margins.",
  author: "Jessica W.",
  company: "www.neeka.nl",
  stars: 5
}];

const Testimonials = () => {
  return <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Trusted by E-commerce Brands</h2>
          <p className="text-muted-foreground text-lg">
            See how online stores are scaling their revenue with our premium Facebook ad accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover-lift animate-fade-in shadow-xl" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              
              <blockquote className="text-white mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <ShoppingBag className="h-3 w-3" />
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>)}
        </div>

        <div className="mt-20 relative bg-black/40 rounded-2xl shadow-lg border border-white/10 overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 opacity-50" />
          <div className="relative z-10 p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Scale Your Store?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join successful e-commerce brands that have revolutionized their Facebook advertising with our premium ad accounts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 border-green-400/30">
                <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                <span className="text-green-400 font-medium mr-1">350%</span> 
                Average ROAS Increase
              </Badge>
              <Badge variant="outline" className="text-sm py-2 border-blue-400/30">
                <ShoppingBag className="h-3 w-3 text-blue-400 mr-1" />
                <span className="text-blue-400 font-medium mr-1">300+</span> 
                E-commerce Stores
              </Badge>
              <Badge variant="outline" className="text-sm py-2 border-purple-400/30">
                <Rocket className="h-3 w-3 text-purple-400 mr-1" />
                <span className="text-purple-400 font-medium mr-1">$18M+</span> 
                Monthly Ad Spend
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonials;
