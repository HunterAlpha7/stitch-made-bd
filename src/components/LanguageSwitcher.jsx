"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage("en")}
        className={`h-9 w-12 rounded transition-all ${language === "en"
          ? "bg-deep-navy/10"
          : "hover:bg-deep-navy/5"
          }`}
        aria-label="Switch to English"
      >
        <span className="text-lg">🇬🇧</span>
      </button>
      <button
        onClick={() => switchLanguage("ja")}
        className={`h-9 w-12 rounded transition-all ${language === "ja"
          ? "bg-deep-navy/10"
          : "hover:bg-deep-navy/5"
          }`}
        aria-label="Switch to Japanese"
      >
        <span className="text-lg">🇯🇵</span>
      </button>
    </div>
  );
}
