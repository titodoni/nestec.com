// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.section, .product, .card, .gallery, .contact, .hero-inner');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => io.observe(el));

// Subtle nav shadow on scroll
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(10,37,64,.06)' : 'none';
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
