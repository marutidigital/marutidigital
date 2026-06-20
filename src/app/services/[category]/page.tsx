'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Filter, Clock, Star, Search, SlidersHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import GigCard from '@/components/services/GigCard';
import TrustBadge from '@/components/services/TrustBadge';
import { fetchGigsByCategory, Gig, GigTier, getTierLabel } from '@/lib/servicesHelpers';

const CATEGORY_META: Record<string, { name: string; description: string; icon: string }> = {
  vercel:     { name: 'Vercel & Deployment', description: 'Build failures, DNS, environment variables, monorepos, edge functions and more.', icon: '▲' },
  supabase:   { name: 'Supabase & Backend', description: 'RLS policies, Auth, Storage, Edge Functions, schema design, real-time subscriptions.', icon: '⚡' },
  wordpress:  { name: 'WordPress Fixes', description: 'WSOD, hacks, WooCommerce, migrations, SSL, performance optimization.', icon: '🔷' },
  shopify:    { name: 'Shopify Store', description: 'Checkout bugs, payment gateways, Liquid templates, migrations, SEO.', icon: '🛍️' },
  wix:        { name: 'Wix / Squarespace / Webflow', description: 'Mobile layouts, domain DNS, CMS collections, animations, form fixes.', icon: '🌐' },
  ssl_domain: { name: 'SSL, Domain & DNS', description: 'SSL certificates, MX records, SPF/DKIM/DMARC, Cloudflare CDN.', icon: '🔒' },
  nocode:     { name: 'No-Code & AI Builders', description: 'Lovable, Bolt, Bubble, FlutterFlow, Replit connections, auth, Stripe.', icon: '🤖' },
  cloud_api:  { name: 'Cloud, AI & APIs', description: 'AWS, Firebase, Stripe, OpenAI, Gemini, Cloudinary, Sentry, CI/CD.', icon: '☁️' },
  websites:   { name: 'New Website Builds', description: '40 niche-specific websites: clinics, restaurants, salons, lawyers, real estate.', icon: '🏗️' },
  ecommerce:  { name: 'E-Commerce Setup', description: 'Multi-platform store launches, Etsy, Amazon, abandoned cart, checkout.', icon: '🛒' },
  design:     { name: 'Design Services', description: 'Logos, brand kits, social posts, flyers, pitch decks, YouTube art, packaging.', icon: '🎨' },
  ai_content: { name: 'AI Content & Video', description: 'AI product photos, headshots, ad creatives, explainer videos, voiceovers.', icon: '✨' },
  seo_content:{ name: 'SEO & Copywriting', description: 'Technical audits, Core Web Vitals, blog posts, landing pages, schema.', icon: '📈' },
  automation: { name: 'Automation & Integrations', description: 'n8n, Zapier, Make.com, CRM setup, WhatsApp bots, invoice automation.', icon: '⚙️' },
  misc:       { name: 'General "Fix My Tech"', description: 'Emergency triage, account recovery, GDPR, Google Business, accessibility.', icon: '🛠️' },
};

const TIERS: GigTier[] = ['quick_fix', 'standard', 'build', 'design', 'ai_content', 'retainer', 'emergency'];

type SortOption = 'price_asc' | 'price_desc' | 'delivery_asc' | 'popular';

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params?.category as string;

  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedTiers, setSelectedTiers] = useState<GigTier[]>([]);
  const [maxDelivery, setMaxDelivery] = useState<number | null>(null);
  const [sort, setSort] = useState<SortOption>('popular');
  const [showFilters, setShowFilters] = useState(false);

  const meta = CATEGORY_META[categorySlug] || { name: categorySlug, description: '', icon: '🛠️' };

  useEffect(() => {
    if (!categorySlug) return;
    setLoading(true);
    fetchGigsByCategory(categorySlug).then(data => {
      setGigs(data);
      setLoading(false);
    });
  }, [categorySlug]);

  const filteredGigs = gigs
    .filter(g => {
      if (search && !g.title.toLowerCase().includes(search.toLowerCase()) && !g.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedTiers.length > 0 && !selectedTiers.includes(g.tier)) return false;
      if (maxDelivery && g.delivery_days > maxDelivery) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price_asc') return a.price_usd - b.price_usd;
      if (sort === 'price_desc') return b.price_usd - a.price_usd;
      if (sort === 'delivery_asc') return a.delivery_days - b.delivery_days;
      return b.order_count - a.order_count; // popular
    });

  const toggleTier = (tier: GigTier) => {
    setSelectedTiers(prev => prev.includes(tier) ? prev.filter(t => t !== tier) : [...prev, tier]);
  };

  const clearFilters = () => {
    setSearch('');
    setSelectedTiers([]);
    setMaxDelivery(null);
    setSort('popular');
  };

  const hasActiveFilters = search || selectedTiers.length > 0 || maxDelivery !== null;

  return (
    <div className="space-y-6">

      {/* Breadcrumb + Header */}
      <div className="space-y-4">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs text-n8ntext-light hover:text-primary transition-colors">
          <ArrowLeft size={13} />
          Back to all services
        </Link>

        <div className="flex items-start gap-4">
          <div className="text-3xl w-12 h-12 flex items-center justify-center bg-n8nbg-light border border-n8nfg-light rounded-xl flex-shrink-0">
            {meta.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-n8ntext-dark">{meta.name}</h1>
            <p className="text-sm text-n8ntext-base mt-0.5">{meta.description}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-n8ntext-light">
              <span className="flex items-center gap-1"><Star size={11} className="text-amber-400 fill-amber-400" /> 4.9 avg rating</span>
              <span>·</span>
              <span>{loading ? '...' : `${gigs.length} services`}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={11} /> Delivery from 1 day</span>
            </div>
          </div>
        </div>

        <TrustBadge variant="strip" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">

        {/* Filter Sidebar */}
        <aside className={`lg:w-52 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-4 space-y-5 sticky top-20">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-n8ntext-dark uppercase tracking-wider flex items-center gap-1.5">
                <Filter size={12} />
                Filters
              </h3>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-[10px] text-primary hover:underline">
                  Clear all
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-n8ntext-light">Sort by</label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-2.5 py-1.5 text-xs text-n8ntext-dark focus:outline-none focus:border-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="price_asc">Price: Low → High</option>
                <option value="price_desc">Price: High → Low</option>
                <option value="delivery_asc">Fastest Delivery</option>
              </select>
            </div>

            {/* Tier filters */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-n8ntext-light">Service Type</label>
              <div className="space-y-1">
                {TIERS.map(tier => (
                  <button
                    key={tier}
                    onClick={() => toggleTier(tier)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors flex items-center justify-between ${
                      selectedTiers.includes(tier)
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-n8ntext-base hover:bg-n8nbg-base'
                    }`}
                  >
                    {getTierLabel(tier)}
                    {selectedTiers.includes(tier) && <X size={10} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery filter */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-n8ntext-light">Max Delivery Time</label>
              <div className="space-y-1">
                {[1, 3, 7, 14, 30].map(days => (
                  <button
                    key={days}
                    onClick={() => setMaxDelivery(maxDelivery === days ? null : days)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                      maxDelivery === days
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-n8ntext-base hover:bg-n8nbg-base'
                    }`}
                  >
                    {days === 1 ? '24 hours' : `${days} days`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main gig list */}
        <div className="flex-1 space-y-4">

          {/* Search + filter toggle */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-n8ntext-light" />
              <input
                type="text"
                placeholder="Search within this category..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-n8nbg-light border border-n8nfg-light rounded-lg pl-8 pr-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`lg:hidden p-2 rounded-lg border text-xs flex items-center gap-1.5 ${showFilters ? 'bg-primary text-white border-primary' : 'bg-n8nbg-light border-n8nfg-light text-n8ntext-base'}`}
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {/* Results count */}
          <div className="text-xs text-n8ntext-light">
            Showing <span className="font-semibold text-n8ntext-base">{filteredGigs.length}</span> of {gigs.length} services
            {hasActiveFilters && (
              <button onClick={clearFilters} className="ml-2 text-primary hover:underline">clear filters</button>
            )}
          </div>

          {/* Gig grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="n8n-card animate-pulse space-y-3">
                  <div className="h-4 bg-n8nbg-dark rounded w-1/3" />
                  <div className="h-5 bg-n8nbg-dark rounded w-4/5" />
                  <div className="h-3 bg-n8nbg-dark rounded w-full" />
                  <div className="h-3 bg-n8nbg-dark rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : filteredGigs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredGigs.map(gig => (
                <GigCard key={gig.id} gig={gig} categorySlug={categorySlug} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-n8ntext-light">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-sm">No services match your filters.</p>
              <button onClick={clearFilters} className="btn-ghost mt-3 py-1.5 px-4 text-xs">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
