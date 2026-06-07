import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { previewSections } from '@/lib/content/previews'

export function PreviewSections() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-16 flex flex-col gap-4 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Felfedezés
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-light leading-tight text-foreground md:text-6xl">
            Kilenc irány a mélység felé
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Minden szakasz egy-egy önálló utazás a búvárkodás világában — válassz
          irányt, és merülj alá.
        </p>
      </Reveal>

      <div className="flex flex-col">
        {previewSections.map((section, i) => (
          <Reveal key={section.href}>
            <Link
              href={section.href}
              className="group grid items-center gap-6 border-t border-border/50 py-8 transition-colors hover:border-primary/50 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="font-mono text-xs text-primary/50 md:col-span-1">
                {section.index}
              </span>

              <div className="md:col-span-5">
                <h3 className="font-heading text-2xl font-light text-foreground transition-colors group-hover:text-primary md:text-4xl">
                  {section.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:col-span-4">
                {section.excerpt}
              </p>

              <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:col-span-2 md:aspect-[4/5]">
                <Image
                  src={section.image || '/placeholder.svg'}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 18vw"
                />
                <div className="absolute inset-0 bg-abyss/20 transition-opacity group-hover:opacity-0" />
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-border/50" />
      </div>
    </section>
  )
}
