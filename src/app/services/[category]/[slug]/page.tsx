'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Star, CheckCircle, Shield, CreditCard, ChevronDown, ChevronUp, Loader, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import TrustBadge from '@/components/services/TrustBadge';
import OrderStatusBadge from '@/components/services/OrderStatusBadge';
import { fetchGigBySlug, Gig, getTierLabel, calculateDepositAmount, calculateBalanceAmount } from '@/lib/servicesHelpers';
import { supabase } from '@/utils/supabaseClient';

const DELIVERY_LABELS: Record<string, string[]> = {
  vercel:     ['Fixed build error or issue', 'Loom walkthrough of the fix', 'Action summary + next steps'],
  supabase:   ['Schema/query fix applied', 'RLS policy document', 'Test evidence screenshot'],
  wordpress:  ['Issue resolved on live site', 'Before/after screenshots', 'Security recommendations'],
  shopify:    ['Store issue fixed', 'Testing checklist', 'Recommended apps list'],
  design:     ['Source file (AI/PSD/Figma)', 'Multiple export formats (PNG/SVG/PDF)', 'Brand usage guide'],
  ai_content: ['Final assets (high-res)', 'Prompt pack for replication', 'Alt versions for A/B'],
  seo_content:['Written content / audit report', 'Implementation checklist', 'GSC verification steps'],
  automation: ['Live workflow/automation', 'Documentation + diagram', 'Error handling guide'],
  default:    ['Deliverable as described', 'Summary report', 'Follow-up guidance'],
};

const FAQ_GENERAL = [
  { q: 'What does the 20% deposit do?', a: 'It secures your spot in the queue and lets us start working immediately. The remaining 80% is only due after you approve the delivery.' },
  { q: 'What if you can\'t fix my problem?', a: 'If we can\'t deliver on the scope, your deposit is fully refunded, no questions asked.' },
  { q: 'How do I communicate with the team?', a: 'After payment, you\'ll receive an email with a Loom recording request and a WhatsApp contact. You can describe the issue in detail there.' },
  { q: 'Can I request revisions?', a: 'Yes — one round of revisions is included in every gig. Additional changes are quoted separately.' },
  { q: 'Is this for agencies or individuals?', a: 'Both. Solo founders, small businesses, and agencies all use us. White-label options available in the Misc category.' },
];

interface OrderFormState {
  name: string;
  email: string;
  phone: string;
  details: string;
}

export default function GigDetailPage() {
  const params = useParams();
  const categorySlug = params?.category as string;
  const gigSlug = params?.slug as string;

  const [gig, setGig] = useState<Gig | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [step, setStep] = useState<'info' | 'order' | 'processing' | 'success'>('info');
  const [form, setForm] = useState<OrderFormState>({ name: '', email: '', phone: '', details: '' });
  const [orderError, setOrderError] = useState('');

  useEffect(() => {
    if (!gigSlug) return;
    fetchGigBySlug(gigSlug).then(data => {
      setGig(data);
      setLoading(false);
    });
  }, [gigSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <Loader size={24} className="animate-spin text-primary" />
      </div>
    );
  }

  if (!gig) {
    return (
      <div className="text-center py-16 space-y-3">
        <div className="text-4xl">😕</div>
        <p className="text-n8ntext-light text-sm">Service not found.</p>
        <Link href="/services" className="btn-primary inline-flex py-2 px-4 text-xs">Back to Services</Link>
      </div>
    );
  }

  const deposit = calculateDepositAmount(gig.price_usd);
  const balance = calculateBalanceAmount(gig.price_usd);
  const deliveryItems = DELIVERY_LABELS[categorySlug] || DELIVERY_LABELS.default;

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) { setOrderError('Name and email are required.'); return; }
    setOrderError('');
    setStep('processing');

    try {
      // Create order record in Supabase
      if (supabase) {
        await supabase.from('service_orders').insert([{
          gig_id: gig.id.startsWith('seed-') ? null : gig.id,
          client_name: form.name,
          client_email: form.email,
          client_phone: form.phone || null,
          project_details: form.details || null,
          gig_title: gig.title,
          gig_category: gig.category,
          total_amount_usd: gig.price_usd,
          deposit_amount_usd: deposit,
          balance_amount_usd: balance,
          status: 'submitted',
        }]);
      }

      // Initiate Stripe Checkout for deposit
      const res = await fetch('/api/checkout/deposit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gigTitle: gig.title,
          gigSlug: gig.slug,
          depositAmount: deposit,
          totalAmount: gig.price_usd,
          clientEmail: form.email,
          clientName: form.name,
          categorySlug,
        }),
      });

      if (res.ok) {
        const { url } = await res.json();
        if (url) {
          window.location.href = url;
          return;
        }
      }

      // Fallback if Stripe not configured
      setStep('success');
    } catch {
      setStep('success'); // Graceful fallback
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-n8ntext-light">
        <Link href="/services" className="hover:text-primary">Services</Link>
        <span>/</span>
        <Link href={`/services/${categorySlug}`} className="hover:text-primary capitalize">{categorySlug.replace('_', ' ')}</Link>
        <span>/</span>
        <span className="text-n8ntext-base truncate max-w-xs">{gig.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT — Gig info */}
        <div className="lg:col-span-7 space-y-6">

          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="card-badge traffic">{getTierLabel(gig.tier)}</span>
              {gig.is_emergency && (
                <span className="inline-flex items-center gap-1 bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                  <AlertTriangle size={10} />
                  Emergency / 1-hr Response
                </span>
              )}
            </div>
            <h1 className="text-2xl font-extrabold text-n8ntext-dark leading-snug">{gig.title}</h1>

            {/* Rating */}
            {gig.avg_rating > 0 && (
              <div className="flex items-center gap-2 text-xs">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={13} className={i <= Math.round(gig.avg_rating) ? 'text-amber-400 fill-amber-400' : 'text-n8nfg-xlight'} />
                  ))}
                </div>
                <span className="font-semibold text-n8ntext-dark">{gig.avg_rating.toFixed(1)}</span>
                <span className="text-n8ntext-light">({gig.review_count} reviews · {gig.order_count} orders)</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-bold text-n8ntext-dark">About This Service</h2>
            <p className="text-sm text-n8ntext-base leading-relaxed">{gig.description}</p>
          </div>

          {/* What's included */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-n8ntext-dark">What You'll Receive</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {deliveryItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                  <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-n8ntext-base">{item}</span>
                </div>
              ))}
              <div className="flex items-start gap-2.5 bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-n8ntext-base">1 round of revisions included</span>
              </div>
              <div className="flex items-start gap-2.5 bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-n8ntext-base">Delivery in {gig.delivery_days === 1 ? '24 hours' : `${gig.delivery_days} days`}</span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-n8ntext-dark">Frequently Asked Questions</h2>
            {FAQ_GENERAL.map((faq, i) => (
              <div key={i} className="border border-n8nfg-light rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-xs font-semibold text-n8ntext-dark hover:bg-n8nbg-light transition-colors"
                >
                  {faq.q}
                  {openFaqIndex === i ? <ChevronUp size={14} className="text-primary flex-shrink-0" /> : <ChevronDown size={14} className="text-n8ntext-light flex-shrink-0" />}
                </button>
                {openFaqIndex === i && (
                  <div className="px-4 pb-3 text-[11px] text-n8ntext-base leading-relaxed border-t border-n8nfg-light bg-n8nbg-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Order panel */}
        <div className="lg:col-span-5">
          <div className="sticky top-20 space-y-4">

            {/* Pricing card */}
            <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl overflow-hidden shadow-lg">

              {/* Price header */}
              <div className="p-5 border-b border-n8nfg-light">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-black text-n8ntext-dark">
                      ${gig.price_usd}
                      {gig.tier === 'retainer' && <span className="text-sm font-normal text-n8ntext-light">/mo</span>}
                    </div>
                    <div className="text-[11px] text-n8ntext-light mt-0.5 flex items-center gap-1">
                      <Clock size={10} />
                      {gig.delivery_days === 1 ? '24-hour delivery' : `${gig.delivery_days}-day delivery`}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-emerald-400">Pay today</div>
                    <div className="text-2xl font-black text-emerald-400">${deposit}</div>
                    <div className="text-[10px] text-n8ntext-light">20% deposit</div>
                  </div>
                </div>
              </div>

              {/* Trust card */}
              <div className="p-5 space-y-4">
                <TrustBadge variant="card" depositAmount={deposit} balanceAmount={balance} />

                {step === 'info' && (
                  <button
                    onClick={() => setStep('order')}
                    className="w-full btn-primary py-3 text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <CreditCard size={16} />
                    Pay ${deposit} Deposit — Start Now
                  </button>
                )}

                {step === 'order' && (
                  <form onSubmit={handleOrderSubmit} className="space-y-3">
                    <div className="text-xs font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">
                      Your Details
                    </div>
                    {orderError && (
                      <p className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{orderError}</p>
                    )}
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone (optional)"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary"
                    />
                    <textarea
                      placeholder="Describe your issue briefly (optional but helpful)"
                      value={form.details}
                      onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                      rows={3}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary resize-none"
                    />
                    <button type="submit" className="w-full btn-primary py-3 text-sm font-bold flex items-center justify-center gap-2">
                      <Shield size={15} />
                      Pay ${deposit} via Stripe
                    </button>
                    <button type="button" onClick={() => setStep('info')} className="w-full text-[11px] text-n8ntext-light hover:text-n8ntext-dark text-center">
                      ← Go back
                    </button>
                  </form>
                )}

                {step === 'processing' && (
                  <div className="text-center py-6 space-y-3">
                    <Loader size={24} className="animate-spin text-primary mx-auto" />
                    <p className="text-xs text-n8ntext-base">Processing your order…</p>
                  </div>
                )}

                {step === 'success' && (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                      <CheckCircle size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-n8ntext-dark">Order Received!</h3>
                      <p className="text-[11px] text-n8ntext-light mt-1">Check your email for confirmation. Our team will reach out within 2 hours.</p>
                    </div>
                    <Link href="/dashboard/orders" className="btn-ghost py-2 px-4 text-xs inline-flex items-center gap-1.5">
                      Track Your Orders
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Security note */}
            <div className="flex items-center gap-2 text-[10px] text-n8ntext-light justify-center">
              <Shield size={11} className="text-emerald-400" />
              <span>Secured by Stripe · PCI DSS compliant · 256-bit encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
