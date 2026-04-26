export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY
  return Response.json({
    hasKey: !!key,
    keyLength: key?.length ?? 0,
    keyPrefix: key ? key.substring(0, 15) + '...' : null,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  })
}
