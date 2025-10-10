"use client";

import { createContext, useState, useContext } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("en");

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    console.log(`Switched to ${lang}`);
  };

  const t = (key, replacements) => {
    let translation = translations[currentLang][key] || key;
    if (replacements) {
      for (const placeholder in replacements) {
        translation = translation.replace(`{${placeholder}}`, replacements[placeholder]);
      }
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
