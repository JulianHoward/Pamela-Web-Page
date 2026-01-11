// src/contexts/LanguageContext.jsx
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Inicializar con localStorage si existe
    const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    return (saved && ['ES', 'FR'].includes(saved)) ? saved : 'ES';
  });

  const changeLanguage = useCallback((lang) => {
    if (['ES', 'FR'].includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
    }),
    [language, changeLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
