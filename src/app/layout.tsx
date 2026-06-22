import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design of an Intelligent Agent for Natural Language Database Querying",
  description:
    "Master's Thesis Defense — An intelligent agent that converts natural language requests (Arabic, French, or English) into secure, executable SQL queries. By Ilham Bouharaoua & Moustafa Loukarfi.",
  keywords: [
    "Natural Language Processing",
    "SQL Generation",
    "Intelligent Agent",
    "Database Querying",
    "LLM",
    "Master Thesis",
  ],
  authors: [
    { name: "Ilham Bouharaoua" },
    { name: "Moustafa Loukarfi" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
