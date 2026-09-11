import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Suresh Shetty",
    role: "Hotel Owner, Udupi",
    feedback:
      "We renovated our dining hall during the off-season and they finished right on schedule. Guests notice the difference the moment they walk in.",
  },
  {
    name: "Prashanth Kamath",
    role: "Jewellery Showroom Owner, Kundapura",
    feedback:
      "The lighting and display work turned out exactly as we imagined. Their team clearly understood what a jewellery space demands.",
  },
  {
    name: "Sharada Hegde",
    role: "Homestay Owner, Maravanthe",
    feedback:
      "They opened up our homestay towards the sea without taking away any privacy. Every single guest asks us who did the interiors.",
  },
  {
    name: "Deepak Poojary",
    role: "Homeowner, Brahmavar",
    feedback:
      "Every material was chosen keeping our coastal humidity in mind. Two monsoons later, the woodwork still looks brand new.",
  },
  {
    name: "Dr. Anitha Rao",
    role: "Clinic Owner, Manipal",
    feedback:
      "Our clinic feels calm and organised now. They planned the entire layout around how patients actually move through the space.",
  },
  {
    name: "Ronald D'Souza",
    role: "Bakery Owner, Koteshwara",
    feedback:
      "From the counter design to the seating, everything is practical and neat. The work was completed without disturbing our daily business.",
  },
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

const ClientTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="section-padding overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <span className="eyebrow mb-5">Client stories</span>
          <h2 className="display-lg mb-5">
            What Our <em className="not-italic gold-text font-display">Clients Say</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real experiences from people who trusted us to design their dream
            spaces.
          </p>
        </Reveal>
      </div>

      {/* Full-bleed marquee. The track is duplicated and shifts -50%, so the
          loop is seamless; CSS pauses it on hover/focus. */}
      <Reveal
        delay={100}
        className="relative -mx-6 md:-mx-12 lg:-mx-20 edge-fade"
      >
        <div className="marquee gap-5 md:gap-6 py-2">
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              aria-hidden={i >= testimonials.length}
              className="group flex w-[19rem] md:w-[23rem] shrink-0 flex-col rounded-2xl border border-border bg-card p-7 md:p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-gold-glow"
            >
              <div className="flex items-center justify-between mb-5">
                <Quote
                  className="w-7 h-7 text-accent/40 transition-colors duration-500 group-hover:text-accent"
                  aria-hidden="true"
                />
                <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="flex-1 font-display text-lg leading-relaxed text-foreground">
                &ldquo;{t.feedback}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-border pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold text-sm text-gold-ink">
                  {initials(t.name)}
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold truncate">{t.name}</span>
                  <span className="block text-sm text-muted-foreground truncate">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <div className="max-w-7xl mx-auto">
        <Reveal delay={150} className="mt-14 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm md:text-base">
            <span className="font-semibold">200+ Happy Clients</span>
            <span aria-hidden="true" className="text-border">|</span>
            <span className="inline-flex items-center gap-1.5 font-semibold">
              4.9
              <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
              Average Rating
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ClientTestimonials;
