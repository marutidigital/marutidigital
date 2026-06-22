'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wrench, BookOpen, ShoppingBag, Zap, Briefcase, Users, X, Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Free Tools', href: '/tools', icon: Wrench, badge: '8' },
    { name: 'Blog & Tutorials', href: '/blog', icon: BookOpen },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Digital Shop', href: '/shop', icon: ShoppingBag },
    { name: 'SaaS Products', href: '/saas', icon: Zap },
    { name: 'Free Website', href: '/free-website', icon: Globe, badge: 'Free' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-[56px] left-0 z-30 h-[calc(100vh-56px)] w-[240px] border-r flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } shrink-0`}
        style={{ backgroundColor: '#111111', borderColor: '#222222' }}
      >
        {/* Navigation Items */}
        <div className="p-4 flex-1 overflow-y-auto space-y-0.5">
          <div className="flex items-center justify-between lg:hidden mb-4">
            <span className="text-xs uppercase font-bold tracking-widest" style={{ color: '#666666' }}>Menu</span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded text-gray-400 hover:text-white"
              aria-label="Close Menu"
            >
              <X size={16} />
            </button>
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors`}
                style={isActive
                  ? { color: '#FF6B2B', backgroundColor: 'rgba(255,107,43,0.1)' }
                  : { color: '#9CA3AF' }
                }
                onMouseOver={(e) => { if (!isActive) e.currentTarget.style.color = '#E0E0DA'; }}
                onMouseOut={(e) => { if (!isActive) e.currentTarget.style.color = '#9CA3AF'; }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} style={{ color: isActive ? '#FF6B2B' : 'inherit' }} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className="px-1.5 py-0.5 text-[10px] font-bold rounded-md text-white"
                    style={{ backgroundColor: item.badge === 'Free' ? '#2ECC71' : '#FF6B2B' }}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Hire Our Team CTA */}
        <div className="p-4 border-t" style={{ borderColor: '#222222' }}>
          <Link
            href="/services"
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-bold text-white transition-colors"
            style={{ backgroundColor: '#FF6B2B' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#E55A1E')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF6B2B')}
          >
            Hire Our Team
          </Link>
        </div>
      </aside>
    </>
  );
}
