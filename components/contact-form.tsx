"use client"
import { useState } from 'react'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setPending(true)
    setResult(null)
    const data = Object.fromEntries(formData.entries())
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      setPending(false)
      setResult(parsed.error.issues[0]?.message ?? 'Invalid input')
      return
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data)
    })
    const json = await res.json()
    setPending(false)
    setResult(json.message ?? (res.ok ? 'Sent!' : 'Failed to send'))
  }

  return (
    <form action={onSubmit} className="grid gap-4 max-w-xl">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" id="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" placeholder="How can we help?" required />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={pending}>{pending ? 'Sending...' : 'Send'}</Button>
        {result && <p className="text-sm text-muted-foreground">{result}</p>}
      </div>
    </form>
  )
}
