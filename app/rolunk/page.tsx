import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Rólunk',
  description:
    'A Mélyáram egy magyar nyelvű, oktatási célú projekt a búvárkodás és a víz alatti világ szerelmeseinek. Vedd fel velünk a kapcsolatot.',
}

const values = [
  {
    title: 'Tisztelet',
    text: 'A víz, a környezet és a saját határaink tisztelete minden felelős merülés alapja.',
  },
  {
    title: 'Tudatosság',
    text: 'Hiszünk a tudásban és a felkészülésben — a magabiztosság a megértésből születik.',
  },
  {
    title: 'Kíváncsiság',
    text: 'A mélység iránti vágy ősi és örök. Ezt a kíváncsiságot szeretnénk továbbadni.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Rólunk"
        title="A mélység vonzásában"
        intro="A Mélyáram egy magyar nyelvű, oktatási célú projekt mindazoknak, akiket vonz a víz alatti világ csendje, fénye és szabadsága."
        image="/images/diver-portrait.png"
      />

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
            A küldetésünk
          </p>
          <div className="mt-8 flex flex-col gap-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              A Mélyáram célja, hogy közérthető, inspiráló és felelős módon
              mutassa be a búvárkodás világát. Nem oktatóközpont vagyunk és nem
              kínálunk képzést — gyűjteményünk kizárólag tájékoztató és oktatási
              jellegű.
            </p>
            <p>
              Írásainkban a víz alatti élmény szépségét, a technika finomságait
              és a természet csodáit szeretnénk megosztani. Hisszük, hogy a
              mélység megértése a tisztelettel kezdődik.
            </p>
            <p>
              Akár először gondolkodsz a merülésen, akár régóta szereted a vizet,
              reméljük, találsz nálunk valamit, ami közelebb visz a mélységhez.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-5 md:grid-cols-3 md:px-8">
          {values.map((v, i) => (
            <Reveal key={v.title}>
              <div className="py-12 md:px-8">
                <span className="font-mono text-xs text-primary/60">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-light text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/70">
                Kapcsolat
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-light leading-tight text-foreground md:text-5xl">
                Írj nekünk a felszínről
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Kérdésed van, vagy megosztanád a saját víz alatti élményedet?
                Örömmel olvassuk üzeneted. Igyekszünk minden levélre válaszolni.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
