import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(217, 118, 66, 0.95), rgba(45, 122, 94, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Digital Skills for the
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Modern World
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto font-light">
            Empowering people with IT, Digital, and AI knowledge to grow, earn, and stay relevant in today's
            digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#services")}
              className="bg-white text-primary hover:bg-white/90 shadow-2xl"
            >
              Explore Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
