# AGENTS.md — PT. Nostec Global Sinergi Website

## What this is
Single-page static corporate site (Indonesian). No build tools, no package manager, no tests.

## Source of truth
- **`index.html`** — markup structure, linked to external CSS/JS
- **`styles.css`** — all styles (extracted from inline, comments in Indonesian)
- **`script.js`** — all behavior (extracted from inline, comments in Indonesian)

## How to make changes
Edit the relevant file. There is no build step. Open `index.html` in a browser to verify.

## Architecture notes
- **Navbar**: sticky, toggles `.scrolled` class after 60px scroll
- **Mobile menu**: hamburger toggles `#navLinks` class `open`; swaps Lucide icon between `menu` and `x`
- **Scroll animations**: `.fade-in` elements get `.visible` via IntersectionObserver at threshold 0.15
- **Active nav highlighting**: IntersectionObserver with rootMargin `-40% 0px -55% 0px`
- **Tabs**: `.tab-btn` clicks toggle `.active` on buttons and corresponding `.tab-panel`
- **Lightbox**: Glassmorphism modal with `backdrop-filter: blur(20px)`. Only 6 brands remain (those with PDFs). `.brand-card` clicks open the WebP cover in `#lightbox` with brand title (from `img.alt`) at top. The image floats on transparent dark background (no white card). If `data-brochure-pdf` exists, a floating glassmorphism "Unduh Brosur (PDF)" button appears centered on the cover image. Staggered entrance animation. Escape key and backdrop click close it. Lightbox-close button is fixed at top-right of viewport.
- **Footer year**: `#year` is populated with `new Date().getFullYear()`

## Assets
- `images/` — brand logos (PNG), product photos (WebP), brochure covers (WebP) used by lightbox `data-brochure`
- `brosur/` — PDF brochures for download. Only 6 PDFs exist for 13 brands; missing ones will show placeholder in lightbox
  - Mapped brands: Rema Tip Top (TIPTO.pdf), Haltec (Haltec.pdf), Tech (TECH.pdf), Festo (FESTO.pdf), Bestpatch (bestpatch.pdf), Giti (GITI.pdf)

## CDN dependencies
- Lucide icons: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- Google Fonts (Inter): loaded via `<link>`
- Icons must be initialized with `lucide.createIcons()` after any DOM change that adds icon elements

## Deployment
Hosted on GitHub Pages (`titodoni.github.io/nestec.com/`). Push to the repo to deploy.
