import React from "react";
import { motion } from "framer-motion";

export default function CollegeSection() {
  return (
    <section id="college" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        College
      </motion.h2>
      <motion.div
        className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>College life is both a grind and a gift.<br/>
        Classes, assignments, and labs take up the day.<br/>
        Despite the long hours, I keep pushing forward because I know where I’m headed.</p>
        <div className="mt-4">
          <div className="font-bold">IEC College of Engineering & Technology</div>
          <div>Branch: B.Tech in Computer Science Engineering</div>
        </div>
        <div className="mt-4">
          <div className="font-bold">Indian Institute Of Technology Madras</div>
          <div>Branch: Bachelor of Science (BS) Degree in Data Science and Applications  </div>
        </div>
      </motion.div>
    </section>
  );
} 