import type { Project } from '../data/siteContent'
import { Carousel } from './Carousel'
import { useLanguage } from '../context/useLanguage'
import { strings } from '../data/siteContent'

export function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage()
  const t = strings[locale]
  const hasGallery = !!project.gallery?.length

  return (
    <article
      className={[
        'rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-xl shadow-black/20',
        hasGallery ? 'lg:p-8' : '',
      ].join(' ')}
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            {project.confidentiality === 'private' ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-stone-200">
                {t.badgeConfidential}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-stone-400">
            <span className="text-stone-200">{project.org}</span>
            <span className="mx-2 text-stone-600">•</span>
            <span>{project.period}</span>
          </p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-stone-200">{project.summary}</p>

      {project.highlights?.length ? (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-200">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/95" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {project.stack?.length ? (
        <div className="mt-5 flex flex-wrap gap-2" aria-label={t.techAria}>
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-100"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}

      {hasGallery && project.gallery ? (
        <Carousel
          title={project.title}
          slides={project.gallery}
          closingNote={project.galleryClosing}
          labels={{
            region: t.carouselRegion,
            prev: t.carouselPrev,
            next: t.carouselNext,
            dots: t.carouselDots,
            goTo: t.carouselGoTo,
            slideSr: t.carouselSlide,
            openLightbox: t.openLightbox,
            closeLightbox: t.closeLightbox,
            lightboxDialog: t.lightboxDialog,
          }}
        />
      ) : null}
    </article>
  )
}
