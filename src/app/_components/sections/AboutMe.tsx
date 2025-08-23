'''"use client";

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  Quote,
  Award,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  Zap
} from "lucide-react";

function ButtonParticles({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    if (reduceMotion) return [];
    return [...Array(5)].map((_, i) => ({
      key: i,
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: [0, Math.random() * 20 - 10],
      y: [0, -Math.random() * 20 - 10],
      opacity: [0, 0.8, 0],
      duration: Math.random() * 2 + 1,
      repeatDelay: Math.random() * 2,
    }));
  }, [reduceMotion]);

  if (!mounted || reduceMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute rounded-full bg-ivoire-mat/20"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
          }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatDelay: p.repeatDelay,
          }}
        />
      ))}
    </div>
  );
}

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["-10%", "10%"]);

  const stats = [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "250+", label: "Projects Completed", icon: Target },
    { value: "98%", label: "Client Satisfaction", icon: Star },
  ];

  const expertise = [
    { title: "Content Strategy", description: "Data-driven content planning and execution", icon: Lightbulb },
    { title: "Performance Marketing", description: "ROI-focused campaigns across all channels", icon: TrendingUp },
    { title: "Brand Development", description: "Building memorable brands that convert", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24, filter: prefersReducedMotion ? "none" : "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 40, scale: prefersReducedMotion ? 1 : 0.95, filter: prefersReducedMotion ? "none" : "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section relative overflow-hidden bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond"
    >
      {/* Background decoration (decorative only) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
        
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="animate-fade-in-up flex flex-col items-center justify-center text-center will-change-transform-opacity-filter"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
            >
              <Zap className="w-4 h-4 text-indigo-electrique" aria-hidden="true" />
              <span className="text-sm font-inter text-indigo-electrique">Meet The Founder</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-satoshi font-bold text-ivoire-mat mb-6"
            >
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2 align-middle opacity-80 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>You&apos;re Not Hiring an Agency. <span className="text-gradient" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>You&apos;re Partnering with Me.</span></span>
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-acier-doux font-inter leading-relaxed mb-6 max-w-[72ch] text-pretty"
            >
              Based in Melbourne, I’m François Vaccarello. For over 15 years, I&apos;ve directed content for brands big and small, and I&apos;ve learned one thing: creative work must do more than look good—it must work.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-acier-doux font-inter leading-relaxed mb-6 max-w-[72ch] text-pretty"
            >
              I founded ContentOne to be a new kind of creative partner. We&apos;re a team of performance-obsessed content nerds who blend deep visual instincts with real marketing know-how. We&apos;re here to build your content machine.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -left-4 -top-4 text-indigo-electrique opacity-20"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote className="w-16 h-16" />
              </motion.div>
              <motion.blockquote
                className="border-l-4 border-indigo-electrique pl-6 py-2 relative overflow-hidden"
                whileHover={{
                  borderColor: "#06B6D4",
                  paddingLeft: "1.75rem"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-electrique/5 to-cyan-electrique/5 -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
                <motion.p
                  className="text-2xl font-satoshi italic leading-relaxed"
                  style={{
                    background: "linear-gradient(90deg, #F8F8F8, #6366F1, #06B6D4, #F8F8F8)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  &quot;The most expensive content is the one that doesn&apos;t work.&quot;
                </motion.p>
              </motion.blockquote>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-acier-doux font-inter leading-relaxed mb-8 max-w-[72ch] text-pretty"
            >
              My mission is simple: help ambitious brands transform their content from a cost center
              into a profit engine. I work exclusively with companies ready to invest in strategies
              that scale, not just tactics that look good on paper.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 mb-8 text-center justify-center"
              role="list"
            >
              {stats.map((stat) => (
                <motion.button
                  key={stat.label}
                  type="button"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredStat(stat.label)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="card p-4 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-indigo-electrique"
                  aria-label={`${stat.value} ${stat.label}`}
                  role="listitem"
                >
                  <div className="relative z-10">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-indigo-electrique" aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-satoshi font-bold mb-1 text-ivoire-mat">{stat.value}</div>
                    <div className="text-sm font-inter text-acier-doux">{stat.label}</div>
                  </div>
                  {!prefersReducedMotion && hoveredStat === stat.label && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-indigo-electrique/10 to-cyan-electrique/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <h3 className="text-xl md:text-2xl xl:text-3xl font-satoshi font-semibold text-ivoire-mat mb-4">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2 align-middle opacity-60 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2H6a2 2 0 0 0-2 2v13l4-4h9a2 2 0 0 0 2-2V7l-6-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Areas of Expertise</span>
                </span>
              </h3>
              <div className="space-y-3" role="list">
                {expertise.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="w-full text-left flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-transparent hover:border-indigo-electrique/20 focus-visible:ring-2 focus-visible:ring-indigo-electrique transition-colors"
                    role="listitem"
                    aria-label={`${item.title}: ${item.description}`}
                  >
                    <CheckCircle className="w-5 h-5 text-indigo-electrique mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-satoshi font-semibold text-ivoire-mat mb-1">{item.title}</h4>
                      <p className="text-acier-doux font-inter text-sm max-w-[72ch] text-pretty">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <motion.button
                whileHover={prefersReducedMotion ? undefined : {
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                className="btn btn-primary btn-success group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-h-[44px] min-w-[44px]"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Let&apos;s Work Together
                  <motion.div
                    animate={prefersReducedMotion ? undefined : { x: [0, 5, 0] }}
                    transition={prefersReducedMotion ? undefined : {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-electrique to-indigo-electrique opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:opacity-0"
                  initial={false}
                />
                <ButtonParticles reduceMotion={prefersReducedMotion} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative will-change-transform-opacity-filter"
          >
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-electrique to-violet-profond p-0.5 z-10"
              aria-hidden="true"
            >
              <div className="flex items-center justify-center w-full h-full bg-secondary rounded-full">
                <BookOpen className="w-10 h-10 text-indigo-electrique" />
              </div>
            </div>
            
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-electrique to-indigo-electrique p-0.5 z-10"
              aria-hidden="true"
            >
              <div className="flex items-center justify-center w-full h-full bg-secondary rounded-full">
                <Target className="w-8 h-8 text-cyan-electrique" />
              </div>
            </div>

            <motion.div
              className="relative w-full h-auto rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-electrique/20 to-cyan-electrique/20 will-change-transform-opacity"
              style={{ y }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/Francois photo .webp"
                  alt="François Vaccarello"
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 800px, 90vw"
                  className="object-contain"
                  priority={false}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-profond/80 via-transparent to-transparent rounded-3xl pointer-events-none" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-6 bg-gradient-to-r from-indigo-electrique to-violet-profond rounded-xl p-4 shadow-lg z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-satoshi font-black text-ivoire-mat">10+</div>
                <div className="text-sm text-ivoire-mat font-inter">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'''