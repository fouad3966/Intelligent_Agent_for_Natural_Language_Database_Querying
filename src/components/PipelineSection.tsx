"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import {
  Brain,
  Search,
  Code2,
  Shield,
  RotateCcw,
  FileText,
  ChevronRight,
  Check,
  X,
  AlertTriangle,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const pipelineSteps = [
  {
    num: 1,
    title: "Intent Classifier",
    subtitle: "Hybrid Rule-based / AI-based",
    icon: Brain,
    color: "from-accent-500 to-accent-600",
    glowColor: "shadow-accent-500/20",
    image: "/images/image15.png",
    imageAlt: "Intent Classification Flowchart",
    content: {
      description:
        "The classifier is the first real decision point in the backend. It determines what the user actually wants. Uses a hybrid approach combining two methods (Rule-based / AI-based).",
      features: [
        "Security check: Blocks dangerous inputs (SQL injection, prompt injection, secret extraction)",
        "Confidence score: If confidence ≥ 0.75 → use rule-based result",
        "If confidence < 0.75 → call AI classifier (LLM fallback)",
      ],
      intents: [
        { name: "general_question", color: "bg-primary-500/20 text-primary-400" },
        { name: "schema_question", color: "bg-amber-500/20 text-amber-400" },
        { name: "data_query", color: "bg-emerald-500/20 text-emerald-400" },
        { name: "complex_analysis", color: "bg-accent-500/20 text-accent-400" },
        { name: "visualization_query", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "out_of_scope", color: "bg-rose-500/20 text-rose-400" },
      ],
    },
  },
  {
    num: 2,
    title: "Schema Retriever",
    subtitle: "Smart Context Extraction",
    icon: Search,
    color: "from-primary-500 to-primary-600",
    glowColor: "shadow-primary-500/20",
    image: null,
    imageAlt: "",
    content: {
      description:
        "The schema retriever fetches only the relevant tables and columns from the database. It does not send the entire database schema to the LLM (which would be too large and confusing).",
      techniques: [
        {
          name: "Schema Introspection",
          desc: "Reads database structure dynamically",
        },
        {
          name: "Document Index & Lexical Search",
          desc: "Indexes tables/columns for fast lookup",
        },
        {
          name: "Value Grounding",
          desc: "Matches user values to actual DB values",
        },
      ],
      output:
        "A compact schema context containing only the relevant tables, columns, primary keys, foreign keys, and observed values.",
    },
  },
  {
    num: 3,
    title: "SQL Generator",
    subtitle: "The Core Engine",
    icon: Code2,
    color: "from-emerald-500 to-emerald-600",
    glowColor: "shadow-emerald-500/20",
    image: null,
    imageAlt: "",
    content: {
      description:
        "The SQL generator is the core of the system. It converts the user's question and schema context into a valid SQL query.",
      inputs: [
        "User's original question",
        "Intent from the classifier",
        "Compact schema context from the retriever (tables, columns, keys, observed values)",
      ],
      outputFields: [
        { name: "sql", desc: "The generated SQL query" },
        { name: "confidence", desc: "Confidence level of generation" },
        { name: "reasoning_summary", desc: "Explanation of the approach" },
        { name: "action", desc: "Type of action taken" },
        { name: "model", desc: "LLM model used" },
      ],
    },
  },
  {
    num: 4,
    title: "Validation & Security",
    subtitle: "SQL Safety Layer",
    icon: Shield,
    color: "from-rose-500 to-rose-600",
    glowColor: "shadow-rose-500/20",
    image: "/images/image16.png",
    imageAlt: "SQL Safety Layer Flowchart",
    content: {
      description:
        "The SQL Safety Layer is the most critical security component of the system. It ensures that only safe, read-only queries are executed.",
      checks: [
        {
          name: "Read-Only SQL Validation",
          desc: "Prefix, Keywords, Comments check",
          icon: Check,
          color: "text-emerald-400",
        },
        {
          name: "EXPLAIN Validation",
          desc: "Syntax, Schema verification",
          icon: Search,
          color: "text-primary-400",
        },
        {
          name: "Safe Execution",
          desc: "Transaction, Timeout, Row Limit",
          icon: Shield,
          color: "text-accent-400",
        },
      ],
      flow: "If validation passes → Query is sent to execution. If validation fails → Query is sent to the Repair Loop.",
    },
  },
  {
    num: 5,
    title: "Repair Loop",
    subtitle: "Auto-correction Mechanism",
    icon: RotateCcw,
    color: "from-amber-500 to-amber-600",
    glowColor: "shadow-amber-500/20",
    image: "/images/image17.png",
    imageAlt: "Repair Loop Flowchart",
    content: {
      description:
        "The repair loop is a fallback mechanism when SQL generation or execution fails. It tries to fix the problem automatically without user intervention.",
      triggers: [
        "Validation Error",
        "EXPLAIN Error",
        "Execution Error",
      ],
      process:
        "When a query fails, the system collects the failed query, error, question, and schema context. It sends this to the LLM with a repair prompt. The LLM returns a corrected SQL query. The repaired query is then re-validated and re-executed.",
      limit: "Maximum of 2 attempts. If both attempts fail, the system returns a clean error message to the user.",
    },
  },
  {
    num: 6,
    title: "Answer Formatter",
    subtitle: "Human-Readable Output",
    icon: FileText,
    color: "from-teal-500 to-teal-600",
    glowColor: "shadow-teal-500/20",
    image: "/images/image18.png",
    imageAlt: "Answer Formatter Flowchart",
    content: {
      description:
        "The answer formatter is the final step in the pipeline. It takes the raw SQL results and turns them into something human-readable.",
      approaches: [
        {
          name: "Rule-based Formatting",
          desc: "Fast and gives simple text responses",
          type: "Fast / Fallback",
        },
        {
          name: "AI-based Formatting",
          desc: "Uses the LLM to provide more natural answers with summaries and follow-up suggestions",
          type: "Natural / Rich",
        },
      ],
      output:
        "A clear, user-friendly response (text, table, or chart). The user sees only the final answer — all the complexity is hidden.",
    },
  },
];

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  const step = pipelineSteps[activeStep];
  const StepIcon = step.icon;

  return (
    <section id="pipeline" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/[0.02] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Step by Step
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            System Processing Pipeline
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-lg text-white/50 max-w-3xl mx-auto">
            Six interconnected modules that transform a natural language question
            into a validated, formatted answer.
          </motion.p>
        </motion.div>

        {/* Pipeline step selector */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {pipelineSteps.map((s, i) => {
            const SIcon = s.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeStep === i
                    ? `bg-gradient-to-r ${s.color} text-white shadow-lg ${s.glowColor}`
                    : "bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10"
                }`}
              >
                <SIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.title}</span>
                <span className="sm:hidden">{s.num}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active step content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left: Info */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
              >
                <StepIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xs font-mono text-white/30">
                  Step {step.num} of 6
                </span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm text-white/40">{step.subtitle}</p>
              </div>
            </div>

            <p className="text-white/60 leading-relaxed mb-6">
              {step.content.description}
            </p>

            {/* Step-specific content */}
            {step.content.intents && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3">
                  Six Possible Intents:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {step.content.intents.map((intent) => (
                    <span
                      key={intent.name}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono ${intent.color}`}
                    >
                      {intent.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {step.content.features && (
              <div className="space-y-2">
                {step.content.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/50">{f}</span>
                  </div>
                ))}
              </div>
            )}

            {step.content.techniques && (
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-white/70">
                  Three Main Techniques:
                </h4>
                {step.content.techniques.map((t) => (
                  <div key={t.name} className="glass-card-light p-3">
                    <span className="text-sm font-medium text-primary-400">
                      {t.name}
                    </span>
                    <p className="text-xs text-white/40 mt-1">{t.desc}</p>
                  </div>
                ))}
                {step.content.output && (
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <span className="text-xs font-semibold text-emerald-400">
                      Output:
                    </span>
                    <p className="text-xs text-white/50 mt-1">
                      {step.content.output}
                    </p>
                  </div>
                )}
              </div>
            )}

            {step.content.inputs && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3">
                  Inputs:
                </h4>
                <div className="space-y-2">
                  {step.content.inputs.map((input, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-white/50">{input}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step.content.outputFields && (
              <div>
                <h4 className="text-sm font-semibold text-white/70 mb-3">
                  Output JSON:
                </h4>
                <div className="code-block p-4">
                  <span className="text-white/30">{"{"}</span>
                  {step.content.outputFields.map((f, i) => (
                    <div key={i} className="pl-4">
                      <span className="text-primary-400">
                        &quot;{f.name}&quot;
                      </span>
                      <span className="text-white/30">: </span>
                      <span className="text-emerald-400/70">
                        // {f.desc}
                      </span>
                    </div>
                  ))}
                  <span className="text-white/30">{"}"}</span>
                </div>
              </div>
            )}

            {step.content.checks && (
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-white/70">
                  Three Main Checks:
                </h4>
                {step.content.checks.map((c) => {
                  const CIcon = c.icon;
                  return (
                    <div
                      key={c.name}
                      className="flex items-center gap-3 glass-card-light p-3"
                    >
                      <CIcon className={`w-5 h-5 ${c.color}`} />
                      <div>
                        <span className="text-sm font-medium text-white/70">
                          {c.name}
                        </span>
                        <p className="text-xs text-white/40">{c.desc}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="mt-4 flex items-start gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/50">Pass → Execute</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <X className="w-4 h-4 text-rose-400" />
                    <span className="text-white/50">Fail → Repair Loop</span>
                  </div>
                </div>
              </div>
            )}

            {step.content.triggers && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3">
                  Trigger Conditions:
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {step.content.triggers.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 text-xs"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.content.process}
                </p>
                <div className="mt-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <span className="text-xs font-semibold text-amber-400">
                    Limit:
                  </span>
                  <p className="text-xs text-white/50 mt-1">
                    {step.content.limit}
                  </p>
                </div>
              </div>
            )}

            {step.content.approaches && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white/70">
                  Two Formatting Approaches:
                </h4>
                {step.content.approaches.map((a) => (
                  <div key={a.name} className="glass-card-light p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white/70">
                        {a.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                        {a.type}
                      </span>
                    </div>
                    <p className="text-xs text-white/40">{a.desc}</p>
                  </div>
                ))}
                {step.content.output && (
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <span className="text-xs font-semibold text-emerald-400">
                      Output:
                    </span>
                    <p className="text-xs text-white/50 mt-1">
                      {step.content.output}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Visual */}
          <div className="flex flex-col gap-6">
            {step.image && (
              <div className="glass-card p-2 group">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl bg-white/95 group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            )}

            {!step.image && (
              <div className="glass-card p-8 flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 opacity-80`}
                  >
                    <StepIcon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white/70 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/40 max-w-sm mx-auto">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            )}

            {/* Mini pipeline progress */}
            <div className="glass-card-light p-4">
              <div className="flex items-center gap-1">
                {pipelineSteps.map((s, i) => {
                  const SIcon = s.icon;
                  return (
                    <div key={i} className="flex items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          i <= activeStep
                            ? `bg-gradient-to-br ${s.color}`
                            : "bg-white/5"
                        }`}
                      >
                        <SIcon
                          className={`w-4 h-4 ${
                            i <= activeStep ? "text-white" : "text-white/20"
                          }`}
                        />
                      </div>
                      {i < pipelineSteps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-1 rounded transition-all duration-300 ${
                            i < activeStep
                              ? "bg-gradient-to-r from-white/30 to-white/10"
                              : "bg-white/5"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
