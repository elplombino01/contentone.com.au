"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Zap, Star, Code, Palette, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    // Simulate video loading
    setTimeout(() => setIsVideoLoaded(true), 1000);
    
    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Icon rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Magnetic button effect (respect reduced motion)
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.setProperty("--x", `${x * 0.3}px`);
    button.style.setProperty("--y", `${y * 0.3}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.setProperty("--x", "0px");
    button.style.setProperty("--y", "0px");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.9,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] },
    },
    tap: { scale: 0.95 },
  };

  // Calculate parallax movement based on mouse position
  const calculateParallax = (strength: number) => {
    if (!heroRef.current) return { x: 0, y: 0 };
    
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (mousePosition.x - centerX) / strength;
    const moveY = (mousePosition.y - centerY) / strength;
    
    return { x: moveX, y: moveY };
  };

  const parallax = calculateParallax(50);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen-dvh flex flex-col items-center justify-center text-center overflow-hidden"
      id="home"
    >
      <div className="container py-24 md:py-32">
      {/* Premium Ambient Background — simplified and performance-friendly */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Single hero gradient layer with subtle scale+opacity on scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-onyx-profond via-graphite/40 to-onyx-profond"
          style={{ scale, opacity }}
        />
        {/* Soft noise overlay for texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] mix-blend-soft-light pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
          }}
        />
        {/* Minimal ambient blobs (max 6), extremely subtle */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 180 + (i % 3) * 40,
                height: 180 + (i % 3) * 40,
                left: `${10 + i * 14}%`,
                top: `${15 + (i % 3) * 22}%`,
                background:
                  i % 2 === 0
                    ? "rgba(99,102,241,0.08)"
                    : "rgba(6,182,212,0.07)",
                filter: "blur(28px)",
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center will-change-transform-opacity"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-electrique" />
          <span className="text-sm font-inter text-indigo-electrique">Performance-Driven Content Agency</span>
        </motion.div>

        {/* Main Title — one-time premium reveal, then calm */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-satoshi font-bold text-ivoire-mat mb-6 leading-tight tracking-tight text-balance will-change-transform-opacity"
        >
          <span className="block">
            Your Content Should Perform,
          </span>
          <br />
          <span className="block bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>
            Not Just Look Pretty.
          </span>
        </motion.h1>

        {/* Animated Subtitle with Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-indigo-electrique to-cyan-electrique rounded-full" />
          <motion.div
            className="text-lg md:text-xl text-acier-doux font-inter"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gradient">Transforming ideas into measurable results</span>
          </motion.div>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-electrique to-indigo-electrique rounded-full" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-acier-doux mb-12 max-w-[72ch] mx-auto leading-relaxed"
        >
          We blend creative direction, data-driven strategy, and AI-enhanced execution to build your unfair advantage. We don&apos;t just create content—we build content engines that convert.
        </motion.p>

        {/* Feature Icons — calm by default, premium hover */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mb-12"
          role="list"
          aria-label="Highlighted capabilities"
        >
          {[
            { icon: Code, label: "Development" },
            { icon: Palette, label: "Design" },
            { icon: BarChart3, label: "Analytics" },
            { icon: Zap, label: "Performance" },
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center gap-2 group" role="listitem">
              <div
                className={`p-3 rounded-full transition-all duration-300 ${
                  activeIcon === index
                    ? "bg-gradient-to-br from-indigo-electrique to-cyan-electrique"
                    : "bg-secondary border border-indigo-electrique/30"
                } group-hover:-translate-y-1 group-hover:shadow-glow`}
              >
                <item.icon className={`w-6 h-6 ${activeIcon === index ? "text-ivoire-mat" : "text-indigo-electrique"}`} />
              </div>
              <span className={`text-sm font-inter transition-colors ${
                activeIcon === index ? "text-ivoire-mat" : "text-acier-doux group-hover:text-ivoire-mat"
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/#contact">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Start my free growth strategy"
              className="btn btn-primary group relative overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start My Growth Strategy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-electrique to-indigo-electrique opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:opacity-0"
                initial={false}
              />
              {/* Remove perpetual background animation in reduced-motion */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-electrique to-violet-profond opacity-0 group-hover:opacity-20 motion-reduce:opacity-0"
                initial={false}
                animate={{
                  background: [
                    "linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))",
                    "linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.button>
          </Link>

          <Link href="/portfolio">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="See our results"
              className="btn btn-secondary group relative overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-5 h-5" />
                See Our Results
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 rounded-lg border border-indigo-electrique/30 opacity-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:opacity-0"
                initial={false}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              try {
                const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                document.getElementById('services')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
              } catch {
                document.getElementById('services')?.scrollIntoView();
              }
            }}
          >
            <span className="text-sm text-acier-doux mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-indigo-electrique/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [2, 8, 2] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-indigo-electrique rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Minimal floating element — parallax only, no loop */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-indigo-electrique/10 blur-2xl"
        style={{
          x: Math.max(Math.min(parallax.x * 0.4, 10), -10),
          y: Math.max(Math.min(parallax.y * 0.4, 10), -10),
        }}
        aria-hidden="true"
      />
      </div>
    </section>
  );
}
