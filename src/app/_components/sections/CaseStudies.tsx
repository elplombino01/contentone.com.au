"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Award, BarChart3, Star, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardBody } from "../../_components/primitives/Card";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const caseStudies = [
    {
      id: "winplex",
      title: "Winplex",
      result: "+38% Higher Conversions",
      description: "Full photo/video strategy + full-funnel ads. Result: 38% higher conversions in 6 months.",
      category: "E-commerce",
      client: "Winplex Inc.",
      duration: "6 months",
      challenge: "Low conversion rates and ineffective ad campaigns",
      solution: "Comprehensive photo/video strategy with full-funnel advertising approach",
      results: [
        "38% increase in conversion rates",
        "Improved ad performance and ROI",
        "Enhanced brand visibility"
      ],
      testimonial: "The results exceeded our expectations. Our conversion rates have never been higher.",
      logo: "/images/Winplex-Logo.webp",
      logoAlt: "Winplex logo"
    },
    {
      id: "bad-workwear",
      title: "BAD Workwear",
      result: "+52% Audience Engagement",
      description: "Monthly social-first video drops for TikTok and IG. Result: +52% audience engagement.",
      category: "Social Media",
      client: "BAD Workwear Co.",
      duration: "8 months",
      challenge: "Low social media engagement and limited brand awareness",
      solution: "Monthly social-first video content strategy for TikTok and Instagram",
      results: [
        "52% increase in audience engagement",
        "Higher brand recall and recognition",
        "Improved social media metrics"
      ],
      testimonial: "Our social media presence has transformed. The engagement numbers speak for themselves.",
      logo: "/images/bad-workwear-logo.webp",
      logoAlt: "BAD Workwear logo"
    },
    {
      id: "124-shoes",
      title: "124 Shoes",
      result: "Stronger Brand Perception",
      description: "High-end lookbooks and BTS content. Result: Increased AOV and a stronger luxury brand perception.",
      category: "Branding",
      client: "124 Shoes Ltd.",
      duration: "4 months",
      challenge: "Weak brand identity and inconsistent messaging",
      solution: "High-end lookbooks and behind-the-scenes content strategy",
      results: [
        "Increased average order value",
        "Stronger luxury brand perception",
        "Improved customer loyalty"
      ],
      testimonial: "The brand transformation has been remarkable. We're now positioned as a premium luxury brand.",
      logo: "/images/124-shoes-logo.webp",
      logoAlt: "124 Shoes logo"
    },
    {
      id: "altea",
      title: "Altea",
      result: "Total Digital Transformation",
      description: "Integrated studio & lifestyle content. Result: Transformed digital presence and boosted brand recall.",
      category: "Content Strategy",
      client: "Altea Digital",
      duration: "12 months",
      challenge: "Outdated digital presence and low brand recall",
      solution: "Integrated studio and lifestyle content strategy across all digital channels",
      results: [
        "Complete digital transformation",
        "Significantly boosted brand recall",
        "Improved customer engagement across platforms"
      ],
      testimonial: "The digital transformation has revolutionized how customers perceive and interact with our brand.",
      logo: "/images/altea-logo.webp",
      logoAlt: "Altea logo"
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const toggleExpand = (id: string) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond relative overflow-hidden"
      id="case-studies"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
      {/* Background decoration (simplified; no perpetual particles) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
          >
            <BarChart3 className="section-title-icon text-indigo-electrique" />
            <span className="text-sm font-inter text-indigo-electrique">Success Stories</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-satoshi font-bold text-ivoire-mat mb-6"
          >
            <span className="inline-flex items-center">
              <svg className="section-title-icon align-middle opacity-80 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>The Proof is in the <span className="text-gradient bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>Performance</span></span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-acier-doux font-inter max-w-2xl mx-auto"
          >
            We deliver tangible results that fuel growth. Here&apos;s how we&apos;ve helped businesses like yours succeed.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 motion-reduce:transform-none will-change-transform-opacity" role="list" aria-label="Case studies">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className={`${expandedStudy === study.id ? 'md:col-span-2 lg:col-span-4' : ''}`}
              role="listitem"
            >
              <Card elevation="md" radius="lg" interactive bordered className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-electrique/5 to-cyan-electrique/5 opacity-0"
                  animate={{ opacity: expandedStudy === study.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <CardBody className="relative z-10 p-6">
                {/* Header */}
                <div className="mb-4">
                  <motion.div
                    className="text-2xl md:text-3xl font-satoshi font-black text-gradient mb-2 leading-tight"
                    style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                    animate={{
                      scale: expandedStudy === study.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {study.result}
                  </motion.div>
                  <div className="text-sm text-indigo-electrique font-inter">{study.category}</div>
                </div>
                
                {/* Title + Logo row — keep ONLY the logo, remove the brand name text; center perfectly */}
                <div className="mb-3 flex items-center justify-center">
                  {study.logo && (
                    <Image
                      src={study.logo}
                      alt={study.logoAlt ?? `${study.title} logo`}
                      width={220}
                      height={70}
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 180px"
                      className="h-12 w-auto object-contain"
                      quality={100}
                      placeholder="empty"
                    />
                  )}
                </div>
                
                {/* Description */}
                <p className="text-sm text-acier-doux font-inter leading-relaxed mb-4 text-center">
                  {study.description}
                </p>
                
                {/* Expanded Content */}
                {expandedStudy === study.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative grid md:grid-cols-2 gap-8 mt-6"
                    role="region"
                    aria-labelledby={`${study.id}-toggle`}
                  >
                    {/* Logo already placed next to the title above; no floating logo here */}
                    {/* Left Column - Details */}
                    <div>
                      <h4 className="text-base md:text-lg xl:text-xl font-satoshi font-semibold text-ivoire-mat mb-4">Project Details</h4>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-acier-doux font-inter">Client:</span>
                          <span className="text-ivoire-mat font-satoshi">{study.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-acier-doux font-inter">Duration:</span>
                          <span className="text-ivoire-mat font-satoshi">{study.duration}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="text-sm md:text-base xl:text-lg font-satoshi font-semibold text-ivoire-mat mb-2">Challenge</h5>
                        <p className="text-sm text-acier-doux font-inter">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm md:text-base xl:text-lg font-satoshi font-semibold text-ivoire-mat mb-2">Solution</h5>
                        <p className="text-sm text-acier-doux font-inter">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Right Column - Results */}
                    <div>
                      <h4 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-satoshi font-semibold text-ivoire-mat mb-4">
                        <span className="inline-flex items-center">
                          <svg className="section-title-icon align-middle opacity-70 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Key Results</span>
                        </span>
                      </h4>
                      
                      <div className="space-y-2 mb-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-indigo-electrique mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base xl:text-lg text-ivoire-mat font-inter">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-secondary/50 p-4 rounded-lg mb-6">
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-indigo-electrique mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-ivoire-mat font-inter italic">&quot;{study.testimonial}&quot;</p>
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        variants={cardVariants}
                        whileHover={reduceMotion ? undefined : "hover"}
                        whileTap={reduceMotion ? undefined : "tap"}
                        type="button"
                        aria-label="View full case study"
                        className="btn btn-primary w-full group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-h-[44px] min-w-[44px]"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View Full Case Study
                          <ExternalLink className="w-4 h-4" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-electrique to-indigo-electrique opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:opacity-0"
                          initial={false}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {/* Toggle button for expand/collapse (a11y) */}
                <div className="mt-4 flex items-center justify-center">
                  <motion.button
                    id={`${study.id}-toggle`}
                    type="button"
                    className="btn btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-h-[44px] min-w-[44px]"
                    aria-expanded={expandedStudy === study.id}
                    aria-controls={`${study.id}-panel`}
                    onClick={() => toggleExpand(study.id)}
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <span className="inline-flex items-center gap-2 text-indigo-electrique">
                      {expandedStudy === study.id ? "Show less" : "Learn more"}
                      <motion.span
                        animate={reduceMotion ? undefined : { rotate: expandedStudy === study.id ? 90 : 0 }}
                        transition={reduceMotion ? undefined : { duration: 0.3 }}
                        className="inline-flex"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}