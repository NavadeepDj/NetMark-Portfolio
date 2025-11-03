export function Screenshots() {
  return (
    <section className="container py-16">
      <h2 className="mb-8 text-2xl font-semibold">Screenshots</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="aspect-video rounded-lg border bg-muted/20" />
        <div className="aspect-video rounded-lg border bg-muted/20" />
      </div>
    </section>
  )
}
