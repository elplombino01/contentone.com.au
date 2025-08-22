"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * BackToTop
 * - Respects prefers-reduced-motion
 * - Uses transform/opacity only for animations
 * - Ensures min 44px tap target
 * - Accessible: aria-label, focus-visible ring, keyboard operable
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > 480); // show after first fold
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    if (reduceMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      aria-hidden={!visible}
      className="fixed right-4 bottom-4 z-50"
    >
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className={[
          // surface
          "bg-secondary border border-graphite text-ivoire-mat",
          "shadow-lg hover:shadow-indigo-electrique/20",
          // size: min 44x44
          "h-11 w-11 md:h-12 md:w-12",
          // shape
          "rounded-full",
          // layout
          "inline-flex items-center justify-center",
          // transitions (transform/opacity only)
          "transition-transform duration-200 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          // a11y focus
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/70",
          // visibility handling via opacity/scale
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
        style={{ willChange: "transform, opacity" }}
      >
        <ArrowUp className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}