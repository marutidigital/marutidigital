'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import ServicesChatWidget from '@/components/services/ServicesChatWidget';
import { useCart } from '@/context/CartContext';
import { Bot } from 'lucide-react';

export function AIChatButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="wa-float"
      style={{ background: '#FF6B2B', border: 'none', outline: 'none' }}
      aria-label="Chat with AI"
    >
      <span className="wa-tooltip">Chat with AI</span>
      <Bot size={28} color="white" />
    </button>
  );
}

export default function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background blobs */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* Top Navbar (includes ribbon) */}
      <Navbar
        toggleSidebar={toggleSidebar}
        cartCount={cartCount}
        toggleCart={toggleCart}
      />

      {/* Main Layout Container */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Page Content Panel */}
        <main className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="layout-content-wrapper">
            {children}
          </div>
          <Footer />
        </main>
      </div>

      {/* Cart Drawer Overlay */}
      <CartDrawer />

      {/* Services Chat Widget */}
      {(pathname?.startsWith('/services') || isAIChatOpen) && <ServicesChatWidget />}

      {/* AI Chat Floating Button */}
      <AIChatButton onClick={() => setIsAIChatOpen(!isAIChatOpen)} />
    </div>
  );
}
