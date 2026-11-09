'use client';

import React, { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Lock,
  ShieldCheck,
  CreditCard,
  AlertCircle,
  Zap,
  ArrowRight,
  Receipt,
  Building2,
  Mail,
  FileText,
  HelpCircle,
  Phone,
  CheckCircle,
} from 'lucide-react';

const PRESET_AMOUNTS = [50, 100, 200, 350, 500, 1000];

export default function PaymentPortalClient() {
  const searchParams = useSearchParams();
  const isCanceled = searchParams.get('canceled') === 'true';

  const [amount, setAmount] = useState<string>('200');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const numericAmount = parseFloat(amount) || 0;

  const handlePresetClick = (val: number) => {
    setAmount(val.toString());
    setErrorMessage(null);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === '' || /^\d+(\.\d{0,2})?$/.test(raw)) {
      setAmount(raw);
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (numericAmount < 1) {
      setErrorMessage('Please enter an amount of at least €1.00 EUR.');
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: numericAmount,
            clientName: clientName.trim(),
            clientEmail: clientEmail.trim(),
            description: description.trim(),
          }),
        });

        const data = await res.json();

        if (!res.ok || !data.url) {
          throw new Error(data.error || 'Unable to initiate payment session.');
        }

        window.location.href = data.url;
      } catch (err) {
        setErrorMessage(
          err instanceof Error
            ? err.message
            : 'Payment initialization failed. Please try again or contact us.'
        );
      }
    });
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* HEADER BANNER */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B]">
          <Zap size={14} className="fill-[#FF6B2B]" />
          Secure Client Payment Portal
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Client Checkout in <span style={{ color: '#FF6B2B' }}>Euros (€)</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Settle your project milestones, monthly retainers, or custom invoices securely.
          Powered directly by Stripe with bank-grade 256-bit SSL encryption.
        </p>
      </div>

      {/* CANCELED ALERT BANNER */}
      {isCanceled && (
        <div className="mb-8 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm flex items-center gap-3">
          <AlertCircle size={20} className="text-amber-400 flex-shrink-0" />
          <span>
            Your previous checkout was canceled. No charges were made. You can adjust the amount or details below and try again.
          </span>
        </div>
      )}

      {/* MAIN TWO-COLUMN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: FORM */}
        <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-6 border-b border-[#2A2A2A]">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Payment Details
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Default amount is €200 EUR. You can select a preset or type your custom amount.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <ShieldCheck size={14} />
              <span>Stripe Verified</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {/* 1. AMOUNT SELECTOR */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  1. Payment Amount (EUR €) *
                </label>
                <span className="text-[11px] font-semibold text-zinc-400">Currency: EUR</span>
              </div>

              {/* PRESET CHIPS */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                {PRESET_AMOUNTS.map((val) => {
                  const isSelected = numericAmount === val;
                  const isDefault = val === 200;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetClick(val)}
                      className={`relative py-2.5 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'border-[#FF6B2B] bg-[#FF6B2B] text-white shadow-lg shadow-[#FF6B2B]/20 -translate-y-0.5'
                          : 'border-[#2A2A2A] bg-[#222222] text-zinc-300 hover:border-zinc-600 hover:bg-[#282828]'
                      }`}
                    >
                      {isDefault && (
                        <span className="absolute -top-2 bg-emerald-500 text-black px-1.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                          Default
                        </span>
                      )}
                      <span>€{val}</span>
                    </button>
                  );
                })}
              </div>

              {/* CUSTOM AMOUNT INPUT */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-2xl font-black text-white">€</span>
                <input
                  id="custom-amount-input"
                  type="text"
                  inputMode="decimal"
                  required
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="200"
                  className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#FF6B2B] rounded-xl pl-12 pr-16 py-3.5 text-2xl font-black text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                />
                <span className="absolute right-4 text-xs font-bold text-zinc-400">EUR</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1.5">
                Enter any custom amount matching your invoice or agreed milestone.
              </p>
            </div>

            {/* 2. CLIENT INFORMATION */}
            <div className="pt-4 border-t border-[#2A2A2A] space-y-4">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
                2. Client & Project Details
              </label>

              {/* Client / Company Name */}
              <div>
                <label htmlFor="clientName" className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Building2 size={14} className="text-zinc-500" />
                  Your Name or Company Name
                </label>
                <input
                  id="clientName"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. John Doe / Studio Acme"
                  className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#FF6B2B] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Client Email */}
              <div>
                <label htmlFor="clientEmail" className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 mb-1">
                  <Mail size={14} className="text-zinc-500" />
                  Email Address (for Stripe Tax Invoice & Receipt)
                </label>
                <input
                  id="clientEmail"
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. client@company.com"
                  className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#FF6B2B] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                />
                <span className="text-[11px] text-zinc-500 mt-1 block">
                  Stripe will automatically email your payment confirmation and tax receipt here.
                </span>
              </div>

              {/* Invoice Reference / Description */}
              <div>
                <label htmlFor="description" className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 mb-1">
                  <FileText size={14} className="text-zinc-500" />
                  Project Reference / Invoice Notes (Optional)
                </label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Invoice #204 - Website & Automation Services"
                  className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-[#FF6B2B] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium flex items-start gap-2.5">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isPending || numericAmount < 1}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FF6B2B]/25 hover:opacity-95"
              style={{ backgroundColor: '#FF6B2B' }}
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Redirecting to Stripe...</span>
                </>
              ) : (
                <>
                  <Lock size={15} />
                  <span>Pay €{numericAmount ? numericAmount.toFixed(2) : '0.00'} EUR with Stripe</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-400 font-medium pt-1">
              <span className="flex items-center gap-1">
                <Lock size={12} className="text-emerald-400" /> End-to-end encrypted
              </span>
              <span>•</span>
              <span>No card data stored locally</span>
              <span>•</span>
              <span>PCI Level 1</span>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: SUMMARY & TRUST */}
        <div className="lg:col-span-5 space-y-6">
          {/* PAYMENT SUMMARY CARD */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider pb-3 border-b border-[#2A2A2A] flex items-center gap-2">
              <Receipt size={14} className="text-[#FF6B2B]" />
              Order Summary
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between items-center text-zinc-400">
                <span>Description:</span>
                <span className="font-semibold text-white max-w-[200px] truncate text-right">
                  {description.trim() || 'Digital & Development Services'}
                </span>
              </div>

              <div className="flex justify-between items-center text-zinc-400">
                <span>Currency:</span>
                <span className="font-semibold text-white">Euros (EUR - €)</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400">
                <span>Transaction Fee:</span>
                <span className="font-semibold text-emerald-400">€0.00 (Covered)</span>
              </div>

              <div className="pt-3 border-t border-[#2A2A2A] flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Total Due:</span>
                <span className="text-2xl font-black text-[#FF6B2B]">
                  €{numericAmount ? numericAmount.toFixed(2) : '0.00'}
                </span>
              </div>
            </div>

            {/* ACCEPTED PAYMENT METHODS */}
            <div className="mt-6 pt-4 border-t border-[#2A2A2A]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
                Accepted Payment Methods:
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-zinc-300">
                <span className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333] flex items-center gap-1">
                  <CreditCard size={12} className="text-zinc-400" /> Visa / Mastercard
                </span>
                <span className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333]">
                  American Express
                </span>
                <span className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333]">
                  Apple Pay
                </span>
                <span className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333]">
                  Google Pay
                </span>
                <span className="px-2.5 py-1 rounded bg-[#222222] border border-[#333333]">
                  SEPA / EU Direct
                </span>
              </div>
            </div>
          </div>

          {/* SECURITY BADGE */}
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-5 text-zinc-300 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Certified Bank-Grade Protection</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your payment is processed through Stripe&apos;s PCI-DSS Level 1 certified checkout environment.
              We never store or view your credit card details.
            </p>
            <div className="pt-2 text-xs space-y-1 text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
                <span>Instant tax invoice PDF delivered via email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
                <span>EU Strong Customer Authentication (SCA) 3D Secure</span>
              </div>
            </div>
          </div>

          {/* DIRECT WIRE / WHATSAPP SUPPORT */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-5 text-xs text-zinc-400 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <HelpCircle size={15} className="text-[#FF6B2B]" />
              <span>Need Direct Wire / IBAN Details?</span>
            </div>
            <p className="leading-relaxed">
              For payments over €5,000 or custom business bank wires, contact us on WhatsApp to receive official bank coordinates.
            </p>
            <a
              href={`https://wa.me/918878933778?text=${encodeURIComponent(
                "Hi Maruti Digital, I would like to arrange a payment for my project. Can you provide bank / invoice details?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#FF6B2B] hover:underline pt-1"
            >
              <Phone size={13} /> Chat on WhatsApp (+91 8878933778)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
