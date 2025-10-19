import {
  Globe,
  Video,
  Cloud,
  ShoppingCart,
  FolderKanban,
  BookOpen,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Video,
      title: "Loom Mastery",
      description: "Master video messaging and screen recording for effective communication.",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: Cloud,
      title: "Dropbox & Cloud Storage",
      description: "Optimize your digital workspace with cloud storage solutions.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: ShoppingCart,
      title: "Drop Shipping",
      description: "Launch and scale your e-commerce business with proven strategies.",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "Learn industry-standard tools to manage projects efficiently.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: BookOpen,
      title: "eBook Creation",
      description: "Turn your knowledge into profitable digital products.",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: Sparkles,
      title: "AI Tools Training",
      description: "Leverage cutting-edge AI tools to boost productivity and creativity.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: TrendingUp,
      title: "Crypto Training & Signals",
      description: "Navigate cryptocurrency markets with expert guidance and trading signals.",
      gradient: "from-secondary to-secondary-dark",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to equip you with in-demand digital skills for the
              modern workplace.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="xl" onClick={scrollToContact}>
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
