"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`h-9 w-12 rounded border-2 transition-all ${
          language === "en"
            ? "border-white bg-white/20"
            : "border-white/30 hover:border-white/50"
        }`}
        aria-label="Switch to English"
      >
        <span className="text-lg">🇬🇧</span>
      </button>
      <button
        onClick={() => switchLanguage("ja")}
        className={`h-9 w-12 rounded border-2 transition-all ${
          language === "ja"
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
