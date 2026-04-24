'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 8) {
      setError('Lösenordet måste vara minst 8 tecken.')
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })

    if (signUpError) {
      setError(
        signUpError.message === 'User already registered'
          ? 'Det finns redan ett konto med den e-postadressen.'
          : 'Något gick fel. Försök igen.'
      )
      setLoading(false)
      return
    }

    if (data.user && !data.session) {
      setSuccess(true)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  if (success) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
        <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-sm max-w-sm w-full text-center">
          <div className="text-4xl mb-4">✉️</div>
          <h1 className="text-xl font-bold text-content mb-2">Bekräfta din e-post</h1>
          <p className="text-content-muted text-sm mb-4">
            Vi har skickat ett bekräftelsemejl till <strong>{email}</strong>. Klicka på länken i
            mejlet för att aktivera ditt konto.
          </p>
          <Link href="/auth/login" className="text-sm text-primary font-medium hover:underline">
            Tillbaka till inloggning
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <div className="flex justify-between items-center p-4 sm:p-6">
        <Link href="/" className="text-xl font-bold text-content" style={{ letterSpacing: '-0.02em' }}>
          kyh<span style={{ color: '#FA6400' }}>&gt;</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="bg-surface-card border border-border rounded-2xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-content mb-1">Skapa konto</h1>
            <p className="text-content-muted text-sm mb-6">
              Starta kursen AI för utbildningsledare
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-content mb-1.5" htmlFor="name">
                  Ditt namn
                </label>
                <input
                  id="name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  autoComplete="name"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-content text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-content-muted"
                  placeholder="Förnamn Efternamn"
                />
              </div>

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
                  autoComplete="new-password"
                  minLength={8}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-content text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-content-muted"
                  placeholder="Minst 8 tecken"
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
                {loading ? 'Skapar konto...' : 'Skapa konto och starta'}
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-content-muted">
              Har du redan ett konto?{' '}
              <Link href="/auth/login" className="text-primary font-medium hover:underline">
                Logga in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
