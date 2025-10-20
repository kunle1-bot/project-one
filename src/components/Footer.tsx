import { Facebook, Instagram, Linkedin, Send, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Oyeniyi Ifakunle
            </h3>
            <p className="text-muted-foreground text-sm">
              Digital Tech Professional specializing in graphic design, web development, AI automation, and digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:08089376351" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                08089376351
              </a>
              <a href="mailto:oyeniyiifakunle@gmail.com" className="flex items-center text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                oyeniyiifakunle@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100080038794643&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/p/DQAMWieDTAj/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://ng.linkedin.com/in/oyeniyi-ifakunle-61637b30b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://t.me/+0Q0PMHoeRIwyMTJk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground text-sm border-t border-border pt-8">
          <p>&copy; {new Date().getFullYear()} Oyeniyi Ifakunle - Digital Tech with Kunle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
