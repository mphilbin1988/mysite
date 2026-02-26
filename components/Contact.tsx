"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { contactData, siteConfig } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "./SectionHeading";
import SocialIcons from "./SocialIcons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Contact"
          title={contactData.heading}
          description={contactData.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {/* Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06] bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06] bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl glass border border-white/[0.06] bg-white/[0.02] text-white placeholder-white/20 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>

          {/* Info side */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="glass p-6 rounded-2xl space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">
                  Email
                </h4>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted uppercase tracking-widest mb-2">
                  Location
                </h4>
                <p className="text-white">{siteConfig.location}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
                  Socials
                </h4>
                <SocialIcons />
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <p className="text-sm text-muted leading-relaxed">
                Prefer email? Send me a message at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                and I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
