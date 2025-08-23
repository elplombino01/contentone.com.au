"use client";

"use client";

import { motion } from "framer-motion";
import { cn } from "../../_lib/utils"; // adjust if your utils path differs

type Elevation = "none" | "sm" | "md" | "lg";
type Radius = "md" | "lg" | "xl" | "2xl";

export type CardProps = {
  as?: "div" | "section" | "article";
  className?: string;
  elevation?: Elevation;
  radius?: Radius;
  interactive?: boolean; // enables hover lift
  bordered?: boolean;
  children: React.ReactNode;
  role?: string;
  "aria-label"?: string;
};

const elevationMap: Record<Elevation, string> = {
  none: "shadow-none",
  sm: "shadow-sm shadow-indigo-electrique/10",
  md: "shadow-md shadow-indigo-electrique/15",
  lg: "shadow-lg shadow-indigo-electrique/20",
};

const radiusMap: Record<Radius, string> = {
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  "2xl": "rounded-[2rem]",
};

export function Card({
  as = "div",
  className,
  elevation = "md",
  radius = "lg",
  interactive = false,
  bordered = true,
  children,
  role,
  ...rest
}: CardProps) {
  const Comp: any = interactive ? motion.div : as;
  const base = cn(
    "bg-secondary",
    bordered ? "border border-graphite" : "border border-transparent",
    elevationMap[elevation],
    radiusMap[radius],
    "transition-all duration-300 will-change-transform will-change-filter"
  );

  const interactiveProps = interactive
    ? {
        whileHover: { y: -8, scale: 1.01 },
        transition: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] },
      }
    : {};

  return (
    <Comp
      className={cn(base, className)}
      role={role}
      {...interactiveProps}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export type CardHeaderProps = {
  className?: string;
  children: React.ReactNode;
};
export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
};
export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn("text-xl md:text-2xl font-satoshi font-bold text-ivoire-mat", className)}>
      {children}
    </h3>
  );
}

export type CardDescriptionProps = {
  className?: string;
  children: React.ReactNode;
};
export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm md:text-base text-acier-doux font-inter leading-relaxed", className)}>
      {children}
    </p>
  );
}

export type CardBodyProps = {
  className?: string;
  children: React.ReactNode;
};
export function CardBody({ className, children }: CardBodyProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export type CardFooterProps = {
  className?: string;
  children: React.ReactNode;
};
export function CardFooter({ className, children }: CardFooterProps) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}