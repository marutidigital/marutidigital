export interface GigCategory {
  slug: string;
  name: string;
  description: string;
  icon: string; // emoji
  color: string; // tailwind-style color identifier
  gigCount: number;
}

export interface GigSeedItem {
  category: string; // matches GigCategory.slug
  title: string;
  description: string;
  price_usd: number;
  delivery_days: number;
  slug: string; // kebab-case, unique
  tier: 'quick_fix' | 'standard' | 'build' | 'design' | 'ai_content' | 'retainer' | 'emergency';
  is_emergency: boolean;
}

export const GIG_CATEGORIES: GigCategory[] = [
  {
    "slug": "vercel",
    "name": "Vercel & Hosting",
    "description": "Vercel deployment fixes, domain connections, serverless function optimization, and hosting migrations.",
    "icon": "⚡",
    "color": "blue",
    "gigCount": 35
  },
  {
    "slug": "supabase",
    "name": "Supabase & Database",
    "description": "Database design, RLS security policies, auth configuration, trigger functions, and queries optimization.",
    "icon": "🔥",
    "color": "green",
    "gigCount": 35
  },
  {
    "slug": "wordpress",
    "name": "WordPress Rescue",
    "description": "SSL setup, malware cleanup, WSOD recovery, speed optimization, and database repairs.",
    "icon": "📝",
    "color": "sky",
    "gigCount": 40
  },
  {
    "slug": "shopify",
    "name": "Shopify Fixes",
    "description": "Theme customization, payment gateways, checkout fixes, shipping, tax setups, and integrations.",
    "icon": "🛍️",
    "color": "emerald",
    "gigCount": 35
  },
  {
    "slug": "wix",
    "name": "Wix & Squarespace",
    "description": "Wix, Squarespace, and Webflow mobile layout fixes, custom domain setup, and CMS configurations.",
    "icon": "🎨",
    "color": "purple",
    "gigCount": 25
  },
  {
    "slug": "ssl_domain",
    "name": "SSL, DNS & Email",
    "description": "Domain configuration, custom business email setups, spam reduction (SPF/DKIM/DMARC), and SSL renewals.",
    "icon": "🔒",
    "color": "indigo",
    "gigCount": 30
  },
  {
    "slug": "nocode",
    "name": "No-Code Apps",
    "description": "Connecting Lovable, Bolt.new, Bubble, and FlutterFlow prototypes to production databases and Stripe.",
    "icon": "⚙️",
    "color": "pink",
    "gigCount": 30
  },
  {
    "slug": "cloud_api",
    "name": "Cloud, AI & APIs",
    "description": "Stripe payments, OpenAI/Claude API keys, Twilio SMS, AWS SES, and vector database setups.",
    "icon": "🤖",
    "color": "amber",
    "gigCount": 35
  },
  {
    "slug": "websites",
    "name": "New Website Builds",
    "description": "Bespoke website builds for doctors, dentists, lawyers, accountants, local retail shops, and freelancers.",
    "icon": "🌐",
    "color": "teal",
    "gigCount": 40
  },
  {
    "slug": "ecommerce",
    "name": "E-Commerce Setup",
    "description": "Abandoned cart email automation, Dropshipping supplier integration, conversion audits, and store setups.",
    "icon": "💳",
    "color": "rose",
    "gigCount": 35
  },
  {
    "slug": "design",
    "name": "Design Services",
    "description": "Premium logo design, full brand kits, business cards, pitch decks, and social media post templates.",
    "icon": "💎",
    "color": "violet",
    "gigCount": 40
  },
  {
    "slug": "ai_content",
    "name": "AI Content & Video",
    "description": "AI product photography, headshot generation, UGC avatar videos, Reels/TikTok edits, and podcast editing.",
    "icon": "🎬",
    "color": "orange",
    "gigCount": 40
  },
  {
    "slug": "seo_content",
    "name": "SEO & Copywriting",
    "description": "Technical SEO audits, indexing fixes, keyword research reports, and landing page copywriting.",
    "icon": "📈",
    "color": "cyan",
    "gigCount": 30
  },
  {
    "slug": "automation",
    "name": "Automation & n8n",
    "description": "Custom n8n and Make.com workflows, Zapier automations, CRM setups, and WhatsApp notifications.",
    "icon": "🚀",
    "color": "lime",
    "gigCount": 30
  },
  {
    "slug": "misc",
    "name": "General Tech Fixes",
    "description": "Google Business Profiles setup, ad account fixes, bulk data entry, and custom tech requests.",
    "icon": "🛠️",
    "color": "gray",
    "gigCount": 38
  }
];

export const ALL_GIGS: GigSeedItem[] = [
  {
    "category": "vercel",
    "title": "Fix \"Vercel build failed\" error (any framework)",
    "description": "Professional support for: Fix \"Vercel build failed\" error (any framework). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-vercel-build-failed-error-any-framework",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix missing/incorrect environment variables causing build failure",
    "description": "Professional support for: Fix missing/incorrect environment variables causing build failure. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-missing-incorrect-environment-variables-causing-build-failure",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix TypeScript build errors blocking deploy",
    "description": "Professional support for: Fix TypeScript build errors blocking deploy. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-typescript-build-errors-blocking-deploy",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix 404 NOT_FOUND after successful deploy",
    "description": "Professional support for: Fix 404 NOT_FOUND after successful deploy. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-404-not-found-after-successful-deploy",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix wrong Output Directory / Build & Development Settings",
    "description": "Professional support for: Fix wrong Output Directory / Build & Development Settings. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-wrong-output-directory-build-development-settings",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Connect custom domain to Vercel project",
    "description": "Professional support for: Connect custom domain to Vercel project. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-custom-domain-to-vercel-project",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix domain not resolving / DNS misconfiguration on Vercel",
    "description": "Professional support for: Fix domain not resolving / DNS misconfiguration on Vercel. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-domain-not-resolving-dns-misconfiguration-on-vercel",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix \"Team access required to deploy\" error",
    "description": "Professional support for: Fix \"Team access required to deploy\" error. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-team-access-required-to-deploy-error",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Remove/relink stale `.vercel` project config",
    "description": "Professional support for: Remove/relink stale `.vercel` project config. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "remove-relink-stale-vercel-project-config",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix serverless function timeout / size limit errors",
    "description": "Professional support for: Fix serverless function timeout / size limit errors. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-serverless-function-timeout-size-limit-errors",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix API routes failing silently (missing export, wrong runtime)",
    "description": "Professional support for: Fix API routes failing silently (missing export, wrong runtime). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-api-routes-failing-silently-missing-export-wrong-runtime",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Migrate a project from Netlify/Render to Vercel",
    "description": "Professional support for: Migrate a project from Netlify/Render to Vercel. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-a-project-from-netlify-render-to-vercel",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Set up preview deployments + branch protection",
    "description": "Professional support for: Set up preview deployments + branch protection. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-preview-deployments-branch-protection",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix slow build times (dependency bloat, image optimization)",
    "description": "Professional support for: Fix slow build times (dependency bloat, image optimization). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-slow-build-times-dependency-bloat-image-optimization",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix \"Works locally, fails on Vercel\" (case sensitivity, Node version mismatch)",
    "description": "Professional support for: Fix \"Works locally, fails on Vercel\" (case sensitivity, Node version mismatch). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-works-locally-fails-on-vercel-case-sensitivity-node-version-mismatch",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Configure custom redirects/rewrites (`vercel.json`)",
    "description": "Professional support for: Configure custom redirects/rewrites (`vercel.json`). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "configure-custom-redirects-rewrites-vercel-json",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Set up Vercel Cron Jobs",
    "description": "Professional support for: Set up Vercel Cron Jobs. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-vercel-cron-jobs",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix CORS errors on Vercel-hosted API",
    "description": "Professional support for: Fix CORS errors on Vercel-hosted API. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-cors-errors-on-vercel-hosted-api",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Connect Vercel project to GitHub/GitLab repo correctly",
    "description": "Professional support for: Connect Vercel project to GitHub/GitLab repo correctly. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-vercel-project-to-github-gitlab-repo-correctly",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Set up staging vs production environment variables",
    "description": "Professional support for: Set up staging vs production environment variables. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-staging-vs-production-environment-variables",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix SSL/HTTPS not auto-provisioning on custom domain",
    "description": "Professional support for: Fix SSL/HTTPS not auto-provisioning on custom domain. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-ssl-https-not-auto-provisioning-on-custom-domain",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Vercel Edge Config setup",
    "description": "Professional support for: Vercel Edge Config setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "vercel-edge-config-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix image optimization / next/image errors",
    "description": "Professional support for: Fix image optimization / next/image errors. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-image-optimization-next-image-errors",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Set up Vercel Analytics + Speed Insights",
    "description": "Professional support for: Set up Vercel Analytics + Speed Insights. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-vercel-analytics-speed-insights",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Migrate static HTML site to Vercel hosting",
    "description": "Professional support for: Migrate static HTML site to Vercel hosting. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "migrate-static-html-site-to-vercel-hosting",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix \"Module not found\" dependency resolution errors",
    "description": "Professional support for: Fix \"Module not found\" dependency resolution errors. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-module-not-found-dependency-resolution-errors",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Configure monorepo deployments (Turborepo/Nx on Vercel)",
    "description": "Professional support for: Configure monorepo deployments (Turborepo/Nx on Vercel). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "configure-monorepo-deployments-turborepo-nx-on-vercel",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Set up password-protected preview environments",
    "description": "Professional support for: Set up password-protected preview environments. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-password-protected-preview-environments",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix billing/plan downgrade issues, optimize Vercel spend",
    "description": "Professional support for: Fix billing/plan downgrade issues, optimize Vercel spend. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-billing-plan-downgrade-issues-optimize-vercel-spend",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "General \"my site is down, fix it now\" emergency triage (1-hr response tier)",
    "description": "Professional support for: General \"my site is down, fix it now\" emergency triage (1-hr response tier). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "general-my-site-is-down-fix-it-now-emergency-triage-1-hr-response-tier",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "vercel",
    "title": "Set up multiple environments (dev/staging/prod) for one project",
    "description": "Professional support for: Set up multiple environments (dev/staging/prod) for one project. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-multiple-environments-dev-staging-prod-for-one-project",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Fix WWW vs non-WWW redirect loops",
    "description": "Professional support for: Fix WWW vs non-WWW redirect loops. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-www-vs-non-www-redirect-loops",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Configure custom error pages (404/500)",
    "description": "Professional support for: Configure custom error pages (404/500). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "configure-custom-error-pages-404-500",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Resolve build cache issues (\"redeploy without cache\" diagnosis)",
    "description": "Professional support for: Resolve build cache issues (\"redeploy without cache\" diagnosis). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "resolve-build-cache-issues-redeploy-without-cache-diagnosis",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "vercel",
    "title": "Full Vercel account health audit + cleanup",
    "description": "Professional support for: Full Vercel account health audit + cleanup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "full-vercel-account-health-audit-cleanup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Connect Supabase to a no-code app (Lovable, Bolt, Bubble, FlutterFlow, Replit)",
    "description": "Professional support for: Connect Supabase to a no-code app (Lovable, Bolt, Bubble, FlutterFlow, Replit). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "connect-supabase-to-a-no-code-app-lovable-bolt-bubble-flutterflow-replit",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix Row Level Security (RLS) blocking reads/writes",
    "description": "Professional support for: Fix Row Level Security (RLS) blocking reads/writes. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-row-level-security-rls-blocking-reads-writes",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Write/debug Supabase RLS policies from scratch",
    "description": "Professional support for: Write/debug Supabase RLS policies from scratch. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "write-debug-supabase-rls-policies-from-scratch",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix \"permission denied for table\" errors",
    "description": "Professional support for: Fix \"permission denied for table\" errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-permission-denied-for-table-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Design a database schema from a rough idea/spreadsheet",
    "description": "Professional support for: Design a database schema from a rough idea/spreadsheet. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "design-a-database-schema-from-a-rough-idea-spreadsheet",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix broken foreign key relationships",
    "description": "Professional support for: Fix broken foreign key relationships. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-foreign-key-relationships",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up Supabase Auth (email, magic link, OAuth/Google/GitHub login)",
    "description": "Professional support for: Set up Supabase Auth (email, magic link, OAuth/Google/GitHub login). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-supabase-auth-email-magic-link-oauth-google-github-login",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix Supabase Auth redirect URL / callback errors",
    "description": "Professional support for: Fix Supabase Auth redirect URL / callback errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-supabase-auth-redirect-url-callback-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up Supabase Storage (file/image uploads) with correct policies",
    "description": "Professional support for: Set up Supabase Storage (file/image uploads) with correct policies. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-supabase-storage-file-image-uploads-with-correct-policies",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Write Postgres triggers and functions",
    "description": "Professional support for: Write Postgres triggers and functions. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "write-postgres-triggers-and-functions",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix slow queries — add indexes, optimize joins",
    "description": "Professional support for: Fix slow queries — add indexes, optimize joins. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-slow-queries-add-indexes-optimize-joins",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up Supabase Edge Functions",
    "description": "Professional support for: Set up Supabase Edge Functions. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-supabase-edge-functions",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Migrate data from Firebase/Airtable/Google Sheets to Supabase",
    "description": "Professional support for: Migrate data from Firebase/Airtable/Google Sheets to Supabase. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-data-from-firebase-airtable-google-sheets-to-supabase",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up real-time subscriptions (live updating UI)",
    "description": "Professional support for: Set up real-time subscriptions (live updating UI). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-real-time-subscriptions-live-updating-ui",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix duplicate/orphaned rows from broken inserts",
    "description": "Professional support for: Fix duplicate/orphaned rows from broken inserts. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-duplicate-orphaned-rows-from-broken-inserts",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Connect Supabase to Stripe webhooks (subscription sync)",
    "description": "Professional support for: Connect Supabase to Stripe webhooks (subscription sync). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-supabase-to-stripe-webhooks-subscription-sync",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up database backups + point-in-time recovery",
    "description": "Professional support for: Set up database backups + point-in-time recovery. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-database-backups-point-in-time-recovery",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix CORS/API key exposure issues (anon key vs service role key misuse)",
    "description": "Professional support for: Fix CORS/API key exposure issues (anon key vs service role key misuse). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-cors-api-key-exposure-issues-anon-key-vs-service-role-key-misuse",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Build an admin dashboard on top of existing Supabase tables",
    "description": "Professional support for: Build an admin dashboard on top of existing Supabase tables. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "build-an-admin-dashboard-on-top-of-existing-supabase-tables",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up multi-tenant data isolation (SaaS with multiple clients)",
    "description": "Professional support for: Set up multi-tenant data isolation (SaaS with multiple clients). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-multi-tenant-data-isolation-saas-with-multiple-clients",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Write SQL migration scripts safely (no data loss)",
    "description": "Professional support for: Write SQL migration scripts safely (no data loss). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "write-sql-migration-scripts-safely-no-data-loss",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix broken Supabase + Next.js server actions integration",
    "description": "Professional support for: Fix broken Supabase + Next.js server actions integration. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-supabase-next-js-server-actions-integration",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up scheduled jobs (pg_cron) for recurring tasks",
    "description": "Professional support for: Set up scheduled jobs (pg_cron) for recurring tasks. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-scheduled-jobs-pg-cron-for-recurring-tasks",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Audit and fix exposed/insecure Supabase project (security review)",
    "description": "Professional support for: Audit and fix exposed/insecure Supabase project (security review). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 89,
    "delivery_days": 3,
    "slug": "audit-and-fix-exposed-insecure-supabase-project-security-review",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Connect Supabase to n8n/Zapier/Make",
    "description": "Professional support for: Connect Supabase to n8n/Zapier/Make. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "connect-supabase-to-n8n-zapier-make",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up full-text search (pg_search / pgvector for AI search)",
    "description": "Professional support for: Set up full-text search (pg_search / pgvector for AI search). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-full-text-search-pg-search-pgvector-for-ai-search",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Build a CSV import/export pipeline",
    "description": "Professional support for: Build a CSV import/export pipeline. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "build-a-csv-import-export-pipeline",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix \"JWT expired\" / session refresh issues",
    "description": "Professional support for: Fix \"JWT expired\" / session refresh issues. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-jwt-expired-session-refresh-issues",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up Supabase project from zero for a new SaaS idea",
    "description": "Professional support for: Set up Supabase project from zero for a new SaaS idea. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-supabase-project-from-zero-for-a-new-saas-idea",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Optimize Supabase usage to reduce billing",
    "description": "Professional support for: Optimize Supabase usage to reduce billing. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "optimize-supabase-usage-to-reduce-billing",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Build reporting/analytics views (SQL views, materialized views)",
    "description": "Professional support for: Build reporting/analytics views (SQL views, materialized views). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "build-reporting-analytics-views-sql-views-materialized-views",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Fix broken many-to-many relationship queries",
    "description": "Professional support for: Fix broken many-to-many relationship queries. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-many-to-many-relationship-queries",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Set up Supabase Realtime presence (who's online)",
    "description": "Professional support for: Set up Supabase Realtime presence (who's online). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-supabase-realtime-presence-who-s-online",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Connect Supabase to a mobile app (Flutter/React Native)",
    "description": "Professional support for: Connect Supabase to a mobile app (Flutter/React Native). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-supabase-to-a-mobile-app-flutter-react-native",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "supabase",
    "title": "Full backend health check + documentation handover",
    "description": "Professional support for: Full backend health check + documentation handover. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 89,
    "delivery_days": 3,
    "slug": "full-backend-health-check-documentation-handover",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix \"Your connection is not private\" SSL error",
    "description": "Professional support for: Fix \"Your connection is not private\" SSL error. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-your-connection-is-not-private-ssl-error",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Install/renew SSL certificate, force HTTPS site-wide",
    "description": "Professional support for: Install/renew SSL certificate, force HTTPS site-wide. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "install-renew-ssl-certificate-force-https-site-wide",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix mixed content warnings after SSL install",
    "description": "Professional support for: Fix mixed content warnings after SSL install. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-mixed-content-warnings-after-ssl-install",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix white screen of death (WSOD)",
    "description": "Professional support for: Fix white screen of death (WSOD). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-white-screen-of-death-wsod",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix 500 internal server error",
    "description": "Professional support for: Fix 500 internal server error. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-500-internal-server-error",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix site hacked/malware cleanup",
    "description": "Professional support for: Fix site hacked/malware cleanup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "fix-site-hacked-malware-cleanup",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "wordpress",
    "title": "Remove malicious redirect/spam injection",
    "description": "Professional support for: Remove malicious redirect/spam injection. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "remove-malicious-redirect-spam-injection",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "wordpress",
    "title": "Fix broken site after plugin update",
    "description": "Professional support for: Fix broken site after plugin update. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-site-after-plugin-update",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix broken site after theme update",
    "description": "Professional support for: Fix broken site after theme update. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-site-after-theme-update",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Migrate WordPress to new host (zero downtime)",
    "description": "Professional support for: Migrate WordPress to new host (zero downtime). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-wordpress-to-new-host-zero-downtime",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Migrate WordPress to a new domain",
    "description": "Professional support for: Migrate WordPress to a new domain. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-wordpress-to-a-new-domain",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Speed optimization (Core Web Vitals, caching, image compression)",
    "description": "Professional support for: Speed optimization (Core Web Vitals, caching, image compression). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "speed-optimization-core-web-vitals-caching-image-compression",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix slow admin dashboard (wp-admin)",
    "description": "Professional support for: Fix slow admin dashboard (wp-admin). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-slow-admin-dashboard-wp-admin",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix login page redirect loop",
    "description": "Professional support for: Fix login page redirect loop. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-login-page-redirect-loop",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Recover lost admin password / locked-out admin",
    "description": "Professional support for: Recover lost admin password / locked-out admin. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "recover-lost-admin-password-locked-out-admin",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix broken permalinks / 404s on all pages",
    "description": "Professional support for: Fix broken permalinks / 404s on all pages. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-permalinks-404s-on-all-pages",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Set up staging environment",
    "description": "Professional support for: Set up staging environment. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-staging-environment",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix WooCommerce checkout not working",
    "description": "Professional support for: Fix WooCommerce checkout not working. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-woocommerce-checkout-not-working",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix WooCommerce payment gateway errors (Stripe/PayPal)",
    "description": "Professional support for: Fix WooCommerce payment gateway errors (Stripe/PayPal). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-woocommerce-payment-gateway-errors-stripe-paypal",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix broken cart/empty cart bug",
    "description": "Professional support for: Fix broken cart/empty cart bug. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-cart-empty-cart-bug",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "WooCommerce inventory sync issues",
    "description": "Professional support for: WooCommerce inventory sync issues. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "woocommerce-inventory-sync-issues",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix contact form not sending emails",
    "description": "Professional support for: Fix contact form not sending emails. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-contact-form-not-sending-emails",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Set up SMTP for reliable email delivery",
    "description": "Professional support for: Set up SMTP for reliable email delivery. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-smtp-for-reliable-email-delivery",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix database connection error",
    "description": "Professional support for: Fix database connection error. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-database-connection-error",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Clean up bloated database (revisions, spam, transients)",
    "description": "Professional support for: Clean up bloated database (revisions, spam, transients). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "clean-up-bloated-database-revisions-spam-transients",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix plugin conflict causing crashes",
    "description": "Professional support for: Fix plugin conflict causing crashes. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-plugin-conflict-causing-crashes",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Custom plugin development (small scope)",
    "description": "Professional support for: Custom plugin development (small scope). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "custom-plugin-development-small-scope",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix broken responsive/mobile layout",
    "description": "Professional support for: Fix broken responsive/mobile layout. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-responsive-mobile-layout",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "GDPR/cookie consent banner setup",
    "description": "Professional support for: GDPR/cookie consent banner setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "gdpr-cookie-consent-banner-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Set up automated backups",
    "description": "Professional support for: Set up automated backups. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-automated-backups",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Multilingual setup (WPML/Polylang)",
    "description": "Professional support for: Multilingual setup (WPML/Polylang). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "multilingual-setup-wpml-polylang",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix XML sitemap not generating / Search Console errors",
    "description": "Professional support for: Fix XML sitemap not generating / Search Console errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-xml-sitemap-not-generating-search-console-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Schema markup / rich snippets setup",
    "description": "Professional support for: Schema markup / rich snippets setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "schema-markup-rich-snippets-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Elementor/Divi layout fixes",
    "description": "Professional support for: Elementor/Divi layout fixes. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "elementor-divi-layout-fixes",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Convert static HTML site into WordPress",
    "description": "Professional support for: Convert static HTML site into WordPress. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "convert-static-html-site-into-wordpress",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Headless WordPress setup (WP as API + custom frontend)",
    "description": "Professional support for: Headless WordPress setup (WP as API + custom frontend). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "headless-wordpress-setup-wp-as-api-custom-frontend",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Fix REST API errors",
    "description": "Professional support for: Fix REST API errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-rest-api-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Membership/paywall plugin setup",
    "description": "Professional support for: Membership/paywall plugin setup. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "membership-paywall-plugin-setup",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Full WordPress security hardening audit",
    "description": "Professional support for: Full WordPress security hardening audit. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "full-wordpress-security-hardening-audit",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wordpress",
    "title": "Ongoing WordPress maintenance retainer (monthly)",
    "description": "Professional support for: Ongoing WordPress maintenance retainer (monthly). Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-wordpress-maintenance-retainer-monthly",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix checkout not completing / payment errors",
    "description": "Professional support for: Fix checkout not completing / payment errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "fix-checkout-not-completing-payment-errors",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "shopify",
    "title": "Connect/fix payment gateway (Shopify Payments, Stripe, PayPal)",
    "description": "Professional support for: Connect/fix payment gateway (Shopify Payments, Stripe, PayPal). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "connect-fix-payment-gateway-shopify-payments-stripe-paypal",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "shopify",
    "title": "Theme customization without breaking the store",
    "description": "Professional support for: Theme customization without breaking the store. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "theme-customization-without-breaking-the-store",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix broken theme after edit",
    "description": "Professional support for: Fix broken theme after edit. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-theme-after-edit",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up custom domain + SSL on Shopify",
    "description": "Professional support for: Set up custom domain + SSL on Shopify. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-custom-domain-ssl-on-shopify",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix slow page speed (image/app bloat)",
    "description": "Professional support for: Fix slow page speed (image/app bloat). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-slow-page-speed-image-app-bloat",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up/fix shipping rates and zones",
    "description": "Professional support for: Set up/fix shipping rates and zones. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-fix-shipping-rates-and-zones",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix tax calculation errors (VAT/GST setup)",
    "description": "Professional support for: Fix tax calculation errors (VAT/GST setup). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-tax-calculation-errors-vat-gst-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "App conflict troubleshooting (script errors, broken layout)",
    "description": "Professional support for: App conflict troubleshooting (script errors, broken layout). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "app-conflict-troubleshooting-script-errors-broken-layout",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "shopify",
    "title": "Migrate from WooCommerce/Wix to Shopify",
    "description": "Professional support for: Migrate from WooCommerce/Wix to Shopify. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-from-woocommerce-wix-to-shopify",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Migrate from Shopify to another platform",
    "description": "Professional support for: Migrate from Shopify to another platform. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-from-shopify-to-another-platform",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Bulk product upload/CSV fixes",
    "description": "Professional support for: Bulk product upload/CSV fixes. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "bulk-product-upload-csv-fixes",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up product variants correctly (size/color matrices)",
    "description": "Professional support for: Set up product variants correctly (size/color matrices). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-product-variants-correctly-size-color-matrices",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix inventory sync issues across channels",
    "description": "Professional support for: Fix inventory sync issues across channels. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-inventory-sync-issues-across-channels",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Connect Shopify to Instagram/Facebook/TikTok shop",
    "description": "Professional support for: Connect Shopify to Instagram/Facebook/TikTok shop. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-shopify-to-instagram-facebook-tiktok-shop",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up abandoned cart email flows",
    "description": "Professional support for: Set up abandoned cart email flows. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-abandoned-cart-email-flows",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up email marketing integration (Klaviyo/Mailchimp)",
    "description": "Professional support for: Set up email marketing integration (Klaviyo/Mailchimp). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-email-marketing-integration-klaviyo-mailchimp",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Custom Liquid template edits",
    "description": "Professional support for: Custom Liquid template edits. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "custom-liquid-template-edits",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix broken collection/filter pages",
    "description": "Professional support for: Fix broken collection/filter pages. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-collection-filter-pages",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up multi-currency / international pricing",
    "description": "Professional support for: Set up multi-currency / international pricing. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-multi-currency-international-pricing",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up subscription products (recurring billing)",
    "description": "Professional support for: Set up subscription products (recurring billing). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-subscription-products-recurring-billing",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Speed up checkout with one-click upsells",
    "description": "Professional support for: Speed up checkout with one-click upsells. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "speed-up-checkout-with-one-click-upsells",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix duplicate/incorrect order issues",
    "description": "Professional support for: Fix duplicate/incorrect order issues. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-duplicate-incorrect-order-issues",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up Shopify Flow automations",
    "description": "Professional support for: Set up Shopify Flow automations. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-shopify-flow-automations",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "SEO audit + fix for Shopify store",
    "description": "Professional support for: SEO audit + fix for Shopify store. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "seo-audit-fix-for-shopify-store",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up wholesale/B2B store section",
    "description": "Professional support for: Set up wholesale/B2B store section. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-wholesale-b2b-store-section",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix broken search functionality",
    "description": "Professional support for: Fix broken search functionality. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-search-functionality",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Custom landing page build (within Shopify)",
    "description": "Professional support for: Custom landing page build (within Shopify). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "custom-landing-page-build-within-shopify",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Set up loyalty/rewards program",
    "description": "Professional support for: Set up loyalty/rewards program. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-loyalty-rewards-program",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Print-on-demand integration (Printful/Printify) setup",
    "description": "Professional support for: Print-on-demand integration (Printful/Printify) setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "print-on-demand-integration-printful-printify-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix app billing/subscription confusion",
    "description": "Professional support for: Fix app billing/subscription confusion. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-app-billing-subscription-confusion",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Headless Shopify (Hydrogen) setup",
    "description": "Professional support for: Headless Shopify (Hydrogen) setup. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "headless-shopify-hydrogen-setup",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Store launch checklist + pre-launch audit",
    "description": "Professional support for: Store launch checklist + pre-launch audit. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "store-launch-checklist-pre-launch-audit",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Fix GDPR/cookie compliance",
    "description": "Professional support for: Fix GDPR/cookie compliance. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-gdpr-cookie-compliance",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "shopify",
    "title": "Ongoing Shopify store management retainer",
    "description": "Professional support for: Ongoing Shopify store management retainer. Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-shopify-store-management-retainer",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix broken layout on mobile (Wix/Squarespace)",
    "description": "Professional support for: Fix broken layout on mobile (Wix/Squarespace). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-layout-on-mobile-wix-squarespace",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Connect custom domain + fix DNS",
    "description": "Professional support for: Connect custom domain + fix DNS. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-custom-domain-fix-dns",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "SSL not activating fix",
    "description": "Professional support for: SSL not activating fix. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "ssl-not-activating-fix",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Speed optimization",
    "description": "Professional support for: Speed optimization. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "speed-optimization",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix broken contact form",
    "description": "Professional support for: Fix broken contact form. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-contact-form",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "SEO basics setup (meta tags, sitemap)",
    "description": "Professional support for: SEO basics setup (meta tags, sitemap). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "seo-basics-setup-meta-tags-sitemap",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Migrate Wix site to WordPress/Next.js",
    "description": "Professional support for: Migrate Wix site to WordPress/Next.js. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-wix-site-to-wordpress-next-js",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Migrate Squarespace to Shopify (for selling products)",
    "description": "Professional support for: Migrate Squarespace to Shopify (for selling products). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-squarespace-to-shopify-for-selling-products",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Webflow CMS collection setup",
    "description": "Professional support for: Webflow CMS collection setup. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "webflow-cms-collection-setup",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Webflow interactions/animations fix",
    "description": "Professional support for: Webflow interactions/animations fix. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "webflow-interactions-animations-fix",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix broken Webflow form submissions",
    "description": "Professional support for: Fix broken Webflow form submissions. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-webflow-form-submissions",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Set up Wix bookings/scheduling app",
    "description": "Professional support for: Set up Wix bookings/scheduling app. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-wix-bookings-scheduling-app",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Set up Squarespace e-commerce",
    "description": "Professional support for: Set up Squarespace e-commerce. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-squarespace-e-commerce",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix broken navigation menu",
    "description": "Professional support for: Fix broken navigation menu. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-navigation-menu",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Custom code injection (tracking pixels, scripts)",
    "description": "Professional support for: Custom code injection (tracking pixels, scripts). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "custom-code-injection-tracking-pixels-scripts",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix blurry/incorrectly sized images",
    "description": "Professional support for: Fix blurry/incorrectly sized images. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-blurry-incorrectly-sized-images",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Set up email forwarding on custom domain",
    "description": "Professional support for: Set up email forwarding on custom domain. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-email-forwarding-on-custom-domain",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Google Analytics/GTM setup and verification",
    "description": "Professional support for: Google Analytics/GTM setup and verification. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "google-analytics-gtm-setup-and-verification",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix Wix Editor X vs Classic Editor migration issues",
    "description": "Professional support for: Fix Wix Editor X vs Classic Editor migration issues. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-wix-editor-x-vs-classic-editor-migration-issues",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Password-protect a page/site",
    "description": "Professional support for: Password-protect a page/site. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "password-protect-a-page-site",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Set up multilingual site",
    "description": "Professional support for: Set up multilingual site. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-multilingual-site",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Fix broken third-party app embeds",
    "description": "Professional support for: Fix broken third-party app embeds. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-third-party-app-embeds",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Full site speed + SEO audit",
    "description": "Professional support for: Full site speed + SEO audit. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "full-site-speed-seo-audit",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Pre-launch QA checklist (links, forms, mobile)",
    "description": "Professional support for: Pre-launch QA checklist (links, forms, mobile). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "pre-launch-qa-checklist-links-forms-mobile",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "wix",
    "title": "Ongoing small-edits retainer (monthly \"change my homepage text\" plan)",
    "description": "Professional support for: Ongoing small-edits retainer (monthly \"change my homepage text\" plan). Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-small-edits-retainer-monthly-change-my-homepage-text-plan",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Buy and configure a new domain end-to-end",
    "description": "Professional support for: Buy and configure a new domain end-to-end. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "buy-and-configure-a-new-domain-end-to-end",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix expired SSL certificate",
    "description": "Professional support for: Fix expired SSL certificate. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-expired-ssl-certificate",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix \"not secure\" browser warning",
    "description": "Professional support for: Fix \"not secure\" browser warning. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-not-secure-browser-warning",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up SSL on a server without one (Let's Encrypt/Cloudflare)",
    "description": "Professional support for: Set up SSL on a server without one (Let's Encrypt/Cloudflare). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-ssl-on-a-server-without-one-let-s-encrypt-cloudflare",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix mixed content errors after SSL migration",
    "description": "Professional support for: Fix mixed content errors after SSL migration. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-mixed-content-errors-after-ssl-migration",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Transfer domain between registrars",
    "description": "Professional support for: Transfer domain between registrars. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "transfer-domain-between-registrars",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix DNS propagation issues / wrong records",
    "description": "Professional support for: Fix DNS propagation issues / wrong records. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-dns-propagation-issues-wrong-records",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up MX records for business email",
    "description": "Professional support for: Set up MX records for business email. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-mx-records-for-business-email",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix emails going to spam (SPF/DKIM/DMARC setup)",
    "description": "Professional support for: Fix emails going to spam (SPF/DKIM/DMARC setup). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-emails-going-to-spam-spf-dkim-dmarc-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up Google Workspace / Microsoft 365 email on custom domain",
    "description": "Professional support for: Set up Google Workspace / Microsoft 365 email on custom domain. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-google-workspace-microsoft-365-email-on-custom-domain",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix \"this site can't be reached\" DNS errors",
    "description": "Professional support for: Fix \"this site can't be reached\" DNS errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-this-site-can-t-be-reached-dns-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up subdomain pointing to a different host",
    "description": "Professional support for: Set up subdomain pointing to a different host. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-subdomain-pointing-to-a-different-host",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix WWW redirect not working",
    "description": "Professional support for: Fix WWW redirect not working. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-www-redirect-not-working",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Recover access to a domain with lost registrar login",
    "description": "Professional support for: Recover access to a domain with lost registrar login. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "recover-access-to-a-domain-with-lost-registrar-login",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up Cloudflare in front of any site (CDN + SSL + caching)",
    "description": "Professional support for: Set up Cloudflare in front of any site (CDN + SSL + caching). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-cloudflare-in-front-of-any-site-cdn-ssl-caching",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix Cloudflare proxy breaking site features",
    "description": "Professional support for: Fix Cloudflare proxy breaking site features. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-cloudflare-proxy-breaking-site-features",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Domain renewal reminder + auto-renew setup",
    "description": "Professional support for: Domain renewal reminder + auto-renew setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "domain-renewal-reminder-auto-renew-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Bulk domain audit for an agency/portfolio of sites",
    "description": "Professional support for: Bulk domain audit for an agency/portfolio of sites. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "bulk-domain-audit-for-an-agency-portfolio-of-sites",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up email forwarding rules",
    "description": "Professional support for: Set up email forwarding rules. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-email-forwarding-rules",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix bounced emails / blacklisted sending domain",
    "description": "Professional support for: Fix bounced emails / blacklisted sending domain. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-bounced-emails-blacklisted-sending-domain",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up custom email signatures across a team",
    "description": "Professional support for: Set up custom email signatures across a team. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-custom-email-signatures-across-a-team",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Point multiple domains to one site (brand protection)",
    "description": "Professional support for: Point multiple domains to one site (brand protection). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "point-multiple-domains-to-one-site-brand-protection",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up domain redirects (301) without losing SEO",
    "description": "Professional support for: Set up domain redirects (301) without losing SEO. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-domain-redirects-301-without-losing-seo",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "SSL certificate renewal automation setup",
    "description": "Professional support for: SSL certificate renewal automation setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "ssl-certificate-renewal-automation-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix \"ERR_CERT\" / certificate chain errors",
    "description": "Professional support for: Fix \"ERR_CERT\" / certificate chain errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-err-cert-certificate-chain-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Whois privacy setup",
    "description": "Professional support for: Whois privacy setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "whois-privacy-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Set up a holding/coming-soon page on a new domain",
    "description": "Professional support for: Set up a holding/coming-soon page on a new domain. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-a-holding-coming-soon-page-on-a-new-domain",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "International domain (ccTLD) setup advice + purchase",
    "description": "Professional support for: International domain (ccTLD) setup advice + purchase. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "international-domain-cctld-setup-advice-purchase",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Fix wildcard subdomain SSL issues",
    "description": "Professional support for: Fix wildcard subdomain SSL issues. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-wildcard-subdomain-ssl-issues",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ssl_domain",
    "title": "Full domain/DNS/email health audit (single report)",
    "description": "Professional support for: Full domain/DNS/email health audit (single report). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "full-domain-dns-email-health-audit-single-report",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Lovable app to Supabase",
    "description": "Professional support for: Connect Lovable app to Supabase. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "connect-lovable-app-to-supabase",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Bolt.new project to a real database",
    "description": "Professional support for: Connect Bolt.new project to a real database. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-bolt-new-project-to-a-real-database",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Bubble.io to external API",
    "description": "Professional support for: Connect Bubble.io to external API. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "connect-bubble-io-to-external-api",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "FlutterFlow + Firebase/Supabase connection fixes",
    "description": "Professional support for: FlutterFlow + Firebase/Supabase connection fixes. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "flutterflow-firebase-supabase-connection-fixes",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix broken API key setup in any no-code tool",
    "description": "Professional support for: Fix broken API key setup in any no-code tool. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-api-key-setup-in-any-no-code-tool",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Replit project to production hosting",
    "description": "Professional support for: Connect Replit project to production hosting. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-replit-project-to-production-hosting",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Migrate a Lovable/Bolt prototype to a production Next.js app",
    "description": "Professional support for: Migrate a Lovable/Bolt prototype to a production Next.js app. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-a-lovable-bolt-prototype-to-a-production-next-js-app",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix CORS errors between no-code frontend and backend",
    "description": "Professional support for: Fix CORS errors between no-code frontend and backend. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-cors-errors-between-no-code-frontend-and-backend",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up authentication in a no-code app",
    "description": "Professional support for: Set up authentication in a no-code app. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-authentication-in-a-no-code-app",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Stripe payments inside a no-code app",
    "description": "Professional support for: Connect Stripe payments inside a no-code app. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-stripe-payments-inside-a-no-code-app",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect n8n to a no-code app's webhook",
    "description": "Professional support for: Connect n8n to a no-code app's webhook. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "connect-n8n-to-a-no-code-app-s-webhook",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix broken Zapier/Make.com automation",
    "description": "Professional support for: Fix broken Zapier/Make.com automation. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-zapier-make-com-automation",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up Airtable as a lightweight backend",
    "description": "Professional support for: Set up Airtable as a lightweight backend. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-airtable-as-a-lightweight-backend",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Glide app to Google Sheets/Airtable",
    "description": "Professional support for: Connect Glide app to Google Sheets/Airtable. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-glide-app-to-google-sheets-airtable",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix data not syncing between no-code tool and database",
    "description": "Professional support for: Fix data not syncing between no-code tool and database. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-data-not-syncing-between-no-code-tool-and-database",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up custom domain for a no-code app",
    "description": "Professional support for: Set up custom domain for a no-code app. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-custom-domain-for-a-no-code-app",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Convert a no-code prototype into investor-ready production app",
    "description": "Professional support for: Convert a no-code prototype into investor-ready production app. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "convert-a-no-code-prototype-into-investor-ready-production-app",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix broken OpenAI/Claude API integration in a no-code tool",
    "description": "Professional support for: Fix broken OpenAI/Claude API integration in a no-code tool. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-openai-claude-api-integration-in-a-no-code-tool",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up rate limiting / usage caps to control AI API costs",
    "description": "Professional support for: Set up rate limiting / usage caps to control AI API costs. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-rate-limiting-usage-caps-to-control-ai-api-costs",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect WhatsApp Business API to a no-code/CRM tool",
    "description": "Professional support for: Connect WhatsApp Business API to a no-code/CRM tool. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-whatsapp-business-api-to-a-no-code-crm-tool",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix broken webhook signature verification",
    "description": "Professional support for: Fix broken webhook signature verification. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-webhook-signature-verification",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up environment variables correctly across no-code + backend",
    "description": "Professional support for: Set up environment variables correctly across no-code + backend. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-environment-variables-correctly-across-no-code-backend",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Debug \"it works in the builder but not live\" issues",
    "description": "Professional support for: Debug \"it works in the builder but not live\" issues. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "debug-it-works-in-the-builder-but-not-live-issues",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Performance audit for a slow no-code app",
    "description": "Professional support for: Performance audit for a slow no-code app. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "performance-audit-for-a-slow-no-code-app",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up role-based access (admin vs user) in a no-code app",
    "description": "Professional support for: Set up role-based access (admin vs user) in a no-code app. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-role-based-access-admin-vs-user-in-a-no-code-app",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Connect Notion as a CMS/backend",
    "description": "Professional support for: Connect Notion as a CMS/backend. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "connect-notion-as-a-cms-backend",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Fix broken file upload flows",
    "description": "Professional support for: Fix broken file upload flows. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-file-upload-flows",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "Set up email notifications (Resend/SendGrid) from a no-code app",
    "description": "Professional support for: Set up email notifications (Resend/SendGrid) from a no-code app. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-email-notifications-resend-sendgrid-from-a-no-code-app",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "nocode",
    "title": "General \"my AI app builder broke, fix it fast\" emergency triage",
    "description": "Professional support for: General \"my AI app builder broke, fix it fast\" emergency triage. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "general-my-ai-app-builder-broke-fix-it-fast-emergency-triage",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "nocode",
    "title": "Architecture review: \"should this be no-code or custom code?\" consult",
    "description": "Professional support for: Architecture review: \"should this be no-code or custom code?\" consult. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "architecture-review-should-this-be-no-code-or-custom-code-consult",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Cloudinary account setup + image/video upload pipeline",
    "description": "Professional support for: Cloudinary account setup + image/video upload pipeline. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "cloudinary-account-setup-image-video-upload-pipeline",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix Cloudinary transformation/CDN errors",
    "description": "Professional support for: Fix Cloudinary transformation/CDN errors. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-cloudinary-transformation-cdn-errors",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "AWS S3 bucket setup + correct permissions (fix public/private leaks)",
    "description": "Professional support for: AWS S3 bucket setup + correct permissions (fix public/private leaks). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "aws-s3-bucket-setup-correct-permissions-fix-public-private-leaks",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix AWS IAM permission errors",
    "description": "Professional support for: Fix AWS IAM permission errors. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-aws-iam-permission-errors",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up AWS SES for transactional email",
    "description": "Professional support for: Set up AWS SES for transactional email. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-aws-ses-for-transactional-email",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Google AI Studio / Gemini API key setup and first integration",
    "description": "Professional support for: Google AI Studio / Gemini API key setup and first integration. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "google-ai-studio-gemini-api-key-setup-and-first-integration",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "OpenAI API key setup + usage dashboard configuration",
    "description": "Professional support for: OpenAI API key setup + usage dashboard configuration. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "openai-api-key-setup-usage-dashboard-configuration",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Claude/Anthropic API integration into a website or app",
    "description": "Professional support for: Claude/Anthropic API integration into a website or app. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "claude-anthropic-api-integration-into-a-website-or-app",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix API billing suspension issues (diagnose & resolve, like the Gemini deposit case)",
    "description": "Professional support for: Fix API billing suspension issues (diagnose & resolve, like the Gemini deposit case). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-api-billing-suspension-issues-diagnose-resolve-like-the-gemini-deposit-case",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up Firebase project (Auth + Firestore + Hosting)",
    "description": "Professional support for: Set up Firebase project (Auth + Firestore + Hosting). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-firebase-project-auth-firestore-hosting",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix Firebase security rules",
    "description": "Professional support for: Fix Firebase security rules. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "fix-firebase-security-rules",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up Stripe account + first product/checkout",
    "description": "Professional support for: Set up Stripe account + first product/checkout. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-stripe-account-first-product-checkout",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix Stripe webhook not firing / signature mismatch",
    "description": "Professional support for: Fix Stripe webhook not firing / signature mismatch. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-stripe-webhook-not-firing-signature-mismatch",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up Stripe subscriptions + customer portal",
    "description": "Professional support for: Set up Stripe subscriptions + customer portal. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-stripe-subscriptions-customer-portal",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Connect Razorpay for Indian payments alongside Stripe",
    "description": "Professional support for: Connect Razorpay for Indian payments alongside Stripe. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "connect-razorpay-for-indian-payments-alongside-stripe",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up Resend/SendGrid/Postmark transactional email",
    "description": "Professional support for: Set up Resend/SendGrid/Postmark transactional email. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-resend-sendgrid-postmark-transactional-email",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up Twilio for SMS/WhatsApp notifications",
    "description": "Professional support for: Set up Twilio for SMS/WhatsApp notifications. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-twilio-for-sms-whatsapp-notifications",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix rate-limit / quota exceeded errors on any API",
    "description": "Professional support for: Fix rate-limit / quota exceeded errors on any API. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-rate-limit-quota-exceeded-errors-on-any-api",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up a reverse proxy / CORS proxy for a blocked API",
    "description": "Professional support for: Set up a reverse proxy / CORS proxy for a blocked API. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-a-reverse-proxy-cors-proxy-for-a-blocked-api",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Cloudflare Workers script setup",
    "description": "Professional support for: Cloudflare Workers script setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "cloudflare-workers-script-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up a vector database (Pinecone/Supabase pgvector) for AI search",
    "description": "Professional support for: Set up a vector database (Pinecone/Supabase pgvector) for AI search. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-a-vector-database-pinecone-supabase-pgvector-for-ai-search",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "RAG (retrieval-augmented generation) pipeline setup for a chatbot",
    "description": "Professional support for: RAG (retrieval-augmented generation) pipeline setup for a chatbot. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "rag-retrieval-augmented-generation-pipeline-setup-for-a-chatbot",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix broken OAuth login (Google/Facebook/Apple sign-in)",
    "description": "Professional support for: Fix broken OAuth login (Google/Facebook/Apple sign-in). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-oauth-login-google-facebook-apple-sign-in",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up monitoring/error tracking (Sentry) for any app",
    "description": "Professional support for: Set up monitoring/error tracking (Sentry) for any app. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-monitoring-error-tracking-sentry-for-any-app",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up CI/CD pipeline (GitHub Actions) for auto-deploy",
    "description": "Professional support for: Set up CI/CD pipeline (GitHub Actions) for auto-deploy. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-ci-cd-pipeline-github-actions-for-auto-deploy",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Cost audit across cloud accounts (\"why is my bill so high\")",
    "description": "Professional support for: Cost audit across cloud accounts (\"why is my bill so high\"). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "cost-audit-across-cloud-accounts-why-is-my-bill-so-high",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Migrate from one cloud provider to another",
    "description": "Professional support for: Migrate from one cloud provider to another. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-from-one-cloud-provider-to-another",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up a custom GPT/Claude-powered chatbot widget for a website",
    "description": "Professional support for: Set up a custom GPT/Claude-powered chatbot widget for a website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-a-custom-gpt-claude-powered-chatbot-widget-for-a-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Fix broken file storage (images not loading, broken CDN links)",
    "description": "Professional support for: Fix broken file storage (images not loading, broken CDN links). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-file-storage-images-not-loading-broken-cdn-links",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up background job queue (cron/worker) for an app",
    "description": "Professional support for: Set up background job queue (cron/worker) for an app. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-background-job-queue-cron-worker-for-an-app",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "API documentation write-up for a client's existing API",
    "description": "Professional support for: API documentation write-up for a client's existing API. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "api-documentation-write-up-for-a-client-s-existing-api",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Security audit: exposed API keys/secrets in a public repo",
    "description": "Professional support for: Security audit: exposed API keys/secrets in a public repo. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "security-audit-exposed-api-keys-secrets-in-a-public-repo",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Set up a webhook relay/logging tool for debugging integrations",
    "description": "Professional support for: Set up a webhook relay/logging tool for debugging integrations. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-a-webhook-relay-logging-tool-for-debugging-integrations",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "General \"connect X service to Y service\" — catch-all integration gig",
    "description": "Professional support for: General \"connect X service to Y service\" — catch-all integration gig. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "general-connect-x-service-to-y-service-catch-all-integration-gig",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "cloud_api",
    "title": "Emergency \"everything is down\" cross-stack triage (1-hr response)",
    "description": "Professional support for: Emergency \"everything is down\" cross-stack triage (1-hr response). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "emergency-everything-is-down-cross-stack-triage-1-hr-response",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "websites",
    "title": "Doctor/clinic website (appointment booking)",
    "description": "Professional support for: Doctor/clinic website (appointment booking). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "doctor-clinic-website-appointment-booking",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Dentist website",
    "description": "Professional support for: Dentist website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "dentist-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Advocate/lawyer website (with disclaimer pages, case areas)",
    "description": "Professional support for: Advocate/lawyer website (with disclaimer pages, case areas). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "advocate-lawyer-website-with-disclaimer-pages-case-areas",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Accountant/CA website",
    "description": "Professional support for: Accountant/CA website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "accountant-ca-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Restaurant website (menu + reservations)",
    "description": "Professional support for: Restaurant website (menu + reservations). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "restaurant-website-menu-reservations",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Cafe/bakery website",
    "description": "Professional support for: Cafe/bakery website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "cafe-bakery-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Salon/spa website (booking widget)",
    "description": "Professional support for: Salon/spa website (booking widget). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "salon-spa-website-booking-widget",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Gym/fitness studio website (class schedule + membership)",
    "description": "Professional support for: Gym/fitness studio website (class schedule + membership). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "gym-fitness-studio-website-class-schedule-membership",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Real estate agent/agency website (listings)",
    "description": "Professional support for: Real estate agent/agency website (listings). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "real-estate-agent-agency-website-listings",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Real estate single-property landing page",
    "description": "Professional support for: Real estate single-property landing page. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "real-estate-single-property-landing-page",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Wedding photographer portfolio site",
    "description": "Professional support for: Wedding photographer portfolio site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "wedding-photographer-portfolio-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Event planner website",
    "description": "Professional support for: Event planner website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "event-planner-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Architect/interior designer portfolio",
    "description": "Professional support for: Architect/interior designer portfolio. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "architect-interior-designer-portfolio",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Construction/contractor business website",
    "description": "Professional support for: Construction/contractor business website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "construction-contractor-business-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Plumber/electrician local service site",
    "description": "Professional support for: Plumber/electrician local service site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "plumber-electrician-local-service-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Auto repair shop website",
    "description": "Professional support for: Auto repair shop website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "auto-repair-shop-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Car rental/fleet site (you already know this one — CareHireOS)",
    "description": "Professional support for: Car rental/fleet site (you already know this one — CareHireOS). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "car-rental-fleet-site-you-already-know-this-one-carehireos",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Travel agency website",
    "description": "Professional support for: Travel agency website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "travel-agency-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Tour guide/local experience booking site",
    "description": "Professional support for: Tour guide/local experience booking site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "tour-guide-local-experience-booking-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Yoga/meditation studio site",
    "description": "Professional support for: Yoga/meditation studio site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "yoga-meditation-studio-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Pet grooming/veterinary site",
    "description": "Professional support for: Pet grooming/veterinary site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "pet-grooming-veterinary-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "School/coaching institute website",
    "description": "Professional support for: School/coaching institute website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "school-coaching-institute-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Tutoring/online course landing page",
    "description": "Professional support for: Tutoring/online course landing page. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "tutoring-online-course-landing-page",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Nonprofit/NGO website (donation integration)",
    "description": "Professional support for: Nonprofit/NGO website (donation integration). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "nonprofit-ngo-website-donation-integration",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Church/religious organization website",
    "description": "Professional support for: Church/religious organization website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "church-religious-organization-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Local retail shop website (with simple catalog)",
    "description": "Professional support for: Local retail shop website (with simple catalog). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "local-retail-shop-website-with-simple-catalog",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Boutique/fashion brand site",
    "description": "Professional support for: Boutique/fashion brand site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "boutique-fashion-brand-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Jewelry brand site",
    "description": "Professional support for: Jewelry brand site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "jewelry-brand-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Furniture/home decor brand site",
    "description": "Professional support for: Furniture/home decor brand site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "furniture-home-decor-brand-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Personal trainer/coach landing page",
    "description": "Professional support for: Personal trainer/coach landing page. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "personal-trainer-coach-landing-page",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Consultant/freelancer personal brand site",
    "description": "Professional support for: Consultant/freelancer personal brand site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "consultant-freelancer-personal-brand-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Author/musician/artist portfolio site",
    "description": "Professional support for: Author/musician/artist portfolio site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "author-musician-artist-portfolio-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Wedding/event venue website",
    "description": "Professional support for: Wedding/event venue website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "wedding-event-venue-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Daycare/preschool website",
    "description": "Professional support for: Daycare/preschool website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "daycare-preschool-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Cleaning service local business site",
    "description": "Professional support for: Cleaning service local business site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "cleaning-service-local-business-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Moving company website",
    "description": "Professional support for: Moving company website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "moving-company-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Landscaping/gardening business site",
    "description": "Professional support for: Landscaping/gardening business site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "landscaping-gardening-business-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Insurance agent website",
    "description": "Professional support for: Insurance agent website. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "insurance-agent-website",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "Mortgage broker/financial advisor site",
    "description": "Professional support for: Mortgage broker/financial advisor site. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "mortgage-broker-financial-advisor-site",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "websites",
    "title": "\"One-page launch\" — landing page for any business in 48 hours",
    "description": "Professional support for: \"One-page launch\" — landing page for any business in 48 hours. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 59,
    "delivery_days": 2,
    "slug": "one-page-launch-landing-page-for-any-business-in-48-hours",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Full store launch (any platform) from zero",
    "description": "Professional support for: Full store launch (any platform) from zero. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "full-store-launch-any-platform-from-zero",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Product photography editing/background removal (bulk)",
    "description": "Professional support for: Product photography editing/background removal (bulk). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "product-photography-editing-background-removal-bulk",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Product description writing (bulk, AI-assisted)",
    "description": "Professional support for: Product description writing (bulk, AI-assisted). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "product-description-writing-bulk-ai-assisted",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up Etsy shop from scratch",
    "description": "Professional support for: Set up Etsy shop from scratch. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-etsy-shop-from-scratch",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix Etsy SEO/tags not ranking",
    "description": "Professional support for: Fix Etsy SEO/tags not ranking. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-etsy-seo-tags-not-ranking",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up Amazon seller listing",
    "description": "Professional support for: Set up Amazon seller listing. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-amazon-seller-listing",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Multi-channel inventory sync (Shopify + Etsy + Amazon)",
    "description": "Professional support for: Multi-channel inventory sync (Shopify + Etsy + Amazon). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "multi-channel-inventory-sync-shopify-etsy-amazon",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up abandoned cart recovery flow",
    "description": "Professional support for: Set up abandoned cart recovery flow. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-abandoned-cart-recovery-flow",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up upsell/cross-sell funnel",
    "description": "Professional support for: Set up upsell/cross-sell funnel. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-upsell-cross-sell-funnel",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Conversion rate audit (\"why isn't my store converting\")",
    "description": "Professional support for: Conversion rate audit (\"why isn't my store converting\"). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "conversion-rate-audit-why-isn-t-my-store-converting",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up customer reviews widget",
    "description": "Professional support for: Set up customer reviews widget. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-customer-reviews-widget",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix broken checkout on mobile",
    "description": "Professional support for: Fix broken checkout on mobile. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-checkout-on-mobile",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up local pickup/delivery options",
    "description": "Professional support for: Set up local pickup/delivery options. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-local-pickup-delivery-options",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "International shipping setup (rates, customs)",
    "description": "Professional support for: International shipping setup (rates, customs). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "international-shipping-setup-rates-customs",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up dropshipping supplier integration",
    "description": "Professional support for: Set up dropshipping supplier integration. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-dropshipping-supplier-integration",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix payment gateway decline issues",
    "description": "Professional support for: Fix payment gateway decline issues. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-payment-gateway-decline-issues",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up affiliate/referral program",
    "description": "Professional support for: Set up affiliate/referral program. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "set-up-affiliate-referral-program",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Bundle/kit product setup",
    "description": "Professional support for: Bundle/kit product setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "bundle-kit-product-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up size guide / product configurator",
    "description": "Professional support for: Set up size guide / product configurator. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-size-guide-product-configurator",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix slow product page load",
    "description": "Professional support for: Fix slow product page load. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-slow-product-page-load",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up live chat widget on storefront",
    "description": "Professional support for: Set up live chat widget on storefront. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-live-chat-widget-on-storefront",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "GA4 + Meta Pixel + TikTok Pixel setup for ads tracking",
    "description": "Professional support for: GA4 + Meta Pixel + TikTok Pixel setup for ads tracking. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "ga4-meta-pixel-tiktok-pixel-setup-for-ads-tracking",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up Google Shopping feed",
    "description": "Professional support for: Set up Google Shopping feed. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-google-shopping-feed",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix broken product variant images",
    "description": "Professional support for: Fix broken product variant images. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-broken-product-variant-images",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up wishlist/save-for-later feature",
    "description": "Professional support for: Set up wishlist/save-for-later feature. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-wishlist-save-for-later-feature",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Pre-Black-Friday/sale-readiness audit",
    "description": "Professional support for: Pre-Black-Friday/sale-readiness audit. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "pre-black-friday-sale-readiness-audit",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up gift card functionality",
    "description": "Professional support for: Set up gift card functionality. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-gift-card-functionality",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Fix tax/VAT compliance for EU sales",
    "description": "Professional support for: Fix tax/VAT compliance for EU sales. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "fix-tax-vat-compliance-for-eu-sales",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Returns/refund flow setup",
    "description": "Professional support for: Returns/refund flow setup. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "returns-refund-flow-setup",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up post-purchase email sequence",
    "description": "Professional support for: Set up post-purchase email sequence. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-post-purchase-email-sequence",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Inventory low-stock alert automation",
    "description": "Professional support for: Inventory low-stock alert automation. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "inventory-low-stock-alert-automation",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Set up B2B wholesale pricing tier",
    "description": "Professional support for: Set up B2B wholesale pricing tier. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 25,
    "delivery_days": 1,
    "slug": "set-up-b2b-wholesale-pricing-tier",
    "tier": "quick_fix",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Store rebrand (new theme + logo + colors) package",
    "description": "Professional support for: Store rebrand (new theme + logo + colors) package. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "store-rebrand-new-theme-logo-colors-package",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Full store health audit (speed, SEO, conversion, security)",
    "description": "Professional support for: Full store health audit (speed, SEO, conversion, security). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "full-store-health-audit-speed-seo-conversion-security",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ecommerce",
    "title": "Ongoing store management retainer (monthly)",
    "description": "Professional support for: Ongoing store management retainer (monthly). Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-store-management-retainer-monthly",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Logo design (1 concept, budget tier)",
    "description": "Professional support for: Logo design (1 concept, budget tier). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "logo-design-1-concept-budget-tier",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Logo design (3 concepts, standard tier)",
    "description": "Professional support for: Logo design (3 concepts, standard tier). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "logo-design-3-concepts-standard-tier",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Logo redesign/refresh of existing brand",
    "description": "Professional support for: Logo redesign/refresh of existing brand. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "logo-redesign-refresh-of-existing-brand",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Full brand kit (logo + colors + fonts + guidelines)",
    "description": "Professional support for: Full brand kit (logo + colors + fonts + guidelines). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "full-brand-kit-logo-colors-fonts-guidelines",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Business card design",
    "description": "Professional support for: Business card design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "business-card-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Letterhead + invoice template design",
    "description": "Professional support for: Letterhead + invoice template design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "letterhead-invoice-template-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Poster design (event/promo)",
    "description": "Professional support for: Poster design (event/promo). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "poster-design-event-promo",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Flyer design",
    "description": "Professional support for: Flyer design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "flyer-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Banner ad design (web)",
    "description": "Professional support for: Banner ad design (web). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "banner-ad-design-web",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Social media post templates (pack of 10)",
    "description": "Professional support for: Social media post templates (pack of 10). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "social-media-post-templates-pack-of-10",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Instagram carousel design",
    "description": "Professional support for: Instagram carousel design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "instagram-carousel-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Facebook/Instagram ad creative set",
    "description": "Professional support for: Facebook/Instagram ad creative set. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "facebook-instagram-ad-creative-set",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "YouTube thumbnail design",
    "description": "Professional support for: YouTube thumbnail design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "youtube-thumbnail-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "YouTube channel banner + logo",
    "description": "Professional support for: YouTube channel banner + logo. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "youtube-channel-banner-logo",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Menu design (restaurant/cafe)",
    "description": "Professional support for: Menu design (restaurant/cafe). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "menu-design-restaurant-cafe",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Brochure design (tri-fold)",
    "description": "Professional support for: Brochure design (tri-fold). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "brochure-design-tri-fold",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Packaging design (label/box mockup)",
    "description": "Professional support for: Packaging design (label/box mockup). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "packaging-design-label-box-mockup",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "T-shirt/merch design",
    "description": "Professional support for: T-shirt/merch design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "t-shirt-merch-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Wedding invitation design",
    "description": "Professional support for: Wedding invitation design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "wedding-invitation-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Resume/CV design",
    "description": "Professional support for: Resume/CV design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "resume-cv-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Pitch deck design (slides redesign, not content)",
    "description": "Professional support for: Pitch deck design (slides redesign, not content). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "pitch-deck-design-slides-redesign-not-content",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Infographic design",
    "description": "Professional support for: Infographic design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "infographic-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Email newsletter template design",
    "description": "Professional support for: Email newsletter template design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "email-newsletter-template-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Website hero section graphic/illustration",
    "description": "Professional support for: Website hero section graphic/illustration. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "website-hero-section-graphic-illustration",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Favicon + app icon set",
    "description": "Professional support for: Favicon + app icon set. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "favicon-app-icon-set",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Sticker design",
    "description": "Professional support for: Sticker design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "sticker-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Signage/storefront design mockup",
    "description": "Professional support for: Signage/storefront design mockup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "signage-storefront-design-mockup",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Product mockup generation (for Etsy/Shopify listings)",
    "description": "Professional support for: Product mockup generation (for Etsy/Shopify listings). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "product-mockup-generation-for-etsy-shopify-listings",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Album/podcast cover art",
    "description": "Professional support for: Album/podcast cover art. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "album-podcast-cover-art",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Book cover design",
    "description": "Professional support for: Book cover design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "book-cover-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Real estate listing flyer",
    "description": "Professional support for: Real estate listing flyer. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "real-estate-listing-flyer",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Trade show booth graphic",
    "description": "Professional support for: Trade show booth graphic. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "trade-show-booth-graphic",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "LinkedIn banner design",
    "description": "Professional support for: LinkedIn banner design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "linkedin-banner-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Press kit/media kit design",
    "description": "Professional support for: Press kit/media kit design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "press-kit-media-kit-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Custom font pairing + typography system",
    "description": "Professional support for: Custom font pairing + typography system. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "custom-font-pairing-typography-system",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Re-skin an existing PowerPoint deck template",
    "description": "Professional support for: Re-skin an existing PowerPoint deck template. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "re-skin-an-existing-powerpoint-deck-template",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "QR code menu/business card design",
    "description": "Professional support for: QR code menu/business card design. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "qr-code-menu-business-card-design",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Wedding/event branding suite (invite + signage + menu match)",
    "description": "Professional support for: Wedding/event branding suite (invite + signage + menu match). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "wedding-event-branding-suite-invite-signage-menu-match",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Icon set design (custom, for an app/website)",
    "description": "Professional support for: Icon set design (custom, for an app/website). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 39,
    "delivery_days": 3,
    "slug": "icon-set-design-custom-for-an-app-website",
    "tier": "design",
    "is_emergency": false
  },
  {
    "category": "design",
    "title": "Rush design (24-hour delivery) tier — any of the above, premium price",
    "description": "Professional support for: Rush design (24-hour delivery) tier — any of the above, premium price. Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 79,
    "delivery_days": 1,
    "slug": "rush-design-24-hour-delivery-tier-any-of-the-above-premium-price",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "ai_content",
    "title": "AI product photography (place product in styled scenes)",
    "description": "Professional support for: AI product photography (place product in styled scenes). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-product-photography-place-product-in-styled-scenes",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI model/lifestyle photos (no photoshoot needed)",
    "description": "Professional support for: AI model/lifestyle photos (no photoshoot needed). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-model-lifestyle-photos-no-photoshoot-needed",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI headshot generation (professional profile photos)",
    "description": "Professional support for: AI headshot generation (professional profile photos). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-headshot-generation-professional-profile-photos",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI logo concept generation (rapid exploration before final design)",
    "description": "Professional support for: AI logo concept generation (rapid exploration before final design). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-logo-concept-generation-rapid-exploration-before-final-design",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI background removal/replacement (bulk)",
    "description": "Professional support for: AI background removal/replacement (bulk). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-background-removal-replacement-bulk",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI image upscaling/restoration (old photos)",
    "description": "Professional support for: AI image upscaling/restoration (old photos). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-image-upscaling-restoration-old-photos",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI virtual try-on images (apparel/accessories)",
    "description": "Professional support for: AI virtual try-on images (apparel/accessories). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-virtual-try-on-images-apparel-accessories",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-generated social media post images (on-brand, batch)",
    "description": "Professional support for: AI-generated social media post images (on-brand, batch). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-generated-social-media-post-images-on-brand-batch",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI ad creative generation (multiple variants for A/B testing)",
    "description": "Professional support for: AI ad creative generation (multiple variants for A/B testing). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-ad-creative-generation-multiple-variants-for-a-b-testing",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI explainer video (script to video)",
    "description": "Professional support for: AI explainer video (script to video). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "ai-explainer-video-script-to-video",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI product demo video",
    "description": "Professional support for: AI product demo video. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "ai-product-demo-video",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI voiceover for video/ads (multilingual)",
    "description": "Professional support for: AI voiceover for video/ads (multilingual). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-voiceover-for-video-ads-multilingual",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI video translation/dubbing",
    "description": "Professional support for: AI video translation/dubbing. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "ai-video-translation-dubbing",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI avatar/UGC-style ad video (no human talent needed)",
    "description": "Professional support for: AI avatar/UGC-style ad video (no human talent needed). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "ai-avatar-ugc-style-ad-video-no-human-talent-needed",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI influencer persona creation (consistent character across content)",
    "description": "Professional support for: AI influencer persona creation (consistent character across content). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-influencer-persona-creation-consistent-character-across-content",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI influencer content calendar (ongoing monthly package)",
    "description": "Professional support for: AI influencer content calendar (ongoing monthly package). Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ai-influencer-content-calendar-ongoing-monthly-package",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Short-form video editing (Reels/TikTok/Shorts) from raw footage",
    "description": "Professional support for: Short-form video editing (Reels/TikTok/Shorts) from raw footage. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "short-form-video-editing-reels-tiktok-shorts-from-raw-footage",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Long-form video editing (YouTube/webinar)",
    "description": "Professional support for: Long-form video editing (YouTube/webinar). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "long-form-video-editing-youtube-webinar",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Video editing: subtitles/captions (auto + styled)",
    "description": "Professional support for: Video editing: subtitles/captions (auto + styled). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "video-editing-subtitles-captions-auto-styled",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Video editing: intro/outro branding package",
    "description": "Professional support for: Video editing: intro/outro branding package. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "video-editing-intro-outro-branding-package",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Podcast editing (audio cleanup + show notes)",
    "description": "Professional support for: Podcast editing (audio cleanup + show notes). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "podcast-editing-audio-cleanup-show-notes",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-generated background music/jingles",
    "description": "Professional support for: AI-generated background music/jingles. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-generated-background-music-jingles",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI chatbot persona + script design for a website",
    "description": "Professional support for: AI chatbot persona + script design for a website. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-chatbot-persona-script-design-for-a-website",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI image set for a Notion/website \"about us\" page",
    "description": "Professional support for: AI image set for a Notion/website \"about us\" page. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-image-set-for-a-notion-website-about-us-page",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Real estate listing video (AI-assisted walkthrough style)",
    "description": "Professional support for: Real estate listing video (AI-assisted walkthrough style). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "real-estate-listing-video-ai-assisted-walkthrough-style",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-generated infographic from raw data/report",
    "description": "Professional support for: AI-generated infographic from raw data/report. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-generated-infographic-from-raw-data-report",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Brand voice AI prompt-pack (so client can self-generate consistent content)",
    "description": "Professional support for: Brand voice AI prompt-pack (so client can self-generate consistent content). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "brand-voice-ai-prompt-pack-so-client-can-self-generate-consistent-content",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI image consistency fix (same character across multiple AI images)",
    "description": "Professional support for: AI image consistency fix (same character across multiple AI images). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-image-consistency-fix-same-character-across-multiple-ai-images",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Video color grading/cleanup",
    "description": "Professional support for: Video color grading/cleanup. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "video-color-grading-cleanup",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Green screen removal + background replacement (video)",
    "description": "Professional support for: Green screen removal + background replacement (video). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "green-screen-removal-background-replacement-video",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-translated marketing copy (multilingual ad sets)",
    "description": "Professional support for: AI-translated marketing copy (multilingual ad sets). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-translated-marketing-copy-multilingual-ad-sets",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Animated logo intro (for video/YouTube)",
    "description": "Professional support for: Animated logo intro (for video/YouTube). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "animated-logo-intro-for-video-youtube",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-generated explainer illustrations (custom style)",
    "description": "Professional support for: AI-generated explainer illustrations (custom style). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-generated-explainer-illustrations-custom-style",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Stock footage curation + edit for a brand video",
    "description": "Professional support for: Stock footage curation + edit for a brand video. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "stock-footage-curation-edit-for-a-brand-video",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-assisted resume video / personal pitch video",
    "description": "Professional support for: AI-assisted resume video / personal pitch video. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-assisted-resume-video-personal-pitch-video",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Webinar recording cleanup + highlight reel",
    "description": "Professional support for: Webinar recording cleanup + highlight reel. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "webinar-recording-cleanup-highlight-reel",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "AI-generated email marketing graphics (batch)",
    "description": "Professional support for: AI-generated email marketing graphics (batch). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ai-generated-email-marketing-graphics-batch",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Custom GIF/sticker pack for brand use on social/WhatsApp",
    "description": "Professional support for: Custom GIF/sticker pack for brand use on social/WhatsApp. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "custom-gif-sticker-pack-for-brand-use-on-social-whatsapp",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Full \"AI content engine\" setup — recurring monthly content package",
    "description": "Professional support for: Full \"AI content engine\" setup — recurring monthly content package. Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "full-ai-content-engine-setup-recurring-monthly-content-package",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "ai_content",
    "title": "Rush AI content tier (same-day delivery)",
    "description": "Professional support for: Rush AI content tier (same-day delivery). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 49,
    "delivery_days": 1,
    "slug": "rush-ai-content-tier-same-day-delivery",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "seo_content",
    "title": "Full technical SEO audit (any platform)",
    "description": "Professional support for: Full technical SEO audit (any platform). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "full-technical-seo-audit-any-platform",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Fix missing/broken meta titles & descriptions (bulk)",
    "description": "Professional support for: Fix missing/broken meta titles & descriptions (bulk). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-missing-broken-meta-titles-descriptions-bulk",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Fix missing H1 tags / heading structure",
    "description": "Professional support for: Fix missing H1 tags / heading structure. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-missing-h1-tags-heading-structure",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "XML sitemap generation + Search Console submission",
    "description": "Professional support for: XML sitemap generation + Search Console submission. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "xml-sitemap-generation-search-console-submission",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Fix indexing issues (\"why isn't my page on Google\")",
    "description": "Professional support for: Fix indexing issues (\"why isn't my page on Google\"). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-indexing-issues-why-isn-t-my-page-on-google",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Schema markup setup (rich snippets)",
    "description": "Professional support for: Schema markup setup (rich snippets). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "schema-markup-setup-rich-snippets",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Core Web Vitals fix package",
    "description": "Professional support for: Core Web Vitals fix package. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "core-web-vitals-fix-package",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Local SEO setup (Google Business Profile optimization)",
    "description": "Professional support for: Local SEO setup (Google Business Profile optimization). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "local-seo-setup-google-business-profile-optimization",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Backlink audit (toxic link cleanup)",
    "description": "Professional support for: Backlink audit (toxic link cleanup). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "backlink-audit-toxic-link-cleanup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Keyword research report (niche-specific)",
    "description": "Professional support for: Keyword research report (niche-specific). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "keyword-research-report-niche-specific",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Competitor SEO gap analysis",
    "description": "Professional support for: Competitor SEO gap analysis. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "competitor-seo-gap-analysis",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Blog post writing (SEO-optimized, per post)",
    "description": "Professional support for: Blog post writing (SEO-optimized, per post). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "blog-post-writing-seo-optimized-per-post",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Landing page copywriting",
    "description": "Professional support for: Landing page copywriting. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "landing-page-copywriting",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Product description copywriting (bulk)",
    "description": "Professional support for: Product description copywriting (bulk). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "product-description-copywriting-bulk",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Email sequence copywriting (welcome/nurture series)",
    "description": "Professional support for: Email sequence copywriting (welcome/nurture series). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "email-sequence-copywriting-welcome-nurture-series",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "About Us / brand story copywriting",
    "description": "Professional support for: About Us / brand story copywriting. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "about-us-brand-story-copywriting",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Ad copy writing (Google/Meta)",
    "description": "Professional support for: Ad copy writing (Google/Meta). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "ad-copy-writing-google-meta",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Press release writing",
    "description": "Professional support for: Press release writing. Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "press-release-writing",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Multilingual content translation (Hindi/English/EU languages)",
    "description": "Professional support for: Multilingual content translation (Hindi/English/EU languages). Fixed pricing, 20% advance, guaranteed delivery in 2 days.",
    "price_usd": 25,
    "delivery_days": 2,
    "slug": "multilingual-content-translation-hindi-english-eu-languages",
    "tier": "ai_content",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "og:image / social share preview setup",
    "description": "Professional support for: og:image / social share preview setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "og-image-social-share-preview-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Fix duplicate content/canonical tag issues",
    "description": "Professional support for: Fix duplicate content/canonical tag issues. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-duplicate-content-canonical-tag-issues",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Set up Google Analytics 4 + Search Console correctly",
    "description": "Professional support for: Set up Google Analytics 4 + Search Console correctly. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-google-analytics-4-search-console-correctly",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Content calendar planning (monthly)",
    "description": "Professional support for: Content calendar planning (monthly). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "content-calendar-planning-monthly",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Rewrite outdated content for SEO refresh",
    "description": "Professional support for: Rewrite outdated content for SEO refresh. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "rewrite-outdated-content-for-seo-refresh",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "FAQ page content + schema",
    "description": "Professional support for: FAQ page content + schema. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "faq-page-content-schema",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Voice search/AI-search (LLM visibility) optimization audit",
    "description": "Professional support for: Voice search/AI-search (LLM visibility) optimization audit. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "voice-search-ai-search-llm-visibility-optimization-audit",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Internal linking structure audit",
    "description": "Professional support for: Internal linking structure audit. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "internal-linking-structure-audit",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "404 page audit + redirect mapping after migration",
    "description": "Professional support for: 404 page audit + redirect mapping after migration. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "404-page-audit-redirect-mapping-after-migration",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Content audit + pruning for a bloated old site",
    "description": "Professional support for: Content audit + pruning for a bloated old site. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "content-audit-pruning-for-a-bloated-old-site",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "seo_content",
    "title": "Ongoing SEO retainer (monthly reporting + fixes)",
    "description": "Professional support for: Ongoing SEO retainer (monthly reporting + fixes). Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-seo-retainer-monthly-reporting-fixes",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "n8n workflow setup from scratch",
    "description": "Professional support for: n8n workflow setup from scratch. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "n8n-workflow-setup-from-scratch",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Fix broken n8n workflow",
    "description": "Professional support for: Fix broken n8n workflow. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-n8n-workflow",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Zapier automation setup",
    "description": "Professional support for: Zapier automation setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "zapier-automation-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Make.com (Integromat) scenario setup",
    "description": "Professional support for: Make.com (Integromat) scenario setup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "make-com-integromat-scenario-setup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "CRM setup (HubSpot/Pipedrive/Zoho) from scratch",
    "description": "Professional support for: CRM setup (HubSpot/Pipedrive/Zoho) from scratch. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "crm-setup-hubspot-pipedrive-zoho-from-scratch",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "CRM data cleanup/deduplication",
    "description": "Professional support for: CRM data cleanup/deduplication. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "crm-data-cleanup-deduplication",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Lead capture form → CRM → email automation pipeline",
    "description": "Professional support for: Lead capture form → CRM → email automation pipeline. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "lead-capture-form-crm-email-automation-pipeline",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "WhatsApp Business automation (auto-replies, order updates)",
    "description": "Professional support for: WhatsApp Business automation (auto-replies, order updates). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "whatsapp-business-automation-auto-replies-order-updates",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Slack/Discord notification automation for business events",
    "description": "Professional support for: Slack/Discord notification automation for business events. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "slack-discord-notification-automation-for-business-events",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Google Sheets as a lightweight automation hub",
    "description": "Professional support for: Google Sheets as a lightweight automation hub. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "google-sheets-as-a-lightweight-automation-hub",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Invoice generation automation (order → invoice → email)",
    "description": "Professional support for: Invoice generation automation (order → invoice → email). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "invoice-generation-automation-order-invoice-email",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Calendar booking automation (Calendly-style, custom)",
    "description": "Professional support for: Calendar booking automation (Calendly-style, custom). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "calendar-booking-automation-calendly-style-custom",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Customer onboarding automation sequence",
    "description": "Professional support for: Customer onboarding automation sequence. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "customer-onboarding-automation-sequence",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Abandoned cart → WhatsApp/SMS recovery automation",
    "description": "Professional support for: Abandoned cart → WhatsApp/SMS recovery automation. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "abandoned-cart-whatsapp-sms-recovery-automation",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Social media auto-posting setup (Buffer/Make-based)",
    "description": "Professional support for: Social media auto-posting setup (Buffer/Make-based). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "social-media-auto-posting-setup-buffer-make-based",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Review request automation (post-purchase)",
    "description": "Professional support for: Review request automation (post-purchase). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "review-request-automation-post-purchase",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Data sync between two SaaS tools that don't natively integrate",
    "description": "Professional support for: Data sync between two SaaS tools that don't natively integrate. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "data-sync-between-two-saas-tools-that-don-t-natively-integrate",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Webhook-based order routing (e.g., Shopify → fulfillment partner)",
    "description": "Professional support for: Webhook-based order routing (e.g., Shopify → fulfillment partner). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "webhook-based-order-routing-e-g-shopify-fulfillment-partner",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Automated reporting (daily/weekly business metrics to email/Slack)",
    "description": "Professional support for: Automated reporting (daily/weekly business metrics to email/Slack). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "automated-reporting-daily-weekly-business-metrics-to-email-slack",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "AI-powered email triage/auto-categorization",
    "description": "Professional support for: AI-powered email triage/auto-categorization. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "ai-powered-email-triage-auto-categorization",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Automated PDF generation (contracts, reports, certificates)",
    "description": "Professional support for: Automated PDF generation (contracts, reports, certificates). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "automated-pdf-generation-contracts-reports-certificates",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Recurring billing reminder automation",
    "description": "Professional support for: Recurring billing reminder automation. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "recurring-billing-reminder-automation",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Lead scoring automation",
    "description": "Professional support for: Lead scoring automation. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "lead-scoring-automation",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Automated backup workflows (database/files to cloud storage)",
    "description": "Professional support for: Automated backup workflows (database/files to cloud storage). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "automated-backup-workflows-database-files-to-cloud-storage",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Multi-step approval workflow automation (internal ops)",
    "description": "Professional support for: Multi-step approval workflow automation (internal ops). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "multi-step-approval-workflow-automation-internal-ops",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Appointment reminder automation (SMS/email/WhatsApp)",
    "description": "Professional support for: Appointment reminder automation (SMS/email/WhatsApp). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "appointment-reminder-automation-sms-email-whatsapp",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Inventory reorder alert automation",
    "description": "Professional support for: Inventory reorder alert automation. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "inventory-reorder-alert-automation",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Job application/ATS pipeline automation",
    "description": "Professional support for: Job application/ATS pipeline automation. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "job-application-ats-pipeline-automation",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Custom API-to-API bridge (no native integration exists)",
    "description": "Professional support for: Custom API-to-API bridge (no native integration exists). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "custom-api-to-api-bridge-no-native-integration-exists",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "automation",
    "title": "Automation health audit (\"which of my workflows are silently broken\")",
    "description": "Professional support for: Automation health audit (\"which of my workflows are silently broken\"). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "automation-health-audit-which-of-my-workflows-are-silently-broken",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "General emergency website-down triage (any stack, 1-hr response)",
    "description": "Professional support for: General emergency website-down triage (any stack, 1-hr response). Fixed pricing, 20% advance, guaranteed delivery in 1 days.",
    "price_usd": 89,
    "delivery_days": 1,
    "slug": "general-emergency-website-down-triage-any-stack-1-hr-response",
    "tier": "emergency",
    "is_emergency": true
  },
  {
    "category": "misc",
    "title": "Email account locked out / 2FA recovery guidance",
    "description": "Professional support for: Email account locked out / 2FA recovery guidance. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "email-account-locked-out-2fa-recovery-guidance",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Google Workspace admin issue resolution",
    "description": "Professional support for: Google Workspace admin issue resolution. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "google-workspace-admin-issue-resolution",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Recover hacked social media account guidance",
    "description": "Professional support for: Recover hacked social media account guidance. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "recover-hacked-social-media-account-guidance",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Fix broken Zoom/Google Meet integration on a booking site",
    "description": "Professional support for: Fix broken Zoom/Google Meet integration on a booking site. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-zoom-google-meet-integration-on-a-booking-site",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up Google Business Profile from scratch",
    "description": "Professional support for: Set up Google Business Profile from scratch. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-google-business-profile-from-scratch",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up Meta Business Suite / ad account from scratch",
    "description": "Professional support for: Set up Meta Business Suite / ad account from scratch. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-meta-business-suite-ad-account-from-scratch",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Fix disapproved Meta/Google ad account",
    "description": "Professional support for: Fix disapproved Meta/Google ad account. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-disapproved-meta-google-ad-account",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up Google Search Console + Analytics from scratch (non-technical client)",
    "description": "Professional support for: Set up Google Search Console + Analytics from scratch (non-technical client). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-google-search-console-analytics-from-scratch-non-technical-client",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Password manager setup + credential cleanup for a small business",
    "description": "Professional support for: Password manager setup + credential cleanup for a small business. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "password-manager-setup-credential-cleanup-for-a-small-business",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Migrate a business off a freelancer who disappeared (audit + takeover)",
    "description": "Professional support for: Migrate a business off a freelancer who disappeared (audit + takeover). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "migrate-a-business-off-a-freelancer-who-disappeared-audit-takeover",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Website accessibility (WCAG) basic compliance fixes",
    "description": "Professional support for: Website accessibility (WCAG) basic compliance fixes. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "website-accessibility-wcag-basic-compliance-fixes",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Cookie consent / privacy policy page generation + install",
    "description": "Professional support for: Cookie consent / privacy policy page generation + install. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "cookie-consent-privacy-policy-page-generation-install",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Terms of Service / Privacy Policy drafting (template-based, non-legal-advice)",
    "description": "Professional support for: Terms of Service / Privacy Policy drafting (template-based, non-legal-advice). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "terms-of-service-privacy-policy-drafting-template-based-non-legal-advice",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "GDPR compliance basics audit for an EU-facing site",
    "description": "Professional support for: GDPR compliance basics audit for an EU-facing site. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "gdpr-compliance-basics-audit-for-an-eu-facing-site",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Fix broken third-party embed (maps, calendars, reviews widgets)",
    "description": "Professional support for: Fix broken third-party embed (maps, calendars, reviews widgets). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-third-party-embed-maps-calendars-reviews-widgets",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up a \"Coming Soon\" + waitlist page for a pre-launch idea",
    "description": "Professional support for: Set up a \"Coming Soon\" + waitlist page for a pre-launch idea. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-a-coming-soon-waitlist-page-for-a-pre-launch-idea",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "One-time consultation call: \"what's wrong with my online presence\"",
    "description": "Professional support for: One-time consultation call: \"what's wrong with my online presence\". Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "one-time-consultation-call-what-s-wrong-with-my-online-presence",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Competitor teardown report (what they're doing better, actionable)",
    "description": "Professional support for: Competitor teardown report (what they're doing better, actionable). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "competitor-teardown-report-what-they-re-doing-better-actionable",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up a simple internal tool/dashboard for a small team (no-code)",
    "description": "Professional support for: Set up a simple internal tool/dashboard for a small team (no-code). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-a-simple-internal-tool-dashboard-for-a-small-team-no-code",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Data entry + cleanup project (bulk)",
    "description": "Professional support for: Data entry + cleanup project (bulk). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "data-entry-cleanup-project-bulk",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "PDF form creation (fillable, for client intake/contracts)",
    "description": "Professional support for: PDF form creation (fillable, for client intake/contracts). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "pdf-form-creation-fillable-for-client-intake-contracts",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Convert a PDF brochure into a website",
    "description": "Professional support for: Convert a PDF brochure into a website. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "convert-a-pdf-brochure-into-a-website",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Digitize a paper-based business process into a simple web app",
    "description": "Professional support for: Digitize a paper-based business process into a simple web app. Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "digitize-a-paper-based-business-process-into-a-simple-web-app",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Restore a website from an old backup",
    "description": "Professional support for: Restore a website from an old backup. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "restore-a-website-from-an-old-backup",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Fix broken QR code campaigns",
    "description": "Professional support for: Fix broken QR code campaigns. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "fix-broken-qr-code-campaigns",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Set up a simple booking/scheduling system for a service business",
    "description": "Professional support for: Set up a simple booking/scheduling system for a service business. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "set-up-a-simple-booking-scheduling-system-for-a-service-business",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Translate an entire website (content + SEO meta) to another language",
    "description": "Professional support for: Translate an entire website (content + SEO meta) to another language. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "translate-an-entire-website-content-seo-meta-to-another-language",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Full \"digital health check\" report for a small business (one deliverable covering site, SEO, social, security)",
    "description": "Professional support for: Full \"digital health check\" report for a small business (one deliverable covering site, SEO, social, security). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "full-digital-health-check-report-for-a-small-business-one-deliverable-covering-site-seo-social-security",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "White-label engagement: build it, client's brand on it, you stay invisible",
    "description": "Professional support for: White-label engagement: build it, client's brand on it, you stay invisible. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "white-label-engagement-build-it-client-s-brand-on-it-you-stay-invisible",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Ongoing retainer: \"call us whenever something breaks\" monthly plan",
    "description": "Professional support for: Ongoing retainer: \"call us whenever something breaks\" monthly plan. Fixed pricing, 20% advance, guaranteed delivery in 30 days.",
    "price_usd": 149,
    "delivery_days": 30,
    "slug": "ongoing-retainer-call-us-whenever-something-breaks-monthly-plan",
    "tier": "retainer",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Speed dial / WhatsApp priority support add-on for any gig",
    "description": "Professional support for: Speed dial / WhatsApp priority support add-on for any gig. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "speed-dial-whatsapp-priority-support-add-on-for-any-gig",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Second opinion / code review on work delivered by another freelancer",
    "description": "Professional support for: Second opinion / code review on work delivered by another freelancer. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "second-opinion-code-review-on-work-delivered-by-another-freelancer",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Pre-investor due-diligence tech audit (for a startup raising funds)",
    "description": "Professional support for: Pre-investor due-diligence tech audit (for a startup raising funds). Fixed pricing, 20% advance, guaranteed delivery in 14 days.",
    "price_usd": 199,
    "delivery_days": 14,
    "slug": "pre-investor-due-diligence-tech-audit-for-a-startup-raising-funds",
    "tier": "build",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Custom request — anything not listed (routes to human quote via AI intake form)",
    "description": "Professional support for: Custom request — anything not listed (routes to human quote via AI intake form). Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "custom-request-anything-not-listed-routes-to-human-quote-via-ai-intake-form",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Confirm: do you want `/services` as a section of marutidigital.in, or a **separate domain/subdomain** (e.g. `fix.marutidigital.in` or a fresh brand)? This affects SEO and whether n8n dark theme fits a \"trust + payments\" service page (a lighter, more \"professional services\" look often converts better for this kind of transactional trust-based purchase than a dark dev-tool aesthetic).",
    "description": "Professional support for: Confirm: do you want `/services` as a section of marutidigital.in, or a **separate domain/subdomain** (e.g. `fix.marutidigital.in` or a fresh brand)? This affects SEO and whether n8n dark theme fits a \"trust + payments\" service page (a lighter, more \"professional services\" look often converts better for this kind of transactional trust-based purchase than a dark dev-tool aesthetic).. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "confirm-do-you-want-services-as-a-section-of-marutidigital-in-or-a-separate-domain-subdomain-e-g-fix-marutidigital-in-or-a-fresh-brand-this-affects-seo-and-whether-n8n-dark-theme-fits-a-trust-payments-service-page-a-lighter-more-professional-services-look-often-converts-better-for-this-kind-of-transactional-trust-based-purchase-than-a-dark-dev-tool-aesthetic",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Confirm Stripe account is the same one already wired into marutidigital, or a new one for this vertical.",
    "description": "Professional support for: Confirm Stripe account is the same one already wired into marutidigital, or a new one for this vertical.. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "confirm-stripe-account-is-the-same-one-already-wired-into-marutidigital-or-a-new-one-for-this-vertical",
    "tier": "standard",
    "is_emergency": false
  },
  {
    "category": "misc",
    "title": "Confirm who's first point of contact in the live chat escalation (you, or a Khargone lead?).",
    "description": "Professional support for: Confirm who's first point of contact in the live chat escalation (you, or a Khargone lead?).. Fixed pricing, 20% advance, guaranteed delivery in 3 days.",
    "price_usd": 59,
    "delivery_days": 3,
    "slug": "confirm-who-s-first-point-of-contact-in-the-live-chat-escalation-you-or-a-khargone-lead",
    "tier": "standard",
    "is_emergency": false
  }
];
