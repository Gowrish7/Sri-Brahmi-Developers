import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import emblem from "@/assets/logo-emblem.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative text-center">
        <img
          src={emblem}
          alt=""
          aria-hidden="true"
          className="mx-auto mb-8 h-16 w-auto object-contain"
        />

        <p className="font-display text-[6rem] md:text-[8rem] font-semibold leading-none gold-text">
          404
        </p>

        <p className="mt-2 mb-8 text-xl text-muted-foreground">
          Oops! Page not found
        </p>

        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-gold-ink"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
