"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
