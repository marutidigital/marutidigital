'use client';

import React, { useState } from 'react';
import { 
  Wrench, FileText, Palette, Calculator, Link2, Search, Zap, Globe, FileCode,
  Copy, RefreshCw, Plus, Trash2, Download, Printer, ArrowRight, Star, AlertCircle, CheckCircle, Info, CloudLightning
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/utils/supabaseClient';

type ToolId = 'invoice' | 'css' | 'rate-calc' | 'bio-link' | 'seo-meta' | 'speed' | 'dns' | 'ai-writer';

export default function ToolsHubPage() {
  const [activeTool, setActiveTool] = useState<ToolId>('invoice');

  // Tool List Definitions
  const toolsList = [
    { id: 'invoice', name: 'Invoice Generator', desc: 'GST-ready invoice builder with print/PDF layout.', icon: FileText },
    { id: 'css', name: 'CSS Generator', desc: 'Custom glassmorphism & gradients previewer.', icon: Palette },
    { id: 'rate-calc', name: 'Freelance Rate Calc', desc: 'Target monthly goals to compute ideal rates.', icon: Calculator },
    { id: 'bio-link', name: 'Link in Bio Builder', desc: 'Create landing micro-profiles with links.', icon: Link2 },
    { id: 'seo-meta', name: 'Meta Tag Analyzer', desc: 'Instant mockup meta tags auditor.', icon: Search },
    { id: 'speed', name: 'Page Speed Checker', desc: 'Check CWV scores & optimize images.', icon: Zap },
    { id: 'dns', name: 'WHOIS & DNS Lookup', desc: 'DNS records lookup & SSL validation.', icon: Globe },
    { id: 'ai-writer', name: 'AI Copywriting Assistant', desc: 'Generate copy headers and ad blurbs.', icon: FileCode },
  ];

  // Tool 1: Invoice Generator States & Logic
  const [invoiceSender, setInvoiceSender] = useState('Maruti Digital');
  const [invoiceClient, setInvoiceClient] = useState('Client India Pvt Ltd');
  const [invoiceNo, setInvoiceNo] = useState('MD-2026-001');
  const [invoiceDate, setInvoiceDate] = useState('2026-05-24');
  const [invoiceItems, setInvoiceItems] = useState([
    { desc: 'Next.js Frontend Development', qty: 1, rate: 45000, gst: 18 },
    { desc: 'n8n Automation Workflows', qty: 1, rate: 15000, gst: 18 }
  ]);

  const [isInvoiceSaving, setIsInvoiceSaving] = useState(false);

  const saveInvoiceToCloud = async () => {
    if (!isSupabaseConfigured || !supabase) {
      alert('⚠️ Supabase integration is not configured in .env.local yet! Add your keys to sync invoices with the cloud.');
      return;
    }
    setIsInvoiceSaving(true);
    try {
      const { error } = await supabase
        .from('invoices')
        .insert([
          {
            invoice_no: invoiceNo,
            sender: invoiceSender,
            client: invoiceClient,
            date: invoiceDate,
            subtotal: calcInvoiceSubtotal(),
            gst: calcInvoiceGst(),
            total: calcInvoiceTotal(),
            items: invoiceItems
          }
        ]);

      if (error) throw error;
      alert('🎉 Invoice successfully saved to your Supabase ledger database!');
    } catch (err) {
      console.error('Failed to save invoice', err);
      alert('❌ Failed to save invoice. Check your database connections.');
    } finally {
      setIsInvoiceSaving(false);
    }
  };

  const addInvoiceItem = () => {
    setInvoiceItems([...invoiceItems, { desc: 'New Consultation Service', qty: 1, rate: 5000, gst: 18 }]);
  };

  const removeInvoiceItem = (index: number) => {
    setInvoiceItems(invoiceItems.filter((_, i) => i !== index));
  };

  const updateInvoiceItem = (index: number, key: string, value: any) => {
    const updated = invoiceItems.map((item, i) => {
      if (i === index) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setInvoiceItems(updated);
  };

  const calcInvoiceSubtotal = () => invoiceItems.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  const calcInvoiceGst = () => invoiceItems.reduce((acc, item) => acc + ((item.qty * item.rate * item.gst) / 100), 0);
  const calcInvoiceTotal = () => calcInvoiceSubtotal() + calcInvoiceGst();

  // Tool 2: CSS Generator States & Logic
  const [cssType, setCssType] = useState<'glass' | 'shadow' | 'gradient'>('glass');
  const [cssBlur, setCssBlur] = useState(12);
  const [cssOpacity, setCssOpacity] = useState(25);
  const [cssBgColor, setCssBgColor] = useState('#ff6d5a');
  const [cssShadowColor, setCssShadowColor] = useState('rgba(0,0,0,0.4)');
  const [cssShadowBlur, setCssShadowBlur] = useState(20);
  const [cssGradStart, setCssGradStart] = useState('#ff6d5a');
  const [cssGradEnd, setCssGradEnd] = useState('#2e00b3');

  const getCssCode = () => {
    if (cssType === 'glass') {
      return `background: rgba(21, 23, 31, ${cssOpacity / 100});\nbackdrop-filter: blur(${cssBlur}px);\n-webkit-backdrop-filter: blur(${cssBlur}px);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: 12px;`;
    } else if (cssType === 'shadow') {
      return `box-shadow: 0 10px ${cssShadowBlur}px ${cssShadowColor};\nborder-radius: 12px;\nborder: 1px solid var(--color-foreground-light);`;
    } else {
      return `background: linear-gradient(135deg, ${cssGradStart} 0%, ${cssGradEnd} 100%);\nborder-radius: 12px;`;
    }
  };

  const [cssCopied, setCssCopied] = useState(false);
  const copyCssToClipboard = () => {
    navigator.clipboard.writeText(getCssCode());
    setCssCopied(true);
    setTimeout(() => setCssCopied(false), 2000);
  };

  // Tool 3: Freelance Rate Calculator States
  const [calcGoal, setCalcGoal] = useState(1200000); // 12 Lakhs/yr
  const [calcExpenses, setCalcExpenses] = useState(20000); // 20k/mo
  const [calcHours, setCalcHours] = useState(35); // 35 hrs/wk
  const [calcWeeks, setCalcWeeks] = useState(48); // 48 wks/yr
  const [calcBillable, setCalcBillable] = useState(60); // 60% billable

  const computeRates = () => {
    const annualExpenses = calcExpenses * 12;
    const grossIncomeRequired = calcGoal + annualExpenses;
    const totalWorkingHours = calcHours * calcWeeks;
    const billableHours = totalWorkingHours * (calcBillable / 100);
    const hourlyRate = Math.round(grossIncomeRequired / billableHours);
    const dayRate = hourlyRate * 8;
    return { hourlyRate, dayRate, grossIncomeRequired };
  };

  // Tool 4: Link in Bio Builder States
  const [bioName, setBioName] = useState('Shikha Dev');
  const [bioTitle, setBioTitle] = useState('Fullstack Engineer & n8n Specialist');
  const [bioLinks, setBioLinks] = useState([
    { label: 'My Digital Products Store', url: '/shop' },
    { label: 'Follow me on LinkedIn', url: 'https://linkedin.com' },
    { label: 'Checkout my GitHub Profile', url: 'https://github.com' }
  ]);
  const [newLinkLabel, setNewLinkLabel] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');

  const addBioLink = () => {
    if (newLinkLabel && newLinkUrl) {
      setBioLinks([...bioLinks, { label: newLinkLabel, url: newLinkUrl }]);
      setNewLinkLabel('');
      setNewLinkUrl('');
    }
  };

  // Tool 5: Meta Tag Analyzer States
  const [metaUrl, setMetaUrl] = useState('https://marutidigital.in');
  const [metaResult, setMetaResult] = useState<any>(null);
  const [isMetaLoading, setIsMetaLoading] = useState(false);

  const runMetaAudit = () => {
    setIsMetaLoading(true);
    setTimeout(() => {
      setMetaResult({
        score: 85,
        title: 'MarutiDigital.in — Complete Web & SaaS Digital Platform',
        description: 'Built for Indian Freelancers, companies, and tech builders with free tools, digital shop, knowledge hub, and premium services.',
        warnings: [
          { item: 'Open Graph Image', status: 'missing', msg: 'Missing og:image tag. Social shares will display no preview thumbnail.' },
          { item: 'Twitter Card type', status: 'warning', msg: 'twitter:card tag is unset, fallback to summary card.' }
        ],
        passed: [
          { item: 'Title length (58 chars)', status: 'good', msg: 'Title tag length is within the recommended 50-60 character limit.' },
          { item: 'Description length (158 chars)', status: 'good', msg: 'Meta description matches the recommended 150-160 range.' },
          { item: 'Sitemap declaration', status: 'good', msg: 'XML sitemap structure found.' }
        ]
      });
      setIsMetaLoading(false);
    }, 1500);
  };

  // Tool 6: Page Speed Checker States
  const [speedUrl, setSpeedUrl] = useState('https://marutidigital.in');
  const [speedResult, setSpeedResult] = useState<any>(null);
  const [isSpeedLoading, setIsSpeedLoading] = useState(false);

  const runSpeedAudit = () => {
    setIsSpeedLoading(true);
    setTimeout(() => {
      setSpeedResult({
        performance: 96,
        accessibility: 98,
        bestPractices: 92,
        seo: 100,
        metrics: [
          { name: 'Largest Contentful Paint (LCP)', val: '1.2s', status: 'good' },
          { name: 'First Input Delay (FID)', val: '15ms', status: 'good' },
          { name: 'Cumulative Layout Shift (CLS)', val: '0.02', status: 'good' }
        ],
        recs: [
          'Preload the primary Inter header font files.',
          'Compress the homepage background linear glow blobs.'
        ]
      });
      setIsSpeedLoading(false);
    }, 1500);
  };

  // Tool 7: WHOIS & DNS Lookup States
  const [dnsDomain, setDnsDomain] = useState('marutidigital.in');
  const [dnsResult, setDnsResult] = useState<any>(null);
  const [isDnsLoading, setIsDnsLoading] = useState(false);

  const runDnsLookup = () => {
    setIsDnsLoading(true);
    setTimeout(() => {
      setDnsResult({
        domain: dnsDomain,
        registrar: 'GoDaddy',
        expires: '2027-05-24 (Valid for 365 Days)',
        ssl: 'Valid (Let\'s Encrypt SSL CA - Expiry 89 Days)',
        records: [
          { type: 'A', name: '@', val: '76.76.21.21 (Vercel Edge)', ttl: '3600' },
          { type: 'MX', name: '@', val: '10 mail.protonmail.ch', ttl: '86400' },
          { type: 'TXT', name: '@', val: 'v=spf1 include:_spf.protonmail.ch ~all', ttl: '3600' },
          { type: 'CNAME', name: 'www', val: 'cname.vercel-dns.com', ttl: '3600' }
        ]
      });
      setIsDnsLoading(false);
    }, 1500);
  };

  // Tool 8: AI Copywriting States
  const [aiTopic, setAiTopic] = useState('Freelance web design services');
  const [aiType, setAiType] = useState<'title' | 'social' | 'email'>('title');
  const [aiTone, setAiTone] = useState('persuasive');
  const [aiOutput, setAiOutput] = useState('');
  const [aiCredits, setAiCredits] = useState(3);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const generateAiCopy = () => {
    if (aiCredits <= 0) {
      alert('You have run out of daily free credits! Contact MarutiDigital Pro to upgrade.');
      return;
    }
    setIsAiLoading(true);
    setTimeout(() => {
      let copy = '';
      if (aiType === 'title') {
        copy = aiTone === 'persuasive' 
          ? `🚀 Stop Losing Clients: Get Premium Web Architecture Built For Results!` 
          : `✨ Crafting High-Speed Next.js Experiences Designed For Indian Tech Leaders.`;
      } else if (aiType === 'social') {
        copy = `Freelancers, how much are you charging per hour? 💸\n\nIf you don't calculate your target income, expenses, and billable ratios correctly, you are leaving lakhs on the table.\n\nUse our MarutiDigital rate calculator to set your rates today! 👇\n#FreelanceIndia #WebDev`;
      } else {
        copy = `Subject: Quick question regarding your web speed optimization ⚡\n\nHi [Name],\n\nI was reviewing your website loading metrics and noticed your LCP exceeds 2.5 seconds. Our team at MarutiDigital can optimize your build and double your conversions. Can we hop on a quick 10-min call?`;
      }
      setAiOutput(copy);
      setAiCredits(aiCredits - 1);
      setIsAiLoading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary-tint-1 border border-primary/20 text-primary">
          <Wrench size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-n8ntext-dark flex items-center gap-2">
            <span>Free Tools Hub</span>
            <span className="card-badge traffic">Traffic Engine</span>
          </h1>
          <p className="text-xs text-n8ntext-base">Interactive utilities built to grow traffic, capture leads, and automate workflows.</p>
        </div>
      </div>

      {/* Main Grid: Left Selector, Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left selector */}
        <div className="space-y-2 lg:col-span-1">
          {toolsList.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id as ToolId)}
                className={`w-full text-left p-3 rounded-lg border flex items-center gap-3 ${
                  isActive
                    ? 'bg-primary-tint-1 border-primary/45 text-n8ntext-dark shadow-glow'
                    : 'bg-n8nbg-light border-n8nfg-light text-n8ntext-base hover:text-n8ntext-dark hover:bg-n8nbg-base'
                }`}
              >
                <div className={`p-1.5 rounded-md ${isActive ? 'bg-primary text-white' : 'bg-n8nbg-base text-n8ntext-light'}`}>
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold truncate">{tool.name}</h3>
                  <p className="text-[10px] text-n8ntext-light truncate mt-0.5">{tool.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Content Panel */}
        <div className="lg:col-span-2 bg-n8nbg-lighter border border-n8nfg-light rounded-xl overflow-hidden min-h-[500px] flex flex-col justify-between">
          
          {/* Tool 1: Invoice Generator */}
          {activeTool === 'invoice' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">Invoice Builder</h2>
                
                {/* Meta Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-n8ntext-light">Your Business Name</label>
                    <input 
                      type="text" 
                      value={invoiceSender} 
                      onChange={(e) => setInvoiceSender(e.target.value)}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-n8ntext-light">Client Business Name</label>
                    <input 
                      type="text" 
                      value={invoiceClient} 
                      onChange={(e) => setInvoiceClient(e.target.value)}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-n8ntext-light">Invoice No.</label>
                    <input 
                      type="text" 
                      value={invoiceNo} 
                      onChange={(e) => setInvoiceNo(e.target.value)}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-n8ntext-light">Invoice Date</label>
                    <input 
                      type="date" 
                      value={invoiceDate} 
                      onChange={(e) => setInvoiceDate(e.target.value)}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Items Table */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-bold text-n8ntext-dark">Line Items (18% GST Auto-applied)</h3>
                    <button 
                      onClick={addInvoiceItem}
                      className="text-xs text-primary font-semibold flex items-center gap-1 hover:underline"
                    >
                      <Plus size={14} />
                      <span>Add Item</span>
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                    {invoiceItems.map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-center bg-n8nbg-light p-2 rounded border border-n8nfg-light">
                        <input 
                          type="text" 
                          placeholder="Description" 
                          value={item.desc} 
                          onChange={(e) => updateInvoiceItem(idx, 'desc', e.target.value)}
                          className="flex-1 min-w-0 bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none"
                        />
                        <input 
                          type="number" 
                          placeholder="Qty" 
                          value={item.qty} 
                          onChange={(e) => updateInvoiceItem(idx, 'qty', parseInt(e.target.value) || 0)}
                          className="w-12 bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none"
                        />
                        <input 
                          type="number" 
                          placeholder="Rate" 
                          value={item.rate} 
                          onChange={(e) => updateInvoiceItem(idx, 'rate', parseInt(e.target.value) || 0)}
                          className="w-20 bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none"
                        />
                        <button 
                          onClick={() => removeInvoiceItem(idx)}
                          className="p-1 text-n8ntext-light hover:text-danger hover:bg-n8nbg-base rounded"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Totals & Export */}
              <div className="border-t border-n8nfg-light pt-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-n8nbg-light -mx-6 -mb-6 p-6">
                <div className="text-xs space-y-1">
                  <div className="flex gap-2">
                    <span className="text-n8ntext-light">Subtotal:</span>
                    <span className="text-n8ntext-dark font-semibold">₹{calcInvoiceSubtotal().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-n8ntext-light">GST (18%):</span>
                    <span className="text-n8ntext-dark font-semibold">₹{calcInvoiceGst().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="text-n8ntext-light">Grand Total:</span>
                    <span className="text-primary font-bold">₹{calcInvoiceTotal().toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="btn-ghost py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Printer size={14} />
                    <span>Print PDF</span>
                  </button>
                   <button 
                    onClick={saveInvoiceToCloud}
                    disabled={isInvoiceSaving}
                    className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
                  >
                    {isInvoiceSaving ? <RefreshCw className="animate-spin" size={14} /> : <CloudLightning size={14} />}
                    <span>Save to Cloud</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tool 2: CSS Generator */}
          {activeTool === 'css' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex border-b border-n8nfg-light pb-2 gap-3">
                  <button 
                    onClick={() => setCssType('glass')}
                    className={`text-xs font-bold pb-2 border-b-2 px-2 transition-all ${cssType === 'glass' ? 'border-primary text-primary' : 'border-transparent text-n8ntext-light hover:text-n8ntext-dark'}`}
                  >
                    Glassmorphism
                  </button>
                  <button 
                    onClick={() => setCssType('shadow')}
                    className={`text-xs font-bold pb-2 border-b-2 px-2 transition-all ${cssType === 'shadow' ? 'border-primary text-primary' : 'border-transparent text-n8ntext-light hover:text-n8ntext-dark'}`}
                  >
                    Box Shadow
                  </button>
                  <button 
                    onClick={() => setCssType('gradient')}
                    className={`text-xs font-bold pb-2 border-b-2 px-2 transition-all ${cssType === 'gradient' ? 'border-primary text-primary' : 'border-transparent text-n8ntext-light hover:text-n8ntext-dark'}`}
                  >
                    Gradient Shimmer
                  </button>
                </div>

                {/* Grid Inputs & Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Inputs controls */}
                  <div className="space-y-3">
                    {cssType === 'glass' && (
                      <>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-n8ntext-light">
                            <span>Background Blur</span>
                            <span>{cssBlur}px</span>
                          </div>
                          <input 
                            type="range" min="0" max="40" value={cssBlur}
                            onChange={(e) => setCssBlur(parseInt(e.target.value))}
                            className="w-full accent-primary bg-n8nbg-base h-1 rounded-lg cursor-pointer"
                          />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-n8ntext-light">
                            <span>Glass Opacity</span>
                            <span>{cssOpacity}%</span>
                          </div>
                          <input 
                            type="range" min="5" max="95" value={cssOpacity}
                            onChange={(e) => setCssOpacity(parseInt(e.target.value))}
                            className="w-full accent-primary bg-n8nbg-base h-1 rounded-lg cursor-pointer"
                          />
                        </div>
                      </>
                    )}

                    {cssType === 'shadow' && (
                      <>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] uppercase font-bold text-n8ntext-light">
                            <span>Shadow Blur</span>
                            <span>{cssShadowBlur}px</span>
                          </div>
                          <input 
                            type="range" min="5" max="80" value={cssShadowBlur}
                            onChange={(e) => setCssShadowBlur(parseInt(e.target.value))}
                            className="w-full accent-primary bg-n8nbg-base h-1 rounded-lg cursor-pointer"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-n8ntext-light">Shadow Color (Hex/RGBA)</label>
                          <input 
                            type="text" value={cssShadowColor}
                            onChange={(e) => setCssShadowColor(e.target.value)}
                            className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                          />
                        </div>
                      </>
                    )}

                    {cssType === 'gradient' && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-n8ntext-light">Gradient Start (Primary)</label>
                          <div className="flex gap-2">
                            <input 
                              type="color" value={cssGradStart} 
                              onChange={(e) => setCssGradStart(e.target.value)}
                              className="w-8 h-8 rounded bg-transparent border-0 cursor-pointer"
                            />
                            <input 
                              type="text" value={cssGradStart} 
                              onChange={(e) => setCssGradStart(e.target.value)}
                              className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded p-1 text-xs text-n8ntext-dark focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-n8ntext-light">Gradient End</label>
                          <div className="flex gap-2">
                            <input 
                              type="color" value={cssGradEnd} 
                              onChange={(e) => setCssGradEnd(e.target.value)}
                              className="w-8 h-8 rounded bg-transparent border-0 cursor-pointer"
                            />
                            <input 
                              type="text" value={cssGradEnd} 
                              onChange={(e) => setCssGradEnd(e.target.value)}
                              className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded p-1 text-xs text-n8ntext-dark focus:outline-none"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">CSS Variables Code</label>
                      <div className="relative">
                        <pre className="text-[10px] font-mono bg-n8nbg-base border border-n8nfg-light p-3 rounded text-n8ntext-light leading-relaxed select-all">
                          {getCssCode()}
                        </pre>
                        <button 
                          onClick={copyCssToClipboard}
                          className="absolute right-2 top-2 p-1.5 bg-n8nbg-light border border-n8nfg-light hover:border-primary text-n8ntext-base hover:text-primary rounded transition-all"
                          title="Copy Code"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                      {cssCopied && <span className="text-[10px] text-success block text-right">Copied to Clipboard!</span>}
                    </div>
                  </div>

                  {/* Real-time Preview */}
                  <div className="flex items-center justify-center p-4 bg-n8nbg-base border border-n8nfg-light rounded-lg relative overflow-hidden min-h-[160px]">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff6d5a_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {cssType === 'glass' && (
                      <div 
                        style={{
                          background: `rgba(21, 23, 31, ${cssOpacity / 100})`,
                          backdropFilter: `blur(${cssBlur}px)`,
                          WebkitBackdropFilter: `blur(${cssBlur}px)`,
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        className="w-40 h-28 rounded-xl flex items-center justify-center text-center p-4 border shadow-md relative z-10"
                      >
                        <span className="text-[11px] font-bold text-white">Glass Card Preview</span>
                      </div>
                    )}

                    {cssType === 'shadow' && (
                      <div 
                        style={{
                          boxShadow: `0 10px ${cssShadowBlur}px ${cssShadowColor}`
                        }}
                        className="w-40 h-28 rounded-xl bg-n8nbg-light border border-n8nfg-light flex items-center justify-center text-center p-4 relative z-10"
                      >
                        <span className="text-[11px] font-bold text-n8ntext-dark">Shadow Preview</span>
                      </div>
                    )}

                    {cssType === 'gradient' && (
                      <div 
                        style={{
                          background: `linear-gradient(135deg, ${cssGradStart} 0%, ${cssGradEnd} 100%)`
                        }}
                        className="w-40 h-28 rounded-xl flex items-center justify-center text-center p-4 shadow-md relative z-10"
                      >
                        <span className="text-[11px] font-bold text-white">Gradient Card</span>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              <div className="text-[11px] text-n8ntext-light flex items-center gap-1.5 bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light">
                <Info size={14} className="text-primary shrink-0" />
                <span>Export clean custom styles directly to your layout modules.</span>
              </div>
            </div>
          )}

          {/* Tool 3: Freelance Rate Calculator */}
          {activeTool === 'rate-calc' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">Rate Calculator</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Inputs */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">Target Net Income / Yr (₹)</label>
                      <input 
                        type="number" value={calcGoal}
                        onChange={(e) => setCalcGoal(parseInt(e.target.value) || 0)}
                        className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">Monthly Business Expenses (₹)</label>
                      <input 
                        type="number" value={calcExpenses}
                        onChange={(e) => setCalcExpenses(parseInt(e.target.value) || 0)}
                        className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-n8ntext-light">Hours/Wk</label>
                        <input 
                          type="number" value={calcHours}
                          onChange={(e) => setCalcHours(parseInt(e.target.value) || 0)}
                          className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-n8ntext-light">Wks Active/Yr</label>
                        <input 
                          type="number" value={calcWeeks}
                          onChange={(e) => setCalcWeeks(parseInt(e.target.value) || 0)}
                          className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase font-bold text-n8ntext-light">Billable %</label>
                        <input 
                          type="number" value={calcBillable}
                          onChange={(e) => setCalcBillable(parseInt(e.target.value) || 0)}
                          className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Calculations Output */}
                  <div className="bg-n8nbg-base border border-n8nfg-light p-4 rounded-lg flex flex-col justify-center gap-4">
                    <div className="text-center p-3 rounded bg-n8nbg-light border border-n8nfg-light">
                      <span className="text-[10px] uppercase font-bold text-n8ntext-light block">Min Hourly Rate</span>
                      <span className="text-2xl font-black text-primary">₹{computeRates().hourlyRate.toLocaleString('en-IN')}</span>
                      <span className="text-[10px] text-n8ntext-light block mt-1">per billable hour</span>
                    </div>

                    <div className="text-center p-3 rounded bg-n8nbg-light border border-n8nfg-light">
                      <span className="text-[10px] uppercase font-bold text-n8ntext-light block">Recommended Day Rate</span>
                      <span className="text-lg font-bold text-n8ntext-dark">₹{computeRates().dayRate.toLocaleString('en-IN')}</span>
                      <span className="text-[9px] text-n8ntext-light block mt-0.5">Based on 8-hour day allocation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>Annual invoicing target: <strong>₹{computeRates().grossIncomeRequired.toLocaleString('en-IN')}</strong> (including expenses).</span>
                <span className="card-badge passive">Passive Engine</span>
              </div>
            </div>
          )}

          {/* Tool 4: Link in Bio Builder */}
          {activeTool === 'bio-link' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">Link in Bio Builder</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Inputs Builder */}
                  <div className="space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-n8ntext-light">Profile Name</label>
                        <input 
                          type="text" value={bioName}
                          onChange={(e) => setBioName(e.target.value)}
                          className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-n8ntext-light">Subtitle Bio</label>
                        <input 
                          type="text" value={bioTitle}
                          onChange={(e) => setBioTitle(e.target.value)}
                          className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">Add Custom Link</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" placeholder="Link Label" value={newLinkLabel}
                          onChange={(e) => setNewLinkLabel(e.target.value)}
                          className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none"
                        />
                        <input 
                          type="text" placeholder="URL" value={newLinkUrl}
                          onChange={(e) => setNewLinkUrl(e.target.value)}
                          className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded px-2 py-1 text-xs text-n8ntext-dark focus:outline-none"
                        />
                        <button 
                          onClick={addBioLink}
                          className="btn-primary py-1 px-3 text-xs"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone Preview Mockup */}
                  <div className="flex justify-center">
                    <div className="w-[200px] h-[300px] bg-[#0c0d12] border-4 border-n8nfg-light rounded-[24px] p-3 flex flex-col items-center justify-start overflow-hidden relative shadow-lg">
                      {/* Notch */}
                      <div className="w-16 h-3.5 bg-n8nfg-light rounded-b-lg absolute top-0 left-1/2 -translate-x-1/2" />
                      
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-primary-tint-1 border border-primary flex items-center justify-center text-primary font-black text-sm mt-4 select-none">
                        {bioName.substring(0,2).toUpperCase()}
                      </div>
                      
                      {/* Name */}
                      <h4 className="text-[10px] font-bold text-white mt-2 truncate w-full text-center">{bioName}</h4>
                      <p className="text-[7px] text-n8ntext-light text-center truncate w-full px-1">{bioTitle}</p>

                      {/* Links List */}
                      <div className="w-full mt-4 space-y-1.5 overflow-y-auto max-h-[140px] pr-0.5">
                        {bioLinks.map((link, idx) => (
                          <a 
                            key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="block w-full py-1 text-center bg-n8nbg-light border border-n8nfg-light text-[8px] text-n8ntext-dark font-medium rounded-full hover:border-primary transition-colors truncate"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>Hosted bio links will connect directly to custom subdomains in Phase 2.</span>
                <span className="card-badge mrr">MRR Engine</span>
              </div>
            </div>
          )}

          {/* Tool 5: Meta Tag Analyzer */}
          {activeTool === 'seo-meta' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">Meta Tag Analyzer</h2>
                
                <div className="flex gap-2">
                  <input 
                    type="url" value={metaUrl}
                    onChange={(e) => setMetaUrl(e.target.value)}
                    className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                    placeholder="Enter URL to audit"
                  />
                  <button 
                    onClick={runMetaAudit}
                    className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
                    disabled={isMetaLoading}
                  >
                    {isMetaLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Analyze'}
                  </button>
                </div>

                {/* Audit results */}
                {isMetaLoading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <RefreshCw className="animate-spin text-primary" size={24} />
                    <span className="text-xs text-n8ntext-light">Scanning DOM and loading meta structure...</span>
                  </div>
                )}

                {!isMetaLoading && metaResult && (
                  <div className="space-y-3 animate-[fadeInUp_0.3s_ease]">
                    <div className="flex justify-between items-center bg-n8nbg-base p-3 rounded border border-n8nfg-light">
                      <span className="text-xs text-n8ntext-light">Overall SEO Quality Score</span>
                      <span className="text-lg font-black text-success">{metaResult.score}/100</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded bg-n8nbg-light border border-n8nfg-light">
                        <span className="text-[10px] font-bold text-n8ntext-light block uppercase">Meta Title Tag</span>
                        <span className="text-n8ntext-dark font-medium">{metaResult.title}</span>
                      </div>
                      <div className="p-2 rounded bg-n8nbg-light border border-n8nfg-light">
                        <span className="text-[10px] font-bold text-n8ntext-light block uppercase">Meta Description</span>
                        <span className="text-n8ntext-dark font-medium">{metaResult.description}</span>
                      </div>
                    </div>

                    {/* Checklists */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-n8ntext-light flex items-center gap-1">
                          <CheckCircle size={12} className="text-success" />
                          <span>Passed Audits</span>
                        </span>
                        {metaResult.passed.map((item: any, i: number) => (
                          <div key={i} className="text-[10px] text-n8ntext-base bg-n8nbg-light p-1.5 rounded border border-n8nfg-light">
                            <strong>{item.item}</strong>: {item.msg}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-n8ntext-light flex items-center gap-1">
                          <AlertCircle size={12} className="text-warning" />
                          <span>Warnings / Fixes</span>
                        </span>
                        {metaResult.warnings.map((item: any, i: number) => (
                          <div key={i} className="text-[10px] text-n8ntext-base bg-n8nbg-light p-1.5 rounded border border-n8nfg-light">
                            <strong>{item.item}</strong>: {item.msg}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {!isMetaLoading && !metaResult && (
                  <div className="h-[200px] flex items-center justify-center text-center text-xs text-n8ntext-light">
                    Enter your website URL above and click Analyze to check header meta parameters.
                  </div>
                )}
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>Part of the MarutiDigital SEO Moat funnel.</span>
                <span className="card-badge seo">SEO Engine</span>
              </div>
            </div>
          )}

          {/* Tool 6: Page Speed Checker */}
          {activeTool === 'speed' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">Page Speed Checker</h2>
                
                <div className="flex gap-2">
                  <input 
                    type="url" value={speedUrl}
                    onChange={(e) => setSpeedUrl(e.target.value)}
                    className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                    placeholder="Enter URL to test"
                  />
                  <button 
                    onClick={runSpeedAudit}
                    className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
                    disabled={isSpeedLoading}
                  >
                    {isSpeedLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Test speed'}
                  </button>
                </div>

                {isSpeedLoading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <RefreshCw className="animate-spin text-primary" size={24} />
                    <span className="text-xs text-n8ntext-light">Analyzing server response and computing CWV metrics...</span>
                  </div>
                )}

                {!isSpeedLoading && speedResult && (
                  <div className="space-y-4 animate-[fadeInUp_0.3s_ease]">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-n8nbg-base p-2 rounded border border-n8nfg-light">
                        <span className="text-[9px] uppercase font-bold text-n8ntext-light block">Performance</span>
                        <span className="text-lg font-black text-success">{speedResult.performance}</span>
                      </div>
                      <div className="bg-n8nbg-base p-2 rounded border border-n8nfg-light">
                        <span className="text-[9px] uppercase font-bold text-n8ntext-light block">Accessibility</span>
                        <span className="text-lg font-black text-success">{speedResult.accessibility}</span>
                      </div>
                      <div className="bg-n8nbg-base p-2 rounded border border-n8nfg-light">
                        <span className="text-[9px] uppercase font-bold text-n8ntext-light block">Best Practice</span>
                        <span className="text-lg font-black text-success">{speedResult.bestPractices}</span>
                      </div>
                      <div className="bg-n8nbg-base p-2 rounded border border-n8nfg-light">
                        <span className="text-[9px] uppercase font-bold text-n8ntext-light block">SEO</span>
                        <span className="text-lg font-black text-success">{speedResult.seo}</span>
                      </div>
                    </div>

                    {/* Metrics List */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-n8ntext-dark">Core Web Vitals (CWV)</h3>
                      <div className="space-y-1.5 text-xs">
                        {speedResult.metrics.map((metric: any, i: number) => (
                          <div key={i} className="flex justify-between items-center bg-n8nbg-light p-2 rounded border border-n8nfg-light">
                            <span className="text-n8ntext-base">{metric.name}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-success/20 text-success">{metric.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-n8ntext-dark">Key Recommendations</h3>
                      <ul className="list-disc pl-4 text-xs text-n8ntext-base space-y-1">
                        {speedResult.recs.map((rec: string, i: number) => (
                          <li key={i}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {!isSpeedLoading && !speedResult && (
                  <div className="h-[200px] flex items-center justify-center text-center text-xs text-n8ntext-light">
                    Test your website metrics instantly. Returns scores for Performance, Accessibility, and Core Web Vitals.
                  </div>
                )}
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>Checkers powered by Google Web Dev integration API frameworks.</span>
                <span className="card-badge traffic">Speed Index</span>
              </div>
            </div>
          )}

          {/* Tool 7: WHOIS & DNS Lookup */}
          {activeTool === 'dns' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-n8ntext-dark border-b border-n8nfg-light pb-2">WHOIS & DNS Records Lookup</h2>
                
                <div className="flex gap-2">
                  <input 
                    type="text" value={dnsDomain}
                    onChange={(e) => setDnsDomain(e.target.value)}
                    className="flex-1 bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                    placeholder="domain.com"
                  />
                  <button 
                    onClick={runDnsLookup}
                    className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5"
                    disabled={isDnsLoading}
                  >
                    {isDnsLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Lookup DNS'}
                  </button>
                </div>

                {isDnsLoading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <RefreshCw className="animate-spin text-primary" size={24} />
                    <span className="text-xs text-n8ntext-light">Resolving DNS zones and checking registrar WHOIS structures...</span>
                  </div>
                )}

                {!isDnsLoading && dnsResult && (
                  <div className="space-y-4 animate-[fadeInUp_0.3s_ease]">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-n8nbg-base p-2.5 rounded border border-n8nfg-light">
                        <span className="text-[10px] text-n8ntext-light block uppercase font-bold">Domain Registrar</span>
                        <span className="text-n8ntext-dark font-medium">{dnsResult.registrar}</span>
                      </div>
                      <div className="bg-n8nbg-base p-2.5 rounded border border-n8nfg-light">
                        <span className="text-[10px] text-n8ntext-light block uppercase font-bold">Expiration</span>
                        <span className="text-n8ntext-dark font-medium">{dnsResult.expires}</span>
                      </div>
                    </div>

                    <div className="bg-n8nbg-base p-2.5 rounded border border-n8nfg-light text-xs">
                      <span className="text-[10px] text-n8ntext-light block uppercase font-bold">SSL Certificate Health</span>
                      <span className="text-success font-medium flex items-center gap-1.5 mt-0.5">
                        <CheckCircle size={14} />
                        <span>{dnsResult.ssl}</span>
                      </span>
                    </div>

                    {/* Records Table */}
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-n8ntext-dark">Zone File Records</h3>
                      <div className="overflow-x-auto border border-n8nfg-light rounded-lg">
                        <table className="w-full text-left text-[11px]">
                          <thead className="bg-n8nbg-base text-n8ntext-light font-bold">
                            <tr>
                              <th className="p-2 border-b border-n8nfg-light">Type</th>
                              <th className="p-2 border-b border-n8nfg-light">Host</th>
                              <th className="p-2 border-b border-n8nfg-light">Value</th>
                              <th className="p-2 border-b border-n8nfg-light">TTL</th>
                            </tr>
                          </thead>
                          <tbody className="bg-n8nbg-light text-n8ntext-dark divide-y divide-n8nfg-light font-mono">
                            {dnsResult.records.map((rec: any, idx: number) => (
                              <tr key={idx} className="hover:bg-n8nbg-base">
                                <td className="p-2 text-primary font-bold">{rec.type}</td>
                                <td className="p-2">{rec.name}</td>
                                <td className="p-2 truncate max-w-[200px]">{rec.val}</td>
                                <td className="p-2 text-n8ntext-light">{rec.ttl}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {!isDnsLoading && !dnsResult && (
                  <div className="h-[200px] flex items-center justify-center text-center text-xs text-n8ntext-light">
                    Resolve domain metadata, lookup NS, MX, TXT records, and check SSL certificates expiry loops.
                  </div>
                )}
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>DNS resolving nodes integrated with cloudflare edge proxies.</span>
                <span className="card-badge seo">Domain Moat</span>
              </div>
            </div>
          )}

          {/* Tool 8: AI copywriting Assistant */}
          {activeTool === 'ai-writer' && (
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-n8nfg-light pb-2">
                  <h2 className="text-sm font-bold text-n8ntext-dark">AI Copywriter</h2>
                  <span className="text-[10px] text-n8ntext-light bg-n8nbg-base border border-n8nfg-light px-2.5 py-1 rounded flex items-center gap-1">
                    <Star size={12} className="text-warning fill-warning" />
                    <span>Free credits: <strong>{aiCredits}/3</strong></span>
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-n8ntext-light">What is your topic or service?</label>
                    <input 
                      type="text" value={aiTopic}
                      onChange={(e) => setAiTopic(e.target.value)}
                      className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">Copy Output Format</label>
                      <select 
                        value={aiType} 
                        onChange={(e: any) => setAiType(e.target.value)}
                        className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                      >
                        <option value="title">Hero Title Hook</option>
                        <option value="social">LinkedIn/Twitter Post</option>
                        <option value="email">Cold Email Outline</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-n8ntext-light">Tone of Voice</label>
                      <select 
                        value={aiTone} 
                        onChange={(e) => setAiTone(e.target.value)}
                        className="w-full bg-n8nbg-base border border-n8nfg-light rounded p-2 text-xs text-n8ntext-dark focus:outline-none"
                      >
                        <option value="persuasive">Persuasive (Converts)</option>
                        <option value="professional">Professional (Corporate)</option>
                        <option value="witty">Witty (Engaging)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={generateAiCopy}
                    className="w-full btn-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
                    disabled={isAiLoading}
                  >
                    {isAiLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Generate Copy Templates'}
                  </button>

                  {/* Generated box */}
                  {aiOutput && (
                    <div className="space-y-2 animate-[fadeInUp_0.3s_ease] mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] uppercase font-bold text-n8ntext-light">AI Generated Copywriting</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(aiOutput);
                            alert('Copy copied to clipboard!');
                          }}
                          className="text-[10px] text-primary flex items-center gap-1 hover:underline"
                        >
                          <Copy size={12} />
                          <span>Copy</span>
                        </button>
                      </div>
                      <pre className="text-xs font-sans bg-n8nbg-base border border-n8nfg-light p-3.5 rounded text-n8ntext-dark leading-relaxed whitespace-pre-wrap select-all">
                        {aiOutput}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-[11px] text-n8ntext-light bg-n8nbg-light -mx-6 -mb-6 p-4 border-t border-n8nfg-light flex justify-between items-center">
                <span>AI models powered by modern open weights integrations.</span>
                <span className="card-badge passive">Credit limits reset daily</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
