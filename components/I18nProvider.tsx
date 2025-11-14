'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language } from '@/lib/translations'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.es
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0] as Language
    const supportedLangs: Language[] = ['es', 'ca', 'en', 'fr']
    if (supportedLangs.includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
