# Skidor till Frida

En minimalistisk, responsiv guide till tio pistskidor, byggd för GitHub Pages utan externa ramverk.

## Funktioner

- Personlig start med snöbild och stegvis välkomsttext första gången. En separat markering sparar att välkomsten har setts; giltiga äldre svep migreras. Återbesök öppnar Dina val eller den osvepta kortleken. Svep igen öppnar välkomsten och fortsätter till kortleken utan att rensa sparade val. Tangentbord, knappar och ångra stöds.
- Laddningen har vitt underlag tills rätt vy är monterad. Menyn är dold från ursprunglig HTML och blinkar inte fram före starten.
- Efter sista svepet öppnas Dina val direkt och korten delas ut från kortleken till sina kategorier med bibehållna proportioner. Escape eller scroll avbryter; minskad rörelse stöds.
- Dina val visar bara svepta skidor i gröna Diggar-, gula Osäker- och röda Dissar-avsnitt. Dölj modeller och återställ dem via ?-menyn, med svepen bevarade. Val sparas lokalt.

- Sex topplisteval: Antons topplista, testomdömen, svårighet, bredd, radie och Pris.
- Antons topplista har personliga motiveringar. GT 80, Addikt och GTX får guld-, silver- och bronston. Elan, Kästle och Blizzard delar sista platsen med Alternativ; de tekniska poängen hålls separat.
- Topplistan har jämnstora rader och samma första bild/beskärning som Dina val. Belag visas som bild två där det finns; förstoringsläget stöder svep vid 1× och panorering när bilden är inzoomad.
- Samma beskurna omslagsbild i swipekort, startmontage, Dina val, topplista, jämförelsens väljare, tabell och bildpar.
- Egen adresserbar modellsida för varje skida, med verifierade modellbilder och fler vinklar där de finns.
- Förstoringsbar bildvisare med nypzoom, panorering, bildbyte och tangentbordsstöd. Jämförelsens väljare har ingen zoom; tabellens bilder öppnar båda skidorna sida vid sida.
- Fem subjektiva egenskapsmätare, separat åkarnivå och jämförelse av två modeller, inklusive skillnadsfilter och fast namnrad med Byt skida. Skillnadsreglaget ligger ovanför tabellen och årsmodellen väljs med ett kompakt reglage.
- Om skidan från jämförelsen går tillbaka till samma jämförelse med båda valen kvar.
- Atomic Redster Q9 Revoshock S och Head Supershape e-Rally 2026/27 kompletterar de ursprungliga åtta. Q9 rekommenderas i 160 cm (12,6 m) och e-Rally i 163 cm (12,7 m). Bilder, paket, testkällor och priser kontrollerade 24 oktober 2026.
- Rekommenderad skidlängd för varje modell; radier avser den rekommenderade längden.
- Priser, längdspecifikt lager och svensk skidfrakt kontrollerade 21 oktober 2026. Euroerbjudanden är preliminära där slutlig svensk moms inte kassaverifierats.
- Alwas rekommendation på GTX och personliga prisnoteringar på Fischer. SkiStars utbud kontrollerat 24 oktober 2026: fyra listningar har pris. Alla listningar visas med beräknad personlig 20 % rabatt på skidpaketet, utan frakt. Lagerstatus och rabattvillkor behålls separat; slutsålda och saknade längder räknas inte som köpbara erbjudanden. Äldre GT80 skiljs från senaste versionen. Bara det billigaste jämförbara erbjudandet fetmarkeras.
- Sparade jämförelseval i webbläsaren. Inga konton, analysverktyg eller externa sidberoenden.
- Tangentbordsstöd, tydliga fokustillstånd och minskad rörelse.

## Uppdatera

`data.js` innehåller modeller, rekommendationer, kategorier och sortering. `offers.js` innehåller daterade priser, lagerstatus, frakt och källor. `media.js` innehåller gallerier och bildkällor. Ändra datum och verifiering när fakta uppdateras; okända uppgifter får inte märkas som verifierade.

## Kör lokalt

Kör en statisk webbserver i projektmappen, exempelvis `python -m http.server 4174`, och öppna den lokala adressen. Modellsidor använder hash-routing, exempelvis `#skida/gt80`. Första besöket börjar på välkomsten. Återbesök går till Dina val eller den osvepta kortleken; Svep igen spelar välkomsten på nytt. Inbyggd navigering öppnar undersidor utan omladdning. Sparade val bevaras separat i localStorage på samma enhet och webbläsare.

## Källor och bilder

Alla test-, fakta-, pris- och bildkällor länkas på respektive modellsida. Produktbilder kommer från Elan Sports, Fischer, Salomon, Rossignol/Look, Völkl, Kästle, Blizzard, Atomic och Head samt Skibahnhof, Sport Conrad, XSPO, Weareskiers, Länna Sport och VOSIsportSHOP. Fischer-gallerierna kompletteras med högupplösta testbilder från SkiEssentials. Varje galleribild länkar sin egen källa. Bildversionerna är kontrollerade mot refererad modell eller erbjudande. Fotograferad längd kan avvika. Q9 visar AASS03784 med I12 GW, e-Rally 313346 med PRD12 GW. GT80 visar 2026/27 som förval, med 2025/26 som alternativ. Båda finns i 159 cm; äldre erbjudandets total är verifierad, det nyare är preliminärt tills svensk slutmoms bekräftats. GT80-priserna kontrollerades 22 oktober 2026. Bakgrundsbilden av manchester är skapad med Imagegen; produktbilderna är källbilder. DM Serif Display distribueras under SIL Open Font License; se `assets/OFL.txt`.
