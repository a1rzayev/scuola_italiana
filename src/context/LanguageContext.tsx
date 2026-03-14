"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/i18n/translations/en.json";
import az from "@/i18n/translations/az.json";
import it from "@/i18n/translations/it.json";

export type Language = "EN" | "AZ" | "IT";
export type Translations = typeof en;

const translations: Record<Language, Translations> = { EN: en, AZ: az, IT: it };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
