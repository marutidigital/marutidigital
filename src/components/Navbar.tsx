'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Zap, ShoppingCart, Disc, HelpCircle } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  cartCount: number;
  toggleCart: () => void;
}

export default function Navbar({ toggleSidebar, cartCount, toggleCart }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'SaaS', href: '/saas' },
    { name: 'Services', href: '/services', badge: 'New' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <nav className="sticky top-0 z-40 h-[56px] w-full bg-n8nbg-lighter/80 border-b border-n8nfg-light backdrop-blur-md px-4 flex items-center justify-between">
      {/* Left logo section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-n8nbg-dark text-n8ntext-base hover:text-n8ntext-dark lg:hidden"
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>

        <Link href="/" className="flex items-center gap-2 font-sans font-bold text-n8ntext-dark text-lg tracking-tight select-none">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-primary text-white">
            <Zap size={14} className="fill-white" />
          </div>
          <span>Maruti<span className="text-primary">Digital</span></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse -ml-1 mt-3"></span>
        </Link>
      </div>

      {/* Center navigation links */}
      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark'
              }`}
            >
              {link.name}
              {(link as any).badge && (
                <span className="text-[9px] font-black bg-primary text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide leading-none">
                  {(link as any).badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="p-1.5 rounded-md text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark hidden md:inline-flex" aria-label="Search">
          <Search size={18} />
        </button>

        <button 
          onClick={toggleCart}
          className="relative p-1.5 rounded-md text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark flex items-center justify-center"
          aria-label="Shopping Cart"
        >
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

        <button className="px-3 py-1.5 text-sm font-medium text-n8ntext-base hover:text-n8ntext-dark transition-colors hidden md:inline-flex">
          Sign In
        </button>

        <Link href="/saas" className="btn-primary py-1 px-3.5 text-sm flex items-center gap-1.5">
          <span>Get Started</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 rounded hover:bg-n8nbg-dark text-n8ntext-base hover:text-n8ntext-dark lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[56px] left-0 right-0 bg-n8nbg-lighter border-b border-n8nfg-light flex flex-col p-4 gap-2 lg:hidden shadow-lg z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium block transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="h-px bg-n8nfg-light my-2"></div>
          <div className="flex items-center justify-between px-3 py-2">
            <button className="text-sm font-medium text-n8ntext-base hover:text-n8ntext-dark">
              Sign In
            </button>
            <button className="p-1.5 rounded-md text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark flex items-center gap-1">
              <Search size={18} />
              <span className="text-xs">Search</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
