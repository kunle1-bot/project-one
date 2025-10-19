import { Award, BookOpen, Users } from "lucide-react";
import estherProfile from "@/assets/esther-profile.jpg";

const AboutMe = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified Expert",
      description: "Professional certifications in digital marketing and AI",
    },
    {
      icon: BookOpen,
      title: "Experienced Trainer",
      description: "5+ years helping individuals master digital skills",
    },
    {
      icon: Users,
      title: "500+ Students",
      description: "Successfully trained professionals worldwide",
    },
  ];

  return (
    <section id="about-me" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-3"></div>
                <img
                  src={estherProfile}
                  alt="Esther - Digital Skills Expert"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="animate-slide-up space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet <span className="text-primary">Esther</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm Esther, the founder of C'S Digital Skills. My passion is empowering individuals with
                the digital knowledge they need to thrive in today's tech-driven world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in IT, digital marketing, and emerging technologies like AI and
                cryptocurrency, I've helped hundreds of students transform their careers and achieve financial
                independence through practical, results-driven training.
              </p>

              {/* Achievements Grid */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <achievement.icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
