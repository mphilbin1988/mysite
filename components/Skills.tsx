"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionHeading from "./SectionHeading";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tools" as const, label: "Tools & DevOps" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          description="Technologies I work with to bring ideas to life."
        />

        <div className="space-y-12">
          {categories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.h3
                variants={fadeInUp}
                className="text-sm font-semibold text-muted uppercase tracking-widest mb-6"
              >
                {cat.label}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="glass glass-hover p-4 flex flex-col items-center gap-2 cursor-default group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="text-xs font-medium text-muted group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
