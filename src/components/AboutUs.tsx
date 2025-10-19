import { Target, Eye, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-secondary">C'S Digital Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We are a leading digital education platform dedicated to bridging the skills gap in the modern
            workforce. Our comprehensive training programs combine practical knowledge with real-world
            applications.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-card to-muted/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower individuals with cutting-edge digital skills that unlock opportunities for personal
                and professional growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the premier destination for digital skills training, creating a future where everyone
                can thrive in the digital economy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-card to-muted/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, and personalized support. We're committed to your success every step of
                the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
