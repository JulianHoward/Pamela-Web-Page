// src/hooks/useLanguage.js
import { useContext } from 'react';
import { translations } from '../constants/translations';
import { LanguageContext } from '../contexts/LanguageContext';

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }

  const { language, changeLanguage } = context;
  const t = translations[language] || translations.ES;

  return {
    language,
    changeLanguage,
    t,
  };
}
