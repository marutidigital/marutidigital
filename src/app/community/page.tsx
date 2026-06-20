'use client';

import React, { useState, useEffect } from 'react';
import { Users, Disc, MessageSquare, Eye, Heart, Shield, Plus, MessageCircle, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase, isSupabaseConfigured } from '@/utils/supabaseClient';

interface ForumThread {
  id: string;
  title: string;
  category: 'General' | 'Automation' | 'Next.js' | 'SEO' | 'Jobs';
  author: string;
  replies: number;
  views: number;
  likes: number;
  lastActive: string;
  created_at?: string;
}

const INITIAL_MOCK_THREADS: ForumThread[] = [
  {
    id: 'thread-1',
    title: 'How are you handling the new TCS on foreign credit card transactions for international SaaS?',
    category: 'General',
    author: 'Aarav Gupta',
    replies: 18,
    views: 342,
    likes: 24,
    lastActive: '5m ago'
  },
  {
    id: 'thread-2',
    title: 'n8n integration help: Syncing WooCommerce order statuses directly to ProtonMail and Slack ledger nodes',
    category: 'Automation',
    author: 'Priya Sharma',
    replies: 7,
    views: 120,
    likes: 12,
    lastActive: '24m ago'
  },
  {
    id: 'thread-3',
    title: 'Next.js 14 hydration mismatches in app router layouts when running custom dark theme checks',
    category: 'Next.js',
    author: 'Vikram Singh',
    replies: 12,
    views: 201,
    likes: 18,
    lastActive: '1h ago'
  },
  {
    id: 'thread-4',
    title: 'Job: Looking for an agency to build a custom CRM integration node on a retainership model',
    category: 'Jobs',
    author: 'Maruti Digital',
    replies: 4,
    views: 88,
    likes: 15,
    lastActive: '3h ago'
  },
  {
    id: 'thread-5',
    title: 'Guide: Programmatic SEO configurations that helped my local e-commerce store rank for 50+ high-intent terms',
    category: 'SEO',
    author: 'Rohit Mehta',
    replies: 9,
    views: 180,
    likes: 31,
    lastActive: '1d ago'
  }
];

export default function CommunityPage() {
  const { addToCart } = useCart();
  const [selectedForumTab, setSelectedForumTab] = useState<string>('All');
  const [forumThreads, setForumThreads] = useState<ForumThread[]>(INITIAL_MOCK_THREADS);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch threads from Supabase
  useEffect(() => {
    async function loadSupabaseThreads() {
      if (!isSupabaseConfigured || !supabase) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('forum_threads')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) {
          const mapped: ForumThread[] = data.map(row => {
            const timeDiff = Date.now() - new Date(row.created_at).getTime();
            let lastActive = 'Just now';
            const diffMins = Math.floor(timeDiff / 60000);
            const diffHours = Math.floor(diffMins / 600);
            const diffDays = Math.floor(diffHours / 24);

            if (diffDays > 0) lastActive = `${diffDays}d ago`;
            else if (diffHours > 0) lastActive = `${diffHours}h ago`;
            else if (diffMins > 0) lastActive = `${diffMins}m ago`;

            return {
              id: row.id,
              title: row.title,
              category: row.category as any,
              author: row.author_name || 'Anonymous',
              replies: row.replies_count || 0,
              views: row.views_count || 1,
              likes: row.likes_count || 0,
              lastActive,
              created_at: row.created_at
            };
          });
          setForumThreads(mapped);
        }
      } catch (err) {
        console.error('Failed to fetch forum threads', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSupabaseThreads();
  }, []);

  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadCat, setNewThreadCat] = useState<'General' | 'Automation' | 'Next.js' | 'SEO' | 'Jobs'>('General');
  const [isCreatingThread, setIsCreatingThread] = useState(false);

  const handleCreateThread = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newThreadTitle) return;

    const newThreadLocal: ForumThread = {
      id: `thread-${Date.now()}`,
      title: newThreadTitle,
      category: newThreadCat,
      author: 'You (Dev)',
      replies: 0,
      views: 1,
      likes: 0,
      lastActive: 'Just now'
    };

    // If Supabase is active, insert into database
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('forum_threads')
          .insert([
            {
              title: newThreadTitle,
              category: newThreadCat,
              author_name: 'You (Dev)',
              replies_count: 0,
              views_count: 1,
              likes_count: 0
            }
          ])
          .select();

        if (error) throw error;
        if (data && data[0]) {
          const row = data[0];
          setForumThreads([
            {
              id: row.id,
              title: row.title,
              category: row.category as any,
              author: row.author_name,
              replies: row.replies_count,
              views: row.views_count,
              likes: row.likes_count,
              lastActive: 'Just now',
              created_at: row.created_at
            },
            ...forumThreads
          ]);
        }
      } catch (err) {
        console.error('Failed to create thread on Supabase', err);
        // Fallback to local state
        setForumThreads([newThreadLocal, ...forumThreads]);
      }
    } else {
      // Local fallback
      setForumThreads([newThreadLocal, ...forumThreads]);
    }

    setNewThreadTitle('');
    setIsCreatingThread(false);
  };

  const handleLikeThread = async (id: string) => {
    const thread = forumThreads.find(t => t.id === id);
    if (!thread) return;

    // Increment locally first for instant feedback
    setForumThreads(forumThreads.map(t => 
      t.id === id ? { ...t, likes: t.likes + 1 } : t
    ));

    // If Supabase is active, update in DB
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('forum_threads')
          .update({ likes_count: thread.likes + 1 })
          .eq('id', id);
        
        if (error) throw error;

        // Optionally record like record to restrict duplicate likes
        await supabase
          .from('forum_likes')
          .insert([{ thread_id: id }]);

      } catch (err) {
        console.error('Failed to record like in Supabase', err);
      }
    }
  };

  const forumCategories = ['All', 'General', 'Automation', 'Next.js', 'SEO', 'Jobs'];
  
  const filteredThreads = selectedForumTab === 'All'
    ? forumThreads
    : forumThreads.filter(t => t.category === selectedForumTab);

  const handleBuyTier = (tierName: string, price: number, id: string) => {
    addToCart({
      id: `community-${id}`,
      name: `Tribe Membership: ${tierName}`,
      price: price,
      category: 'Bundles',
    });
  };

  return (
    <div className="space-y-8 py-4">
      {/* Title Header */}
      <div className="flex items-center justify-between border-b border-n8nfg-light pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary-tint-1 border border-primary/20 text-primary">
            <Users size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-n8ntext-dark flex items-center gap-2">
              <span>Tribe Community</span>
              <span className="card-badge mrr">Loyalty Loop</span>
            </h1>
            <p className="text-xs text-n8ntext-base">Join active developer forums, find contract jobs, and share automation node templates.</p>
          </div>
        </div>
      </div>

      {/* Discord invite Banner */}
      <section className="p-6 rounded-xl bg-gradient-to-r from-n8nbg-light to-[#5865F2]/10 border border-[#5865F2]/30 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden group">
        <div className="space-y-2 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#5865F2]/20 border border-[#5865F2]/35 text-[#5865F2] text-[10px] font-bold uppercase tracking-wide">
            <Disc size={12} className="animate-spin" />
            <span>Discord Server lounge</span>
          </div>
          <h2 className="text-base font-bold text-n8ntext-dark">Connect with 1,234+ Indian Tech Builders</h2>
          <p className="text-xs text-n8ntext-base max-w-xl">
            Discuss code in real-time. Channels: <strong>#automation-hacks</strong>, <strong>#nextjs-help</strong>, <strong>#gigs-marketplace</strong>, and <strong>#mastermind-lobby</strong>.
          </p>
        </div>

        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-all shrink-0 hover:-translate-y-0.5 hover:shadow-[#5865F2]/25"
        >
          <Disc size={16} />
          <span>Join MarutiLounge</span>
        </a>
      </section>

      {/* Grid: Forum Discussions (7 cols) + Membership Tiers (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Forum Section */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-n8ntext-dark uppercase tracking-wider flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" />
              <span>Discussion Board</span>
            </h2>

            <button
              onClick={() => setIsCreatingThread(!isCreatingThread)}
              className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline"
            >
              <Plus size={14} />
              <span>New Topic</span>
            </button>
          </div>

          {/* New Thread Form */}
          {isCreatingThread && (
            <form onSubmit={handleCreateThread} className="bg-n8nbg-light border border-n8nfg-light p-4 rounded-xl space-y-3 animate-[fadeInUp_0.2s_ease]">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-n8ntext-light">Topic Title</label>
                <input 
                  type="text" 
                  placeholder="Ask a question or share a guide..." 
                  required
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                  className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-n8ntext-light text-[10px] uppercase font-bold">Category:</span>
                  <select
                    value={newThreadCat}
                    onChange={(e: any) => setNewThreadCat(e.target.value)}
                    className="bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none cursor-pointer"
                  >
                    <option value="General">General</option>
                    <option value="Automation">Automation</option>
                    <option value="Next.js">Next.js</option>
                    <option value="SEO">SEO</option>
                    <option value="Jobs">Jobs</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setIsCreatingThread(false)}
                    className="btn-ghost py-1 px-3 text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn-primary py-1 px-3 text-xs"
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Categories navigation */}
          <div className="flex flex-wrap items-center gap-1 border-b border-n8nfg-light pb-2">
            {forumCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedForumTab(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedForumTab === cat
                    ? 'text-primary bg-primary-tint-1 border border-primary/10'
                    : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Threads List */}
          <div className="space-y-3">
            {filteredThreads.map((thread) => (
              <div 
                key={thread.id} 
                className="p-3 bg-n8nbg-light border border-n8nfg-light rounded-xl hover:border-n8nfg-xlight flex flex-col sm:flex-row justify-between sm:items-center gap-3 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-n8nbg-base border border-n8nfg-light text-n8ntext-light">
                      {thread.category}
                    </span>
                    <span className="text-[10px] text-n8ntext-light font-medium">By {thread.author}</span>
                  </div>

                  <h3 className="text-xs font-bold text-n8ntext-dark hover:text-primary transition-colors cursor-pointer leading-normal">
                    {thread.title}
                  </h3>
                </div>

                {/* Counters */}
                <div className="flex items-center gap-4 text-[10px] text-n8ntext-light shrink-0">
                  <span className="flex items-center gap-1" title="Replies count">
                    <MessageSquare size={12} />
                    <span>{thread.replies}</span>
                  </span>
                  
                  <span className="flex items-center gap-1" title="Views count">
                    <Eye size={12} />
                    <span>{thread.views}</span>
                  </span>

                  <button 
                    onClick={() => handleLikeThread(thread.id)}
                    className="flex items-center gap-1 hover:text-danger group transition-colors"
                    title="Like topic"
                  >
                    <Heart size={12} className="group-hover:fill-danger" />
                    <span>{thread.likes}</span>
                  </button>

                  <span className="text-[9px] font-semibold text-n8ntext-lighter bg-n8nbg-base border border-n8nfg-light px-1.5 py-0.5 rounded">
                    {thread.lastActive}
                  </span>
                </div>
              </div>
            ))}

            {filteredThreads.length === 0 && (
              <div className="h-[200px] flex items-center justify-center text-center text-xs text-n8ntext-light">
                No discussion threads found matching category "{selectedForumTab}".
              </div>
            )}
          </div>
        </div>

        {/* Membership Tiers Toggles */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-sm font-bold text-n8ntext-dark uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={16} className="text-warning fill-warning" />
            <span>Tribe Membership Tiers</span>
          </h2>

          <div className="space-y-4">
            
            {/* Free Tier */}
            <div className="p-4 rounded-xl border border-n8nfg-light bg-n8nbg-light space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold text-n8ntext-dark">Tribe Free</h3>
                  <p className="text-[10px] text-n8ntext-light">Connect and read forum updates.</p>
                </div>
                <span className="text-sm font-black text-n8ntext-dark">₹0</span>
              </div>
              <button 
                onClick={() => alert('Welcome to MarutiDigital Free Lounge! Standard access is active.')}
                className="w-full btn-ghost py-1.5 text-xs font-bold"
              >
                Join Free Server
              </button>
            </div>

            {/* Pro Monthly */}
            <div className="p-4 rounded-xl border border-primary/30 bg-primary-tint-2/20 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[8px] uppercase tracking-wider font-extrabold px-3.5 py-0.5 rounded-bl">
                Popular
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold text-n8ntext-dark flex items-center gap-1.5">
                    <span>Tribe Pro</span>
                    <Shield size={12} className="text-primary" />
                  </h3>
                  <p className="text-[10px] text-n8ntext-light">Exclusive scripts, client referrals, mastermind groups.</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-n8ntext-dark block">₹499</span>
                  <span className="text-[8px] text-n8ntext-light block">/ month</span>
                </div>
              </div>
              
              <button 
                onClick={() => handleBuyTier('Tribe Pro', 499, 'pro')}
                className="w-full btn-primary py-1.5 text-xs font-bold"
              >
                Buy Pro Membership
              </button>
            </div>

            {/* Lifetime */}
            <div className="p-4 rounded-xl border border-n8nfg-light bg-n8nbg-light space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold text-n8ntext-dark">Tribe Lifetime</h3>
                  <p className="text-[10px] text-n8ntext-light">One-time payment for lifetime mastermind access.</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-n8ntext-dark block">₹4,999</span>
                  <span className="text-[8px] text-n8ntext-light block">One-time fee</span>
                </div>
              </div>
              
              <button 
                onClick={() => handleBuyTier('Tribe Lifetime', 4999, 'lifetime')}
                className="w-full btn-ghost py-1.5 text-xs font-bold"
              >
                Buy Lifetime Ticket
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
