import React from "react";
import { motion } from "framer-motion";

export default function CodingSection() {
  return (
    <section id="coding" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Coding
      </motion.h2>
      <motion.div
        className="bg-zinc-900/90 dark:bg-zinc-800/90 rounded-lg p-6 shadow font-mono text-green-400 text-sm md:text-base mb-4 border border-zinc-800 overflow-x-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <pre className="whitespace-pre-wrap"><code>{`
const Gaurav = {
  code: ["C", "Python", "JS", "HTML", "CSS"],
  tools: ["Git", "Linux", "VSCode"],
  currentFocus: "React + Tailwind + GitHub",
  github: "https://github.com/gaurav-nm"
};
`}</code></pre>
      </motion.div>
      <ul className="font-mono text-zinc-700 dark:text-zinc-300 mb-2">
        <li><b>GitHub:</b> <a href="https://github.com/gaurav-nm" className="underline hover:text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/gaurav-nm</a></li>
        <li><b>Languages:</b> C, C++, Python, HTML, CSS, JS</li>
        <li><b>Tools:</b> Git, Linux, Ubuntu, Figma, VS Code</li>
        <li><b>Current Projects:</b> “Personal Portfolio”, “WiFi Testing Toolkit”, “College Automation Scripts”</li>
      </ul>
    </section>
  );
} 