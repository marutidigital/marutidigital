'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wrench, BookOpen, ShoppingBag, Zap, Briefcase, Users, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Free Tools', href: '/tools', icon: Wrench, badge: '8' },
    { name: 'Blog & Tutorials', href: '/blog', icon: BookOpen },
    { name: 'Digital Shop', href: '/shop', icon: ShoppingBag },
    { name: 'SaaS Products', href: '/saas', icon: Zap },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Community', href: '/community', icon: Users },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-[56px] left-0 z-30 h-[calc(100vh-56px)] w-[240px] bg-n8nbg-lighter border-r border-n8nfg-base flex flex-col justify-between transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } shrink-0`}
      >
        {/* Navigation Items */}
        <div className="p-4 flex-1 overflow-y-auto space-y-1">
          <div className="flex items-center justify-between lg:hidden mb-4">
            <span className="text-xs uppercase font-bold tracking-widest text-n8ntext-light">Menu</span>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-n8nbg-dark text-n8ntext-base hover:text-n8ntext-dark"
              aria-label="Close Menu"
            >
              <X size={16} />
            </button>
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-tint-1 border border-primary/20'
                    : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'text-primary' : 'text-n8ntext-light'} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-primary text-white">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Footer/Settings Section */}
        <div className="p-4 border-t border-n8nfg-base">
          <button
            onClick={() => {
              alert('Settings integration coming soon with Supabase authentication!');
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base transition-colors"
          >
            <Settings size={18} className="text-n8ntext-light" />
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
}
