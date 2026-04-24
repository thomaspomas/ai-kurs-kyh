interface ProgressBarProps {
  completed: number
  total: number
  label?: string
}

export function ProgressBar({ completed, total, label }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between text-sm text-content-muted mb-2">
          <span>{label}</span>
          <span className="font-medium text-content">
            {completed}/{total} ({percent}%)
          </span>
        </div>
      )}
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            backgroundColor: percent === 100 ? '#2D807C' : '#C75000',
          }}
        />
      </div>
    </div>
  )
}
