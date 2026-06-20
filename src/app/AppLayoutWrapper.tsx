'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import ServicesChatWidget from '@/components/services/ServicesChatWidget';
import { useCart } from '@/context/CartContext';

export default function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background blobs for n8n-style glow effects */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* Top Navbar */}
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
          <div className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto w-full">
            {children}
          </div>
          <Footer />
        </main>
      </div>

      {/* Cart Drawer Overlay */}
      <CartDrawer />

      {/* Services Chat Widget */}
      {pathname?.startsWith('/services') && <ServicesChatWidget />}
    </div>
  );
}
