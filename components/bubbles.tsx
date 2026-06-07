'use client'

import { useEffect, useState } from 'react'

type Bubble = {
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  opacity: number
}

export function Bubbles({ count = 18 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    setBubbles(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 3 + Math.random() * 12,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * 16,
        drift: -40 + Math.random() * 80,
        opacity: 0.15 + Math.random() * 0.4,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-rise absolute bottom-[-40px] rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
            background:
              'radial-gradient(circle at 30% 30%, oklch(0.92 0.04 195 / 0.9), oklch(0.78 0.11 190 / 0.15))',
            boxShadow: '0 0 8px oklch(0.78 0.11 190 / 0.4)',
            // @ts-expect-error custom property
            '--drift': `${b.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
