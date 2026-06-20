'use client';

import React, { useState } from 'react';
import { ShoppingBag, Star, Filter, ArrowUpDown, Check, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  category: 'Templates' | 'PDFs' | 'Plugins' | 'Bundles';
  price: number;
  originalPrice?: number;
  desc: string;
  rating: number;
  featured?: boolean;
}

export default function DigitalShopPage() {
  const { addToCart, cart } = useCart();
  
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<string>('Popular');

  const filters = ['All', 'Templates', 'PDFs', 'Plugins', 'Bundles'];
  const sortOptions = ['Popular', 'Price: Low to High', 'Price: High to Low'];

  const products: Product[] = [
    {
      id: 'prod-1',
      name: 'Premium n8n Dashboard Automation Template',
      category: 'Templates',
      price: 999,
      originalPrice: 1499,
      desc: 'Complete lead capture, automated email validation, and direct Hubspot/Notion CRM integration loops.',
      rating: 5,
      featured: true,
    },
    {
      id: 'prod-2',
      name: 'Indian Freelancer Financial Ledger Bundle',
      category: 'Bundles',
      price: 499,
      originalPrice: 799,
      desc: 'Excel ledger logs, GST calculators, legal contract templates, and client onboarding decks customized for India.',
      rating: 4.8,
    },
    {
      id: 'prod-3',
      name: 'Supabase + Next.js SaaS Boilerplate Starter',
      category: 'Templates',
      price: 2499,
      desc: 'Pre-configured auth modules, user subscriptions database schemas, stripe payment callbacks, and layout shells.',
      rating: 4.9,
    },
    {
      id: 'prod-4',
      name: 'Tailwind Glassmorphic UI Components Library',
      category: 'Plugins',
      price: 799,
      originalPrice: 999,
      desc: 'Copy-paste Tailwind code snippets, custom glass panels, glow shadows, and responsive side navigation components.',
      rating: 4.7,
    },
    {
      id: 'prod-5',
      name: 'The Cold Email Client Acquisition Blueprint',
      category: 'PDFs',
      price: 299,
      desc: 'An actionable PDF guide detailing the outreach strategies and including 15 copy-paste cold email templates targeting US/EU markets.',
      rating: 4.5,
    },
    {
      id: 'prod-6',
      name: 'Cloudflare Worker DNS Redirect Proxy Node',
      category: 'Plugins',
      price: 1199,
      originalPrice: 1599,
      desc: 'Custom worker code to proxy traffic, cache images, manage DNS configurations, and pre-validate SSL handshakes.',
      rating: 5,
    },
  ];

  // Filtering
  const filteredProducts = selectedFilter === 'All'
    ? products
    : products.filter(p => p.category === selectedFilter);

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'Price: Low to High') {
      return a.price - b.price;
    }
    if (selectedSort === 'Price: High to Low') {
      return b.price - a.price;
    }
    // 'Popular' sort - ratings weight
    return b.rating - a.rating;
  });

  const handlePreview = (product: Product) => {
    alert(`🔍 Product Preview: "${product.name}"\n\nDescription: ${product.desc}\nCategory: ${product.category}\nRating: ${product.rating} ★\n\nINR Price: ₹${product.price.toLocaleString('en-IN')}`);
  };

  const isItemInCart = (id: string) => cart.some(item => item.id === id);

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex items-center justify-between border-b border-n8nfg-light pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary-tint-1 border border-primary/20 text-primary">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-n8ntext-dark flex items-center gap-2">
              <span>Digital Shop</span>
              <span className="card-badge passive">Passive Income</span>
            </h1>
            <p className="text-xs text-n8ntext-base">Download premium automation files, developer boilerplates, and freelancer guides.</p>
          </div>
        </div>
      </div>

      {/* Filters and sorting row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-n8nbg-lighter border border-n8nfg-light p-3 rounded-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedFilter === f
                  ? 'text-primary bg-primary-tint-1 border border-primary/20'
                  : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base border border-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 text-xs font-medium text-n8ntext-base w-full sm:w-auto">
          <ArrowUpDown size={14} className="text-n8ntext-light" />
          <span>Sort By:</span>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="bg-n8nbg-base border border-n8nfg-light rounded px-2.5 py-1.5 text-xs text-n8ntext-dark focus:outline-none cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((prod) => (
          <div key={prod.id} className="n8n-card flex flex-col justify-between group h-full relative p-5">
            
            {/* Top decorative gradient edge */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              {/* Mockup Preview Thumbnail */}
              <div className="w-full h-36 bg-n8nbg-base rounded-lg border border-n8nfg-light flex flex-col items-center justify-center relative overflow-hidden select-none">
                {/* Glow backdrop inside mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-tint-3 via-transparent to-secondary/5 opacity-40 group-hover:scale-105 transition-transform" />
                
                {/* Visual Representation of product */}
                <span className="text-[10px] uppercase font-mono tracking-widest text-n8ntext-light z-10">{prod.category}</span>
                <span className="text-sm font-bold text-n8ntext-dark mt-2 z-10 px-4 text-center truncate max-w-full">{prod.name.split(' ').slice(0, 3).join(' ')}</span>
                
                <span className="text-primary font-black mt-3 text-xs z-10 bg-primary-tint-1 border border-primary/20 px-2 py-0.5 rounded-full">
                  ₹{prod.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Title & Rating */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-n8ntext-light font-bold">
                  <span className="uppercase tracking-wide">{prod.category}</span>
                  <div className="flex items-center gap-0.5 text-warning">
                    <Star size={10} className="fill-warning" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                <h3 className="text-xs font-bold text-n8ntext-dark group-hover:text-primary transition-colors leading-normal">
                  {prod.name}
                </h3>
                <p className="text-[10px] text-n8ntext-base leading-relaxed line-clamp-2">
                  {prod.desc}
                </p>
              </div>
            </div>

            {/* Pricing and CTAs */}
            <div className="border-t border-n8nfg-light mt-4 pt-3 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] text-n8ntext-light">Single License</span>
                <div className="flex items-center gap-2">
                  {prod.originalPrice && (
                    <span className="text-xs text-n8ntext-lighter line-through">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                  <span className="text-sm font-black text-n8ntext-dark">₹{prod.price.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handlePreview(prod)}
                  className="btn-ghost py-2 px-3 text-xs flex items-center justify-center gap-1.5"
                >
                  <Eye size={12} />
                  <span>Preview</span>
                </button>

                <button
                  onClick={() => {
                    addToCart({
                      id: prod.id,
                      name: prod.name,
                      price: prod.price,
                      category: prod.category,
                    });
                  }}
                  className="btn-primary py-2 px-3 text-xs flex items-center justify-center gap-1.5 font-semibold"
                >
                  {isItemInCart(prod.id) ? (
                    <>
                      <Check size={12} />
                      <span>Added (+1)</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={12} />
                      <span>Buy Now</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
