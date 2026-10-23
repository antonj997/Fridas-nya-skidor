export function createChoiceArrival(){
 let animations=[],events,revision=0;
 function cancel(){revision++;events?.abort();events=null;animations.forEach(a=>a.cancel());animations=[];document.body.removeAttribute('data-choice-arrival');}
 async function play(positions){
  cancel();
  if(!positions?.length||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const current=revision,origins=new Map(positions.map(p=>[p.id,p]));
  const cards=[...document.querySelectorAll('[data-model-card]')].map(el=>({el,to:el.getBoundingClientRect(),from:origins.get(el.dataset.modelCard)})).filter(card=>card.from);
  if(!cards.length)return;
  document.body.dataset.choiceArrival='true';events=new AbortController();
  for(const type of ['wheel','touchstart','resize'])window.addEventListener(type,cancel,{once:true,passive:true,signal:events.signal});
  for(const {el,to,from} of cards){
   const x=from.x+from.width/2-to.x-to.width/2,y=from.y+from.height/2-to.y-to.height/2;
   animations.push(el.animate([{transform:`translate(${x}px,${y}px) scale(${from.width/to.width},${from.height/to.height})`,opacity:.9},{transform:'none',opacity:1}],{duration:600,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'}));
  }
  for(const el of document.querySelectorAll('.choice-section-heading,.home-heading-wrap,.header'))animations.push(el.animate([{opacity:0},{opacity:1}],{duration:360,fill:'both',easing:'ease-out'}));
  await Promise.all(animations.map(a=>a.finished.catch(()=>{})));
  if(current===revision)cancel();
 }
 return {play,cancel};
}
