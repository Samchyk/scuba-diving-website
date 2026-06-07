import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export type ContentBlock = {
  heading: string
  body: string[]
  aside?: string
}

export function ContentSections({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-20 md:gap-28">
        {blocks.map((block, i) => (
          <Reveal key={block.heading}>
            <article
              className={cn(
                'grid gap-8 md:grid-cols-12 md:items-start',
              )}
            >
              <div className="md:col-span-5">
                <span className="font-mono text-xs text-primary/60">
                  {String(i + 1).padStart(2, '0')} —
                </span>
                <h2 className="mt-3 text-balance font-heading text-3xl font-light leading-tight text-foreground md:text-4xl">
                  {block.heading}
                </h2>
                {block.aside && (
                  <p className="mt-5 border-l border-primary/40 pl-4 font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-primary/70">
                    {block.aside}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-5 md:col-span-6 md:col-start-7">
                {block.body.map((p, j) => (
                  <p
                    key={j}
                    className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
