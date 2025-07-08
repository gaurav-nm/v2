import React from "react";
import { motion } from "framer-motion";

export default function FunSection() {
  return (
    <section id="fun" className="mb-16">
      <motion.h2
        className="font-mono text-xl md:text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Fun
      </motion.h2>
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mb-2 font-bold">Hobbies:</div>
        <ul className="list-disc list-inside mb-4">
          <li>Gaming</li>
          <li>Tech YouTube</li>
          <li>Memes</li>
          <li>Music</li>
        </ul>
        <div className="mb-2">My playlist flips between Arijit Singh and Eminem.<br/>
        I sometimes talk tech with my friend (she zones out in 2 mins).<br/>
        Memes and debugging go hand-in-hand.</div>
        <div className="mt-4 flex justify-center">
          <img
            src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
            alt="Fun GIF"
            className="w-32 h-32 rounded shadow border border-zinc-200 dark:border-zinc-700 object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
} 