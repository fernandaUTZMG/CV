import { useCallback, useState } from 'react'

const PROFILE_SOURCES = [
  '/foto-perfil.jpg',
  '/foto-perfil.jpeg',
  '/foto-perfil.png',
  '/foto-perfil.webp',
] as const

function InitialsAvatar() {
  return (
    <div
      className="relative grid h-44 w-44 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/30 via-[var(--color-surface-2)] to-rose-600/25 shadow-2xl shadow-amber-900/20 sm:h-48 sm:w-48"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.3),transparent_55%)]" />
      <span className="relative text-4xl font-bold tracking-tight text-white">FH</span>
    </div>
  )
}

type ProfilePhotoProps = {
  alt: string
}

type PhotoState = { mode: 'photo'; index: number } | { mode: 'initials' }

/**
 * Usa `public/foto-perfil.jpg` (o .jpeg / .png / .webp). Si no existe ninguno, muestra iniciales.
 */
export function ProfilePhoto({ alt }: ProfilePhotoProps) {
  const [state, setState] = useState<PhotoState>({ mode: 'photo', index: 0 })

  const onError = useCallback(() => {
    setState((s) => {
      if (s.mode !== 'photo') return s
      const next = s.index + 1
      if (next >= PROFILE_SOURCES.length) return { mode: 'initials' }
      return { mode: 'photo', index: next }
    })
  }, [])

  if (state.mode === 'initials') {
    return <InitialsAvatar />
  }

  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl shadow-black/30 sm:h-48 sm:w-48">
      <img
        key={state.index}
        src={PROFILE_SOURCES[state.index]}
        alt={alt}
        width={192}
        height={192}
        decoding="async"
        className="h-full w-full object-cover object-top"
        onError={onError}
      />
    </div>
  )
}
