import {
  Lightbulb,
  Home,
  PaintBucket,
  Sofa,
  Shapes,
  Hammer,
  PackageCheck,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

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
    // The seventh card spans two columns so the grid closes out evenly
    wide: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <span className="eyebrow mb-5">What we do</span>
          <h2 className="display-lg mb-5">Our Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive interior design solutions tailored to your unique needs
            and vision
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 70}
              className={cn(
                "group relative bg-background transition-colors duration-500 hover:bg-card",
                service.wide && "md:col-span-2",
              )}
            >
              <div
                className={cn(
                  "h-full p-8 lg:p-9 flex",
                  service.wide
                    ? "flex-col md:flex-row md:items-center gap-6 md:gap-8"
                    : "flex-col",
                )}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-gold-ink transition-all duration-500 group-hover:border-accent/40 group-hover:bg-gradient-gold group-hover:text-accent-foreground group-hover:shadow-gold-glow",
                    service.wide ? "h-14 w-14" : "mb-7",
                  )}
                >
                  <service.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className={cn(
                    "w-5 h-5 text-accent opacity-0 -translate-y-1 translate-x-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0",
                    service.wide
                      ? "hidden md:block shrink-0"
                      : "absolute top-8 right-8",
                  )}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
