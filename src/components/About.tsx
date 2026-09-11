import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import aboutImage from "@/assets/recent-1.jpg";

const features = [
  "Over 15 years of experience delivering exceptional designs",
  "Award-winning team of architects and interior designers",
  "Customized design solutions tailored to your lifestyle",
  "Eco-friendly and sustainable design practices",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <Reveal from="left" className="lg:col-span-6">
            <span className="eyebrow mb-5">Why choose us</span>

            <h2 className="display-lg mb-6">
              Why Choose{" "}
              <em className="not-italic gold-text font-display">
                Sri Brahmi Developers
              </em>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              At Sri Brahmi Developers, we transform spaces into experiences.
              Our designs are not only visually stunning but also practical,
              sustainable, and crafted to enhance your everyday life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              From concept to completion, we work closely with our clients to
              ensure every project reflects their vision, style, and values —
              delivering excellence at every step.
            </p>

            <ul className="space-y-px bg-border rounded-xl overflow-hidden">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="group flex items-start gap-4 bg-background px-5 py-4 transition-colors duration-300 hover:bg-card"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-gold-ink transition-colors duration-300 group-hover:bg-gradient-gold group-hover:text-accent-foreground">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Image + headline figure */}
          <Reveal from="right" delay={120} className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-hover aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src={aboutImage}
                  alt="Interior completed by the Sri Brahmi Developers team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent"
                />

                {/* Headline number, sitting on the image instead of a flat gold block */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="font-display text-6xl md:text-7xl font-semibold leading-none gold-text">
                    500+
                  </p>
                  <p className="mt-3 text-lg md:text-xl font-medium text-background/95">
                    Projects Successfully Completed
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
