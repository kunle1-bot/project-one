import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Send, MessageCircle } from "lucide-react";
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
                href="mailto:oyeniyiifakunle@gmail.com"
                className="text-muted-foreground hover:text-secondary transition-colors text-sm"
              >
                oyeniyiifakunle@gmail.com
              </a>
            </Card>
            
            <Card className="bg-background border-border p-6 text-center hover:border-primary/50 transition-all animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <a
                href="https://www.google.com/maps/place/Oyeniyi+Ifakunle/@9.0338725,8.6707713,5z/data=!4m6!3m5!1s0x496d5ff6ec8d4b61:0xe8438dfbd870077d!8m2!3d9.0338725!4d8.6707713!16s%2Fg%2F11yjkj6sc8?force=pwa&source=mlapk&g_ep=Eg1tbF8yMDI1MDkyNF8wIOC7DCoASAJQAQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Port Harcourt, Nigeria
              </a>
            </Card>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              onClick={() => window.open("https://wa.me/2348089376351?text=Hello%20Oyeniyi%2C%20Nice%20connected%20with%20you%20your%20.", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => window.location.href = "tel:08089376351"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://www.facebook.com/profile.php?id=100080038794643&mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            
            <a
              href="https://www.instagram.com/p/DQAMWieDTAj/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
            <a
              href="https://ng.linkedin.com/in/oyeniyi-ifakunle-61637b30b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a
              href="https://t.me/+0Q0PMHoeRIwyMTJk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
