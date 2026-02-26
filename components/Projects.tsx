"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "./SectionHeading";

function ExternalLinkIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubSmallIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="A selection of projects I've built recently."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="glass glass-hover group overflow-hidden glow-sm"
            >
              {/* Colored bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent via-purple-500 to-pink-500" />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.featured && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-md border border-accent/20 mb-3">
                        Featured
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted hover:text-white transition-colors"
                      aria-label={`View ${project.title} source on GitHub`}
                    >
                      <GithubSmallIcon />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted hover:text-accent transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>

                <p className="text-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-white/60 bg-white/[0.04] border border-white/[0.06] rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
