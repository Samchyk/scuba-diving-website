import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  variant = 'full',
}: {
  className?: string
  variant?: 'full' | 'mark'
}) {
  return (
    <Link
      href="/"
      aria-label="Hungary Búvárkodás — kezdőlap"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        {/* fluid concentric depth mark */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="h-7 w-7 text-primary"
        >
          <path
            d="M16 2C16 2 6 11 6 19a10 10 0 0 0 20 0C26 11 16 2 16 2Z"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.9"
          />
          <path
            d="M16 9c0 0-5 5-5 9.2A5 5 0 0 0 21 18.2C21 14 16 9 16 9Z"
            fill="currentColor"
            opacity="0.55"
          />
        </svg>
      </span>
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-lg font-medium tracking-tight text-foreground">
            Hungary
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.42em] text-primary/80">
            Búvárkodás
          </span>
        </span>
      )}
    </Link>
  )
}
