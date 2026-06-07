import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató',
  description:
    'A Mélyáram adatvédelmi tájékoztatója a személyes adatok kezeléséről és a látogatók jogairól.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Jogi tájékoztatás"
      title="Adatvédelmi tájékoztató"
      updated="2026. január"
      intro="Ez a tájékoztató bemutatja, hogyan kezeljük a weboldal látogatóinak személyes adatait. A Mélyáram oktatási célú projekt, amely tiszteletben tartja a látogatók magánszféráját."
      sections={[
        {
          heading: 'Az adatkezelő',
          body: [
            'A weboldal egy magyar nyelvű, oktatási célú tájékoztató felület a búvárkodás témakörében. Nem folytatunk kereskedelmi tevékenységet, és nem értékesítünk szolgáltatást.',
            'Az adatkezelés célja kizárólag a kapcsolatfelvétel lehetővé tétele és a weboldal megfelelő működésének biztosítása.',
          ],
        },
        {
          heading: 'A kezelt adatok köre',
          body: [
            'A kapcsolatfelvételi űrlap kitöltésekor megadott név, e-mail cím és üzenet tartalma. Ezeket az adatokat kizárólag a megkeresés megválaszolására használjuk fel.',
            'A weboldal a működéséhez szükséges technikai adatokat (pl. süti-beállítások) kezelhet, a cookie szabályzatban leírtak szerint.',
          ],
        },
        {
          heading: 'Az adatkezelés jogalapja',
          body: [
            'A személyes adatok kezelése a látogató önkéntes hozzájárulásán alapul, amelyet az űrlap elküldésével ad meg.',
            'A hozzájárulás bármikor visszavonható, és kérhető a megadott adatok törlése.',
          ],
        },
        {
          heading: 'Az adatok megőrzése',
          body: [
            'A kapcsolatfelvétel során megadott adatokat csak addig őrizzük meg, ameddig a megkeresés megválaszolásához szükséges, ezt követően töröljük azokat.',
            'Adatokat harmadik félnek nem adunk át, és nem használjuk fel marketing célokra.',
          ],
        },
        {
          heading: 'A látogató jogai',
          body: [
            'A látogató bármikor tájékoztatást kérhet a róla kezelt adatokról, kérheti azok helyesbítését vagy törlését.',
            'Kérdés esetén a kapcsolati űrlapon keresztül vehető fel velünk a kapcsolat.',
          ],
        },
        {
          heading: 'Felelősség korlátozása',
          body: [
            'A weboldal tartalma kizárólag oktatási és tájékoztató jellegű, nem helyettesíti a szakképzett oktató személyes útmutatását. A búvárkodás kockázatokkal járó tevékenység, amelyet mindig megfelelő képzés és felügyelet mellett szabad gyakorolni.',
          ],
        },
      ]}
    />
  )
}
