import { streamText } from 'ai'

export async function POST(request: Request) {
  const { prompt } = await request.json()

  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    return Response.json({ error: 'A prompt is required.' }, { status: 400 })
  }

  const result = streamText({
    model: 'openai/gpt-5.5',
    prompt,
  })

  return result.toUIMessageStreamResponse()
}
