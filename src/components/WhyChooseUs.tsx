import { CheckCircle, Users, Target, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Personal Guidance",
      description:
        "One-on-one mentorship and support throughout your learning journey. You're never alone in your growth.",
    },
    {
      icon: Target,
      title: "Results-Driven Training",
      description:
        "Practical, hands-on courses designed to deliver real-world results. Learn skills you can apply immediately.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Over 500 successful students who have transformed their careers and achieved their digital goals.",
    },
    {
      icon: CheckCircle,
      title: "Flexible Learning",
      description:
        "Study at your own pace with lifetime access to course materials and ongoing updates.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-secondary">C'S Digital Skills?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond traditional training to ensure your success in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-gradient-to-br from-card to-muted/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
