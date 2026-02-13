// Show first button after 1.5s
setTimeout(()=>{ document.getElementById('startBtn').classList.remove('hidden'); },1500);

// Helper to show page
const showPage=id=>{
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Page navigation
document.getElementById('startBtn').onclick = ()=>showPage('page2');
document.getElementById('catYes').onclick = ()=>showPage('page3');
document.getElementById('catNo').onclick = ()=>showPage('page2b');
document.getElementById('makeHappy').onclick = ()=>showPage('page3');

// Envelope animation
const envelope=document.getElementById('envelope');
document.getElementById('openLetter').onclick = ()=>{
  envelope.classList.add('open');
  setTimeout(()=>showPage('page4'),800);
}

// Heart tap floating hearts
document.getElementById('heartTap').onclick = ()=>{
  showPage('page5');
  for(let i=0;i<15;i++){
    let h=document.createElement('div');
    h.className='heart-float';
    h.style.left=(Math.random()*60+20)+'%';
    h.style.top='80%';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),2000);
  }
}

// Valentine yes/no buttons
document.getElementById('valYes').onclick = ()=>showPage('page6');
document.getElementById('valNo').onclick = ()=>alert("Oh no! 😿 The cat is sad!");

// Confetti animation on final page
function confettiFall(){
  if(document.getElementById('page6').classList.contains('hidden')) return;
  let c=document.createElement('div'); 
  c.className='confetti';
  c.style.left=Math.random()*100+'vw';
  c.style.background=hsl(${Math.random()*360},100%,50%);
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),3000);
  requestAnimationFrame(confettiFall);
}
confettiFall();
