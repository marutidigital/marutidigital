'use client';

import React from 'react';
import { Shield, CreditCard, Clock } from 'lucide-react';

interface TrustBadgeProps {
  variant?: 'strip' | 'card';
  depositAmount?: number;
  balanceAmount?: number;
}

export default function TrustBadge({ variant = 'strip', depositAmount, balanceAmount }: TrustBadgeProps) {
  if (variant === 'card') {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400">
          <Shield size={16} />
          <span className="text-sm font-bold">Secure Payment</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-n8ntext-base">
              <CreditCard size={12} />
              <span>Pay now (20% deposit)</span>
            </div>
            <span className="font-bold text-emerald-400">${depositAmount || '—'}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-n8ntext-base">
              <Clock size={12} />
              <span>Pay after delivery (80%)</span>
            </div>
            <span className="font-bold text-n8ntext-dark">${balanceAmount || '—'}</span>
          </div>
        </div>
        <p className="text-[10px] text-n8ntext-light leading-relaxed">
          You only pay the full amount <strong className="text-n8ntext-base">after you approve the delivery</strong>. No risk, no lock-in.
        </p>
      </div>
    );
  }

  // Strip variant
  return (
    <div className="flex flex-wrap items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
      <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
        <Shield size={13} />
        <span>20% to start</span>
      </div>
      <div className="flex items-center gap-1.5 text-n8ntext-base text-xs">
        <Clock size={13} />
        <span>80% after you approve delivery</span>
      </div>
      <div className="flex items-center gap-1.5 text-n8ntext-light text-xs">
        <CreditCard size={13} />
        <span>Stripe secured · No risk</span>
      </div>
    </div>
  );
}
