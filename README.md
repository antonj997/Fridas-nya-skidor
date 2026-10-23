# Skidor till Frida

En minimalistisk, responsiv guide till åtta pistskidor, byggd för GitHub Pages utan externa ramverk.

## Funktioner

- Personlig start med snöbild, produktmontage och kort att svepa: Diggar, Dissar och Osäker. Tangentbord, knappar och ångra stöds.
- Efter sista svepet öppnas Dina val direkt och korten delas ut från kortleken till sina kategorier med bibehållna proportioner. Escape eller scroll avbryter; minskad rörelse stöds.
- Dina val visar bara svepta skidor i gröna Diggar-, gula Osäker- och röda Dissar-avsnitt. Dölj och återställ modeller med svepen bevarade. Val sparas lokalt.

- Åtta perspektiv, inklusive sparade svep: mina val, testomdömen, svårighet, utvecklingspotential, bredd, radie och pris till Sverige.
- Egen adresserbar modellsida för varje skida, med verifierade modellbilder och fler vinklar där de finns.
- Förstoringsbar bildvisare med nypzoom, panorering, bildbyte och tangentbordsstöd. Jämförelsens väljare har ingen zoom; tabellens bilder öppnar båda skidorna sida vid sida.
- Fem subjektiva egenskapsmätare, separat åkarnivå och jämförelse av två modeller, inklusive skillnadsfilter och fast namnrad med Byt skida.
- Rekommenderad skidlängd för varje modell; radier avser den rekommenderade längden.
- Priser, längdspecifikt lager och svensk skidfrakt kontrollerade 21 oktober 2026. Euroerbjudanden är preliminära där slutlig svensk moms inte kassaverifierats.
- Sparade jämförelseval i webbläsaren. Inga konton, analysverktyg eller externa sidberoenden.
- Tangentbordsstöd, tydliga fokustillstånd och minskad rörelse.

## Uppdatera

`data.js` innehåller modeller, rekommendationer, kategorier och sortering. `offers.js` innehåller daterade priser, lagerstatus, frakt och källor. `media.js` innehåller gallerier och bildkällor. Ändra datum och verifiering när fakta uppdateras; okända uppgifter får inte märkas som verifierade.

## Kör lokalt

Kör en statisk webbserver i projektmappen, exempelvis `python -m http.server 4174`, och öppna den lokala adressen. Direktlänkar till modeller använder hash-routing, exempelvis `#skida/gt80`, och fungerar vid omladdning på GitHub Pages.

## Källor och bilder

Alla test-, fakta-, pris- och bildkällor länkas på respektive modellsida. Produktbilder kommer från Elan Sports, Fischer, Salomon, Rossignol/Look, Völkl, Kästle och Blizzard samt Skibahnhof, Sport Conrad, XSPO och Weareskiers. Fischer-gallerierna kompletteras med högupplösta testbilder från SkiEssentials. Varje galleribild länkar sin egen källa. Bildversionerna är kontrollerade mot refererad modell eller erbjudande. Fotograferad längd kan avvika. GT80 visar 2026/27 som förval, med 2025/26 som alternativ. Båda finns i 159 cm; äldre erbjudandets total är verifierad, det nyare är preliminärt tills svensk slutmoms bekräftats. GT80-priserna kontrollerades 22 oktober 2026. Bakgrundsbilden av manchester är skapad med Imagegen; produktbilderna är källbilder. DM Serif Display distribueras under SIL Open Font License; se `assets/OFL.txt`.
