'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainNav } from '@/lib/navigation'
import { Wordmark } from '@/components/wordmark'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || open
            ? 'border-b border-border/60 bg-abyss/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNav.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground',
                  pathname === item.href && 'text-foreground',
                )}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="group flex items-center gap-3 text-sm tracking-wide text-foreground"
            aria-expanded={open}
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            <span className="hidden font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
              {open ? 'Bezár' : 'Menü'}
            </span>
            <span className="relative flex h-5 w-6 flex-col justify-center gap-[5px]">
              <span
                className={cn(
                  'h-px w-full bg-foreground transition-all duration-300',
                  open && 'translate-y-[6px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-foreground transition-all duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-px w-full bg-foreground transition-all duration-300',
                  open && '-translate-y-[6px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen fluid menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-700',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div
          className="absolute inset-0 bg-abyss/95 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20 md:px-8">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.4em] text-primary/70">
            Navigáció
          </p>
          <nav className="grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {mainNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-baseline gap-4 border-b border-border/40 py-3 transition-all duration-500',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
                )}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
              >
                <span className="font-mono text-xs text-primary/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-heading text-2xl font-light text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
