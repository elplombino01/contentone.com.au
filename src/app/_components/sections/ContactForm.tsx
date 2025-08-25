'use client';

import { useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, User, Mail, Briefcase, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react";
import React from "react";

// Zod schema for form validation
const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  companyName: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Define props type for the reusable input component
interface FormInputProps {
    id: keyof ContactFormData;
    icon: React.ElementType;
    label: string;
    register: any; // react-hook-form's register function
    error: FieldError | undefined;
    placeholder: string;
    onFocus: (id: string) => void;
    onBlur: (id: string | null) => void;
    focusedField: string | null;
}

// Reusable input field component for consistency
const FormInput: React.FC<FormInputProps> = ({ id, icon: Icon, label, register, error, placeholder, onFocus, onBlur, focusedField }) => (
  <div>
    <label htmlFor={id} className="sr-only">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Icon className={`h-5 w-5 transition-colors ${focusedField === id ? 'text-indigo-electrique' : 'text-gray-400'}`} />
      </div>
      <input
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-onyx-profond border border-gris-acier rounded-lg text-ivoire-mat placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-electrique focus:border-transparent"
        onFocus={() => onFocus(id)}
        onBlur={() => onBlur(null)}
      />
    </div>
    {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
  </div>
);

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-onyx-profond">
      {/* Static light halos for background depth */}
      <div className="absolute -top-1/4 -left-1/4 w-full h-full pointer-events-none">
        <div className="absolute w-[50rem] h-[50rem] rounded-full bg-indigo-electrique/10 blur-3xl" />
      </div>
      <div className="absolute -bottom-1/4 -right-1/4 w-full h-full pointer-events-none">
        <div className="absolute w-[50rem] h-[50rem] rounded-full bg-dodger-blue/10 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi text-ivoire-mat">
            Let&apos;s Get in Touch
          </h2>
          <p className="mt-4 text-lg text-acier-doux">
            Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* The "Card" for the form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto bg-onyx-profond/50 border border-gris-acier/50 rounded-2xl p-8 shadow-2xl backdrop-blur-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              id="fullName"
              label="Full Name"
              icon={User}
              register={register}
              error={errors.fullName}
              placeholder="Your Name"
              onFocus={setFocusedField}
              onBlur={setFocusedField}
              focusedField={focusedField}
            />
            <FormInput
              id="email"
              label="Email Address"
              icon={Mail}
              register={register}
              error={errors.email}
              placeholder="your.email@example.com"
              onFocus={setFocusedField}
              onBlur={setFocusedField}
              focusedField={focusedField}
            />
            <FormInput
              id="companyName"
              label="Company Name"
              icon={Briefcase}
              register={register}
              error={errors.companyName}
              placeholder="Your Company"
              onFocus={setFocusedField}
              onBlur={setFocusedField}
              focusedField={focusedField}
            />
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <MessageSquare className={`h-5 w-5 transition-colors ${focusedField === 'message' ? 'text-indigo-electrique' : 'text-gray-400'}`} />
                </div>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="How can I help you?"
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-onyx-profond border border-gris-acier rounded-lg text-ivoire-mat placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-electrique focus:border-transparent"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full !py-4 !text-lg group flex items-center justify-center"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          {submitStatus !== 'idle' && (
            <div className="mt-6 text-center">
              {submitStatus === 'success' && (
                <div className="flex items-center justify-center text-emerald-400">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <p>Message sent successfully! I&apos;ll be in touch soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center text-red-400">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}