import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10)
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.parse(body)

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    if (!resendApiKey || !toEmail) {
      return NextResponse.json({ message: 'Server not configured' }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)
    await resend.emails.send({
      from: 'NetMark <no-reply@resend.dev>',
      to: toEmail,
      subject: `New message from ${parsed.name}`,
      reply_to: parsed.email,
      text: parsed.message
    })
    return NextResponse.json({ message: 'Message sent' })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 })
    }
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 })
  }
}
