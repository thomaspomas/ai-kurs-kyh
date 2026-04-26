import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { DiplomaView } from '@/components/diploma/DiplomaView'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import type { Track } from '@/types'

const trackTitles: Record<Track, string> = {
  utbildningsledare: 'AI för utbildningsledare – mellannivå',
  'yh-ledning': 'AI för YH-ledning – mellannivå',
  'yh-larare': 'AI för YH-lärare – mellannivå',
  'yh-studerande': 'AI för YH-studerande – mellannivå',
}

export default async function DiplomPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const userName: string = user.user_metadata?.full_name ?? user.email ?? 'Deltagare'
  const track: Track = (user.user_metadata?.track as Track) ?? 'utbildningsledare'
  const courseTitle = trackTitles[track]

  const { data: diploma } = await supabase
    .from('diplomas')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!diploma) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <Header userName={userName} showNav />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <span className="text-4xl mb-4 block">🔒</span>
            <h1 className="text-xl font-bold text-content mb-2">Diplomet är inte tillgängligt ännu</h1>
            <p className="text-content-muted mb-4">
              Genomför alla 8 moduler och examinationen för att erhålla ditt diplom.
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-5 py-2.5 rounded-lg font-medium text-white"
              style={{ backgroundColor: '#C75000' }}
            >
              Gå till kursöversikten
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header userName={userName} showNav />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="no-print text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-content mb-2">
            Ditt diplom
          </h1>
          <p className="text-content-muted">
            Grattis till att ha genomfört {courseTitle}.
          </p>
        </div>

        <DiplomaView
          userName={diploma.user_name}
          issuedAt={diploma.issued_at}
          verificationCode={diploma.verification_code}
          courseTitle={courseTitle}
        />

        <div className="no-print mt-8 text-center">
          <Link
            href="/dashboard"
            className="text-sm text-content-muted hover:text-primary transition-colors"
          >
            ← Tillbaka till kursöversikten
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
