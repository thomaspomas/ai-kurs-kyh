import Link from 'next/link'
import type { CourseModule } from '@/types'

interface ModuleCardProps {
  module: CourseModule
  completedSections: string[]
}

export function ModuleCard({ module, completedSections }: ModuleCardProps) {
  const totalSections = module.sections.length
  const completedCount = module.sections.filter((s) =>
    completedSections.includes(s.id)
  ).length
  const progress = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0
  const isComplete = completedCount === totalSections

  return (
    <Link
      href={`/modul/${module.id}`}
      className="block group bg-surface-card border border-border rounded-xl p-5 hover:border-primary/60 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label="">
            {module.icon}
          </span>
          <div>
            <p className="text-xs font-mono text-content-muted mb-0.5">
              Modul {module.id}
            </p>
            <h3 className="font-bold text-base text-content group-hover:text-primary transition-colors leading-tight">
              {module.title}
            </h3>
            <p className="text-sm text-content-muted">{module.subtitle}</p>
          </div>
        </div>
        {isComplete && (
          <span className="shrink-0 mt-1 inline-flex items-center gap-1 text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
            <CheckIcon />
            Klar
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-xs text-content-muted mb-1.5">
          <span>
            {completedCount} av {totalSections} avsnitt
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              backgroundColor: isComplete ? '#2D807C' : '#C75000',
            }}
          />
        </div>
      </div>
    </Link>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
