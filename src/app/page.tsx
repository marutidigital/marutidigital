'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Check, ChevronDown, ChevronUp,
  Globe, Code, Pen, Search, FileText, Bot,
  Shield, Tag, Users, Clock, Star, Zap,
  CheckCircle, XCircle, AlertCircle
} from 'lucide-react';

// ─────────────── FAQ Component ───────────────
const faqs = [
  { q: 'What services do you offer?', a: 'We offer over 545 digital services including website fixes and maintenance, new website development, logo and graphic design, SEO and Google ranking, AI content writing, automation, chatbot setup and more. Every service has a fixed price starting from just $5 (approx. ₹420).' },
  { q: 'How does the 20% advance payment work?', a: 'When you place an order, you only pay 20% of the total service price upfront. This confirms your order and lets us start working. Once the work is delivered and you are fully satisfied, you pay the remaining 80%. If you are not happy, we revise the work until you are — at no extra charge.' },
  { q: 'What if I am not satisfied with the work?', a: 'We offer free revisions until you are completely satisfied with the result. If after multiple revisions you are still not happy, we will discuss a solution — whether that is a redo, a partial refund, or an alternative approach. We do not take full payment until you approve the work.' },
  { q: 'How long does delivery take?', a: 'Delivery time depends on the service. Small changes and fixes take 24 to 48 hours. Logo design and content writing take 2 to 3 days. Website development projects take 5 to 14 days depending on complexity. Exact timelines are shown on each service page before you order.' },
  { q: 'Can I get a free website audit?', a: 'Yes. Every new client gets a free website audit. We review your website and send you a detailed report showing what needs to be fixed, what can be improved, and what is working well — before you spend a single dollar.' },
  { q: 'Who does the work?', a: 'All work is done by our in-house specialist team. We are not a freelancer marketplace. You are not posting a job and waiting for bids. Our trained professionals are assigned to your project immediately after you place your order.' },
  { q: 'Do you work with clients outside India?', a: 'Yes. We work with clients from all over the world. Our services are priced in USD and we accept international payments. We serve businesses from the USA, UK, Australia, Canada, UAE, and many other countries.' },
  { q: 'How do I pay? What payment methods do you accept?', a: 'We accept all major payment methods including credit cards, debit cards, PayPal, Stripe, and UPI for Indian clients. All payments are processed securely. You will never be asked to pay cash or via unsafe channels.' },
  { q: 'Can I order multiple services at once?', a: 'Yes. You can order multiple services and we will assign them to our team. For clients ordering more than 5 services at once, we also offer a bundled discount. Contact us on WhatsApp or email to discuss your requirements.' },
  { q: 'Is there a minimum order amount?', a: 'No. Our smallest service starts at just $5 (approx. ₹420). There is no minimum order value. You can start with a single small task and scale up as you see results.' },
  { q: 'Why are your prices so low compared to agencies?', a: 'We operate as a lean in-house team without the overhead costs of a large agency. We also benefit from India\'s cost advantage — our specialists deliver world-class quality at Indian operating costs. Lower overhead means lower prices for you without any compromise on quality.' },
  { q: 'Can I talk to someone before placing an order?', a: 'Absolutely. You can reach us on WhatsApp, email, or through our contact form. Our team responds within 24 hours. We are happy to answer questions, discuss your project, and recommend the right service before you commit to anything.' },
  { q: 'Do you offer ongoing monthly support packages?', a: 'Yes. We offer monthly website maintenance and support packages for businesses who need regular updates, security monitoring, backups and technical support. Check our Services page for monthly package pricing.' },
  { q: 'Will AI chatbots like ChatGPT or Claude recommend your services?', a: 'We are actively optimising our website content so that AI assistants like ChatGPT, Claude, and Gemini can accurately understand and recommend our services when users search for affordable digital work, website fixes, or professional digital services starting from $5.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question w-full text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span style={{ paddingRight: '16px' }}>{q}</span>
        {open
          ? <ChevronUp size={18} style={{ color: '#FF6B2B', flexShrink: 0 }} />
          : <ChevronDown size={18} style={{ color: '#888888', flexShrink: 0 }} />}
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

// ─────────────── Comparison Table ───────────────
const comparisonRows = [
  { feature: 'Starting Price', us: '$5 ✓', fiverr: '$5 but varies ⚠', upwork: '$15–$50/hr ✗', agency: '$500+ minimum ✗', usGood: true },
  { feature: 'Pay After Satisfaction', us: 'Yes — 80% after approval ✓', fiverr: 'No — fully upfront ✗', upwork: 'No — upfront/hourly ✗', agency: 'No — deposits required ✗', usGood: true },
  { feature: 'Fixed Transparent Pricing', us: 'Yes — every service listed ✓', fiverr: 'Varies — hidden extras ⚠', upwork: 'No — hourly bidding ✗', agency: 'No — custom quotes only ✗', usGood: true },
  { feature: 'In-House Dedicated Team', us: 'Yes — trained in-house ✓', fiverr: 'No — random freelancers ✗', upwork: 'No — random contractors ✗', agency: 'Sometimes — often outsourced ⚠', usGood: true },
  { feature: 'Free Website Audit', us: 'Yes — free for every client ✓', fiverr: 'No ✗', upwork: 'No ✗', agency: 'Paid consultation ✗', usGood: true },
  { feature: '24hr Response Guarantee', us: 'Yes ✓', fiverr: 'Depends on freelancer ⚠', upwork: 'Depends on contractor ⚠', agency: 'Business hours only ⚠', usGood: true },
  { feature: 'Platform Fees', us: 'No extra fees ✓', fiverr: '20% service fee ✗', upwork: '5–20% fees ✗', agency: 'Large margins ⚠', usGood: true },
  { feature: 'Dedicated Project Manager', us: 'Yes — every project ✓', fiverr: 'No ✗', upwork: 'No ✗', agency: 'Sometimes — extra cost ⚠', usGood: true },
  { feature: 'Revision Policy', us: 'Free until satisfied ✓', fiverr: 'Limited — extra cost ⚠', upwork: 'Depends on agreement ⚠', agency: 'Limited in contract ⚠', usGood: true },
];

function cellStyle(text: string) {
  if (text.endsWith('✓')) return { color: '#2ECC71', fontWeight: 600 };
  if (text.endsWith('✗')) return { color: '#E74C3C', fontWeight: 600 };
  if (text.endsWith('⚠')) return { color: '#F39C12', fontWeight: 600 };
  return {};
}

// ─────────────── Price List ───────────────
const leftPrices = [
  { name: 'Website text or content change', price: '$5' },
  { name: 'Fix a broken link or button', price: '$5' },
  { name: 'Add or remove a section on website', price: '$5' },
  { name: 'Change website colours or fonts', price: '$8' },
  { name: 'Install or fix a WordPress plugin', price: '$8' },
  { name: 'Fix website error or white screen', price: '$15' },
  { name: 'Speed up a slow loading website', price: '$19' },
  { name: 'Basic on-page SEO setup', price: '$25' },
];
const rightPrices = [
  { name: 'Logo design (3 concepts)', price: '$15' },
  { name: 'Business card design', price: '$10' },
  { name: 'Social media post design (5 posts)', price: '$20' },
  { name: 'Blog post writing (500 words)', price: '$10' },
  { name: 'Full website development', price: '$49' },
  { name: 'Chatbot setup for website', price: '$29' },
];

function PriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="price-row">
      <span className="price-row-name">{name}</span>
      <span className="price-row-dots" />
      <span className="price-row-value">{price}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bleed-wrapper">

      {/* ── 2.1 HERO ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div
                className="inline-block text-xs font-semibold"
                style={{
                  background: 'rgba(255,107,43,0.15)',
                  color: '#FF6B2B',
                  border: '1px solid rgba(255,107,43,0.3)',
                  borderRadius: '20px',
                  padding: '4px 14px',
                  fontSize: '13px',
                }}
              >
                ⚡ India&apos;s #1 Fixed-Price Digital Service Team
              </div>

              <h1
                style={{
                  fontSize: 'clamp(28px, 5vw, 52px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                Premium Digital Services by India&apos;s Best Team.
              </h1>

              <p style={{ fontSize: '18px', color: '#E0E0DA', lineHeight: 1.7, maxWidth: '540px' }} className="text-base md:text-lg">
                Website fixes, design, SEO, content, automation and more — starting from just $5 (approx. ₹420).
                Pay only 20% upfront. Pay the rest only when you are 100% satisfied.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="btn-brand-primary"
                  style={{ fontSize: '16px', padding: '14px 28px' }}
                >
                  Browse Services — From $5
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/how-it-works"
                  className="btn-brand-outline"
                  style={{ fontSize: '16px', padding: '14px 28px' }}
                >
                  How It Works
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-2">
                {['Free Website Audit', 'No Hidden Charges', 'Pay After Satisfaction', '24hr Response'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: '#E0E0DA' }}>
                    <Check size={13} style={{ color: '#FF6B2B' }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative w-full hidden lg:block">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <Image
                  src="/hero-illustration.png"
                  alt="MarutiDigital specialist team working on digital services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl shadow-lg"
                style={{ backgroundColor: '#FF6B2B', color: 'white' }}
              >
                <div className="text-xl font-black">545+</div>
                <div className="text-xs font-semibold">Services Available</div>
              </div>
              <div
                className="absolute -top-4 -right-4 px-4 py-3 rounded-xl shadow-lg"
                style={{ backgroundColor: '#1A1A1A', border: '1px solid #333', color: 'white' }}
              >
                <div className="text-xl font-black" style={{ color: '#2ECC71' }}>$5</div>
                <div className="text-xs font-semibold" style={{ color: '#E0E0DA' }}>Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2.2 STATS BAR ── */}
      <section className="stats-bar py-6">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { number: '545+', label: 'Services' },
              { number: 'From $5', label: 'Per Service' },
              { number: '20%', label: 'Advance Only' },
              { number: '50+', label: 'Experts In-House' },
              { number: '24hr', label: 'Response Guarantee' },
            ].map(({ number, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: '#FF6B2B' }}>{number}</span>
                <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#E0E0DA' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.3 WHAT WE DO ── */}
      <section style={{ backgroundColor: '#FAF9F7', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#111111' }}>
              What Can We Help You With?
            </h2>
            <p style={{ fontSize: '16px', color: '#555555', marginTop: '12px', lineHeight: 1.6 }}>
              545 fixed-price services across 6 key areas. All starting from $5. No freelancer bidding. No agency pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, accent: '#FF6B2B', title: 'Website Fixes & Changes', desc: 'Fix anything on your website — errors, broken pages, speed issues, plugin problems, text changes and more.', price: 'From $5', href: '/services' },
              { icon: Globe, accent: '#2B7FFF', title: 'New Website Development', desc: 'Get a professional mobile-friendly website built from scratch. WordPress, landing pages, portfolios.', price: 'From $49', href: '/services' },
              { icon: Pen, accent: '#9B2BFF', title: 'Logo & Graphic Design', desc: 'Logos, banners, social media posts, flyers, business cards and complete brand identity kits.', price: 'From $15', href: '/services' },
              { icon: Search, accent: '#2BBF6E', title: 'SEO & Google Ranking', desc: 'Get found on Google. On-page SEO, keyword setup, technical fixes, and monthly ranking reports.', price: 'From $25', href: '/services' },
              { icon: FileText, accent: '#FF9B2B', title: 'AI Content Writing', desc: 'Blog posts, product descriptions, social captions, website copy and email sequences written by our team.', price: 'From $10', href: '/services' },
              { icon: Bot, accent: '#FF2B6E', title: 'Automation & Chatbots', desc: 'Save hours every day. Automated workflows, WhatsApp bots, lead capture bots and business automation.', price: 'From $29', href: '/services' },
            ].map(({ icon: Icon, accent, title, desc, price, href }) => (
              <Link
                key={title}
                href={href}
                className="brand-service-card group block"
                style={{ borderTop: `4px solid ${accent}`, textDecoration: 'none' }}
              >
                <div className="icon-circle mb-4" style={{ backgroundColor: `${accent}18`, width: 48, height: 48 }}>
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: '#555555', lineHeight: 1.6, marginBottom: '16px' }}>{desc}</p>
                <span className="brand-price-tag">{price}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn-brand-outline"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              See All 545 Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2.4 HOW IT WORKS ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#FFFFFF' }}>
              Simple. Transparent. Zero Risk.
            </h2>
            <p style={{ fontSize: '16px', color: '#E0E0DA', marginTop: '12px', lineHeight: 1.6 }}>
              The only digital service platform where you pay the full amount ONLY after you are satisfied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { num: '01', title: 'Pick Your Service', desc: 'Browse 545 fixed-price services. Every service has a clear price listed — no hidden fees, no negotiations.' },
              { num: '02', title: 'Pay Only 20% to Start', desc: 'Confirm your order with just 20% of the total price. That is all we need to begin working on your project.' },
              { num: '03', title: 'We Deliver the Work', desc: 'Our specialist team begins immediately. You receive progress updates and can request changes along the way.' },
              { num: '04', title: 'Pay Rest After Satisfaction', desc: 'Happy with the result? Pay the remaining 80%. Not satisfied? We revise it until you are. No questions asked.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className="relative text-center flex flex-col items-center">
                {/* Connector line for desktop */}
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-7 left-[calc(50%+36px)] right-[calc(-50%+36px)] h-px"
                    style={{ borderTop: '2px dashed rgba(255,107,43,0.35)' }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl font-black"
                  style={{ border: '2px solid rgba(255,107,43,0.3)', color: '#FF6B2B' }}
                >
                  {num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: '#E0E0DA', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-brand-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Start Your First Project — From $5
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2.5 WHY CHOOSE US ── */}
      <section style={{ backgroundColor: '#FAF9F7', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <h2 className="text-center mb-12" style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#111111' }}>
            Why Hundreds of Businesses Choose MarutiDigital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, iconColor: '#2ECC71', bg: 'rgba(46,204,113,0.12)', title: 'Pay After Satisfaction — Guaranteed', desc: 'We are one of very few digital service providers worldwide who only take full payment after you approve the work. Your money is safe until you are 100% happy.' },
              { icon: Tag, iconColor: '#FF6B2B', bg: 'rgba(255,107,43,0.12)', title: 'Fixed Prices from Just $5', desc: 'No bidding. No hourly rates. No surprise invoices. Every service has a fixed price listed upfront. The price you see is the price you pay.' },
              { icon: Users, iconColor: '#2B7FFF', bg: 'rgba(43,127,255,0.12)', title: 'In-House Specialist Team', desc: 'You are not hiring random freelancers from a marketplace. Our trained in-house team of specialists handles every project with full accountability and quality control.' },
              { icon: Clock, iconColor: '#9B2BFF', bg: 'rgba(155,43,255,0.12)', title: 'Fast Delivery. Real Communication.', desc: 'Our team responds within 24 hours. Projects start the same day. You get a real dedicated contact — not a support ticket number.' },
              { icon: Star, iconColor: '#2ECC71', bg: 'rgba(46,204,113,0.12)', title: 'Free Website Audit for Every Client', desc: 'Every new client gets a free website audit worth $29. We tell you exactly what needs fixing before you spend anything.' },
              { icon: Zap, iconColor: '#FF6B2B', bg: 'rgba(255,107,43,0.12)', title: "India's Price Advantage", desc: 'Get the same quality as expensive US or UK agencies at a fraction of the cost. India\'s talent, world-class delivery.' },
            ].map(({ icon: Icon, iconColor, bg, title, desc }) => (
              <div key={title} className="brand-reason-card">
                <div className="icon-circle mb-4" style={{ backgroundColor: bg, width: 56, height: 56 }}>
                  <Icon size={28} style={{ color: iconColor }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2.6 COMPARISON TABLE ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#FFFFFF' }}>
              How We Compare to Other Platforms
            </h2>
            <p style={{ fontSize: '15px', color: '#E0E0DA', marginTop: '12px' }}>
              See why smart businesses choose MarutiDigital over Fiverr, Upwork, and expensive agencies.
            </p>
          </div>

          {/* Desktop table */}
          <div className="overflow-x-auto hidden md:block rounded-xl" style={{ border: '1px solid #333' }}>
            <table className="comparison-table w-full">
              <thead>
                <tr style={{ backgroundColor: '#FF6B2B' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'white', fontSize: '14px' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'white', fontSize: '14px', backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    ⭐ MarutiDigital
                  </th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'white', fontSize: '14px' }}>Fiverr</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'white', fontSize: '14px' }}>Upwork</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', color: 'white', fontSize: '14px' }}>Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} style={{ backgroundColor: i % 2 === 0 ? '#1A1A1A' : '#222222' }}>
                    <td style={{ padding: '14px 20px', color: '#E0E0DA', fontSize: '13px', fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', backgroundColor: 'rgba(255,107,43,0.05)', ...cellStyle(row.us) }}>{row.us}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', ...cellStyle(row.fiverr) }}>{row.fiverr}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', ...cellStyle(row.upwork) }}>{row.upwork}</td>
                    <td style={{ padding: '14px 20px', fontSize: '13px', ...cellStyle(row.agency) }}>{row.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="rounded-xl p-4 space-y-3" style={{ backgroundColor: '#1A1A1A', border: '1px solid #333' }}>
                <div className="font-bold text-sm text-white">{row.feature}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded p-2" style={{ backgroundColor: 'rgba(255,107,43,0.08)', border: '1px solid rgba(255,107,43,0.2)' }}>
                    <div className="font-bold mb-1" style={{ color: '#FF6B2B' }}>MarutiDigital</div>
                    <div style={cellStyle(row.us)}>{row.us}</div>
                  </div>
                  <div className="rounded p-2" style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                    <div className="font-bold mb-1 text-gray-400">Fiverr</div>
                    <div style={cellStyle(row.fiverr)}>{row.fiverr}</div>
                  </div>
                  <div className="rounded p-2" style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                    <div className="font-bold mb-1 text-gray-400">Upwork</div>
                    <div style={cellStyle(row.upwork)}>{row.upwork}</div>
                  </div>
                  <div className="rounded p-2" style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                    <div className="font-bold mb-1 text-gray-400">Agency</div>
                    <div style={cellStyle(row.agency)}>{row.agency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: '#E0E0DA' }}>
            No platform fees. No bidding wars. No random freelancers.<br />
            Just professional work delivered by our specialist team — starting from $5.
          </p>
          <div className="text-center mt-6">
            <Link href="/services" className="btn-brand-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Try MarutiDigital — From $5
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2.7 PRICE LIST ── */}
      <section style={{ backgroundColor: '#FAF9F7', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#111111' }}>
              Professional Services Starting from Just $5
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', marginTop: '12px' }}>
              All prices are fixed. No negotiation needed.<br />Pay 20% now — rest after satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl mx-auto">
            <div>
              {leftPrices.map((item) => <PriceRow key={item.name} {...item} />)}
            </div>
            <div>
              {rightPrices.map((item) => <PriceRow key={item.name} {...item} />)}
            </div>
          </div>

          <p className="text-center mt-6 text-xs" style={{ color: '#888888' }}>
            Prices shown in USD. Indian clients: approx ₹420 = $5. All prices include free revisions until you are satisfied.
          </p>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-brand-outline" style={{ padding: '12px 28px', fontSize: '15px' }}>
              See All 545 Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2.9 FAQ ── */}
      <section style={{ backgroundColor: '#FAF9F7', padding: '80px 0', borderTop: '1px solid #EEEEEE' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, color: '#111111' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', marginTop: '12px' }}>
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── 2.10 FINAL CTA BANNER ── */}
      <section style={{ backgroundColor: '#FF6B2B', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 md:px-8 text-center">
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            Ready to Get Your Digital Work Done?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', lineHeight: 1.6 }} className="text-base md:text-lg">
            Start from just $5 (approx. ₹420). Pay 20% now.<br />
            Pay the rest only after you are satisfied.
          </p>
          <Link
            href="/services"
            className="btn-brand-white"
            style={{ padding: '16px 36px', fontSize: '16px', fontWeight: 700 }}
          >
            Browse All Services
          </Link>
          <div className="mt-6">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Or chat with us on WhatsApp →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
