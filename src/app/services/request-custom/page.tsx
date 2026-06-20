'use client';

import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, CheckCircle, ArrowRight, Loader, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { createCustomRequest } from '@/lib/servicesHelpers';

type Step = 'describe' | 'details' | 'review' | 'submitted';

const BUDGET_OPTIONS = ['< $30', '$30–$100', '$100–$300', '$300–$1000', '$1000+', 'Not sure yet'];
const TIMELINE_OPTIONS = ['ASAP (24 hours)', 'This week', 'Next 2 weeks', 'This month', 'No rush'];

const SUGGESTED_CATEGORIES: { keyword: string; categorySlug: string; title: string }[] = [
  { keyword: 'vercel', categorySlug: 'vercel', title: 'Vercel & Deployment Fixes' },
  { keyword: 'supabase', categorySlug: 'supabase', title: 'Supabase & Backend Fixes' },
  { keyword: 'wordpress', categorySlug: 'wordpress', title: 'WordPress Fixes' },
  { keyword: 'shopify', categorySlug: 'shopify', title: 'Shopify Store Fixes' },
  { keyword: 'ssl', categorySlug: 'ssl_domain', title: 'SSL, Domain & DNS' },
  { keyword: 'domain', categorySlug: 'ssl_domain', title: 'SSL, Domain & DNS' },
  { keyword: 'logo', categorySlug: 'design', title: 'Design Services' },
  { keyword: 'design', categorySlug: 'design', title: 'Design Services' },
  { keyword: 'seo', categorySlug: 'seo_content', title: 'SEO & Copywriting' },
  { keyword: 'automation', categorySlug: 'automation', title: 'Automation & Integrations' },
  { keyword: 'n8n', categorySlug: 'automation', title: 'Automation & Integrations' },
  { keyword: 'zapier', categorySlug: 'automation', title: 'Automation & Integrations' },
  { keyword: 'ai', categorySlug: 'ai_content', title: 'AI Content & Video' },
  { keyword: 'website', categorySlug: 'websites', title: 'New Website Builds' },
  { keyword: 'woocommerce', categorySlug: 'wordpress', title: 'WordPress / WooCommerce' },
  { keyword: 'stripe', categorySlug: 'cloud_api', title: 'Cloud, AI & APIs' },
  { keyword: 'fix', categorySlug: 'misc', title: 'General "Fix My Tech"' },
  { keyword: 'broken', categorySlug: 'misc', title: 'General "Fix My Tech"' },
  { keyword: 'crash', categorySlug: 'misc', title: 'General "Fix My Tech"' },
];

function getSuggestions(problem: string): typeof SUGGESTED_CATEGORIES {
  const lower = problem.toLowerCase();
  const seen = new Set<string>();
  return SUGGESTED_CATEGORIES.filter(s => {
    if (lower.includes(s.keyword) && !seen.has(s.categorySlug)) {
      seen.add(s.categorySlug);
      return true;
    }
    return false;
  }).slice(0, 3);
}

export default function RequestCustomPage() {
  const [step, setStep] = useState<Step>('describe');
  const [problem, setProblem] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const suggestions = getSuggestions(problem);
  const canProceedDescribe = problem.trim().length > 20;

  const handleSubmit = async () => {
    if (!name || !email) { setError('Name and email are required.'); return; }
    setError('');
    setSubmitting(true);
    const ok = await createCustomRequest({
      client_name: name,
      client_email: email,
      client_phone: phone || undefined,
      problem_description: problem,
      budget_range: budget || undefined,
      timeline: timeline || undefined,
    });
    setSubmitting(false);
    if (ok) setStep('submitted');
    else setError('Submission failed. Please try again or email us directly.');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">

      {/* Header */}
      <div className="space-y-2">
        <Link href="/services" className="inline-flex items-center gap-2 text-xs text-n8ntext-light hover:text-primary transition-colors">
          <ArrowLeft size={13} />
          Back to services
        </Link>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary-tint-1 border border-primary/20 text-primary">
            <MessageSquare size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-n8ntext-dark">Request a Custom Service</h1>
            <p className="text-xs text-n8ntext-base">Can't find your problem? Describe it — we'll quote within 24 hours.</p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      {step !== 'submitted' && (
        <div className="flex items-center gap-2">
          {['describe', 'details', 'review'].map((s, i) => {
            const steps = ['describe', 'details', 'review'];
            const currentIndex = steps.indexOf(step);
            const isActive = s === step;
            const isDone = currentIndex > i;
            return (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-1.5 text-[10px] font-semibold ${isActive ? 'text-primary' : isDone ? 'text-emerald-400' : 'text-n8ntext-light'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${isActive ? 'bg-primary text-white' : isDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-n8nbg-base border border-n8nfg-light'}`}>
                    {isDone ? '✓' : i + 1}
                  </div>
                  <span className="hidden sm:inline capitalize">{s}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-px ${isDone ? 'bg-emerald-500/40' : 'bg-n8nfg-light'}`} />}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Step 1: Describe */}
      {step === 'describe' && (
        <div className="space-y-4">
          <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-n8ntext-dark">Describe Your Problem</h2>
            <p className="text-xs text-n8ntext-base">Be as specific as possible. Include the platform, what broke, what you tried, and what you need.</p>
            <textarea
              value={problem}
              onChange={e => setProblem(e.target.value)}
              placeholder="e.g. My Vercel deploy started failing after I added Supabase env vars. The error says 'Module not found: @supabase/supabase-js'. It works locally but fails in CI. I'm using Next.js 14..."
              rows={7}
              className="w-full bg-n8nbg-base border border-n8nfg-light rounded-xl px-4 py-3 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary resize-none"
            />
            <div className="text-[10px] text-n8ntext-light text-right">{problem.length} chars · min 20</div>
          </div>

          {/* AI suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Lightbulb size={13} />
                We have services that might match:
              </div>
              <div className="space-y-1.5">
                {suggestions.map(s => (
                  <Link key={s.categorySlug} href={`/services/${s.categorySlug}`} className="flex items-center justify-between bg-n8nbg-light border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark hover:border-amber-500/30 transition-colors group">
                    <span>{s.title}</span>
                    <ArrowRight size={11} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
              <p className="text-[10px] text-n8ntext-light">If none match, continue to submit a custom request.</p>
            </div>
          )}

          <button
            onClick={() => setStep('details')}
            disabled={!canProceedDescribe}
            className="w-full btn-primary py-3 text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight size={15} />
          </button>
        </div>
      )}

      {/* Step 2: Your details */}
      {step === 'details' && (
        <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-bold text-n8ntext-dark">Your Contact Details</h2>
          {error && <p className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" placeholder="Full Name *" required value={name} onChange={e => setName(e.target.value)}
              className="bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2.5 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary" />
            <input type="email" placeholder="Email Address *" required value={email} onChange={e => setEmail(e.target.value)}
              className="bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2.5 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary" />
            <input type="tel" placeholder="WhatsApp / Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)}
              className="bg-n8nbg-base border border-n8nfg-light rounded-lg px-3 py-2.5 text-sm text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary sm:col-span-2" />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-n8ntext-light">Budget Range</label>
            <div className="flex flex-wrap gap-2">
              {BUDGET_OPTIONS.map(b => (
                <button key={b} onClick={() => setBudget(b)} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-colors ${budget === b ? 'bg-primary text-white border-primary' : 'bg-n8nbg-base border-n8nfg-light text-n8ntext-base hover:border-primary/40'}`}>{b}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-n8ntext-light">Timeline</label>
            <div className="flex flex-wrap gap-2">
              {TIMELINE_OPTIONS.map(t => (
                <button key={t} onClick={() => setTimeline(t)} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-colors ${timeline === t ? 'bg-primary text-white border-primary' : 'bg-n8nbg-base border-n8nfg-light text-n8ntext-base hover:border-primary/40'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button onClick={() => setStep('describe')} className="btn-ghost py-2 px-4 text-sm flex-shrink-0">← Back</button>
            <button onClick={() => { setError(''); setStep('review'); }} disabled={!name || !email} className="flex-1 btn-primary py-2.5 text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed">Review & Submit</button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 'review' && (
        <div className="space-y-4">
          <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-n8ntext-dark">Review Your Request</h2>

            <div className="space-y-2 text-xs">
              <div className="flex gap-3 bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                <span className="text-n8ntext-light w-20 flex-shrink-0">Problem</span>
                <p className="text-n8ntext-dark">{problem}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                  <div className="text-n8ntext-light mb-1">Name</div>
                  <div className="text-n8ntext-dark font-semibold">{name}</div>
                </div>
                <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                  <div className="text-n8ntext-light mb-1">Email</div>
                  <div className="text-n8ntext-dark font-semibold truncate">{email}</div>
                </div>
                {budget && (
                  <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                    <div className="text-n8ntext-light mb-1">Budget</div>
                    <div className="text-n8ntext-dark font-semibold">{budget}</div>
                  </div>
                )}
                {timeline && (
                  <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3">
                    <div className="text-n8ntext-light mb-1">Timeline</div>
                    <div className="text-n8ntext-dark font-semibold">{timeline}</div>
                  </div>
                )}
              </div>
            </div>

            {error && <p className="text-[11px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>}

            <div className="flex gap-3">
              <button onClick={() => setStep('details')} className="btn-ghost py-2 px-4 text-sm flex-shrink-0">← Edit</button>
              <button onClick={handleSubmit} disabled={submitting} className="flex-1 btn-primary py-2.5 text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60">
                {submitting ? <Loader size={15} className="animate-spin" /> : null}
                {submitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success */}
      {step === 'submitted' && (
        <div className="bg-n8nbg-lighter border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle size={32} className="text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-n8ntext-dark">Request Submitted!</h2>
            <p className="text-sm text-n8ntext-base mt-2">
              Thanks, <strong>{name}</strong>! We've received your request and will send a custom quote to <strong>{email}</strong> within 24 hours.
            </p>
          </div>
          <div className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-4 text-xs text-n8ntext-base space-y-1">
            <p>💬 <strong>WhatsApp:</strong> We may reach out on WhatsApp if you provided a number.</p>
            <p>📧 <strong>Check your spam</strong> if you don't see our email.</p>
          </div>
          <Link href="/services" className="btn-ghost inline-flex items-center gap-2 py-2 px-5 text-sm">
            Browse Other Services
          </Link>
        </div>
      )}
    </div>
  );
}
