import Link from 'next/link'

export default function DocsPage() {
  return (
    <section className="container py-16">
      <h1 className="mb-6 text-3xl font-bold">Documentation</h1>
      <div className="prose dark:prose-invert max-w-none">
        <h2>Getting Started</h2>
        <ol>
          <li>Install the NetMark SDK (coming soon).</li>
          <li>Configure your API keys and environment variables.</li>
          <li>Follow integration examples for your framework.</li>
        </ol>
        <h2>API</h2>
        <p>
          If you need access, contact us via the{' '}<Link href="/contact" className="underline">contact form</Link>.
        </p>
      </div>
    </section>
  )
}
