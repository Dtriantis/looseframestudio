// Mobile menu
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn?.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Close':'Menu'});

// Lightbox
const links=[...document.querySelectorAll('[data-lightbox]')],dlg=document.querySelector('.lightbox');
if(dlg&&links.length){
  const img=dlg.querySelector('img');let i=0,x0=null;
  const show=n=>{i=(n+links.length)%links.length;img.src=links[i].href;img.alt=links[i].querySelector('img').alt};
  links.forEach((a,n)=>a.addEventListener('click',e=>{e.preventDefault();show(n);dlg.showModal()}));
  dlg.querySelector('.lb-close').onclick=()=>dlg.close();
  dlg.querySelector('.lb-prev').onclick=()=>show(i-1);
  dlg.querySelector('.lb-next').onclick=()=>show(i+1);
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  dlg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
  dlg.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
  dlg.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)show(i+(d<0?1:-1));x0=null});
}
