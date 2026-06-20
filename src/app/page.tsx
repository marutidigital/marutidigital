'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, BookOpen, ShoppingBag, Zap, Briefcase, Users, Star, Flame, Trophy, Route } from 'lucide-react';

export default function HomePage() {
  const pillars = [
    {
      badge: 'Traffic Engine',
      badgeClass: 'traffic',
      title: 'Free Tools Hub',
      desc: '20+ browser-based utilities to grow traffic, capture leads, and automate daily tasks.',
      link: '/tools',
      icon: Wrench,
    },
    {
      badge: 'SEO Moat',
      badgeClass: 'seo',
      title: 'Developer Blog',
      desc: 'High-quality technical guides, templates, and case studies driving organic search loops.',
      link: '/blog',
      icon: BookOpen,
    },
    {
      badge: 'Passive Income',
      badgeClass: 'passive',
      title: 'Digital Product Shop',
      desc: 'Premium UI templates, invoice generators, automation scripts, and workflow PDFs.',
      link: '/shop',
      icon: ShoppingBag,
    },
    {
      badge: 'MRR Focus',
      badgeClass: 'mrr',
      title: 'SaaS Products',
      desc: 'Micro-SaaS widgets and utilities built to solve specific operations with monthly recurring fees.',
      link: '/saas',
      icon: Zap,
    },
    {
      badge: 'High Ticket',
      badgeClass: 'traffic', // standard primary coloring
      title: 'Rescue Desk (545 Gigs)',
      desc: '545 fixed-price gig cards — Vercel, WordPress, Supabase, SSL, Design, AI Content, Automation. Pay 20% deposit, rest on delivery. No bidding wars.',
      link: '/services',
      icon: Briefcase,
    },
    {
      badge: 'Loyalty Loop',
      badgeClass: 'mrr',
      title: 'Tribe Community',
      desc: 'Active Discord space, forums, peer reviews, and mastermind groups for freelancers.',
      link: '/community',
      icon: Users,
    },
  ];

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation Setup',
      timeline: 'Days 0–60',
      desc: 'Bootstrap the core web app, release the first 3 interactive free tools, design the digital storefront, and introduce our primary email newsletter capture systems.',
      colorClass: 'phase-1',
      badgeText: 'Complete',
      badgeColor: 'bg-info/20 text-info',
    },
    {
      phase: 'Phase 2',
      title: 'Audience Engine',
      timeline: 'Days 60–120',
      desc: 'Launch 10+ developer-focused tools, scale the technical blog with in-depth SEO guides, and distribute value across social channels to compound user metrics.',
      colorClass: 'phase-2',
      badgeText: 'Active',
      badgeColor: 'bg-success/20 text-success',
    },
    {
      phase: 'Phase 3',
      title: 'Monetisation Hub',
      timeline: 'Days 120–180',
      desc: 'Deploy commercial Micro-SaaS offerings, release exclusive agency service bundles, launch paid community mastermind slots, and activate affiliate partnerships.',
      colorClass: 'phase-3',
      badgeText: 'Up Next',
      badgeColor: 'bg-warning/20 text-warning',
    },
    {
      phase: 'Phase 4',
      title: 'Scale & Ecosystem',
      timeline: 'Days 180+',
      desc: 'Deploy international domain paths, release the white-label API marketplace, build automated client agency portals, and expand the core developer community.',
      colorClass: 'phase-4',
      badgeText: 'Planning',
      badgeColor: 'bg-primary/20 text-primary',
    },
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6 stagger-in pt-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-tint-1 border border-primary/20 text-primary text-xs font-semibold">
          <span className="animate-pulse">🇮🇳</span>
          <span>Built for Indian Freelancers & Builders</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-n8ntext-dark leading-tight">
          Your Complete Web + <br className="hidden sm:inline" />
          <span className="gradient-text">Digital SaaS Platform</span>
        </h1>

        {/* Subhead */}
        <p className="text-base md:text-lg text-n8ntext-base max-w-2xl leading-relaxed">
          20+ free interactive tools, knowledge hubs, digital shops, and SaaS products — everything you need to grow your freelance business or tech venture online.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href="/saas" className="btn-primary py-3 px-6 text-sm font-semibold flex items-center gap-2">
            <span>Get Started Free</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/tools" className="btn-ghost py-3 px-6 text-sm font-semibold">
            Explore Free Tools
          </Link>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-8 pt-8 border-t border-n8nfg-base w-full max-w-2xl text-center">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-n8ntext-dark">500+</span>
            <span className="text-xs text-n8ntext-light uppercase tracking-wider font-semibold">Tools Run Today</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-n8ntext-dark">10k+</span>
            <span className="text-xs text-n8ntext-light uppercase tracking-wider font-semibold">Freelancers Active</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-n8ntext-dark">₹0</span>
            <span className="text-xs text-n8ntext-light uppercase tracking-wider font-semibold">Cost to Start</span>
          </div>
        </div>
      </section>

      {/* Grid of 6 Pillars */}
      <section className="space-y-8 pt-6">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">Six Pillars of MarutiDigital</h2>
          <p className="text-sm text-n8ntext-base">A complete ecosystem mapped to drive traffic, value, and revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Link href={pillar.link} key={pillar.title} className="n8n-card flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  {/* Badge & Icon row */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-n8nbg-base border border-n8nfg-light text-primary group-hover:bg-primary-tint-1 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className={`card-badge ${pillar.badgeClass}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-n8ntext-dark flex items-center gap-1 group-hover:text-primary transition-colors">
                      <span>{pillar.title}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs text-n8ntext-base leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="section-divider" />

      {/* Timeline Roadmap Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Route className="text-primary" size={24} />
              <span>Platform Build Roadmap</span>
            </h2>
            <p className="text-sm text-n8ntext-base">Transparent layout of our milestones and feature rollout phases.</p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-n8ntext-light bg-n8nbg-light border border-n8nfg-light px-3 py-1.5 rounded-lg">
            <Star size={12} className="text-warning fill-warning" />
            <span>n8n Timeline Architecture</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase) => (
            <div key={phase.phase} className={`phase-card ${phase.colorClass} flex flex-col justify-between h-full`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-n8ntext-light">{phase.phase}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${phase.badgeColor}`}>
                    {phase.badgeText}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-n8ntext-dark">{phase.title}</h3>
                  <span className="text-[10px] text-n8ntext-light block mt-0.5">{phase.timeline}</span>
                </div>
                <p className="text-xs text-n8ntext-base leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
