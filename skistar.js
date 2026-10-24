export const skiStarCheck={"date":"24 oktober 2026","discount":0.2,"discountNote":"Alla SkiStar-priser är beräknade med 20 % på skidpaketet. Frakten rabatteras inte.","shippingUrl":"https://www.skistarshop.com/se/kundservice/frakt-och-leverans"};
export const skiStarOffers={
 "gt80": {
  "status": "available",
  "price": 8999,
  "shipping": 199,
  "length": 159,
  "version": "2026",
  "seasonLabel": "2024/25",
  "binding": "RSW 11 PR",
  "url": "https://www.skistarshop.com/se/utrustning/skidor/pistskidor/the-curv-gt-80-24-25-one-colour-812510",
  "stockNote": "159 cm · i lager",
  "versionNote": "SkiStar anger 2024/25 i länken. Bild och konstruktion matchar den äldre P09324-versionen från 2025/26. Senaste P09326 hittades inte hos SkiStar.",
  "evidenceUrl": "https://www.fischersports.jp/asset/pdf/book/fischer_alpine_2526_preliminary_version_sp.pdf",
  "checkedAt": "24 oktober 2026",
  "discountEligible": true
 },
 "addikt": {
  "status": "available",
  "price": 10499,
  "shipping": 199,
  "length": 163,
  "binding": "E MI12 GW 80mm",
  "url": "https://www.skistarshop.com/se/utrustning/skidor/pistskidor/e-addikt-pro-76-mi12-gw-f80-white-turquoise-orange-822525",
  "stockNote": "163 cm · i lager",
  "versionNote": "White/Turquoise/Orange med MI12 GW. SkiStar anger inte årsmodell. Bild och beskrivning matchar den refererade Addikt Pro 76-modellen.",
  "checkedAt": "24 oktober 2026",
  "discountEligible": true
 },
 "peregrine": {
  "status": "sold-out",
  "length": 162,
  "url": "https://www.skistarshop.com/se/utrustning/skidor/pistskidor/peregrine-80-24-25-one-colour-808438",
  "stockNote": "162 cm slut · 2024/25",
  "versionNote": "Äldre 2024/25-listning med Lowride 12 TCX. Alla skidlängder och bindningen är slut. Priset här är beräknat med 20 % rabatt och frakt.",
  "checkedAt": "24 oktober 2026",
  "price": 10999,
  "shipping": 199,
  "binding": "Lowride 12 TCX 24/25",
  "discountEligible": true,
  "seasonLabel": "2024/25"
 },
 "elan": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=primetime",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026"
 },
 "forza": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=forza",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026"
 },
 "mx74": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=mx74",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026"
 },
 "phoenix": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=phoenix",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026"
 },
 "gtx": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=curv",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026"
 },
 "q9": {
  "status": "wrong-length",
  "length": 160,
  "url": "https://www.skistarshop.com/se/utrustning/skidor/pistskidor/redster-q9-rvsk-s-i-12-gw-one-colour-830869",
  "stockNote": "160 cm saknas",
  "checkedAt": "24 oktober 2026",
  "versionNote": "Aktuell Q9 med I12 GW finns i 167, 174 och 181 cm, inte rekommenderade 160 cm. 20 % är inräknat här enligt din rabatt. SkiStars Prispressat-villkor undantar extra rabatt; rabatten är inte bekräftad i kassan.",
  "price": 9999,
  "shipping": 199,
  "binding": "P I 12 GW Black",
  "discountEligible": false,
  "discountUrl": "https://www.skistarshop.com/se/kampanjer/prispressat"
 },
 "rally": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=supershape%20e-rally",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026",
  "versionNote": "Ingen verifierad e-Rally 2026/27 i 163 cm hittades. Ingen rabatt eller frakt räknas fram för en saknad produkt."
 }
};
// The presentation always calculates Frida's 20%; availability and retailer terms stay separate.
export function skiStarDiscountApplies(offer){return ['available','sold-out','wrong-length'].includes(offer?.status)&&[offer.price,offer.shipping].every(Number.isFinite);}
export function skiStarListedTotal(offer){
 if(!['available','sold-out','wrong-length'].includes(offer?.status)||![offer.price,offer.shipping].every(Number.isFinite))return null;
 const discount=skiStarDiscountApplies(offer)?skiStarCheck.discount:0;
 return Math.round((offer.price*(1-discount)+offer.shipping)*100)/100;
}
export function skiStarTotal(offer){
 if(offer?.status!=='available'||![offer.price,offer.shipping,offer.length].every(Number.isFinite))return null;
 return skiStarListedTotal(offer);
}
export function skiStarMatch(ski){
 const offer=skiStarOffers[ski.id];
 if(skiStarTotal(offer)===null||offer.length!==ski.length)return null;
 return {offer,sameVersion:!offer.version||offer.version===ski.version};
}
export function lowestPriceSource(ski){
 const current=ski.offer?.inStock&&Number.isFinite(ski.totalSek)?ski.totalSek:null;
 const match=skiStarMatch(ski),alternative=match?.sameVersion?skiStarTotal(match.offer):null;
 if(current===null)return alternative===null?null:'skistar';
 return alternative!==null&&alternative<current?'skistar':'current';
}
