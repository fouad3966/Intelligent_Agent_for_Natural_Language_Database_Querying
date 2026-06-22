"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import {
  AlertTriangle,
  Clock,
  UserX,
  HelpCircle,
  Lightbulb,
  Languages,
  ArrowRight,
} from "lucide-react";

const challenges = [
  {
    icon: UserX,
    title: "Non-Technical Users",
    description:
      "Managers, business analysts, and employees who do not know how to use SQL but need access to database information.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
  {
    icon: Clock,
    title: "Slow Decision-Making",
    description:
      "Users often have to wait for a developer or a database administrator to write the SQL query for them, slowing down decision-making.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
  },
  {
    icon: AlertTriangle,
    title: "SQL Knowledge Barrier",
    description:
      "Users know what information they need, but they cannot retrieve it by themselves because they lack SQL expertise.",
    color: "from-primary-500/20 to-primary-500/5",
    iconColor: "text-primary-400",
    borderColor: "border-primary-500/20",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/[0.03] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            The Challenge
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            Problem Statement
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-white/50 max-w-3xl mx-auto"
          >
            Today, most data is stored in relational databases such as
            PostgreSQL. To access this data and get the needed information,
            users must write SQL queries.
          </motion.p>
        </motion.div>

        {/* Challenge cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                variants={fadeInUp}
                className={`glass-card p-8 group hover:scale-[1.02] transition-all duration-500 ${challenge.borderColor}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${challenge.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key question */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="glass-card p-10 glow-blue"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <motion.div variants={fadeInLeft} className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary-400" />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-3">
                The Core Question
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                How can non-technical users interact with databases and get the
                information they need without learning SQL or depending on
                specialized developers?
              </p>
            </motion.div>
          </div>

          {/* Solution teaser */}
          <motion.div
            variants={fadeInRight}
            className="mt-8 pt-8 border-t border-white/5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                  Our Solution
                  <ArrowRight className="w-4 h-4" />
                </h4>
                <p className="text-white/50 leading-relaxed">
                  An intelligent agent that converts natural language requests
                  (Arabic, French, or English) into secure, executable SQL
                  queries.
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <Languages className="w-5 h-5 text-accent-400" />
                  <div className="flex gap-2">
                    {["العربية", "Français", "English"].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
