import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Bubbles } from '@/components/bubbles'

export function StoryIntro() {
  return (
    <section className="relative overflow-hidden bg-abyss py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            A mélység meghívása
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-5xl text-balance font-heading text-3xl font-light leading-[1.25] text-foreground md:text-5xl lg:text-6xl">
            A víz alatt megszűnik a sietség. Marad a légzés ritmusa, a fény
            lassú tánca, és a felfedezés tiszta, nyugodt öröme —{' '}
            <span className="italic text-primary">
              a szabadság, amit csak a mélység ad.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function DepthBand() {
  return (
    <section className="relative h-[60vh] overflow-hidden md:h-[80vh]">
      <Image
        src="/images/depth.png"
        alt="Lefelé tekintő nézet az óceán mélységeibe, ahogy a türkiz a sötét navy felé halványul"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss" />
      <Bubbles count={14} />
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80">
            — minden tíz méter egy új világ —
          </p>
          <p className="mt-6 font-heading text-5xl font-light italic text-foreground text-shadow-deep md:text-8xl">
            Lélegezz lassan.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
