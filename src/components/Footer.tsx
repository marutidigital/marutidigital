import React from 'react';
import { Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-n8nbg-lighter border-t border-n8nfg-light mt-16 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Domain Journey Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-n8nbg-light border border-n8nfg-light">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-n8ntext-dark font-semibold">
              <Globe size={18} className="text-primary" />
              <span>MarutiDigital Domain Journey</span>
            </div>
            <p className="text-xs text-n8ntext-light">Our roadmap to global expansion and infrastructure scaling.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-n8nbg-base border border-n8nfg-xlight text-n8ntext-dark flex items-center gap-1.5">
              marutidigital.in <span className="text-[10px] uppercase px-1 rounded bg-primary/20 text-primary font-bold">Active</span>
            </span>
            <ArrowRight size={14} className="text-n8ntext-light hidden sm:inline" />
            
            <a 
              href="https://marutidigital.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary-tint-2 border border-primary text-primary flex items-center gap-1.5 hover:bg-primary-tint-1 hover:shadow-glow transition-all"
            >
              marutidigital.io <span className="text-[10px] uppercase px-1 rounded bg-primary text-white font-bold">Recommended</span>
            </a>
            <ArrowRight size={14} className="text-n8ntext-light hidden sm:inline" />

            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-n8nbg-base/50 border border-n8nfg-light text-n8ntext-light">
              marutidigital.co
            </span>
            <ArrowRight size={14} className="text-n8ntext-light hidden sm:inline" />

            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-n8nbg-base/50 border border-n8nfg-light text-n8ntext-light">
              marutidigital.dev
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-n8ntext-dark">Funnel Modules</h4>
            <ul className="text-xs space-y-2">
              <li><a href="/tools" className="hover:text-primary transition-colors">Free Tools Hub</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Developer Blog</a></li>
              <li><a href="/shop" className="hover:text-primary transition-colors">Digital Product Shop</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-n8ntext-dark">Monetization</h4>
            <ul className="text-xs space-y-2">
              <li><a href="/saas" className="hover:text-primary transition-colors">SaaS Products</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Premium Agency Services</a></li>
              <li><a href="/community" className="hover:text-primary transition-colors">Tribe Memberships</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-n8ntext-dark">Developer Resources</h4>
            <ul className="text-xs space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Open Source Repos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-n8ntext-dark">Security</h4>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-n8nbg-light border border-n8nfg-light text-n8ntext-light">
              <ShieldCheck size={28} className="text-success shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-n8ntext-dark uppercase">SSL & GDPR Secure</span>
                <span className="text-[9px]">Privacy focused analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="h-px bg-n8nfg-light w-full"></div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-n8ntext-light gap-4">
          <span>&copy; {currentYear} MarutiDigital.in. All rights reserved. Created in partnership with Indian Freelancers.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
