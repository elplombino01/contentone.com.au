'use client';

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen-dvh flex flex-col items-center justify-center text-center overflow-hidden container bg-glow-dots"
    >
      {/* Static Gradient Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-onyx-profond/50 to-onyx-profond" />

      {/* Background decoration (reduced-motion safe) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
      </div>

      {/* Animate the container, not individual elements for performance */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // viewport={{ once: true }} // This is not needed with animate="visible"
      >
        <motion.div variants={itemVariants} className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-8">
          <Sparkles className="w-4 h-4 text-indigo-electrique" />
          <span className="text-sm font-inter text-indigo-electrique">Performance-Driven Content Agency</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-satoshi font-bold text-ivoire-mat mb-6 leading-tight tracking-tight text-balance"
        >
          Your Content Should Perform,
          <br />
          <span className="text-gradient">Not Just Look Pretty.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-acier-doux mb-12 max-w-3xl mx-auto leading-relaxed text-balance"
        >
          We blend creative direction, data-driven strategy, and AI-enhanced execution to build your unfair advantage. We don&apos;t just create content—we build content engines that convert.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/#contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary btn-lg group"
            >
              Start My Growth Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/portfolio" passHref>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary btn-lg group"
            >
              See Our Results
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      
    </section>
  );
}