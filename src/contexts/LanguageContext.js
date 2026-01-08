"use client";
// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: require('../translations/en.json'),
  ja: require('../translations/ja.json'),
};

export const LanguageProvider = ({ children, initialLanguage = 'en' }) => {
  const [language, setLanguage] = useState(initialLanguage);
  // Initialize t function immediately with the resolved initial language to prevent flash
  const [t, setT] = useState(() => (key) => translations[initialLanguage][key] || key);

  useEffect(() => {
    setT(() => (key) => translations[language][key] || key);
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    // Save to Cookies for server-side persistence
    document.cookie = `language=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
