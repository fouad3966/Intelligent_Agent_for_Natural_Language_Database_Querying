"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Monitor, ZoomIn, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const screenshots = [
  {
    src: "/images/image10.png",
    alt: "Hero view — Get information from the database without writing SQL",
    caption: "The agent's value proposition — Ask questions, get answers instantly",
  },
  {
    src: "/images/image13.png",
    alt: "Application Interface — Query example with results table",
    caption: "Live query interface showing natural language input and structured results",
  },
  {
    src: "/images/image12.png",
    alt: "User asking a question in French",
    caption: "Multilingual support — Querying the database in French",
  },
  {
    src: "/images/image14.png",
    alt: "Backend Architecture simplified view",
    caption: "Simplified architecture — Frontend to Backend to AI Service to Database",
  },
];

export default function DemoSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/[0.015] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
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
            className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            See It in Action
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-heading mb-6 text-white">
            Demo & Screenshots
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-lg text-white/50 max-w-3xl mx-auto">
            A look at the agent&apos;s interface and capabilities in real-world scenarios.
          </motion.p>
        </motion.div>

        {/* Screenshot grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {screenshots.map((img, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="glass-card p-2 group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-white/60" />
                    <span className="text-sm text-white/60">Click to zoom</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-white/50">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive demo simulation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 glow-blue"
        >
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-primary-400" />
            <h3 className="text-lg font-semibold text-white">
              How It Works — Live Flow
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl">💬</span>
              </motion.div>
              <h4 className="text-sm font-semibold text-white mb-2">
                1. Ask a Question
              </h4>
              <p className="text-xs text-white/40">
                Type in any language: Arabic, French, or English
              </p>
              <div className="mt-3 font-mono text-xs text-primary-400/60 bg-surface-900/60 rounded-lg p-2">
                &quot;أعطني أفضل 5 زبائن&quot;
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl">🧠</span>
              </motion.div>
              <h4 className="text-sm font-semibold text-white mb-2">
                2. AI Processes
              </h4>
              <p className="text-xs text-white/40">
                Classify → Retrieve Schema → Generate SQL → Validate → Execute
              </p>
              <div className="mt-3 font-mono text-xs text-emerald-400/60 bg-surface-900/60 rounded-lg p-2">
                SELECT name, SUM(amount)...
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-2xl">📊</span>
              </motion.div>
              <h4 className="text-sm font-semibold text-white mb-2">
                3. Get Results
              </h4>
              <p className="text-xs text-white/40">
                Tables, charts, or textual summaries — instantly
              </p>
              <div className="mt-3 text-xs text-amber-400/60 bg-surface-900/60 rounded-lg p-2">
                ✓ 5 rows returned in 0.3s
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050510]/95 backdrop-blur-xl flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <Image
            src={screenshots[lightbox].src}
            alt={screenshots[lightbox].alt}
            width={1400}
            height={900}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-sm text-white/50">
              {screenshots[lightbox].caption}
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
