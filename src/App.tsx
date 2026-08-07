import { LanguageProvider } from './context/LanguageProvider'
import { useLanguage } from './context/useLanguage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProjectCard } from './components/ProjectCard'
import { ProfilePhoto } from './components/ProfilePhoto'
import { content, strings, WHATSAPP_DISPLAY, WHATSAPP_HREF } from './data/siteContent'

function WhatsappGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function AppInner() {
  const { locale } = useLanguage()
  const t = strings[locale]
  const c = content[locale]
  const primaryEmail = c.emails[0]!

  return (
    <div className="relative min-h-svh">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/22 via-rose-500/14 to-orange-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[520px] translate-x-1/3 rounded-full bg-rose-600/10 blur-3xl" />
      </div>

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-stone-900"
      >
        {t.skipToContent}
      </a>

      <Header />

      <main id="contenido" className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <section id="inicio" className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
              {t.heroEyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {c.name}
            </h1>
            <p className="mt-3 text-base font-medium text-stone-200">{c.role}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-300">
              {c.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-rose-600 px-5 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/25 hover:brightness-110"
              >
                {t.heroProjects}
              </a>
              <a
                href={`mailto:${primaryEmail}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.heroEmail}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-600/20 px-5 py-3 text-sm font-semibold text-emerald-50 hover:bg-emerald-600/35"
              >
                <WhatsappGlyph className="h-5 w-5 shrink-0" />
                {t.heroWhatsapp}
              </a>
              <a
                href="/cv.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.heroCv}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-stone-500">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {c.location}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {c.skills.slice(0, 4).join(' · ')}
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-500/25 to-rose-600/18 blur-2xl" />
              <div aria-label={t.profilePhotoAria}>
                <ProfilePhoto alt={c.name} />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mt-20 scroll-mt-28">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
                {t.sectionAboutEyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {t.sectionAboutTitle}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-stone-200 shadow-xl shadow-black/20">
              {c.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <aside className="rounded-3xl border border-white/10 bg-[var(--color-surface-1)] p-6 shadow-xl shadow-black/20">
              <h3 className="text-lg font-semibold text-white">{t.sectionSkillsTitle}</h3>
              <div className="mt-4 flex flex-wrap gap-2" aria-label={t.sectionSkillsAria}>
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-100"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6" aria-label={t.sectionSocialsAria}>
                <h3 className="text-sm font-semibold text-white">{t.panelLinksTitle}</h3>
                <div className="mt-3 flex flex-col gap-2">
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
            </aside>
          </div>
        </section>

        <section id="proyectos" className="mt-20 scroll-mt-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
              {t.sectionProjectsEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              {t.sectionProjectsTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-8">
            {c.projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="contacto" className="mt-20 scroll-mt-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/95">
              {t.sectionContactEyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              {t.sectionContactTitle}
            </h2>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-xl shadow-black/20 sm:p-8">
            <p className="max-w-3xl text-sm leading-relaxed text-stone-200">{t.contactIntro}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${primaryEmail}`}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-rose-600 px-5 py-3 text-sm font-semibold text-stone-950 hover:brightness-110"
              >
                {t.contactEmail}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp ${WHATSAPP_DISPLAY}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-600/20 px-5 py-3 text-sm font-semibold text-emerald-50 hover:bg-emerald-600/35"
              >
                <WhatsappGlyph className="h-5 w-5 shrink-0" />
                {t.contactWhatsapp}
              </a>
              <a
                href="/cv.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {t.contactCv}
              </a>
            </div>
            <p className="mt-4 text-xs text-stone-500">{t.contactNote}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}
