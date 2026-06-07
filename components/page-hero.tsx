import Image from 'next/image'
import { Bubbles } from '@/components/bubbles'

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  intro: string
  image: string
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden">
      <Image
        src={image || '/placeholder.svg'}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/40 to-abyss" />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/80 to-transparent" />
      <Bubbles count={12} />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-heading text-5xl font-light leading-[0.95] text-foreground text-shadow-deep md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-silver/80 md:text-lg">
          {intro}
        </p>
      </div>
    </section>
  )
}
