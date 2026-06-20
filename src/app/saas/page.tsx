'use client';

import React, { useState } from 'react';
import { Zap, Check, Star, AlertCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualDiscountedPrice: number; // monthly equivalent when billed annually
  desc: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export default function SaaSProductsPage() {
  const { addToCart } = useCart();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const tiers: PricingTier[] = [
    {
      id: 'saas-starter',
      name: 'Starter Plan',
      monthlyPrice: 499,
      annualDiscountedPrice: 399,
      desc: 'Essential micro-widgets and tools for single freelancers.',
      ctaText: 'Activate Starter',
      features: [
        '5 active bio-link profiles',
        'Unlimited CSS Generator exports',
        '100 WHOIS & DNS queries/mo',
        '25 daily AI copywriting runs',
        'Email notifications reports',
        'Standard Discord lounge access'
      ]
    },
    {
      id: 'saas-pro',
      name: 'Professional Pro',
      monthlyPrice: 1499,
      annualDiscountedPrice: 1199,
      desc: 'Complete automation systems for scaling designers and makers.',
      ctaText: 'Upgrade to Pro',
      popular: true,
      features: [
        'Unlimited bio-link profiles',
        'Custom domain hosting mapping',
        'Unlimited WHOIS & DNS queries',
        'Unlimited AI copywriting templates',
        'Client ledger dashboard sync',
        'Priority email support (under 4 hrs)',
        'Exclusive Mastermind channels'
      ]
    },
    {
      id: 'saas-agency',
      name: 'Agency Elite',
      monthlyPrice: 4999,
      annualDiscountedPrice: 3999,
      desc: 'High-speed configurations and custom scripts for agency teams.',
      ctaText: 'Deploy Elite Tier',
      features: [
        'Everything in Professional Pro',
        'Up to 10 team seats license',
        'White-label dashboard embeds',
        'Direct API endpoints access',
        'Custom n8n nodes development',
        'Dedicated server hosting nodes',
        'Monthly consultation loops (1 hr)'
      ]
    }
  ];

  const handleBuyPlan = (tier: PricingTier) => {
    const currentPrice = billingPeriod === 'annual' ? tier.annualDiscountedPrice * 12 : tier.monthlyPrice;
    const planName = `${tier.name} (${billingPeriod === 'annual' ? 'Billed Annually' : 'Billed Monthly'})`;
    
    addToCart({
      id: `${tier.id}-${billingPeriod}`,
      name: planName,
      price: currentPrice,
      category: 'SaaS',
    });
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3 stagger-in">
        <div className="p-2.5 rounded-lg bg-primary-tint-1 border border-primary/20 text-primary">
          <Zap size={24} />
        </div>
        
        <h1 className="text-3xl font-extrabold text-n8ntext-dark flex items-center gap-2">
          <span>SaaS Subscriptions</span>
          <span className="card-badge mrr">MRR Focus</span>
        </h1>
        
        <p className="text-sm text-n8ntext-base">
          Unlock commercial micro-SaaS modules, unlimited API credits, and custom domain hosting options.
        </p>

        {/* Annual Toggle Switcher */}
        <div className="flex items-center gap-3 mt-4 bg-n8nbg-light p-1.5 rounded-lg border border-n8nfg-light select-none">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${billingPeriod === 'monthly' ? 'bg-n8nbg-dark text-white shadow-sm' : 'text-n8ntext-base hover:text-n8ntext-dark'}`}
          >
            Monthly Billing
          </button>
          
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all ${billingPeriod === 'annual' ? 'bg-primary text-white shadow-sm' : 'text-n8ntext-base hover:text-n8ntext-dark'}`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 text-[9px] uppercase bg-white/20 text-white rounded font-bold">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-4">
        {tiers.map((tier) => {
          const currentMonthlyPrice = billingPeriod === 'annual' ? tier.annualDiscountedPrice : tier.monthlyPrice;
          const totalBilling = billingPeriod === 'annual' ? currentMonthlyPrice * 12 : currentMonthlyPrice;

          return (
            <div
              key={tier.id}
              className={`n8n-card flex flex-col justify-between h-full p-6 relative ${
                tier.popular ? 'card-gradient-border shadow-glow border-2' : ''
              }`}
            >
              {/* Popular Tag Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-white text-[9px] uppercase tracking-wider font-extrabold">
                  Most Popular
                </div>
              )}

              <div className="space-y-5">
                {/* Header info */}
                <div>
                  <h2 className="text-base font-extrabold text-n8ntext-dark">{tier.name}</h2>
                  <p className="text-[11px] text-n8ntext-light mt-1 min-h-[32px]">{tier.desc}</p>
                </div>

                {/* Price tag */}
                <div className="border-y border-n8nfg-light py-4 flex flex-col justify-center">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹{currentMonthlyPrice.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-n8ntext-light font-medium">/ month</span>
                  </div>
                  <span className="text-[10px] text-n8ntext-light block mt-1.5">
                    {billingPeriod === 'annual' 
                      ? `Billed annually (₹${totalBilling.toLocaleString('en-IN')}/yr)` 
                      : `Billed monthly (cancel anytime)`
                    }
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-n8ntext-light block">Includes:</span>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-n8ntext-base">
                        <Check size={14} className="text-success shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="mt-8 pt-4 border-t border-n8nfg-light">
                <button
                  onClick={() => handleBuyPlan(tier)}
                  className={`w-full py-2.5 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    tier.popular 
                      ? 'btn-primary' 
                      : 'btn-ghost'
                  }`}
                >
                  <ShoppingCart size={14} />
                  <span>{tier.ctaText}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Info warning */}
      <div className="max-w-xl mx-auto p-4 rounded-xl bg-n8nbg-light border border-n8nfg-light text-xs text-n8ntext-base flex gap-3 items-center mt-6">
        <AlertCircle size={20} className="text-primary shrink-0" />
        <p className="leading-relaxed">
          Payments are managed via Stripe Checkout and Razorpay gateways. Automatic GST invoices will be generated and emailed for compliance.
        </p>
      </div>
    </div>
  );
}
