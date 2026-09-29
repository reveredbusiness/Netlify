# Afbeeldingen

Hier komen de bitmaps: echte foto's en schermbeelden. Alles wat een diagram,
grafiek of icoon is, blijft HTML of inline SVG in de pagina zelf (zie het blok
`BEELD` onderaan `styles.css`): dat schaalt mee, laadt niets extra en blijft
automatisch in het palet.

De logo's staan bewust in de root, niet hier: ze horen bij de technische laag
(favicon, JSON-LD, deelkaart) en hun paden staan op elke pagina.

## Regels
- **Geen stock.** Blueprint §8: geen handenschuddende mensen. Eigen foto's of
  niets. Een stockfoto ondermijnt precies datgene wat de site verkoopt.
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

## De twee soorten die nog ontbreken

### 1. Portretten van de founders
Staat als beslissing 3 in `playbook-run/beslissingen.md` en als punt 3 in
`groeiplan/deel-03-website-conversie.md`. Nu staat er op
`over-revered.html` een beige cirkel met een letter erin.

Nodig: één zakelijk portret per founder, vierkant, 208×208px, effen muur of
crème achtergrond, daglicht, geen stock-pose. Zodra ze er zijn:

```html
<img class="beeld-portret" src="afbeeldingen/founder-yaiden.webp"
     alt="Yaiden [Achternaam]" width="104" height="104" loading="lazy">
```

Vervangt `<div class="foto" aria-hidden="true">Y</div>` in `over-revered.html`.
Voeg tegelijk `image` en `sameAs` (LinkedIn) toe aan de twee Person-nodes, en
de achternamen in de `founder`-array op alle pagina's met een Organization-node.
Doe daarna hetzelfde bij pijler 03 op `index.html` en naast het formulier op
`contact.html`, want daar staat de belofte "antwoord van een founder".

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
