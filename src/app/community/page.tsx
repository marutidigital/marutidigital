'use client';

import React from 'react';
import Link from 'next/link';
import { Users, MessageSquare, Check, Sparkles, Briefcase, Zap } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CommunityPage() {
  const { addToCart } = useCart();

  const handleBuyTier = (tierName: string, price: number, id: string) => {
    addToCart({
      id: `community-${id}`,
      name: `MarutiDigital Membership: ${tierName}`,
      price: price,
      category: 'Bundles',
    });
  };

  return (
    <div className="bleed-wrapper">
      
      {/* ── HEADER ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            The MarutiDigital Community
          </h1>
          <p style={{ fontSize: '18px', color: '#E0E0DA', lineHeight: 1.6 }}>
            Join our private community of business owners, developers, and marketers. Get exclusive insights, networking opportunities, and premium support.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: '#FAF9F7', padding: '40px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">
            <div className="mx-auto bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <MessageSquare size={32} style={{ color: '#FF6B2B' }} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start the Conversation</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We have moved our public forums to a private Discord community to ensure high-quality discussions and dedicated support for our clients and members.
            </p>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-brand-primary inline-flex"
            >
              Join the Free Server
            </a>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
              Upgrade Your Experience
            </h2>
            <p className="text-gray-600">Get access to premium channels, exclusive tutorials, and priority support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Free */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">Connect and read general updates.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">$0</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Public Discord channels</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> General community support</li>
              </ul>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="btn-brand-outline text-center block mt-auto">
                Join Free
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl border bg-white flex flex-col h-full relative" style={{ borderColor: '#FF6B2B', boxShadow: '0 8px 30px rgba(255,107,43,0.12)' }}>
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] uppercase font-black px-4 py-1 rounded-bl-lg" style={{ backgroundColor: '#FF6B2B' }}>
                Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                Pro <Sparkles size={18} style={{ color: '#FF6B2B' }} />
              </h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">Exclusive tutorials and priority support.</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">$9</span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Everything in Free</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Private Pro Discord channels</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Priority 12hr support responses</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Monthly exclusive tutorials</li>
              </ul>
              <button onClick={() => handleBuyTier('Pro Monthly', 9, 'pro')} className="btn-brand-primary w-full mt-auto">
                Upgrade to Pro
              </button>
            </div>

            {/* Lifetime */}
            <div className="p-8 rounded-2xl border border-gray-200 bg-white flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">Pay once, access forever.</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">$99</span>
                <span className="text-sm text-gray-500">one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Everything in Pro</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Lifetime access (no rebills)</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Check size={18} style={{ color: '#2ECC71' }} /> Direct 1-on-1 monthly call</li>
              </ul>
              <button onClick={() => handleBuyTier('Lifetime Access', 99, 'lifetime')} className="btn-brand-outline w-full mt-auto">
                Get Lifetime Access
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── JOIN OUR TEAM BANNER ── */}
      <section style={{ backgroundColor: '#111111', padding: '60px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 justify-center md:justify-start">
                <Briefcase style={{ color: '#FF6B2B' }} /> Join Our Specialist Team
              </h2>
              <p className="text-gray-400">Are you a talented developer or designer? We are always looking for experts to join our roster.</p>
            </div>
            <Link href="/join-us" className="btn-brand-primary whitespace-nowrap">
              Apply to Join Team <Zap size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
