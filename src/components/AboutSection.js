import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      <motion.blockquote
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-400 dark:border-zinc-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>I'm a B.Tech CSE student at IEC College of Engineering & Technology.<br/>
        Born and raised in Delhi, I travel 3+ hours daily to attend college.<br/>
        I’m passionate about tech, code, and building something that matters.<br/>
        Currently, I’m a Campus Ambassador and Contributor at GSSoC 2025.</p>
        <p className="mt-4 italic text-zinc-500 dark:text-zinc-400">“Sometimes a single Thank You is better than saying a thousand sorrys.” — Emilia</p>
      </motion.blockquote>
    </section>
  );
} 