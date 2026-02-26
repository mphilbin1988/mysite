"use client";

import { motion } from "framer-motion";
import { heroData, siteConfig } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SocialIcons from "./SocialIcons";

function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 4,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[128px] animate-pulse-glow [animation-delay:1.5s]" />
      </div>
      <ParticleField />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-accent bg-accent/10 rounded-full border border-accent/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-muted font-normal text-lg sm:text-xl md:text-2xl block mb-3">
            {heroData.greeting}
          </span>
          <span className="gradient-text">{heroData.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-4 text-balance"
        >
          {heroData.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5"
          >
            {heroData.cta.primary}
          </a>
          <a
            href={siteConfig.resumeUrl}
            className="px-8 py-3.5 glass glass-hover text-white font-semibold rounded-xl"
          >
            {heroData.cta.secondary}
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center">
          <SocialIcons />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
