import React from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "coding", label: "Coding" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];



export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur shadow-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between px-2 sm:px-4 py-2">
        <span className="font-mono text-base sm:text-lg font-bold tracking-tight">Gaurav Pal</span>
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center mt-2 sm:mt-0">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
            >
              {s.label}
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((d) => !d)}
            className="ml-2 p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 