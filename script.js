/* ==========================================================
   PT. Nostec Global Sinergi — Perilaku
   ========================================================== */

// Inisialisasi ikon Lucide
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Perilaku scroll navbar
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Toggle navigasi mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    if (icon) {
      const isOpen = navLinks.classList.contains('open');
      icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  });
}

// Penyorotan navigasi aktif
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinkEls.forEach(l => l.classList.remove('active'));
      const link = document.querySelector('.nav-link[href="#' + e.target.id + '"]');
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

// Fade-in saat scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Pergantian tab
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
}
initTabs();

// Lightbox brosur — inisialisasi setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  try {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxSpinner = document.getElementById('lightboxSpinner');
    const lightboxPlaceholder = document.getElementById('lightboxPlaceholder');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxDownload = document.getElementById('lightboxDownload');
    const lightboxTitle = document.getElementById('lightboxTitle');
    if (!lightbox || !lightboxImg || !lightboxSpinner || !lightboxPlaceholder) {
      console.warn('[Lightbox] Elemen yang dibutuhkan tidak ditemukan. Melewati inisialisasi.');
      return;
    }
    let scrollY = 0;
    let scrollbarWidth = 0;

    function getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
    }

    function openLightbox(src, pdfUrl, brandName) {
      lightboxImg.src = src;
      lightboxImg.classList.remove('show');
      lightboxImg.style.display = 'none';
      lightboxSpinner.classList.add('active');
      lightboxPlaceholder.classList.remove('active');
      lightbox.classList.remove('closing');
      lightbox.classList.add('active');

      // Atur judul brand
      if (lightboxTitle) {
        lightboxTitle.textContent = brandName || '';
        lightboxTitle.classList.toggle('show', !!brandName);
      }

      // Atur tombol unduh PDF
      if (lightboxDownload) {
        if (pdfUrl) {
          lightboxDownload.href = pdfUrl;
          lightboxDownload.classList.add('show');
        } else {
          lightboxDownload.classList.remove('show');
          lightboxDownload.href = '';
        }
      }

      scrollY = window.scrollY;
      scrollbarWidth = getScrollbarWidth();
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox() {
      if (!lightbox.classList.contains('active')) return;
      lightbox.classList.add('closing');
      setTimeout(() => {
        lightbox.classList.remove('active', 'closing');
        lightboxImg.src = '';
        lightboxImg.classList.remove('show');
        lightboxImg.style.display = 'none';
        lightboxSpinner.classList.remove('active');
        lightboxPlaceholder.classList.remove('active');
        if (lightboxTitle) {
          lightboxTitle.textContent = '';
          lightboxTitle.classList.remove('show');
        }
        if (lightboxDownload) {
          lightboxDownload.classList.remove('show');
          lightboxDownload.href = '';
        }
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        window.scrollTo(0, scrollY);
      }, 250);
    }

    lightboxImg.addEventListener('load', () => {
      lightboxSpinner.classList.remove('active');
      lightboxImg.style.display = 'block';
      requestAnimationFrame(() => lightboxImg.classList.add('show'));
    });
    lightboxImg.addEventListener('error', () => {
      lightboxSpinner.classList.remove('active');
      lightboxPlaceholder.classList.add('active');
      if (lightboxDownload) lightboxDownload.classList.remove('show');
    });

    document.querySelectorAll('.brand-card').forEach(card => {
      card.addEventListener('click', () => {
        const brochure = card.dataset.brochure;
        const pdfUrl = card.dataset.brochurePdf;
        const brandImg = card.querySelector('img');
        const brandName = brandImg ? brandImg.alt : '';
        if (brochure) openLightbox(brochure, pdfUrl, brandName);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) closeLightbox();
    });

    // Jebakan fokus di dalam lightbox
    lightbox.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !lightbox.classList.contains('active')) return;
      const focusables = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  } catch (err) {
    console.error('[Lightbox] Kesalahan inisialisasi:', err);
  }
});

// Tahun footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
