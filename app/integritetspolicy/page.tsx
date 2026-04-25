import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export const metadata = {
  title: 'Integritetspolicy – AI för utbildningsledare',
}

export default function IntegritetspolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-surface-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm text-content-muted hover:text-primary transition-colors">
            ← Tillbaka
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="text-xs text-content-muted select-none">Darkmode On/Off</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-content mb-2">Integritetspolicy</h1>
        <p className="text-content-muted text-sm mb-10">
          Senast uppdaterad: 25 april 2026
        </p>

        <div className="space-y-10 text-content leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-content mb-3">1. Personuppgiftsansvarig</h2>
            <p>
              Thomas Carlberg är personuppgiftsansvarig för behandlingen av personuppgifter i
              samband med kursen <em>AI för utbildningsledare</em>. Kontakt:{' '}
              <a
                href="mailto:thomascarlberghemma@proton.me"
                className="text-primary hover:underline"
              >
                Thomas Carlberg.
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">2. Vilka uppgifter samlas in</h2>
            <p className="mb-3">
              Vi samlar in och behandlar följande personuppgifter när du registrerar dig och
              använder kursen:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Namn – anges vid registrering och visas på diplom',
                'E-postadress – används för inloggning och kontohantering',
                'Kursprogress – vilka avsnitt och moduler du har genomfört',
                'Examinationssvar – dina svar på de fyra examensdelarna',
                'Diplomdata – namn, datum och verifieringskod vid godkänd examination',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">3. Ändamål och rättslig grund</h2>
            <div className="space-y-3">
              <p>
                Personuppgifterna behandlas för att tillhandahålla kursen och dess funktioner –
                inloggning, progresstracking och diplomgenerering. Den rättsliga grunden är{' '}
                <strong>avtal</strong> (GDPR art. 6.1 b): behandlingen är nödvändig för att
                uppfylla de tjänster du registrerat dig för.
              </p>
              <p>
                Examinationssvar behandlas för att möjliggöra kursgenomförande och utfärdande av
                diplom. De delas inte med tredje part och används inte för automatiserade beslut.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">4. Lagringstid</h2>
            <p>
              Dina uppgifter lagras så länge ditt konto är aktivt. Om du begär radering av ditt
              konto tas samtliga uppgifter bort inom 30 dagar, inklusive progress, examinationssvar
              och eventuellt utfärdat diplom.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">5. Tredjepartstjänster</h2>
            <p className="mb-3">
              Applikationen använder följande tredjepartstjänster för drift och infrastruktur:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-2">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                <span>
                  <strong>Supabase</strong> – databas och autentisering. Data lagras inom EU
                  (Frankfurt). Supabase är ISO 27001-certifierat och SOC 2 Type II-compliant.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                <span>
                  <strong>Vercel</strong> – hosting och leverans av webbapplikationen. Vercel
                  behandlar inga personuppgifter utöver tekniska loggar för driftövervakning.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Inga personuppgifter säljs, hyrs ut eller delas med tredje part i
              marknadsföringssyfte.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">6. Dina rättigheter</h2>
            <p className="mb-3">
              Enligt GDPR har du rätt att:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                'Få tillgång till de uppgifter vi lagrar om dig (registerutdrag)',
                'Begära rättelse av felaktiga uppgifter',
                'Begära radering av dina uppgifter ("rätten att bli glömd")',
                'Invända mot eller begränsa behandling av dina uppgifter',
                'Få dina uppgifter i ett portabelt format (dataportabilitet)',
                'Inge klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att behandlingen bryter mot GDPR',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              För att utöva dina rättigheter, kontakta:{' '}
              <a href="mailto:thomascarlberghemma@proton.me" className="text-primary hover:underline">
                Thomas Carlberg              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">7. Cookies och lokal lagring</h2>
            <p>
              Applikationen använder sessionskakor för autentisering (nödvändiga för inloggning)
              samt localStorage för att komma ihåg ditt valda tema (ljust/mörkt läge). Inga
              spårnings- eller marknadsföringscookies används.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-content mb-3">8. Ändringar i policyn</h2>
            <p>
              Vid väsentliga ändringar i denna policy informeras registrerade användare via
              e-post. Datum för senaste uppdatering framgår alltid överst på denna sida.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
