const WHATSAPP = "5527999234176";
const INSTAGRAM = "https://instagram.com/bompracachorrovv";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    closeMenu(); // Garante fechar o menu se estiver no mobile
  }
}

function openWhatsApp(msg = "Olá! Vim pelo site") {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openInstagram() {
  window.open(INSTAGRAM, "_blank");
}

/* --- Lógica do Menu Mobile (Drawer) --- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
  
  // UX Pro: Trava o scroll da página quando o menu está aberto
  body.style.overflow = !isExpanded ? 'hidden' : '';
}

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('active');
  body.style.overflow = '';
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

// Fecha o menu ao clicar fora (opcional, mas recomendado)
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        closeMenu();
    }
});

/* --- Animação de Scroll (Intersection Observer) --- */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de aparecer totalmente
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Anima apenas uma vez para performance
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));