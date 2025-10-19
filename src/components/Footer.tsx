const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Digital Tech with Kunle
            </span>
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Empowering businesses through innovative digital solutions
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Digital Tech with Kunle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
