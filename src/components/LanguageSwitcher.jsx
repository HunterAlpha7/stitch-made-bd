"use client";
import { useState } from "react";
// import { useLanguage } from "../contexts/LanguageContext"; // Removed as per user request

export default function LanguageSwitcher() {
  // const { currentLang, switchLanguage } = useLanguage(); // Commented out to remove language functionality
  const [currentLang, setCurrentLang] = useState('en'); // Hardcode to 'en'

  return (
    <div className="flex gap-2">
      <button
        // onClick={() => switchLanguage("en")} // Disabled functionality
        onClick={() => setCurrentLang('en')} // For visual feedback
        className={`h-9 w-12 rounded border-2 transition-all ${
          currentLang === "en"
            ? "border-white bg-white/20"
            : "border-white/30 hover:border-white/50"
        }`}
        aria-label="Switch to English"
      >
        <span className="text-lg">🇬🇧</span>
      </button>
      <button
        // onClick={() => switchLanguage("ja")} // Disabled functionality
        onClick={() => setCurrentLang('ja')} // For visual feedback
        className={`h-9 w-12 rounded border-2 transition-all ${
          currentLang === "ja"
            ? "border-white bg-white/20"
            : "border-white/30 hover:border-white/50"
        }`}
        aria-label="Switch to Japanese"
      >
        <span className="text-lg">🇯🇵</span>
      </button>
    </div>
  );
}
