'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Star, ShoppingCart, Zap, AlertTriangle } from 'lucide-react';
import { Gig, GigTier, getTierLabel } from '@/lib/servicesHelpers';

interface GigCardProps {
  gig: Gig;
  categorySlug: string;
}

const TIER_STYLES: Record<GigTier, { bg: string; text: string; border: string }> = {
  quick_fix:  { bg: 'bg-emerald-500/15', text: 'text-emerald-400',  border: 'border-emerald-500/30' },
  standard:   { bg: 'bg-blue-500/15',    text: 'text-blue-400',     border: 'border-blue-500/30'    },
  build:      { bg: 'bg-violet-500/15',  text: 'text-violet-400',   border: 'border-violet-500/30'  },
  design:     { bg: 'bg-pink-500/15',    text: 'text-pink-400',     border: 'border-pink-500/30'    },
  ai_content: { bg: 'bg-amber-500/15',   text: 'text-amber-400',    border: 'border-amber-500/30'   },
  retainer:   { bg: 'bg-orange-500/15',  text: 'text-orange-400',   border: 'border-orange-500/30'  },
  emergency:  { bg: 'bg-red-500/15',     text: 'text-red-400',      border: 'border-red-500/30'     },
};

export default function GigCard({ gig, categorySlug }: GigCardProps) {
  const tierStyle = TIER_STYLES[gig.tier];
  const deposit = Math.round(gig.price_usd * 0.2);

  return (
    <div className="n8n-card group flex flex-col justify-between h-full hover:border-primary/40">
      {/* Emergency badge */}
      {gig.is_emergency && (
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500/20 border border-red-500/40 text-red-400 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full">
          <AlertTriangle size={9} />
          1-hr Response
        </div>
      )}

      <div className="space-y-3">
        {/* Tier badge */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`}>
            {getTierLabel(gig.tier)}
          </span>
          {gig.avg_rating > 0 && (
            <div className="flex items-center gap-1 text-[10px] text-amber-400">
              <Star size={10} className="fill-amber-400" />
              <span className="font-semibold">{gig.avg_rating.toFixed(1)}</span>
              <span className="text-n8ntext-light">({gig.review_count})</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-n8ntext-dark leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {gig.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-n8ntext-base leading-relaxed line-clamp-2">
          {gig.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-n8nfg-light space-y-3">
        {/* Delivery time */}
        <div className="flex items-center gap-1.5 text-[10px] text-n8ntext-light">
          <Clock size={11} />
          <span>Delivery in <span className="font-semibold text-n8ntext-base">{gig.delivery_days === 1 ? '24 hours' : `${gig.delivery_days} days`}</span></span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-lg font-black text-n8ntext-dark">
              ${gig.price_usd}
              {gig.tier === 'retainer' && <span className="text-xs font-normal text-n8ntext-light">/mo</span>}
            </div>
            <div className="text-[9px] text-n8ntext-light">
              Start for just <span className="text-emerald-400 font-semibold">${deposit} (20%)</span>
            </div>
          </div>
          <Link
            href={`/services/${categorySlug}/${gig.slug}`}
            className="btn-primary py-1.5 px-3 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
          >
            <Zap size={11} className="fill-white" />
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
