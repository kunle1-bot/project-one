import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      content:
        "C'S Digital Skills transformed my career. I went from struggling to find clients to running a successful web design business. Esther's guidance was invaluable!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "E-commerce Entrepreneur",
      content:
        "The dropshipping course gave me the exact blueprint I needed. Within 3 months, I was generating consistent income. Best investment I've ever made!",
      rating: 5,
    },
    {
      name: "Aisha Mohammed",
      role: "Digital Marketer",
      content:
        "The AI tools training opened my eyes to so many possibilities. I've increased my productivity by 300% and my clients are amazed at the results.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Crypto Trader",
      content:
        "Esther's crypto training and signals helped me navigate the market with confidence. I've seen consistent returns and finally understand the technology.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students who have transformed their lives through our training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
