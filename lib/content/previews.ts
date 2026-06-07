export type PreviewSection = {
  index: string
  title: string
  excerpt: string
  href: string
  image: string
  tags: string[]
}

export const previewSections: PreviewSection[] = [
  {
    index: '01',
    title: 'A merülés típusai',
    excerpt:
      'A nyugodt rekreációs merüléstől a szabadtüdős alámerülésig — ismerd meg a víz alatti világ különböző útjait.',
    href: '/merules-tipusai',
    image: '/images/freediver.png',
    tags: ['Rekreációs', 'Scuba', 'Szabadtüdős'],
  },
  {
    index: '02',
    title: 'Technika és tanulás',
    excerpt:
      'Légzés, mozgás és lebegés — a víz alatti magabiztosság alapjai kezdőknek és haladóknak egyaránt.',
    href: '/technika',
    image: '/images/diver-explore.png',
    tags: ['Légzés', 'Lebegés', 'Mozgás'],
  },
  {
    index: '03',
    title: 'A búvárkodás története',
    excerpt:
      'A magyar víz alatti felfedezés cinematikus idővonala — a kezdetektől a mély tavak meghódításáig.',
    href: '/tortenelem',
    image: '/images/depth.png',
    tags: ['Idővonal', 'Örökség'],
  },
  {
    index: '04',
    title: 'Felszerelés és alapok',
    excerpt:
      'Maszk, uszony, búvárruha és a légzőrendszer alapjai — minden, ami a biztonságos merüléshez kell.',
    href: '/felszereles',
    image: '/images/equipment.png',
    tags: ['Maszk', 'Uszony', 'Búvárruha'],
  },
  {
    index: '05',
    title: 'Biztonság és tudatosság',
    excerpt:
      'Nyomásviszonyok, víz alatti kommunikáció és a környezet megértése — a magabiztos merülés alappillérei.',
    href: '/biztonsag',
    image: '/images/bubbles.png',
    tags: ['Nyomás', 'Kommunikáció'],
  },
  {
    index: '06',
    title: 'Érdekességek',
    excerpt:
      'Víz alatti kuriózumok, a légzés és a nyomás titkai, valamint a tenger meglepő jelenségei.',
    href: '/erdekessegek',
    image: '/images/light-rays.png',
    tags: ['Kuriózum', 'Jelenségek'],
  },
  {
    index: '07',
    title: 'Fizikai felkészülés',
    excerpt:
      'Légzőgyakorlatok, állóképesség, rugalmasság és regeneráció — a test felkészítése a mélységre.',
    href: '/felkeszules',
    image: '/images/diver-portrait.png',
    tags: ['Légzés', 'Állóképesség'],
  },
  {
    index: '08',
    title: 'Kezdő útmutató',
    excerpt:
      'Az első merülés élménye, a felkészülés alapjai és gyakorlati ajánlások az indulás előtt.',
    href: '/kezdo-utmutato',
    image: '/images/diver-explore.png',
    tags: ['Első merülés', 'Alapok'],
  },
  {
    index: '09',
    title: 'Helyszínek és környezetek',
    excerpt:
      'Tavak, nyílt vizek és a természetes merülési feltételek — a víz alatti láthatóság világa.',
    href: '/helyszinek',
    image: '/images/lake.png',
    tags: ['Tavak', 'Nyílt víz'],
  },
]
