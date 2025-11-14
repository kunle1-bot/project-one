import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/cs-logo-new.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Oyeniyi Ifakunle - Your Global Creative Partner" className="h-32 w-auto object-contain" />
          </div>
          
          <div className="inline-block mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Your Global Creative Partner
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            with Expert Training
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Innovative technology solutions tailored to elevate your digital presence
            and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary group"
              onClick={() => navigate("/register")}
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => navigate("/payment")}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Make Payment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;
