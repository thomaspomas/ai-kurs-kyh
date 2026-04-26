'use client'

import { useState } from 'react'
import type { ModuleSection } from '@/types'

interface SectionContentProps {
  section: ModuleSection
  isCompleted: boolean
  onComplete: (reflectionText?: string, aiFeedback?: string) => void
  reflectionValue?: string
  onReflectionChange?: (val: string) => void
  moduleTitle?: string
}

const typeConfig: Record<
  ModuleSection['type'],
  { label: string; accent: string; bg: string; icon: string }
> = {
  intro: {
    label: 'Introduktion',
    accent: '#C75000',
    bg: 'bg-primary/5 border-primary/20',
    icon: '📖',
  },
  concept: {
    label: 'Centralt begrepp',
    accent: '#2D807C',
    bg: 'bg-secondary/5 border-secondary/20',
    icon: '💡',
  },
  example: {
    label: 'Exempel från arbetslivet',
    accent: '#755E60',
    bg: 'bg-comp2/5 border-comp2/20',
    icon: '📋',
  },
  misconceptions: {
    label: 'Vanliga missförstånd',
    accent: '#C75000',
    bg: 'bg-primary/5 border-primary/20',
    icon: '⚠️',
  },
  warning: {
    label: 'När bör du INTE använda AI?',
    accent: '#C75000',
    bg: 'bg-primary/8 border-primary/30',
    icon: '🚫',
  },
  reflection: {
    label: 'Reflektionsfråga',
    accent: '#2D807C',
    bg: 'bg-secondary/5 border-secondary/20',
    icon: '🤔',
  },
}

export function SectionContent({
  section,
  isCompleted,
  onComplete,
  reflectionValue = '',
  onReflectionChange,
  moduleTitle = '',
}: SectionContentProps) {
  const config = typeConfig[section.type]
  const isReflection = section.type === 'reflection'
  const canComplete = isReflection ? reflectionValue.trim().length >= 50 : true

  const [feedback, setFeedback] = useState('')
  const [loadingFeedback, setLoadingFeedback] = useState(false)
  const [feedbackError, setFeedbackError] = useState('')

  async function handleGetFeedback() {
    setFeedback('')
    setFeedbackError('')
    setLoadingFeedback(true)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reflection: reflectionValue,
          questionTitle: section.title,
          moduleTitle,
        }),
      })
      if (!res.ok) throw new Error('Något gick fel')
      const text = await res.text()
      setFeedback(text)
    } catch {
      setFeedbackError('Kunde inte hämta återkoppling. Försök igen.')
    } finally {
      setLoadingFeedback(false)
    }
  }

  return (
    <div
      className={`rounded-xl border-2 p-6 transition-all duration-200 ${config.bg} ${
        isCompleted ? 'opacity-80' : ''
      }`}
    >
      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg" role="img" aria-label="">
          {config.icon}
        </span>
        <span
          className="text-xs font-mono font-medium uppercase tracking-wider"
          style={{ color: config.accent }}
        >
          {config.label}
        </span>
        {isCompleted && (
          <span className="ml-auto text-xs text-secondary font-medium flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6" fill="#2D807C" />
              <path d="M4 7l2.5 2.5L10 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Genomfört
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-content mb-3">{section.title}</h3>

      {/* Content paragraphs */}
      {section.content.split('\n\n').map((para, i) => (
        <p key={i} className="text-content leading-relaxed mb-3 last:mb-0" style={{ whiteSpace: 'pre-wrap' }}>
          {para}
        </p>
      ))}

      {/* List items */}
      {section.items && section.items.length > 0 && (
        <ul className="mt-4 space-y-2">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-content">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.accent }} />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Reflection textarea */}
      {isReflection && onReflectionChange && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-content mb-2">
            Din reflektion (minst 50 tecken för att gå vidare)
          </label>
          <textarea
            value={reflectionValue}
            onChange={(e) => onReflectionChange(e.target.value)}
            disabled={isCompleted}
            placeholder="Skriv din reflektion här..."
            rows={5}
            className="w-full rounded-lg border border-border bg-surface-card text-content p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-content-muted disabled:opacity-60"
          />
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs text-content-muted">
              {reflectionValue.trim().length} tecken
            </p>
            {reflectionValue.trim().length >= 50 && (
              <button
                onClick={handleGetFeedback}
                disabled={loadingFeedback}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-50 cursor-pointer"
                style={{ color: '#2D807C', borderColor: '#2D807C' }}
              >
                {loadingFeedback ? (
                  <>
                    <svg className="animate-spin" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                    Hämtar återkoppling…
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Få återkoppling från AI
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* AI feedback */}
      {isReflection && (feedback || feedbackError) && (
        <div className="mt-4 rounded-lg border border-secondary/30 bg-secondary/5 p-4">
          <p className="text-xs font-mono font-medium mb-2" style={{ color: '#2D807C' }}>
            Återkoppling från kursassistenten
          </p>
          {feedbackError ? (
            <p className="text-sm text-primary">{feedbackError}</p>
          ) : (
            <p className="text-sm text-content leading-relaxed whitespace-pre-wrap">{feedback}</p>
          )}
        </div>
      )}

      {/* Complete button */}
      {!isCompleted && (
        <button
          onClick={() => onComplete(isReflection ? reflectionValue : undefined, isReflection ? feedback : undefined)}
          disabled={!canComplete}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{ backgroundColor: canComplete ? '#C75000' : '#9ca3af' }}
        >
          {isReflection ? 'Spara reflektion och fortsätt' : 'Markera som genomfört'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
