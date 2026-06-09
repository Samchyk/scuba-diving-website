import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Cookie szabályzat',
  description:
    'A Mélyáram cookie szabályzata a weboldalon használt sütikről és azok kezeléséről.',
}

export default function CookiePage() {
  return (
    <LegalPage
      eyebrow="Jogi tájékoztatás"
      title="Cookie szabályzat"
      intro="Ez a szabályzat ismerteti, milyen sütiket (cookie-kat) használ a weboldal, és hogyan kezelheted ezeket a beállításaidban."
      sections={[
        {
          heading: 'Mi az a cookie?',
          body: [
            'A cookie egy kis adatfájl, amelyet a böngésződ tárol a weboldal látogatásakor. Segít megjegyezni a beállításaidat és biztosítja a weboldal megfelelő működését.',
          ],
        },
        {
          heading: 'Milyen sütiket használunk?',
          body: [
            'Működéshez szükséges sütik: ezek elengedhetetlenek a weboldal alapvető funkcióihoz, például a süti-beállításaid megjegyzéséhez.',
            'Mivel a Mélyáram oktatási célú, nem kereskedelmi projekt, nem használunk reklámcélú vagy harmadik féltől származó nyomkövető sütiket.',
          ],
        },
        {
          heading: 'A sütik kezelése',
          body: [
            'A weboldal első látogatásakor megjelenő sávban dönthetsz a sütik elfogadásáról. Választásodat bármikor módosíthatod a böngésződ beállításaiban.',
            'A böngésződben letilthatod vagy törölheted a sütiket, ez azonban befolyásolhatja a weboldal egyes funkcióinak működését.',
          ],
        },
        {
          heading: 'Hozzájárulás',
          body: [
            'A weboldal használatával és a sütik elfogadásával hozzájárulsz a fent ismertetett sütik használatához.',
            'További kérdés esetén a kapcsolati űrlapon keresztül fordulhatsz hozzánk.',
          ],
        },
      ]}
    />
  )
}
