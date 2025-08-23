"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useState, useRef, useId } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  Palette,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Zap,
  Lightbulb,
} from "lucide-react";

import { Card, CardBody, CardTitle, CardDescription } from "../../_components/primitives/Card";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  const services = [
    {
      id: "video",
      title: "Strategy-Backed Video Content",
      description: "From cinematic brand films to scroll-stopping Reels and TikToks. We handle production, advanced editing, and motion graphics to create visuals that get seen and shared.",
      icon: TrendingUp,
      color: "from-indigo-electrique to-violet-profond",
      features: [
        "Cinematic brand films",
        "Social media videos",
        "Motion graphics",
        "Video editing"
      ]
    },
    {
      id: "creative",
      title: "Creative Direction that Sells",
      description: "We develop your visual identity and storytelling. We build strategic content calendars and optimize your messaging for every platform to ensure consistency and impact.",
      icon: Palette,
      color: "from-cyan-electrique to-indigo-electrique",
      features: [
        "Visual identity",
        "Brand storytelling",
        "Content calendars",
        "Platform optimization"
      ]
    },
    {
      id: "performance",
      title: "Performance & Ad Content",
      description: "SEO-optimized copy, data-driven keyword research, and A/B tested ad campaigns for Meta & Google. Built to lower your CPA and maximize your ROI.",
      icon: Target,
      color: "from-violet-profond to-cyan-electrique",
      features: [
        "SEO optimization",
        "Keyword research",
        "A/B testing",
        "Campaign management"
      ]
    },
    {
      id: "ai",
      title: "AI-Enhanced Content Strategy",
      href: "/services/content-strategy",
      description: "We leverage cutting-edge AI for rapid content repurposing, ideation, and predictive insights. Work smarter, not just harder.",
      icon: Zap,
      color: "from-indigo-electrique to-cyan-electrique",
      features: [
        "Data-Driven Insights",
        "Predictive SEO",
        "Intelligent Content Mapping",
        "Performance Forecasting"
      ]
    },
  ];

  const processSteps = [
    { icon: BarChart3, title: "Analyze", description: "Deep dive into your current performance" },
    { icon: Lightbulb, title: "Strategize", description: "Develop a customized growth plan" },
    { icon: Users, title: "Implement", description: "Execute with precision and expertise" },
    { icon: TrendingUp, title: "Optimize", description: "Continuously improve and scale results" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
        delay: i * 0.08,
      },
    }),
    hover: reduceMotion ? {} : {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const processVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond relative overflow-hidden"
      id="services"
      aria-labelledby="services-title"
    >
      {/* Background decoration (reduced-motion safe) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
          role="region"
          aria-labelledby="services-title"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
          >
            <Zap className="w-4 h-4 text-indigo-electrique" />
            <span className="text-sm font-inter text-indigo-electrique">Our Expertise</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            id="services-title"
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-satoshi font-bold text-ivoire-mat mb-6"
          >
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-2 align-middle opacity-90 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none" focusable="false">
                <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Our <span className="text-gradient" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>Services</span></span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl xl:text-2xl text-acier-doux font-inter max-w-[72ch] text-pretty mx-auto"
          >
            Comprehensive solutions to accelerate your business growth and transform your digital presence
          </motion.p>
        </motion.div>

        {/* Services Grid (refactored to Card primitive) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 will-change-transform-opacity"
          role="list"
          aria-label="Services we offer"
        >
          {services.map((service, index) => {
            const cardInner = (
              <div className="relative h-full p-[1px] rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <Card elevation="md" radius="lg" interactive bordered className="relative h-full transition-all duration-300 group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-indigo-electrique/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60">
                  <CardBody className="p-6">
                    <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5`}>
                      <div className="flex items-center justify-center w-full h-full bg-secondary rounded-xl">
                        <service.icon className="w-8 h-8 text-ivoire-mat" />
                      </div>
                    </div>
                    <CardTitle className="mb-3">{service.title}</CardTitle>
                    <CardDescription className="mb-6">{service.description}</CardDescription>
                    <ul className="space-y-2 mb-0">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-acier-doux">
                          <CheckCircle className="w-4 h-4 text-indigo-electrique flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            );

            return (
              <motion.div
                key={service.id}
                variants={serviceCardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                className="group relative h-full"
                role="listitem"
              >
                {service.href ? (
                  <Link href={service.href} className="block h-full focus:outline-none" tabIndex={-1}>
                    {cardInner}
                  </Link>
                ) : (
                  cardInner
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20 will-change-transform-opacity"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-satoshi font-bold text-ivoire-mat mb-4" id="services-process-heading">
              Our <span className="text-gradient bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent">Process</span>
            </h3>
            <p className="text-lg text-acier-doux font-inter max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-labelledby="services-process-heading">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={processVariants}
                className="text-center"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.3 }}
                role="listitem"
                aria-label={`${index + 1}. ${step.title} — ${step.description}`}
                tabIndex={0}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-electrique to-violet-profond p-0.5"
                    whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-center w-full h-full bg-secondary rounded-full">
                      <step.icon className="w-10 h-10 text-ivoire-mat" />
                    </div>
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-electrique flex items-center justify-center text-ivoire-mat font-satoshi font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h4 className="text-xl font-satoshi font-bold text-ivoire-mat mb-2">
                  {step.title}
                </h4>
                <p className="text-acier-doux font-inter">
                  {step.description}
                </p>
              </motion.div>
            )))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center will-change-transform-opacity"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-indigo-electrique to-cyan-electrique">
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-satoshi font-bold text-ivoire-mat mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-acier-doux font-inter max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how our services can help you achieve your growth goals.
              </p>
              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                aria-label="Get started today"
                className="btn btn-primary btn-success group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-h-[44px] min-w-[44px]"
                onClick={() => {
                  try {
                    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    document.getElementById('contact')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
                  } catch {
                    document.getElementById('contact')?.scrollIntoView();
                  }
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-electrique to-indigo-electrique opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:opacity-0"
                  initial={false}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
