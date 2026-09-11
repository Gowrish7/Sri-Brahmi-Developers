import { useState } from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import recent1 from "@/assets/recent-1.jpg";
import recent2 from "@/assets/recent-2.jpg";
import recent3 from "@/assets/recent-3.jpg";
import recent4 from "@/assets/recent-4.jpg";
import recent5 from "@/assets/recent-5.jpg";
import recent6 from "@/assets/recent-6.jpg";

const recentWorks = [
  {
    image: recent1,
    title: "Our Office Space",
    instagramUrl: "https://www.instagram.com/p/DPT3VlPDTsb/",
  },
  {
    image: recent2,
    title: "New Project - Basrur",
    instagramUrl: "https://www.instagram.com/p/DLcpW5hMXZU/",
  },
  {
    image: recent3,
    title: "Contemporary Kitchen",
    instagramUrl: "https://www.instagram.com/",
  },
  {
    image: recent4,
    title: "Elegant Dining Room",
    instagramUrl: "https://www.instagram.com/",
  },
  {
    image: recent5,
    title: "Luxurious Bathroom",
    instagramUrl: "https://www.instagram.com/",
  },
  {
    image: recent6,
    title: "Modern Home Office",
    instagramUrl: "https://www.instagram.com/",
  },
];

type Work = (typeof recentWorks)[number];

const RecentWork = () => {
  // A single lightbox for the whole gallery, rather than one Dialog per slide
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Page header */}
        <section className="relative overflow-hidden bg-gradient-hero pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative max-w-7xl mx-auto">
            <Reveal className="max-w-3xl">
              <span className="eyebrow mb-5">From the studio</span>
              <h1 className="display-xl mb-6">Recent Work</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Explore our latest interior design projects and get inspired by
                our creative transformations
              </p>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <Reveal className="relative sm:px-14">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-5 md:-ml-6">
                  {recentWorks.map((work) => (
                    <CarouselItem
                      key={work.title}
                      className="pl-5 md:pl-6 md:basis-1/2 lg:basis-1/3"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedWork(work)}
                        className="group relative block w-full overflow-hidden rounded-2xl bg-secondary shadow-soft transition-shadow duration-500 hover:shadow-hover text-left"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={work.image}
                            alt={work.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform [transition-duration:1200ms] ease-out-expo group-hover:scale-[1.06]"
                          />
                        </div>

                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/85 via-foreground/35 to-transparent"
                        />

                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
                          <h3 className="text-background text-lg font-semibold transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5">
                            {work.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background/30 text-background opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden sm:flex -left-2 h-11 w-11 border-border bg-background/90 backdrop-blur hover:bg-background hover:border-accent" />
                <CarouselNext className="hidden sm:flex -right-2 h-11 w-11 border-border bg-background/90 backdrop-blur hover:bg-background hover:border-accent" />
              </Carousel>
            </Reveal>

            <Reveal delay={120} className="text-center mt-16">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/sri_brahmi_developers/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="gap-2 h-12 md:h-14 rounded-full bg-foreground text-background hover:bg-gold-ink px-8 text-base transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Follow Us on Instagram
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Dialog
        open={selectedWork !== null}
        onOpenChange={(open) => !open && setSelectedWork(null)}
      >
        <DialogContent className="max-w-4xl p-4 sm:p-6">
          {selectedWork && (
            <div className="space-y-5">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full rounded-xl"
              />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <DialogTitle className="font-display text-2xl font-semibold">
                  {selectedWork.title}
                </DialogTitle>
                <Button
                  onClick={() =>
                    window.open(
                      selectedWork.instagramUrl,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="gap-2 rounded-full bg-foreground text-background hover:bg-gold-ink shrink-0"
                >
                  <Instagram className="w-4 h-4" />
                  View on Instagram
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default RecentWork;
