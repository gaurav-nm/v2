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
        👨‍💻 About Me
      </motion.h2>
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-400 dark:border-zinc-600 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p>I'm a B.Tech student majoring in Computer Science Engineering at IEC College of Engineering & Technology.<br/>
        I’m passionate about technology, coding, and building meaningful projects that solve real-world problems.<br/><br/>
        Currently, I'm working as a <b>Campus Ambassador and Contributor at GSSoC 2025</b>, where I’m actively involved in open-source development and community collaboration.</p>
        <p className="mt-4 italic text-zinc-500 dark:text-zinc-400">“Sometimes a single thank you is better than saying a thousand sorrys.” – Emilia</p>
      </motion.div>

      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        🎓 College Life
      </motion.h2>
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-400 dark:border-zinc-600 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p>College life is a balance of challenges and constant learning.<br/>
        From lectures and labs to assignments and projects — every day pushes me to grow as a student and as a developer.</p>
        <div className="mt-4">
          <b>Institute</b>: IEC College of Engineering & Technology<br/>
          <b>Program</b>: B.Tech – Computer Science Engineering
        </div>
      </motion.div>

      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        🎮 Fun & Free Time
      </motion.h2>
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border-l-4 border-zinc-400 dark:border-zinc-600"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <p>Outside of academics, I like to recharge with:</p>
        <ul className="list-disc pl-6 mb-2">
          <li>🎮 <b>Gaming</b></li>
          <li>📺 <b>Tech YouTube videos</b></li>
          <li>🎧 <b>Music</b> — my playlist flips between Arijit Singh and Eminem</li>
          <li>🤖 <b>Memes & Debugging</b> — weird combo, but it works</li>
        </ul>
        <p>And sometimes, I try talking tech with a friend — though she usually zones out after a couple of minutes. 😄</p>
      </motion.div>
    </section>
  );
}