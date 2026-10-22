# Frida måste få hjälp att välja skidor

En minimalistisk, responsiv guide till åtta pistskidor, byggd för GitHub Pages utan externa ramverk.

## Funktioner

- Personlig start med snöbild, produktmontage och kort att svepa: Diggar, Dissar och Osäker. Tangentbord, knappar och ångra stöds.
- Dölj och återställ modeller. Val och dolda modeller sparas lokalt.

- Åtta perspektiv, inklusive sparade svep: mina val, testomdömen, svårighet, utvecklingspotential, bredd, radie och pris till Sverige.
- Egen adresserbar modellsida för varje skida, med verifierade modellbilder och fler vinklar där de finns.
- Fem subjektiva egenskapsmätare, separat åkarnivå och jämförelse av två modeller, inklusive skillnadsfilter.
- Rekommenderad skidlängd för varje modell; radier avser den rekommenderade längden.
- Priser, längdspecifikt lager och svensk skidfrakt kontrollerade 21 oktober 2026. Euroerbjudanden är preliminära där slutlig svensk moms inte kassaverifierats.
- Sparade jämförelseval i webbläsaren. Inga konton, analysverktyg eller externa sidberoenden.
- Tangentbordsstöd, tydliga fokustillstånd och minskad rörelse.

## Uppdatera

`data.js` innehåller modeller, rekommendationer, kategorier och sortering. `offers.js` innehåller daterade priser, lagerstatus, frakt och källor. `media.js` innehåller gallerier och bildkällor. Ändra datum och verifiering när fakta uppdateras; okända uppgifter får inte märkas som verifierade.

## Kör lokalt

Kör en statisk webbserver i projektmappen, exempelvis `python -m http.server 4174`, och öppna den lokala adressen. Direktlänkar till modeller använder hash-routing, exempelvis `#skida/gt80`, och fungerar vid omladdning på GitHub Pages.

## Källor och bilder

Alla test-, fakta-, pris- och bildkällor länkas på respektive modellsida. Produkt- och testbilder kommer från Elan Sports, SkiEssentials, Sport Conrad, XSPO och Weareskiers. Bildversionerna är kontrollerade mot refererad modell eller erbjudande. Fotograferad längd kan avvika. GT80 har ett villkorat årsval mellan25/26 och26/27; äldre159cm-erbjudandet är verifierat, nya159cm-erbjudandet är inte verifierat. Bakgrundsbilden av manchester är skapad med Imagegen; produktbilderna är källbilder. DM Serif Display distribueras under SIL Open Font License; se `assets/OFL.txt`.
