import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import estherProfile from "@/assets/esther-profile.jpg";
import csLogo from "@/assets/cs-logo-new.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about-me" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Contact Me", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Profile Section */}
          <div className="flex items-center gap-4">
            <img
              src={estherProfile}
              alt="Esther - Founder"
              className="w-12 h-12 rounded-full object-cover animate-float shadow-lg ring-2 ring-primary/20"
            />
            <img src={csLogo} alt="C'S Digital Skills" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button variant="hero" size="lg" onClick={() => scrollToSection("#contact")}>
              Hire Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg animate-fade-in">
            <nav className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="hero" size="lg" onClick={() => scrollToSection("#contact")} className="w-full">
                Hire Me
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
