"use client";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { RetroGrid } from '@/components/ui/retro-grid'
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useCallback } from 'react'
export function Hero() {
  const handleContactClick = useCallback(() => {
    try {
      // Flag the next page load to fire confetti once
      sessionStorage.setItem('contactConfetti', '1');
    } catch {}
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">NetMark</h1>
        <p className="text-muted-foreground max-w-2xl">
          A documentation and developer portal for the NetMark platform. Learn the vision, explore the API, and get in touch.
        </p>
        <div className="flex gap-4">
          <RainbowButton asChild>
            <Link href="/docs">Read the Docs</Link>
          </RainbowButton>
          <Button variant="outline" asChild onClick={handleContactClick}>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <RetroGrid />
    </section>
  )
}
