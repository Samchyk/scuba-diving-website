import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { ContentSections } from '@/components/content-sections'
import { Reveal } from '@/components/reveal'
import { ArrowUpRight } from 'lucide-react'
import type { TopicPage } from '@/lib/content/topics'

export function TopicView({
  topic,
  related,
}: {
  topic: TopicPage
  related: { label: string; href: string }[]
}) {
  return (
    <>
      <PageHero
        eyebrow={topic.eyebrow}
        title={topic.title}
        intro={topic.intro}
        image={topic.image}
      />

      {topic.highlights && topic.highlights.length > 0 && (
        <section className="border-b border-border/60 bg-surface/40">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-5 sm:grid-cols-3 md:px-8">
            {topic.highlights.map((h) => (
              <div key={h.label} className="py-8 sm:px-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
                  {h.label}
                </p>
                <p className="mt-3 font-heading text-2xl font-light text-foreground md:text-3xl">
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <ContentSections blocks={topic.blocks} />

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
              Folytasd a felfedezést
            </p>
            <div className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex items-center justify-between gap-4 border border-border/40 bg-background/40 px-6 py-6 transition-colors hover:border-primary/50 hover:bg-surface/60"
                >
                  <span className="font-heading text-lg font-light text-foreground">
                    {r.label}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
