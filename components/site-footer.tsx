import Link from 'next/link'
import { footerNav } from '@/lib/navigation'
import { Wordmark } from '@/components/wordmark'

const columns: { title: string; key: keyof typeof footerNav }[] = [
  { title: 'Felfedezés', key: 'felfedezes' },
  { title: 'Tudás', key: 'tudas' },
  { title: 'További', key: 'tovabbi' },
  { title: 'Jogi', key: 'jogi' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-abyss">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Wordmark />
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              A mélység csendjének magyar nyelvű magazinja. A búvárkodás
              művészetéről, a víz alatti világ szabadságáról és a felfedezés
              nyugalmáról.
            </p>
            <a
              href="mailto:info@hungarybuvarkodas.com"
              className="w-fit border-b border-primary/40 pb-0.5 font-mono text-sm text-primary transition-colors hover:border-primary"
            >
              info@hungarybuvarkodas.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.key} className="flex flex-col gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-primary/70">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {footerNav[col.key].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Oversized fluid wordmark */}
        <div className="mt-16 select-none overflow-hidden md:mt-24">
          <p className="font-heading text-[18vw] leading-[0.8] tracking-tighter text-deep/60 md:text-[14vw]">
            Búvárkodás
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/40 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hungary Búvárkodás. Minden jog fenntartva.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            hungarybuvarkodas.com
          </p>
        </div>
      </div>
    </footer>
  )
}
