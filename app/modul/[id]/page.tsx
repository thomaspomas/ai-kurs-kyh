'use client'

export const dynamic = 'force-dynamic'

import { use, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { modules, getModule } from '@/data/modules'
import { SectionContent } from '@/components/course/SectionContent'
import { ProgressBar } from '@/components/course/ProgressBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ModulePage({ params }: PageProps) {
  const { id } = use(params)
  const router = useRouter()

  const moduleId = parseInt(id, 10)
  const module = getModule(moduleId)

  const [completedSections, setCompletedSections] = useState<string[]>([])
  const [reflections, setReflections] = useState<Record<string, string>>({})
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)

  const loadProgress = useCallback(async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/auth/login'); return }

    setUserName(user.user_metadata?.full_name ?? user.email ?? '')

    const { data } = await supabase
      .from('module_progress')
      .select('section_id')
      .eq('user_id', user.id)
      .eq('module_id', moduleId)

    setCompletedSections((data ?? []).map((r: { section_id: string }) => r.section_id))
    setLoading(false)
  }, [moduleId, router])

  useEffect(() => { loadProgress() }, [loadProgress])

  async function handleComplete(sectionId: string) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('module_progress').upsert({
      user_id: user.id,
      module_id: moduleId,
      section_id: sectionId,
    }, { onConflict: 'user_id,module_id,section_id' })

    setCompletedSections((prev) => [...prev, sectionId])
  }

  if (!module) {
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

  const totalSections = module.sections.length
  const completedCount = module.sections.filter((s) => completedSections.includes(s.id)).length
  const isModuleComplete = completedCount === totalSections

  const prevModule = modules.find((m) => m.id === moduleId - 1)
  const nextModule = modules.find((m) => m.id === moduleId + 1)

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header userName={userName} showNav />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-content-muted mb-6" aria-label="Brödsmula">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Kursöversikt
          </Link>
          <span>/</span>
          <span className="text-content">Modul {module.id}</span>
        </nav>

        {/* Module header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{module.icon}</span>
            <div>
              <p className="text-xs font-mono text-content-muted">
                Modul {module.id} · {module.duration}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-content leading-tight">
                {module.title}
              </h1>
              <p className="text-content-muted">{module.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Progress */}
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

        {/* Sections */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-surface-card border border-border rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {module.sections.map((section) => (
              <SectionContent
                key={section.id}
                section={section}
                isCompleted={completedSections.includes(section.id)}
                onComplete={() => handleComplete(section.id)}
                reflectionValue={reflections[section.id] ?? ''}
                onReflectionChange={(val) =>
                  setReflections((prev) => ({ ...prev, [section.id]: val }))
                }
              />
            ))}
          </div>
        )}

        {/* Navigation between modules */}
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
