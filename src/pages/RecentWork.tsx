import { useState } from "react";
import { Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

const RecentWork = () => {
  const [selectedWork, setSelectedWork] = useState<typeof recentWorks[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Recent Work</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest interior design projects and get inspired by our creative transformations
            </p>
          </div>

          <div className="relative px-12 animate-slide-in-left">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {recentWorks.map((work, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-700 cursor-pointer"
                          onClick={() => setSelectedWork(work)}
                        >
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={work.image}
                              alt={work.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6">
                              <h3 className="text-primary-foreground text-xl font-bold">
                                {work.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        {selectedWork && (
                          <div className="space-y-4">
                            <img
                              src={selectedWork.image}
                              alt={selectedWork.title}
                              className="w-full rounded-lg"
                            />
                            <div className="flex items-center justify-between">
                              <h3 className="text-2xl font-bold">{selectedWork.title}</h3>
                              <Button
                                onClick={() => window.open(selectedWork.instagramUrl, "_blank")}
                                className="gap-2"
                              >
                                <Instagram className="w-5 h-5" />
                                View on Instagram
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Button
              size="lg"
              onClick={() => window.open("https://www.instagram.com/sri_brahmi_developers/", "_blank")}
              className="gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow Us on Instagram
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecentWork;
