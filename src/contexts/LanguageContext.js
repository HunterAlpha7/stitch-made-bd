"use client";
// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: require('../translations/en.json'),
  ja: require('../translations/ja.json'),
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });
  const [t, setT] = useState(() => (key) => key); // Default t function

  useEffect(() => {
    setT(() => (key) => translations[language][key] || key);
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
