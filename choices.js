export const choiceNames={like:'Diggar',unsure:'Osäker',dislike:'Dissar'};
export function cleanChoices(raw,ids){
 const valid=new Set(ids), votes=raw?.votes&&typeof raw.votes==='object'?raw.votes:{};
 return {votes:Object.fromEntries(Object.entries(votes).filter(([id,value])=>valid.has(id)&&Object.hasOwn(choiceNames,value))),hidden:[...new Set(Array.isArray(raw?.hidden)?raw.hidden.filter(id=>valid.has(id)):[])]};
}
export function voteFor(p,id,choice){const votes={...p.votes};if(choice===null)delete votes[id];else if(Object.hasOwn(choiceNames,choice))votes[id]=choice;return {...p,votes};}
export function hideSki(p,id,hidden){return {...p,hidden:hidden?[...new Set([...p.hidden,id])]:p.hidden.filter(x=>x!==id)};}
export function selectVisible(skis,p,{choice='all',hidden=false}={}){return skis.filter(s=>p.hidden.includes(s.id)===hidden&&(choice==='all'||p.votes[s.id]===choice));}
export function choiceOrder(p,id){return {like:0,unsure:1,dislike:3}[p.votes[id]]??2;}
export function swipeIntent(dx,dy,width=320){
 const threshold=Math.min(90,Math.max(55,width*.23));
 if(dy < -threshold&&Math.abs(dy)>Math.abs(dx)*1.1)return 'unsure';
 if(Math.abs(dx)>threshold&&Math.abs(dx)>Math.abs(dy)*.85)return dx>0?'like':'dislike';
 return null;
}
export function nextDeck(ids,p,again=false){return ids.filter(id=>!p.hidden.includes(id)&&(again||!p.votes[id]));}
