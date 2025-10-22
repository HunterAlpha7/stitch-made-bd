"use client";
// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: require('../translations/en.json'),
  bn: require('../translations/bn.json'),
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language
  const [t, setT] = useState(() => (key) => key); // Default t function

  useEffect(() => {
    setT(() => (key) => translations[language][key] || key);
  }, [language]);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
