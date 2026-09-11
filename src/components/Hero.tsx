import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "200+", label: "Happy clients" },
  { value: "4.9", label: "Average rating", suffix: "★" },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-28 md:pt-32 lg:pt-36"
    >
      {/* Soft warm wash behind the copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 animate-fade-in">
            <span className="eyebrow mb-6">Constructions &amp; Interiors</span>

            <h1 className="display-xl mb-6">
              Transform Your Space Into{" "}
              <em className="not-italic gold-text font-display">
                Timeless Beauty
              </em>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-9">
              Creating sophisticated interiors that blend elegance with
              functionality. We bring your vision to life with expert design and
              attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="group h-12 md:h-14 rounded-full bg-foreground text-background hover:bg-gold-ink px-8 text-base transition-colors"
                onClick={() => scrollToSection("portfolio")}
              >
                View Our Work
                <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 md:h-14 rounded-full border-foreground/20 bg-transparent hover:bg-foreground/5 hover:border-foreground/40 px-8 text-base"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>

            {/* Proof points */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 max-w-lg">
              {stats.map(({ value, label, suffix }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-3xl md:text-4xl font-semibold leading-none">
                      {value}
                      {suffix && (
                        <span className="text-accent text-xl align-top ml-0.5">
                          {suffix}
                        </span>
                      )}
                    </span>
                    <span className="mt-2 block text-xs md:text-sm text-muted-foreground">
                      {label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image */}
          <div className="lg:col-span-6 animate-fade-in-up">
            <div className="relative">
              {/* Offset gold frame */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 bottom-8 left-8 rounded-3xl border border-accent/30 hidden sm:block"
              />

              <div className="relative overflow-hidden rounded-3xl shadow-hover aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={heroImage}
                  alt="Sunlit modern living room with warm wood cabinetry and sheer curtains"
                  className="w-full h-full object-cover animate-slow-zoom"
                  fetchPriority="high"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
                />
              </div>

              {/* Floating caption chip */}
              <div className="absolute -bottom-5 left-5 sm:left-8 flex items-center gap-3 rounded-full bg-background/90 backdrop-blur-md pl-2 pr-5 py-2 shadow-soft border border-border/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground text-sm font-semibold">
                  SB
                </span>
                <span className="text-sm font-medium">
                  Turnkey design &amp; build
                  <span className="text-muted-foreground"> &middot; Kundapura</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection("services")}
          className="hidden lg:flex items-center gap-2 mt-14 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-float-slow" />
          Scroll to explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
