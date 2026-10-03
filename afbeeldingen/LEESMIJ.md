# Afbeeldingen

Hier komen de bitmaps: echte foto's en schermbeelden. Alles wat een diagram,
grafiek of icoon is, blijft HTML of inline SVG in de pagina zelf (zie het blok
`BEELD` onderaan `styles.css`): dat schaalt mee, laadt niets extra en blijft
automatisch in het palet.

De logo's staan bewust in de root, niet hier: ze horen bij de technische laag
(favicon, JSON-LD, deelkaart) en hun paden staan op elke pagina.

## Regels
- **Stock is toegestaan sinds 29 sep 2026**, op uitdrukkelijk verzoek en tegen
  blueprint §8 in. Twee grenzen blijven staan, en die zijn niet cosmetisch:
  een stockfoto staat nooit op een plek waar hij als Revered zelf gelezen kan
  worden (niet bij de founders, niet als "ons kantoor", niet als klant), en de
  alt-tekst beschrijft alleen wat er te zien is, zonder claim over wie het is.
  Daarom staan er op `over-revered.html` alleen de echte portretten van
  Yaiden en Djitza, nooit stock.
- **Formaat:** WebP, kwaliteit ~80. Bewaar het origineel buiten deze repo.
- **Breedte:** twee keer de maat waarop het getoond wordt (retina), niet meer.
  Portret 104px op de site, dus 208px breed opslaan.
- **Altijd `width` en `height` in de HTML.** Zonder die twee springt de pagina
  tijdens het laden (layout shift).
- **`loading="lazy"`** op alles behalve beeld dat boven de vouw staat.
- **Bestandsnaam:** kleine letters, koppelstreepjes, beschrijvend.
  `founder-yaiden.webp`, niet `IMG_4821.webp`.
- **Alt-tekst:** beschrijf wat er staat. Bij een portret de naam. Puur
  decoratief beeld krijgt `alt=""`, maar dat hebben we hier niet.

## De zeven foto's die er nu staan

| Bestand | Pagina | Bron (Pexels) |
| --- | --- | --- |
| `foto-gesprek.webp` | `index.html`, bij "De eerlijke meetlat" | [6893885](https://www.pexels.com/photo/6893885/) |
| `foto-werk.webp` | `meetmethode.html`, boven "Vijf vaste onderdelen" | [9222424](https://www.pexels.com/photo/9222424/) |
| `foto-notities.webp` | `citatie-log.html`, bij "Hoe je het leest" | [204511](https://www.pexels.com/photo/204511/) |
| `foto-bureau.webp` | `contact.html`, boven "Wat er daarna gebeurt" | [8850629](https://www.pexels.com/photo/8850629/) |
| `foto-onderzoek.webp` | `index.html`, onder "Eigen onderzoek" | [7682243](https://www.pexels.com/photo/7682243/) |
| `foto-scherm.webp` | `citatie-log.html`, bij "Achter één cijfer" | [5839454](https://www.pexels.com/photo/5839454/) |
| `foto-werkplek.webp` | `meetmethode.html`, bij "Wat de meting níet kan" | [34017206](https://www.pexels.com/photo/34017206/) |

Licentie: Pexels-licentie, vrij voor commercieel gebruik zonder naamsvermelding.
Bewaar deze tabel, want zonder herkomst kun je later niet aantonen dat het mag.

### De kleurbehandeling
Rauwe stock botst met crème en olijf: blauwe overhemden, gekleurde schermen,
koele ramen. Alle vier zijn daarom door dezelfde grading gehaald, zodat ze als
één set lezen in plaats van als vier losse plaatjes. Bak de behandeling in het
bestand, niet in CSS: een `filter` op een grote foto kost rendertijd bij elke
scroll en geeft op de telefoon zichtbare banding.

```
ffmpeg -i bron.jpg -vf "scale=1400:540:force_original_aspect_ratio=increase,\
crop=1400:540,hue=s=0.50,\
colorbalance=rs=.06:gs=.02:bs=-.06:rm=.04:bm=-.05:rh=.05:gh=.03:bh=-.06,\
eq=contrast=0.97:brightness=0.02" uit.png
cwebp -q 78 uit.png -o afbeeldingen/foto-naam.webp
```

`hue=s` is de enige knop die per foto verschilt: 0.38 tot 0.50, lager naarmate
er meer storende kleur in zit. Resultaat: 26 tot 38 KB per foto op 1400x540.
Bandformaat is altijd 1400x540 (`.figuur-band`, weergegeven op maximaal 860px).

## De twee soorten die nog ontbreken

### 1. Portretten van de founders (deels gedaan, 3 okt 2026)
`founder-yaiden.webp` en `founder-djitza.webp` (208×208, eigen foto's, vierkant
bijgesneden rond het gezicht, geen kleurbehandeling) staan op
`over-revered.html`, met `image` op de twee Person-nodes. Nog open: achternamen
en `sameAs` (LinkedIn) op de Person-nodes, en de portretten bij pijler 03 op
`index.html` en naast het formulier op `contact.html`.

### 2. Schermbeelden van echte AI-antwoorden
Op `index.html` staat nu een nagemaakt voorbeeld (`.antwoord`), expliciet
gelabeld als fictief. Zodra er een echte meting is met toestemming van de
klant, kan daar een echt schermbeeld naast of voor in de plaats:

```html
<figure class="figuur figuur-smal">
  <img class="beeld" src="afbeeldingen/antwoord-voorbeeld.webp"
       alt="Antwoord van [model] op de vraag [vraag], waarin drie aanbieders
            worden genoemd" width="680" height="420" loading="lazy">
  <figcaption>[model], gemeten op [datum]. Naam van de klant met toestemming
    getoond / geanonimiseerd.</figcaption>
</figure>
```

Altijd met model én meetdatum in het onderschrift, en nooit bijgesneden op een
manier die het antwoord gunstiger maakt dan het was. Zonder klantnaam is het
een geanonimiseerd voorbeeld en moet dat er ook bij staan.
