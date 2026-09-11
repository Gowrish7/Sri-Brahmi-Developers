import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Dining Space",
    category: "Residential",
    // Uneven spans keep the grid from reading like a spreadsheet
    span: "lg:col-span-7",
  },
  {
    image: project2,
    title: "Serene Bedroom Retreat",
    category: "Residential",
    span: "lg:col-span-5",
  },
  {
    image: project3,
    title: "Contemporary Kitchen",
    category: "Residential",
    span: "lg:col-span-5",
  },
  {
    image: project4,
    title: "Elegant Home Office",
    category: "Residential",
    span: "lg:col-span-7",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Selected projects</span>
            <h2 className="display-lg mb-5">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of beautifully designed spaces that inspire
              and delight
            </p>
          </div>

          <Link
            to="/recent-work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold-ink transition-colors shrink-0"
          >
            See recent work
            <ArrowRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 lg:auto-rows-[26rem] xl:auto-rows-[30rem]">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 120}
              className={`${project.span} h-[17rem] sm:h-[22rem] lg:h-full`}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl bg-secondary shadow-soft transition-shadow duration-500 hover:shadow-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform [transition-duration:1200ms] ease-out-expo group-hover:scale-[1.06]"
                />

                {/* Always-on scrim so captions stay readable on touch devices too */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent"
                />

                <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
                  <div className="transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-background text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background/30 text-background opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
