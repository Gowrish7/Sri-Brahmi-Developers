import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; // adjust path if needed

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 justify-start">
            <img
              src={logo}
              alt="Sri Brahmi Developers"
              className="w-auto max-w-[500px] h-[110px] md:h-[160px] mt-1 md:mt-4"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  About
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="text-foreground hover:text-accent transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              to="/recent-work"
              className="text-foreground hover:text-accent transition-colors"
            >
              Recent Work
            </Link>
            <Button
              onClick={() =>
                isHomePage ? scrollToSection("contact") : (window.location.href = "/#contact")
              }
              className="bg-gradient-gold hover:opacity-90"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-foreground hover:text-accent transition-colors text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-foreground hover:text-accent transition-colors text-left"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-foreground hover:text-accent transition-colors text-left"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-foreground hover:text-accent transition-colors text-left"
                  >
                    About
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  className="text-foreground hover:text-accent transition-colors text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                to="/recent-work"
                className="text-foreground hover:text-accent transition-colors text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recent Work
              </Link>
              <Button
                onClick={() => {
                  if (isHomePage) {
                    scrollToSection("contact");
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
                className="bg-gradient-gold hover:opacity-90 w-full"
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
