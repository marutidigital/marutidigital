'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, CreditCard, Code, CheckCircle, MessageCircle } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="bleed-wrapper">
      
      {/* ── HEADER ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            How MarutiDigital Works
          </h1>
          <p style={{ fontSize: '18px', color: '#E0E0DA', lineHeight: 1.6 }}>
            A simple, transparent, and risk-free process to get your digital work done perfectly.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F7' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <div className="space-y-12">
            
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black" style={{ backgroundColor: 'rgba(255,107,43,0.1)', color: '#FF6B2B' }}>1</div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '12px' }} className="flex items-center gap-3">
                  Browse & Select Your Service <Search size={22} style={{ color: '#FF6B2B' }} />
                </h3>
                <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6 }}>
                  Look through our catalog of 545+ digital services. Every service has a clearly listed, fixed price. Whether you need a simple WordPress fix for $5, a logo design for $15, or a full website build, you'll know exactly what it costs upfront. No hidden fees.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black" style={{ backgroundColor: 'rgba(255,107,43,0.1)', color: '#FF6B2B' }}>2</div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '12px' }} className="flex items-center gap-3">
                  Pay 20% to Start <CreditCard size={22} style={{ color: '#FF6B2B' }} />
                </h3>
                <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6 }}>
                  Once you select your service and provide the necessary details, you only pay a 20% upfront deposit to confirm the order. This small commitment allows our team to allocate resources and begin working on your project immediately.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black" style={{ backgroundColor: 'rgba(255,107,43,0.1)', color: '#FF6B2B' }}>3</div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '12px' }} className="flex items-center gap-3">
                  We Build & Deliver <Code size={22} style={{ color: '#FF6B2B' }} />
                </h3>
                <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6 }}>
                  Our in-house specialists get to work. You will be assigned a dedicated project manager who will keep you updated. You can chat with us anytime via email or WhatsApp. We deliver the initial draft or completed task within the promised timeframe.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black" style={{ backgroundColor: 'rgba(255,107,43,0.1)', color: '#FF6B2B' }}>4</div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '12px' }} className="flex items-center gap-3">
                  Review & Pay the Rest <CheckCircle size={22} style={{ color: '#2ECC71' }} />
                </h3>
                <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6 }}>
                  You review the work. Need changes? We offer free revisions until it's exactly what you want. Once you are 100% satisfied and have approved the final delivery, you pay the remaining 80% balance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE TABLE ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '40px' }}>
            Expected Delivery Timelines
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border-b border-gray-200 font-bold">Service Category</th>
                  <th className="p-4 border-b border-gray-200 font-bold">Estimated Delivery</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-4 border-b border-gray-100">Website Fixes & Small Changes</td><td className="p-4 border-b border-gray-100 font-medium">24 - 48 Hours</td></tr>
                <tr className="bg-gray-50"><td className="p-4 border-b border-gray-100">Logo & Graphic Design</td><td className="p-4 border-b border-gray-100 font-medium">2 - 3 Days</td></tr>
                <tr><td className="p-4 border-b border-gray-100">SEO Audits & Setup</td><td className="p-4 border-b border-gray-100 font-medium">3 - 5 Days</td></tr>
                <tr className="bg-gray-50"><td className="p-4 border-b border-gray-100">Content Writing (per article)</td><td className="p-4 border-b border-gray-100 font-medium">48 Hours</td></tr>
                <tr><td className="p-4 border-b border-gray-100">Landing Page Development</td><td className="p-4 border-b border-gray-100 font-medium">3 - 5 Days</td></tr>
                <tr className="bg-gray-50"><td className="p-4 border-b border-gray-100">Full Website Development</td><td className="p-4 border-b border-gray-100 font-medium">7 - 14 Days</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#FF6B2B', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
            Get started right now.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="btn-brand-white">
              View All Services
            </Link>
            <a href="https://wa.me/918878933778" target="_blank" rel="noopener noreferrer" className="btn-brand-outline text-white border-white hover:bg-white/10">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
