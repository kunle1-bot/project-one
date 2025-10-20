import oyeniyiProfile from "@/assets/oyeniyi-profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Oyeniyi Ifakunle
              </span>
            </h2>
            
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                My name is <strong>Oyeniyi Ifakunle</strong>, born on 26th January 2000, and happily married to Ekiomado Osato Beauty. I am a native of Kisi, Oyo State, Nigeria, but I currently reside in Port Harcourt, Rivers State, where I continue to build my career and professional journey.
              </p>
              
              <p>
                I am a results-driven professional with experience in graphic design, appointment setting, customer support, CV/resume building, website and portfolio development, as well as academic project and seminar writing. My tech journey began at Digital Skill Shop Academy, where I was recognized as a standout student. That foundation shaped my passion for delivering value through creativity, innovation, and digital solutions.
              </p>
              
              <p>
                Over the years, I have successfully delivered <strong>more than 200 graphics projects</strong>, each backed by strong client testimonials. I have also supported <strong>over 150 students</strong> in developing high-quality academic projects and seminars, built <strong>over 50 standout CVs and resumes</strong> that helped clients secure opportunities, and designed professional websites and portfolios that enhance personal branding and business growth.
              </p>
              
              <p>
                I am deeply passionate about helping individuals and organizations present themselves better, communicate effectively, and achieve their goals. My work is grounded in professionalism, creativity, and a commitment to excellence.
              </p>
              
              <p>
                As I continue to grow, I remain open to collaboration, continuous learning, and opportunities that allow me to make a meaningful impact.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl"></div>
              <img
                src={oyeniyiProfile}
                alt="Oyeniyi Ifakunle - Digital Tech Professional"
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
