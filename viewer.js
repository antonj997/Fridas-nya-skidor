export function zoomTransform(current,nextScale,point,box,pan={x:0,y:0}){
 const scale=Math.min(4,Math.max(1,nextScale)),ratio=scale/current.scale;
 const limitX=Math.max(0,(box.imageWidth*scale-box.width)/2),limitY=Math.max(0,(box.imageHeight*scale-box.height)/2);
 const x=point.x-(point.x-current.x)*ratio+pan.x,y=point.y-(point.y-current.y)*ratio+pan.y;
 return {scale,x:Math.max(-limitX,Math.min(limitX,x))||0,y:Math.max(-limitY,Math.min(limitY,y))||0};
}
export function productImageFrame(naturalWidth,naturalHeight,bounds,width,height,horizontal=false){
 const [left,top,w,h]=bounds||[0,0,naturalWidth,naturalHeight],ratio=Math.min(width/(horizontal?h:w),height/(horizontal?w:h));
 const dx=naturalWidth/2-left-w/2,dy=naturalHeight/2-top-h/2;
 return {width:naturalWidth*ratio,height:naturalHeight*ratio,x:(horizontal?dy:dx)*ratio,y:(horizontal?-dx:dy)*ratio,rotate:horizontal?-90:0};
}
export function createImageViewer(){
 const dialog=document.querySelector('#image-viewer'),stage=dialog.querySelector('.viewer-stage'),frame=dialog.querySelector('.viewer-image-frame'),photo=dialog.querySelector('img');
 const title=dialog.querySelector('#viewer-title'),caption=dialog.querySelector('.viewer-caption'),level=dialog.querySelector('[data-image-action=reset]'),message=dialog.querySelector('.viewer-message'),help=dialog.querySelector('.viewer-help');
 let images=[],index=0,opener,modelName='',transform={scale:1,x:0,y:0},box={width:0,height:0,imageWidth:0,imageHeight:0},pointers=new Map(),gesture=null;
 const point=e=>{const rect=stage.getBoundingClientRect();return {x:e.clientX-rect.left-rect.width/2,y:e.clientY-rect.top-rect.height/2};};
 function draw(){frame.style.transform=`translate(${transform.x}px,${transform.y}px) scale(${transform.scale})`;level.textContent=Number(transform.scale.toFixed(1))+'×';stage.classList.toggle('is-zoomed',transform.scale>1);help.textContent=transform.scale>1?'Dra för att flytta. Nyp för att zooma.':images.length>1?'Svep för att byta bild. Nyp för att zooma.':'Nyp för att zooma.';dialog.querySelector('[data-image-action=in]').disabled=transform.scale>=4;dialog.querySelector('[data-image-action=out]').disabled=transform.scale<=1;}
 function fit(){
  if(!dialog.open||!photo.naturalWidth)return;
  const image=images[index],horizontal=image.orientation==='horizontal',bounds=image.viewBounds||[0,0,photo.naturalWidth,photo.naturalHeight];
  const [left,top,w,h]=bounds,fitted=productImageFrame(photo.naturalWidth,photo.naturalHeight,bounds,Math.max(1,stage.clientWidth-28),Math.max(1,stage.clientHeight-20),horizontal),ratio=fitted.width/photo.naturalWidth;
  box={width:stage.clientWidth,height:stage.clientHeight,imageWidth:(horizontal?h:w)*ratio,imageHeight:(horizontal?w:h)*ratio};
  photo.style.width=fitted.width+'px';photo.style.height=fitted.height+'px';photo.style.rotate='0deg';photo.style.transform=`translate(${fitted.x}px,${fitted.y}px) rotate(${fitted.rotate}deg)`;
  photo.style.clipPath=`inset(${top/photo.naturalHeight*100}% ${(photo.naturalWidth-left-w)/photo.naturalWidth*100}% ${(photo.naturalHeight-top-h)/photo.naturalHeight*100}% ${left/photo.naturalWidth*100}%)`;
  transform={scale:1,x:0,y:0};draw();
 }
 function show(next){index=(next+images.length)%images.length;pointers.clear();gesture=null;message.hidden=true;photo.hidden=false;photo.alt=modelName+' · '+images[index].label;caption.textContent=`${index+1} / ${images.length} · ${images[index].label}`;transform={scale:1,x:0,y:0};draw();photo.src=images[index].src;if(photo.complete&&photo.naturalWidth)fit();}
 function zoom(scale,at={x:0,y:0}){transform=zoomTransform(transform,scale,at,box);draw();}
 function open(s,start=0,from=document.activeElement){images=[...s.media.images];opener=from;modelName=s.brand+' '+s.name+' · '+(s.media.year?.split(' · ')[0]||s.season);title.textContent=modelName;dialog.querySelector('.viewer-navigation').hidden=images.length<2;if(!dialog.open){dialog.showModal();document.documentElement.classList.add('viewer-mode');}show(Math.min(images.length-1,Math.max(0,start)));}
 function close(){if(dialog.open)dialog.close();}
 photo.addEventListener('load',()=>{message.hidden=true;fit();});
 photo.addEventListener('error',()=>{photo.hidden=true;message.hidden=false;message.textContent='Bilden kunde inte laddas.';});
 dialog.addEventListener('close',()=>{document.documentElement.classList.remove('viewer-mode');pointers.clear();gesture=null;if(opener?.isConnected)opener.focus({preventScroll:true});});
 dialog.addEventListener('click',e=>{const action=e.target.closest('[data-image-action]')?.dataset.imageAction;if(!action)return;if(action==='close')close();if(action==='next')show(index+1);if(action==='prev')show(index-1);if(action==='in')zoom(transform.scale+.5);if(action==='out')zoom(transform.scale-.5);if(action==='reset')zoom(1);});
 stage.addEventListener('wheel',e=>{e.preventDefault();zoom(transform.scale*Math.exp(-e.deltaY*.002),point(e));},{passive:false});
 stage.addEventListener('dblclick',e=>{e.preventDefault();zoom(transform.scale>1?1:2,point(e));});
 stage.addEventListener('pointerdown',e=>{
  if(e.button!==0||pointers.size>=2)return;
  stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,point(e));const values=[...pointers.values()];
  if(values.length===2&&gesture?.type==='swipe'){transform={scale:1,x:0,y:0};draw();}
  gesture=values.length===2?{type:'pinch',start:{...transform},distance:Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y),mid:{x:(values[0].x+values[1].x)/2,y:(values[0].y+values[1].y)/2}}:{type:transform.scale===1&&images.length>1?'swipe':'pan',start:{...transform},origin:values[0]};
 });
 stage.addEventListener('pointermove',e=>{
  if(!pointers.has(e.pointerId)||!gesture)return;pointers.set(e.pointerId,point(e));const values=[...pointers.values()];
  if(gesture.type==='pinch'&&values.length===2){const mid={x:(values[0].x+values[1].x)/2,y:(values[0].y+values[1].y)/2},distance=Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y);transform=zoomTransform(gesture.start,gesture.start.scale*distance/Math.max(1,gesture.distance),gesture.mid,box,{x:mid.x-gesture.mid.x,y:mid.y-gesture.mid.y});}
  else if(gesture.type==='pan'&&values.length===1){transform=zoomTransform(gesture.start,gesture.start.scale,{x:0,y:0},box,{x:values[0].x-gesture.origin.x,y:values[0].y-gesture.origin.y});}
  else if(gesture.type==='swipe'&&values.length===1){const dx=values[0].x-gesture.origin.x,dy=values[0].y-gesture.origin.y;transform={scale:1,x:Math.abs(dx)>Math.abs(dy)?dx*.4:0,y:0};}
  draw();
 });
 const release=(e,cancelled=false)=>{
  if(!pointers.has(e.pointerId))return;
  const current=gesture,end=point(e);pointers.delete(e.pointerId);gesture=null;
  if(current?.type==='swipe'&&pointers.size===0&&transform.scale===1){
   const dx=end.x-current.origin.x,dy=end.y-current.origin.y,threshold=Math.max(48,Math.min(80,(box.width||stage.clientWidth)*.18));
   transform={scale:1,x:0,y:0};draw();
   if(!cancelled&&Math.abs(dx)>=threshold&&Math.abs(dx)>Math.abs(dy)*1.35)show(index+(dx<0?1:-1));
  }
  if(pointers.size===1)gesture={type:'pan',start:{...transform},origin:[...pointers.values()][0]};
 };
 stage.addEventListener('pointerup',e=>release(e));stage.addEventListener('pointercancel',e=>release(e,true));stage.addEventListener('lostpointercapture',e=>release(e,true));
 dialog.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','0'].includes(e.key)){e.preventDefault();e.stopPropagation();if(e.key==='+'||e.key==='=')zoom(transform.scale+.5);else if(e.key==='-')zoom(transform.scale-.5);else if(e.key==='0')zoom(1);else if(transform.scale>1){const pan={ArrowLeft:{x:50,y:0},ArrowRight:{x:-50,y:0},ArrowUp:{x:0,y:50},ArrowDown:{x:0,y:-50}}[e.key];transform=zoomTransform(transform,transform.scale,{x:0,y:0},box,pan);draw();}else if(e.key==='ArrowLeft')show(index-1);else if(e.key==='ArrowRight')show(index+1);}});
 new ResizeObserver(fit).observe(stage);
 return {open,close};
}
