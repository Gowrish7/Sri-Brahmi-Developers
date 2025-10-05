import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "15+ years of design excellence",
    "Award-winning team of designers",
    "Personalized design approach",
    "Sustainable and eco-friendly solutions",
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designing Dreams, Creating{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Reality
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Sri Brahmi Developers, we believe that great design transforms not just spaces,
              but lives. Our passion is creating interiors that reflect your personality,
              enhance your lifestyle, and bring joy to your everyday moments.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With a commitment to excellence and an eye for detail, we work closely
              with our clients to understand their vision and bring it to life through
              thoughtful design solutions.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="aspect-square rounded-lg overflow-hidden shadow-hover animate-float">
              <div className="w-full h-full bg-gradient-gold flex items-center justify-center">
                <div className="text-center text-accent-foreground p-12">
                  <p className="text-7xl font-bold mb-4">500+</p>
                  <p className="text-2xl font-medium">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
