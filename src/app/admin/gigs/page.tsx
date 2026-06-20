'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Users, Search, Filter, CheckCircle, RefreshCw, ExternalLink, Eye, AlertTriangle, Package } from 'lucide-react';
import OrderStatusBadge from '@/components/services/OrderStatusBadge';
import { supabase } from '@/utils/supabaseClient';
import { ServiceOrder } from '@/lib/servicesHelpers';

const ADMIN_EMAIL = 'marutidigitalweb@gmail.com';
const TEAM_MEMBERS = ['Shikha', 'Aman Kumar', 'Rajesh', 'Pooja', 'Khargone Team'];
const STATUS_OPTIONS = ['submitted', 'deposit_paid', 'in_progress', 'delivered', 'balance_paid', 'complete', 'cancelled'];

// Safely extend order type for admin
interface AdminOrder extends ServiceOrder { is_emergency?: boolean; }

const MOCK_ADMIN_ORDERS: AdminOrder[] = [
  { id: 'ord-001', gig_id: '', client_name: 'Alice Smith', client_email: 'alice@startup.com', client_phone: '+44 7700 900000', gig_title: 'Fix Vercel build failed error', gig_category: 'vercel', total_amount_usd: 59, deposit_amount_usd: 11.80, balance_amount_usd: 47.20, status: 'deposit_paid', assigned_to: '', created_at: new Date(Date.now() - 2 * 3600000).toISOString(), updated_at: new Date(Date.now() - 2 * 3600000).toISOString() },
  { id: 'ord-002', gig_id: '', client_name: 'Marco Rossi', client_email: 'marco@itcompany.it', gig_title: 'Write and debug Supabase RLS policies from scratch', gig_category: 'supabase', total_amount_usd: 25, deposit_amount_usd: 5, balance_amount_usd: 20, status: 'in_progress', assigned_to: 'Aman Kumar', created_at: new Date(Date.now() - 24 * 3600000).toISOString(), updated_at: new Date(Date.now() - 3600000).toISOString() },
  { id: 'ord-003', gig_id: '', client_name: 'Sarah Chen', client_email: 'sarah@boutique.com', gig_title: 'Logo design 3 concepts standard tier', gig_category: 'design', total_amount_usd: 39, deposit_amount_usd: 7.80, balance_amount_usd: 31.20, status: 'delivered', assigned_to: 'Pooja', created_at: new Date(Date.now() - 5 * 86400000).toISOString(), updated_at: new Date().toISOString() },
  { id: 'ord-004', gig_id: '', client_name: 'Thomas Weber', client_email: 'thomas@webagency.de', gig_title: 'Fix site hacked malware cleanup', gig_category: 'wordpress', total_amount_usd: 89, deposit_amount_usd: 17.80, balance_amount_usd: 71.20, status: 'submitted', assigned_to: '', is_emergency: true, created_at: new Date(Date.now() - 30 * 60000).toISOString(), updated_at: new Date(Date.now() - 30 * 60000).toISOString() },
];

export default function AdminGigsPage() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    if (supabase) {
      const { data, error } = await supabase
        .from('service_orders')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        setOrders(data as AdminOrder[]);
        setLoading(false);
        return;
      }
    }
    setOrders(MOCK_ADMIN_ORDERS);
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdatingId(orderId);
    if (supabase) {
      await supabase.from('service_orders').update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', orderId);
    }
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus as ServiceOrder['status'] } : o));
    setUpdatingId(null);
    if (selectedOrder?.id === orderId) {
      setSelectedOrder(prev => prev ? { ...prev, status: newStatus as ServiceOrder['status'] } : null);
    }
  };

  const assignOrder = async (orderId: string, team: string) => {
    setUpdatingId(orderId);
    if (supabase) {
      await supabase.from('service_orders').update({ assigned_to: team, status: 'in_progress', updated_at: new Date().toISOString() }).eq('id', orderId);
    }
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, assigned_to: team, status: 'in_progress' as ServiceOrder['status'] } : o));
    setUpdatingId(null);
  };

  const filteredOrders = orders.filter(o => {
    if (statusFilter !== 'all' && o.status !== statusFilter) return false;
    if (search && !o.client_name.toLowerCase().includes(search.toLowerCase()) && !o.client_email.toLowerCase().includes(search.toLowerCase()) && !o.gig_title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const stats = {
    total: orders.length,
    new: orders.filter(o => o.status === 'submitted').length,
    active: orders.filter(o => ['deposit_paid', 'in_progress'].includes(o.status)).length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    revenue: orders.reduce((sum, o) => sum + o.deposit_amount_usd, 0),
  };

  return (
    <div className="space-y-6">

      {/* Admin header */}
      <div className="flex items-center justify-between border-b border-n8nfg-light pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary-tint-1 border border-primary/20 text-primary">
            <Settings size={22} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-n8ntext-dark flex items-center gap-2">
              Admin Panel
              <span className="card-badge traffic">Internal</span>
            </h1>
            <p className="text-xs text-n8ntext-base">Manage gig orders, assign team, update status</p>
          </div>
        </div>
        <button onClick={loadOrders} className="btn-ghost py-1.5 px-3 text-xs flex items-center gap-1.5">
          <RefreshCw size={12} />
          Refresh
        </button>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { label: 'Total Orders', value: stats.total, color: 'text-n8ntext-dark' },
          { label: 'New (Unassigned)', value: stats.new, color: 'text-amber-400' },
          { label: 'In Progress', value: stats.active, color: 'text-blue-400' },
          { label: 'Awaiting Approval', value: stats.delivered, color: 'text-emerald-400' },
          { label: 'Deposits Collected', value: `$${stats.revenue.toFixed(0)}`, color: 'text-primary' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-3 text-center">
            <div className={`text-xl font-black ${color}`}>{value}</div>
            <div className="text-[9px] text-n8ntext-light uppercase tracking-wide mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* Orders list */}
        <div className="flex-1 space-y-3">
          {/* Controls */}
          <div className="flex gap-2 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-n8ntext-light" />
              <input type="text" placeholder="Search orders..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full bg-n8nbg-light border border-n8nfg-light rounded-lg pl-8 pr-3 py-2 text-xs text-n8ntext-dark placeholder:text-n8ntext-light focus:outline-none focus:border-primary" />
            </div>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
              className="bg-n8nbg-light border border-n8nfg-light rounded-lg px-3 py-2 text-xs text-n8ntext-dark focus:outline-none focus:border-primary">
              <option value="all">All Statuses</option>
              {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
            </select>
          </div>

          {/* Order rows */}
          {loading ? (
            <div className="space-y-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-n8nbg-lighter border border-n8nfg-light rounded-xl p-4 animate-pulse">
                  <div className="h-4 bg-n8nbg-dark rounded w-1/2 mb-2" />
                  <div className="h-3 bg-n8nbg-dark rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredOrders.map(order => (
                <div
                  key={order.id}
                  onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                  className={`bg-n8nbg-lighter border rounded-xl p-4 cursor-pointer transition-colors ${selectedOrder?.id === order.id ? 'border-primary/40 bg-primary-tint-2/20' : 'border-n8nfg-light hover:border-n8nfg-xlight'}`}
                >
                  <div className="flex items-start gap-3">
                    {/* Emergency indicator */}
                    {order.is_emergency && (
                      <AlertTriangle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    {!order.is_emergency && (
                      <Package size={14} className="text-n8ntext-light flex-shrink-0 mt-0.5" />
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xs font-bold text-n8ntext-dark truncate">{order.gig_title}</h3>
                        <OrderStatusBadge status={order.status} />
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-n8ntext-light flex-wrap">
                        <span className="font-semibold text-n8ntext-base">{order.client_name}</span>
                        <span>·</span>
                        <span>{order.client_email}</span>
                        <span>·</span>
                        <span className="text-emerald-400 font-semibold">${order.deposit_amount_usd.toFixed(2)} paid</span>
                        {order.assigned_to ? (
                          <><span>·</span><span className="text-blue-400">→ {order.assigned_to}</span></>
                        ) : (
                          <><span>·</span><span className="text-amber-400">Unassigned</span></>
                        )}
                      </div>
                    </div>

                    <Eye size={13} className={`flex-shrink-0 ${selectedOrder?.id === order.id ? 'text-primary' : 'text-n8ntext-light'}`} />
                  </div>
                </div>
              ))}
              {filteredOrders.length === 0 && (
                <div className="text-center py-10 text-n8ntext-light text-sm">No orders match your filters.</div>
              )}
            </div>
          )}
        </div>

        {/* Order detail panel */}
        {selectedOrder && (
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-xl p-4 space-y-4 sticky top-20">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-n8ntext-dark">Order Details</h2>
                <span className="text-[9px] text-n8ntext-light">#{selectedOrder.id.slice(-8).toUpperCase()}</span>
              </div>

              {/* Client info */}
              <div className="space-y-2 text-[11px]">
                <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3 space-y-1.5">
                  <div className="flex justify-between"><span className="text-n8ntext-light">Client</span><span className="font-semibold text-n8ntext-dark">{selectedOrder.client_name}</span></div>
                  <div className="flex justify-between"><span className="text-n8ntext-light">Email</span><span className="text-primary truncate max-w-32">{selectedOrder.client_email}</span></div>
                  {selectedOrder.client_phone && <div className="flex justify-between"><span className="text-n8ntext-light">Phone</span><span className="text-n8ntext-dark">{selectedOrder.client_phone}</span></div>}
                  <div className="flex justify-between"><span className="text-n8ntext-light">Category</span><span className="capitalize text-n8ntext-dark">{selectedOrder.gig_category.replace('_', ' ')}</span></div>
                </div>

                <div className="bg-n8nbg-light border border-n8nfg-light rounded-lg p-3 space-y-1.5">
                  <div className="flex justify-between"><span className="text-n8ntext-light">Total</span><span className="font-bold text-n8ntext-dark">${selectedOrder.total_amount_usd}</span></div>
                  <div className="flex justify-between"><span className="text-n8ntext-light">Deposit</span><span className="font-bold text-emerald-400">${selectedOrder.deposit_amount_usd.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-n8ntext-light">Balance</span><span className="font-bold text-amber-400">${selectedOrder.balance_amount_usd.toFixed(2)}</span></div>
                </div>
              </div>

              {/* Assign team */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-n8ntext-light">Assign to Team</label>
                <select
                  value={selectedOrder.assigned_to || ''}
                  onChange={e => assignOrder(selectedOrder.id, e.target.value)}
                  disabled={updatingId === selectedOrder.id}
                  className="w-full bg-n8nbg-base border border-n8nfg-light rounded-lg px-2.5 py-2 text-xs text-n8ntext-dark focus:outline-none focus:border-primary disabled:opacity-50"
                >
                  <option value="">— Select team member —</option>
                  {TEAM_MEMBERS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>

              {/* Status update */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-n8ntext-light">Update Status</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {STATUS_OPTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => updateOrderStatus(selectedOrder.id, s)}
                      disabled={updatingId === selectedOrder.id || selectedOrder.status === s}
                      className={`py-1.5 px-2 text-[9px] font-bold rounded-lg capitalize transition-colors disabled:opacity-40 ${selectedOrder.status === s ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-n8nbg-base border border-n8nfg-light text-n8ntext-base hover:border-primary/30 hover:text-primary'}`}
                    >
                      {s.replace('_', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Send balance invoice */}
              {selectedOrder.status === 'delivered' && (
                <button className="w-full btn-primary py-2 text-xs font-bold flex items-center justify-center gap-1.5">
                  <ExternalLink size={12} />
                  Send Balance Invoice
                </button>
              )}

              <div className="text-[9px] text-n8ntext-light text-center">
                Created {new Date(selectedOrder.created_at).toLocaleString()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
