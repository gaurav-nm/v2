import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 shadow font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
          <div className="font-bold mb-2">Hard Skills</div>
          <ul className="list-disc list-inside">
            <li>Programming: C, Python, JavaScript</li>
            <li>Web: HTML, CSS, Tailwind, React (learning)</li>
            <li>Tools: GitHub, Ubuntu, Figma</li>
          </ul>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 shadow font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
          <div className="font-bold mb-2">Soft Skills</div>
          <ul className="list-disc list-inside">
            <li>Communication</li>
            <li>Time Management</li>
            <li>Self-Learning</li>
            <li>Consistency</li>
          </ul>
        </div>
      </motion.div>
      <a
        href="https://drive.google.com/file/d/1yPSqPDekwVNLNYzKLk8rY0hKDRG6I63L/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 font-mono rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
      >
        Download Resume
      </a>
    </section>
  );
} 