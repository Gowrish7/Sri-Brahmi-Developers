import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger, in ms, applied as a transition delay. */
  delay?: number;
  /** Where the element travels in from. */
  from?: Direction;
  as?: ElementType;
}

const hiddenOffset: Record<Direction, string> = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  none: "",
};

/**
 * Reveals its children the first time they scroll into view.
 * The previous build ran every entrance animation on mount, so sections below
 * the fold had already finished animating by the time you reached them.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  from = "up",
  as: Tag = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] [transition-duration:900ms] ease-out-expo motion-reduce:transition-none",
        shown
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("opacity-0", hiddenOffset[from]),
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
