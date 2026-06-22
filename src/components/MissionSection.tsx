"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import {
  MessageSquare,
  Brain,
  Database,
  Send,
  BarChart3,
  Shield,
  Table,
  LineChart,
} from "lucide-react";

const missionPoints = [
  {
    icon: MessageSquare,
    text: "Receive user questions expressed in natural language (Arabic, French, or English).",
    color: "text-primary-400",
  },
  {
    icon: Brain,
    text: "Understand and analyze the request in order to accurately identify the user's intent.",
    color: "text-accent-400",
  },
  {
    icon: Database,
    text: "Automatically translate this understanding into a valid, secure, and executable SQL query.",
    color: "text-emerald-400",
  },
  {
    icon: Send,
    text: "Execute the query and present the results in a clear and user-friendly format, such as tables, charts, or textual summaries.",
    color: "text-amber-400",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/[0.04] to-transparent" />
      <div className="absolute inset-0 fine-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Core Purpose
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            The Mission of This Agent
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mission points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {missionPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInLeft}
                  className="flex items-start gap-4 glass-card-light p-5 group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Visual diagram */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 glow-purple">
              {/* Flow visualization */}
              <div className="space-y-4">
                {/* Input */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center px-4">
                    <span className="text-white/40 text-sm font-mono">
                      &quot;Show me the top 5 customers by revenue&quot;
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* AI Processing */}
                <div className="glass-card-light p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-accent-400" />
                    <span className="text-sm font-medium text-white/70">
                      AI Processing
                    </span>
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-auto flex items-center gap-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs text-emerald-400">Active</span>
                    </motion.div>
                  </div>
                  <div className="font-mono text-xs text-white/30 bg-surface-950/60 rounded-lg p-3">
                    <span className="text-primary-400">SELECT</span>{" "}
                    customer_name, <span className="text-emerald-400">SUM</span>
                    (revenue)
                    <br />
                    <span className="text-primary-400">FROM</span> customers
                    <br />
                    <span className="text-primary-400">GROUP BY</span>{" "}
                    customer_name
                    <br />
                    <span className="text-primary-400">ORDER BY</span>{" "}
                    <span className="text-emerald-400">SUM</span>(revenue){" "}
                    <span className="text-primary-400">DESC</span>
                    <br />
                    <span className="text-primary-400">LIMIT</span>{" "}
                    <span className="text-amber-400">5</span>;
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Output */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="glass-card-light p-3 text-center">
                    <Table className="w-5 h-5 text-primary-400 mx-auto mb-1" />
                    <span className="text-xs text-white/40">Table</span>
                  </div>
                  <div className="glass-card-light p-3 text-center">
                    <BarChart3 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-xs text-white/40">Chart</span>
                  </div>
                  <div className="glass-card-light p-3 text-center">
                    <LineChart className="w-5 h-5 text-accent-400 mx-auto mb-1" />
                    <span className="text-xs text-white/40">Summary</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2 glow-emerald"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">
                Read-Only Secured
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card-light p-6 max-w-3xl mx-auto">
            <p className="text-white/50 leading-relaxed">
              With this approach, any user can interact with a database using
              natural language and obtain instant answers without writing a
              single line of SQL code, while ensuring{" "}
              <span className="text-emerald-400 font-medium">data integrity</span>,{" "}
              <span className="text-primary-400 font-medium">security</span>, and{" "}
              <span className="text-accent-400 font-medium">
                protection against harmful or unauthorized operations
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
