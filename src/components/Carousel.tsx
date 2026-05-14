import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { GallerySlide } from '../data/siteContent'

type LightboxProps = {
  open: boolean
  onClose: () => void
  slide: GallerySlide | null
  labels: { close: string; dialog: string }
}

export function Lightbox({ open, onClose, slide, labels }: LightboxProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !slide) return null

  return createPortal(
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={labels.close}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={labels.dialog}
        className="pointer-events-none absolute inset-0 grid place-items-center p-4"
      >
        <div className="pointer-events-auto relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-surface-1)] shadow-2xl shadow-black/40">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-white hover:bg-white/10"
            aria-label={labels.close}
          >
            ✕
          </button>
          <img
            src={slide.src}
            alt=""
            className="max-h-[78vh] w-full object-contain bg-black/30"
            decoding="async"
          />
          {slide.caption ? (
            <p className="border-t border-white/10 p-4 text-sm leading-relaxed text-stone-200">
              {slide.caption}
            </p>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}

type CarouselProps = {
  title: string
  slides: GallerySlide[]
  closingNote?: string
  labels: {
    region: string
    prev: string
    next: string
    dots: string
    goTo: (n: number) => string
    slideSr: (current: number, total: number) => string
    openLightbox: string
    closeLightbox: string
    lightboxDialog: string
  }
}

export function Carousel({ title, slides, closingNote, labels }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const total = slides.length
  const safeIndex = ((index % total) + total) % total
  const current = slides[safeIndex]!

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setIndex((i) => i - 1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setIndex((i) => i + 1)
    }
  }

  if (!total) return null

  return (
    <div
      className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
      role="region"
      aria-label={`${labels.region}: ${title}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
        <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <button
            type="button"
            className="group relative block w-full"
            onClick={() => setLightboxOpen(true)}
            aria-label={labels.openLightbox}
          >
            <img
              src={current.src}
              alt=""
              className="max-h-[420px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              loading={safeIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white/90 opacity-0 transition-opacity group-hover:opacity-100">
              {labels.openLightbox}
            </span>
          </button>
          <figcaption className="border-t border-white/10 p-4 text-sm leading-relaxed text-stone-200">
            <span className="sr-only">{labels.slideSr(safeIndex + 1, total)}</span>
            {current.caption}
          </figcaption>
        </figure>

        <div className="flex items-center justify-between gap-2 lg:flex-col lg:justify-start">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label={labels.prev}
            onClick={() => setIndex((i) => i - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label={labels.next}
            onClick={() => setIndex((i) => i + 1)}
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="mt-4 flex flex-wrap items-center justify-between gap-3"
        role="tablist"
        aria-label={labels.dots}
      >
        <div className="flex flex-wrap gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={labels.goTo(i + 1)}
              className={[
                'h-2.5 w-2.5 rounded-full border border-white/10',
                i === safeIndex ? 'bg-amber-400' : 'bg-white/15 hover:bg-white/25',
              ].join(' ')}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <p className="text-sm text-stone-400" aria-live="polite">
          {safeIndex + 1} / {total}
        </p>
      </div>

      {closingNote ? (
        <p className="mt-4 text-xs leading-relaxed text-stone-500">{closingNote}</p>
      ) : null}

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        slide={current}
        labels={{ close: labels.closeLightbox, dialog: labels.lightboxDialog }}
      />
    </div>
  )
}
