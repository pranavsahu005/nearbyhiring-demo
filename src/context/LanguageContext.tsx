import React, { createContext, useContext, useState, useEffect } from "react";
import languageData from "../translations/language.json";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("nearbyhiring_lang");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("nearbyhiring_lang", language);
  }, [language]);

  const t = (key: string): string => {
    const langSet = languageData[language] as Record<string, string>;
    return langSet[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
