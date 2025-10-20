import { GraduationCap, Palette, Globe, Zap, Video, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const trainingPrograms = [
  {
    icon: Palette,
    title: "Graphic Design",
    price: "₦50,000",
    tools: "Canva, Pixellab, Pixelcut, ChatGPT, Snapseed, Removebg",
    description: "Master professional graphic design with industry-standard tools and AI assistance.",
  },
  {
    icon: Globe,
    title: "Website Creation",
    price: "₦80,000",
    tools: "Lovable AI, Emergent, ChatGPT, Google Gemini",
    description: "Build stunning websites using cutting-edge AI-powered development tools.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    price: "₦25,000",
    tools: "Hypernatural, Flow, Gemini, ChatGPT",
    description: "Automate workflows and boost productivity with AI automation techniques.",
  },
  {
    icon: GraduationCap,
    title: "Ebook Publishing",
    price: "₦30,000",
    tools: "ChatGPT, Gemini, Microsoft Bing Image, Canva, MS Word, Selar/Amazon",
    description: "Create, design, and publish professional ebooks on major platforms.",
  },
  {
    icon: Video,
    title: "Content Creation",
    price: "₦50,000",
    tools: "Canva, Veo3, Gemini, ChatGPT, Copilot, CapCut, Speechma",
    description: "Create engaging multimedia content for social media and digital platforms.",
  },
  {
    icon: Music,
    title: "Song Creation",
    price: "₦20,000",
    tools: "ChatGPT, MS Word, Suno AI",
    description: "Compose and produce original music using AI-powered creation tools.",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Training{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital skills training to transform your career and unlock new opportunities
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trainingPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl flex justify-between items-center">
                    {program.title}
                    <span className="text-secondary text-lg font-bold">{program.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-3">
                    {program.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    <strong>Tools:</strong> {program.tools}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow-secondary"
            onClick={() => window.open("https://wa.me/2348089376351?text=Hello%20Oyeniyi%2C%20I'm%20interested%20in%20your%20training%20programs", "_blank")}
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Training;