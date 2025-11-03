export function Features() {
  const features = [
    {
      title: 'Developer-first',
      desc: 'Simple APIs and components to integrate NetMark quickly.'
    },
    { title: 'Secure', desc: 'Best practices for auth, data, and privacy.' },
    { title: 'Flexible', desc: 'Build your own flows for colleges and companies.' },
  ]
  return (
    <section className="container py-16">
      <h2 className="mb-8 text-2xl font-semibold">Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border p-6">
            <h3 className="mb-2 font-medium">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
