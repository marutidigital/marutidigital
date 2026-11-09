import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  RotateCcw,
  Clock,
  CheckCircle,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | 7-Day 100% Money-Back Guarantee | Maruti Digital',
  description:
    'Maruti Digital offers a 100% full refund within 7 days for any service. If you are not completely satisfied with our work, we will refund your payment in full.',
  alternates: {
    canonical: 'https://marutidigital.in/refund-policy',
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = 'November 2026';

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* HEADER / HERO */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
          <ShieldCheck size={15} />
          100% Risk-Free Guarantee
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Return & <span style={{ color: '#FF6B2B' }}>Refund Policy</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-zinc-400">
          Last Updated: {lastUpdated} • Transparent, client-first return and refund terms for all services at Maruti Digital.
        </p>
      </div>

      {/* HIGHLIGHT BANNER: 7 DAYS FULL REFUND */}
      <div className="mb-10 rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
            <RotateCcw className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              7-Day 100% Full Money-Back Guarantee
            </h2>
            <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
              If you are not satisfied with any of our services for any reason, we will refund your{' '}
              <strong className="text-emerald-400 font-bold">full amount within 7 days</strong> of payment or project delivery. No hidden clauses, no delays.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-zinc-300">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />
            <span>100% Full Refund</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-emerald-400 flex-shrink-0" />
            <span>Processed in 24 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-emerald-400 flex-shrink-0" />
            <span>Direct to Original Method</span>
          </div>
        </div>
      </div>

      {/* MAIN POLICY CONTENT */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10 space-y-8 text-zinc-300 shadow-xl leading-relaxed">

        {/* SECTION 1 */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            1. Scope of the 7-Day Guarantee
          </h3>
          <p className="text-sm text-zinc-400">
            Our 7-day full refund policy applies to all services offered by Maruti Digital, including:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-zinc-300 pl-4 list-disc marker:text-[#FF6B2B]">
            <li>Custom Website Development</li>
            <li>Website Fixes & Emergency Troubleshooting</li>
            <li>n8n & WhatsApp Automation Workflows</li>
            <li>SaaS & Web Application Architecture</li>
            <li>UI/UX Design, Branding & Logos</li>
            <li>SEO Audit & Optimization Services</li>
            <li>Digital Products & Templates</li>
            <li>Monthly Maintenance Retainers</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-3 pt-4 border-t border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            2. How the 7-Day Window Works
          </h3>
          <p className="text-sm text-zinc-400">
            You have a full <strong className="text-white">7 calendar days</strong> from the date of payment or initial delivery to test the work, review the code or design, and verify everything functions to your satisfaction.
          </p>
          <p className="text-sm text-zinc-400">
            If during this 7-day period you decide the service did not meet your expectations, or if our team cannot resolve any technical issues to your requirements, you are entitled to a full 100% refund of all funds paid for that service.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-3 pt-4 border-t border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            3. How to Request a Refund
          </h3>
          <p className="text-sm text-zinc-400">
            Requesting a refund is simple and hassle-free. Just contact us through either of the following channels:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-[#222222] border border-[#333333] rounded-xl p-4 space-y-1">
              <span className="text-xs font-bold text-[#FF6B2B] uppercase tracking-wider block">Email Request</span>
              <a href="mailto:hello@marutidigital.in" className="text-sm font-semibold text-white hover:underline flex items-center gap-1.5">
                <Mail size={14} className="text-[#FF6B2B]" />
                hello@marutidigital.in
              </a>
              <span className="text-[11px] text-zinc-500 block">Response within 24 hours</span>
            </div>

            <div className="bg-[#222222] border border-[#333333] rounded-xl p-4 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Instant WhatsApp</span>
              <a
                href={`https://wa.me/918878933778?text=${encodeURIComponent(
                  "Hi Maruti Digital, I would like to request a refund under your 7-day money-back guarantee."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:underline flex items-center gap-1.5"
              >
                <Phone size={14} className="text-emerald-400" />
                WhatsApp: +91 8878933778
              </a>
              <span className="text-[11px] text-zinc-500 block">Direct manager support</span>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            Please include: (1) Your Name or Company, (2) Invoice / Transaction ID or Stripe receipt, and (3) A brief note about why the service did not fit your needs.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="space-y-3 pt-4 border-t border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            4. Refund Processing & Payout Timing
          </h3>
          <p className="text-sm text-zinc-400">
            Once submitted, your refund is approved within <strong className="text-white">24 hours</strong>.
          </p>
          <ul className="text-xs text-zinc-400 space-y-2 pl-4 list-disc marker:text-emerald-400">
            <li>
              <strong className="text-white">Credit / Debit Cards (Stripe):</strong> The refund is returned directly to the card you paid with. Funds typically show on your card statement in 3–5 business days depending on your bank.
            </li>
            <li>
              <strong className="text-white">Apple Pay / Google Pay:</strong> Credited back to the linked funding card immediately upon Stripe processing.
            </li>
            <li>
              <strong className="text-white">Direct Bank Wire / SWIFT:</strong> Re-routed back to the originating bank account within 3–7 business days.
            </li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section className="space-y-3 pt-4 border-t border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            5. Cancellation Before Project Completion
          </h3>
          <p className="text-sm text-zinc-400">
            If you choose to cancel an ongoing project before completion, you are eligible for a 100% full refund if requested within 7 days of starting. Upon refund issuance, all proprietary codes, staging deployments, or design draft files will be revoked and remain the intellectual property of Maruti Digital.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="space-y-3 pt-4 border-t border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF6B2B' }} />
            6. Fair Use Policy
          </h3>
          <p className="text-sm text-zinc-400">
            Our 7-day money-back guarantee is offered in good faith to give our clients complete peace of mind. We reserve the right to decline future service requests from clients who repeatedly order custom deliverables and request refunds after receiving full production source codes.
          </p>
        </section>

        {/* CONTACT FOOTER */}
        <div className="pt-6 border-t border-[#2A2A2A] bg-[#222222] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Have questions about our refund policy?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">We are always available to help and ensure you have a seamless experience.</p>
          </div>
          <Link
            href="/pay"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white shadow-md hover:opacity-90 transition"
            style={{ backgroundColor: '#FF6B2B' }}
          >
            <span>Client Payment Portal</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
