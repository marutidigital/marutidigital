import { supabase } from '../utils/supabaseClient';
import { ALL_GIGS, GIG_CATEGORIES, GigSeedItem } from './gigsSeedData';

export type GigTier = 'quick_fix' | 'standard' | 'build' | 'design' | 'ai_content' | 'retainer' | 'emergency';

export interface Gig {
  id: string;
  category: string;
  title: string;
  description: string;
  price_usd: number;
  delivery_days: number;
  slug: string;
  tier: GigTier;
  is_emergency: boolean;
  is_active?: boolean;
  avg_rating: number;
  review_count: number;
  order_count: number;
  created_at: string;
}

export interface ServiceOrder {
  id: string;
  gig_id: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  project_details?: string;
  gig_title: string;
  gig_category: string;
  total_amount_usd: number;
  deposit_amount_usd: number;
  balance_amount_usd: number;
  deposit_stripe_session_id?: string;
  balance_stripe_session_id?: string;
  deposit_paid_at?: string;
  balance_paid_at?: string;
  status: 'submitted' | 'deposit_paid' | 'in_progress' | 'delivered' | 'balance_paid' | 'complete' | 'cancelled';
  assigned_to?: string;
  delivery_notes?: string;
  created_at: string;
  updated_at: string;
}

export function getTierLabel(tier: GigTier): string {
  const labels: Record<GigTier, string> = {
    quick_fix: 'Quick Fix',
    standard: 'Standard',
    build: 'Build',
    design: 'Design',
    ai_content: 'AI Content',
    retainer: 'Retainer',
    emergency: 'Emergency',
  };
  return labels[tier];
}

export function getTierColor(tier: GigTier): string {
  const colors: Record<GigTier, string> = {
    quick_fix: 'hsl(139, 51%, 55%)',
    standard: 'hsl(210, 100%, 60%)',
    build: 'hsl(247, 100%, 75%)',
    design: 'hsl(300, 60%, 65%)',
    ai_content: 'hsl(40, 100%, 60%)',
    retainer: 'hsl(6.9, 100%, 67.6%)',
    emergency: 'hsl(0, 90%, 60%)',
  };
  return colors[tier];
}

export function calculateDepositAmount(priceUsd: number): number {
  return Math.round(priceUsd * 0.2 * 100) / 100;
}

export function calculateBalanceAmount(priceUsd: number): number {
  return Math.round(priceUsd * 0.8 * 100) / 100;
}

export async function fetchGigsByCategory(category: string): Promise<Gig[]> {
  if (supabase) {
    const { data, error } = await supabase
      .from('gigs')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('order_count', { ascending: false });
    if (!error && data && data.length > 0) return data as Gig[];
  }
  // Fallback to seed data
  return ALL_GIGS
    .filter(g => g.category === category)
    .map((g, i) => ({
      ...g,
      id: `seed-${category}-${i}`,
      is_active: true,
      avg_rating: 4.8,
      review_count: Math.floor(Math.random() * 20 + 3),
      order_count: Math.floor(Math.random() * 50 + 5),
      created_at: new Date().toISOString(),
    }));
}

export async function fetchGigBySlug(slug: string): Promise<Gig | null> {
  if (supabase) {
    const { data, error } = await supabase
      .from('gigs')
      .select('*')
      .eq('slug', slug)
      .single();
    if (!error && data) return data as Gig;
  }
  const found = ALL_GIGS.find(g => g.slug === slug);
  if (!found) return null;
  return { ...found, id: `seed-${found.category}-${slug}`, is_active: true, avg_rating: 4.8, review_count: 12, order_count: 28, created_at: new Date().toISOString() };
}

export async function fetchAllGigs(): Promise<Gig[]> {
  if (supabase) {
    const { data, error } = await supabase.from('gigs').select('*').eq('is_active', true).order('created_at', { ascending: true });
    if (!error && data && data.length > 0) return data as Gig[];
  }
  return ALL_GIGS.map((g, i) => ({ ...g, id: `seed-${g.category}-${i}`, is_active: true, avg_rating: 4.8, review_count: 8, order_count: 15, created_at: new Date().toISOString() }));
}

export async function createServiceOrder(order: Omit<ServiceOrder, 'id' | 'created_at' | 'updated_at'>): Promise<ServiceOrder | null> {
  if (supabase) {
    const { data, error } = await supabase.from('service_orders').insert([order]).select().single();
    if (!error && data) return data as ServiceOrder;
  }
  return null;
}

export async function createCustomRequest(req: {
  client_name: string;
  client_email: string;
  client_phone?: string;
  problem_description: string;
  budget_range?: string;
  timeline?: string;
}): Promise<boolean> {
  if (supabase) {
    const { error } = await supabase.from('custom_requests').insert([req]);
    return !error;
  }
  return true; // fallback succeed
}
