'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Fel e-postadress eller lösenord.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <div className="flex justify-between items-center p-4 sm:p-6">
        <div />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="text-xs text-content-muted select-none">Darkmode On/Off</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-content mb-1">Välkommen tillbaka</h1>
            <p className="text-content-muted text-sm mb-6">Logga in för att fortsätta kursen</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-content mb-1.5" htmlFor="email">
                  E-postadress
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-content text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-content-muted"
                  placeholder="din@epost.se"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-content mb-1.5" htmlFor="password">
                  Lösenord
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-content text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-content-muted"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <p className="text-sm text-primary bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg font-medium text-white transition-opacity disabled:opacity-60 cursor-pointer"
                style={{ backgroundColor: '#C75000' }}
              >
                {loading ? 'Loggar in...' : 'Logga in'}
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-content-muted">
              Inget konto?{' '}
              <Link href="/auth/register" className="text-primary font-medium hover:underline">
                Registrera dig
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
