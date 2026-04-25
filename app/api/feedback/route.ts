import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

export async function POST(req: Request) {
  const { reflection, questionTitle, moduleTitle } = await req.json()

  if (!reflection || reflection.trim().length < 10) {
    return new Response('För kort reflektion', { status: 400 })
  }

  const stream = await client.messages.stream({
    model: 'claude-haiku-4-5-20251001',
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

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text))
        }
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
