'use client'

interface DiplomaViewProps {
  userName: string
  issuedAt: string
  verificationCode: string
  courseTitle: string
}

export function DiplomaView({ userName, issuedAt, verificationCode, courseTitle }: DiplomaViewProps) {
  const formattedDate = new Date(issuedAt).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  function handlePrint() {
    window.print()
  }

  return (
    <div>
      {/* Print button */}
      <div className="no-print flex justify-center mb-8">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white cursor-pointer transition-colors"
          style={{ backgroundColor: '#C75000' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M5 7V2h8v5M4 13H2V8h14v5h-2M5 11h8v5H5v-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Ladda ned / Skriv ut diplom
        </button>
      </div>

      {/* Diploma */}
      <div
        id="diploma"
        className="mx-auto bg-white text-[#303030] rounded-2xl shadow-xl overflow-hidden"
        style={{ maxWidth: '720px', fontFamily: 'Roboto, sans-serif' }}
      >
        {/* Top accent bar */}
        <div style={{ height: '8px', background: 'linear-gradient(90deg, #C75000 0%, #FA6400 50%, #2D807C 100%)' }} />

        {/* Content */}
        <div className="p-8 text-center">
          {/* Logo area */}
          <div className="mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/thomas.png" alt="Thomas Carlberg" style={{ height: '192px', margin: '0 auto 8px' }} />
            <p className="text-sm font-medium" style={{ color: '#755E60', fontFamily: 'Courier New, monospace' }}>
              KYH – Yrkeshögskolan
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#E8E0DB', margin: '0 auto 24px', maxWidth: '300px' }} />

          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: '#755E60' }}>
            Intygar att
          </p>

          <h1 className="text-4xl font-bold mb-4" style={{ color: '#28221B', lineHeight: 1.2 }}>
            {userName}
          </h1>

          <p className="text-base mb-2" style={{ color: '#303030' }}>
            har genomfört och godkänts i kursen
          </p>

          <h2 className="text-xl font-bold mb-6" style={{ color: '#C75000' }}>
            {courseTitle}
          </h2>

          <div
            className="rounded-xl p-5 mb-6 text-left"
            style={{ border: '1px solid #E8E0DB', maxWidth: '480px', margin: '0 auto 24px' }}
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p style={{ color: '#755E60', marginBottom: '4px' }}>Datum</p>
                <p className="font-medium" style={{ color: '#28221B' }}>
                  {formattedDate}
                </p>
              </div>
              <div>
                <p style={{ color: '#755E60', marginBottom: '4px' }}>Utfärdare</p>
                <p className="font-medium" style={{ color: '#28221B' }}>
                  KYH
                </p>
              </div>
              <div>
                <p style={{ color: '#755E60', marginBottom: '4px' }}>Kurstyp</p>
                <p className="font-medium" style={{ color: '#28221B' }}>
                  Självstudier / Digital kurs
                </p>
              </div>
              <div>
                <p style={{ color: '#755E60', marginBottom: '4px' }}>Nivå</p>
                <p className="font-medium" style={{ color: '#28221B' }}>
                  Mellannivå
                </p>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div style={{ height: '1px', backgroundColor: '#E8E0DB', margin: '0 auto 24px', maxWidth: '300px' }} />
          <p className="text-xs" style={{ color: '#9e8a84', fontFamily: 'Courier New, monospace' }}>
            Verifieringskod: {verificationCode}
          </p>
        </div>

        {/* Bottom accent bar */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #2D807C 0%, #C75000 100%)' }} />
      </div>
    </div>
  )
}
