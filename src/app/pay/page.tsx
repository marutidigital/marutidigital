import { Suspense } from 'react';
import type { Metadata } from 'next';
import PaymentPortalClient from './PaymentPortalClient';

export const metadata: Metadata = {
  title: 'Client Payment Portal | Maruti Digital',
  description:
    'Secure online payment portal for Maruti Digital clients. Settle invoices, project milestones, or retainers in Euros (€) via Stripe.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <span className="w-8 h-8 border-4 border-[#FF6B2B] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-semibold text-zinc-400">Loading Payment Portal...</p>
          </div>
        </div>
      }
    >
      <PaymentPortalClient />
    </Suspense>
  );
}
