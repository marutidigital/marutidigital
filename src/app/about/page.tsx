'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Zap, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bleed-wrapper">
      
      {/* ── HEADER ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            We believe digital services should be transparent, affordable, and risk-free.
          </h1>
          <p style={{ fontSize: '18px', color: '#E0E0DA', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            MarutiDigital was built to fix a broken industry. No more expensive agencies, no more unreliable freelancers, and no more paying 100% upfront for work you haven't seen.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F7' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
            Our Story
          </h2>
          <div style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8 }} className="space-y-4">
            <p>
              For years, small businesses and entrepreneurs have been caught in a trap when they need digital work done. On one side, large digital agencies charge thousands of dollars just to answer the phone. On the other side, freelancer marketplaces are a race to the bottom, filled with hidden fees, missed deadlines, and poor communication.
            </p>
            <p>
              We decided there had to be a better way. We built MarutiDigital with a simple promise: <strong>world-class digital services delivered by an in-house team, with fixed transparent pricing, and zero financial risk for the client.</strong>
            </p>
            <p>
              By leveraging India's incredible digital talent pool and keeping our operations lean, we are able to offer 545+ digital services starting from just $5. But more importantly, we introduced our 20/80 payment model. You only pay 20% to start a project, and the remaining 80% is only paid after you are completely satisfied with the result.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', textAlign: 'center', marginBottom: '48px' }}>
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Transparency First', desc: 'No hidden fees or "custom quotes" based on how much money we think you have. Every price is public.' },
              { icon: Zap, title: 'Speed is a Feature', desc: 'We respond to all inquiries within 24 hours and start working on your project the same day.' },
              { icon: CheckCircle, title: 'Quality Guaranteed', desc: 'We offer free revisions on all services until you are 100% happy with the final delivery.' },
              { icon: Heart, title: 'Client Partnership', desc: 'We don\'t just execute tasks. We offer free audits and advice to help your business grow.' },
            ].map((v) => (
              <div key={v.title} className="brand-reason-card text-center">
                <div className="icon-circle mx-auto mb-4" style={{ backgroundColor: 'rgba(255,107,43,0.1)', width: 56, height: 56 }}>
                  <v.icon size={28} style={{ color: '#FF6B2B' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION (Placeholder) ── */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            Meet the Specialists
          </h2>
          <p style={{ fontSize: '16px', color: '#555555', marginBottom: '48px', maxWidth: '600px', margin: '0 auto' }}>
            Our in-house team is composed of vetted developers, designers, writers, and marketers based across India.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: 'Lead Developer' },
              { role: 'UI/UX Designer' },
              { role: 'SEO Specialist' },
              { role: 'Content Strategist' }
            ].map((member, i) => (
              <div key={i} className="brand-service-card" style={{ padding: '32px 24px' }}>
                <div className="mx-auto bg-gray-200 rounded-full mb-4" style={{ width: '80px', height: '80px' }} />
                <div className="font-bold text-gray-800">Team Member</div>
                <div className="text-sm" style={{ color: '#FF6B2B', fontWeight: 600 }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
            Ready to work with us?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="btn-brand-primary">
              Browse Services
              <ArrowRight size={18} />
            </Link>
            <Link href="/join-us" className="btn-brand-outline text-white border-white hover:bg-white/10">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
