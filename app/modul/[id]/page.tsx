'use client'

export const dynamic = 'force-dynamic'

import { use, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { getModulesForTrack } from '@/data/modules'
import { SectionContent } from '@/components/course/SectionContent'
import { QuizCard } from '@/components/course/QuizCard'
import { ProgressBar } from '@/components/course/ProgressBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Track } from '@/types'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ModulePage({ params }: PageProps) {
  const { id } = use(params)
  const router = useRouter()

  const moduleId = parseInt(id, 10)

  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [reflections, setReflections] = useState<Record<string, string>>({})
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const [track, setTrack] = useState<Track>('utbildningsledare')

  const loadProgress = useCallback(async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/auth/login'); return }

    setUserName(user.user_metadata?.full_name ?? user.email ?? '')
    setTrack((user.user_metadata?.track as Track) ?? 'utbildningsledare')

    const [progressRes, reflRes] = await Promise.all([
      supabase
        .from('module_progress')
        .select('section_id')
        .eq('user_id', user.id)
        .eq('module_id', moduleId),
      supabase
        .from('reflections')
        .select('section_id, reflection_text')
        .eq('user_id', user.id)
        .eq('module_id', moduleId),
    ])

    setCompletedSections((progressRes.data ?? []).map((r: { section_id: string }) => r.section_id))

    const reflMap: Record<string, string> = {}
    for (const r of (reflRes.data ?? []) as { section_id: string; reflection_text: string }[]) {
      reflMap[r.section_id] = r.reflection_text
    }
    setReflections(reflMap)

    setLoading(false)
  }, [moduleId, router])

  useEffect(() => { loadProgress() }, [loadProgress])

  async function handleComplete(sectionId: string, reflectionText?: string, aiFeedback?: string) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('module_progress').upsert({
      user_id: user.id,
      module_id: moduleId,
      section_id: sectionId,
    }, { onConflict: 'user_id,module_id,section_id' })

    if (reflectionText) {
      await supabase.from('reflections').upsert({
        user_id: user.id,
        module_id: moduleId,
        section_id: sectionId,
        reflection_text: reflectionText,
        ai_feedback: aiFeedback ?? '',
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,module_id,section_id' })
    }

    setCompletedSections((prev) => [...prev, sectionId])
  }

  const modules = getModulesForTrack(track)
  const module = modules.find((m) => m.id === moduleId)

  if (!loading && !module) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-content-muted mb-4">Modulen hittades inte.</p>
          <Link href="/dashboard" className="text-primary hover:underline">
            Tillbaka till översikten
          </Link>
        </div>
      </div>
    )
  }

  const totalSections = module?.sections.length ?? 0
  const completedCount = module?.sections.filter((s) => completedSections.includes(s.id)).length ?? 0
  const isModuleComplete = totalSections > 0 && completedCount === totalSections

  const prevModule = modules.find((m) => m.id === moduleId - 1)
  const nextModule = modules.find((m) => m.id === moduleId + 1)

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header userName={userName} showNav />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-content-muted mb-6" aria-label="Brödsmula">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Kursöversikt
          </Link>
          <span>/</span>
          <span className="text-content">Modul {moduleId}</span>
        </nav>

        {module && (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{module.icon}</span>
                <div>
                  <p className="text-xs font-mono text-content-muted">Modul {module.id}</p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-content leading-tight">
                    {module.title}
                  </h1>
                  <p className="text-content-muted">{module.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-card border border-border rounded-xl p-4 mb-8">
              <ProgressBar
                completed={completedCount}
                total={totalSections}
                label="Modulens avsnitt"
              />
              {isModuleComplete && (
                <p className="mt-2 text-sm text-secondary font-medium flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" fill="#2D807C" />
                    <path d="M4 7l2.5 2.5L10 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Modulen är genomförd!
                </p>
              )}
            </div>
          </>
        )}

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-surface-card border border-border rounded-xl animate-pulse" />
            ))}
          </div>
        ) : module ? (
          <div className="space-y-4">
            {module.sections
              .filter((s) => s.type !== 'reflection')
              .map((section) => (
                <SectionContent
                  key={section.id}
                  section={section}
                  isCompleted={completedSections.includes(section.id)}
                  onComplete={(reflText, aiFeedback) => handleComplete(section.id, reflText, aiFeedback)}
                  reflectionValue={reflections[section.id] ?? ''}
                  onReflectionChange={(val) =>
                    setReflections((prev) => ({ ...prev, [section.id]: val }))
                  }
                  moduleTitle={module.title}
                />
              ))}

            {module.quiz && module.quiz.length > 0 && (
              <QuizCard questions={module.quiz} />
            )}

            {module.sections
              .filter((s) => s.type === 'reflection')
              .map((section) => (
                <SectionContent
                  key={section.id}
                  section={section}
                  isCompleted={completedSections.includes(section.id)}
                  onComplete={(reflText, aiFeedback) => handleComplete(section.id, reflText, aiFeedback)}
                  reflectionValue={reflections[section.id] ?? ''}
                  onReflectionChange={(val) =>
                    setReflections((prev) => ({ ...prev, [section.id]: val }))
                  }
                  moduleTitle={module.title}
                />
              ))}
          </div>
        ) : null}

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          {prevModule ? (
            <Link
              href={`/modul/${prevModule.id}`}
              className="flex items-center gap-2 text-sm text-content-muted hover:text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Modul {prevModule.id}: {prevModule.title}
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm text-content-muted hover:text-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Tillbaka till översikten
            </Link>
          )}

          {nextModule ? (
            <Link
              href={`/modul/${nextModule.id}`}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Modul {nextModule.id}: {nextModule.title}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : isModuleComplete ? (
            <Link
              href="/examination"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Gå till examinationen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  )
}
