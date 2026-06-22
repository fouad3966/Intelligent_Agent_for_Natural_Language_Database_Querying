"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import {
  User,
  Monitor,
  Server,
  Brain,
  Database,
  ArrowDown,
  ArrowUp,
  ArrowRight,
  Shield,
  RotateCcw,
  FileText,
  Search,
  Code2,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const layers = [
  {
    id: "user",
    label: "1. User",
    sublabel: "Ask questions in natural language",
    icon: User,
    color: "from-primary-400 to-primary-500",
    borderColor: "border-primary-500/30",
    details:
      "The user is non-technical (manager, analyst, employee, student). They do not know SQL. They ask a question in plain language (Arabic, French, English).",
    example: '"Show me the top 5 customers by revenue."',
  },
  {
    id: "frontend",
    label: "2. Frontend Interface",
    sublabel: "React + TypeScript",
    icon: Monitor,
    color: "from-cyan-400 to-cyan-500",
    borderColor: "border-cyan-500/30",
    details:
      "Built with React and TypeScript. Includes a simple text input field for typing the question. Supports three languages: Arabic, French, and English. Sends the question to the backend via HTTP POST to /api/agent/query.",
  },
  {
    id: "backend",
    label: "3. Backend API",
    sublabel: "Go + Gin — Central Orchestrator",
    icon: Server,
    color: "from-emerald-400 to-emerald-500",
    borderColor: "border-emerald-500/30",
    details:
      "The backend is the brain and heart of the system. Built with Go and the Gin web framework. Acts as the central orchestrator that controls the entire request flow. Calls the Agent Core Modules in sequence.",
    modules: [
      { name: "Intent Classifier", icon: Brain },
      { name: "Schema Retriever", icon: Search },
      { name: "SQL Generator", icon: Code2 },
      { name: "Safety Layer", icon: Shield },
      { name: "Repair Loop", icon: RotateCcw },
      { name: "Formatter", icon: FileText },
    ],
  },
  {
    id: "ai",
    label: "5. AI Service",
    sublabel: "Python FastAPI + Ollama LLM",
    icon: Brain,
    color: "from-accent-400 to-accent-500",
    borderColor: "border-accent-500/30",
    details:
      "Communicates with the AI Service (Python + LLM) when needed. Provides AI-assisted tasks: classification, SQL generation, repair, formatting. Uses Ollama for LLM inference.",
  },
  {
    id: "database",
    label: "6. PostgreSQL Database",
    sublabel: "Read-Only Execution — Production DB",
    icon: Database,
    color: "from-teal-400 to-teal-500",
    borderColor: "border-teal-500/30",
    details:
      "Executes validated read-only SQL on PostgreSQL. Read-Only Execution User. Data Source (Production DB). READ-ONLY ACCESS ENFORCED.",
  },
];

export default function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [showDiagram, setShowDiagram] = useState(false);

  return (
    <section id="architecture" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/[0.02] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-3xl" />

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
            System Overview
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            General System Architecture
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-lg text-white/50 max-w-3xl mx-auto">
            A layered architecture where each component has a clear responsibility, 
            communicating through well-defined APIs.
          </motion.p>
        </motion.div>

        {/* Architecture diagram image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div
            className="glass-card p-2 glow-blue cursor-pointer group"
            onClick={() => setShowDiagram(!showDiagram)}
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/image11.png"
                alt="General System Architecture Diagram"
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs text-white/40 font-medium">
                  Full System Architecture — Click to explore layers below
                </span>
                <Cpu className="w-4 h-4 text-primary-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive layers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isActive = activeLayer === layer.id;

            return (
              <motion.div key={layer.id} variants={fadeInUp}>
                {/* Connection arrow */}
                {index > 0 && (
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center">
                      {index === 3 ? (
                        <div className="flex items-center gap-4 text-white/20">
                          <ArrowUp className="w-4 h-4" />
                          <span className="text-xs font-mono">AI Interaction</span>
                          <ArrowDown className="w-4 h-4" />
                        </div>
                      ) : (
                        <ArrowDown className="w-4 h-4 text-white/20" />
                      )}
                    </div>
                  </div>
                )}

                {/* Layer card */}
                <div
                  className={`glass-card overflow-hidden cursor-pointer transition-all duration-500 ${
                    isActive ? "glow-blue" : ""
                  } ${layer.borderColor}`}
                  onClick={() =>
                    setActiveLayer(isActive ? null : layer.id)
                  }
                >
                  <div className="p-6 flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white">
                        {layer.label}
                      </h3>
                      <p className="text-sm text-white/40">{layer.sublabel}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowDown className="w-5 h-5 text-white/30" />
                    </motion.div>
                  </div>

                  {/* Expandable details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {layer.details}
                      </p>

                      {layer.example && (
                        <div className="font-mono text-sm text-primary-400 bg-surface-950/60 rounded-lg p-3 border border-white/5">
                          {layer.example}
                        </div>
                      )}

                      {layer.modules && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-4">
                          {layer.modules.map((mod) => {
                            const ModIcon = mod.icon;
                            return (
                              <div
                                key={mod.name}
                                className="glass-card-light p-3 text-center group/mod"
                              >
                                <ModIcon className="w-5 h-5 text-emerald-400 mx-auto mb-2 group-hover/mod:scale-110 transition-transform" />
                                <span className="text-xs text-white/50">
                                  {mod.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Architecture flow summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="glass-card-light p-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              { text: "Question", color: "text-primary-400" },
              { text: "→" },
              { text: "Frontend", color: "text-cyan-400" },
              { text: "→" },
              { text: "Backend Orchestrator", color: "text-emerald-400" },
              { text: "→" },
              { text: "AI Service", color: "text-accent-400" },
              { text: "→" },
              { text: "PostgreSQL", color: "text-teal-400" },
              { text: "→" },
              { text: "Formatted Answer", color: "text-amber-400" },
            ].map((item, i) => (
              <span
                key={i}
                className={`${item.color || "text-white/20"} ${
                  item.color ? "font-medium" : ""
                }`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
