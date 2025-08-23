"use client";

"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../_lib/utils";

type ResultMetricProps = {
  value: string;            // e.g. "250%", "98%", "50+"
  label: string;            // e.g. "Average Growth"
  description?: string;     // optional subcopy
  className?: string;
  durationMs?: number;      // count-up duration (default 800ms)
  "aria-label"?: string;
};

function parseTarget(value: string): { target: number; suffix: string } {
  // Extract trailing non-digits as suffix, keep number part for counting
  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: "" };
  const num = Number(match[1]);
  const suffix = match[2] || "";
  return { target: isNaN(num) ? 0 : num, suffix };
}

export default function ResultMetric({
  value,
  label,
  description,
  className,
  durationMs = 800,
  ...rest
}: ResultMetricProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const { target, suffix } = parseTarget(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Respect reduced motion: set immediately
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const start = performance.now();
    const end = start + durationMs;
    let raf = 0;

    const tick = (t: number) => {
      if (t >= end) {
        setDisplay(target);
        return;
      }
      const progress = (t - start) / durationMs;
      // EaseOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(target * eased));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, durationMs]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-secondary border border-indigo-electrique/30 rounded-xl transition-all duration-300 hover:border-indigo-electrique hover:shadow-xl hover:shadow-indigo-electrique/20 p-6 text-center relative overflow-hidden group",
        "motion-reduce:transition-none",
        className
      )}
      {...rest}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-electrique/5 to-cyan-electrique/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <div className="text-5xl font-satoshi font-black bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent mb-2"
             style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>
          {display}
          {suffix}
        </div>
        <div className="text-lg font-satoshi font-semibold text-ivoire-mat mb-1">{label}</div>
        {description ? (
          <div className="text-sm text-acier-doux font-inter">{description}</div>
        ) : null}
      </div>
    </div>
  );
}