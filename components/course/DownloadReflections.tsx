'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { getModulesForTrack } from '@/data/modules'
import { generateReflectionsPDF } from '@/lib/generateReflectionsPDF'
import type { Track } from '@/types'

const trackLabels: Record<Track, string> = {
  utbildningsledare: 'AI för utbildningsledare – mellannivå',
  'yh-ledning': 'AI för YH-ledning – mellannivå',
  'yh-larare': 'AI för YH-lärare – mellannivå',
  'yh-studerande': 'AI för YH-studerande – mellannivå',
}

interface Props {
  userName: string
  track: Track
}

export function DownloadReflections({ userName, track }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    setLoading(true)
    try {
      const supabase = createClient()
      const { data } = await supabase
        .from('reflections')
        .select('module_id, section_id, reflection_text, ai_feedback')
        .order('module_id', { ascending: true })

      const modules = getModulesForTrack(track)
      generateReflectionsPDF(
        userName,
        trackLabels[track],
        modules,
        (data ?? []) as {
          module_id: number
          section_id: string
          reflection_text: string
          ai_feedback: string
        }[]
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-content hover:border-primary/60 transition-colors disabled:opacity-50 cursor-pointer"
    >
      {loading ? (
        <>
          <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
          Genererar PDF…
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v8M4 6l3 3 3-3M2 10v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Ladda ner reflektioner (PDF)
        </>
      )}
    </button>
  )
}
