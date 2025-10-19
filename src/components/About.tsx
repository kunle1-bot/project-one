import kunleProfile from "@/assets/kunle-profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Digital Tech
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to Digital Tech with Kunle, where innovation meets excellence.
                I specialize in delivering cutting-edge digital solutions that transform
                businesses and empower growth in the digital age.
              </p>
              
              <p>
                With a passion for technology and a commitment to excellence, I help
                clients navigate the complex digital landscape with confidence. From
                web development to digital strategy, I provide comprehensive solutions
                tailored to your unique needs.
              </p>
              
              <p>
                Let's work together to bring your digital vision to life and achieve
                remarkable results that drive your business forward.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl"></div>
              <img
                src={kunleProfile}
                alt="Kunle - Digital Tech Professional"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
