# Design of an Intelligent Agent for Natural Language Database Querying

![Live Demo Available](https://img.shields.io/badge/Live_Demo-Available-emerald?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

> **Master's Thesis Defense — 2026**  
> By **Ilham Bouharaoua** & **Moustafa Loukarfi**

**🔗 [View Live Presentation / Demo](https://intelligent-agent-for-natural-langu.vercel.app/)**

---

## 📖 Overview

This repository contains the interactive web presentation for our Master's Thesis: **"Design of an Intelligent Agent for Natural Language Database Querying."**

Rather than relying on a traditional static PowerPoint, we built a fully responsive, animated, and interactive single-page application to showcase our thesis defense. It demonstrates the architecture, pipeline, and security mechanisms of the intelligent agent we developed.

Our intelligent agent empowers non-technical users to interact with complex databases effortlessly by converting natural language requests (in Arabic, French, or English) into secure, executable SQL queries.

## ✨ Core Agent Features

Our backend intelligent agent implements a sophisticated pipeline:

- **🌍 Multilingual NLU:** Understands and processes queries natively in Arabic, French, and English.
- **🧠 Hybrid Intent Classification:** Uses a fast rule-based engine combined with an LLM fallback for complex intents.
- **🔍 Smart Schema Retrieval:** Extracts only the highly relevant tables and columns, preventing LLM context-window overload.
- **⚡ AI SQL Generation:** Converts human intent into syntactically and semantically accurate PostgreSQL queries.
- **🛡️ Multi-Layer Security Engine:** 
  - Validates read-only prefixes and blocks dangerous keywords (DROP, DELETE, UPDATE).
  - Uses `EXPLAIN` to simulate queries before execution.
  - Enforces read-only database transactions with strict timeout limits.
- **🔄 Auto-Repair Loop:** Automatically captures execution errors and asks the LLM to repair the query (up to 2 retries).
- **📊 Rich Result Formatting:** Dynamically formats raw database results into human-readable text, structured tables, or visual charts.

## 💻 Presentation Tech Stack

The presentation website itself is built using modern web technologies to ensure a premium, Apple-like viewing experience:

- **Framework:** Next.js (App Router) & React
- **Styling:** Tailwind CSS with custom glassmorphism utilities
- **Animations:** Framer Motion for scroll-driven reveals and micro-interactions
- **Visuals:** HTML5 Canvas for interactive particle drift, custom radial mesh gradients, and fine dot-grids.
- **Icons:** Lucide React

## 🚀 Running Locally

If you'd like to run the presentation locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/fouad3966/Intelligent_Agent_for_Natural_Language_Database_Querying.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser. Use your Arrow Keys (Down/Right) to navigate between sections smoothly!

---
*Created as part of a Master's Thesis Defense. 2026.*
