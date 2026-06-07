export type NavItem = {
  label: string
  href: string
  description?: string
}

export const mainNav: NavItem[] = [
  { label: 'Merülés típusai', href: '/merules-tipusai' },
  { label: 'Technika', href: '/technika' },
  { label: 'Történelem', href: '/tortenelem' },
  { label: 'Felszerelés', href: '/felszereles' },
  { label: 'Biztonság', href: '/biztonsag' },
  { label: 'Érdekességek', href: '/erdekessegek' },
  { label: 'Felkészülés', href: '/felkeszules' },
  { label: 'Kezdő útmutató', href: '/kezdo-utmutato' },
  { label: 'Helyszínek', href: '/helyszinek' },
  { label: 'Magazin', href: '/magazin' },
  { label: 'Rólunk', href: '/rolunk' },
]

export const footerNav = {
  felfedezes: [
    { label: 'Merülés típusai', href: '/merules-tipusai' },
    { label: 'Technika és tanulás', href: '/technika' },
    { label: 'Felszerelés', href: '/felszereles' },
    { label: 'Helyszínek', href: '/helyszinek' },
  ],
  tudas: [
    { label: 'Biztonság', href: '/biztonsag' },
    { label: 'Érdekességek', href: '/erdekessegek' },
    { label: 'Fizikai felkészülés', href: '/felkeszules' },
    { label: 'Kezdő útmutató', href: '/kezdo-utmutato' },
  ],
  tovabbi: [
    { label: 'A búvárkodás története', href: '/tortenelem' },
    { label: 'Magazin', href: '/magazin' },
    { label: 'Rólunk', href: '/rolunk' },
  ],
  jogi: [
    { label: 'Adatvédelmi tájékoztató', href: '/adatvedelem' },
    { label: 'Cookie szabályzat', href: '/cookie-szabalyzat' },
  ],
}
