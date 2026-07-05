// ===== Loading screen =====
window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.add('loaded'), 900);
});

// ===== Splash text rotation =====
const splashes = [
  "Now loading: freshman year!",
  "5,000+ kids can't be wrong!",
  "Achievement unlocked: Gold Award!",
  "Bilingual! (en_US + es_ES)",
  "Debate mode: inevitability rejected.",
  "Crafted with FlutterFlow & Firebase!",
  "TAMU spawn point: Fall 2026"
];
const splashEl = document.getElementById('splash');
if (splashEl) splashEl.textContent = splashes[Math.floor(Math.random() * splashes.length)];

// ===== Hotbar navigation =====
const slots = document.querySelectorAll('#hotbar .slot');
const sections = document.querySelectorAll('main .screen');

function goTo(id){
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
window.goTo = goTo;

slots.forEach(slot => {
  slot.addEventListener('click', () => goTo(slot.dataset.target));
});

// number key fast travel
window.addEventListener('keydown', (e) => {
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= 9 && slots[n - 1]) {
    goTo(slots[n - 1].dataset.target);
  }
});

// active slot on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slots.forEach(s => s.classList.toggle('active', s.dataset.target === entry.target.id));
    }
  });
}, { threshold: 0.5 });
sections.forEach(sec => observer.observe(sec));

// ===== Achievement toast when Achievements section is first seen =====
let fired = false;
const achvSection = document.getElementById('achievements');
const toastHolder = document.getElementById('toast-holder');
function showToast(text){
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="t-icon"></span><span>${text}</span>`;
  toastHolder.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}
if (achvSection) {
  const achvObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !fired) {
        fired = true;
        showToast('Advancement Made: Scrolled to Achievements!');
      }
    });
  }, { threshold: 0.3 });
  achvObserver.observe(achvSection);
}

// ===== Falling particles (ambient block dust) =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function makeParticle(){
  return {
    x: Math.random() * canvas.width,
    y: -10,
    size: 3 + Math.random() * 3,
    speed: 0.3 + Math.random() * 0.6,
    color: Math.random() > 0.5 ? '#c9c9c9' : '#8B5A2B'
  };
}
for (let i = 0; i < 24; i++) {
  const p = makeParticle();
  p.y = Math.random() * canvas.height;
  particles.push(p);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > canvas.height) {
      Object.assign(p, makeParticle());
    }
  });
  if (!reduceMotion) requestAnimationFrame(animate);
}
if (!reduceMotion) animate();
