"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Brain,
  ShieldCheck,
  Lock,
  RotateCcw,
  Presentation,
  Languages,
  Box,
} from "lucide-react";

const objectives = [
  {
    num: "01",
    icon: Brain,
    title: "Natural Language Understanding",
    description:
      "Enable the system to understand questions written in three languages (Arabic, French, English) and accurately determine the user's intent (data query, analysis, visualization, general question, etc.).",
    color: "from-primary-500 to-primary-600",
    bgGlow: "bg-primary-500/10",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Correct and Safe SQL Generation",
    description:
      "Convert the understanding into a syntactically and semantically correct SQL query, ensuring the query is read-only and free of any dangerous commands (DELETE, DROP, UPDATE, INSERT).",
    color: "from-emerald-500 to-emerald-600",
    bgGlow: "bg-emerald-500/10",
  },
  {
    num: "03",
    icon: Lock,
    title: "Database Security",
    description:
      "Apply multiple security layers: query validation, EXPLAIN execution, and read-only transactions to prevent any unauthorised data modifications.",
    color: "from-rose-500 to-rose-600",
    bgGlow: "bg-rose-500/10",
  },
  {
    num: "04",
    icon: RotateCcw,
    title: "Automatic Error Correction",
    description:
      "Add a repair loop that automatically attempts to fix failed queries, with a maximum of two attempts.",
    color: "from-amber-500 to-amber-600",
    bgGlow: "bg-amber-500/10",
  },
  {
    num: "05",
    icon: Presentation,
    title: "Clear Result Presentation",
    description:
      "Display results in a user-friendly format (text, table, chart) while providing debug information for developers.",
    color: "from-accent-500 to-accent-600",
    bgGlow: "bg-accent-500/10",
  },
  {
    num: "06",
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Make the system usable in Arabic, French, and English.",
    color: "from-cyan-500 to-cyan-600",
    bgGlow: "bg-cyan-500/10",
  },
  {
    num: "07",
    icon: Box,
    title: "Easy Deployment",
    description:
      "Use Docker and Docker Compose to simplify deployment and running the system in any environment.",
    color: "from-indigo-500 to-indigo-600",
    bgGlow: "bg-indigo-500/10",
  },
];

export default function ObjectivesSection() {
  return (
    <section id="objectives" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/[0.02] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/3 rounded-full blur-3xl" />

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
            className="text-accent-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            What We Set Out to Achieve
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            Specific Objectives
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-lg text-white/50 max-w-2xl mx-auto">
            Seven clear objectives driving the design and implementation of our
            intelligent database querying agent.
          </motion.p>
        </motion.div>

        {/* Objectives timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-emerald-500/50 hidden md:block" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={obj.num}
                  variants={fadeInUp}
                  className={`flex items-center gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 glass-card p-6 group hover:scale-[1.01] transition-all duration-500 ${
                      isLeft ? "md:text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${obj.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-white/30 block">
                          {obj.num}
                        </span>
                        <h3 className="text-lg font-semibold text-white">
                          {obj.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {obj.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex-shrink-0 ring-4 ring-surface-950 z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
