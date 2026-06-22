"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Rocket,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: "🧠",
    title: "Multilingual NL Understanding",
    description: "Successfully understands queries in Arabic, French, and English with hybrid intent classification.",
  },
  {
    icon: "⚡",
    title: "Accurate SQL Generation",
    description: "Converts natural language into syntactically and semantically correct SQL queries using LLM-powered generation.",
  },
  {
    icon: "🛡️",
    title: "Multi-Layer Security",
    description: "Three validation checks ensure only safe, read-only queries reach the database — zero data modification possible.",
  },
  {
    icon: "🔄",
    title: "Self-Repairing Pipeline",
    description: "Automatic error correction with up to 2 retry attempts ensures high success rate even with complex queries.",
  },
  {
    icon: "📊",
    title: "Rich Result Formatting",
    description: "Results presented as tables, charts, or natural language summaries with AI-powered formatting.",
  },
  {
    icon: "🐳",
    title: "Docker-Ready Deployment",
    description: "Full Docker and Docker Compose setup for seamless deployment in any environment.",
  },
];

const futureWork = [
  "Support additional languages beyond Arabic, French, and English",
  "Add voice input for natural language queries",
  "Implement caching layer for frequently asked queries",
  "Add user authentication and role-based access control",
  "Support for multiple database types (MySQL, MongoDB)",
  "Fine-tune a dedicated model for improved SQL generation accuracy",
];

const lessonsLearned = [
  {
    icon: Target,
    text: "Hybrid approaches (rule-based + AI) provide the best balance of speed and accuracy",
  },
  {
    icon: Sparkles,
    text: "Schema-aware context retrieval is critical for generating correct SQL queries",
  },
  {
    icon: BookOpen,
    text: "Security must be built into every layer, not added as an afterthought",
  },
];

export default function ConclusionSection() {
  return (
    <section id="conclusion" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/[0.015] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Wrapping Up
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            Conclusion & Future Work
          </motion.h2>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-subheading text-white mb-8 flex items-center gap-3"
          >
            <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            Key Achievements
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="glass-card p-6 group hover:scale-[1.02] transition-all duration-500 hover:border-emerald-500/20"
              >
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h4 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/45 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-subheading text-white mb-8 flex items-center gap-3"
          >
            <Lightbulb className="w-7 h-7 text-amber-400" />
            Lessons Learned
          </motion.h3>
          <div className="space-y-4">
            {lessonsLearned.map((lesson, i) => {
              const Icon = lesson.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card-light p-5 flex items-center gap-4 group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {lesson.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Work */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-subheading text-white mb-8 flex items-center gap-3"
          >
            <Rocket className="w-7 h-7 text-primary-400" />
            Future Work
          </motion.h3>
          <motion.div variants={fadeInUp} className="glass-card p-8 glow-purple">
            <div className="grid md:grid-cols-2 gap-4">
              {futureWork.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white/50 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
