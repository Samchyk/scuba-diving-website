import { Reveal } from '@/components/reveal'

export type LegalSection = { heading: string; body: string[] }

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-36 md:px-8 md:pt-44">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-5 text-balance font-heading text-4xl font-light leading-tight text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
        Utolsó frissítés: {updated}
      </p>
      <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
        {intro}
      </p>

      <div className="mt-14 flex flex-col gap-12">
        {sections.map((s, i) => (
          <Reveal key={s.heading}>
            <section>
              <h2 className="font-heading text-2xl font-light text-foreground">
                <span className="mr-3 font-mono text-sm text-primary/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="text-pretty leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
