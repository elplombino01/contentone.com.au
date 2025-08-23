"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";
'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  CheckCircle,
  XCircle,
  Mail,
  User,
  Building,
  DollarSign,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function BackgroundParticles({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    if (reduceMotion) return [];
    return [...Array(15)].map((_, i) => ({
        key: i,
        width: Math.random() * 6 + 2,
        height: Math.random() * 6 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        background: i % 3 === 0
            ? "rgba(99, 102, 241, 0.4)"
            : i % 3 === 1
            ? "rgba(6, 182, 212, 0.4)"
            : "rgba(139, 92, 246, 0.4)",
        x: [0, Math.random() * 40 - 20],
        y: [0, Math.random() * 40 - 20],
        opacity: [0.1, 0.6, 0.1],
        duration: Math.random() * 10 + 10,
    }));
  }, [reduceMotion]);

  if (!mounted || reduceMotion) {
    return null;
  }

  return (
    <>
      {particles.map((p) => (
        <motion.div
            key={p.key}
            className="absolute rounded-full"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              background: p.background,
            }}
            animate={{
              x: p.x,
              y: p.y,
              opacity: p.opacity,
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

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const formFieldVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
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
        duration: 0.6,
        delay: 0.4,
        ease: [0.22, 0.61, 0.36, 1]
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.22, 0.61, 0.36, 1] },
    },
    tap: { scale: 0.95 },
  };

  const statusVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const formFields = [
    {
      id: "name",
      label: "Full Name *",
      type: "text",
      placeholder: "John Doe",
      icon: User,
      register: register("name"),
      error: errors.name,
    },
    {
      id: "email",
      label: "Email Address *",
      type: "email",
      placeholder: "john@company.com",
      icon: Mail,
      register: register("email"),
      error: errors.email,
    },
    {
      id: "company",
      label: "Company Name *",
      type: "text",
      placeholder: "Your Company",
      icon: Building,
      register: register("company"),
      error: errors.company,
    },
    {
      id: "budget",
      label: "Budget Range *",
      type: "select",
      placeholder: "Select budget range",
      icon: DollarSign,
      register: register("budget"),
      error: errors.budget,
      options: [
        { value: "5k-10k", label: "$5,000 - $10,000" },
        { value: "10k-25k", label: "$10,000 - $25,000" },
        { value: "25k-50k", label: "$25,000 - $50,000" },
        { value: "50k+", label: "$50,000+" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-br from-onyx-profond via-secondary to-onyx-profond relative overflow-hidden"
      id="contact"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "François Vaccarello",
            "jobTitle": "Content Strategist",
            "url": "https://contentone.com",
            "image": "/images/Francois photo .webp",
            "worksFor": {
              "@type": "Organization",
              "name": "ContentOne",
              "url": "https://contentone.com",
              "logo": "/images/og-image.svg"
            },
            "sameAs": [
              "https://twitter.com/contentone",
              "https://linkedin.com/company/contentone",
              "https://instagram.com/contentone"
            ]
          })
        }}
      />
      <div className="container" role="region" aria-labelledby="contact-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl ${reduceMotion ? "" : "animate-pulse"}`} />
        <div className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl ${reduceMotion ? "" : "animate-pulse"}`} />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
        
        <BackgroundParticles reduceMotion={reduceMotion} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16 animate-fade-in-up will-change-transform-opacity"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-electrique/10 border border-indigo-electrique/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-electrique" />
              <span className="text-sm font-inter text-indigo-electrique">Get In Touch</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-tight font-satoshi font-bold text-ivoire-mat mb-6"
              id="contact-heading"
            >
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 mr-2 align-middle opacity-80 text-indigo-electrique" aria-hidden="true" viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Ready to Build <span className="bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>Content That Works?</span></span>
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-acier-doux font-inter max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can help you achieve your goals. Fill out the form below and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="will-change-transform-opacity"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-satoshi font-bold text-ivoire-mat mb-6"
              >
                Contact
              </motion.h2>
              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                aria-describedby="contact-privacy-note"
                noValidate
              >
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label
                      htmlFor={field.id}
                      className={`block text-sm font-medium mb-2 font-inter flex items-center gap-2 transition-colors duration-200 ${
                        focusedField === field.id
                          ? "text-indigo-electrique"
                          : "text-acier-doux"
                      }`}
                    >
                      <field.icon className="w-4 h-4" />
                      {field.label}
                    </label>
                    
                    {field.type === "select" ? (
                      <select
                        {...field.register}
                        id={field.id}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="input"
                        aria-invalid={!!field.error}
                        aria-describedby={field.error ? `${field.id}-error` : undefined}
                        defaultValue=""
                      >
                        <option value="" disabled>{field.placeholder}</option>
                        {field.options?.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        {...field.register}
                        type={field.type}
                        id={field.id}
                        onFocus={() => setFocusedField(field.id)}
                        onBlur={() => setFocusedField(null)}
                        className="input"
                        placeholder={field.placeholder}
                        aria-invalid={!!field.error}
                        aria-describedby={field.error ? `${field.id}-error` : undefined}
                        inputMode={field.id === "email" ? "email" : "text"}
                        autoComplete={field.id === "email" ? "email" : field.id === "name" ? "name" : field.id === "company" ? "organization" : "on"}
                      />
                    )}
                    {!isInView && (
                      <div className="absolute inset-0 rounded-lg pointer-events-none">
                        <div className="skeleton w-full h-full rounded-lg" aria-hidden="true" />
                      </div>
                    )}
                    
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-electrique to-cyan-electrique rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={reduceMotion ? undefined : { scaleX: focusedField === field.id ? 1 : 0 }}
                      transition={reduceMotion ? undefined : { duration: 0.3 }}
                    />
                    
                    {field.error && (
                      <motion.p
                        id={`${field.id}-error`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400 font-inter"
                        role="alert"
                      >
                        {field.error.message}
                      </motion.p>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={formFieldVariants} className="relative">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 font-inter flex items-center gap-2 transition-colors duration-200 ${
                      focusedField === "message"
                        ? "text-indigo-electrique"
                        : "text-acier-doux"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    How can we help you?
                  </label>
                  
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="input resize-none"
                    placeholder="Tell us about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-electrique to-cyan-electrique rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={reduceMotion ? undefined : { scaleX: focusedField === "message" ? 1 : 0 }}
                    transition={reduceMotion ? undefined : { duration: 0.3 }}
                  />
                  
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 font-inter"
                      role="alert"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <p className="text-xs text-acier-doux font-inter">Your information is safe. I&apos;ll get back to you within 24 hours.</p>

                <motion.button
                  variants={buttonVariants}
                  whileHover={reduceMotion ? undefined : "hover"}
                  whileTap={reduceMotion ? undefined : "tap"}
                  type="submit"
                  aria-label="Submit contact form"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-success group relative overflow-hidden w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60 ring-offset-2 min-h-[44px] min-w-[44px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={reduceMotion ? undefined : { rotate: 360 }}
                          transition={reduceMotion ? undefined : { duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        Sent! Check your inbox
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <XCircle className="w-5 h-5 text-red-400" />
                        Something went wrong
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Claim My Free Growth Strategy
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transition-none" />
                      </>
                    )}
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-electrique to-indigo-electrique opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none motion-reduce:opacity-0"
                    initial={false}
                  />
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      variants={statusVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-4 flex items-center gap-2 text-emerald-400 font-inter"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Message received. I will reply within 24 hours.</span>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      variants={statusVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-4 flex items-center gap-2 text-red-400 font-inter"
                      role="status"
                      aria-live="assertive"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>Unable to send right now. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-secondary border border-graphite rounded-xl p-8 lg:p-12 h-full flex flex-col justify-center will-change-transform-opacity"
              role="complementary"
              aria-label="Testimonial"
            >
              <div className="mb-6">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/Winplex-Logo.webp"
                    alt="Winplex"
                    width={200}
                    height={60}
                    sizes="200px"
                    className="object-contain"
                    priority={false}
                    quality={90}
                  />
                </div>
                <Sparkles className="w-10 h-10 text-indigo-electrique mb-4" />
                <blockquote className="text-xl lg:text-2xl font-satoshi italic text-ivoire-mat leading-relaxed">
                                    &quot;François is more than a creative director; he&apos;s a genuine growth partner. He took the time to understand our business goals and built a content strategy that delivered an undeniable ROI. Our sales are up, and our brand has never been stronger.&quot;
                </blockquote>
              </div>
              <p className="font-satoshi font-semibold text-acier-doux">– Marketing Director, Winplex</p>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}