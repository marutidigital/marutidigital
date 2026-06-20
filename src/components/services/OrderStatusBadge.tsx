'use client';

import React from 'react';

type OrderStatus = 'submitted' | 'deposit_paid' | 'in_progress' | 'delivered' | 'balance_paid' | 'complete' | 'cancelled';

interface OrderStatusBadgeProps {
  status: OrderStatus;
  size?: 'sm' | 'md';
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string; dot: string }> = {
  submitted:    { label: 'Submitted',    bg: 'bg-slate-500/20',   text: 'text-slate-400',   dot: 'bg-slate-400'   },
  deposit_paid: { label: 'Deposit Paid', bg: 'bg-blue-500/20',    text: 'text-blue-400',    dot: 'bg-blue-400'    },
  in_progress:  { label: 'In Progress',  bg: 'bg-amber-500/20',   text: 'text-amber-400',   dot: 'bg-amber-400 animate-pulse' },
  delivered:    { label: 'Delivered',    bg: 'bg-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  balance_paid: { label: 'Balance Paid', bg: 'bg-violet-500/20',  text: 'text-violet-400',  dot: 'bg-violet-400'  },
  complete:     { label: 'Complete ✓',   bg: 'bg-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  cancelled:    { label: 'Cancelled',    bg: 'bg-red-500/20',     text: 'text-red-400',     dot: 'bg-red-400'     },
};

export default function OrderStatusBadge({ status, size = 'sm' }: OrderStatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const sizeClass = size === 'md' ? 'text-xs px-3 py-1' : 'text-[10px] px-2.5 py-0.5';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-semibold ${config.bg} ${config.text} ${sizeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
