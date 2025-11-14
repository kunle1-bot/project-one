import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Training from "@/components/Training";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Training />
      <Services />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
