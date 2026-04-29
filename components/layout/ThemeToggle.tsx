'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useTransition } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => setMounted(true))
  }, [startTransition])

  if (!mounted) {
    return <div className="w-10 h-6 rounded-full bg-border" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Byt till ljust läge' : 'Byt till mörkt läge'}
      className="relative inline-flex items-center w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
      style={{ backgroundColor: isDark ? '#C75000' : '#D8CEC7' }}
    >
      <span
        className="inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200"
        style={{ transform: isDark ? 'translateX(22px)' : 'translateX(2px)' }}
      />
    </button>
  )
}
