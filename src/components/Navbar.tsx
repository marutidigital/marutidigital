'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ShoppingCart, Zap } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  cartCount: number;
  toggleCart: () => void;
}

export default function Navbar({ toggleSidebar, cartCount, toggleCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Ribbon — desktop only */}
      <div className="top-ribbon">
        ⚡ Premium Digital Services by India&apos;s Best Team — Starting from $5 (approx. ₹420) &nbsp;|&nbsp; Pay 20% Now, Rest After Satisfaction
      </div>

      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : ''
        }`}
        style={{ backgroundColor: '#111111', borderBottom: '1px solid #222222' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-[56px] flex items-center justify-between">
          {/* Left: Logo and Sidebar Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="p-1 rounded text-white lg:hidden"
              aria-label="Toggle Sidebar"
              style={{ color: '#FF6B2B' }}
            >
              <Menu size={22} />
            </button>

            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg tracking-tight select-none ml-2">
              <div className="flex items-center justify-center w-7 h-7 rounded" style={{ backgroundColor: '#FF6B2B' }}>
                <Zap size={15} className="fill-white text-white" />
              </div>
              <span className="text-white hidden sm:inline-block">Maruti<span style={{ color: '#FF6B2B' }}>Digital</span></span>
            </Link>
          </div>

          {/* Center: Free Website Highlight */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <Link 
              href="/free-website" 
              className="flex items-center gap-3 px-5 py-1.5 rounded-full transition-all hover:bg-white/5 border" 
              style={{ borderColor: 'rgba(255,107,43,0.2)' }}
            >
              <span className="text-sm font-medium" style={{ color: '#E0E0DA' }}>
                <span className="mr-2">🚀</span> Apply for a Professionally Built Website — <span className="font-bold text-white">100% Free</span>
              </span>
              <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full text-white tracking-wide" style={{ backgroundColor: '#FF6B2B' }}>
                Apply Now
              </span>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className="relative p-1.5 rounded-md text-gray-400 hover:text-white flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#FF6B2B' }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hire Our Team */}
            <Link
              href="/services"
              className="btn-brand-primary py-1.5 px-4 text-sm"
              style={{ padding: '8px 18px', fontSize: '14px' }}
            >
              Hire Our Team
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
