'use client'

import { useRef, useState } from 'react'

export function AudioIntro() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  function toggle() {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      el.play()
    }
    setPlaying(!playing)
  }

  function handleEnded() {
    setPlaying(false)
  }

  return (
    <div className="flex items-center gap-4 bg-surface-card border border-border rounded-xl px-5 py-4 mb-8">
      <button
        onClick={toggle}
        aria-label={playing ? 'Pausa' : 'Spela upp'}
        className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors"
        style={{ backgroundColor: '#C75000' }}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <rect x="3" y="2" width="4" height="14" rx="1" />
            <rect x="11" y="2" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            <path d="M5 3.5l10 5.5-10 5.5V3.5z" />
          </svg>
        )}
      </button>
      <div>
        <p className="text-xs font-mono text-content-muted uppercase tracking-wider mb-0.5">Ljudintroduktion</p>
        <p className="text-sm font-medium text-content">Lyssna på en kort sammanfattning av vad AI är och hur det fungerar</p>
      </div>
      <audio ref={audioRef} src="/AIpraktikant.m4a" onEnded={handleEnded} />
    </div>
  )
}
