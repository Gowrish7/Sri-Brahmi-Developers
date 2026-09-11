import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import emblem from "@/assets/logo-emblem.png";
import wordmark from "@/assets/logo-wordmark-light.png";

const services = [
  "Residential Design",
  "Commercial Spaces",
  "Interior Design",
  "Renovation & Remodeling",
  "TurnKey Projects",
];

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Those sections only exist on the home page, so link away when we are elsewhere
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-deep text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={emblem}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto object-contain"
              />
              <img
                src={wordmark}
                alt="Sri Brahmi Developers — Constructions / Interiors"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="font-display text-2xl mb-5">We Build Your Dream</p>

            <a
              href="https://www.instagram.com/sri_brahmi_developers/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors group-hover:border-accent">
                <Instagram className="w-4 h-4" />
              </span>
              @sri_brahmi_developers
            </a>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Explore
            </h2>
            <ul className="space-y-3 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/recent-work"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Recent Work
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Services
            </h2>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent mb-5">
              Contact
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+918310737227"
                  className="group flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  +91 8310737227
                </a>
              </li>
              <li>
                <a
                  href="mailto:sribrahmidevelopers7@gmail.com"
                  className="group flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  sribrahmidevelopers7@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Herle+Complex+Opp+Vinayaka+Theatre+Murkai+Kundapura+576201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  <span>
                    Herle Complex 1st floor, Opp Vinayaka Theatre
                    <br />
                    Murkai, Kundapura - 576201
                    <ArrowUpRight className="inline w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>&copy; 2025 Sri Brahmi Developers | All rights reserved</p>
          <p>
            Developed by{" "}
            <a
              href="https://memoralabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors"
            >
              MemoraLabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
