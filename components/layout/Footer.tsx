import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-content-muted">
        <span>AI för yrkeshögskolan - Thomas Carlberg 2025</span>
        <div className="flex items-center gap-4">
          <Link href="/integritetspolicy" className="hover:text-primary transition-colors">
            Integritetspolicy
          </Link>
          <span>Version 1.0</span>
        </div>
      </div>
    </footer>
  )
}
