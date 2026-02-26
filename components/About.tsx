"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Turning Ideas Into Reality"
          description="A glimpse into who I am and what drives me."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              {aboutData.paragraph}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-accent rounded-full" />
              <span className="text-sm text-muted">
                Based in San Francisco, working globally
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass glass-hover p-6 text-center glow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
