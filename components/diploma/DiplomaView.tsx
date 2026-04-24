'use client'

interface DiplomaViewProps {
  userName: string
  issuedAt: string
  verificationCode: string
}

export function DiplomaView({ userName, issuedAt, verificationCode }: DiplomaViewProps) {
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
        <div className="p-12 text-center">
          {/* Logo area */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1 mb-2">
              <span className="font-bold text-3xl" style={{ color: '#303030', letterSpacing: '-0.02em' }}>
                kyh<span style={{ color: '#FA6400' }}>&gt;</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: '#755E60', fontFamily: 'Courier New, monospace' }}>
              KYH – Yrkeshögskolan
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#F7F1ED', margin: '0 auto 32px', maxWidth: '300px' }} />

          <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{ color: '#755E60' }}>
            Intygar att
          </p>

          <h1 className="text-4xl font-bold mb-6" style={{ color: '#28221B', lineHeight: 1.2 }}>
            {userName}
          </h1>

          <p className="text-base mb-2" style={{ color: '#303030' }}>
            har genomfört och godkänts i kursen
          </p>

          <h2 className="text-xl font-bold mb-8" style={{ color: '#C75000' }}>
            AI för utbildningsledare – mellannivå
          </h2>

          <div
            className="rounded-xl p-6 mb-8 text-left"
            style={{ backgroundColor: '#F7F1ED', maxWidth: '480px', margin: '0 auto 32px' }}
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

          {/* Description */}
          <p className="text-sm mb-8 mx-auto" style={{ color: '#755E60', maxWidth: '480px', lineHeight: 1.7 }}>
            Kursen omfattar professionell förståelse av AI-teknologi, strategisk tillämpning i
            utbildningsledarens vardag samt ansvar, risker och beslutsförmåga inom AI-användning.
          </p>

          {/* Verification */}
          <div style={{ height: '1px', backgroundColor: '#F7F1ED', margin: '0 auto 24px', maxWidth: '300px' }} />
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
