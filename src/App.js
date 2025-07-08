import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import CollegeSection from "./components/CollegeSection";
import CodingSection from "./components/CodingSection";
import SkillsSection from "./components/SkillsSection";
import FunSection from "./components/FunSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-[#181a1b] transition-colors duration-300 font-sans`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-8">
        <HomeSection />
        <AboutSection />
        <CollegeSection />
        <CodingSection />
        <SkillsSection />
        <FunSection />
        <ContactSection />
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
