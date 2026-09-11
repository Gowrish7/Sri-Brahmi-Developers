import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import emblem from "@/assets/logo-emblem.png";
import wordmark from "@/assets/logo-wordmark.png";

const sectionLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav item for whichever section is currently on screen
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("mobile-menu-button");
      if (
        menu &&
        button &&
        !menu.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close the menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const goToContact = () => {
    if (isHomePage) {
      scrollToSection("contact");
    } else {
      window.location.href = "/#contact";
    }
  };

  const solid = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border/70 shadow-soft"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            solid ? "h-[76px] md:h-[84px]" : "h-[92px] md:h-[108px]",
          )}
        >
          {/* Logo lockup — emblem and wordmark sit side by side so the bar stays compact */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Sri Brahmi Developers — home"
          >
            <img
              src={emblem}
              alt=""
              aria-hidden="true"
              className={cn(
                "w-auto object-contain transition-all duration-500 group-hover:scale-105",
                solid ? "h-11 md:h-12" : "h-12 md:h-14",
              )}
            />
            <img
              src={wordmark}
              alt="Sri Brahmi Developers — Constructions / Interiors"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                solid ? "h-7 md:h-8" : "h-8 md:h-9",
              )}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {isHomePage ? (
              sectionLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors after:absolute after:left-3 after:right-3 lg:after:left-4 lg:after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300",
                    activeSection === id
                      ? "text-foreground after:scale-x-100"
                      : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {label}
                </button>
              ))
            ) : (
              <Link
                to="/"
                className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}

            <Link
              to="/recent-work"
              className={cn(
                "relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors after:absolute after:left-3 after:right-3 lg:after:left-4 lg:after:right-4 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-300",
                location.pathname === "/recent-work"
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              Recent Work
            </Link>

            <a
              href="tel:+918310737227"
              className="ml-2 lg:ml-4 hidden lg:inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold-ink transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              +91 83107 37227
            </a>

            <Button
              onClick={goToContact}
              className="ml-2 lg:ml-4 rounded-full bg-foreground text-background hover:bg-gold-ink px-6 shadow-none transition-colors"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-6 pt-2 border-t border-border/70 animate-fade-in"
          >
            <div className="flex flex-col">
              {isHomePage ? (
                sectionLinks.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="flex items-center justify-between py-3.5 text-left text-base font-medium text-foreground border-b border-border/50 hover:text-gold-ink transition-colors"
                  >
                    {label}
                    <span className="text-accent text-sm">&rarr;</span>
                  </button>
                ))
              ) : (
                <Link
                  to="/"
                  className="flex items-center justify-between py-3.5 text-base font-medium text-foreground border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                  <span className="text-accent text-sm">&rarr;</span>
                </Link>
              )}

              <Link
                to="/recent-work"
                className="flex items-center justify-between py-3.5 text-base font-medium text-foreground border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recent Work
                <span className="text-accent text-sm">&rarr;</span>
              </Link>

              <a
                href="tel:+918310737227"
                className="flex items-center gap-2 py-3.5 text-base font-medium text-foreground border-b border-border/50"
              >
                <Phone className="w-4 h-4 text-accent" />
                +91 83107 37227
              </a>

              <Button
                onClick={goToContact}
                className="mt-5 w-full rounded-full bg-foreground text-background hover:bg-gold-ink h-12"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
