import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Training />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
