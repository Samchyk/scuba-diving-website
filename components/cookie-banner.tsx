'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'hb-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const t = setTimeout(() => setVisible(true), 1200)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  return (
    <div
      className={cn(
        'fixed inset-x-3 bottom-3 z-50 transition-all duration-700 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0',
      )}
      role="dialog"
      aria-live="polite"
      aria-label="Süti tájékoztató"
    >
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <h2 className="font-heading text-xl font-medium text-foreground">
          A nyugodt böngészésért
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Sütiket használunk az élmény finomhangolásához és a tartalom
          fejlesztéséhez. A részletekért tekintsd meg a{' '}
          <Link
            href="/cookie-szabalyzat"
            className="text-primary underline-offset-4 hover:underline"
          >
            cookie szabályzatot
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="flex-1 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Elfogadom
          </button>
          <button
            type="button"
            onClick={() => decide('declined')}
            className="flex-1 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Csak a szükségeseket
          </button>
        </div>
      </div>
    </div>
  )
}
