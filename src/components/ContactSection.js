import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mb-4 text-center">
          <div className="mb-2">
            <b>Email:</b> <a href="mailto:connectgauravpal@gmail.com" className="underline hover:text-blue-500">connectgauravpal@gmail.com</a>
          </div>
          <div className="mb-2">
            <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/gaurav-nm/" className="underline hover:text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/gaurav-nm</a>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:connectgauravpal@gmail.com"
            className="px-5 py-2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-mono"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-nm/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors font-mono"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
