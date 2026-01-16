const WHATSAPP = "5527999234176";
const INSTAGRAM = "https://instagram.com/bompracachorrovv";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function openWhatsApp(msg = "Olá! Vim pelo site") {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openInstagram() {
  window.open(INSTAGRAM, "_blank");
}

/* reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }
});