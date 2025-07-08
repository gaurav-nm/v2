import React from "react";

export default function Footer({ darkMode, setDarkMode }) {
  return (
    <footer className="w-full py-6 flex flex-col items-center gap-2 text-center border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80">
      <span className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
        Made with <span className="text-red-500">❤️</span> by Gaurav Pal
      </span>
      <button
        aria-label="Toggle dark mode"
        onClick={() => setDarkMode((d) => !d)}
        className="mt-1 p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      >
        {darkMode ? (
          <span role="img" aria-label="Light mode">🌞</span>
        ) : (
          <span role="img" aria-label="Dark mode">🌙</span>
        )}
      </button>
    </footer>
  );
} 