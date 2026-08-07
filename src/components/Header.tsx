import { useLanguage } from '../context/useLanguage'
import { strings } from '../data/siteContent'

const nav = [
  { id: 'inicio', key: 'inicio' as const },
  { id: 'sobre-mi', key: 'sobre' as const },
  { id: 'proyectos', key: 'proyectos' as const },
  { id: 'contacto', key: 'contacto' as const },
]

export function Header() {
  const { locale, setLocale } = useLanguage()
  const t = strings[locale]

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-surface-0)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          className="group inline-flex min-w-0 items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold text-white hover:bg-white/5"
          aria-label={t.brandHome}
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 shadow-[0_0_0_6px_rgba(245,158,11,0.15)]"
            aria-hidden="true"
          />
          <span className="truncate">FH</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label={t.navAria}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-xl px-3 py-2 text-sm text-stone-200 hover:bg-white/5 hover:text-white"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1"
            role="group"
            aria-label={t.lang.group}
          >
            <button
              type="button"
              className={[
                'rounded-lg px-2.5 py-1 text-xs font-semibold',
                locale === 'es'
                  ? 'bg-white/10 text-white'
                  : 'text-stone-400 hover:text-white',
              ].join(' ')}
              aria-pressed={locale === 'es'}
              title={t.lang.esTitle}
              onClick={() => setLocale('es')}
            >
              {t.lang.es}
            </button>
            <button
              type="button"
              className={[
                'rounded-lg px-2.5 py-1 text-xs font-semibold',
                locale === 'en'
                  ? 'bg-white/10 text-white'
                  : 'text-stone-400 hover:text-white',
              ].join(' ')}
              aria-pressed={locale === 'en'}
              title={t.lang.enTitle}
              onClick={() => setLocale('en')}
            >
              {t.lang.en}
            </button>
          </div>

          <a
            href="#contacto"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex"
          >
            {t.headerContact}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl gap-2 border-t border-white/10 px-4 py-2 md:hidden">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex-1 rounded-xl bg-white/5 py-2 text-center text-xs font-semibold text-stone-100 hover:bg-white/10"
          >
            {t.nav[item.key]}
          </a>
        ))}
      </div>
    </header>
  )
}
