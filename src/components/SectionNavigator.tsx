"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Introduction" },
  { id: "problem", label: "Problem" },
  { id: "mission", label: "Mission" },
  { id: "objectives", label: "Objectives" },
  { id: "architecture", label: "Architecture" },
  { id: "pipeline", label: "Pipeline" },
  { id: "security", label: "Security" },
  { id: "demo", label: "Demo" },
  { id: "conclusion", label: "Conclusion" },
  { id: "thankyou", label: "Thank You" },
];

export default function SectionNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Track which section is active based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide hint after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  const navigateTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      const el = document.getElementById(sections[clamped].id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveIndex(clamped);
      }
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't hijack if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        navigateTo(activeIndex + 1);
        setShowHint(false);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigateTo(activeIndex - 1);
        setShowHint(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, navigateTo]);

  return (
    <>
      {/* Side progress dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => navigateTo(i)}
            className="group relative flex items-center"
            aria-label={`Go to ${section.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-6 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs text-white/70 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {section.label}
            </span>

            {/* Dot */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-gradient-to-br from-primary-400 to-accent-400 shadow-[0_0_10px_rgba(96,165,250,0.4)] scale-150"
                  : "bg-white/15 hover:bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom navigation bar (keyboard hint + section label) */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 2 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/8"
          >
            <div className="flex items-center gap-1.5">
              <span className="kbd">←</span>
              <span className="kbd">→</span>
            </div>
            <span className="text-xs text-white/35 font-medium">
              Use arrow keys to navigate sections
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Current section indicator (appears on key press) */}
      <AnimatePresence>
        {!showHint && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]"
          >
            <span className="text-xs font-mono text-white/25">
              {String(activeIndex + 1).padStart(2, "0")}/{String(sections.length).padStart(2, "0")}
            </span>
            <div className="w-px h-3 bg-white/10" />
            <span className="text-xs text-white/40 font-medium">
              {sections[activeIndex].label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
