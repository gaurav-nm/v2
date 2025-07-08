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
        <div className="mt-4 w-full">
          <div className="font-bold mb-2 text-center">Other Connect Me</div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://x.com/dev_gauravm" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-500 hover:text-blue-700 text-2xl flex items-center gap-2">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.54.697a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98c-.387.664-.61 1.437-.61 2.26 0 1.56.795 2.94 2.006 3.75a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.6 4.42-.377.104-.775.16-1.186.16-.29 0-.57-.028-.845-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/></svg>
              Twitter
            </a>
            <a href="https://www.instagram.com/gaurav.nm" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 text-2xl flex items-center gap-2">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              Instagram
            </a>
            <a href="https://youtube.com/@ggauravnm" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-red-600 hover:text-red-800 text-2xl flex items-center gap-2">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.11C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.576a2.994 2.994 0 0 0-2.11 2.11C0 8.073 0 12 0 12s0 3.927.502 5.814a2.994 2.994 0 0 0 2.11 2.11C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.576a2.994 2.994 0 0 0 2.11-2.11C24 15.927 24 12 24 12s0-3.927-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/></svg>
              YouTube
            </a>
            <a href="https://leetcode.com/u/gauravnm/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-yellow-500 hover:text-yellow-600 text-2xl flex items-center gap-2">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.205 17.29l-2.59 2.59c-1.17 1.17-3.07 1.17-4.24 0l-7.85-7.85c-1.17-1.17-1.17-3.07 0-4.24l2.59-2.59a.75.75 0 1 1 1.06 1.06l-2.59 2.59a1.56 1.56 0 0 0 0 2.12l7.85 7.85a1.56 1.56 0 0 0 2.12 0l2.59-2.59a.75.75 0 1 1 1.06 1.06zm-8.49-2.12a.75.75 0 0 1 0-1.06l5.66-5.66a.75.75 0 1 1 1.06 1.06l-5.66 5.66a.75.75 0 0 1-1.06 0z"/></svg>
              LeetCode
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
