import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Screenshots } from '@/components/sections/screenshots'

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <section className="container py-16">
        <div className="rounded-lg border p-6 text-center">
          <h2 className="mb-2 text-2xl font-semibold">Ready to dive in?</h2>
          <p className="mb-6 text-muted-foreground">Check out the docs to integrate NetMark.</p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
            <Button asChild>
              <a href="/app-debug.apk" download aria-label="Download APK">Download APK</a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">To enable this download, place your APK at <code>/public/app-debug.apk</code> in the project root before deploying.</p>
        </div>
      </section>
    </>
  )
}
