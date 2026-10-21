# Frida måste få hjälp att välja skidor

En minimalistisk, responsiv guide till åtta pistskidor, byggd för GitHub Pages utan externa ramverk.

## Funktioner

- Sju perspektiv: Antons val, testomdömen, svårighet, utvecklingspotential, bredd, radie och pris till Sverige.
- Egen adresserbar modellsida för varje skida, med fyra källbelagda bilder.
- Sju subjektiva poängmätare och jämförelse av upp till fyra modeller, inklusive skillnadsfilter.
- Längdförslag för en åkare på 163 cm och 55–60 kg; radier avser den föreslagna längden.
- Priser, längdspecifikt lager och svensk skidfrakt kontrollerade 21 oktober 2026. Euroerbjudanden är preliminära där slutlig svensk moms inte kassaverifierats.
- Sparade jämförelseval i webbläsaren. Inga konton, analysverktyg eller externa sidberoenden.
- Tangentbordsstöd, tydliga fokustillstånd och minskad rörelse.

## Uppdatera

`data.js` innehåller modeller, rekommendationer, kategorier och sortering. `offers.js` innehåller daterade priser, lagerstatus, frakt och källor. `media.js` innehåller gallerier och bildkällor. Ändra datum och verifiering när fakta uppdateras; okända uppgifter får inte märkas som verifierade.

## Kör lokalt

Kör en statisk webbserver i projektmappen, exempelvis `python -m http.server 4174`, och öppna den lokala adressen. Direktlänkar till modeller använder hash-routing, exempelvis `#skida/gt80`, och fungerar vid omladdning på GitHub Pages.

## Källor och bilder

Alla test-, fakta-, pris- och bildkällor länkas på respektive modellsida. Produkt- och testbilder kommer från Elan Sports och SkiEssentials. Bildversioner kan skilja sig från erbjudandets årsmodell eller bindning och märks i galleriet. DM Serif Display distribueras under SIL Open Font License; se `assets/OFL.txt`.
