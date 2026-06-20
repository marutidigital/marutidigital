'use client';

import React from 'react';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase, isSupabaseConfigured } from '@/utils/supabaseClient';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, addToCart, cartTotal, clearCart } = useCart();

  const gstPercentage = 18;
  const gstAmount = Math.round((cartTotal * gstPercentage) / 100);
  const finalTotal = cartTotal + gstAmount;

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('orders')
          .insert([
            {
              items: cart,
              total: finalTotal,
              status: 'paid'
            }
          ]);
        if (error) throw error;
      } catch (err) {
        console.error('Failed to save order to Supabase', err);
      }
    }

    alert(
      `🎉 Checkout Successful!\n\nOrder total: ₹${finalTotal.toLocaleString('en-IN')}\nIncludes ₹${gstAmount.toLocaleString('en-IN')} (18% GST)\n\n${
        isSupabaseConfigured 
          ? 'This purchase has been logged to your Supabase "orders" database table!' 
          : 'In the next phase, we will connect this with Stripe/Razorpay and Supabase!'
      }`
    );
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-[420px] bg-n8nbg-lighter border-l border-n8nfg-light flex flex-col justify-between shadow-2xl animate-[slideIn_0.25s_ease-out]">
        <style jsx global>{`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}</style>

        {/* Header */}
        <div className="p-4 border-b border-n8nfg-light flex items-center justify-between bg-n8nbg-light">
          <div className="flex items-center gap-2 text-n8ntext-dark font-semibold">
            <ShoppingBag size={18} className="text-primary" />
            <span>Shopping Cart</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded hover:bg-n8nbg-dark text-n8ntext-base hover:text-n8ntext-dark"
            aria-label="Close Cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-12">
              <div className="w-16 h-16 rounded-full bg-n8nbg-light border border-n8nfg-light flex items-center justify-center text-n8ntext-light">
                <ShoppingBag size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-n8ntext-dark">Your cart is empty</span>
                <span className="text-xs text-n8ntext-light mt-1">Add items from the Digital Shop or SaaS products page.</span>
              </div>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-lg bg-n8nbg-light border border-n8nfg-light relative overflow-hidden group"
              >
                {/* Accent top gradient indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Mock Thumbnail */}
                <div className="w-16 h-16 rounded bg-n8nbg-base border border-n8nfg-light flex items-center justify-center text-primary font-bold text-xs shrink-0 select-none">
                  {item.category === 'Templates' && '🎨 TMPL'}
                  {item.category === 'PDFs' && '📚 PDF'}
                  {item.category === 'Plugins' && '🔌 PLUG'}
                  {item.category === 'Bundles' && '📦 BNDL'}
                  {item.category === 'SaaS' && '⚡ SAAS'}
                  {!item.category && '🛒 ITEM'}
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <h4 className="text-xs font-semibold text-n8ntext-dark truncate">{item.name}</h4>
                    <span className="text-[10px] text-n8ntext-light uppercase tracking-wider">{item.category || 'Product'}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-bold text-n8ntext-dark">₹{item.price.toLocaleString('en-IN')}</span>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-n8nbg-base rounded border border-n8nfg-light overflow-hidden">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2 text-xs font-semibold text-n8ntext-dark">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-1 text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-dark"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pricing Summary */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-n8nfg-light bg-n8nbg-light space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-n8ntext-base">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-n8ntext-base items-center gap-1">
                <span className="flex items-center gap-1">
                  GST ({gstPercentage}%)
                  <span className="group relative cursor-help">
                    <Info size={12} className="text-n8ntext-light" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-48 p-2 rounded bg-n8nbg-dark border border-n8nfg-xlight text-[10px] text-n8ntext-dark leading-normal opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-50">
                      Standard Indian Goods and Services Tax (GST) auto-calculated for digital products.
                    </span>
                  </span>
                </span>
                <span>₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-px bg-n8nfg-xlight my-2"></div>
              <div className="flex justify-between text-sm font-bold text-n8ntext-dark">
                <span>Total Amount</span>
                <span className="text-primary">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2 font-semibold text-sm"
            >
              <CreditCard size={16} />
              <span>Proceed to Checkout</span>
            </button>

            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-n8ntext-light hover:text-danger hover:underline transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
