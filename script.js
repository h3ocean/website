const glow=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const progress=document.querySelector('.scroll-progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h)*100+'%'});

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}})});

const bottle=document.querySelector('.hero-bottle');
window.addEventListener('scroll',()=>{const y=window.scrollY; if(bottle){bottle.style.transform=`translateY(${Math.min(y*.08,60)}px) rotateY(${Math.sin(y*.004)*10}deg)`}});

document.querySelectorAll('.premium-card,.variant').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=e.clientX-r.left;const y=e.clientY-r.top;card.style.background=`radial-gradient(circle at ${x}px ${y}px, rgba(216,182,106,.16), rgba(255,255,255,.035) 42%)`});card.addEventListener('mouseleave',()=>{card.style.background='rgba(255,255,255,.035)'})});
