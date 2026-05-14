import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  LanguageContext,
  LANGUAGE_STORAGE_KEY,
  readInitialLocale,
} from './languageContext'
import type { Locale } from '../data/siteContent'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readInitialLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'es'
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
