'use client';

import React, { useState, useEffect } from 'react';
import { Package, Clock, ExternalLink, RefreshCw, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import OrderStatusBadge from '@/components/services/OrderStatusBadge';
import { supabase } from '@/utils/supabaseClient';
import { ServiceOrder } from '@/lib/servicesHelpers';

const MOCK_ORDERS: ServiceOrder[] = [
  {
    id: 'demo-1',
    gig_id: '',
    client_name: 'Demo User',
    client_email: 'demo@example.com',
    gig_title: 'Fix Vercel build failed error',
    gig_category: 'vercel',
    total_amount_usd: 59,
    deposit_amount_usd: 11.80,
    balance_amount_usd: 47.20,
    status: 'in_progress',
    assigned_to: 'Khargone Team',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'demo-2',
    gig_id: '',
    client_name: 'Demo User',
    client_email: 'demo@example.com',
    gig_title: 'Logo design 3 concepts standard tier',
    gig_category: 'design',
    total_amount_usd: 39,
    deposit_amount_usd: 7.80,
    balance_amount_usd: 31.20,
    status: 'complete',
    assigned_to: 'Design Team',
    created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

const STATUS_STEPS = ['submitted', 'deposit_paid', 'in_progress', 'delivered', 'balance_paid', 'complete'] as const;

function OrderCard({ order }: { order: ServiceOrder }) {
  const currentStepIndex = STATUS_STEPS.indexOf(order.status as any);
  const [paying, setPaying] = useState(false);

  const handlePayBalance = async () => {
    setPaying(true);
    try {
      const res = await fetch('/api/checkout/balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order.id,
          gigTitle: order.gig_title,
          balanceAmount: order.balance_amount_usd,
          clientEmail: order.client_email,
        }),
      });

      if (res.ok) {
        const { url } = await res.json();
        if (url) {
          window.location.href = url;
          return;
        }
      }
      
      alert('Stripe balance payment is not configured. Falling back.');
    } catch (err) {
      console.error(err);
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-n8nfg-light flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-n8ntext-dark leading-snug line-clamp-1">{order.gig_title}</h3>
          <div className="flex items-center gap-2 mt-1 text-[10px] text-n8ntext-light">
            <span className="capitalize">{order.gig_category.replace('_', ' ')}</span>
            <span>·</span>
            <span>Order #{order.id.slice(-8).toUpperCase()}</span>
            <span>·</span>
            <span>{new Date(order.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      {/* Status timeline */}
      <div className="px-4 py-3 border-b border-n8nfg-light">
        <div className="flex items-center gap-1">
          {STATUS_STEPS.map((s, i) => {
            const isPast = i <= currentStepIndex;
            const isCurrent = i === currentStepIndex;
            return (
              <React.Fragment key={s}>
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isCurrent ? 'bg-primary animate-pulse ring-2 ring-primary/30' : isPast ? 'bg-emerald-400' : 'bg-n8nfg-xlight'}`} />
                {i < STATUS_STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 ${i < currentStepIndex ? 'bg-emerald-400' : 'bg-n8nfg-light'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="mt-1.5 text-[9px] text-n8ntext-light flex justify-between">
          <span>Submitted</span>
          <span>Complete</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex gap-4 text-xs">
          <div>
            <div className="text-n8ntext-light">Total</div>
            <div className="font-bold text-n8ntext-dark">${order.total_amount_usd}</div>
          </div>
          <div>
            <div className="text-n8ntext-light">Deposit paid</div>
            <div className="font-bold text-emerald-400">${order.deposit_amount_usd.toFixed(2)}</div>
          </div>
          {order.status !== 'complete' && order.status !== 'balance_paid' && (
            <div>
              <div className="text-n8ntext-light">Balance due</div>
              <div className="font-bold text-amber-400">${order.balance_amount_usd.toFixed(2)}</div>
            </div>
          )}
        </div>

        {order.assigned_to && (
          <div className="text-[10px] text-n8ntext-light text-right">
            <div>Assigned to</div>
            <div className="font-semibold text-n8ntext-base">{order.assigned_to}</div>
          </div>
        )}
      </div>

      {/* Balance CTA */}
      {order.status === 'delivered' && (
        <div className="px-4 pb-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-400">🎉 Delivery ready for your approval</div>
              <div className="text-[10px] text-n8ntext-light mt-0.5">Pay the ${order.balance_amount_usd.toFixed(2)} balance to complete your order</div>
            </div>
            <button
              onClick={handlePayBalance}
              disabled={paying}
              className="btn-primary py-1.5 px-3 text-xs whitespace-nowrap flex items-center gap-1.5 disabled:opacity-50"
            >
              {paying ? 'Processing...' : 'Pay Balance'}
              {!paying && <ExternalLink size={11} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OrdersDashboard() {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'complete'>('all');

  useEffect(() => {
    // Try to load from Supabase or fall back to mock
    setLoading(false);
    setOrders(MOCK_ORDERS);
  }, []);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setEmail(emailInput);

    if (supabase) {
      const { data, error } = await supabase
        .from('service_orders')
        .select('*')
        .eq('client_email', emailInput)
        .order('created_at', { ascending: false });
      if (!error && data) {
        setOrders(data as ServiceOrder[]);
        setLoading(false);
        return;
      }
    }

    setOrders(MOCK_ORDERS);
    setLoading(false);
  };

  const filteredOrders = orders.filter(o => {
    if (activeTab === 'active') return !['complete', 'cancelled'].includes(o.status);
    if (activeTab === 'complete') return o.status === 'complete';
    return true;
  });

  const activeCount = orders.filter(o => !['complete', 'cancelled'].includes(o.status)).length;
  const completeCount = orders.filter(o => o.status === 'complete').length;

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-n8nfg-light pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary-tint-1 border border-primary/20 text-primary">
            <Package size={22} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-n8ntext-dark">My Orders</h1>
            <p className="text-xs text-n8ntext-base">Track your service orders and approve deliveries</p>
          </div>
        </div>
        <Link href="/services" className="btn-ghost py-1.5 px-3 text-xs flex items-center gap-1.5">
          Browse Services
          <ChevronRight size={12} />
        </Link>
      </div>

      {/* Email lookup */}
      {!email && (
        <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl p-6 text-center space-y-4">
          <div className="text-3xl">📧</div>
          <div>
            <h2 className="text-base font-bold text-n8ntext-dark">Find Your Orders</h2>
            <p className="text-xs text-n8ntext-base mt-1">Enter the email address you used when ordering</p>
          </div>
          <form onSubmit={handleLookup} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
              className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary"
            />
            <button type="submit" className="btn-primary py-2 px-4 text-sm">Look up</button>
          </form>
          <p className="text-[10px] text-n8ntext-light">
            Want to see a demo? The orders below are example orders.{' '}
            <button onClick={() => setEmail('demo@example.com')} className="text-primary hover:underline">View demo →</button>
          </p>
        </div>
      )}

      {(email || true) && (
        <>
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-n8nbg-light border border-n8nfg-light rounded-xl p-1 max-w-xs">
            {(['all', 'active', 'complete'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors ${activeTab === tab ? 'bg-primary text-white' : 'text-n8ntext-base hover:text-n8ntext-dark'}`}
              >
                {tab} {tab === 'active' ? `(${activeCount})` : tab === 'complete' ? `(${completeCount})` : `(${orders.length})`}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl p-4 animate-pulse space-y-3">
                  <div className="h-5 bg-n8nbg-dark rounded w-2/3" />
                  <div className="h-3 bg-n8nbg-dark rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : filteredOrders.length > 0 ? (
            <div className="space-y-4">
              {filteredOrders.map(order => <OrderCard key={order.id} order={order} />)}
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <div className="text-4xl">📭</div>
              <p className="text-sm text-n8ntext-light">No {activeTab !== 'all' ? activeTab : ''} orders found.</p>
              <Link href="/services" className="btn-primary inline-flex items-center gap-2 py-2 px-4 text-xs">Browse Services</Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
