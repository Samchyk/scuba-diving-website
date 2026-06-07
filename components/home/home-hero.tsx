'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Bubbles } from '@/components/bubbles'

export function HomeHero() {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${offset * 0.35}px) scale(1.1)` }}
      >
        <Image
          src="/images/hero-diver.png"
          alt="Búvár ereszkedik alá a mélykék óceánban, miközben fénysugarak törnek át a víz felszínén"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-transparent to-abyss" />
      <div className="absolute inset-0 bg-gradient-to-tr from-abyss/70 via-abyss/10 to-transparent" />

      {/* caustic shimmer */}
      <div className="animate-shimmer absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-turquoise/15 to-transparent mix-blend-screen" />

      <Bubbles count={20} />

      {/* Vertical label */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 md:block">
        <p className="rotate-90 font-mono text-xs uppercase tracking-[0.5em] text-silver/50">
          A mélység csendje
        </p>
      </div>

      <div
        className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28"
        style={{ transform: `translateY(${offset * -0.08}px)` }}
      >
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.45em] text-primary">
          Magyar búvármagazin
        </p>
        <h1 className="max-w-5xl text-balance font-heading text-[3.4rem] font-light leading-[0.92] text-foreground text-shadow-deep sm:text-7xl lg:text-[7.5rem]">
          Ahol a felszín
          <span className="block italic text-primary">véget ér,</span>
          ott kezdődik a szabadság.
        </h1>
        <div className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-pretty text-base leading-relaxed text-silver/80 md:text-lg">
            Merülj alá a búvárkodás világába — technikák, felszerelés,
            biztonság és a víz alatti felfedezés nyugodt, mégis kalandos
            története.
          </p>
          <Link
            href="/merules-tipusai"
            className="group inline-flex shrink-0 items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground"
          >
            <span className="border-b border-primary/40 pb-1 transition-colors group-hover:border-primary">
              Felfedezés
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v12M7 13l4-4M7 13l-4-4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
