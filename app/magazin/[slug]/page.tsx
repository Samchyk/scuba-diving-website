import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Bubbles } from '@/components/bubbles'
import { Reveal } from '@/components/reveal'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { articles } from '@/lib/content/articles'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Cikk' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2)
  const fallback = articles.filter((a) => a.slug !== article.slug).slice(0, 2)
  const suggestions = related.length > 0 ? related : fallback

  return (
    <article>
      <section className="relative flex min-h-[68vh] items-end overflow-hidden">
        <Image
          src={article.image || '/placeholder.svg'}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/40 to-abyss" />
        <Bubbles count={10} />
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <Link
            href="/magazin"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-silver/80 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Magazin
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-primary">
            {article.category} — {article.readingLabel}
          </p>
          <h1 className="mt-5 text-balance font-heading text-4xl font-light leading-[1.02] text-foreground text-shadow-deep md:text-6xl">
            {article.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="border-l-2 border-primary/50 pl-6 text-pretty font-heading text-xl font-light leading-relaxed text-foreground/90 md:text-2xl">
            {article.excerpt}
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col gap-7">
          {article.body.map((p, i) => (
            <Reveal key={i}>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground/70">
            Ez a tartalom kizárólag oktatási és tájékoztató célt szolgál, és nem
            helyettesíti a szakképzett oktató személyes útmutatását.
          </p>
        </Reveal>
      </div>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
            További olvasnivaló
          </p>
          <div className="mt-8 grid gap-px sm:grid-cols-2">
            {suggestions.map((s) => (
              <Link
                key={s.slug}
                href={`/magazin/${s.slug}`}
                className="group flex items-center justify-between gap-4 border border-border/40 bg-background/40 px-6 py-6 transition-colors hover:border-primary/50 hover:bg-surface/60"
              >
                <span className="font-heading text-lg font-light leading-snug text-foreground">
                  {s.title}
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-primary/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
