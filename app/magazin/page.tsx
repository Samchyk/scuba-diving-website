import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { articles } from '@/lib/content/articles'

export const metadata: Metadata = {
  title: 'Magazin',
  description:
    'Írások a víz alatti világról: élmények, technika, természet és tudomány a búvárkodás szerelmeseinek.',
}

export default function MagazinePage() {
  const [lead, ...rest] = articles

  return (
    <>
      <PageHero
        eyebrow="Magazin"
        title="Írások a mélységről"
        intro="Gondolatok, megfigyelések és gyakorlati tudás a víz alatti világról — a csendről, a fényről és a felfedezés öröméről."
        image="/images/bubbles.png"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <Link
            href={`/magazin/${lead.slug}`}
            className="group grid gap-8 md:grid-cols-12 md:items-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden md:col-span-7">
              <Image
                src={lead.image || '/placeholder.svg'}
                alt={lead.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent" />
            </div>
            <div className="md:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {lead.category} — Kiemelt
              </span>
              <h2 className="mt-4 text-balance font-heading text-3xl font-light leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {lead.excerpt}
              </p>
              <span className="mt-6 inline-block border-b border-primary/40 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Olvasás
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Reveal key={article.slug}>
              <Link href={`/magazin/${article.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/40 to-transparent" />
                </div>
                <span className="mt-5 block font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
                  {article.category}
                </span>
                <h3 className="mt-3 text-balance font-heading text-xl font-light leading-snug text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
