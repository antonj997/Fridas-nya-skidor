export function createChoiceArrival(){
 let animations=[],events,revision=0;
 function cancel(){revision++;events?.abort();events=null;animations.forEach(a=>a.cancel());animations=[];document.body.removeAttribute('data-choice-arrival');}
 async function play(origin){
  cancel();
  if(!origin?.width||!origin?.height||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const current=revision;
  const cards=[...document.querySelectorAll('[data-model-card]')].map(el=>({el,to:el.getBoundingClientRect()}));
  if(!cards.length)return;
  document.body.dataset.choiceArrival='true';events=new AbortController();
  for(const type of ['wheel','touchstart','resize'])window.addEventListener(type,cancel,{once:true,passive:true,signal:events.signal});
  window.addEventListener('keydown',event=>{if(event.key==='Escape')cancel();},{signal:events.signal});
  for(const [index,{el,to}] of cards.entries()){
   const offset=index-(cards.length-1)/2;
   const x=origin.x+origin.width/2-to.x-to.width/2+offset*3,y=origin.y+origin.height/2-to.y-to.height/2+index*2;
   const scale=Math.min(.92,origin.width/to.width,origin.height/to.height);
   const zIndex=String(cards.length-index);
   animations.push(el.animate([{transform:`translate(${x}px,${y}px) rotate(${offset*1.1}deg) scale(${scale})`,zIndex},{transform:'none',zIndex}],{duration:640,delay:index*45,easing:'cubic-bezier(.22,.75,.2,1)',fill:'both'}));
  }
  await Promise.all(animations.map(a=>a.finished.catch(()=>{})));
  if(current===revision)cancel();
 }
 return {play,cancel};
}
