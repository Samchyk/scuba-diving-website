import type { ContentBlock } from '@/components/content-sections'

export type TopicPage = {
  slug: string
  eyebrow: string
  title: string
  intro: string
  image: string
  blocks: ContentBlock[]
  highlights?: { label: string; value: string }[]
}

export const topicPages: Record<string, TopicPage> = {
  'merules-tipusai': {
    slug: 'merules-tipusai',
    eyebrow: 'Felfedezés / 01',
    title: 'A merülés típusai',
    intro:
      'A víz alá vezető utak sokfélék. A nyugodt rekreációs merüléstől a szabadtüdős alámerülésig — ismerd meg, melyik irány hív téged a mélység felé.',
    image: '/images/freediver.png',
    highlights: [
      { label: 'Rekreációs', value: 'Nyugodt felfedezés' },
      { label: 'Scuba', value: 'Légzőkészülékkel' },
      { label: 'Szabadtüdős', value: 'Egyetlen lélegzet' },
    ],
    blocks: [
      {
        heading: 'Rekreációs merülés',
        aside: 'A felfedezés öröme, sietség nélkül',
        body: [
          'A rekreációs merülés a búvárkodás legkönnyebben megközelíthető formája. Célja nem a teljesítmény, hanem az élmény: a víz alatti világ nyugodt, kíváncsi felfedezése.',
          'Ez a forma a felszín közeli mélységekre összpontosít, ahol a fény még bőséges és a környezet barátságos. Ideális azoknak, akik először találkoznak a víz alatti csenddel.',
        ],
      },
      {
        heading: 'A búvárkodás alapjai',
        aside: 'Légzőkészülékkel a mélyben',
        body: [
          'A légzőkészülékes merülés lehetővé teszi, hogy hosszabb időt töltsünk a víz alatt, miközben a felszereléssel folyamatosan lélegezhetünk. Ez nyitja meg a kapukat a mélyebb felfedezés felé.',
          'A technika elsajátítása fokozatos folyamat: a légzés, a lebegés és a felszerelés kezelése együtt teremti meg a magabiztosságot, amely a biztonságos merülés alapja.',
        ],
      },
      {
        heading: 'A szabadtüdős merülés bevezetése',
        aside: 'A test és a víz közvetlen kapcsolata',
        body: [
          'A szabadtüdős merülés a búvárkodás legtisztább formája: egyetlen lélegzettel ereszkedünk a mélybe, mindenféle légzőkészülék nélkül. Ez a forma a nyugalomról és a légzéskontrollról szól.',
          'A szabadtüdős merülés mély önismeretet igényel. A test megtanul takarékosan bánni az oxigénnel, a pulzus lelassul, és a búvár szinte eggyé válik a vízzel.',
        ],
      },
      {
        heading: 'Víz alatti felfedezés',
        aside: 'Kezdőbarát áttekintés',
        body: [
          'Bármelyik formát is választjuk, a víz alatti felfedezés közös eleme a kíváncsiság és a tisztelet — a környezet, a saját határaink és a társaink iránt.',
          'A kezdők számára a fokozatosság a kulcs. Minden merülés egy újabb lépés a magabiztosság felé, és minden alkalom új réteget tár fel a víz alatti világ szépségéből.',
        ],
      },
    ],
  },
  technika: {
    slug: 'technika',
    eyebrow: 'Tudás / 02',
    title: 'Technika és tanulás',
    intro:
      'A víz alatti magabiztosság nem a véletlen műve. Légzés, mozgás és lebegés — a finom készségek, amelyek a merülést művészetté emelik, kezdőknek és haladóknak egyaránt.',
    image: '/images/diver-explore.png',
    highlights: [
      { label: 'Légzés', value: 'A nyugalom alapja' },
      { label: 'Lebegés', value: 'A súlytalanság' },
      { label: 'Mozgás', value: 'Energiatakarékosan' },
    ],
    blocks: [
      {
        heading: 'A légzés alapjai',
        aside: 'Lassú, mély, egyenletes',
        body: [
          'A légzés a búvárkodás szíve. A lassú, tudatos légzés megőrzi a nyugalmat, csökkenti a levegőfogyasztást és stabilizálja a testet a vízben.',
          'A kapkodó légzés ezzel szemben gyorsan kimeríti a tartalékokat. A tudatos légzés gyakorlása már a szárazföldön elkezdődik, és a víz alatt válik természetessé.',
        ],
      },
      {
        heading: 'Víz alatti mozgás',
        aside: 'A csípőből induló lábtempó',
        body: [
          'A hatékony mozgás lassú, egyenletes lábtempóra épül, amely a csípőből indul, nem a térdből. Ez a technika takarékos és kíméletes a környezet felé.',
          'A felesleges kézmozdulatok kerülése energiát takarít meg és nyugodtabbá teszi a merülést. A test áramvonalas tartása csökkenti az ellenállást a vízben.',
        ],
      },
      {
        heading: 'A lebegés kontrollja',
        aside: 'A tapasztalat jele',
        body: [
          'A tökéletes lebegés az a pont, ahol a test se nem süllyed, se nem emelkedik. Ezt a légzés és a felhajtóerő finom egyensúlya teremti meg.',
          'A jól beállított lebegés nemcsak elegáns, hanem védi a víz alatti környezetet is, mert megakadályozza a fenék felkavarását és a véletlen érintkezést.',
        ],
      },
      {
        heading: 'Felkészülés és magabiztosság',
        aside: 'Kezdő és haladó útmutatás',
        body: [
          'A magabiztosság fokozatosan épül fel. Minden merülés egy újabb lehetőség a készségek finomítására és a saját reakciók megismerésére.',
          'A haladók számára a finomhangolás kerül előtérbe: az apró mozdulatok, a légzés ritmusa és a környezet olvasása teszi a merülést egyre könnyedebbé.',
        ],
      },
    ],
  },
  felszereles: {
    slug: 'felszereles',
    eyebrow: 'Felfedezés / 04',
    title: 'Felszerelés és alapok',
    intro:
      'A felszerelés a búvár és a víz közötti híd. Maszk, uszony, búvárruha és a légzőrendszer alapjai — minden, ami a biztonságos, kényelmes merüléshez szükséges. Kizárólag oktatási céllal.',
    image: '/images/equipment.png',
    highlights: [
      { label: 'Maszk', value: 'A tisztánlátás' },
      { label: 'Uszony', value: 'A hajtóerő' },
      { label: 'Búvárruha', value: 'A hővédelem' },
    ],
    blocks: [
      {
        heading: 'A maszk',
        aside: 'Ablak a víz alatti világra',
        body: [
          'A maszk légréteget hoz létre a szemek előtt, amely lehetővé teszi a tiszta látást a víz alatt. A megfelelő illeszkedés kulcsfontosságú a kényelem és a vízzáróság érdekében.',
          'A jól illeszkedő maszk szorítás nélkül zár, és nem enged be vizet. Ez az ablak a búvár legszemélyesebb kapcsolata a víz alatti környezettel.',
        ],
      },
      {
        heading: 'Az uszony',
        aside: 'A hatékony mozgás eszköze',
        body: [
          'Az uszony megsokszorozza a lábmozgás erejét, lehetővé téve a kíméletes, energiatakarékos haladást. A megfelelő uszony a merülés típusától és a környezettől függ.',
          'A jó uszonnyal a mozgás szinte erőfeszítés nélkülivé válik, és a test természetes mozgásának részévé lesz.',
        ],
      },
      {
        heading: 'A búvárruha',
        aside: 'A test melegének megőrzése',
        body: [
          'A búvárruha véd a víz hűtő hatásától és segít fenntartani a testhőmérsékletet. A megfelelő vastagság a víz hőmérsékletétől és a merülés hosszától függ.',
          'A jól megválasztott ruha kényelmes mozgást tesz lehetővé, miközben megóv a kihűléstől — ez különösen fontos a hidegebb, mélyebb vizekben.',
        ],
      },
      {
        heading: 'A légzőrendszer alapjai',
        aside: 'A biztonság szíve',
        body: [
          'A légzőrendszer teszi lehetővé a folyamatos légzést a víz alatt. Megértése és tisztelete a biztonságos merülés alapvető része — kizárólag oktatási céllal.',
          'A felszerelés rendszeres ellenőrzése és karbantartása elengedhetetlen. A búvárnak ismernie kell eszközei működését, hogy nyugodtan bízhasson bennük.',
        ],
      },
      {
        heading: 'Víz alatti biztonsági felszerelés',
        aside: 'Felkészülve a váratlanra',
        body: [
          'A biztonsági felszerelés a felkészültség jele. A megfelelő eszközök ismerete és használata növeli a magabiztosságot és csökkenti a kockázatot.',
          'A felszerelés azonban csak eszköz — a valódi biztonságot a tudás, a felkészülés és a higgadtság adja.',
        ],
      },
    ],
  },
  biztonsag: {
    slug: 'biztonsag',
    eyebrow: 'Tudás / 05',
    title: 'Biztonság és tudatosság',
    intro:
      'A mélység tiszteletet kíván. Nyomásviszonyok, víz alatti kommunikáció és a környezet megértése — a magabiztos, tudatos merülés alappillérei.',
    image: '/images/bubbles.png',
    highlights: [
      { label: 'Nyomás', value: 'Fokozatos átmenet' },
      { label: 'Kommunikáció', value: 'A csend nyelve' },
      { label: 'Tudatosság', value: 'A környezet olvasása' },
    ],
    blocks: [
      {
        heading: 'A nyomás alapjai',
        aside: 'Minden tíz méter számít',
        body: [
          'A nyomás minden tíz méter mélységgel jelentősen nő. A test üregei — a fülek, az arcüregek és a tüdő — érzékenyek erre a változásra.',
          'A nyomáskiegyenlítés technikájának elsajátítása megóv a kellemetlenségtől. A lassú, fokozatos ereszkedés és emelkedés a biztonság alapja.',
        ],
      },
      {
        heading: 'Biztonságos felkészülés',
        aside: 'A merülés a parton kezdődik',
        body: [
          'A biztonságos merülés a felkészüléssel kezdődik: a felszerelés ellenőrzése, a terv átgondolása és a saját állapot felmérése mind a parton történik.',
          'A jó felkészülés csökkenti a váratlan helyzetek esélyét, és nyugalmat ad, amely a víz alatt felbecsülhetetlen értékű.',
        ],
      },
      {
        heading: 'Víz alatti kommunikáció',
        aside: 'Gesztusok a szavak helyett',
        body: [
          'A víz alatt a beszéd lehetetlen, ezért a búvárok egyetemes jelnyelvet használnak. Az egyszerű, egyértelmű gesztusok az alapvető üzenetek átadására szolgálnak.',
          'A jelek ismerete és gyakorlása minden búvár számára alapvető. A kommunikáció nemcsak a biztonságot szolgálja, hanem az élmény megosztását is.',
        ],
      },
      {
        heading: 'Tudatosság és környezet',
        aside: 'A magabiztosság forrása',
        body: [
          'A környezet megértése — a fény, az áramlatok és a láthatóság olvasása — a magabiztos merülés alapja. A tudatos búvár figyel a jelekre és a saját testére.',
          'A környezet tisztelete egyúttal a természet védelmét is jelenti. A kíméletes merülés megőrzi a víz alatti világ érintetlen szépségét.',
        ],
      },
    ],
  },
  erdekessegek: {
    slug: 'erdekessegek',
    eyebrow: 'Tudás / 06',
    title: 'Érdekességek a búvárkodásról',
    intro:
      'A víz alatti világ tele van meglepetésekkel. Kuriózumok, a légzés és a nyomás titkai, valamint a tenger meglepő jelenségei — a felfedezés örömének apró szikrái.',
    image: '/images/light-rays.png',
    highlights: [
      { label: 'Színek', value: 'Fokozatos eltűnés' },
      { label: 'Hang', value: 'Gyorsabb a vízben' },
      { label: 'Idő', value: 'Másként telik' },
    ],
    blocks: [
      {
        heading: 'Víz alatti kuriózumok',
        aside: 'Amit a felszínen nem tapasztalunk',
        body: [
          'A víz alatt a hang közel ötször gyorsabban terjed, mint a levegőben. Ez az egyik oka annak, hogy a víz alatt nehéz meghatározni, honnan érkezik egy zaj.',
          'A felhajtóerő miatt a test súlytalannak érzi magát, ami a búvárkodás egyik legcsodálatosabb élménye — közel kerülünk az úszás és a repülés közötti érzéshez.',
        ],
      },
      {
        heading: 'A környezet jelenségei',
        aside: 'A fény és a szín játéka',
        body: [
          'A víz szelektíven nyeli el a fény színeit. Már néhány méter mélységben eltűnik a vörös, és minél lejjebb haladunk, annál inkább kékes árnyalatba burkolózik minden.',
          'Ezért tűnik a mélység olyan egységesen kéknek. A jelenség titokzatos, álomszerű atmoszférát teremt, amely a búvárkodás egyik legnagyobb vonzereje.',
        ],
      },
      {
        heading: 'Légzés és nyomás',
        aside: 'A test alkalmazkodása',
        body: [
          'A test meglepő módon alkalmazkodik a víz alatti környezethez. A lassú légzés és a nyugodt pulzus segíti a takarékos oxigénfelhasználást.',
          'A nyomás hatására a levegő összesűrűsödik, ami befolyásolja a légzést és a felhajtóerőt. Ezeknek a fizikai elveknek a megértése a tudatos merülés része.',
        ],
      },
      {
        heading: 'Szokatlan élmények',
        aside: 'A mélység ajándékai',
        body: [
          'A víz alatti csend, a fény tánca és a súlytalanság érzése olyan élményeket nyújt, amelyeket a felszínen lehetetlen átélni. Ezek a pillanatok teszik a búvárkodást felejthetetlenné.',
          'Sok búvár számára az idő is másként telik a víz alatt — a teljes jelenlét állapotában a percek nyúlnak, a sietség pedig eltűnik.',
        ],
      },
    ],
  },
  felkeszules: {
    slug: 'felkeszules',
    eyebrow: 'Tudás / 07',
    title: 'Fizikai felkészülés és regeneráció',
    intro:
      'A búvárkodás csendes, mégis igényes tevékenység. Légzőgyakorlatok, állóképesség, rugalmasság és regeneráció — a test felkészítése a mélység kihívásaira.',
    image: '/images/diver-portrait.png',
    highlights: [
      { label: 'Légzés', value: 'Tüdőkapacitás' },
      { label: 'Állóképesség', value: 'Tartós energia' },
      { label: 'Regeneráció', value: 'Pihenés és víz' },
    ],
    blocks: [
      {
        heading: 'Légzőgyakorlatok',
        aside: 'A tüdő felkészítése',
        body: [
          'A rendszeres légzőgyakorlatok növelik a tüdőkapacitást és a nyugalmat. A lassú, mély légzés gyakorlása a szárazföldön segít a víz alatti kontroll kialakításában.',
          'A légzéstudatosság nemcsak a teljesítményt javítja, hanem a stresszkezelést is — a nyugodt légzés a higgadtság kulcsa a víz alatt.',
        ],
      },
      {
        heading: 'Állóképesség',
        aside: 'Tartós, nyugodt erő',
        body: [
          'A könnyű állóképességi edzés segít megőrizni az energiát a hosszabb merülések során. A cél nem a robbanékony erő, hanem a tartós, egyenletes teljesítmény.',
          'Az úszás, a séta és a kíméletes kardió ideális alapot teremt a búvárkodáshoz, anélkül hogy túlterhelné a testet.',
        ],
      },
      {
        heading: 'Rugalmasság',
        aside: 'A görcsök megelőzése',
        body: [
          'A rendszeres nyújtás megelőzi a görcsöket és javítja a mozgás szabadságát a vízben. A rugalmas test könnyedebben mozog és kevésbé fárad.',
          'A lábak, a csípő és a hát nyújtása különösen fontos, hiszen ezek a területek dolgoznak a legtöbbet a merülés során.',
        ],
      },
      {
        heading: 'A regeneráció alapjai',
        aside: 'A pihenés ereje',
        body: [
          'A regeneráció ugyanolyan fontos, mint a felkészülés. A merülés utáni pihenés, a megfelelő hidratálás és a test jeleinek figyelése biztosítja a hosszú távú jólétet.',
          'A test meghallgatása az egyik legfontosabb készség. A megfelelő pihenés és a fokozatosság megóv a túlterheléstől, és fenntartja a búvárkodás örömét.',
        ],
      },
    ],
  },
  'kezdo-utmutato': {
    slug: 'kezdo-utmutato',
    eyebrow: 'Felfedezés / 08',
    title: 'Kezdő útmutató',
    intro:
      'Az első lépések a víz alatti világba. Az első merülés élménye, a felkészülés alapjai és gyakorlati ajánlások — minden, amit a kezdéshez tudni érdemes.',
    image: '/images/diver-explore.png',
    highlights: [
      { label: 'Türelem', value: 'Fokozatos haladás' },
      { label: 'Bizalom', value: 'Önmagunkban' },
      { label: 'Nyugalom', value: 'A légzés ereje' },
    ],
    blocks: [
      {
        heading: 'Az első merülés élménye',
        aside: 'Egyszerre felszabadító és szürreális',
        body: [
          'Az első merülés mindig emlékezetes marad. Az a pillanat, amikor a test először tapasztalja meg, hogy a víz alatt is lehet lélegezni, megváltoztatja a víz alatti világhoz fűződő viszonyt.',
          'A kezdeti idegesség természetes. Néhány lélegzetvétel után azonban átveszi az irányítást a nyugalom, és elkezdődik az igazi felfedezés.',
        ],
      },
      {
        heading: 'A felkészülés alapjai',
        aside: 'A magabiztosság fundamentuma',
        body: [
          'A felkészülés a búvárkodás biztonságos és élvezetes részévé teszi. A felszerelés megismerése, a légzés gyakorlása és a környezet megértése mind az alapokhoz tartozik.',
          'A fokozatosság kulcsfontosságú. Minden lépés egy újabb réteget tár fel, és a magabiztosság merülésről merülésre épül fel.',
        ],
      },
      {
        heading: 'A víz alatti mozgás megértése',
        aside: 'A súlytalanság elsajátítása',
        body: [
          'A víz alatti mozgás más logikát követ, mint a szárazföldi. A lassú, egyenletes mozdulatok és a légzés ritmusa együtt teremtik meg a kontrollt.',
          'A kezdők számára a leglényegesebb a türelem: a test idővel megtanulja a víz alatti mozgás természetes ritmusát.',
        ],
      },
      {
        heading: 'Gyakorlati ajánlások',
        aside: 'A nyugodt kezdéshez',
        body: [
          'Kezdj lassan, figyelj a légzésedre, és tiszteld a saját határaidat. A búvárkodás nem verseny — a cél a felfedezés öröme és a nyugalom.',
          'Minden merülés egy újabb tanulási lehetőség. A türelem, a bizalom és a kíváncsiság a leghűségesebb társaid az úton.',
        ],
      },
    ],
  },
  helyszinek: {
    slug: 'helyszinek',
    eyebrow: 'Felfedezés / 09',
    title: 'Helyszínek és környezetek',
    intro:
      'A víz alatti tájak végtelenül változatosak. Tavak, nyílt vizek és a természetes merülési feltételek — a víz alatti láthatóság és a környezet világa. Kizárólag oktatási céllal.',
    image: '/images/lake.png',
    highlights: [
      { label: 'Tavak', value: 'Csendes mélység' },
      { label: 'Nyílt víz', value: 'Tágas tér' },
      { label: 'Láthatóság', value: 'Változó feltételek' },
    ],
    blocks: [
      {
        heading: 'Tavak',
        aside: 'Az édesvíz intim világa',
        body: [
          'A tavak merülési környezete egészen más világ, mint a nyílt tenger. A víz gyakran zöldesebb, a fény lágyabb, és a csend még mélyebb — intim, befelé forduló élmény.',
          'A felszín alatti táj — a süllyedt fák, a növényzet és a természetes formák — különös, álomszerű környezetet teremt, amely türelmet és figyelmet kíván.',
        ],
      },
      {
        heading: 'Nyílt vizes környezetek',
        aside: 'A tágasság érzése',
        body: [
          'A nyílt vizek tágas, nyitott teret kínálnak, ahol a horizont elmosódik és a mélység végtelennek tűnik. Ez a környezet a szabadság érzését erősíti.',
          'A nyílt vízben a tájékozódás és a felkészülés különösen fontos, hiszen a megszokott támpontok hiányoznak.',
        ],
      },
      {
        heading: 'Víz alatti láthatóság',
        aside: 'A feltételek olvasása',
        body: [
          'A láthatóság a merülés egyik legfontosabb tényezője. A víz tisztasága, a fényviszonyok és a lebegő részecskék mind befolyásolják, mennyit látunk a mélyben.',
          'A láthatóság megértése és tisztelete a biztonságos merülés része. A változó feltételek extra figyelmet és felkészülést igényelnek.',
        ],
      },
      {
        heading: 'Természetes merülési feltételek',
        aside: 'A környezet ismerete',
        body: [
          'A természetes feltételek — a hőmérséklet, az áramlatok és a mélység — minden helyszínen mások. Ezek ismerete elengedhetetlen a felelős merüléshez.',
          'A környezet tisztelete és megértése nemcsak a biztonságot szolgálja, hanem a víz alatti világ megőrzését is. Kizárólag oktatási célú tájékoztatás.',
        ],
      },
    ],
  },
  tortenelem: {
    slug: 'tortenelem',
    eyebrow: 'Tudás / 03',
    title: 'A búvárkodás története',
    intro:
      'Az ember és a mélység kapcsolata évezredekre nyúlik vissza. A légzéstartó gyöngyhalászoktól a modern felfedezésig — egy történet a kíváncsiságról és a víz alatti világ meghódításáról.',
    image: '/images/depth.png',
    highlights: [
      { label: 'Ókor', value: 'Gyöngyhalászok' },
      { label: 'Úttörők', value: 'Az első eszközök' },
      { label: 'Ma', value: 'Modern felfedezés' },
    ],
    blocks: [
      {
        heading: 'Az ősi kezdetek',
        aside: 'Egyetlen lélegzet, évezredek óta',
        body: [
          'Az ember régóta vonzódik a víz alatti világhoz. Az ókori gyöngy- és szivacshalászok egyetlen lélegzettel ereszkedtek a mélybe, hogy kincseket hozzanak a felszínre.',
          'Ez a légzéstartó merülés évezredeken át a megélhetés és a felfedezés eszköze volt, jóval a modern felszerelés megjelenése előtt.',
        ],
      },
      {
        heading: 'Az úttörők kora',
        aside: 'A képzelet és a mérnöki tudás találkozása',
        body: [
          'Az évszázadok során feltalálók és álmodozók próbálták meghosszabbítani a víz alatt tölthető időt. Az első búvárharangok és kezdetleges légzőeszközök megnyitották az utat a mélyebb felfedezés felé.',
          'Ezek a korai kísérletek a kíváncsiság és a kitartás emlékművei — minden lépés közelebb vitte az embert a víz alatti világ szabad felfedezéséhez.',
        ],
      },
      {
        heading: 'A modern búvárkodás születése',
        aside: 'A szabadság új korszaka',
        body: [
          'A 20. század technikai fejlődése forradalmasította a búvárkodást. A hordozható légzőkészülék lehetővé tette, hogy az ember szabadon, hosszú ideig mozogjon a víz alatt.',
          'Ezzel a búvárkodás a kevesek kiváltságából a felfedezés és a tudomány elérhető eszközévé vált, és megnyitotta a tenger titkait a világ előtt.',
        ],
      },
      {
        heading: 'A felfedezés öröksége',
        aside: 'A kíváncsiság folytatódik',
        body: [
          'A búvárkodás története végső soron az emberi kíváncsiság története. Minden generáció új réteget tárt fel a víz alatti világ szépségéből és titkaiból.',
          'Ma a merülés egyszerre tudomány, sport és meditáció — a mélység iránti ősi vágy modern folytatása, amely továbbra is hív minket a víz alá.',
        ],
      },
    ],
  },
}

export const topicSlugs = Object.keys(topicPages)
