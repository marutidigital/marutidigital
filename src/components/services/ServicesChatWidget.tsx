'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader, ExternalLink, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

// ─── Lightweight keyword → gig matcher ────────────────────────────────────────
interface GigMatch {
  title: string;
  price: number;
  delivery: string;
  slug: string;
  category: string;
}

const GIG_KEYWORD_MAP: Array<{ keywords: string[]; gig: GigMatch }> = [
  { keywords: ['vercel', 'build', 'deploy', 'deploy fail', 'build fail', '404', 'env', 'environment variable'], gig: { title: 'Fix Vercel build failed error', price: 35, delivery: '24 hours', slug: 'fix-vercel-build-failed-error', category: 'vercel' } },
  { keywords: ['ssl', 'https', 'certificate', 'not secure', 'cert'], gig: { title: 'Fix SSL / HTTPS certificate error', price: 25, delivery: '24 hours', slug: 'fix-expired-ssl-certificate', category: 'ssl_domain' } },
  { keywords: ['wordpress', 'wp', 'wsod', 'white screen', 'plugin', 'woocommerce', 'hacked', 'malware'], gig: { title: 'Fix WordPress issue / White screen / Hack cleanup', price: 59, delivery: '2 days', slug: 'fix-white-screen-of-death-wsod', category: 'wordpress' } },
  { keywords: ['supabase', 'rls', 'row level', 'permission denied', 'auth', 'database', 'postgres'], gig: { title: 'Fix Supabase RLS / Auth / Database issue', price: 25, delivery: '24 hours', slug: 'fix-row-level-security-rls-blocking-readswrites', category: 'supabase' } },
  { keywords: ['shopify', 'checkout', 'payment', 'stripe', 'cart'], gig: { title: 'Fix Shopify checkout / payment issue', price: 35, delivery: '2 days', slug: 'fix-checkout-not-completing--payment-errors', category: 'shopify' } },
  { keywords: ['logo', 'brand', 'design', 'branding', 'icon'], gig: { title: 'Logo design — 3 concepts, standard tier', price: 39, delivery: '3 days', slug: 'logo-design-3-concepts-standard-tier', category: 'design' } },
  { keywords: ['seo', 'search console', 'google', 'rank', 'meta', 'sitemap', 'keyword'], gig: { title: 'Full technical SEO audit', price: 59, delivery: '5 days', slug: 'full-technical-seo-audit-any-platform', category: 'seo_content' } },
  { keywords: ['n8n', 'zapier', 'make', 'automation', 'workflow', 'webhook'], gig: { title: 'n8n workflow setup / fix broken workflow', price: 59, delivery: '3 days', slug: 'n8n-workflow-setup-from-scratch', category: 'automation' } },
  { keywords: ['dns', 'domain', 'mx', 'email', 'spf', 'dkim', 'dmarc', 'cloudflare'], gig: { title: 'Fix DNS / email deliverability (SPF, DKIM, DMARC)', price: 25, delivery: '24 hours', slug: 'fix-emails-going-to-spam-spfdkimdmarc-setup', category: 'ssl_domain' } },
  { keywords: ['website', 'build', 'create', 'new site', 'landing page', 'doctor', 'restaurant', 'salon', 'clinic'], gig: { title: 'New website build (niche-specific)', price: 149, delivery: '7 days', slug: 'one-page-launch-landing-page-for-any-business-in-48-hours', category: 'websites' } },
  { keywords: ['ai', 'openai', 'gpt', 'chatgpt', 'claude', 'gemini', 'api key', 'billing'], gig: { title: 'Fix AI API billing / setup issue', price: 35, delivery: '24 hours', slug: 'fix-api-billing-suspension-issues', category: 'cloud_api' } },
  { keywords: ['lovable', 'bolt', 'bubble', 'flutterflow', 'no code', 'nocode', 'replit'], gig: { title: 'Fix no-code / AI builder connection issue', price: 35, delivery: '2 days', slug: 'connect-lovable-app-to-supabase', category: 'nocode' } },
];

function findGigMatch(text: string): GigMatch | null {
  const lower = text.toLowerCase();
  for (const { keywords, gig } of GIG_KEYWORD_MAP) {
    if (keywords.some(kw => lower.includes(kw))) return gig;
  }
  return null;
}

// ─── Bot response logic ────────────────────────────────────────────────────────
interface BotResponse {
  text: string;
  gigMatch?: GigMatch;
  isEscalation?: boolean;
  showHumanCta?: boolean;
}

function generateBotResponse(userMessage: string, turnCount: number): BotResponse {
  const gigMatch = findGigMatch(userMessage);

  if (turnCount >= 3) {
    return {
      text: "I've gathered enough info to connect you with our human team. They can give you an exact quote and timeline for your specific situation.",
      isEscalation: true,
      showHumanCta: true,
    };
  }

  if (gigMatch) {
    return {
      text: `I found a matching service! Here's what we offer:`,
      gigMatch,
    };
  }

  if (turnCount === 0) {
    return {
      text: "Hi! 👋 I'm the Maruti Digital assistant. I can help you find the right fixed-price service or give you a quick quote. What's the issue you're facing? (e.g. Vercel build fail, WordPress hacked, need a logo, Supabase auth error...)",
    };
  }

  if (turnCount === 1) {
    return {
      text: "I see — could you tell me a bit more? For example: which platform is this on (WordPress, Vercel, Shopify, Supabase)? Is it urgent?",
    };
  }

  return {
    text: "Thanks for the details. Let me connect you with our team who can give you a precise quote. All our fixes are fixed-price — no surprise bills.",
    showHumanCta: true,
  };
}

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  gigMatch?: GigMatch;
  isEscalation?: boolean;
  showHumanCta?: boolean;
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function ServicesChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [userTurns, setUserTurns] = useState(0);
  const [hasUnread, setHasUnread] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  // Show welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([{
          id: 'welcome',
          role: 'bot',
          text: "Hi! 👋 I'm the Maruti rescue bot. Tell me what's broken — Vercel, WordPress, Supabase, SSL, design, or anything else — and I'll find you a fixed-price fix.",
        }]);
      }, 800);
    }
  }, [isOpen, messages.length]);

  // Show unread dot after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isOpen) setHasUnread(true);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    const newTurnCount = userTurns + 1;
    setUserTurns(newTurnCount);

    await new Promise(r => setTimeout(r, 900 + Math.random() * 600));

    const response = generateBotResponse(text, newTurnCount);
    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      role: 'bot',
      ...response,
    };

    setTyping(false);
    setMessages(prev => [...prev, botMsg]);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-n8nbg-lighter border border-n8nfg-light rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: '480px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>

          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-n8nfg-light bg-gradient-to-r from-n8nbg-light to-n8nbg-lighter flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Bot size={18} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-n8ntext-dark flex items-center gap-2">
                Maruti Rescue Bot
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] text-n8ntext-light">Fixed-price fixes · Human backup available</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-n8ntext-light hover:text-n8ntext-dark hover:bg-n8nbg-dark transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                {/* Avatar */}
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-primary/20 border border-primary/30' : 'bg-n8nbg-dark border border-n8nfg-light'}`}>
                  {msg.role === 'user' ? <User size={11} className="text-primary" /> : <Bot size={11} className="text-n8ntext-base" />}
                </div>

                <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  {/* Bubble */}
                  <div className={`rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-tr-sm'
                      : 'bg-n8nbg-light border border-n8nfg-light text-n8ntext-base rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>

                  {/* Gig match card */}
                  {msg.gigMatch && (
                    <div className="bg-n8nbg-base border border-n8nfg-light rounded-xl p-3 space-y-2 w-full">
                      <div className="text-[10px] text-n8ntext-light uppercase tracking-wide font-bold">Matched Service</div>
                      <div className="text-xs font-bold text-n8ntext-dark leading-snug">{msg.gigMatch.title}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[11px]">
                          <span className="text-emerald-400 font-black">from ${msg.gigMatch.price}</span>
                          <span className="text-n8ntext-light">· {msg.gigMatch.delivery}</span>
                        </div>
                      </div>
                      <Link
                        href={`/services/${msg.gigMatch.category}/${msg.gigMatch.slug}`}
                        className="flex items-center justify-between bg-primary/10 border border-primary/20 text-primary rounded-lg px-3 py-2 text-[11px] font-semibold hover:bg-primary/20 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>View service & buy (20% deposit)</span>
                        <ArrowRight size={11} />
                      </Link>
                    </div>
                  )}

                  {/* Human escalation CTA */}
                  {msg.showHumanCta && (
                    <div className="bg-n8nbg-base border border-n8nfg-light rounded-xl p-3 space-y-2 w-full">
                      <div className="text-[10px] text-n8ntext-light">
                        🧑‍💼 <span className="font-semibold text-n8ntext-base">Human team available</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Link
                          href="/services/request-custom"
                          className="flex items-center justify-between bg-primary/10 border border-primary/20 text-primary rounded-lg px-3 py-2 text-[11px] font-semibold hover:bg-primary/20 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>Get custom quote →</span>
                          <ExternalLink size={11} />
                        </Link>
                        <a
                          href="https://wa.me/917898XXXXXX?text=Hi, I need help with a website issue"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg px-3 py-2 text-[11px] font-semibold hover:bg-emerald-500/20 transition-colors"
                        >
                          <span>WhatsApp us directly</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Escalation message */}
                  {msg.isEscalation && !msg.showHumanCta && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-[11px] text-amber-400 font-semibold w-full">
                      🤝 Escalating to human team...
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2 items-start">
                <div className="w-6 h-6 rounded-full bg-n8nbg-dark border border-n8nfg-light flex items-center justify-center flex-shrink-0">
                  <Bot size={11} className="text-n8ntext-base" />
                </div>
                <div className="bg-n8nbg-light border border-n8nfg-light rounded-xl rounded-tl-sm px-3 py-2.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-n8ntext-light animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-n8ntext-light animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-n8ntext-light animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-n8nfg-light flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Describe your issue..."
                className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded-xl px-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || typing}
                className="p-2 rounded-xl bg-primary text-white disabled:opacity-40 hover:bg-primary/80 transition-colors flex items-center justify-center"
                aria-label="Send"
              >
                {typing ? <Loader size={14} className="animate-spin" /> : <Send size={14} />}
              </button>
            </div>
            <div className="text-[9px] text-n8ntext-light text-center mt-1.5">
              AI-powered · escalates to human within 3 messages
            </div>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={handleOpen}
        id="services-chat-widget-trigger"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen
            ? 'bg-n8nbg-light border-2 border-n8nfg-light scale-90'
            : 'bg-primary border-2 border-primary/60 hover:scale-110'
        }`}
        aria-label="Open service chat"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
      >
        {isOpen ? (
          <X size={22} className="text-n8ntext-dark" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-black text-white border-2 border-n8nbg-base">
            1
          </span>
        )}
      </button>

      {/* Pulse ring (draw attention) */}
      {!isOpen && (
        <span className="absolute bottom-5 right-5 w-14 h-14 rounded-full border-2 border-primary/40 animate-ping pointer-events-none" />
      )}
    </div>
  );
}
