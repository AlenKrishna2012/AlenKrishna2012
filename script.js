const theme=document.querySelector('.theme'),menu=document.querySelector('.menu'),nav=document.querySelector('nav');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='light')document.body.classList.add('light');
theme.textContent=document.body.classList.contains('light')?'☀':'☾';
theme.onclick=()=>{
 document.body.classList.toggle('light');
 const light=document.body.classList.contains('light');
 theme.textContent=light?'☀':'☾';
 localStorage.setItem('theme',light?'light':'dark');
};
menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.getElementById('year').textContent=new Date().getFullYear();