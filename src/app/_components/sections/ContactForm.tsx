'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Your message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    // Mock submission for now
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    // In a real app, you would send this data to an API endpoint.
    // For this example, we'll just simulate success.
    setSubmitStatus('success');
    setIsSubmitting(false);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="contact" className="section bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-glow-dots z-0"></div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="max-w-2xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold font-satoshi mb-4 text-ivoire-mat">Ready to Build Content That Works?</h2>
                <p className="text-lg text-acier-doux mb-12">
                    Let&apos;s discuss how we can help you achieve your goals. Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-acier-doux mb-2">Full Name *</label>
                        <input id="fullName" type="text" placeholder="John Doe" {...register("fullName")} className="input" />
                        {errors.fullName && <p className="text-red-400 mt-1 text-sm">{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-acier-doux mb-2">Email Address *</label>
                        <input id="email" type="email" placeholder="john@company.com" {...register("email")} className="input" />
                        {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-acier-doux mb-2">Company Name *</label>
                        <input id="companyName" type="text" placeholder="Your Company" {...register("companyName")} className="input" />
                        {errors.companyName && <p className="text-red-400 mt-1 text-sm">{errors.companyName.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-acier-doux mb-2">Budget Range *</label>
                        <select id="budget" {...register("budget")} className="input">
                            <option value="" disabled>Select budget range</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                        </select>
                        {errors.budget && <p className="text-red-400 mt-1 text-sm">{errors.budget.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-acier-doux mb-2">How can we help you?</label>
                        <textarea id="message" rows={4} placeholder="Tell us about your project..." {...register("message")} className="input resize-none"></textarea>
                        {errors.message && <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>}
                    </div>

                    <p className="text-xs text-acier-doux text-center">Your information is safe. I&apos;ll get back to you within 24 hours.</p>

                    <motion.button 
                        type="submit" 
                        className="btn-primary w-full btn-lg group" 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center"> <Send className="w-5 h-5 mr-2 animate-spin" /> Submitting...</span>
                        ) : (
                            <span className="flex items-center justify-center">Claim My Free Growth Strategy <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                        )}
                    </motion.button>

                    {submitStatus === 'success' && <p className="text-emerald-400 text-center">Thank you for your message. We will get back to you shortly.</p>}
                    {submitStatus === 'error' && <p className="text-red-400 text-center">An error occurred. Please try again later.</p>}
                </form>
            </motion.div>
        </div>
    </section>
  );
}