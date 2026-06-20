# Maruti Digital — Services Marketplace Master Plan
*Gig-style "fix it for me" marketplace targeting EU/Swiss/US small business owners, solo founders, and creators. Built on the existing marutidigital.in stack.*

---

## 0. The Core Idea (one paragraph)

You're not competing with Fiverr by being another Fiverr listing. You're building a **vertical "rescue desk" for non-technical website/SaaS owners** — the person whose WordPress site broke, whose Vercel deploy is red, whose SSL expired, who can't connect Supabase to their no-code app, who needs a logo by Friday. They don't want to interview 5 freelancers — they want to pick a fixed-price card, pay 20% advance, and have it fixed. Your edge: **fixed cheap pricing + fast turnaround + a real production team in Khargone**, not bidding.

---

## 1. Business Model

| Element | Decision |
|---|---|
| Pricing | Fixed-price cards per gig (like Etsy/Fiverr packages), not hourly bidding |
| Payment | **20% advance to start, 80% on delivery** — Stripe Checkout, INR + USD/EUR/CHF priced |
| Support | Live chat widget: **AI bot answers first** (scoping, FAQs, price lookup) → escalates to human (you/Khargone team) for anything custom |
| Fulfillment | Centralized intake → ticket assigned to gig team (Khargone) → status tracked in Supabase → delivered via portal/email |
| Positioning | "Cheaper than Fiverr, faster than an agency, no bidding wars" |
| Geography | List in USD/EUR/CHF by default (you already concluded carhire.digital needs Western pricing optics — same logic applies here) |

**Why this works for you specifically:** you already have Stripe wired up, Supabase experience, and a Vercel team. This is mostly a *content/catalog* problem, not a technical one — which means it's fast to ship.

---

## 2. Site Structure (Etsy/Fiverr hybrid — buildable in your existing Next.js stack)

```
/services                          → category grid (like /tools but commerce-focused)
/services/[category]                → subcategory + gig list, filters (price, delivery time)
/services/[category]/[gig-slug]     → gig detail page: price tiers, "what you get", FAQs, Buy Now (20% deposit)
/services/request-custom            → "Don't see your problem? Describe it" → AI-assisted intake form → human quote
/dashboard/orders                   → client order tracking (status: Submitted → In Progress → Delivered)
/admin/gigs                         → your internal panel to manage gig team assignments (Supabase-backed)
```

Reuse your existing `n8n-card`, `card-badge`, cart/checkout components — this slots into the current design system with zero new visual language needed.

---

## 3. The 500+ Service Catalog

Organized into **15 categories**. Each category = one `/services/[category]` page. Each line below = one sellable gig card. This is written to be pasted almost directly into a Supabase `gigs` table or a seed JSON file.

### A. Vercel / Hosting / Deployment Fixes (35)
1. Fix "Vercel build failed" error (any framework)
2. Fix missing/incorrect environment variables causing build failure
3. Fix TypeScript build errors blocking deploy
4. Fix 404 NOT_FOUND after successful deploy
5. Fix wrong Output Directory / Build & Development Settings
6. Connect custom domain to Vercel project
7. Fix domain not resolving / DNS misconfiguration on Vercel
8. Fix "Team access required to deploy" error
9. Remove/relink stale `.vercel` project config
10. Fix serverless function timeout / size limit errors
11. Fix API routes failing silently (missing export, wrong runtime)
12. Migrate a project from Netlify/Render to Vercel
13. Set up preview deployments + branch protection
14. Fix slow build times (dependency bloat, image optimization)
15. Fix "Works locally, fails on Vercel" (case sensitivity, Node version mismatch)
16. Configure custom redirects/rewrites (`vercel.json`)
17. Set up Vercel Cron Jobs
18. Fix CORS errors on Vercel-hosted API
19. Connect Vercel project to GitHub/GitLab repo correctly
20. Set up staging vs production environment variables
21. Fix SSL/HTTPS not auto-provisioning on custom domain
22. Vercel Edge Config setup
23. Fix image optimization / next/image errors
24. Set up Vercel Analytics + Speed Insights
25. Migrate static HTML site to Vercel hosting
26. Fix "Module not found" dependency resolution errors
27. Configure monorepo deployments (Turborepo/Nx on Vercel)
28. Set up password-protected preview environments
29. Fix billing/plan downgrade issues, optimize Vercel spend
30. General "my site is down, fix it now" emergency triage (1-hr response tier)
31. Set up multiple environments (dev/staging/prod) for one project
32. Fix WWW vs non-WWW redirect loops
33. Configure custom error pages (404/500)
34. Resolve build cache issues ("redeploy without cache" diagnosis)
35. Full Vercel account health audit + cleanup

### B. Supabase / Backend / Database Fixes (35)
1. Connect Supabase to a no-code app (Lovable, Bolt, Bubble, FlutterFlow, Replit)
2. Fix Row Level Security (RLS) blocking reads/writes
3. Write/debug Supabase RLS policies from scratch
4. Fix "permission denied for table" errors
5. Design a database schema from a rough idea/spreadsheet
6. Fix broken foreign key relationships
7. Set up Supabase Auth (email, magic link, OAuth/Google/GitHub login)
8. Fix Supabase Auth redirect URL / callback errors
9. Set up Supabase Storage (file/image uploads) with correct policies
10. Write Postgres triggers and functions
11. Fix slow queries — add indexes, optimize joins
12. Set up Supabase Edge Functions
13. Migrate data from Firebase/Airtable/Google Sheets to Supabase
14. Set up real-time subscriptions (live updating UI)
15. Fix duplicate/orphaned rows from broken inserts
16. Connect Supabase to Stripe webhooks (subscription sync)
17. Set up database backups + point-in-time recovery
18. Fix CORS/API key exposure issues (anon key vs service role key misuse)
19. Build an admin dashboard on top of existing Supabase tables
20. Set up multi-tenant data isolation (SaaS with multiple clients)
21. Write SQL migration scripts safely (no data loss)
22. Fix broken Supabase + Next.js server actions integration
23. Set up scheduled jobs (pg_cron) for recurring tasks
24. Audit and fix exposed/insecure Supabase project (security review)
25. Connect Supabase to n8n/Zapier/Make
26. Set up full-text search (pg_search / pgvector for AI search)
27. Build a CSV import/export pipeline
28. Fix "JWT expired" / session refresh issues
29. Set up Supabase project from zero for a new SaaS idea
30. Optimize Supabase usage to reduce billing
31. Build reporting/analytics views (SQL views, materialized views)
32. Fix broken many-to-many relationship queries
33. Set up Supabase Realtime presence (who's online)
34. Connect Supabase to a mobile app (Flutter/React Native)
35. Full backend health check + documentation handover

### C. WordPress Fixes (40)
1. Fix "Your connection is not private" SSL error
2. Install/renew SSL certificate, force HTTPS site-wide
3. Fix mixed content warnings after SSL install
4. Fix white screen of death (WSOD)
5. Fix 500 internal server error
6. Fix site hacked/malware cleanup
7. Remove malicious redirect/spam injection
8. Fix broken site after plugin update
9. Fix broken site after theme update
10. Migrate WordPress to new host (zero downtime)
11. Migrate WordPress to a new domain
12. Speed optimization (Core Web Vitals, caching, image compression)
13. Fix slow admin dashboard (wp-admin)
14. Fix login page redirect loop
15. Recover lost admin password / locked-out admin
16. Fix broken permalinks / 404s on all pages
17. Set up staging environment
18. Fix WooCommerce checkout not working
19. Fix WooCommerce payment gateway errors (Stripe/PayPal)
20. Fix broken cart/empty cart bug
21. WooCommerce inventory sync issues
22. Fix contact form not sending emails
23. Set up SMTP for reliable email delivery
24. Fix database connection error
25. Clean up bloated database (revisions, spam, transients)
26. Fix plugin conflict causing crashes
27. Custom plugin development (small scope)
28. Fix broken responsive/mobile layout
29. GDPR/cookie consent banner setup
30. Set up automated backups
31. Multilingual setup (WPML/Polylang)
32. Fix XML sitemap not generating / Search Console errors
33. Schema markup / rich snippets setup
34. Elementor/Divi layout fixes
35. Convert static HTML site into WordPress
36. Headless WordPress setup (WP as API + custom frontend)
37. Fix REST API errors
38. Membership/paywall plugin setup
39. Full WordPress security hardening audit
40. Ongoing WordPress maintenance retainer (monthly)

### D. Shopify Fixes (35)
1. Fix checkout not completing / payment errors
2. Connect/fix payment gateway (Shopify Payments, Stripe, PayPal)
3. Theme customization without breaking the store
4. Fix broken theme after edit
5. Set up custom domain + SSL on Shopify
6. Fix slow page speed (image/app bloat)
7. Set up/fix shipping rates and zones
8. Fix tax calculation errors (VAT/GST setup)
9. App conflict troubleshooting (script errors, broken layout)
10. Migrate from WooCommerce/Wix to Shopify
11. Migrate from Shopify to another platform
12. Bulk product upload/CSV fixes
13. Set up product variants correctly (size/color matrices)
14. Fix inventory sync issues across channels
15. Connect Shopify to Instagram/Facebook/TikTok shop
16. Set up abandoned cart email flows
17. Set up email marketing integration (Klaviyo/Mailchimp)
18. Custom Liquid template edits
19. Fix broken collection/filter pages
20. Set up multi-currency / international pricing
21. Set up subscription products (recurring billing)
22. Speed up checkout with one-click upsells
23. Fix duplicate/incorrect order issues
24. Set up Shopify Flow automations
25. SEO audit + fix for Shopify store
26. Set up wholesale/B2B store section
27. Fix broken search functionality
28. Custom landing page build (within Shopify)
29. Set up loyalty/rewards program
30. Print-on-demand integration (Printful/Printify) setup
31. Fix app billing/subscription confusion
32. Headless Shopify (Hydrogen) setup
33. Store launch checklist + pre-launch audit
34. Fix GDPR/cookie compliance
35. Ongoing Shopify store management retainer

### E. Wix / Squarespace / Webflow Fixes (25)
1. Fix broken layout on mobile (Wix/Squarespace)
2. Connect custom domain + fix DNS
3. SSL not activating fix
4. Speed optimization
5. Fix broken contact form
6. SEO basics setup (meta tags, sitemap)
7. Migrate Wix site to WordPress/Next.js
8. Migrate Squarespace to Shopify (for selling products)
9. Webflow CMS collection setup
10. Webflow interactions/animations fix
11. Fix broken Webflow form submissions
12. Set up Wix bookings/scheduling app
13. Set up Squarespace e-commerce
14. Fix broken navigation menu
15. Custom code injection (tracking pixels, scripts)
16. Fix blurry/incorrectly sized images
17. Set up email forwarding on custom domain
18. Google Analytics/GTM setup and verification
19. Fix Wix Editor X vs Classic Editor migration issues
20. Password-protect a page/site
21. Set up multilingual site
22. Fix broken third-party app embeds
23. Full site speed + SEO audit
24. Pre-launch QA checklist (links, forms, mobile)
25. Ongoing small-edits retainer (monthly "change my homepage text" plan)

### F. SSL / Domain / DNS / Email (30)
1. Buy and configure a new domain end-to-end
2. Fix expired SSL certificate
3. Fix "not secure" browser warning
4. Set up SSL on a server without one (Let's Encrypt/Cloudflare)
5. Fix mixed content errors after SSL migration
6. Transfer domain between registrars
7. Fix DNS propagation issues / wrong records
8. Set up MX records for business email
9. Fix emails going to spam (SPF/DKIM/DMARC setup)
10. Set up Google Workspace / Microsoft 365 email on custom domain
11. Fix "this site can't be reached" DNS errors
12. Set up subdomain pointing to a different host
13. Fix WWW redirect not working
14. Recover access to a domain with lost registrar login
15. Set up Cloudflare in front of any site (CDN + SSL + caching)
16. Fix Cloudflare proxy breaking site features
17. Domain renewal reminder + auto-renew setup
18. Bulk domain audit for an agency/portfolio of sites
19. Set up email forwarding rules
20. Fix bounced emails / blacklisted sending domain
21. Set up custom email signatures across a team
22. Point multiple domains to one site (brand protection)
23. Set up domain redirects (301) without losing SEO
24. SSL certificate renewal automation setup
25. Fix "ERR_CERT" / certificate chain errors
26. Whois privacy setup
27. Set up a holding/coming-soon page on a new domain
28. International domain (ccTLD) setup advice + purchase
29. Fix wildcard subdomain SSL issues
30. Full domain/DNS/email health audit (single report)

### G. No-Code / AI App Builder Connections (30)
1. Connect Lovable app to Supabase
2. Connect Bolt.new project to a real database
3. Connect Bubble.io to external API
4. FlutterFlow + Firebase/Supabase connection fixes
5. Fix broken API key setup in any no-code tool
6. Connect Replit project to production hosting
7. Migrate a Lovable/Bolt prototype to a production Next.js app
8. Fix CORS errors between no-code frontend and backend
9. Set up authentication in a no-code app
10. Connect Stripe payments inside a no-code app
11. Connect n8n to a no-code app's webhook
12. Fix broken Zapier/Make.com automation
13. Set up Airtable as a lightweight backend
14. Connect Glide app to Google Sheets/Airtable
15. Fix data not syncing between no-code tool and database
16. Set up custom domain for a no-code app
17. Convert a no-code prototype into investor-ready production app
18. Fix broken OpenAI/Claude API integration in a no-code tool
19. Set up rate limiting / usage caps to control AI API costs
20. Connect WhatsApp Business API to a no-code/CRM tool
21. Fix broken webhook signature verification
22. Set up environment variables correctly across no-code + backend
23. Debug "it works in the builder but not live" issues
24. Performance audit for a slow no-code app
25. Set up role-based access (admin vs user) in a no-code app
26. Connect Notion as a CMS/backend
27. Fix broken file upload flows
28. Set up email notifications (Resend/SendGrid) from a no-code app
29. General "my AI app builder broke, fix it fast" emergency triage
30. Architecture review: "should this be no-code or custom code?" consult

### H. Cloud, AI & API Setup (35)
1. Cloudinary account setup + image/video upload pipeline
2. Fix Cloudinary transformation/CDN errors
3. AWS S3 bucket setup + correct permissions (fix public/private leaks)
4. Fix AWS IAM permission errors
5. Set up AWS SES for transactional email
6. Google AI Studio / Gemini API key setup and first integration
7. OpenAI API key setup + usage dashboard configuration
8. Claude/Anthropic API integration into a website or app
9. Fix API billing suspension issues (diagnose & resolve, like the Gemini deposit case)
10. Set up Firebase project (Auth + Firestore + Hosting)
11. Fix Firebase security rules
12. Set up Stripe account + first product/checkout
13. Fix Stripe webhook not firing / signature mismatch
14. Set up Stripe subscriptions + customer portal
15. Connect Razorpay for Indian payments alongside Stripe
16. Set up Resend/SendGrid/Postmark transactional email
17. Set up Twilio for SMS/WhatsApp notifications
18. Fix rate-limit / quota exceeded errors on any API
19. Set up a reverse proxy / CORS proxy for a blocked API
20. Cloudflare Workers script setup
21. Set up a vector database (Pinecone/Supabase pgvector) for AI search
22. RAG (retrieval-augmented generation) pipeline setup for a chatbot
23. Fix broken OAuth login (Google/Facebook/Apple sign-in)
24. Set up monitoring/error tracking (Sentry) for any app
25. Set up CI/CD pipeline (GitHub Actions) for auto-deploy
26. Cost audit across cloud accounts ("why is my bill so high")
27. Migrate from one cloud provider to another
28. Set up a custom GPT/Claude-powered chatbot widget for a website
29. Fix broken file storage (images not loading, broken CDN links)
30. Set up background job queue (cron/worker) for an app
31. API documentation write-up for a client's existing API
32. Security audit: exposed API keys/secrets in a public repo
33. Set up a webhook relay/logging tool for debugging integrations
34. General "connect X service to Y service" — catch-all integration gig
35. Emergency "everything is down" cross-stack triage (1-hr response)

### I. New Website Builds — By Niche (40)
1. Doctor/clinic website (appointment booking)
2. Dentist website
3. Advocate/lawyer website (with disclaimer pages, case areas)
4. Accountant/CA website
5. Restaurant website (menu + reservations)
6. Cafe/bakery website
7. Salon/spa website (booking widget)
8. Gym/fitness studio website (class schedule + membership)
9. Real estate agent/agency website (listings)
10. Real estate single-property landing page
11. Wedding photographer portfolio site
12. Event planner website
13. Architect/interior designer portfolio
14. Construction/contractor business website
15. Plumber/electrician local service site
16. Auto repair shop website
17. Car rental/fleet site (you already know this one — CareHireOS)
18. Travel agency website
19. Tour guide/local experience booking site
20. Yoga/meditation studio site
21. Pet grooming/veterinary site
22. School/coaching institute website
23. Tutoring/online course landing page
24. Nonprofit/NGO website (donation integration)
25. Church/religious organization website
26. Local retail shop website (with simple catalog)
27. Boutique/fashion brand site
28. Jewelry brand site
29. Furniture/home decor brand site
30. Personal trainer/coach landing page
31. Consultant/freelancer personal brand site
32. Author/musician/artist portfolio site
33. Wedding/event venue website
34. Daycare/preschool website
35. Cleaning service local business site
36. Moving company website
37. Landscaping/gardening business site
38. Insurance agent website
39. Mortgage broker/financial advisor site
40. "One-page launch" — landing page for any business in 48 hours

### J. E-commerce Setup & Fixes (Cross-Platform) (35)
1. Full store launch (any platform) from zero
2. Product photography editing/background removal (bulk)
3. Product description writing (bulk, AI-assisted)
4. Set up Etsy shop from scratch
5. Fix Etsy SEO/tags not ranking
6. Set up Amazon seller listing
7. Multi-channel inventory sync (Shopify + Etsy + Amazon)
8. Set up abandoned cart recovery flow
9. Set up upsell/cross-sell funnel
10. Conversion rate audit ("why isn't my store converting")
11. Set up customer reviews widget
12. Fix broken checkout on mobile
13. Set up local pickup/delivery options
14. International shipping setup (rates, customs)
15. Set up dropshipping supplier integration
16. Fix payment gateway decline issues
17. Set up affiliate/referral program
18. Bundle/kit product setup
19. Set up size guide / product configurator
20. Fix slow product page load
21. Set up live chat widget on storefront
22. GA4 + Meta Pixel + TikTok Pixel setup for ads tracking
23. Set up Google Shopping feed
24. Fix broken product variant images
25. Set up wishlist/save-for-later feature
26. Pre-Black-Friday/sale-readiness audit
27. Set up gift card functionality
28. Fix tax/VAT compliance for EU sales
29. Returns/refund flow setup
30. Set up post-purchase email sequence
31. Inventory low-stock alert automation
32. Set up B2B wholesale pricing tier
33. Store rebrand (new theme + logo + colors) package
34. Full store health audit (speed, SEO, conversion, security)
35. Ongoing store management retainer (monthly)

### K. Design Services (40)
1. Logo design (1 concept, budget tier)
2. Logo design (3 concepts, standard tier)
3. Logo redesign/refresh of existing brand
4. Full brand kit (logo + colors + fonts + guidelines)
5. Business card design
6. Letterhead + invoice template design
7. Poster design (event/promo)
8. Flyer design
9. Banner ad design (web)
10. Social media post templates (pack of 10)
11. Instagram carousel design
12. Facebook/Instagram ad creative set
13. YouTube thumbnail design
14. YouTube channel banner + logo
15. Menu design (restaurant/cafe)
16. Brochure design (tri-fold)
17. Packaging design (label/box mockup)
18. T-shirt/merch design
19. Wedding invitation design
20. Resume/CV design
21. Pitch deck design (slides redesign, not content)
22. Infographic design
23. Email newsletter template design
24. Website hero section graphic/illustration
25. Favicon + app icon set
26. Sticker design
27. Signage/storefront design mockup
28. Product mockup generation (for Etsy/Shopify listings)
29. Album/podcast cover art
30. Book cover design
31. Real estate listing flyer
32. Trade show booth graphic
33. LinkedIn banner design
34. Press kit/media kit design
35. Custom font pairing + typography system
36. Re-skin an existing PowerPoint deck template
37. QR code menu/business card design
38. Wedding/event branding suite (invite + signage + menu match)
39. Icon set design (custom, for an app/website)
40. Rush design (24-hour delivery) tier — any of the above, premium price

### L. AI Content, Image, Video & Influencers (40)
1. AI product photography (place product in styled scenes)
2. AI model/lifestyle photos (no photoshoot needed)
3. AI headshot generation (professional profile photos)
4. AI logo concept generation (rapid exploration before final design)
5. AI background removal/replacement (bulk)
6. AI image upscaling/restoration (old photos)
7. AI virtual try-on images (apparel/accessories)
8. AI-generated social media post images (on-brand, batch)
9. AI ad creative generation (multiple variants for A/B testing)
10. AI explainer video (script to video)
11. AI product demo video
12. AI voiceover for video/ads (multilingual)
13. AI video translation/dubbing
14. AI avatar/UGC-style ad video (no human talent needed)
15. AI influencer persona creation (consistent character across content)
16. AI influencer content calendar (ongoing monthly package)
17. Short-form video editing (Reels/TikTok/Shorts) from raw footage
18. Long-form video editing (YouTube/webinar)
19. Video editing: subtitles/captions (auto + styled)
20. Video editing: intro/outro branding package
21. Podcast editing (audio cleanup + show notes)
22. AI-generated background music/jingles
23. AI chatbot persona + script design for a website
24. AI image set for a Notion/website "about us" page
25. Real estate listing video (AI-assisted walkthrough style)
26. AI-generated infographic from raw data/report
27. Brand voice AI prompt-pack (so client can self-generate consistent content)
28. AI image consistency fix (same character across multiple AI images)
29. Video color grading/cleanup
30. Green screen removal + background replacement (video)
31. AI-translated marketing copy (multilingual ad sets)
32. Animated logo intro (for video/YouTube)
33. AI-generated explainer illustrations (custom style)
34. Stock footage curation + edit for a brand video
35. AI-assisted resume video / personal pitch video
36. Webinar recording cleanup + highlight reel
37. AI-generated email marketing graphics (batch)
38. Custom GIF/sticker pack for brand use on social/WhatsApp
39. Full "AI content engine" setup — recurring monthly content package
40. Rush AI content tier (same-day delivery)

### M. SEO, Content & Copy (30)
1. Full technical SEO audit (any platform)
2. Fix missing/broken meta titles & descriptions (bulk)
3. Fix missing H1 tags / heading structure
4. XML sitemap generation + Search Console submission
5. Fix indexing issues ("why isn't my page on Google")
6. Schema markup setup (rich snippets)
7. Core Web Vitals fix package
8. Local SEO setup (Google Business Profile optimization)
9. Backlink audit (toxic link cleanup)
10. Keyword research report (niche-specific)
11. Competitor SEO gap analysis
12. Blog post writing (SEO-optimized, per post)
13. Landing page copywriting
14. Product description copywriting (bulk)
15. Email sequence copywriting (welcome/nurture series)
16. About Us / brand story copywriting
17. Ad copy writing (Google/Meta)
18. Press release writing
19. Multilingual content translation (Hindi/English/EU languages)
20. og:image / social share preview setup
21. Fix duplicate content/canonical tag issues
22. Set up Google Analytics 4 + Search Console correctly
23. Content calendar planning (monthly)
24. Rewrite outdated content for SEO refresh
25. FAQ page content + schema
26. Voice search/AI-search (LLM visibility) optimization audit
27. Internal linking structure audit
28. 404 page audit + redirect mapping after migration
29. Content audit + pruning for a bloated old site
30. Ongoing SEO retainer (monthly reporting + fixes)

### N. Automation & Integrations (30)
1. n8n workflow setup from scratch
2. Fix broken n8n workflow
3. Zapier automation setup
4. Make.com (Integromat) scenario setup
5. CRM setup (HubSpot/Pipedrive/Zoho) from scratch
6. CRM data cleanup/deduplication
7. Lead capture form → CRM → email automation pipeline
8. WhatsApp Business automation (auto-replies, order updates)
9. Slack/Discord notification automation for business events
10. Google Sheets as a lightweight automation hub
11. Invoice generation automation (order → invoice → email)
12. Calendar booking automation (Calendly-style, custom)
13. Customer onboarding automation sequence
14. Abandoned cart → WhatsApp/SMS recovery automation
15. Social media auto-posting setup (Buffer/Make-based)
16. Review request automation (post-purchase)
17. Data sync between two SaaS tools that don't natively integrate
18. Webhook-based order routing (e.g., Shopify → fulfillment partner)
19. Automated reporting (daily/weekly business metrics to email/Slack)
20. AI-powered email triage/auto-categorization
21. Automated PDF generation (contracts, reports, certificates)
22. Recurring billing reminder automation
23. Lead scoring automation
24. Automated backup workflows (database/files to cloud storage)
25. Multi-step approval workflow automation (internal ops)
26. Appointment reminder automation (SMS/email/WhatsApp)
27. Inventory reorder alert automation
28. Job application/ATS pipeline automation
29. Custom API-to-API bridge (no native integration exists)
30. Automation health audit ("which of my workflows are silently broken")

### O. General "Fix My Tech" / Account Recovery / Misc (35)
1. General emergency website-down triage (any stack, 1-hr response)
2. Email account locked out / 2FA recovery guidance
3. Google Workspace admin issue resolution
4. Recover hacked social media account guidance
5. Fix broken Zoom/Google Meet integration on a booking site
6. Set up Google Business Profile from scratch
7. Set up Meta Business Suite / ad account from scratch
8. Fix disapproved Meta/Google ad account
9. Set up Google Search Console + Analytics from scratch (non-technical client)
10. Password manager setup + credential cleanup for a small business
11. Migrate a business off a freelancer who disappeared (audit + takeover)
12. Website accessibility (WCAG) basic compliance fixes
13. Cookie consent / privacy policy page generation + install
14. Terms of Service / Privacy Policy drafting (template-based, non-legal-advice)
15. GDPR compliance basics audit for an EU-facing site
16. Fix broken third-party embed (maps, calendars, reviews widgets)
17. Set up a "Coming Soon" + waitlist page for a pre-launch idea
18. One-time consultation call: "what's wrong with my online presence"
19. Competitor teardown report (what they're doing better, actionable)
20. Set up a simple internal tool/dashboard for a small team (no-code)
21. Data entry + cleanup project (bulk)
22. PDF form creation (fillable, for client intake/contracts)
23. Convert a PDF brochure into a website
24. Digitize a paper-based business process into a simple web app
25. Restore a website from an old backup
26. Fix broken QR code campaigns
27. Set up a simple booking/scheduling system for a service business
28. Translate an entire website (content + SEO meta) to another language
29. Full "digital health check" report for a small business (one deliverable covering site, SEO, social, security)
30. White-label engagement: build it, client's brand on it, you stay invisible
31. Ongoing retainer: "call us whenever something breaks" monthly plan
32. Speed dial / WhatsApp priority support add-on for any gig
33. Second opinion / code review on work delivered by another freelancer
34. Pre-investor due-diligence tech audit (for a startup raising funds)
35. Custom request — anything not listed (routes to human quote via AI intake form)

**Running total: 35+35+40+35+25+30+30+35+40+35+40+40+30+30+35 = 545 services across 15 categories.**

---

## 4. Pricing Framework (cheap but not race-to-the-bottom)

Don't price every gig individually from scratch — use **tiers per category**, then a few gigs break the pattern (rush/emergency = premium).

| Tier | Example scope | Price band (USD, adjust for CHF/EUR) |
|---|---|---|
| Quick Fix | Single error, < 2 hrs work (e.g. fix one SSL/DNS issue) | $15–35 |
| Standard | Most "fix this" gigs (WordPress/Shopify/Vercel/Supabase fixes) | $35–90 |
| Build | New website/landing page, niche site | $90–350 |
| Design | Logo/poster/brand kit | $20–80 |
| AI Content | Per asset or small batch | $10–40 |
| Retainer | Monthly ongoing (maintenance, SEO, AI content engine) | $99–299/mo |
| Emergency/Rush | Same-day, any category | +50–75% surcharge on base price |
| Custom Quote | Anything bigger than the above | Human-quoted after AI intake form |

**Payment flow:** Stripe Checkout → 20% captured immediately on order → remaining 80% invoice triggered when gig team marks "Ready for delivery" in your admin panel → auto-email + Stripe payment link for the balance.

---

## 5. Build Plan (what to actually ship, in order)

You said it yourself: **plan first, then go live with services, then scale 50 at a time.** Here's the sequence:

### Phase 0 — Foundation (this week)
- [ ] Add `/services` route + category landing page (reuse `n8n-card` grid pattern from homepage)
- [ ] Supabase table: `gigs` (id, category, title, description, price_tiers jsonb, delivery_days, slug)
- [ ] Supabase table: `orders` (id, gig_id, client info, deposit_paid, balance_paid, status, assigned_to)
- [ ] Stripe: create a generic "Service Deposit" + "Service Balance" product/price pair (dynamic amount via Stripe Checkout `price_data`)
- [ ] Wire 20%/80% split into checkout flow

### Phase 1 — First 50 gigs live (next session)
Pick your **highest-confidence, fastest-to-fulfill 50** from the catalog above — recommend starting with:
- All of Category A (Vercel) + B (Supabase) — you personally already do this work daily
- Category F (SSL/Domain/DNS) — short, well-defined, high search volume
- Category K (Design) first 15 — your gig team can start here immediately, low technical risk
- Category O #1 (emergency triage) — good catch-all while catalog is thin

### Phase 2 — Live chat
- AI bot: scoped to (a) answer "what does this cost / how long" from the gig catalog, (b) collect intake details, (c) escalate to human via Slack/WhatsApp when it can't resolve
- Human: you + Khargone team check a shared inbox/Slack channel

### Phase 3 — Scale 50/day
- Once Phase 1's 50 are live and at least one order has gone through the full pipeline (order → assign → deliver → balance paid), batch-add 50 more gigs/day from this catalog
- At 545 gigs ÷ 50/day ≈ 11 days to fully populate, *after* the pipeline is proven — don't rush the catalog before the pipeline works

### Phase 4 — Trust & conversion signals
- Add review/rating system per gig (you have the Supabase pattern already from the forum threads feature)
- "Delivered in Switzerland/Germany/US" case studies (even small ones) once you have 5–10 real orders
- Add a visible "20% to start, rest after you approve" trust badge — this is your biggest differentiator vs prepay-in-full competitors

---

## 6. What I need from you to start Phase 0

1. Confirm: do you want `/services` as a section of marutidigital.in, or a **separate domain/subdomain** (e.g. `fix.marutidigital.in` or a fresh brand)? This affects SEO and whether n8n dark theme fits a "trust + payments" service page (a lighter, more "professional services" look often converts better for this kind of transactional trust-based purchase than a dark dev-tool aesthetic).
2. Confirm Stripe account is the same one already wired into marutidigital, or a new one for this vertical.
3. Confirm who's first point of contact in the live chat escalation (you, or a Khargone lead?).

Once you answer those three, I can start Phase 0 in the next session — Supabase schema + `/services` route + Stripe deposit flow.
