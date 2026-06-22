'use client';

import React, { useState } from 'react';
import { Briefcase, MapPin, Code, Palette, Search, Megaphone, Laptop, Check } from 'lucide-react';

export default function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
  };

  return (
    <div className="bleed-wrapper">
      
      {/* ── HEADER ── */}
      <section style={{ backgroundColor: '#111111', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }} className="px-4 text-center">
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
            Join the MarutiDigital Team
          </h1>
          <p style={{ fontSize: '18px', color: '#E0E0DA', lineHeight: 1.6 }}>
            We are always looking for talented developers, designers, and marketers across India to join our specialist roster.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', backgroundColor: '#FAF9F7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }} className="px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
                Work on Global Projects
              </h2>
              <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.8, marginBottom: '32px' }}>
                At MarutiDigital, we serve businesses from all over the world. By joining our team, you get consistent work, clear project scopes, and guaranteed payments. You focus on what you do best — delivering great work — while we handle client acquisition, project management, and billing.
              </p>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>What We Offer</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Remote work from anywhere in India',
                  'Consistent flow of fixed-price projects',
                  'Clear requirements, no direct client haggling',
                  'Guaranteed payouts every two weeks',
                  'Opportunities to learn and grow with a specialist team'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} style={{ color: '#2ECC71', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: '#555555' }}>{text}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>Who We Need</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, text: 'WordPress Developers' },
                  { icon: Laptop, text: 'React/Next.js Devs' },
                  { icon: Palette, text: 'Graphic Designers' },
                  { icon: Search, text: 'SEO Specialists' },
                  { icon: Megaphone, text: 'Content Writers' },
                  { icon: Briefcase, text: 'Project Managers' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <item.icon size={18} style={{ color: '#FF6B2B' }} />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
                  Apply Now
                </h3>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#2ECC71' }}>
                      <Check size={32} color="white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Application Received!</h4>
                    <p className="text-gray-500">Thank you for your interest. Our team will review your portfolio and get back to you within 3-5 business days if there is a match.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Full Name *</label>
                        <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Email *</label>
                        <input required type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Phone / WhatsApp *</label>
                        <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange" placeholder="+91..." />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Primary Skill *</label>
                        <select required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange">
                          <option value="">Select a skill...</option>
                          <option value="dev">Web Development</option>
                          <option value="design">Design / UI / UX</option>
                          <option value="seo">SEO / Marketing</option>
                          <option value="content">Content Writing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Portfolio Link (GitHub, Behance, Live Site) *</label>
                      <input required type="url" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange" placeholder="https://..." />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-1" style={{ color: '#333' }}>Tell us about your experience</label>
                      <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-orange" placeholder="I have 3 years of experience in..."></textarea>
                    </div>

                    <button type="submit" className="btn-brand-primary w-full justify-center">
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
