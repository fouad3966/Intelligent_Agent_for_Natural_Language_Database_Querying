"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Eye,
  Ban,
  CheckCircle2,
  XCircle,
  AlertOctagon,
  Timer,
  Rows3,
  FileWarning,
} from "lucide-react";

const securityLayers = [
  {
    icon: Ban,
    title: "Read-Only SQL Validation",
    description: "Blocks dangerous keywords: DELETE, DROP, UPDATE, INSERT, ALTER, TRUNCATE",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    checks: ["Prefix validation", "Keyword blacklist", "Comment stripping"],
  },
  {
    icon: Eye,
    title: "EXPLAIN Validation",
    description: "Runs EXPLAIN on the query to verify syntax and schema validity before execution",
    color: "text-primary-400",
    bgColor: "bg-primary-500/10",
    borderColor: "border-primary-500/20",
    checks: ["Syntax check", "Schema validation", "Query plan analysis"],
  },
  {
    icon: Lock,
    title: "Safe Execution Transaction",
    description: "Executes within a read-only transaction with timeout and row limits",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    checks: ["Read-only transaction", "Timeout enforcement", "Row limit cap"],
  },
];

const blockedPatterns = [
  "DELETE FROM",
  "DROP TABLE",
  "UPDATE ... SET",
  "INSERT INTO",
  "ALTER TABLE",
  "TRUNCATE",
  "SQL Injection",
  "Prompt Injection",
  "Secret Extraction",
];

export default function SecuritySection() {
  return (
    <section id="security" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/[0.015] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-rose-500/3 rounded-full blur-3xl" />

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
            className="text-rose-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Data Protection
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            Security Architecture
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-lg text-white/50 max-w-3xl mx-auto">
            Multiple layers of defense ensure that only safe, read-only queries 
            reach the database. No data can ever be modified, deleted, or corrupted.
          </motion.p>
        </motion.div>

        {/* Security layers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {securityLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                variants={fadeInUp}
                className={`glass-card p-8 border ${layer.borderColor} group hover:scale-[1.02] transition-all duration-500`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${layer.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${layer.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {layer.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {layer.description}
                </p>
                <div className="space-y-2">
                  {layer.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 ${layer.color} flex-shrink-0`}
                      />
                      <span className="text-xs text-white/40">{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security flow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            Validation Flow
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Generated SQL */}
            <div className="glass-card-light p-4 flex-1 w-full">
              <div className="flex items-center gap-2 mb-2">
                <FileWarning className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-white/60">
                  Generated SQL
                </span>
              </div>
              <div className="font-mono text-xs text-white/30 bg-surface-900/60 rounded p-2">
                SELECT * FROM users...
              </div>
            </div>

            {/* Arrow */}
            <div className="text-white/20 text-lg hidden md:block">→</div>
            <div className="text-white/20 text-lg md:hidden">↓</div>

            {/* Safety Layer */}
            <div className="glass-card-light p-4 flex-1 w-full border border-rose-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-white/60">
                  Safety Layer
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[Timer, Eye, Lock].map((Ic, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-white/5 flex items-center justify-center"
                    >
                      <Ic className="w-3.5 h-3.5 text-white/40" />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-white/30">3 checks</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-white/20 text-lg hidden md:block">→</div>
            <div className="text-white/20 text-lg md:hidden">↓</div>

            {/* Result */}
            <div className="flex flex-col gap-3 flex-1 w-full">
              <div className="glass-card-light p-3 border border-emerald-500/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400">Pass → Execute on PostgreSQL</span>
              </div>
              <div className="glass-card-light p-3 border border-rose-500/20 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span className="text-sm text-rose-400">Fail → Repair Loop (max 2)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blocked patterns */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card-light p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
            <h4 className="text-sm font-semibold text-white/70">
              Blocked Patterns & Attacks
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {blockedPatterns.map((pattern) => (
              <span
                key={pattern}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/5 border border-rose-500/10 text-xs text-rose-400/70 font-mono"
              >
                <XCircle className="w-3 h-3" />
                {pattern}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
