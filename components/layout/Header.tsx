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
        {/* Logo */}
        <Link href={showNav ? '/dashboard' : '/'} className="flex items-center gap-2 shrink-0">
          <KyhLogo />
        </Link>

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

        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
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

function KyhLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 3L9 11L4 19" stroke="#FA6400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M0 3L5 11L0 19" stroke="#FA6400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
      <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--content)', letterSpacing: '-0.02em' }}>
        kyh<span style={{ color: '#FA6400' }}>&gt;</span>
      </span>
    </div>
  )
}
