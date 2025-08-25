"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import ResultMetric from "../../_components/primitives/ResultMetric";
import {
  Star,
  TrendingUp,
  Award,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  BarChart3,
  Zap
} from "lucide-react";

const clients = [
  { name: "Winplex", logo: "/images/Winplex-Logo.webp", width: 160, height: 40, industry: "Technology", growth: "+250%" },
  // Reduce BAD Workwear size even more
  { name: "BAD Workwear", logo: "/images/bad-workwear-logo.webp", width: 120, height: 30, industry: "SaaS", growth: "+180%" },
  // Increase 124 Shoes size by 300% (triple the current size)
  { name: "124 Shoes", logo: "/images/124-shoes-logo.webp", width: 8640, height: 2160, industry: "E-commerce", growth: "+320%" },
  { name: "Altea", logo: "/images/altea-logo.webp", width: 160, height: 40, industry: "Analytics", growth: "+150%" },
];
// Duo-track for seamless loop without gap
const marqueeClients = [...clients, ...clients];

const stats = [
  { value: "250%", label: "Average Growth", icon: TrendingUp, description: "Across all client projects" },
  { value: "98%", label: "Client Satisfaction", icon: Star, description: "Based on client feedback" },
  { value: "50+", label: "Projects Delivered", icon: Award, description: "In the last year alone" },
];

const testimonials = [
  {
    quote: "ContentOne transformed our content strategy into a revenue driver, delivering 250% growth in just 6 months.",
    author: "Sarah Johnson",
    role: "CMO, TechCorp",
    avatar: "/avatars/sarah-johnson.jpg"
  },
  {
    quote: "The team's data-driven approach scaled our user acquisition and tripled our qualified leads, all while maintaining quality.",
    author: "Michael Chen",
    role: "Head of Growth, GrowthLab",
    avatar: "/avatars/michael-chen.jpg"
  },
  {
    quote: "ContentOne didn't just redesign our brand; they redefined how we connect with our audience. Our engagement metrics have never been higher.",
    author: "Emily Rodriguez",
    role: "Brand Director, BrandForge",
    avatar: "/avatars/emily-rodriguez.jpg"
  }
];

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [counterValues, setCounterValues] = useState([0, 0, 0]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (isInView) {
      const targets = [250, 98, 50];
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setCounterValues(targets.map(target => Math.floor(target * easeProgress)));

        if (step >= steps) {
          clearInterval(timer);
          setCounterValues(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -60,
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond relative overflow-hidden"
      id="trusted-by"
    >
      {/* Background decoration — simplified, no perpetual particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
          >
            <Sparkles className="section-title-icon text-indigo-electrique opacity-90 align-middle" />
            <span className="text-sm font-inter text-indigo-electrique">Trusted by Industry Leaders</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-satoshi font-bold text-ivoire-mat mb-6"
          >
            <span className="inline-flex items-center">
              <svg className="section-title-icon align-middle opacity-90 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none" focusable="false">
                <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>
                Chosen by Founders & Marketers Who
                <br />
                <span className="bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent">
                  Demand Measurable ROI.
                </span>
              </span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-acier-doux font-inter max-w-[72ch] mx-auto"
          >
            Join the companies that have transformed their content performance and achieved remarkable growth
          </motion.p>
        </motion.div>

        {/* Stats Section — refactored to ResultMetric, text unchanged */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={statVariants} className="cursor-default" viewport={{ once: true }}>
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                  transition={reduceMotion ? undefined : { duration: 4, ease: "easeInOut" }}
                >
                  <stat.icon className="w-10 h-10 text-indigo-electrique" />
                </motion.div>
              </div>
              <ResultMetric
                value={stat.value}
                label={stat.label}
                description={stat.description}
                className="hover:shadow-xl hover:shadow-indigo-electrique/20"
                aria-label={`${stat.label} ${stat.value}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos — simple single-track marquee (no edge fades) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 will-change-transform-opacity"
          style={{ y }}
        >
          <div
            className="relative w-full overflow-hidden"
            aria-label="Client logos marquee"
            role="region"
          >
            <div
              className="flex items-center gap-8 pr-8 will-change-transform"
              style={reduceMotion ? undefined : { }}
              onMouseEnter={(e) => {
                if (reduceMotion) return;
                const track = e.currentTarget as HTMLElement;
                track.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                if (reduceMotion) return;
                const track = e.currentTarget as HTMLElement;
                track.style.animationPlayState = "running";
              }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="relative group bg-secondary/50 border border-graphite hover:border-indigo-electrique/30 rounded-xl transition-all duration-300 px-6 py-4 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-w-[200px] h-16"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${client.name} logo`}
                >
                  {/* Normalize logo box height and vertical alignment to avoid any up/down drift */}
                  {/* Use each client's intrinsic width/height and center within a flexible box to avoid cropping */}
                  <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.width ?? 160}
                      height={client.height ?? 40}
                      sizes={`${client.width ?? 160}px`}
                      className="object-contain"
                      priority={false}
                      quality={90}
                      placeholder="empty"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-satoshi font-bold text-ivoire-mat mb-2">What Our Clients Say</h3>
            <p className="text-acier-doux font-inter">Hear from the brands we&apos;ve helped transform</p>
          </div>
          
          <div className="relative min-h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              >
                <Quote className="w-8 h-8 text-indigo-electrique mb-4 opacity-50" />
                
                <blockquote className="text-xl md:text-2xl font-inter italic text-ivoire-mat mb-6 leading-relaxed">
                  <span className="text-gradient">{testimonials[activeTestimonial].quote}</span>
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-electrique to-cyan-electrique p-0.5">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-6 h-6 text-indigo-electrique" />
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="text-lg font-satoshi font-semibold text-ivoire-mat">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-sm text-acier-doux font-inter">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`inline-flex items-center justify-center rounded-full ${
                  activeTestimonial === index ? "bg-indigo-electrique" : "bg-graphite"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2`}
                style={{ width: 44, height: 44 }}
                onClick={() => setActiveTestimonial(index)}
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeTestimonial === index ? "true" : undefined}
              >
                <span className="sr-only">Slide {index + 1}</span>
                <span
                  aria-hidden="true"
                  className={`block rounded-full ${activeTestimonial === index ? "bg-ivoire-mat" : "bg-secondary"}`}
                  style={{ width: 12, height: 12 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
