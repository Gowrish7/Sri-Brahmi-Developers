import {
  Lightbulb,
  Home,
  PaintBucket,
  Sofa,
  Shapes,
  Hammer,
  PackageCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Elegant, functional homes designed for comfort and beauty.",
  },
  {
    icon: Lightbulb,
    title: "Commercial Spaces",
    description:
      "Smart, modern solutions that enhance productivity and brand image.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Tailored designs that reflect your style and needs.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Refresh and upgrade your space with innovative ideas.",
  },
  {
    icon: Shapes,
    title: "3D Remodeling & Visualization",
    description: "Realistic previews of your project with innovative ideas.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture & Decor",
    description: "Unique pieces crafted to complement your interiors.",
  },
  {
    icon: PackageCheck,
    title: "TurnKey Projects",
    description: "End-to-End solutions, from design to execution.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-lift bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-gold flex items-center justify-center mb-6 animate-float-slow">
                <service.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
