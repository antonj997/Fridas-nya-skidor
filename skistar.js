export const skiStarCheck={date:'23 oktober 2026',discount:0.2,discountNote:'Beräknat med din rabatt på 20 %.',shippingUrl:'https://www.skistarshop.com/se/kundservice/frakt-och-leverans'};
const skiStarSearch=term=>'https://www.skistarshop.com/se/search?q='+encodeURIComponent(term);
export const skiStarOffers={
 gt80:{status:'available',price:8999,shipping:199,length:159,version:'2026',seasonLabel:'2024/25',binding:'RSW 11 PR',url:'https://www.skistarshop.com/se/utrustning/skidor/pistskidor/the-curv-gt-80-24-25-one-colour-812510',stockNote:'159 cm · i lager',versionNote:'SkiStar anger 2024/25 i länken. Bild och konstruktion matchar den äldre P09324-versionen från 2025/26. Senaste P09326 hittades inte hos SkiStar.',evidenceUrl:'https://www.fischersports.jp/asset/pdf/book/fischer_alpine_2526_preliminary_version_sp.pdf'},
 addikt:{status:'available',price:10499,shipping:199,length:163,binding:'MI12 GW 80 mm',url:'https://www.skistarshop.com/se/utrustning/skidor/pistskidor/e-addikt-pro-76-mi12-gw-f80-white-turquoise-orange-822525',stockNote:'163 cm · i lager',versionNote:'White/Turquoise/Orange med MI12 GW. SkiStar anger inte årsmodell. Bild och beskrivning matchar den refererade Addikt Pro 76-modellen.'},
 peregrine:{status:'sold-out',length:162,url:'https://www.skistarshop.com/se/utrustning/skidor/pistskidor/peregrine-80-24-25-one-colour-808438',stockNote:'Slut i 162 cm',versionNote:'Äldre 2024/25-listning. Alla längder var otillgängliga vid kontrollen.'},
 elan:{status:'not-found',url:skiStarSearch('primetime'),stockNote:'Exakt modell hittades inte'},
 forza:{status:'not-found',url:skiStarSearch('forza'),stockNote:'Exakt modell hittades inte'},
 mx74:{status:'not-found',url:skiStarSearch('mx74'),stockNote:'Exakt modell hittades inte'},
 phoenix:{status:'not-found',url:skiStarSearch('phoenix'),stockNote:'Exakt modell hittades inte'},
 gtx:{status:'not-found',url:skiStarSearch('curv'),stockNote:'Exakt modell hittades inte'}
};
export function skiStarTotal(offer){
 if(offer?.status!=='available'||![offer.price,offer.shipping,offer.length].every(Number.isFinite))return null;
 return Math.round((offer.price*(1-skiStarCheck.discount)+offer.shipping)*100)/100;
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
// BEGIN CURRENT SPORT ALTERNATIVES
Object.assign(skiStarOffers,{
 "q9": {
  "status": "wrong-length",
  "length": 160,
  "url": "https://www.skistarshop.com/se/utrustning/skidor/pistskidor/redster-q9-rvsk-s-i-12-gw-one-colour-830869",
  "stockNote": "160 cm saknas",
  "checkedAt": "24 oktober 2026",
  "versionNote": "Aktuell Q9 hittades bara i 167, 174 och 181 cm. Prispressat-markeringen begränsar dessutom rabatter. Ingen 20-procentstotal visas för en längd som inte finns att köpa."
 },
 "rally": {
  "status": "not-found",
  "url": "https://www.skistarshop.com/se/search?q=supershape%20e-rally",
  "stockNote": "Exakt modell hittades inte",
  "checkedAt": "24 oktober 2026",
  "versionNote": "Ingen verifierad e-Rally 2026/27 i 163 cm hittades. Ingen rabatt eller frakt räknas fram för en saknad produkt."
 }
});
// END CURRENT SPORT ALTERNATIVES
