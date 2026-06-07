import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { articles } from '@/lib/content/articles'

export function BlogPreview() {
  const featured = articles.slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Magazin
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl font-light leading-tight text-foreground md:text-6xl">
            Történetek a víz alól
          </h2>
        </div>
        <Link
          href="/magazin"
          className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground"
        >
          <span className="border-b border-primary/40 pb-1 transition-colors group-hover:border-primary">
            Összes írás
          </span>
        </Link>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((article, i) => (
          <Reveal key={article.slug} delay={i * 60}>
            <Link
              href={`/magazin/${article.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.image || '/placeholder.svg'}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-abyss/70 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-primary backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-balance font-heading text-2xl font-light leading-snug text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {article.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
                  {article.readingLabel}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
