document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});
const btn=document.querySelector('.download-btn');
if(btn) btn.addEventListener('click',()=>console.log('FLIX download started'));
