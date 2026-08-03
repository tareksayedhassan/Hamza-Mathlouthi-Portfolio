import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { locales } from "./locales";

const DEFAULT_LOCALE = "en";
const STORAGE_KEY = "portfolio-locale";
const I18nContext = createContext(null);

const getValue = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);

export const I18nProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (savedLocale && locales[savedLocale]) setLocaleState(savedLocale);
  }, []);

  useEffect(() => {
    const direction = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    direction: locale === "ar" ? "rtl" : "ltr",
    setLocale: (nextLocale) => {
      if (!locales[nextLocale]) return;
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
      setLocaleState(nextLocale);
    },
    t: (path) => getValue(locales[locale], path) ?? path,
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};
