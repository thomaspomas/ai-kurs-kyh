'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { createClient } from '@/lib/supabase/client'

interface HeaderProps {
  userName?: string
  showNav?: boolean
}

export function Header({ userName, showNav = true }: HeaderProps) {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-surface-card border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <img src="/thomas.png" alt="Thomas Carlberg" className="shrink-0 h-8 logo-adaptive" />

        {showNav && (
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/dashboard"
              className="text-content-muted hover:text-primary transition-colors"
            >
              Kursöversikt
            </Link>
            <Link
              href="/examination"
              className="text-content-muted hover:text-primary transition-colors"
            >
              Examination
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <span className="text-xs text-content-muted select-none">Darkmode On/Off</span>
          {userName && showNav && (
            <>
              <span className="hidden sm:block text-sm text-content-muted truncate max-w-32">
                {userName}
              </span>
              <button
                onClick={handleSignOut}
                className="text-sm text-content-muted hover:text-primary transition-colors cursor-pointer"
              >
                Logga ut
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

