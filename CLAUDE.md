# Revered website (revered.nl)

Deze map is een git-repo: origin = https://github.com/reveredbusiness/Netlify (branch `main`).
Netlify (project `revered-nl`) deployt elke push naar `main` automatisch naar https://revered.nl.

## Wijzigingen live zetten
```
git add -A
git commit -m "korte beschrijving"
git push origin main
```
Na de push is de site binnen ±1 minuut bijgewerkt. Commit als Revered <reveredbusiness@gmail.com> (staat in de lokale git-config).

## Regels
- Statische site, geen build-stap: wat hier staat, staat live. Publish directory = root.
- Elke HTML-pagina heeft in `<head>` de GA4-snippet (G-Z3MCDM39H8, consent mode) en vlak voor `</body>` de cookiebanner. Nieuwe pagina: kopieer beide uit een bestaande pagina.
- Nieuwe indexeerbare pagina: ook toevoegen aan sitemap.xml (en kennisbank.html als het een gids is).
- Huisstijl en inhoudsregels: zie README.md. Prijzen staan op één plek als bron (merk/REVERED-diensten-en-prijzen.md, buiten deze repo).
- Doe geen `git push --force`.
- Navigatie en menuknop staan op elke pagina met een menu identiek in de HTML; `nav.js` hoort in de `<head>` zonder `defer`. Wijzig je het menu, wijzig het op alle pagina's tegelijk (zie README, "Regels die in de code verwerkt zitten").
- Geen `<option value="">` in formulieren: een leeg veld komt als lege regel in de notificatiemail, waardoor 'standaardoptie gekozen' en 'niet ingevuld' niet te onderscheiden zijn. Geef elke optie een echte waarde.
- Formulieren (contact.html = `proefmeting`, intake.html = `intake`) lopen via Netlify Forms: `name`, `data-netlify="true"`, het verborgen veld `form-name` en de honeypot `_gotcha` laten staan; het script post urlencoded naar het eigen pad. Nieuw formulier: dezelfde vier onderdelen met een unieke `name`. Form detection en e-mailnotificaties staan in het Netlify-dashboard (README, punt 4).
