"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

type Language = "pt" | "en" | "jp";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt"); // Padrão inicial no servidor
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Carrega o idioma do localStorage apenas no cliente
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      console.log("Idioma carregado do localStorage:", savedLanguage || "pt (padrão)");
      if (savedLanguage) {
        setLanguage(savedLanguage as Language);
      }
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      localStorage.setItem("language", language);
      console.log("Idioma salvo no localStorage:", language);
    }
  }, [language, isClient]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro do LanguageProvider");
  return context;
};