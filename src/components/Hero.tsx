import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxurious modern interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-2xl animate-slide-in-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space Into{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Timeless Beauty
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Creating sophisticated interiors that blend elegance with functionality.
            We bring your vision to life with expert design and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-lg"
              onClick={() => scrollToSection("portfolio")}
            >
              View Our Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
