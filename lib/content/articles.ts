export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  readingLabel: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'a-csend-a-melyben',
    title: 'A csend, ami csak a mélyben létezik',
    category: 'Élmény',
    excerpt:
      'Néhány méterrel a felszín alatt megszűnik a világ zaja. Arról, hogyan formálja át a búvárkodás a hallás és a jelenlét érzékelését.',
    image: '/images/depth.png',
    readingLabel: 'Elmélkedés',
    body: [
      'A felszín alatt a hang másként viselkedik. A levegőben megszokott zajok eltűnnek, helyüket a saját légzés ritmusa és a buborékok lágy emelkedése veszi át. Ez a csend nem üresség, hanem egyfajta teltség — a jelenlét legtisztább formája.',
      'Sok búvár számára ez az élmény jelenti a valódi vonzerőt. Nem a sebesség, nem a teljesítmény, hanem a lelassulás. A víz alatt a test kénytelen takarékosan bánni a mozdulatokkal, és ez a kényszerű nyugalom szinte meditatív állapotba fordul át.',
      'A mélység csendje megtanít figyelni. A környezet apró jeleire, a fény változására, a saját testünk reakcióira. Ez a fajta tudatosság az, ami a búvárkodást túlemeli a puszta sporton, és a víz alatti felfedezés művészetévé teszi.',
    ],
  },
  {
    slug: 'fenysugarak-a-melyben',
    title: 'Fénysugarak a mélyben: a víz alatti világítás',
    category: 'Természet',
    excerpt:
      'Hogyan törik meg a napfény a víz felszínén, és miért változik meg a színek világa, ahogy egyre mélyebbre ereszkedünk.',
    image: '/images/light-rays.png',
    readingLabel: 'Megfigyelés',
    body: [
      'A víz alatti fény az egyik leglátványosabb természeti jelenség, amellyel egy búvár találkozhat. A felszínen megtörő napsugarak hosszú, mozgó oszlopokká állnak össze, amelyek lassan táncolnak a mélységben.',
      'Ahogy egyre lejjebb haladunk, a színek fokozatosan eltűnnek. Először a vörös, majd a narancs, végül a sárga is elnyelődik, és minden kékes-zöldes árnyalatba burkolózik. Ez a fokozatos átmenet az egyik oka annak, hogy a mélység olyan különleges, szinte földöntúli atmoszférát áraszt.',
      'A fény játéka nem csupán esztétikai élmény. A láthatóság és a fényviszonyok megértése a biztonságos merülés alapvető része, és segít a tájékozódásban a víz alatti környezetben.',
    ],
  },
  {
    slug: 'a-legzes-muveszete',
    title: 'A légzés művészete a víz alatt',
    category: 'Technika',
    excerpt:
      'A lassú, tudatos légzés nem csupán a levegővel való takarékoskodás eszköze — a nyugalom és a kontroll alapja is.',
    image: '/images/freediver.png',
    readingLabel: 'Gyakorlat',
    body: [
      'A légzés az a folyamat, amely a búvárkodást összeköti a jógával és a meditációval. A felszín felett ritkán gondolunk rá, a víz alatt azonban mindennél fontosabbá válik.',
      'A lassú, mély és egyenletes légzés segít megőrizni a nyugalmat, csökkenti a levegőfogyasztást, és stabilizálja a lebegést. A kapkodó, felszínes légzés ezzel szemben gyorsan kimeríti a tartalékokat és növeli a feszültséget.',
      'A tudatos légzés gyakorlása már a szárazföldön elkezdődik. Az egyszerű légzőgyakorlatok megtanítják a testet a lassú ritmusra, amely aztán a víz alatt természetessé válik.',
    ],
  },
  {
    slug: 'lebegnimegtanulni',
    title: 'Lebegni megtanulni: a súlytalanság érzése',
    category: 'Technika',
    excerpt:
      'A tökéletes lebegés a búvárkodás egyik legnehezebben elsajátítható, mégis legkielégítőbb készsége.',
    image: '/images/diver-portrait.png',
    readingLabel: 'Készség',
    body: [
      'A lebegés kontrollja az a pont, ahol a kezdő búvárból tapasztalt merülő válik. A cél, hogy a test se ne süllyedjen, se ne emelkedjen, hanem mozdulatlanul lebegjen a vízben, mint egy gondolat.',
      'Ezt az állapotot a légzés és a felhajtóerő finom egyensúlya teremti meg. A tüdő apró tágulásai és összehúzódásai elegendőek a finomhangoláshoz, ha a búvár megtanulja érzékelni a testét.',
      'A jól beállított lebegés nem csupán elegáns — védi a víz alatti környezetet is, mert megakadályozza a fenék felkavarását és a véletlen érintkezést a természetes felületekkel.',
    ],
  },
  {
    slug: 'a-nyomas-titkai',
    title: 'A nyomás titkai: amit a test érez a mélyben',
    category: 'Tudomány',
    excerpt:
      'Minden tíz méter mélységgel egy újabb légköri nyomás nehezedik ránk. Arról, hogyan reagál erre a test.',
    image: '/images/bubbles.png',
    readingLabel: 'Tudomány',
    body: [
      'A nyomás a búvárkodás egyik legfontosabb fizikai tényezője. A felszínen egy légköri nyomás nehezedik ránk, és ez minden tíz méter mélységgel megduplázódik, megháromszorozódik, és így tovább.',
      'A test üregei — a fülek, az arcüregek és a tüdő — érzékenyek erre a változásra. Ezért kulcsfontosságú a nyomáskiegyenlítés technikájának elsajátítása, amely megóv a kellemetlenségtől és a sérülésektől.',
      'A nyomás megértése nem csupán elméleti tudás. A lassú, fokozatos ereszkedés és emelkedés, valamint a test jeleinek figyelése a biztonságos merülés alapja.',
    ],
  },
  {
    slug: 'tavak-rejtett-vilaga',
    title: 'A tavak rejtett víz alatti világa',
    category: 'Helyszín',
    excerpt:
      'Az édesvízi merülés sajátos hangulata — csendes, zöldes fényű környezet, ahol a felszín tükörré válik.',
    image: '/images/lake.png',
    readingLabel: 'Felfedezés',
    body: [
      'A tavak merülési környezete egészen más világ, mint a nyílt tenger. A víz gyakran zöldesebb, a fény lágyabb, és a csend még mélyebb. Az édesvízi merülés intim, befelé forduló élmény.',
      'A láthatóság a tavakban változó lehet, ami extra figyelmet és felkészülést igényel. A víz hőmérséklete a mélységgel élesen csökkenhet, ezért a megfelelő hővédelem elengedhetetlen.',
      'A tavi merülés megtanít a türelemre és a tájékozódásra. A felszín alatti táj — a süllyedt fák, a növényzet és a természetes formák — különös, szinte álomszerű környezetet teremt.',
    ],
  },
  {
    slug: 'elso-merules-elmenye',
    title: 'Az első merülés: amit senki sem mond el előre',
    category: 'Kezdőknek',
    excerpt:
      'Az első alkalom, amikor a fej a víz alá merül és a légzés folytatódik, megváltoztatja a víz alatti világhoz fűződő viszonyt.',
    image: '/images/diver-explore.png',
    readingLabel: 'Élmény',
    body: [
      'Az első merülés mindig emlékezetes marad. Az a pillanat, amikor a test először tapasztalja meg, hogy a víz alatt is lehet lélegezni, egyszerre felszabadító és szürreális.',
      'A kezdeti idegesség természetes. A test ösztönösen tiltakozik a szokatlan helyzet ellen, de néhány lélegzetvétel után átveszi az irányítást a nyugalom. Ekkor kezdődik az igazi felfedezés.',
      'Az első merülés titka a türelem és a bizalom — a felszereléssel, a környezettel és önmagunkkal szemben. A magabiztosság nem azonnal érkezik, hanem fokozatosan épül fel, merülésről merülésre.',
    ],
  },
  {
    slug: 'a-test-felkeszitese',
    title: 'A test felkészítése a mélységre',
    category: 'Felkészülés',
    excerpt:
      'A búvárkodás csendes, mégis igényes fizikai tevékenység. Arról, hogyan készíthető fel a test a víz alatti kihívásokra.',
    image: '/images/diver-portrait.png',
    readingLabel: 'Fitnesz',
    body: [
      'Bár a búvárkodás kívülről nyugodtnak tűnik, a test számára komoly feladat. Az állóképesség, a rugalmasság és a légzéskontroll mind hozzájárul a biztonságos és élvezetes merüléshez.',
      'A rendszeres légzőgyakorlatok növelik a tüdőkapacitást és a nyugalmat. A könnyű állóképességi edzés segít megőrizni az energiát a hosszabb merülések során, a nyújtás pedig megelőzi a görcsöket.',
      'A regeneráció ugyanolyan fontos, mint a felkészülés. A merülés utáni pihenés, a megfelelő hidratálás és a test jeleinek figyelése biztosítja a hosszú távú jólétet.',
    ],
  },
  {
    slug: 'viz-alatti-kommunikacio',
    title: 'A csend nyelve: víz alatti kommunikáció',
    category: 'Biztonság',
    excerpt:
      'A víz alatt a szavak elhalnak, de a kommunikáció nem szűnik meg. A kéz- és fényjelek világa.',
    image: '/images/diver-explore.png',
    readingLabel: 'Biztonság',
    body: [
      'A víz alatt a beszéd lehetetlen, ezért a búvárok egy egyetemes jelnyelvet használnak. Ezek az egyszerű, egyértelmű gesztusok az alapvető üzenetek átadására szolgálnak.',
      'A leggyakoribb jelek az „rendben vagyok", a „valami baj van", az „emelkedjünk" és a „nézd" jelentésűek. Ezek ismerete és gyakorlása minden búvár számára alapvető.',
      'A kommunikáció nem csak a biztonságot szolgálja, hanem az élmény megosztását is. Egy ránézés, egy mutatás elég, hogy a társak együtt csodálják meg a víz alatti pillanatokat.',
    ],
  },
  {
    slug: 'a-felhajtoero-egyensulya',
    title: 'A felhajtóerő finom egyensúlya',
    category: 'Technika',
    excerpt:
      'A felhajtóerő megértése a kontroll kulcsa — arról, hogyan tartja egyensúlyban a búvár önmagát a vízben.',
    image: '/images/bubbles.png',
    readingLabel: 'Technika',
    body: [
      'A felhajtóerő az az erő, amely a testet a felszín felé tolja. A búvár feladata, hogy ezt az erőt egyensúlyban tartsa a saját súlyával, így stabilan lebeghet bármilyen mélységben.',
      'Ez az egyensúly folyamatosan változik a mélységgel és a légzéssel. A tapasztalt búvár szinte ösztönösen igazítja a légzését, hogy fenntartsa a tökéletes lebegést.',
      'A felhajtóerő kontrollja időt és gyakorlást igényel, de amint elsajátítjuk, a víz alatti mozgás könnyeddé és elegánssá válik — a súlytalanság érzése maga.',
    ],
  },
  {
    slug: 'a-maszk-mogott',
    title: 'A maszk mögött: a tisztánlátás eszköze',
    category: 'Felszerelés',
    excerpt:
      'A maszk a búvár ablaka a víz alatti világra. Arról, hogyan formálja az élményt és miért fontos a megfelelő illeszkedés.',
    image: '/images/equipment.png',
    readingLabel: 'Felszerelés',
    body: [
      'A maszk talán a búvárkodás legszemélyesebb felszerelése. Légréteget hoz létre a szemek előtt, amely lehetővé teszi a tiszta látást a víz alatt, ahol egyébként minden elmosódna.',
      'A megfelelő illeszkedés kulcsfontosságú. A jól záró maszk megakadályozza a víz beszivárgását és kényelmessé teszi a merülést, míg a rosszul illeszkedő folyamatos zavart okoz.',
      'A maszkon keresztül látott világ keretet ad az élménynek. Ezen az ablakon át tárul fel a fény, a mozgás és a mélység — a víz alatti felfedezés minden részlete.',
    ],
  },
  {
    slug: 'uszonyok-es-mozgas',
    title: 'Uszonyok és a hatékony mozgás',
    category: 'Felszerelés',
    excerpt:
      'Az uszony a búvár hajtóműve. Arról, hogyan teszi lehetővé a kíméletes, energiatakarékos mozgást a vízben.',
    image: '/images/equipment.png',
    readingLabel: 'Felszerelés',
    body: [
      'Az uszony megsokszorozza a lábmozgás erejét, lehetővé téve a hatékony haladást a vízben. A megfelelő technikával a búvár minimális energiával is jelentős távolságot tehet meg.',
      'A lábtempó lassú, egyenletes és a csípőből indul — nem a térdből. Ez a technika takarékos és kíméletes a környezet felé, mert nem kavarja fel a fenéket.',
      'Az uszony megválasztása a merülés típusától és a környezettől függ. A megfelelő eszköz a mozgást szinte erőfeszítés nélkülivé teszi, és része lesz a test természetes mozgásának.',
    ],
  },
  {
    slug: 'a-melyseg-szinei',
    title: 'A mélység színei és a fény elnyelődése',
    category: 'Természet',
    excerpt:
      'Miért tűnik minden kéknek a mélyben? A színek és a fény fokozatos eltűnésének jelensége.',
    image: '/images/light-rays.png',
    readingLabel: 'Megfigyelés',
    body: [
      'A víz szelektíven nyeli el a fény különböző színeit. Már néhány méter mélységben eltűnik a vörös, és ahogy lejjebb haladunk, a paletta egyre szűkül, míg végül minden kékes árnyalatba burkolózik.',
      'Ez a jelenség magyarázza, miért tűnik a mélység olyan egységesen kéknek. A vörös tárgyak szürkének vagy feketének látszanak, hacsak nem világítjuk meg őket mesterséges fénnyel.',
      'A fény és a szín játéka a víz alatt egyedülálló esztétikai élmény, amely a mélységet titokzatos, álomszerű világgá változtatja.',
    ],
  },
  {
    slug: 'a-szabadtudos-merules',
    title: 'A szabadtüdős merülés egyszerűsége',
    category: 'Élmény',
    excerpt:
      'Egyetlen lélegzettel a mélybe — a szabadtüdős merülés a búvárkodás legtisztább, legközvetlenebb formája.',
    image: '/images/freediver.png',
    readingLabel: 'Bevezetés',
    body: [
      'A szabadtüdős merülés a felszerelés minimumára épül: egyetlen lélegzet, a test és a víz. Ez a forma a búvárkodás esszenciáját testesíti meg — a közvetlen kapcsolatot a vízzel.',
      'A szabadtüdős merülés alapja a nyugalom és a légzéskontroll. A pulzus lelassul, a test takarékos üzemmódra vált, és a búvár szinte eggyé válik a környezetével.',
      'Bár egyszerűnek tűnik, a szabadtüdős merülés mély tudatosságot és fokozatos felkészülést igényel. A türelem és a saját határok tisztelete a biztonság alapja.',
    ],
  },
  {
    slug: 'a-viz-alatti-tajekozodas',
    title: 'A víz alatti tájékozódás művészete',
    category: 'Biztonság',
    excerpt:
      'A mélyben a megszokott támpontok eltűnnek. Arról, hogyan tartja meg a búvár az irányérzékét a vízben.',
    image: '/images/depth.png',
    readingLabel: 'Biztonság',
    body: [
      'A víz alatti tájékozódás más érzékelést igényel, mint a szárazföldi. A megszokott vizuális támpontok hiányában a búvár természetes jelekre — a fény irányára, a fenék lejtésére, az áramlatokra — támaszkodik.',
      'A tudatos megfigyelés és a környezet folyamatos olvasása segít fenntartani az irányérzéket. A merülés előtti tájékozódás és a tervezés szintén kulcsfontosságú.',
      'A jó tájékozódási képesség nem csak biztonsági kérdés, hanem a nyugalom forrása is. Aki tudja, merre van, az fel tud oldódni a felfedezés élményében.',
    ],
  },
]
