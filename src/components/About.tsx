import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Over 15 years of experience delivering exceptional designs",
    "Award-winning team of architects and interior designers",
    "Customized design solutions tailored to your lifestyle",
    "Eco-friendly and sustainable design practices",
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Sri Brahmi Developers
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Sri Brahmi Developers, we transform spaces into experiences. 
              Our designs are not only visually stunning but also practical, sustainable, 
              and crafted to enhance your everyday life.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From concept to completion, we work closely with our clients to ensure 
              every project reflects their vision, style, and values — delivering excellence at every step.
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
                  <p className="text-2xl font-medium">Projects Successfully Completed</p>
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
