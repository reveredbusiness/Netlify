# Revered website v2 · README

Volledige site in huisstijl v1.6 (kopletter Source Serif 4, tekstletter Inter, 19 sep 2026). Achtendertig indexeerbare pagina's + `intake.html` en `404.html` (noindex) + technische laag. Vervangt website v1 (smaragd/goud) volledig. Laatste playbook-run (audit, fixes, sprintplan, beslissingen): 25 aug 2026, zie `../playbook-run/`.

## Bestanden
- `index.html`: home (funnel: proefmeting → pakket of losse diensten → maandelijks uitvoeren & meten)
- `citatie-log.html`: productpagina met gelabeld voorbeeldrapport (3 maanden, incl. vlakke maand)
- `werkwijze-prijzen.html`: diensten & prijzen (17 aug 2026): drie stappen (proefmeting → pakket/losse diensten → uitvoeren & meten), pakketten Groei €499 / Autoriteit €899 / Marktleider €1.499 p/mnd bij 2 jaar, vergelijkingstabel, catalogus met 15 losse diensten, looptijd- en prijsverdediging, FAQ. Bron: `merk/REVERED-diensten-en-prijzen.md` (= Google Doc dienstenoverzicht). Nav-label overal 'Diensten & prijzen'.
- `meetmethode.html`: open kaart over de meting, incl. beperkingen
- `over-revered.html`: verhaal + founders
- `contact.html`: proefmeting-formulier (veld 'Heb je al een pakket op het oog?' met de drie pakketten; `?pakket=groei|autoriteit|marktleider` vanaf de prijspagina vult het voor). Het formulier staat in een kaart (`.pm-kaart`) met de geruststellingen (`.pm-zeker`) eronder; de kop gebruikt `.hero-formulier` en de sectie `.sectie-formulier`, die minder lucht houden dan op leespagina's zodat de eerste vraag op de telefoon boven de vouw staat
- `kennisbank.html`: index van de ongegate gidsen (S3 uit marktonderzoek §7)
- `gids-wat-is-geo.html`, `gids-seo-geo-een-systeem.html`, `gids-llms-txt.html`, `gids-hoe-ai-bronnen-kiest.html`: basisgidsen
- `gids-geo-voor-advocaten.html`, `gids-geo-voor-b2b-saas.html`, `gids-geo-voor-it-msp.html`, `gids-geo-voor-financiele-dienstverleners.html`: branchegidsen
- `dienst-*.html` (15): één pagina per dienst uit de catalogus, met prijs, pakketindeling, wat erin zit, hoe we meten en FAQ; de catalogus op de prijspagina linkt ernaar. Prijs en pakketindeling komen uit `merk/REVERED-diensten-en-prijzen.md`; scope-omschrijvingen: zie `playbook-run/beslissingen.md` punt 26
- `veelgestelde-vragen.html`: super-FAQ met alle branded vragen (33), antwoorden letterlijk gelijk aan de pagina's waar ze vandaan komen; wijzig je een antwoord, wijzig hem op beide plekken
- `privacy.html`: privacyverklaring (adres, KvK en verwerkers invullen bij livegang; cookiesectie bijwerken zodra er analytics is)
- `404.html`: foutpagina (noindex); bij de host als 404-document instellen
- `tool-of-bureau.html`: eerlijke vergelijking zonder toolnamen (S4)
- `gids-wat-kost-geo.html`, `gids-geo-bureau-kiezen.html`, `gids-zelf-meten-ai-zichtbaarheid.html`: bottom-funnel-gidsen voor het cluster "een GEO-bureau kiezen" (playbook-run 25 aug; prijzen en marktcijfers met bron en peildatum, geen aanbieders bij naam)
- `ai-info.html`: puur feitelijk feitenblad (C3; géén promotietaal en géén claim dat de pagina iets 'doet', dat is een rode lijn)
- `intake.html`: intakeformulier voor nieuwe klanten (noindex, geen canonical, niet in sitemap); hoort bij `../onboarding/`, staat hier omdat het `styles.css` en de logo's gebruikt
- `styles.css`: gedeelde huisstijl
- `nav.js`: de menuknop voor smalle schermen, gedeeld door alle pagina's met een menu. Staat bewust in de `<head>` zónder `defer`: het zet meteen `.js-nav` op `<html>` en pas met die klasse klapt het menu in, zodat je op de telefoon niet eerst het hele menu ziet staan en het daarna wegklapt. Zonder JavaScript blijft het menu uitgeklapt en zijn alle links bereikbaar.
- `logo-revered.svg` (gestapeld), `logo-revered-horizontaal.svg` (nav), `logo-revered-monogram.svg` (smal scherm), `favicon.svg`, `apple-touch-icon.png`, `logo-revered.png` (JSON-LD + social), `og-revered.png` (deelkaart)
- `llms.txt` (feitenblad, geen hefboom), `robots.txt`, `sitemap.xml`: technische laag
- JSON-LD op elke pagina: Organization, ProfessionalService, WebSite, Service+Offer, FAQPage, Article (gidsen), CollectionPage+ItemList (kennisbank), AboutPage, ContactPage, BreadcrumbList

## Vóór livegang invullen
1. **Domein**: overal staat `https://revered.nl`. Vervang als het domein anders wordt (canonical, JSON-LD, sitemap, llms.txt, robots.txt).
2. **KvK + adres**: nog niet op de site (bewust geen placeholder sinds 12 aug); zie `playbook-run/beslissingen.md` punt 4.
3. ~~**E-mail**~~: gedaan 19 sep 2026. `reveredbusiness@gmail.com` staat op de contactpagina, in de voettekst van alle pagina's, in de privacyverklaring (als contactpunt voor AVG-verzoeken), in `ai-info.html`, in `llms.txt` en in de `Organization`-node van de JSON-LD. Wijzig je het adres, wijzig het op al die plekken tegelijk. **Telefoon**: nog niet op de site; het blok staat uitgecommentarieerd in contact.html en gaat pas aan als er een nummer is waar iemand opneemt. Overweging: een adres op het eigen domein (bijvoorbeeld `hallo@revered.nl`, gratis door te sturen naar dezelfde Gmail) leest zakelijker dan gmail.com.
4. **Formulier-handler**: contact.html (formulier `proefmeting`) en intake.html (formulier `intake`) lopen sinds 27 aug 2026 via Netlify Forms; in de code is alles klaar. Eenmalig in het Netlify-dashboard van project `revered-nl`: (a) Forms → **Enable form detection** aanzetten en daarna één keer opnieuw deployen (Deploys → Trigger deploy), want Netlify registreert formulieren pas vanaf de eerstvolgende deploy na het aanzetten; (b) Configuration → Notifications → **Form submission notifications** → Add notification → Email, één per formulier, naar het adres uit `../playbook-run/beslissingen.md` punt 27. Inzendingen staan daarnaast altijd onder Forms in het dashboard. Testen: formulier invullen op de live site, inzending moet onder Forms verschijnen en de mail moet binnenkomen. Nieuw formulier: unieke `name`, `data-netlify="true"`, verborgen veld `form-name` met dezelfde naam, honeypot `netlify-honeypot="_gotcha"` plus het verborgen `_gotcha`-veld.
5. ~~**Logo**~~: gedaan 15 aug. Nav gebruikt `logo-revered-horizontaal.svg` (onder 520px het monogram), favicon en apple-touch-icon komen uit hetzelfde bestand, JSON-LD wijst naar `logo-revered.png`. Bronbestanden en varianten: `merk/logo/`.
6. **Eigen nulmeting**: zodra gedraaid → publiceren als "maand 0" en het fictieve voorbeeld op citatie-log.html vervangen/aanvullen met echte data (labels aanpassen!).
7. **Zelfattributie**: het veld "Hoe kwam je bij ons terecht?" in contact.html moet als vast veld in de lead-administratie komen; vraag het ook in elk gesprek (playbook §2.5). Let op: geen enkele `<option>` in `contact.html` mag `value=""` hebben. Netlify stuurt een leeg veld als lege regel mee, waardoor je in de notificatiemail niet kunt zien of iemand de standaardoptie koos of het veld oversloeg, en dat is precies wat dit veld moet meten. De standaardopties hebben daarom sinds 19 sep 2026 een echte waarde (`nog-geen-idee` bij pakket, de optietekst zelf bij herkomst).
8. **Zakelijke feiten in schema**: zodra KvK, adres, telefoon en oprichtingsdatum bestaan (e-mail staat er sinds 19 sep in): footer, ai-info én de Organization-node op alle 16 pagina's in één keer (`foundingDate`, `address`, `email`, `telephone`, `identifier`, `sameAs`).

## Regels die in de code verwerkt zitten (niet slopen)
- Navigatie: onder 800px vouwen de links én de CTA achter één menuknop, zodat de balk op elke breedte één regel blijft. Nieuwe pagina met menu: neem het hele `<nav>`-blok inclusief `.nav-toggle` en `.nav-menu` over én laad `nav.js` in de `<head>`. De `aria-controls` van de knop moet naar het `id="hoofdmenu"` van `.nav-menu` wijzen.
- Het kruimelpad is zelf ook een `<nav>` en zou dus de regel `nav{position:sticky}` opvangen; `.kruimels` zet dat expliciet terug op `static`. Verwijder dat niet, anders plakt het kruimelpad mee en valt het over de uitgeklapte menulade.
- Eén maanvorm per pagina (alleen waar een log-card de held is)
- Knoppen: altijd solide olijfgroen met crème tekst; beige nooit als knop
- Alle cijfers in IBM Plex Mono; elk marktcijfer met bron
- Prijzen staan op precies één plek als bron (`merk/REVERED-diensten-en-prijzen.md`) en worden herhaald in: werkwijze-prijzen.html (kaarten, tabel, catalogus, JSON-LD: OfferCatalog pakketten én OfferCatalog losse diensten), index.html (kicker + FAQ), contact.html (select), ai-info.html, tool-of-bureau.html, gids-wat-kost-geo.html (tabel, lijst, FAQ), veelgestelde-vragen.html (prijzen-groep), de 15 dienst-*.html-pagina's (kicker, prijssectie, JSON-LD Offer, FAQ), llms.txt (sectie Losse diensten), en `merk/REVERED-feitenblad.md`.
- Bedrijfsfeiten en de positioneringszin komen uit `merk/REVERED-feitenblad.md`; profielen buiten de site (LinkedIn, KvK, GBP) nemen die letterlijk over. Wijzig je een prijs, wijzig hem overal.
- Voorbeelddata is overal expliciet gelabeld als fictief, nooit stilletjes echt laten lijken
- De Organization-node (`description`, `knowsAbout`) is identiek in de JSON-LD van alle 16 pagina's en in de blockquote van `llms.txt`; wijzig hem overal tegelijk. De "Voor wie"-feiten in `ai-info.html` en `llms.txt` zijn identiek aan elkaar en aan `merk/REVERED-diensten-en-prijzen.md`
- `llms.txt` en `ai-info.html` zijn feitenbladen, geen GEO-hefboom: de site claimt nergens effect van llms.txt of schema-markup (playbook §12.1, §13.3, §13.5), ook niet in het fictieve voorbeeldrapport (winst alleen toeschrijven aan hefbomen die het playbook onderbouwt: openbare prijzen, pagina's op echte klantvragen, vermeldingen op bronnen die modellen al citeren)
- Geen HTML-entiteiten (`&euro;`, `&eacute;` ...) binnen `<script type="application/ld+json">`: scriptinhoud wordt niet gedecodeerd; gebruik UTF-8-tekens
- Verwachtingen over snelheid altijd in het twee-klokken-model (eigen site en feiten: weken; vermeldingen, reviews, autoriteit en Google-posities: maanden) en nooit met een verzonnen getal (playbook §10.7, §10.8)
- De meetmethode telt genoemd, gelinkt en aanbevolen apart en telt ze nooit op; de proefmeting is één meetmoment en heet daarom een momentopname (playbook §2.3, §12.2)
