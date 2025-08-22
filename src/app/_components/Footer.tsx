"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Send,
  Star,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Instagram", href: "https://www.instagram.com/francois_vaccarello/", icon: Instagram },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Careers", href: "#careers" },
  ];

  const servicesLinks = [
    { name: "Growth Strategy", href: "#services" },
    { name: "Performance Marketing", href: "#services" },
    { name: "Brand Development", href: "#services" },
    { name: "Digital Transformation", href: "#services" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Resources", href: "#resources" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "f.vaccarello@gmail.com", href: "mailto:f.vaccarello@gmail.com" },
    { icon: Phone, label: "Phone", value: "0490129007", href: "tel:0490129007" },
  ];

  const stats = [
    { value: "250%", label: "Average Growth", icon: TrendingUp },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "50+", label: "Projects Delivered", icon: Award },
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
        duration: 0.3,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-gradient-to-b from-secondary to-onyx-profond border-t border-graphite relative overflow-hidden"
      aria-labelledby="footer-title"
      role="contentinfo"
    >
      {/* Background decoration — ensure subtlety and no layout impact */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-electrique/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-electrique/5 blur-3xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="container relative z-10">
        <h2 id="footer-title" className="sr-only">Site footer</h2>
        {/* Newsletter Section */}
        <motion.section
          aria-labelledby="newsletter-title"
          variants={containerVariants}
          className="mb-16 p-1 rounded-2xl bg-gradient-accent"
        >
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 id="newsletter-title" className="text-2xl md:text-3xl font-satoshi font-bold text-ivoire-mat mb-4 text-balance">
                  Stay Ahead of the Curve
                </h3>
                <p id="newsletter-help" className="text-lg text-acier-doux font-inter mb-6 max-w-[72ch] text-pretty">
                  Get the latest insights on digital growth strategies and industry trends delivered to your inbox.
                </p>
                
                <form
                  noValidate
                  className="flex flex-col sm:flex-row gap-4"
                  aria-describedby="newsletter-help"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const status = document.getElementById('newsletter-status');
                    if (status) status.textContent = 'Thanks! You are subscribed.';
                  }}
                >
                  <input
                    type="email"
                    inputMode="email"
                    placeholder="Enter your email"
                    className="flex-1 input"
                    aria-label="Email address"
                    aria-describedby="newsletter-help"
                    aria-invalid="false"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="btn btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-electrique/60"
                  >
                    <span className="flex items-center gap-2">
                      Subscribe
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </motion.button>
                </form>
                <p
                  id="newsletter-status"
                  role="status"
                  aria-live="polite"
                  className="mt-2 text-sm text-acier-doux font-inter"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4" role="list" aria-label="Key stats">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center p-4 rounded-xl bg-secondary/50 border border-graphite"
                    role="listitem"
                  >
                    <stat.icon className="w-6 h-6 text-indigo-electrique mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-satoshi font-bold text-gradient" style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}>{stat.value}</div>
                    <div className="text-xs text-acier-doux font-inter">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <Image src="/images/contentone-logo.webp" alt="ContentOne" width={192} height={48} sizes="192px" className="h-12 w-auto" />
            </div>
            
            <p className="text-acier-doux mb-6 font-inter leading-relaxed max-w-[72ch] text-pretty">
              Transforming businesses through strategic digital growth. We help ambitious companies scale with data-driven marketing strategies and cutting-edge technology solutions.
            </p>
            
            <div className="space-y-3" role="list" aria-label="Contact information">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 text-acier-doux font-inter hover:text-indigo-electrique transition-colors duration-200"
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.2 }}
                  role="listitem"
                >
                  <contact.icon className="w-4 h-4 text-indigo-electrique flex-shrink-0" aria-hidden="true" />
                  <span>{contact.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.nav variants={itemVariants} aria-label="Company">
            <h4 className="text-lg font-satoshi font-semibold text-ivoire-mat mb-6">
              Company
            </h4>
            <ul className="space-y-3" role="list">
              {companyLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <motion.a
                    href={link.href}
                    className="text-acier-doux hover:text-indigo-electrique transition-colors duration-200 font-inter flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-electrique/60 rounded min-h-[44px] min-w-[44px] px-2"
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services Links */}
          <motion.nav variants={itemVariants} aria-label="Services">
            <h4 className="text-lg font-satoshi font-semibold text-ivoire-mat mb-6">
              Services
            </h4>
            <ul className="space-y-3" role="list">
              {servicesLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <motion.a
                    href={link.href}
                    className="text-acier-doux hover:text-indigo-electrique transition-colors duration-200 font-inter flex items-center gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-electrique/60 rounded min-h-[44px] min-w-[44px] px-2"
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-satoshi font-semibold text-ivoire-mat mb-6">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Social media">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-lg bg-secondary border border-graphite flex items-center justify-center text-acier-doux hover:text-indigo-electrique hover:border-indigo-electrique transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-electrique/60 min-h-[44px] min-w-[44px]"
                  whileHover={reduceMotion ? undefined : { translateY: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  aria-label={social.name}
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
            
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-electrique/10 to-cyan-electrique/10 border border-indigo-electrique/20 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-electrique/60">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-indigo-electrique" aria-hidden="true" />
                <span className="text-sm font-satoshi font-semibold text-ivoire-mat">Join Our Community</span>
              </div>
              <p className="text-xs text-acier-doux font-inter">
                Connect with like-minded professionals and industry experts.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-graphite"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <ul className="flex flex-wrap gap-6" role="list" aria-label="Footer resources">
              {resourcesLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <motion.a
                    href={link.href}
                    className="text-sm text-acier-doux hover:text-indigo-electrique transition-colors duration-200 font-inter focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-electrique/60 rounded min-h-[44px] min-w-[44px] px-2"
                    whileHover={reduceMotion ? undefined : { translateY: -2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-acier-doux font-inter">
                © {currentYear} ContentOne. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-acier-doux font-inter">
                <span>Built with</span>
                <span className="text-indigo-electrique">Next.js 14</span>
                <span>&</span>
                <span className="text-cyan-electrique">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}