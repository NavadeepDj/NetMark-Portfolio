import ContactForm from '@/components/contact-form'
import dynamic from 'next/dynamic'

const ContactConfetti = dynamic(() => import('@/components/contact-confetti'), { ssr: false })

export default function ContactPage() {
  return (
    <section className="container relative py-16">
      <ContactConfetti />
      <h1 className="mb-4 text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Have questions or want to collaborate? Send a message.</p>
      <ContactForm />
    </section>
  )
}
