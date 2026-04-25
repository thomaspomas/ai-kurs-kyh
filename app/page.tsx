import Link from 'next/link'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Footer } from '@/components/layout/Footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Minimal header */}
      <header className="bg-surface-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <img src="/kyh-logo.png" alt="KYH" className="h-8" />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="text-xs text-content-muted select-none">Darkmode On/Off</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
              Mellannivå · Självstudier · 8–10 timmar
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-content mb-6 leading-tight">
              AI för
              <br />
              <span style={{ color: '#C75000' }}>utbildningsledare</span>
            </h1>
            <p className="text-lg text-content-muted mb-8 leading-relaxed">
              En tillämpad kurs för dig som leder utbildning inom yrkeshögskola eller
              vuxenutbildning. Bortom "vad är AI?" – mot strategisk förståelse, ansvarsfull
              användning och informerat beslutsfattande.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: '#C75000' }}
              >
                Starta kursen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-border text-content hover:border-primary/60 transition-colors"
              >
                Logga in
              </Link>
            </div>
          </div>
        </section>

        {/* Modules overview */}
        <section className="bg-surface-card border-y border-border py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-sm font-mono text-content-muted uppercase tracking-wider mb-6">
              8 moduler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { n: 1, icon: '🧠', title: 'Vad AI faktiskt gör' },
                { n: 2, icon: '💾', title: 'Tokens, kontext och minne' },
                { n: 3, icon: '✏️', title: 'Promptdesign' },
                { n: 4, icon: '🎭', title: 'Personas som verktyg' },
                { n: 5, icon: '🤖', title: 'Agentbaserad AI' },
                { n: 6, icon: '⚡', title: 'AI i realtid' },
                { n: 7, icon: '⚖️', title: 'Risker och ansvar' },
                { n: 8, icon: '🎯', title: 'Strategiskt ledarskap' },
              ].map((m) => (
                <div
                  key={m.n}
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border"
                >
                  <span className="text-xl shrink-0">{m.icon}</span>
                  <div>
                    <p className="text-xs text-content-muted font-mono">Modul {m.n}</p>
                    <p className="text-sm font-medium text-content leading-tight">{m.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🎓',
                title: 'Diplom vid godkänd examination',
                desc: 'Erhåll ett nedladdningsbart diplom när du genomfört alla moduler och slutexaminationen.',
              },
              {
                icon: '📍',
                title: 'Återuppta var du slutade',
                desc: 'Dina framsteg sparas automatiskt. Fortsätt kursen när det passar dig.',
              },
              {
                icon: '🔒',
                title: 'Baserat på YH-praxis',
                desc: 'Alla exempel och övningar är hämtade från utbildningsledarens faktiska arbetskontext.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-surface-card border border-border rounded-xl p-5">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-content mb-2">{f.title}</h3>
                <p className="text-sm text-content-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
