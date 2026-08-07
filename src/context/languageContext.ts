import { createContext } from 'react'
import type { Locale } from '../data/siteContent'

export const LANGUAGE_STORAGE_KEY = 'fh-portfolio-locale'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  try {
    const v = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return v === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}
