'use client';

import React, { useState } from 'react';
import { Search, Briefcase, Star, Users, Zap, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import CategoryCard from '@/components/services/CategoryCard';
import TrustBadge from '@/components/services/TrustBadge';
import Link from 'next/link';

const CATEGORIES = [
  {
    slug: 'vercel',
    name: 'Vercel & Deployment',
    description: 'Build failures, DNS, Cron jobs, edge configs, environment variables, monorepos.',
    icon: '▲',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'blue',
  },
  {
    slug: 'supabase',
    name: 'Supabase & Backend',
    description: 'RLS policies, Auth, Storage, Edge Functions, schema design, real-time, migrations.',
    icon: '⚡',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'green',
  },
  {
    slug: 'wordpress',
    name: 'WordPress Fixes',
    description: 'WSOD, hacks, WooCommerce, migrations, SSL, performance, plugins, Elementor.',
    icon: '🔷',
    gigCount: 40,
    priceFrom: 25,
    colorClass: 'blue',
  },
  {
    slug: 'shopify',
    name: 'Shopify Store',
    description: 'Checkout bugs, payment gateways, Liquid templates, migrations, SEO, multicurrency.',
    icon: '🛍️',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'green',
  },
  {
    slug: 'wix',
    name: 'Wix / Squarespace / Webflow',
    description: 'Mobile layouts, domain DNS, CMS collections, animations, form fixes, migrations.',
    icon: '🌐',
    gigCount: 25,
    priceFrom: 25,
    colorClass: 'teal',
  },
  {
    slug: 'ssl_domain',
    name: 'SSL, Domain & DNS',
    description: 'SSL certificates, MX records, SPF/DKIM/DMARC, Cloudflare CDN, domain transfers.',
    icon: '🔒',
    gigCount: 30,
    priceFrom: 25,
    colorClass: 'amber',
  },
  {
    slug: 'nocode',
    name: 'No-Code & AI Builders',
    description: 'Lovable, Bolt, Bubble, FlutterFlow, Replit — connections, CORS, auth, Stripe.',
    icon: '🤖',
    gigCount: 30,
    priceFrom: 25,
    colorClass: 'purple',
  },
  {
    slug: 'cloud_api',
    name: 'Cloud, AI & APIs',
    description: 'AWS, Firebase, Stripe, OpenAI, Gemini, Cloudinary, Sentry, CI/CD, RAG pipelines.',
    icon: '☁️',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'cyan',
  },
  {
    slug: 'websites',
    name: 'New Website Builds',
    description: '40 niche-specific websites: clinics, restaurants, salons, lawyers, real estate, e-commerce.',
    icon: '🏗️',
    gigCount: 40,
    priceFrom: 59,
    colorClass: 'indigo',
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce Setup',
    description: 'Multi-platform store launches, Etsy, Amazon, abandoned cart, checkout, analytics pixels.',
    icon: '🛒',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'orange',
  },
  {
    slug: 'design',
    name: 'Design Services',
    description: 'Logos, brand kits, social posts, flyers, pitch decks, YouTube art, packaging, icons.',
    icon: '🎨',
    gigCount: 40,
    priceFrom: 39,
    colorClass: 'pink',
  },
  {
    slug: 'ai_content',
    name: 'AI Content & Video',
    description: 'AI product photos, headshots, ad creatives, explainer videos, voiceovers, UGC ads.',
    icon: '✨',
    gigCount: 40,
    priceFrom: 25,
    colorClass: 'yellow',
  },
  {
    slug: 'seo_content',
    name: 'SEO & Copywriting',
    description: 'Technical audits, Core Web Vitals, blog posts, landing pages, schema, keyword research.',
    icon: '📈',
    gigCount: 30,
    priceFrom: 25,
    colorClass: 'lime',
  },
  {
    slug: 'automation',
    name: 'Automation & Integrations',
    description: 'n8n, Zapier, Make.com, CRM setup, WhatsApp bots, invoice automation, API bridges.',
    icon: '⚙️',
    gigCount: 30,
    priceFrom: 59,
    colorClass: 'fuchsia',
  },
  {
    slug: 'misc',
    name: 'General "Fix My Tech"',
    description: 'Emergency triage, account recovery, GDPR, Google Business, accessibility, consultations.',
    icon: '🛠️',
    gigCount: 35,
    priceFrom: 25,
    colorClass: 'red',
  },
];

const STATS = [
  { value: '545+', label: 'Fixed-Price Gigs', icon: Briefcase },
  { value: '4.9★', label: 'Average Rating', icon: Star },
  { value: '15', label: 'Service Categories', icon: Globe },
  { value: '24hr', label: 'Emergency Response', icon: Zap },
];

export default function ServicesMarketplacePage() {
  const [search, setSearch] = useState('');

  const filtered = CATEGORIES.filter(cat =>
    search === '' ||
    cat.name.toLowerCase().includes(search.toLowerCase()) ||
    cat.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10 py-4">

      {/* Hero header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col items-center gap-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-tint-1 border border-primary/20 text-primary text-xs font-semibold">
          <ShieldCheck size={13} />
          <span>Fixed-Price · No Bidding · 20% to Start</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-n8ntext-dark leading-tight">
          Your Website <span className="gradient-text">Rescue Desk</span>
        </h1>

        <p className="text-sm md:text-base text-n8ntext-base max-w-xl leading-relaxed">
          Pick a fixed-price service card, pay 20% deposit, and have it fixed by our Khargone team. 
          Cheaper than Fiverr. Faster than an agency. No bidding wars.
        </p>

        {/* Trust strip */}
        <TrustBadge variant="strip" />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mt-2">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <Icon size={14} className="text-primary" />
              </div>
              <div className="text-lg font-black text-n8ntext-dark">{value}</div>
              <div className="text-[10px] text-n8ntext-light uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search bar */}
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-n8ntext-light" />
          <input
            type="text"
            placeholder="Search services... (e.g. Vercel, SSL, WordPress, logo)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-n8nbg-light border border-n8nfg-light rounded-xl pl-10 pr-4 py-3 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Category grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-n8ntext-dark">
            {search ? `${filtered.length} categories match "${search}"` : 'Browse All 15 Categories'}
          </h2>
          <Link href="/services/request-custom" className="btn-ghost py-1.5 px-3 text-xs flex items-center gap-1.5">
            <span>Can't find it?</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(cat => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-n8ntext-light">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm">No categories match your search.</p>
            <Link href="/services/request-custom" className="btn-primary mt-4 inline-flex items-center gap-2 py-2 px-4 text-xs">
              <span>Request a custom service</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        )}
      </section>

      <div className="section-divider" />

      {/* How it works */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-n8ntext-dark">How It Works</h2>
          <p className="text-sm text-n8ntext-base mt-1">Simple 4-step process. No calls, no interviews, no waiting.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Pick a Service', desc: 'Browse 545 fixed-price gigs across 15 categories. Find your problem, click Buy Now.' },
            { step: '02', title: 'Pay 20% Deposit', desc: 'Secure your spot with just 20% upfront via Stripe. Fully refundable if we can\'t fix it.' },
            { step: '03', title: 'We Fix It', desc: 'Our Khargone team gets assigned immediately. You track progress in your dashboard.' },
            { step: '04', title: 'Pay 80% On Delivery', desc: 'Approve the delivery, then pay the rest. No approval = no charge.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="n8n-card text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-xs font-black mx-auto">
                {step}
              </div>
              <h3 className="text-sm font-bold text-n8ntext-dark">{title}</h3>
              <p className="text-[11px] text-n8ntext-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA custom request */}
      <section className="bg-n8nbg-light border border-n8nfg-light rounded-2xl p-8 text-center space-y-4">
        <div className="text-3xl">💬</div>
        <h2 className="text-xl font-bold text-n8ntext-dark">Don't See Your Problem?</h2>
        <p className="text-sm text-n8ntext-base max-w-md mx-auto">
          Describe your issue in plain English. Our AI will suggest matching services, and a real human will send you a custom quote within 24 hours.
        </p>
        <Link href="/services/request-custom" className="btn-primary inline-flex items-center gap-2 py-2.5 px-6 text-sm font-semibold">
          <span>Request Custom Service</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}
