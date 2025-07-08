import React from "react";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="home" className="mb-16 flex flex-col items-center justify-center min-h-[60vh]">
      <motion.img
        src={process.env.PUBLIC_URL + "/188447565652573851.jpeg"}
        alt="Batman Avatar"
        loading="lazy"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-zinc-200 dark:border-zinc-700 bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="font-mono text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hi, I’m Gaurav <span role="img" aria-label="wave">👋</span>
      </motion.h1>
      <motion.p
        className="font-mono text-lg text-zinc-600 dark:text-zinc-300 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        Learner | CSE Student | Passionate Coder
      </motion.p>
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