import { Palette, Globe, Bot, BookOpen, Megaphone, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceCategories = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional design services for all your branding and marketing needs.",
    items: [
      { name: "Logo Design", price: "₦5,000" },
      { name: "Business Card Design", price: "₦5,000" },
      { name: "Brochure Design", price: "₦5,000" },
      { name: "Flyer Design", price: "₦5,000" },
      { name: "Social Media Graphics", price: "₦5,000" },
      { name: "Infographic Design", price: "₦5,000" },
      { name: "Brand Identity Design", price: "₦5,000" },
    ],
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Custom websites and web solutions that elevate your online presence.",
    items: [
      { name: "Custom Website Design", price: "₦50,000" },
      { name: "Website Development", price: "₦50,000" },
      { name: "E-commerce Website", price: "₦50,000" },
      { name: "Blog Website Design", price: "₦50,000" },
      { name: "Landing Page Design", price: "₦50,000" },
      { name: "Responsive Web Design", price: "₦50,000" },
      { name: "Website Maintenance", price: "₦50,000" },
    ],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart automation solutions powered by artificial intelligence.",
    items: [
      { name: "Chatbot Development", price: "₦25,000" },
      { name: "Automated Customer Service", price: "₦25,000" },
      { name: "Predictive Analytics", price: "₦25,000" },
      { name: "Machine Learning Models", price: "₦25,000" },
      { name: "Automated Data Processing", price: "₦25,000" },
      { name: "AI Workflow Automation", price: "₦25,000" },
    ],
  },
  {
    icon: BookOpen,
    title: "Ebook Publishing",
    description: "End-to-end ebook creation and publishing services.",
    items: [
      { name: "Ebook Writing & Publishing", price: "₦10,000" },
      { name: "Ebook Formatting & Design", price: "₦10,000" },
      { name: "Cover Design", price: "₦10,000" },
      { name: "Editing & Proofreading", price: "₦10,000" },
      { name: "Platform Distribution", price: "₦10,000" },
    ],
  },
  {
    icon: Megaphone,
    title: "Content Creation",
    description: "Engaging content that resonates with your audience.",
    items: [
      { name: "Blog Writing", price: "₦5,000" },
      { name: "Social Media Content", price: "₦5,000" },
      { name: "Copywriting", price: "₦5,000" },
      { name: "Video Scriptwriting", price: "₦5,000" },
      { name: "Podcast Scripting", price: "₦5,000" },
      { name: "Content Marketing Strategy", price: "₦5,000" },
    ],
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    description: "AI-powered content generation for faster, smarter results.",
    items: [
      { name: "AI Blog Posts", price: "₦5,000" },
      { name: "AI Social Media Content", price: "₦5,000" },
      { name: "AI Copywriting", price: "₦5,000" },
      { name: "AI Product Descriptions", price: "₦5,000" },
      { name: "AI Content Optimization", price: "₦5,000" },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert digital services with transparent pricing tailored to your needs
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border-border rounded-lg px-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid sm:grid-cols-2 gap-3 pt-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-secondary font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
