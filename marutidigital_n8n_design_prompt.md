# 🎯 MarutiDigital.in — Master Web App Design Prompt
### *n8n Design System Clone — Pixel-Perfect Implementation Guide*

---

## 📌 PROJECT OVERVIEW

Build **marutidigital.in** — a Web + SaaS powerhouse platform for Indian freelancers, companies, and tech builders — using the **exact n8n.io visual design language**: dark theme, orange-red primary brand color, typography, spacing, card styles, gradients, and UI patterns. Every pixel should feel like it belongs on n8n.io.

---

## 🎨 DESIGN SYSTEM — EXACT N8N COLORS (CSS Variables)

Copy these **exactly** as CSS custom properties on `:root`:

```css
:root {
  /* === PRIMARY BRAND COLOR (n8n Orange-Red) === */
  --color-primary-h: 6.9;
  --color-primary-s: 100%;
  --color-primary-l: 67.6%;
  --color-primary: hsl(6.9, 100%, 67.6%);          /* #FF6D5A — n8n signature orange-red */
  --color-primary-tint-1: hsl(6.9, 100%, 18%);     /* Dark orange tint for backgrounds */
  --color-primary-tint-2: hsl(6.9, 100%, 9%);      /* Deeper tint */
  --color-primary-tint-3: hsl(6.9, 100%, 3%);      /* Subtlest tint */
  --color-primary-shade-1: hsl(6.9, 100%, 89%);    /* Light shade for text on dark */

  /* === SECONDARY COLOR (n8n Purple-Blue) === */
  --color-secondary: hsl(247, 100%, 35%);           /* Deep indigo/violet */

  /* === BACKGROUND LAYERS (Dark Theme) === */
  --color-background-xlight: hsl(232, 15%, 11%);   /* Darkest — page bg: #15171f */
  --color-background-lighter: hsl(232, 13%, 13%);  /* Sidebar/panel bg */
  --color-background-light: hsl(232, 12%, 16%);    /* Card bg */
  --color-background-base: hsl(232, 11%, 20%);     /* Input/control bg */
  --color-background-dark: hsl(232, 10%, 24%);     /* Hover bg */

  /* === FOREGROUND / BORDERS === */
  --color-foreground-base: hsl(232, 10%, 24%);     /* Subtle borders */
  --color-foreground-light: hsl(232, 10%, 30%);    /* Card borders */
  --color-foreground-xlight: hsl(232, 10%, 36%);  /* Dividers */

  /* === TEXT COLORS === */
  --color-text-dark: hsl(0, 0%, 100%);             /* Primary white text */
  --color-text-base: hsl(240, 4%, 70%);            /* Secondary muted text */
  --color-text-light: hsl(220, 4.2%, 58.2%);       /* Placeholder / hint */
  --color-text-lighter: hsl(222, 17%, 35%);        /* Disabled text */
  --color-text-xlight: hsl(0, 0%, 100%);           /* Text on colored bg */

  /* === SEMANTIC COLORS === */
  --color-success: hsl(139, 51%, 55%);             /* Green */
  --color-warning: hsl(40, 100%, 60%);             /* Amber */
  --color-danger: hsl(6.9, 100%, 67.6%);           /* Red-orange (same as primary) */
  --color-info: hsl(210, 100%, 60%);               /* Blue */

  /* === TYPOGRAPHY === */
  --font-display: 'Inter', 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* === SPACING === */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* === BORDER RADIUS === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 9999px;

  /* === SHADOWS === */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.6);
  --shadow-glow: 0 0 24px rgba(255, 109, 90, 0.15); /* Primary glow */
}
```

---

## 🔤 TYPOGRAPHY — EXACT N8N STYLE

```css
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

body {
  font-family: var(--font-display);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-base);
  background-color: var(--color-background-xlight);
  -webkit-font-smoothing: antialiased;
}

/* Heading scale — match n8n exactly */
h1 { font-size: 2.5rem;  font-weight: 700; color: var(--color-text-dark); letter-spacing: -0.02em; }
h2 { font-size: 1.75rem; font-weight: 600; color: var(--color-text-dark); letter-spacing: -0.01em; }
h3 { font-size: 1.25rem; font-weight: 600; color: var(--color-text-dark); }
h4 { font-size: 1rem;    font-weight: 600; color: var(--color-text-dark); }
p  { font-size: 0.875rem; color: var(--color-text-base); }

/* Orange gradient text — n8n hero style */
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, hsl(30, 100%, 65%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 🧱 LAYOUT & NAVIGATION

### Top Navigation Bar
```
Height: 56px
Background: var(--color-background-lighter) with border-bottom: 1px solid var(--color-foreground-light)
Backdrop-filter: blur(12px)
Position: sticky top-0 z-50

Left:  Logo — "MarutiDigital" wordmark in white, with small orange dot or lightning bolt icon
Center: Nav links — Tools | Blog | Shop | Services | Community | Docs
Right: Search icon | "Sign in" ghost button | "Get Started" primary CTA button (orange-red)
```

### Left Sidebar (Dashboard / Tool pages)
```
Width: 240px
Background: var(--color-background-lighter)
Border-right: 1px solid var(--color-foreground-base)

Sections with icons:
  🏠 Home
  🔧 Free Tools (with count badge)
  📝 Blog & Tutorials  
  🛒 Digital Shop
  ⚡ SaaS Products
  🤝 Services
  👥 Community
  ⚙️ Settings
```

### Page Grid
```
Max-width: 1280px, centered
Gutters: 24px
Card grid: repeat(auto-fill, minmax(280px, 1fr))
```

---

## 🃏 CARD COMPONENT — EXACT N8N STYLE

```css
.card {
  background: var(--color-background-light);
  border: 1px solid var(--color-foreground-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.card::before {
  /* Subtle gradient shimmer top-edge — n8n's signature card accent */
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover {
  border-color: var(--color-primary-tint-1);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.card:hover::before { opacity: 1; }

/* Card top badge — n8n style pill tag */
.card-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.card-badge.traffic    { background: var(--color-primary-tint-1); color: var(--color-primary); }
.card-badge.mrr        { background: hsl(247, 50%, 20%); color: hsl(247, 100%, 75%); }
.card-badge.passive    { background: hsl(139, 40%, 15%); color: hsl(139, 60%, 60%); }
.card-badge.seo        { background: hsl(40, 60%, 15%); color: hsl(40, 100%, 65%); }
```

---

## 🔘 BUTTON COMPONENTS — N8N EXACT

```css
/* Primary CTA — n8n orange */
.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-primary:hover {
  background: hsl(6.9, 100%, 60%);
  box-shadow: 0 4px 16px rgba(255, 109, 90, 0.4);
  transform: translateY(-1px);
}

/* Ghost / Outline */
.btn-ghost {
  background: transparent;
  color: var(--color-text-dark);
  border: 1px solid var(--color-foreground-xlight);
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s ease;
}
.btn-ghost:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-tint-2);
}

/* Tech Stack pill tags */
.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: var(--color-background-base);
  border: 1px solid var(--color-foreground-light);
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-base);
  font-family: var(--font-mono);
}
```

---

## 🏠 PAGE-BY-PAGE SPECIFICATIONS

---

### 1. 🌐 HOME / LANDING PAGE

**Hero Section:**
```
Background: var(--color-background-xlight)
Radial gradient blob: radial-gradient(ellipse 80% 60% at 50% -10%, 
  hsl(6.9, 100%, 15%) 0%, transparent 70%)

Eyebrow tag: [pill badge] "🇮🇳 Built for Indian Freelancers & Builders"
H1: "Your Complete Web + SaaS" 
    "Digital Business Platform"  ← "SaaS" in gradient-text (orange)
Subheadline: "20+ free tools, knowledge hub, digital shop, and SaaS products 
              — everything you need to grow online."
CTAs: [Get Started Free →] [orange primary]  [See Free Tools] [ghost]

Social proof row: "500+ tools used" | "10k+ freelancers" | "₹0 to start"
```

**6 Pillar Cards Grid (3×2):**
Replicate the image layout exactly — same icons, same badge labels (Traffic engine, SEO moat, Passive income, MRR focus, High ticket, Loyalty loop), same descriptions.

---

### 2. 🔧 FREE TOOLS HUB PAGE

**Section header:**
```
🔧 Free Tools Hub  [Traffic engine badge — orange]
Subtitle: "20+ tools to grow traffic, capture leads, and automate your workflow"
```

**Tools Grid (3 columns):**
Each tool card:
```
Icon (emoji or SVG, 32px) + Tool name (h3) + Short description (p)
Tag: [CSS] [SEO] [AI] [Invoice] etc.
Bottom: [Open Tool →] link  +  [⭐ Save] button
```

Tools to include (from the plan):
1. 🎨 **CSS Generator** — Glassmorphism, gradient, shadows with live preview & copy
2. 📊 **Meta Tag Analyzer** — Paste URL, get full SEO audit with fix suggestions
3. ⚡ **Page Speed Checker** — CWV scores + action plan
4. ✍️ **AI Content Writer** — Blog intros, ad copy, social posts (3 free/day)
5. 💰 **Freelance Rate Calc** — Input expenses + goals → ideal hourly/project rate
6. 🔗 **Link in Bio Builder** — Better than Linktree, hosted on your domain
7. 📄 **Invoice Generator** — PDF export, GST ready, Indian freelancer focused
8. 🌐 **WHOIS + DNS Lookup** — Domain checker, NS records, SSL expiry warnings

**Tech Stack row:**
```
Tech stack: [Next.js] [React] [Tailwind] [Cloudflare Workers] [Vercel Edge]
```

---

### 3. 📝 KNOWLEDGE HUB (BLOG)

**Layout: n8n docs-style**
```
Left sidebar: Category tree navigation
  All Posts | Tutorials | Case Studies | Guides | Comparisons

Main content: Article cards
  - Featured post hero (full-width, dark card with orange accent)
  - Below: Masonry/grid of post cards

Post Card:
  - Tag pill (orange for Tutorial, purple for Case Study, green for Guide)
  - Title (h3, white)
  - Excerpt (2 lines, muted)
  - Author avatar + name + date + read time
  - [Read More →] link with hover underline animation

SEO moat badge in header
```

---

### 4. 🛒 DIGITAL SHOP

**Shop grid layout:**
```
Filters row: [All] [Templates] [PDFs] [Plugins] [Bundles]  — pill tab switchers
Sort: [Newest] [Popular] [Price ↑] [Price ↓]

Product Card:
  - Preview thumbnail (dark bg with orange accent mockup)
  - Product name + short desc
  - Price: ₹XXX  (strikethrough original if discounted)
  - [Add to Cart] orange button
  - [Preview] ghost button
  - Rating stars (if applicable)

Cart: Sticky side drawer, dark theme
Checkout: Stripe integration, GST invoice auto-generate
```

---

### 5. ⚡ SAAS PRODUCTS

**Pricing cards (n8n pricing page style):**
```
3 tiers:
  Starter: ₹499/mo  — dark card
  Pro:     ₹1499/mo — orange-bordered card (POPULAR badge)
  Agency:  ₹4999/mo — dark card

Each card:
  - Plan name (h2)
  - Price large (3rem, white)
  - Feature list with ✓ checkmarks (green)
  - [Get Started] CTA
  - Annual discount toggle at top: "Save 20% annually"
```

---

### 6. 🤝 SERVICES & AGENCY

**Service tiles (2-column layout):**
```
Each service:
  - Icon + Title + Description
  - Starting price: "From ₹XXXX"
  - [Request Quote] CTA
  - Delivery timeline badge

Services: Web Design | SaaS Development | SEO | Automation | Client Portal Setup
```

---

### 7. 👥 COMMUNITY PAGE

```
Header: "Build Your Tribe"
  Discord invite card (dark, with purple discord accent)
  Member count: "1,234 members" 
  Active channels preview

Forum section:
  Latest discussions list
  Category filters
  Post card: avatar | title | replies | views | last activity

Membership tiers: Free | Pro | Lifetime
```

---

## 🌈 GRADIENT & BACKGROUND EFFECTS — EXACT N8N STYLE

```css
/* Page background with subtle n8n-style gradient blobs */
.page-bg {
  background: var(--color-background-xlight);
  position: relative;
}

/* Hero glow blob — upper left, orange */
.hero-glow-1 {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(6.9, 100%, 50%, 0.08) 0%, transparent 70%);
  top: -200px; left: -200px;
  pointer-events: none;
}

/* Hero glow blob — upper right, purple */
.hero-glow-2 {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(247, 100%, 50%, 0.06) 0%, transparent 70%);
  top: -100px; right: -100px;
  pointer-events: none;
}

/* Section divider gradient line — n8n style */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--color-foreground-xlight) 30%, 
    var(--color-primary-tint-1) 50%,
    var(--color-foreground-xlight) 70%, 
    transparent 100%);
  margin: 48px 0;
}

/* Animated gradient border on focus/active cards */
.card-gradient-border {
  background: linear-gradient(var(--color-background-light), var(--color-background-light)) padding-box,
              linear-gradient(135deg, var(--color-primary), hsl(247, 100%, 65%)) border-box;
  border: 1px solid transparent;
}
```

---

## 📐 REVENUE STREAMS SECTION (Dashboard cards)

```
6 stream cards in 2-row layout:
Row 1: Free Tools + Lead Gen | One-time Sales | Recurring Revenue | Project-based
Row 2: Community Membership | Affiliate Passive Income

Each card:
  Top label: small muted text (Free-to-paid funnel, Digital shop, etc.)
  Bold title: "Free tools + lead gen" etc.
  Description: 1 line muted
  Accent left-border: 3px solid var(--color-primary) (orange) or var(--color-secondary) (purple)
```

---

## 🗺️ BUILD ROADMAP SECTION — n8n Timeline Style

```css
/* Phase cards — horizontal timeline on desktop, vertical on mobile */
.phase-card {
  background: var(--color-background-light);
  border: 1px solid var(--color-foreground-light);
  border-left: 3px solid; /* color varies per phase */
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

/* Phase badge colors */
.phase-1 { border-left-color: hsl(210, 100%, 60%); } /* Blue */
.phase-2 { border-left-color: hsl(139, 51%, 55%);  } /* Green */
.phase-3 { border-left-color: hsl(40, 100%, 60%);  } /* Amber */
.phase-4 { border-left-color: hsl(6.9, 100%, 67%); } /* Orange-red (primary) */
```

Phases:
- **Phase 1** (0–60 days): Foundation — core website, 3–5 tools, digital shop, email capture
- **Phase 2** (60–120 days): Audience — 10+ tools, SEO tutorials, YouTube/LinkedIn engine
- **Phase 3** (120–180 days): Monetise — SaaS products, Pro plans, membership, affiliates
- **Phase 4** (180+ days): Scale — International domains, API marketplace, white-label SaaS

---

## 🔗 DOMAIN JOURNEY FOOTER ROW

```
Pill tags in sequence:
[marutidigital.in (now)] → [marutidigital.io ✓ recommended] [marutidigital.co] [marutidigital.dev]

Style: ghost pill buttons, the ".io recommended" one highlighted with orange border
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile-first */
@media (max-width: 640px) {
  .nav-links { display: none; }      /* Hamburger menu */
  .sidebar { position: absolute; }   /* Drawer overlay */
  .grid-3col { grid-template-columns: 1fr; }
  h1 { font-size: 1.75rem; }
}

@media (min-width: 768px) {
  .grid-3col { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-3col { grid-template-columns: repeat(3, 1fr); }
  .layout-with-sidebar { display: grid; grid-template-columns: 240px 1fr; }
}
```

---

## 🔄 MICRO-ANIMATIONS (n8n-style)

```css
/* All interactive elements */
* { transition: color 0.15s, background 0.15s, border-color 0.15s, 
               box-shadow 0.15s, transform 0.15s, opacity 0.15s; }

/* Card hover lift */
.card:hover { transform: translateY(-2px); }

/* Button press */
.btn:active { transform: scale(0.98); }

/* Skeleton loading shimmer */
@keyframes shimmer {
  0%   { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
.skeleton {
  background: linear-gradient(90deg, 
    var(--color-background-light) 25%, 
    var(--color-background-dark) 50%, 
    var(--color-background-light) 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

/* Page load stagger */
.stagger-in {
  animation: fadeInUp 0.4s ease both;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.stagger-in:nth-child(1) { animation-delay: 0.0s; }
.stagger-in:nth-child(2) { animation-delay: 0.08s; }
.stagger-in:nth-child(3) { animation-delay: 0.16s; }
.stagger-in:nth-child(4) { animation-delay: 0.24s; }
.stagger-in:nth-child(5) { animation-delay: 0.32s; }
.stagger-in:nth-child(6) { animation-delay: 0.40s; }
```

---

## 🛠️ TECH STACK (as labeled in the plan)

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 14** (App Router) |
| UI | **React** + **Tailwind CSS** (with n8n token overrides) |
| CMS (Blog) | **Sanity.io** |
| Payments | **Stripe** + Razorpay (for INR) |
| Email | **Resend** |
| Edge/CDN | **Cloudflare Workers** + **Vercel Edge** |
| Auth | **Clerk** or **NextAuth** |
| Database | **PlanetScale** or **Supabase** |
| Analytics | **Plausible** (privacy-first) |

---

## ✅ DESIGN QUALITY CHECKLIST

Before shipping each page, verify:

- [ ] Background is `hsl(232, 15%, 11%)` — not pure black, not gray
- [ ] All cards have `border: 1px solid var(--color-foreground-light)` — not shadow-only
- [ ] Primary color is the **orange-red `hsl(6.9, 100%, 67.6%)`** everywhere, not blue/purple
- [ ] Hover states on all cards: **glow + 2px lift + border highlight**
- [ ] Text hierarchy: white > 70% muted > 58% placeholder
- [ ] All CTAs follow: **primary=orange-red** | **secondary=ghost** | **danger=same orange-red**
- [ ] Tech stack tags use `font-family: JetBrains Mono`
- [ ] Phase colors match: Blue → Green → Amber → Orange-red
- [ ] Section dividers use gradient line (not solid hr)
- [ ] No pure white backgrounds anywhere — always a dark hsl() value
- [ ] Mobile: sidebar collapses to drawer, nav to hamburger
- [ ] Animations: 150–300ms max, `ease` or `ease-out`, no bounce on functional UI

---

## 💡 SUMMARY — THE N8N AESTHETIC IN ONE SENTENCE

> **Dark background `#15171f` · Orange-red `#FF6D5A` accent · Inter font · 12px border-radius cards · subtle glow hovers · HSL-based CSS tokens · clean left sidebar navigation.**

That IS n8n. Apply it to every pixel of marutidigital.in.

---

*Generated for Maruti Digital — Master Platform Plan*  
*Design Reference: n8n.io Design System v1.x (MIT License)*
