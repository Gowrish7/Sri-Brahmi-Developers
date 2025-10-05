import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Dining Space",
    category: "Residential",
  },
  {
    image: project2,
    title: "Serene Bedroom Retreat",
    category: "Residential",
  },
  {
    image: project3,
    title: "Contemporary Kitchen",
    category: "Residential",
  },
  {
    image: project4,
    title: "Elegant Home Office",
    category: "Residential",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-in-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautifully designed spaces that inspire and delight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8">
                  <p className="text-accent text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-primary-foreground text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
