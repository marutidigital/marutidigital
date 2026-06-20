'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Star, Tag, ChevronRight, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/utils/supabaseClient';

interface BlogPost {
  id: string;
  title: string;
  category: 'Tutorial' | 'Case Study' | 'Guide' | 'Comparison';
  tagColor?: string;
  excerpt: string;
  author: string; // matches author_name from DB
  author_name?: string; // fallback mapping
  date?: string;
  created_at?: string;
  readTime: string; // matches read_time from DB
  read_time?: string;
  featured?: boolean;
}

const INITIAL_MOCK_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to Build a ₹2L/Month Freelance System in India Using Automation',
    category: 'Case Study',
    excerpt: 'A complete step-by-step walkthrough of leveraging n8n automation, Supabase databases, and Next.js interfaces to run a one-person digital agency without hiring admin staff.',
    author: 'Shikha Dev',
    date: 'May 20, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'post-2',
    title: 'Designing Custom n8n Nodes: A Practical Developer\'s Guide',
    category: 'Tutorial',
    excerpt: 'Learn the exact typescript structures required to build, test, and publish custom node plugins for self-hosted n8n instances.',
    author: 'Aman Kumar',
    date: 'May 18, 2026',
    readTime: '6 min read',
  },
  {
    id: 'post-3',
    title: 'Top 5 Headless CMS Alternatives for Indian SaaS Products in 2026',
    category: 'Guide',
    excerpt: 'Comparing Sanity.io, Strapi, Decap, and local markdown layouts for pricing, latency, and INR payment gateway integrations.',
    author: 'Shikha Dev',
    date: 'May 14, 2026',
    readTime: '5 min read',
  },
  {
    id: 'post-4',
    title: 'Why We Switched Our Core Integrations from Zapier to Self-Hosted n8n',
    category: 'Comparison',
    excerpt: 'An in-depth cost and performance review of managing 100,000 monthly execution runs on AWS ECS Docker containers vs Zapier Starter plans.',
    author: 'Aman Kumar',
    date: 'May 10, 2026',
    readTime: '7 min read',
  },
  {
    id: 'post-5',
    title: 'Mastering Postgres Indexed Queries in Supabase Projects',
    category: 'Tutorial',
    excerpt: 'Avoid latency spikes: A guide to setting up GIN, B-Tree, and Hash indexes on JSONB fields inside Supabase database engines.',
    author: 'Ravi Patel',
    date: 'May 04, 2026',
    readTime: '10 min read',
  },
  {
    id: 'post-6',
    title: 'Scaling Next.js Image Layouts with Cloudflare Workers CDN',
    category: 'Guide',
    excerpt: 'Optimize your Core Web Vitals (CWV) scores by setting up edge image caching, responsive formats, and avif rendering nodes.',
    author: 'Shikha Dev',
    date: 'April 28, 2026',
    readTime: '4 min read',
  },
];

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_MOCK_POSTS);
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['All', 'Tutorial', 'Case Study', 'Guide', 'Comparison'];

  useEffect(() => {
    async function loadSupabasePosts() {
      if (!isSupabaseConfigured || !supabase) return;
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('featured', { ascending: false })
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) {
          const mapped: BlogPost[] = data.map(row => ({
            id: row.id,
            title: row.title,
            category: row.category as any,
            excerpt: row.excerpt || '',
            author: row.author_name || 'Admin',
            date: new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            readTime: row.read_time || '5 min read',
            featured: row.featured,
          }));
          setPosts(mapped);
        }
      } catch (err) {
        console.error('Failed to load posts from Supabase', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadSupabasePosts();
  }, []);

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(p => p.featured);
  const standardPosts = filteredPosts.filter(p => !p.featured || selectedCategory !== 'All');

  // Helper to map category to badge styling
  const getBadgeClass = (category: string) => {
    switch (category) {
      case 'Tutorial': return 'traffic'; // Orange
      case 'Case Study': return 'passive'; // Green
      case 'Guide': return 'seo'; // Amber
      case 'Comparison': return 'mrr'; // Purple
      default: return 'traffic';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-n8nfg-light pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary-tint-1 border border-primary/20 text-primary">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-n8ntext-dark flex items-center gap-2">
              <span>Knowledge Hub</span>
              <span className="card-badge seo">SEO Moat</span>
            </h1>
            <p className="text-xs text-n8ntext-base">In-depth developer guides, automation templates, and case studies.</p>
          </div>
        </div>
      </div>

      {/* Grid: Docs Sidebar navigation + articles */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left docs-style navigation tree */}
        <div className="lg:col-span-1 bg-n8nbg-lighter border border-n8nfg-light rounded-xl p-4 space-y-4">
          <div>
            <h3 className="text-[10px] uppercase font-bold text-n8ntext-light tracking-wider mb-2 px-2">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    (selectedCategory === cat)
                      ? 'text-primary bg-primary-tint-1 border border-primary/10'
                      : 'text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Publications' : `${cat}s`}</span>
                  <ChevronRight size={14} className={selectedCategory === cat ? 'text-primary' : 'text-n8ntext-light'} />
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-n8nfg-light"></div>

          <div className="px-2 space-y-2">
            <h4 className="text-[10px] uppercase font-bold text-n8ntext-light tracking-wider">Need Custom Writing?</h4>
            <p className="text-[10px] text-n8ntext-base leading-normal">Our team publishes monthly guides on API scaling and n8n nodes. Subscribe to get updates.</p>
            <div className="flex gap-1.5 mt-2">
              <input 
                type="email" 
                placeholder="developer@email.com" 
                className="w-full bg-n8nbg-base border border-n8nfg-light rounded px-2.5 py-1.5 text-[10px] text-n8ntext-dark focus:outline-none"
              />
              <button 
                onClick={() => alert('Thanks for subscribing to MarutiDigital Newsletter!')}
                className="btn-primary py-1 px-2.5 text-[10px] shrink-0"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Right main articles space */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Featured Post (only show if category is "All") */}
          {selectedCategory === 'All' && featuredPost && (
            <div className="n8n-card p-6 bg-gradient-to-br from-n8nbg-light to-n8nbg-lighter border border-n8nfg-light relative overflow-hidden group">
              {/* Highlight top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent" />
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className={`card-badge ${getBadgeClass(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <span className="text-[10px] text-n8ntext-light font-bold uppercase tracking-wider flex items-center gap-1">
                    <Star size={12} className="text-warning fill-warning" />
                    <span>Featured Article</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg md:text-xl font-bold text-n8ntext-dark group-hover:text-primary transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs text-n8ntext-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between border-t border-n8nfg-light pt-4 text-[10px] text-n8ntext-light gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      <span>{featuredPost.author}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{featuredPost.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{featuredPost.readTime}</span>
                    </span>
                  </div>

                  <a 
                    href={`/blog`} 
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Reading featured post: "${featuredPost.title}"!\n\nThis article is a mock representing the MarutiDigital organic SEO loop.`);
                    }}
                    className="text-primary font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Standard Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standardPosts.map((post) => (
              <div key={post.id} className="n8n-card p-5 flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`card-badge ${getBadgeClass(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-[10px] text-n8ntext-light flex items-center gap-1">
                      <Clock size={10} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-n8ntext-dark group-hover:text-primary transition-colors leading-normal line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-n8ntext-base leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="border-t border-n8nfg-light mt-4 pt-3 flex items-center justify-between text-[10px] text-n8ntext-light">
                  <div className="flex items-center gap-1">
                    <User size={10} />
                    <span>{post.author}</span>
                  </div>

                  <a 
                    href={`/blog`}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Reading post: "${post.title}"!\n\nThis article mockup helps drive inbound search metrics for our platform services.`);
                    }}
                    className="text-primary font-bold flex items-center gap-0.5 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {standardPosts.length === 0 && (
            <div className="h-[200px] flex items-center justify-center text-center text-xs text-n8ntext-light">
              No publications found matching category "{selectedCategory}".
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
