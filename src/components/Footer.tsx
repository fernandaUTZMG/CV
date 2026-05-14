import { useLanguage } from '../context/useLanguage'
import { content, strings } from '../data/siteContent'

export function Footer() {
  const { locale } = useLanguage()
  const t = strings[locale]
  const c = content[locale]

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6">
        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} {c.name}. {t.footerMade}
        </p>
        <div className="flex flex-wrap gap-3" aria-label={t.footerSocialsAria}>
          {c.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
