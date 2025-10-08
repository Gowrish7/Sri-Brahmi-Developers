import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Rahul Menon",
      role: "Homeowner, Dubai",
      feedback:
        "Sri Brahmi Developers completely transformed our villa interiors. Their passion for perfection and design sense made every corner feel special.",
    },
    {
      name: "Aisha Khan",
      role: "Restaurant Owner, Sharjah",
      feedback:
        "From the first consultation to the final touches, the experience was seamless. The team truly understood our brand and created a space that inspires.",
    },
    {
      name: "Vikram Singh",
      role: "Villa Owner, Abu Dhabi",
      feedback:
        "What stood out most was their eye for detail and communication. Every idea was heard, refined, and beautifully executed.",
    },
    {
      name: "Neha Patel",
      role: "Apartment Owner, Dubai Marina",
      feedback:
        "A professional and passionate team who turned my apartment into a reflection of my personality. I couldn’t be happier!",
    },
    {
      name: "Mohammed Al Farsi",
      role: "Office Owner, Business Bay",
      feedback:
        "Their ability to combine luxury with functionality is unmatched. Every visitor compliments our new workspace design.",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const cardWidth = container.children[0].offsetWidth + 24; // width + gap

    const smoothScroll = () => {
      scrollAmount += 1; // speed
      if (scrollAmount >= container.scrollWidth / 2) {
        // loop back to start
        scrollAmount = 0;
      }
      container.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(smoothScroll);
    };

    container.style.display = "flex";
    container.style.willChange = "transform";
    container.style.transition = "transform 0.1s linear";

    requestAnimationFrame(smoothScroll);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-secondary/30 to-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our{" "}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Real experiences from people who trusted us to design their dream spaces.
        </p>

        {/* Scrollable Cards */}
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6"
          >
            {/* Duplicate testimonials for seamless looping */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 md:w-96 bg-background rounded-2xl p-8 shadow-lg border border-border/40 hover:border-accent hover:shadow-gold-glow transition-all"
              >
                <Quote className="w-10 h-10 text-accent mb-4 mx-auto" />
                <p className="text-lg text-foreground italic mb-6 break-words max-h-40 overflow-hidden">
                  “{t.feedback}”
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-xl">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex justify-center mt-4 text-accent">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-accent" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl font-semibold text-accent">
            200+ Happy Clients • 4.9★ Average Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
