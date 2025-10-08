import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; // Adjust path if needed

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll to add background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-card/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-[100px] md:h-[120px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 justify-start">
            <img
              src={logo}
              alt="Sri Brahmi Developers"
              className="w-auto max-w-[500px] h-[110px] md:h-[160px] mt-2 md:mt-4"
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
                isHomePage
                  ? scrollToSection("contact")
                  : (window.location.href = "/#contact")
              }
              className="bg-gradient-gold hover:opacity-90"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-border animate-fade-in bg-card/95 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-4 px-4">
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
