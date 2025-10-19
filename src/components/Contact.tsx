import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Get in{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your digital transformation? Let's connect and discuss
            how we can help your business thrive.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background border-border p-6 text-center hover:border-primary/50 transition-all animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:08089376351"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                08089376351
              </a>
            </Card>
            
            <Card className="bg-background border-border p-6 text-center hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:contact@digitaltechkunle.com"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                Get in Touch
              </a>
            </Card>
            
            <Card className="bg-background border-border p-6 text-center hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Nigeria
              </p>
            </Card>
          </div>
          
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              onClick={() => window.location.href = "tel:08089376351"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
