import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: Request) {
  try {
    const { reflection, questionTitle, moduleTitle } = await req.json()

    if (!reflection || reflection.trim().length < 10) {
      return new Response('För kort reflektion', { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return new Response('API-nyckel saknas', { status: 500 })
    }

    const client = new Anthropic({ apiKey })

    const message = await client.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 400,
      system: `Du är en kursassistent för kursen "AI för utbildningsledare – mellannivå", riktad till utbildningsledare inom yrkeshögskola och vuxenutbildning. Din uppgift är att ge kort, konstruktiv återkoppling på deltagarens reflektion.

Ge återkoppling som:
- Bekräftar det som är genomtänkt i reflektionen
- Lyfter fram ett perspektiv eller en aspekt som deltagaren kan fördjupa
- Avslutar med en kort följdfråga som för tanken vidare

Håll svaret kort (3–5 meningar). Skriv på svenska. Var konkret och professionell, inte översvallande.`,
      messages: [
        {
          role: 'user',
          content: `Modul: ${moduleTitle}\nReflektionsfråga: ${questionTitle}\n\nMin reflektion:\n${reflection}`,
        },
      ],
    })

    const text =
      message.content[0].type === 'text' ? message.content[0].text : ''

    return new Response(text, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Feedback API error:', msg)
    return new Response(`Fel: ${msg}`, { status: 500 })
  }
}
