"use client";

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useId, useEffect, useMemo } from "react";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

type BackgroundParticle = {
  key: string;
  size: number;
  left: string;
  top: string;
  color: string;
  x: number;
  y: number;
  duration: number;
};

type HoverParticle = {
  key: string;
  size: number;
  left: string;
  top: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
};

export default function PerfectMatch() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion() ?? false;
  const baseId = useId();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const cards = [
    {
      id: "growth",
      title: "Your Growth Has Stalled.",
      description: "You need content that drives results, not just likes. We build strategies that deliver consistent leads and sales.",
      span: "md:col-span-3",
      icon: TrendingUp,
      color: "from-indigo-electrique to-violet-profond",
      solution: "We implement a data-driven content strategy focused on your specific growth metrics. Our approach combines audience research, performance analysis, and iterative optimization to create content that consistently converts.",
      benefits: [
        "Increased conversion rates",
        "Higher quality leads",
        "Improved ROI on content spend",
        "Consistent growth trajectory"
      ]
    },
    {
      id: "launch",
      title: "You're Launching Something New.",
      description: "Get high-impact launch content that hypes, educates, and converts from day one.",
      span: "md:col-span-3",
      icon: Rocket,
      color: "from-cyan-electrique to-indigo-electrique",
      solution: "Our launch strategy creates anticipation and drives immediate action. We develop a multi-phase content approach that builds hype, educates your audience, and converts interest into sales from day one.",
      benefits: [
        "Maximum launch day impact",
        "Sustained post-launch momentum",
        "Higher initial conversion rates",
        "Strong brand positioning"
      ]
    },
    {
      id: "ads",
      title: "Your Ads Don't Perform.",
      description: "Let's build ad creatives that cut through the noise, improve your ROAS, and stop draining your budget.",
      span: "md:col-span-4",
      icon: Target,
      color: "from-violet-profond to-indigo-electrique",
      solution: "We redesign your ad strategy with compelling creatives and precise targeting. Our data-driven approach continuously optimizes your campaigns for maximum performance and minimal waste.",
      benefits: [
        "Higher ROAS",
        "Lower cost per acquisition",
        "Improved ad relevance scores",
        "Better audience targeting"
      ]
    },
    {
      id: "engine",
      title: "You Need a Content Engine.",
      description: "We plan, produce, and repurpose so your feed never sleeps and generates leads on autopilot.",
      span: "md:col-span-2",
      icon: Zap,
      color: "from-indigo-electrique to-cyan-electrique",
      solution: "We build a systematic content production and distribution engine that works 24/7. Our approach combines strategic planning, efficient production, and smart repurposing across all platforms.",
      benefits: [
        "Consistent content output",
        "Automated lead generation",
        "Cross-platform presence",
        "Reduced content creation stress"
      ]
    },
    {
      id: "overwhelmed",
      title: "You're Overwhelmed by Content.",
      description: "We handle the entire workflow: strategy, production, editing, and performance analysis.",
      span: "md:col-span-3",
      icon: Users,
      color: "from-cyan-electrique to-violet-profond",
      solution: "We take the entire content workflow off your plate. From strategy to execution to analysis, we handle everything so you can focus on running your business while we drive results.",
      benefits: [
        "Reduced workload",
        "Professional content quality",
        "Consistent publishing schedule",
        "Performance insights and reporting"
      ]
    },
    {
      id: "ahead",
      title: "You Need to Stay Ahead.",
      description: "We test the latest formats, AI tools, and trends so you don't have to.",
      span: "md:col-span-3",
      icon: Lightbulb,
      color: "from-violet-profond to-cyan-electrique",
      solution: "We continuously experiment with emerging formats, AI tools, and content trends. Our team stays ahead of the curve so you benefit from cutting-edge approaches without the learning curve.",
      benefits: [
        "First-mover advantage",
        "Access to latest technologies",
        "Competitive edge",
        "Future-proof content strategy"
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    hover: reduceMotion ? {} : {
      y: -8,
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const expandedVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond relative overflow-hidden"
      id="perfect-match"
      aria-labelledby="perfect-match-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
 
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
 
        {/* Floating Particles (client-only to avoid hydration mismatch) */}
        <ClientParticles reduceMotion={reduceMotion} />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-electrique" />
            <span className="text-sm font-inter text-indigo-electrique">Find Your Perfect Match</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-satoshi font-bold text-ivoire-mat mb-6"
          >
            We&apos;re a <span className="text-gradient bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>Perfect Match</span> If...
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-acier-doux font-inter max-w-[72ch] text-pretty mx-auto"
          >
            You recognize these challenges and want to turn them into opportunities
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto will-change-transform-opacity"
          style={{ y }}
          role="list"
          aria-label="Challenges grid"
        >
          {cards.map((card, index) => {
            const panelId = `${baseId}-${card.id}-panel`;
            const buttonId = `${baseId}-${card.id}-button`;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                custom={index}
                layout
                role="listitem"
                className={`${card.span} group relative overflow-hidden rounded-xl p-1 ${selectedCard === card.id ? 'md:col-span-6 z-10' : ''}`}
              >
                {/* Card background with gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${selectedCard === card.id ? 'opacity-100' : ''}`}
                  aria-hidden="true"
                />
                
                {/* Card content */}
                <div className={`relative h-full bg-secondary border border-graphite rounded-xl p-6 md:p-8 transition-colors duration-300 group-hover:border-transparent ${selectedCard === card.id ? 'border-transparent' : ''}`}>
                  {/* Icon */}
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} p-0.5`}>
                    <div className="flex items-center justify-center w-full h-full bg-secondary rounded-lg">
                      <card.icon className="w-6 h-6 text-ivoire-mat" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-satoshi font-bold text-ivoire-mat mb-3">
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-electrique group-hover:to-cyan-electrique transition-colors duration-300">
                      {card.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-acier-doux font-inter leading-relaxed mb-4 max-w-[72ch] text-pretty">
                    {card.description}
                  </p>

                  {/* Toggle expanded */}
                  <motion.button
                    id={buttonId}
                    type="button"
                    aria-expanded={selectedCard === card.id}
                    aria-controls={panelId}
                    onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                    whileHover={reduceMotion ? undefined : { scale: 1.02, x: 2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="btn btn-ghost !px-0 text-indigo-electrique font-inter text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60"
                  >
                    <span className="flex items-center gap-2">
                      {selectedCard === card.id ? 'Show less' : 'Learn more'}
                      <ArrowRight className={`w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${selectedCard === card.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} aria-hidden="true" />
                    </span>
                  </motion.button>

                  {/* Expanded Content */}
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    variants={expandedVariants}
                    initial="hidden"
                    animate={selectedCard === card.id ? "visible" : "hidden"}
                    className="mt-6 pt-6 border-t border-graphite"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-satoshi font-semibold text-ivoire-mat mb-3">Our Solution</h4>
                        <p className="text-acier-doux font-inter leading-relaxed mb-4">
                          {card.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-satoshi font-semibold text-ivoire-mat mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {card.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-indigo-electrique mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-ivoire-mat font-inter">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      className="btn btn-primary mt-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60"
                      aria-label="Discuss your solution"
                      onClick={() => {
                        setSelectedCard(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                      }}
                    >
                      <span className="flex items-center gap-2">
                        Discuss Your Solution
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none" aria-hidden="true">
                    <motion.div
                      className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-indigo-electrique to-cyan-electrique rotate-45 translate-x-4 -translate-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedCard === card.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Hover particles (client-only to avoid hydration mismatch) */}
                  <ClientHoverParticles reduceMotion={reduceMotion} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-indigo-electrique to-cyan-electrique">
            <div className="bg-secondary rounded-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-satoshi font-bold text-ivoire-mat mb-4">
                Ready to Transform Your Challenges into Opportunities?
              </h3>
              <p className="text-lg text-acier-doux font-inter max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how we can help you overcome these challenges and achieve your growth goals.
              </p>
              <motion.button
                type="button"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="btn btn-primary btn-success group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 min-h-[44px] min-w-[44px]"
                aria-label="Start your transformation"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  Start Your Transformation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" aria-hidden="true" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Client-only particles to prevent SSR/CSR divergence.
 * Generates deterministic particles after mount; honors reduced motion.
 */
function ClientParticles({ reduceMotion }: { reduceMotion: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const particles = useMemo(() => {
    if (reduceMotion) return [];
    const arr = Array.from({ length: 10 }).map((_, i) => {
      const rand = (min: number, max: number) => min + Math.random() * (max - min);
      return {
        key: `bg-${i}`,
        size: rand(2, 8),
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        color: i % 2 === 0 ? "rgba(99, 102, 241, 0.35)" : "rgba(6, 182, 212, 0.35)",
        x: rand(-20, 20),
        y: rand(-20, 20),
        duration: rand(8, 16),
      };
    });
    return arr;
  }, [reduceMotion]);

  if (!mounted || reduceMotion) return null;

  return (
    <>
      {particles.map((p: BackgroundParticle) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            background: p.color,
          }}
          animate={{
            x: [0, p.x],
            y: [0, p.y],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </>
  );
}

function ClientHoverParticles({ reduceMotion }: { reduceMotion: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const particles = useMemo(() => {
    if (reduceMotion) return [];
    const arr = Array.from({ length: 4 }).map((_, i) => {
      const rand = (min: number, max: number) => min + Math.random() * (max - min);
      return {
        key: `hover-${i}-${Math.round(rand(0, 1e6))}`,
        size: rand(2, 6),
        left: `${rand(0, 100)}%`,
        top: `${rand(0, 100)}%`,
        x: rand(-10, 10),
        y: -rand(10, 30),
        duration: rand(1.5, 3.5),
        delay: rand(0, 2),
      };
    });
    return arr;
  }, [reduceMotion]);

  if (!mounted || reduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none" aria-hidden="true">
      {particles.map((p: HoverParticle) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full bg-indigo-electrique/20"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
          }}
          animate={{
            x: [0, p.x],
            y: [0, p.y],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}