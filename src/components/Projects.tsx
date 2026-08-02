import { ExternalLink, FileText, FileSpreadsheet, FileUser, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import showcaseVideo from "@/assets/showcase.mp4.asset.json";
import grantBlueprint from "@/assets/grant-blueprint.pdf.asset.json";
import spreadsheet from "@/assets/diamond-crest-spreadsheet.xlsx.asset.json";
import cvSample from "@/assets/professional-cv-sample.pdf.asset.json";

import adminCv from "@/assets/ADMIN_MANAGEMENT_THERESA_CHIZOBA_ECHESURUM_CV.pdf.asset.json";
import teacherCv from "@/assets/CLASS_TEACHER_THERESE_CHIZOBA_ECHESURUM_CV.pdf.asset.json";
import salesCv from "@/assets/AKANDE_ELIJAH_sales_rep_CV.pdf.asset.json";
import vaCv from "@/assets/AKANDE_ELIJAH_vietual_ass_CV.pdf.asset.json";

const websites = [
  {
    name: "Diamond Crest International School",
    url: "https://www.diamondcrestintlschool.online/",
    category: "School Website",
    description:
      "A complete school website with admissions information, academic programmes and parent-facing communication.",
  },
  {
    name: "Heroes World International School",
    url: "https://heroes-world-international-school.lovable.app/",
    category: "School Website",
    description:
      "A modern, mobile-first school platform showcasing curriculum, facilities and enrolment.",
  },
  {
    name: "Chidex Hotels and Suites",
    url: "https://chidexhotelsandsuite.online/",
    category: "Hospitality",
    description:
      "Hotel website with room showcases, amenities and direct booking enquiries.",
  },
  {
    name: "Ataiks and Sons",
    url: "https://www.ataiksandsons.store/",
    category: "E-commerce",
    description:
      "An online store built for product browsing, trust-building and simple checkout enquiries.",
  },
  {
    name: "Achievers Lounge Booking",
    url: "https://achievers-lounge-booking.lovable.app/",
    category: "Booking Platform",
    description:
      "A lounge reservation platform with a streamlined booking flow and clear service listings.",
  },
];

const documents = [
  {
    icon: FileText,
    title: "5-Year Grant Blueprint",
    client: "Diamond Crest International School",
    description:
      "A strategic grant-funding blueprint covering a full five-year growth and funding roadmap.",
    url: grantBlueprint.url,
  },
  {
    icon: FileSpreadsheet,
    title: "Promotion & Records Spreadsheet",
    client: "Diamond Crest International School",
    description:
      "A structured results and promotion spreadsheet built for accurate academic record keeping.",
    url: spreadsheet.url,
  },
  {
    icon: FileUser,
    title: "Professional CV Build",
    client: "Private Client",
    description:
      "A recruiter-ready CV rebuilt for clarity, strong positioning and interview conversion.",
    url: cvSample.url,
  },
  {
    icon: FileUser,
    title: "Admin & Management CV",
    client: "Theresa Chizoba Echesurum",
    description:
      "An administration and management CV positioned for leadership and operations roles.",
    url: adminCv.url,
  },
  {
    icon: FileUser,
    title: "Class Teacher CV",
    client: "Therese Chizoba Echesurum",
    description:
      "A teaching-focused CV highlighting classroom experience, curriculum delivery and results.",
    url: teacherCv.url,
  },
  {
    icon: FileUser,
    title: "Sales Representative CV",
    client: "Akande Elijah",
    description:
      "A sales CV built around targets, client relationships and revenue achievements.",
    url: salesCv.url,
  },
  {
    icon: FileUser,
    title: "Virtual Assistant CV",
    client: "Akande Elijah",
    description:
      "A remote-work CV tailored for virtual assistant and online support opportunities.",
    url: vaCv.url,
  },

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Successful Projects{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Delivered
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live websites, documents and digital assets delivered for real clients
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {websites.map((site, index) => (
            <Card
              key={site.url}
              className="bg-card border-border hover:border-primary/50 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary mb-3">
                  {site.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {site.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    Visit Live Site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Documents & Deliverables</h3>
            <div className="space-y-4">
              {documents.map((doc) => {
                const Icon = doc.icon;
                return (
                  <a
                    key={doc.title}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{doc.title}</h4>
                      <p className="text-xs text-secondary mb-1">{doc.client}</p>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Project Showcase</h3>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <video
                src={showcaseVideo.url}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto bg-muted"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 mb-4">
              A short walkthrough of recent client work and delivered digital solutions.
            </p>

            <div className="mt-6 p-6 bg-card border border-border rounded-2xl">
              <h4 className="text-lg font-semibold mb-2">
                My Vision for the Next Generation
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                I want to see the coming generation doing exploits with technology —
                building, creating and solving real problems with digital skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline">
                  <a
                    href="https://web.facebook.com/share/v/1EUuGdYCUy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch the Vision Video
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://web.facebook.com/share/v/1GRgqLRmLr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch: Generation Exploits 1
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://web.facebook.com/share/v/1JTMrWEYZR/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Watch: Generation Exploits 2
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;