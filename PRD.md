# PRD — PT. Nostec Global Sinergi Company Website

**Document Type:** Product Requirements Document  
**Project:** Company Profile Website — PT. Nostec Global Sinergi  
**Stack:** Vanilla HTML, CSS, JavaScript (single-file)  
**Status:** Ready for Development  
**Last Updated:** 2024

---

## 1. Project Overview

### 1.1 Background

PT. Nostec Global Sinergi adalah perusahaan pengadaan barang & jasa, OTR/TBR tyre, dan jasa maintenance alat berat pertambangan yang berlokasi di Kota Bekasi, Jawa Barat. Perusahaan membutuhkan website company profile yang merepresentasikan identitas dan portofolio bisnis mereka secara profesional kepada calon mitra perusahaan nasional dan instansi pemerintah.

### 1.2 Objective

Membangun satu halaman website company profile (single-page) yang modern dan minimalis menggunakan konten persis dari company profile PDF, dengan visual yang bersih dan navigasi yang mudah dipahami oleh calon klien B2B.

### 1.3 Target Audience

- Perusahaan nasional yang membutuhkan pengadaan ban alat berat
- Instansi pemerintah yang mencari vendor pengadaan barang & jasa
- Perusahaan pertambangan yang membutuhkan jasa maintenance

---

## 2. Technical Constraints

| Constraint | Detail |
|---|---|
| Output | Single file: `index.html` |
| Styling | All CSS in `<style>` tag |
| Scripting | All JS in `<script>` tag |
| Frameworks | None — pure vanilla only |
| External CDN | Google Fonts + Lucide Icons only |
| Images | All assets already in root folder (same directory as `index.html`) |
| Browser Support | Modern browsers (Chrome, Firefox, Safari, Edge) |
| Build Tool | None required |

### 2.1 Allowed External CDN

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

---

## 3. Image Assets

All images are in the root folder (same directory as `index.html`). Reference with relative paths only.

> **These filenames are verified from the actual extracted PDF assets. Do not rename or guess.**

### 3.1 Master Image Map

| Filename | Content (verified) | Used In |
|---|---|---|
| `Logo.jpg` | NOSTEC GLOBAL SINERGI company logo | Navbar, Footer |
| `img610.jpg` | Yellow dump truck (Kamaz) + Topu Wheel Rim inset — mountain backdrop | Hero background, Wheel Rim section |
| `img611.jpg` | Modern glass office building, green trees, golden hour sunlight | Tentang Kami, Visi & Misi, Struktur Manajemen (decorative bg) |
| `img615.jpg` | Giant OTR mining haul truck unloading, dramatic dust cloud | Data Perusahaan background, Hero (alt) |
| `img616.jpg` | City business district skyline at sunset | Tentang Kami right column background |

### 3.2 Brand Logos

**Important:** img49.jpg and img50.jpg are **composite** images containing multiple logos in one frame. The remaining brand images (img48, img51–img58) are individual logos. Use individual logos when displaying brand grid cards. Use composites as a fallback or in a "gallery" row.

| Filename | Brand | Type |
|---|---|---|
| `img48.jpg` | REMA TIP TOP | Individual logo |
| `img51.jpg` | TDL | Individual logo |
| `img52.jpg` | HALTEC CORPORATION | Individual logo |
| `img53.jpg` | FESTO | Individual logo |
| `img54.jpg` | TOPU STEEL RIM | Individual logo |
| `img55.jpg` | TECH | Individual logo |
| `img56.jpg` | BESTPATCH | Individual logo |
| `img57.jpg` | GITI | Individual logo |
| `img58.jpg` | GAJAH TUNGGAL | Individual logo |
| `img49.jpg` | Composite: Rema Tip Top, TDL, Haltec, Tech, Festo, Bestpatch | 6-logo composite image |
| `img50.jpg` | Composite: Mikalor, Topy, Topu Steel Rim, Giti, Gajah Tunggal, Benchmark, Leao Tyres | 7-logo composite image |

> **Note:** Mikalor, Topy, Benchmark, and Leao Tyres logos do NOT exist as standalone files — they only appear inside `img50.jpg`. Do not fabricate filenames for them.

### 3.3 Tire Services Gallery

| Filename | Content |
|---|---|
| `img65.jpg` | Tire technician inspection on-site (hexagonal crop, field) |
| `img66.jpg` | Two technicians working on large OTR tire |
| `img67.jpg` | Technician inflating/checking tire pressure |
| `img68.jpg` | Close-up tire repair work |
| `img69.jpg` | Technician with tire mounting tool |
| `img70.jpg` | Tire removal/demounting with hand tool |
| `img603.jpg` | Giti-branded white truck with large OTR tire showcase |

### 3.4 Product Tire

| Filename | Content |
|---|---|
| `img74.jpg` | GITI GAO802 / GAO802M — OTR off-road tire product shot |
| `img82.jpg` | GITI GAO822 — wide product/spec banner image |
| `img83.jpg` | Giti branded truck (small, secondary visual on GAO822 page) |
| `img78.jpg` | YINGBA 11.00R20 YB607 — premium radial truck tire |

### 3.5 Product Alternator

| Filename | Content |
|---|---|
| `img87.jpg` | WAI starter and alternator units — product photography |
| `img88.jpg` | WAI / URSA brand banner with Komatsu excavator background |

### 3.6 Wheel Rim

| Filename | Content |
|---|---|
| `img92.jpg` | Dark painted steel wheel rim — face view |
| `img93.jpg` | Silver steel wheel rim — face view |
| `img94.jpg` | Steel wheel rim — side profile view |
| `img98.jpg` | TOPU dump truck showcase with Topu Wheel Rim inset (from Jerolin) |
| `img610.jpg` | *(also usable here)* Yellow truck + Topu Wheel Rim composite |

### 3.7 Equipment Services

| Filename | Content |
|---|---|
| `img102.jpg` | Field maintenance — heavy equipment crane lift (2019-02-03) |
| `img103.jpg` | Field maintenance — workers on top of haul truck (2019-04-05) |
| `img104.jpg` | Field maintenance — large dump truck side view (2019-02-05) |
| `img105.jpg` | Field maintenance — truck tipping/lifting operation (2019-02-11) |

---

## 4. Design System

### 4.1 Color Palette

```css
:root {
  --navy:        #1B3A6B;   /* Primary — headers, navbar, dark sections */
  --navy-dark:   #0D2550;   /* Hero background deep */
  --navy-footer: #0D1F3C;   /* Footer background */
  --blue:        #2F6FBF;   /* Accent — buttons, dividers, highlights */
  --light-blue:  #A8C8E8;   /* Decorative shapes, subtle backgrounds */
  --off-white:   #F5F8FC;   /* Alternating section background */
  --white:       #FFFFFF;
  --text:        #1A1A2E;   /* Body text */
  --muted:       #6B7280;   /* Labels, secondary text */
  --border:      #E2EAF4;   /* Card borders, dividers */
}
```

### 4.2 Typography

```css
font-family: 'Inter', sans-serif;

/* Scale */
--fs-xs:   0.75rem;   /* 12px — labels */
--fs-sm:   0.875rem;  /* 14px — small body */
--fs-base: 1rem;      /* 16px — body */
--fs-lg:   1.125rem;  /* 18px — lead text */
--fs-xl:   1.25rem;   /* 20px — card titles */
--fs-2xl:  1.5rem;    /* 24px — section subtitles */
--fs-3xl:  2rem;      /* 32px — section titles */
--fs-4xl:  2.5rem;    /* 40px — hero subtitle */
--fs-5xl:  3.5rem;    /* 56px — hero title */
```

### 4.3 Spacing

```css
--space-xs:  0.5rem;    /* 8px */
--space-sm:  1rem;      /* 16px */
--space-md:  1.5rem;    /* 24px */
--space-lg:  2rem;      /* 32px */
--space-xl:  3rem;      /* 48px */
--space-2xl: 5rem;      /* 80px — section padding */
--space-3xl: 7rem;      /* 112px — hero padding */
```

### 4.4 Component Tokens

```css
--radius-sm:  6px;
--radius-md:  12px;
--radius-lg:  16px;
--shadow-sm:  0 1px 4px rgba(0,0,0,0.06);
--shadow-md:  0 2px 16px rgba(0,0,0,0.08);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.12);
--transition: 0.25s ease;
```

### 4.5 Section Layout Pattern

```
Section padding:  padding: var(--space-2xl) 0;
Container:        max-width: 1140px; margin: 0 auto; padding: 0 var(--space-md);
Title structure:  <h2 class="section-title"> + <div class="divider">
Alternating bg:   white → off-white → white → off-white ...
```

---

## 5. Site Structure & Sections

### 5.1 Navigation (Sticky)

**Behavior:**
- Position: `sticky; top: 0; z-index: 100`
- Default state: transparent background, white text
- Scrolled state (scrollY > 60): white background + `box-shadow: var(--shadow-md)`
- Class toggle: JS adds `.scrolled` to `<nav>` on scroll
- Mobile: hamburger icon (Lucide `menu`), toggles `.nav-open` class on nav

**Logo (text-based):**
```
NOSTEC  |  GLOBAL SINERGI
[bold navy]  [small caps, --blue]
```

**Nav Links:**
```
Beranda | Tentang Kami | Visi & Misi | Produk | Layanan | Kontak
```
Each link scrolls to: `#beranda | #tentang | #visi-misi | #produk | #layanan | #kontak`

Active link: underline with `--blue` color, updated via IntersectionObserver

---

### 5.2 Hero Section — `#beranda`

**Layout:** Full viewport height (`100vh`), centered content  
**Background:**
- Gradient: `linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 60%, #1e4d8c 100%)`
- Decorative geometric shapes: CSS `clip-path` polygons in `var(--light-blue)` at opacity 0.08–0.12, positioned absolute

**Background image:** `img615.jpg` (giant mining haul truck) as pseudo-element overlay at 15% opacity, `object-fit: cover`

**Content (centered, max-width 700px):**

```
[Badge pill]
"Pengadaan Barang & Jasa • Bekasi, Jawa Barat"
bg: rgba(255,255,255,0.1), color: white, border-radius: 999px

[H1]
"PT. NOSTEC"
font-size: var(--fs-5xl), font-weight: 800, color: white

[H2]  
"GLOBAL SINERGI"
font-size: var(--fs-4xl), font-weight: 400, color: var(--light-blue)

[Paragraph]
"Penyedia pengadaan barang dan jasa, OTR & TBR Tyre, serta Jasa Maintenance 
Alat Berat Pertambangan yang terpercaya di Kota Bekasi."
color: rgba(255,255,255,0.85), font-size: var(--fs-lg)

[CTA Button]
"Hubungi Kami →"
href="#kontak", bg: var(--blue), color: white, padding: 14px 32px
```

**Scroll indicator:** Chevron-down icon (Lucide), centered at bottom, CSS bounce animation

---

### 5.3 Tentang Kami — `#tentang`

**BG:** White  
**Layout:** 2-column (60/40 split) on desktop, stacked on mobile

**LEFT — Body text (exact copy):**

> PT. NOSTEC GLOBAL SINERGI merupakan salah satu perusahaan di Kota Bekasi yang bergerak di bidang pengadaan barang dan jasa, OTR dan TBR Tyre serta tool tyre dan Material repair tyre.

> PT. NOSTEC GLOBAL SINERGI juga bergerak dalam bidang Jasa Maintenance alat berat pertambangan dan Maintenance Tire (TMS).

> Perusahaan kami menawarkan kerja sama dengan berbagai perusahaan nasional maupun instansi pemerintah berdasarkan bidang keahlian kami.

> Dari beberapa pengalaman kerjasama yang telah kami bangun dapat menjadi salah satu pertimbangan memberikan kepercayaan kepada perusahaan kami.

> *Hormat kami, PT. NOSTEC GLOBAL SINERGI*

**RIGHT — 3 stat/info cards (stacked vertically):**

| Icon (Lucide) | Label | Value |
|---|---|---|
| `briefcase` | Bidang Usaha | Pengadaan Barang & Jasa |
| `wrench` | Spesialisasi | OTR, TBR Tyre & Maintenance |
| `map-pin` | Domisili | Kota Bekasi, Jawa Barat |

Card style: white bg, `border-left: 4px solid var(--blue)`, border-radius md, shadow sm

**Background image:** `img616.jpg` (city skyline) as decorative element — clipped into a diagonal shape on the right side, placed behind the stat cards at low opacity

---

### 5.4 Data Perusahaan — `#data`

**BG:** `var(--off-white)`  
**Layout:** 2-column grid on desktop, 1 column on mobile

**Info cards — each card has:**
- Label (small, `var(--muted)`)
- Value (bold, `var(--text)`)
- Left border: `4px solid var(--blue)`
- BG: white, border-radius md, shadow sm

**Card data (exact):**

| Label | Value |
|---|---|
| Nama Perusahaan | PT. NOSTEC GLOBAL SINERGI |
| Alamat Perusahaan | Jl. Raya Ujung Aspal Terusan AL, No. 107, Jatiranggon, Jatisampurna, Kota Bekasi, Jawa Barat |
| Email | nostecsinergi@gmail.com |
| Akte Notaris Pendirian | 17 / 28-03-2023 |
| NPWP Perusahaan | 40.842.493.5-447.000 |
| Rekening Bank | 8733207777 — BCA (Cabang Metro Jababeka) |
| Bidang Usaha | Pengadaan Barang & Jasa; Jasa Maintenance Alat Berat Pertambangan dan Maintenance Tire (TMS) |

**Decorative:** `img615.jpg` as section background at 4% opacity

---

### 5.5 Visi & Misi — `#visi-misi`

**BG:** White  
**Layout:** 2 equal columns side-by-side (stacked on mobile)

**VISI Card:**
- Top bar: `background: var(--navy)`, height 6px, border-radius top
- Icon: Lucide `eye`
- Title: "Visi"
- Text: *"Menjadi penyedia pengadaan Barang dan Jasa yang Proporsional dengan mengedepankan kepuasan pelanggan."*

**MISI Card:**
- Top bar: `background: var(--blue)`, height 6px, border-radius top
- Icon: Lucide `flag`
- Title: "Misi"
- Text: *"Pengadaan Barang dan Jasa dengan harga Kompetitif, tepat waktu, dan berkualitas dengan mengutamakan mutu dan sesuai spesifikasi."*

Both cards: white bg, shadow md, border-radius lg, padding `var(--space-lg)`

**Decorative:** `img611.jpg` (glass office building) as background image for the section header area, clipped with diagonal CSS

---

### 5.6 Struktur Manajemen — `#struktur`

**BG:** `var(--off-white)`  
**Layout:** Full-width org chart, centered

**Org chart hierarchy (pure HTML/CSS):**

```
                    [KOMISARIS]
                         |
                    [DIREKTUR]
          ___________|_________________________
         |          |           |              |
  [ADMINISTRASI] [FINANCE]  [AKUNTING]   [EKSPEDISI]
                    |              |
               [MARKETING]   [TRANSPORTASI]
               [MARKETING]
               [MARKETING]
               [MARKETING]
```

**Box styles:**
- Background: `var(--navy)`
- Color: white
- Font-weight: 700
- Font-size: `var(--fs-sm)`
- Padding: `10px 20px`
- Border-radius: `var(--radius-sm)`
- Letter-spacing: 0.5px

**Connector lines:** CSS `border` on wrapper divs using flex + `::before`/`::after` pseudo-elements. Color: `var(--blue)`, width 2px.

**Responsive:** On mobile, collapse to a vertically stacked list with indentation levels instead of the full tree layout.

---

### 5.7 Produk Kami — `#produk`

**BG:** White  
**Subtitle:** "Kami menyediakan produk dari merek-merek terpercaya:"

**Brand grid strategy:**
- Use **individual logo images** (img48, img51–img58) for brands that have standalone files — display as `<img>` with `object-fit: contain`
- For **Mikalor, Topy, Benchmark, Leao Tyres** (no standalone files): display as styled text badges (border `1.5px solid var(--blue)`, font-weight 700)
- Alternatively: display `img49.jpg` and `img50.jpg` as two full-width showcase rows above the individual brand grid

**Individual logo files to use as `<img>`:**

| Filename | Brand |
|---|---|
| `img48.jpg` | REMA TIP TOP |
| `img51.jpg` | TDL |
| `img52.jpg` | HALTEC CORPORATION |
| `img53.jpg` | FESTO |
| `img54.jpg` | TOPU STEEL RIM |
| `img55.jpg` | TECH |
| `img56.jpg` | BESTPATCH |
| `img57.jpg` | GITI |
| `img58.jpg` | GAJAH TUNGGAL |

**Text-only badges (no image file exists):** MIKALOR · TOPY · BENCHMARK · LEAO TYRES

---

### 5.8 Layanan Kami — `#layanan`

**BG:** `var(--off-white)`  
**Two subsections within this section:**

#### 5.8.1 Tire Services

**Gallery grid:** 3 columns on desktop, 2 on tablet, 1 on mobile  
Images: `img65.jpg`, `img66.jpg`, `img67.jpg`, `img68.jpg`, `img69.jpg`, `img70.jpg`, `img603.jpg`

Image style: `border-radius: var(--radius-md)`, `object-fit: cover`, height 220px, hover scale 1.02

Below gallery, **5 service feature cards** in a row (scrollable on mobile):

| Icon | Title | Description |
|---|---|---|
| `search` | Inspeksi Ban | Pemeriksaan kondisi dan tekanan ban secara berkala untuk armada alat berat |
| `settings` | Pemasangan & Penggantian | Pemasangan OTR dan TBR tyre untuk truck dan alat berat pertambangan |
| `tool` | Repair & Vulkanisir | Perbaikan ban menggunakan material repair terpilih sesuai spesifikasi |
| `clipboard-list` | Maintenance Tire (TMS) | Program pemeliharaan ban terjadwal untuk meminimalkan downtime armada |
| `package` | Supply Tool Tyre | Penyediaan peralatan lengkap untuk pengerjaan ban di lokasi tambang |

Card style: white bg, shadow sm, border-radius md, icon in `var(--blue)` circle

#### 5.8.2 Equipment Services

**Layout:** 2-column (image left, text right) on desktop, stacked on mobile

**Image grid (left):** 2x2 grid — `img102.jpg`, `img103.jpg`, `img104.jpg`, `img105.jpg` — border-radius md

**Text content (right):**

> PT. NOSTEC GLOBAL SINERGI juga menyediakan jasa maintenance alat berat pertambangan. Tim kami berpengalaman menangani berbagai jenis alat berat di lokasi tambang.

**Feature points with checkmark icons (`check-circle`, color `var(--blue)`):**

- Maintenance alat berat pertambangan on-site
- Penanganan dump truck dan bulldozer
- Tim teknisi berpengalaman di lapangan

---

### 5.9 Produk Unggulan — sub-section under `#produk`

**BG:** White  
**Tab navigation:** 3 tabs — "Product Tire" | "Product Alternator" | "Wheel Rim"

Tab styles: pill-style, active tab: `bg: var(--navy)`, color white; inactive: border `var(--navy)`, hover bg light

#### TAB 1 — Product Tire

**Product card 1: GITI GAO802 / GAO802M**

Image: `img74.jpg` (left), specs (right)

Content:
```
Brand: GITI
Product: GAO802 / GAO802M
Type: Off The Road Tire — Truck Series Off/On Road
Position: All Position + Off Road

Headline features:
• Excellent damage resistance and long service life
• Superior traction and grip
```

Features table:

| Feature | Advantage | Benefit |
|---|---|---|
| Special tread compound with advanced ingredient | Effectively reduce tread damages from road hazard impacts | Excellent anti "cut&chip" performance |
| Compound combined with nano for high temperature | Reduce inner heat build up, keep good wear performance | — |
| High strength OTR cord on casing and belt | Deliver strong structure, avoid cord exposure, enhance rigidity | High durability and long service life |
| Open shoulder design with tie bar connection | Evacuate mud and stone, reduce irregular wear, prevent groove cracking | — |
| Big central block with zig-zag groove | Enhanced grip and traction, better anti cut&chip | Superior traction and grip |

Specification table:

| Size | PR | Pattern | Rim | Load 10km/h | Load 50km/h | Tread Depth | Outer Dia | Width | Type |
|---|---|---|---|---|---|---|---|---|---|
| 16.00R25 | ★★★ | E-3 | 11.25/2.0 | 12850 kg | — | 32 mm | 1500 mm | 444 mm | TT/TL |
| ★16.00R25 | ★★★ | E-3 | 11.25/2.0 | 12850 kg | — | 32 mm | 1500 mm | 444 mm | TT/TL |
| ★14.00R25 | ★★★ | E-4 | 10.00/2.0 | 10000 kg | 5800 kg | 36 mm | 1370 mm | 375 mm | TT/TL |

Note: TL = Tubeless Tire, TT = Tube Type Tire. ★ = GAO802M (M version: Designed for hard stone road surface)

---

**Product card 2: GITI GAO822**

Image: `img82.jpg`

```
Brand: GITI
Product: GAO822
Type: Off Road — Semua Posisi
```

Specification table:

| Ukuran | PR | Indeks Beban | Simbol Kecepatan | Ukuran Pelek | Beban Max (kg) Single | Beban Max (kg) Double | Tekanan kPa | Tekanan psi | Kedalaman Alur (mm) | Diameter Luar (mm) | Lebar Ban (mm) | Tipe |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 10.00R20 | 18 | 149/146 | F | 7.5 | 3250 | 3000 | 930 | 135 | 22.6 | 1055 | 278 | TT |
| 11.00R20 | 18 | 152/149 | F | 8 | 3550 | 3250 | 930 | 135 | 23.5 | 1090 | 293 | TT |
| 12.00R20 | 20 | 156/153 | F | 8.5 | 4000 | 3650 | 900 | 130 | 24.5 | 1129 | 315 | TT |
| 325/95R24 | 22 | 162/160 | G | 9 | 4750 | 4500 | 850 | 123 | 26 | 1250 | 317 | TL |

---

**Product card 3: YINGBA YB607**

Image: `img78.jpg`, no separate brand logo file exists

```
Brand: YINGBA
Product: 11.00R20 YB607
Type: Premium Radial Truck Tires
```

Specs grid (2-column):

| Spec | Value |
|---|---|
| Ply Rating | 18 |
| Standard Rim | 8.00 |
| Tread Depth | 25 mm |
| Section Width | 295 mm |
| Pressure | 135 psi |
| Max Load Single | 3550 kg |
| Max Load Double | 3250 kg |

---

#### TAB 2 — Product Alternator

Brand header: no standalone WAI logo file — use text "WAI" styled in brand blue  
Banner: *"Starter Suit to KOMATSU DUMP TRUCK, BULLDOZER, etc."* (dark bg, white text)

**Card 1 — Starter:**

Image: `img87.jpg` (shows both starter and alternator units)

```
Part Number: P.N 19938N
Type: Starter
Substitute For: P.N 230007002
Application: KOMATSU HD785-5, WA 800
Spec: 7.5kw / 24Volt, CW, 11 Tooth Pinion, NIKKO OSGR, 24, 7.5
```

**Card 2 — Alternator:**

Image: `img87.jpg` (same product image, second unit shown)

```
Part Number: P.N 12256N
Type: Alternator
Application: Komatsu 1986–1994
Spec: 15Amp / 24 Volt, CW, 1 Groove Pulley, NIKKO IR/EF
```

Background banner: `img88.jpg` (Komatsu excavator with URSA branding) — display full-width below both cards

---

#### TAB 3 — Wheel Rim

Brand: **TOPU STEEL RIM** — `img54.jpg` (individual Topu logo)

**Hero image:** `img610.jpg` (yellow dump truck + Topu Wheel Rim composite, full-width, border-radius lg, object-fit cover, height 300px)

**Image gallery (3 thumbnails below):** `img92.jpg`, `img93.jpg`, `img94.jpg`  
Grid: 3 columns, height 160px each, object-fit cover, border-radius md

**Description:**
> Wheel rim berkualitas, dan sudah terbukti digunakan di truck muatan berat.

**Feature cards (3 columns):**

| Icon | Title | Description |
|---|---|---|
| `shield-check` | Kualitas Terjamin | Diproduksi sesuai standar industri alat berat |
| `truck` | Proven Heavy Duty | Terbukti untuk truck muatan berat di berbagai medan |
| `settings-2` | Kompatibel | Tersedia berbagai ukuran untuk berbagai jenis armada |

---

### 5.10 Kontak — `#kontak`

**BG:** `var(--navy)` (full dark section)  
**All text:** white

**Layout:** 2-column (60/40) on desktop, stacked on mobile

**LEFT — Contact info:**

Section title: "Hubungi Kami" (white) + divider (light blue)

Contact items (each with Lucide icon in white circle):

| Icon | Label | Value |
|---|---|---|
| `mail` | Email | nostecsinergi@gmail.com |
| `phone` | Telepon | 0878 8932 8855 |
| `map-pin` | Alamat | Jl. Raya Ujung Aspal Terusan AL, No 107, Jatiranggon, Jatisampurna, Kota Bekasi – Jawa Barat |
| `landmark` | Rekening | BCA 8733207777 (Cabang Metro Jababeka) |

**RIGHT — Contact form:**

```
Field: Nama         — type="text", placeholder="Nama Anda"
Field: Email        — type="email", placeholder="email@perusahaan.com"
Field: Pesan        — <textarea>, rows=5, placeholder="Tulis pesan Anda..."
Button: "Kirim Pesan" — bg: var(--blue), full width, type="button"
```

Form field style: white bg, border-radius md, no outline on focus → blue border instead  
Note below form (small, muted-white): `"* Form ini untuk keperluan tampilan. Untuk respons cepat, hubungi via WhatsApp atau email."`

---

### 5.11 Footer

**BG:** `var(--navy-footer)` (`#0D1F3C`)  
**Content (centered):**

```
[Logo text — same as navbar]
NOSTEC  |  GLOBAL SINERGI

PT. NOSTEC GLOBAL SINERGI
[divider line, color: rgba(255,255,255,0.15), width 80px]

© 2024 PT. Nostec Global Sinergi. All Rights Reserved.
```

---

## 6. JavaScript Behavior

### 6.1 On DOM Ready

```js
lucide.createIcons();
initNav();
initScrollAnimations();
initTabs();
```

### 6.2 Sticky Navbar

```js
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
```

### 6.3 Fade-in on Scroll

Apply class `fade-in` to: all section titles, all cards, gallery images, org chart.

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

CSS:
```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}
```

Stagger children: add `transition-delay: calc(var(--i, 0) * 0.1s)` inline style per child index.

### 6.4 Tab Switching (Produk Unggulan)

```js
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
}
```

### 6.5 Mobile Nav Toggle

```js
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
```

### 6.6 Active Nav Highlighting

```js
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      document.querySelector(`.nav-link[href="#${e.target.id}"]`)?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));
```

### 6.7 Image Error Fallback

All `<img>` tags in brand grid use:
```html
onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
```
With a sibling `.brand-fallback` span that shows by default `display: none` and flips to `display: flex` on error.

---

## 7. Responsive Breakpoints

| Breakpoint | Trigger | Changes |
|---|---|---|
| Mobile | < 768px | Single column everywhere, hamburger nav, stacked hero, scrollable brand grid |
| Tablet | 768px–1023px | 2-col layouts, 3-col brand grid, condensed org chart |
| Desktop | ≥ 1024px | Full layout as specified above |

---

## 8. Performance Notes

- All images use `loading="lazy"` except hero image
- Hero bg image loaded via CSS background (no LCP img penalty)
- Lucide icons initialized once via `lucide.createIcons()` on DOMContentLoaded
- Google Fonts loaded with `display=swap`
- No blocking scripts — `<script>` at bottom of body

---

## 9. Acceptance Criteria

- [ ] Opens in browser with zero console errors
- [ ] All 11 sections render correctly
- [ ] Images load (with fallback text if file missing)
- [ ] Navbar sticks and changes style on scroll
- [ ] All nav links scroll to correct sections
- [ ] Tab switching works on Produk Unggulan
- [ ] Fade-in animations trigger on scroll
- [ ] Mobile nav (hamburger) opens and closes
- [ ] All copy matches exactly as specified in this PRD
- [ ] No external images or placeholder URLs used
- [ ] Responsive on 375px, 768px, and 1440px viewport widths

---

## 10. File Output

```
/
├── index.html          ← single deliverable file
├── Logo.jpg
├── img48.jpg
├── img49.jpg
├── img50.jpg
├── img51.jpg  ··· img58.jpg
├── img65.jpg  ··· img70.jpg
├── img74.jpg
├── img78.jpg
├── img82.jpg
├── img83.jpg
├── img87.jpg
├── img88.jpg
├── img92.jpg  ··· img94.jpg
├── img98.jpg
├── img102.jpg ··· img105.jpg
├── img603.jpg
├── img610.jpg
├── img611.jpg
├── img615.jpg
└── img616.jpg
```

The final `index.html` is fully self-contained with all CSS and JS inline. No build step required.
