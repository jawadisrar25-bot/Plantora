document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('featuredProducts');
  if(grid) grid.innerHTML=P.filter(x=>x.featured).slice(0,8).map(card).join('');

  // SINGLE FULL-BLEED HERO — no slide switching or blinking.
  const hero=document.getElementById('heroSlider');
  if(hero){
    function fitHeroToScreen(){
      const top=Math.max(0,hero.getBoundingClientRect().top);
      const available=Math.max(window.innerWidth<680?560:620,window.innerHeight-top);
      hero.style.height=`${available}px`;
      hero.style.minHeight='0';
    }
    fitHeroToScreen();
    window.addEventListener('resize',fitHeroToScreen,{passive:true});
  }

  // Collection slider: horizontal movement + controls + autoplay.
  const slides=[P.find(x=>x.id==='1024L'),P.find(x=>x.id==='1038'),P.find(x=>x.id==='1015'),P.find(x=>x.id==='1049')].filter(Boolean);
  const host=document.getElementById('slider');
  if(host&&slides.length){
    host.innerHTML=`<div class="collection-track">${slides.map((p,i)=>`<div class="slide"><img src="${p.image}" alt="${p.name}"><div class="slide-overlay"></div><div class="slide-copy"><div class="eyebrow">Plantora Collection</div><h2>${p.itemNo==='1015'?'Artificial Palms':'Statement Greenery'}</h2><p>Premium artificial plant · Item #${p.itemNo} · ${p.size}${p.price?` · ${money(p.price)}`:''}</p><a class="btn brown" href="product.html?id=${p.id}">View Product</a></div></div>`).join('')}</div>
    <button class="slider-arrow slider-prev" aria-label="Previous">‹</button><button class="slider-arrow slider-next" aria-label="Next">›</button>
    <div class="slider-dots">${slides.map((_,i)=>`<button class="slider-dot ${i===0?'active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div>`;
    const ctrack=host.querySelector('.collection-track');let n=0,ctimer;
    const cdots=[...host.querySelectorAll('.slider-dot')];
    const show=i=>{n=(i+slides.length)%slides.length;ctrack.style.transform=`translate3d(-${n*100}%,0,0)`;cdots.forEach((d,j)=>d.classList.toggle('active',j===n))};
    const cplay=()=>{clearInterval(ctimer);ctimer=setInterval(()=>show(n+1),4300)};
    host.querySelector('.slider-next').onclick=()=>{show(n+1);cplay()};
    host.querySelector('.slider-prev').onclick=()=>{show(n-1);cplay()};
    cdots.forEach(d=>d.onclick=()=>{show(+d.dataset.i);cplay()});
    host.addEventListener('mouseenter',()=>clearInterval(ctimer));host.addEventListener('mouseleave',cplay);cplay();
  }

  // Soft reveal animations across the page.
  const revealEls=document.querySelectorAll('.section-head,.category-card,.product-card,.split>* ,.profile-banner,.stat,.slider');
  revealEls.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',`${(i%6)*70}ms`)});
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -50px'});
    revealEls.forEach(el=>io.observe(el));
  }else revealEls.forEach(el=>el.classList.add('revealed'));
});
