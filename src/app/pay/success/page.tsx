'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, Phone, Home, Receipt } from 'lucide-react';

interface SessionDetails {
  status?: string;
  customerEmail?: string;
  amountTotal?: number;
  currency?: string;
  clientName?: string;
  description?: string;
  id?: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const paramAmount = searchParams.get('amount');

  const [details, setDetails] = useState<SessionDetails | null>(null);

  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/verify-payment?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setDetails(data);
        }
      })
      .catch((err) => {
        console.error('Failed to verify session details:', err);
      });
  }, [sessionId]);

  const displayAmount =
    details?.amountTotal !== undefined && details.amountTotal !== null
      ? details.amountTotal.toFixed(2)
      : paramAmount
      ? parseFloat(paramAmount).toFixed(2)
      : '200.00';

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-lg bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>

        <span className="mt-5 inline-block rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 px-3 py-1 text-xs font-bold text-[#FF6B2B] uppercase tracking-wider">
          Payment Confirmed
        </span>

        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Payment Successful!
        </h1>

        <p className="mt-2 text-sm text-zinc-400 max-w-sm mx-auto">
          Thank you for your payment. Your transaction has been securely processed by Stripe.
        </p>

        {/* AMOUNT CARD */}
        <div className="mt-6 rounded-xl border border-[#2A2A2A] bg-[#111111] p-5 text-left">
          <div className="flex justify-between items-baseline border-b border-[#2A2A2A] pb-3">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              Amount Paid
            </span>
            <span className="text-2xl font-black text-[#FF6B2B]">
              €{displayAmount} EUR
            </span>
          </div>

          <div className="mt-3 space-y-2 text-xs text-zinc-300">
            {details?.customerEmail && (
              <div className="flex justify-between">
                <span className="text-zinc-500">Receipt Sent To:</span>
                <span className="font-semibold text-white">{details.customerEmail}</span>
              </div>
            )}
            {details?.description && (
              <div className="flex justify-between">
                <span className="text-zinc-500">Reference:</span>
                <span className="font-semibold text-white truncate max-w-[200px]">
                  {details.description}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-zinc-500">Status:</span>
              <span className="font-bold text-emerald-400 uppercase tracking-wider">
                Confirmed / Paid
              </span>
            </div>
            {sessionId && (
              <div className="flex justify-between text-[10px] text-zinc-500 pt-2 border-t border-[#2A2A2A]">
                <span>Session ID:</span>
                <span className="font-mono truncate max-w-[180px]">{sessionId}</span>
              </div>
            )}
          </div>
        </div>

        {/* TAX RECEIPT NOTE */}
        <div className="mt-5 rounded-xl bg-[#222222] border border-[#333333] p-4 text-xs text-zinc-400 flex items-start gap-3 text-left">
          <Receipt size={16} className="text-[#FF6B2B] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-white">Automated Tax Invoice & Receipt</p>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Stripe has automatically dispatched an official PDF receipt and proof of payment to your email address.
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl border border-[#2A2A2A] bg-[#222222] font-bold text-xs text-zinc-200 hover:text-white hover:bg-[#282828] flex items-center justify-center gap-2 transition"
          >
            <Home size={14} />
            <span>Return to Home</span>
          </Link>

          <a
            href={`https://wa.me/918878933778?text=${encodeURIComponent(
              `Hi Maruti Digital, I just completed a payment of €${displayAmount} EUR on your website portal.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-3 px-4 rounded-xl font-bold text-xs text-white hover:opacity-90 flex items-center justify-center gap-2 transition"
            style={{ backgroundColor: '#FF6B2B' }}
          >
            <Phone size={14} />
            <span>Confirm on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaySuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="w-8 h-8 border-4 border-[#FF6B2B] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-semibold text-zinc-400">Verifying payment status...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
