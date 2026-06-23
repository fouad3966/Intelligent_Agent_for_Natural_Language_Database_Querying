"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, GraduationCap, Calendar, User } from "lucide-react";



export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rich layered background */}


      {/* Grid overlay */}
      <div className="absolute inset-0 fine-grid opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 backdrop-blur-sm"
        >
          <GraduationCap className="w-4 h-4 text-primary-400" />
          <span className="text-sm text-white/60 font-medium">
            Master&apos;s Thesis Defense — 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-display mb-6"
        >
          Design of an{" "}
          <span className="gradient-text">Intelligent Agent</span>
          <br />
          for Natural Language{" "}
          <span className="gradient-text-emerald">Database Querying</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-body-lg text-white/40 max-w-2xl mx-auto mb-14"
        >
          An intelligent agent that converts natural language requests in Arabic,
          French, or English into secure, executable SQL queries — empowering
          non-technical users to interact with databases effortlessly.
        </motion.p>

        {/* Authors & Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary-400/70" />
            <span>
              <span className="text-white/60 font-medium">Ilham Bouharaoua</span>
              {" & "}
              <span className="text-white/60 font-medium">Moustafa Loukarfi</span>
            </span>
          </div>
          <div className="w-px h-4 bg-white/8 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-400/70" />
            <span>2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
