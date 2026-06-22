'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  ShieldCheck, 
  Heart, 
  Clock, 
  Check, 
  Globe, 
  Building, 
  Briefcase, 
  ShoppingCart, 
  User, 
  Mail, 
  Phone, 
  HelpCircle,
  Sparkles,
  MapPin
} from 'lucide-react';
import { supabase } from '@/utils/supabaseClient';

export default function FreeWebsitePage() {
  const formRef = useRef<HTMLDivElement>(null);
  
  // Captcha state
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaExpected, setCaptchaExpected] = useState(0);

  // Initializing captcha challenge
  const refreshCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setNum1(n1);
    setNum2(n2);
    setCaptchaExpected(n1 + n2);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  // Form steps state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    websiteType: '', // 'Service', 'E-commerce', 'Both', 'Portfolio', 'Other'

    // Step 2
    name: '',
    businessName: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    country: 'India',
    businessType: '', // 'individual', 'partnership', 'company', etc.
    businessAge: '', // '< 1 year', '1-3 years', '3+ years'

    // Step 3
    industry: '',
    description: '',

    // Step 4
    hasDomain: null as boolean | null,
    willingToPayDomain: '',

    // Step 5
    hasHosting: null as boolean | null,
    willingToPayHosting: '',

    // Step 6
    hasLogo: null as boolean | null,
    logoUrl: '',
    hasPhotos: null as boolean | null,

    // Step 7 (Conditional)
    productsCount: '',
    productCategories: '',
    needsOnlinePayment: null as boolean | null,
    needsShippingOptions: null as boolean | null,

    servicesList: '',
    needsOnlineBooking: null as boolean | null,
    serviceArea: '', // 'Locally', 'Nationally', 'Globally'

    // Step 8
    featuresWanted: [] as string[],
    contentStatus: '',
    socialMedia: '',
    timeline: '',

    // Step 9
    referralSource: '',
    honeypot: '', // bot check
    captchaAnswer: '',
    confirmAccurate: false,
    confirmCosts: false,
    confirmContact: false,
  });

  // Logo file state
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | null>(null);

  // Form submission / UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    success: boolean;
    applicationId: string;
    applicantName: string;
  } | null>(null);

  // Validation errors per step
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Feature Options for Step 8
  const featureOptions = [
    { id: 'about', label: 'About Page' },
    { id: 'gallery', label: 'Photo Gallery / Portfolio' },
    { id: 'blog', label: 'Blog or News Articles' },
    { id: 'reviews', label: 'Customer Reviews / Testimonials' },
    { id: 'maps', label: 'Google Maps Integration' },
    { id: 'whatsapp', label: 'WhatsApp Chat Button' },
    { id: 'booking', label: 'Online Booking System' },
    { id: 'payment', label: 'Online Payment Integration' },
    { id: 'faq', label: 'FAQ Section' },
    { id: 'contact', label: 'Custom Contact Form' },
  ];

  // Scroll to form view on start application or next step
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle Logo file select
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreviewUrl(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, logoFile: '' }));
    }
  };

  // Toggle Features Wanted Checkbox
  const toggleFeature = (featureId: string) => {
    setFormData(prev => {
      const current = [...prev.featuresWanted];
      if (current.includes(featureId)) {
        return { ...prev, featuresWanted: current.filter(id => id !== featureId) };
      } else {
        return { ...prev, featuresWanted: [...current, featureId] };
      }
    });
  };

  // Step Validation logic
  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      if (!formData.websiteType) stepErrors.websiteType = 'Please select a website type.';
    }

    if (step === 2) {
      if (!formData.name.trim()) stepErrors.name = 'Full name is required.';
      if (!formData.businessName.trim()) stepErrors.businessName = 'Business name is required.';
      if (!formData.email.trim()) {
        stepErrors.email = 'Email address is required.';
      } else if (!emailRegex.test(formData.email)) {
        stepErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) stepErrors.phone = 'Phone number is required.';
      if (!formData.city.trim()) stepErrors.city = 'City is required.';
      if (!formData.businessType) stepErrors.businessType = 'Please select your business structure.';
      if (!formData.businessAge) stepErrors.businessAge = 'Please tell us how long your business has run.';
    }

    if (step === 3) {
      if (!formData.industry.trim()) stepErrors.industry = 'Industry/niche is required.';
      if (!formData.description.trim()) stepErrors.description = 'Business description is required.';
      else if (formData.description.trim().length < 20) {
        stepErrors.description = 'Please write at least 20 characters describing your business.';
      }
    }

    if (step === 4) {
      if (formData.hasDomain === null) {
        stepErrors.hasDomain = 'Please specify if you own a domain name.';
      } else if (formData.hasDomain === false && !formData.willingToPayDomain) {
        stepErrors.willingToPayDomain = 'Please select if you are willing to pay for a domain.';
      }
    }

    if (step === 5) {
      if (formData.hasHosting === null) {
        stepErrors.hasHosting = 'Please specify if you own website hosting.';
      } else if (formData.hasHosting === false && !formData.willingToPayHosting) {
        stepErrors.willingToPayHosting = 'Please select if you are willing to pay for hosting.';
      }
    }

    if (step === 6) {
      if (formData.hasLogo === null) {
        stepErrors.hasLogo = 'Please specify if you have a logo.';
      }
      if (formData.hasPhotos === null) {
        stepErrors.hasPhotos = 'Please specify if you have photos.';
      }
    }

    if (step === 7) {
      const isEcommerce = formData.websiteType === 'E-commerce' || formData.websiteType === 'Both';
      const isService = formData.websiteType === 'Service' || formData.websiteType === 'Both' || formData.websiteType === 'Portfolio' || formData.websiteType === 'Other';
      
      if (isEcommerce) {
        if (!formData.productsCount) stepErrors.productsCount = 'Please select your products count.';
        if (!formData.productCategories.trim()) stepErrors.productCategories = 'Product categories are required.';
        if (formData.needsOnlinePayment === null) stepErrors.needsOnlinePayment = 'Please specify payment gateway needs.';
        if (formData.needsShippingOptions === null) stepErrors.needsShippingOptions = 'Please specify shipping system needs.';
      } else if (isService) {
        if (!formData.servicesList.trim()) stepErrors.servicesList = 'Please summarize your service list.';
        if (formData.needsOnlineBooking === null) stepErrors.needsOnlineBooking = 'Please specify booking needs.';
        if (!formData.serviceArea) stepErrors.serviceArea = 'Please select your service region.';
      }
    }

    if (step === 8) {
      if (!formData.contentStatus) stepErrors.contentStatus = 'Please select content readiness status.';
      if (!formData.timeline) stepErrors.timeline = 'Please select your launch timeline.';
    }

    if (step === 9) {
      if (!formData.captchaAnswer.trim()) {
        stepErrors.captchaAnswer = 'Please solve the security sum.';
      } else if (parseInt(formData.captchaAnswer, 10) !== captchaExpected) {
        stepErrors.captchaAnswer = 'Incorrect captcha answer. Try again.';
      }
      if (!formData.confirmAccurate) stepErrors.confirmAccurate = 'Required';
      if (!formData.confirmCosts) stepErrors.confirmCosts = 'Required';
      if (!formData.confirmContact) stepErrors.confirmContact = 'Required';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      scrollToForm();
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
    scrollToForm();
  };

  // Submit form payload
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      let uploadedLogoUrl = '';

      // 1. Upload Logo if selected and Supabase configured
      if (logoFile) {
        setUploading(true);
        if (supabase) {
          const fileExt = logoFile.name.split('.').pop();
          const fileName = `logos/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
          
          const { data, error: uploadError } = await supabase.storage
            .from('logos')
            .upload(fileName, logoFile, {
              cacheControl: '3600',
              upsert: false
            });

          if (uploadError) {
            console.error('❌ Logo Upload failed:', uploadError);
            // Simulate fallback mock URL
            uploadedLogoUrl = `MOCK_URL_FALLBACK_DUE_TO_ERROR_${Date.now()}`;
          } else if (data) {
            const { data: publicUrlData } = supabase.storage
              .from('logos')
              .getPublicUrl(fileName);
            uploadedLogoUrl = publicUrlData.publicUrl;
          }
        } else {
          // Simulate local file upload progress in frontend
          for (let p = 0; p <= 100; p += 20) {
            setUploadProgress(p);
            await new Promise(r => setTimeout(r, 100));
          }
          uploadedLogoUrl = `https://faioihkxquqlqwzjbedm.supabase.co/storage/v1/object/public/logos/placeholder.png`;
        }
        setUploading(false);
      }

      // 2. POST payload to submission API endpoint
      const response = await fetch('/api/free-website/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          logoUrl: uploadedLogoUrl,
          captchaExpected: captchaExpected.toString(),
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit application. Please try again.');
      }

      // 3. Success state
      setSubmittedData({
        success: true,
        applicationId: responseData.applicationId,
        applicantName: responseData.applicantName,
      });

      // Clear state and local data
      setFormData({
        websiteType: '',
        name: '',
        businessName: '',
        email: '',
        phone: '',
        whatsapp: '',
        city: '',
        country: 'India',
        businessType: '',
        businessAge: '',
        industry: '',
        description: '',
        hasDomain: null,
        willingToPayDomain: '',
        hasHosting: null,
        willingToPayHosting: '',
        hasLogo: null,
        logoUrl: '',
        hasPhotos: null,
        productsCount: '',
        productCategories: '',
        needsOnlinePayment: null,
        needsShippingOptions: null,
        servicesList: '',
        needsOnlineBooking: null,
        serviceArea: '',
        featuresWanted: [],
        contentStatus: '',
        socialMedia: '',
        timeline: '',
        referralSource: '',
        honeypot: '',
        captchaAnswer: '',
        confirmAccurate: false,
        confirmCosts: false,
        confirmContact: false,
      });
      setLogoFile(null);
      setLogoPreviewUrl(null);
      setCurrentStep(1);

    } catch (err: any) {
      console.error('❌ Form submission error:', err);
      setSubmitError(err.message || 'An error occurred during submission. Please try again.');
      refreshCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. TOP OF THE PAGE (HEADING SECTION) */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b0f19] via-[#0d1326] to-[#070911] border border-primary/10 text-white p-8 md:p-12 lg:p-16 shadow-lg flex flex-col items-center text-center stagger-in">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        {/* 60% Highlight badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <ShieldCheck size={14} />
          <span>60% of applicants get approved</span>
        </div>

        {/* Big heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
          Get a Professionally Built Website — <span className="text-primary font-black">100% Free</span>
        </h1>

        {/* Subhead text */}
        <p className="text-n8ntext-base md:text-base max-w-2xl mt-4 leading-relaxed text-slate-300">
          We build free websites for businesses we believe in. Fill out the application below — it takes about 5 minutes — and our team will review it personally.
        </p>

        {/* 3 small trust points */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-8 w-full">
          <div className="flex items-center gap-2 bg-[#ffffff]/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-200">
            <Check size={12} className="text-primary" />
            <span>No design or development fees</span>
          </div>
          <div className="flex items-center gap-2 bg-[#ffffff]/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-200">
            <Globe size={12} className="text-primary" />
            <span>For e-commerce & service businesses</span>
          </div>
          <div className="flex items-center gap-2 bg-[#ffffff]/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-200">
            <Clock size={12} className="text-primary" />
            <span>Reviewed within 3–5 business days</span>
          </div>
        </div>

        {/* CTA Button */}
        {!submittedData && (
          <button 
            onClick={scrollToForm}
            className="mt-8 px-8 py-3.5 rounded-lg bg-primary text-white font-bold hover:bg-opacity-95 hover:shadow-glow transform active:scale-98 transition-all flex items-center gap-2"
          >
            <span>Start Application</span>
            <ArrowRight size={16} />
          </button>
        )}
      </section>

      {/* 2. OVERALL LOOK & THE FORM CONTAINER */}
      <div ref={formRef} className="max-w-3xl mx-auto stagger-in scroll-mt-20">
        
        {submittedData ? (
          /* 4. THANK YOU STATE (Replaces form on same page) */
          <div className="bg-n8nbg-light border border-n8nfg-light rounded-xl p-8 md:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-success to-primary" />
            
            {/* Checkmark icon */}
            <div className="w-16 h-16 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center mx-auto text-[#10b981]">
              <CheckCircle2 size={36} className="animate-bounce" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Application Received! 🎉</h2>
            
            {/* 60% approval badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-xs font-semibold mx-auto">
              <ShieldCheck size={13} />
              <span>60% of applications approved</span>
            </div>

            {/* Personalized thank you message */}
            <p className="text-sm text-n8ntext-base max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{submittedData.applicantName}</span> — your application has been submitted successfully.
            </p>

            {/* Auto-generated ID */}
            <div className="bg-n8nbg-base border border-n8nfg-light rounded-lg py-3 px-4 max-w-xs mx-auto text-center">
              <span className="text-xs text-n8ntext-light block uppercase tracking-wider">Application ID</span>
              <span className="text-lg font-mono font-bold text-primary tracking-widest">{submittedData.applicationId}</span>
            </div>

            {/* expectation timeline */}
            <p className="text-xs text-n8ntext-light max-w-sm mx-auto">
              Our team reviews every application and will contact you within 3–5 business days by email, WhatsApp, or phone.
            </p>

            {/* back to homepage */}
            <div className="pt-4">
              <Link href="/" className="btn-primary py-2.5 px-6 font-semibold inline-flex items-center gap-1.5">
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        ) : (
          /* FORM STRUCTURE */
          <div className="bg-n8nbg-lighter border border-n8nfg-light rounded-xl p-6 md:p-8 shadow-lg space-y-6">
            
            {/* Progress bar at the top */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-n8ntext-light">
                <span>STEP {currentStep} OF 9</span>
                <span className="text-primary font-mono">{Math.round((currentStep / 9) * 100)}% COMPLETE</span>
              </div>
              <div className="w-full h-1.5 bg-n8nbg-base rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300 rounded-full shadow-glow"
                  style={{ width: `${(currentStep / 9) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* === STEP 1: What kind of website? === */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">What kind of website do you need?</h2>
                    <p className="text-xs text-n8ntext-light">Select the primary model that fits your business goals.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'Service', label: 'Service Business', desc: 'Consulting, salon, clinic, agency, coaching, etc.', icon: Briefcase },
                      { id: 'E-commerce', label: 'E-commerce (Selling Products)', desc: 'Online storefront, inventory, digital/physical items.', icon: ShoppingCart },
                      { id: 'Both', label: 'Both Products & Services', desc: 'Sell services and products on a single store.', icon: Sparkles },
                      { id: 'Portfolio', label: 'Portfolio Website', desc: 'Showcasing work, design, photography, resumes.', icon: User },
                      { id: 'Other', label: 'Other Type', desc: 'Blogs, directories, customized requirements.', icon: HelpCircle },
                    ].map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = formData.websiteType === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, websiteType: opt.id }));
                            setErrors(prev => ({ ...prev, websiteType: '' }));
                          }}
                          className={`p-4 rounded-lg border text-left flex items-start gap-4 transition-all hover:bg-n8nbg-base ${
                            isSelected 
                              ? 'border-primary bg-primary/5 text-white ring-1 ring-primary' 
                              : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base'
                          }`}
                        >
                          <div className={`p-2 rounded bg-n8nbg-base border ${isSelected ? 'border-primary text-primary' : 'border-n8nfg-light text-n8ntext-light'}`}>
                            <Icon size={18} />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h3 className="text-sm font-bold text-white">{opt.label}</h3>
                            <p className="text-xs text-n8ntext-light leading-normal">{opt.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.websiteType && <span className="text-xs text-danger block mt-1">{errors.websiteType}</span>}
                </div>
              )}

              {/* === STEP 2: About You & Your Business === */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">About You & Your Business</h2>
                    <p className="text-xs text-n8ntext-light">Introduce yourself and your business so we can review it.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">Your Full Name <span className="text-primary">*</span></label>
                      <input 
                        type="text" 
                        value={formData.name} 
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe" 
                        className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.name ? 'border-danger' : 'border-n8nfg-light'}`}
                      />
                      {errors.name && <span className="text-xs text-danger">{errors.name}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">Registered/Business Name <span className="text-primary">*</span></label>
                      <input 
                        type="text" 
                        value={formData.businessName} 
                        onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        placeholder="Acme Corp" 
                        className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.businessName ? 'border-danger' : 'border-n8nfg-light'}`}
                      />
                      {errors.businessName && <span className="text-xs text-danger">{errors.businessName}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">Email Address <span className="text-primary">*</span></label>
                      <input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com" 
                        className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.email ? 'border-danger' : 'border-n8nfg-light'}`}
                      />
                      {errors.email && <span className="text-xs text-danger">{errors.email}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">Phone Number <span className="text-primary">*</span></label>
                      <input 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX" 
                        className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.phone ? 'border-danger' : 'border-n8nfg-light'}`}
                      />
                      {errors.phone && <span className="text-xs text-danger">{errors.phone}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white font-medium">WhatsApp Number <span className="text-n8ntext-light text-[10px]">(Optional)</span></label>
                      <input 
                        type="tel" 
                        value={formData.whatsapp} 
                        onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        placeholder="Same as phone or different" 
                        className="w-full p-2.5 rounded border border-n8nfg-light text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white font-medium">City <span className="text-primary">*</span></label>
                      <input 
                        type="text" 
                        value={formData.city} 
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="New Delhi" 
                        className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.city ? 'border-danger' : 'border-n8nfg-light'}`}
                      />
                      {errors.city && <span className="text-xs text-danger">{errors.city}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white font-medium">Type of Business <span className="text-primary">*</span></label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'Individual', label: 'Individual / Freelance' },
                          { id: 'Partnership', label: 'Partnership' },
                          { id: 'Company', label: 'Private Limited / LLC' },
                          { id: 'NGO', label: 'NGO / Non-Profit' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, businessType: opt.id }))}
                            className={`p-2 text-xs rounded border text-center transition-all ${
                              formData.businessType === opt.id 
                                ? 'border-primary bg-primary/10 text-white' 
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.businessType && <span className="text-xs text-danger block mt-1">{errors.businessType}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white font-medium">How long has it been running? <span className="text-primary">*</span></label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'New Idea', label: 'New Idea' },
                          { id: '< 1 Year', label: '< 1 Year' },
                          { id: '1-3 Years', label: '1 - 3 Years' },
                          { id: '3+ Years', label: '3+ Years' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, businessAge: opt.id }))}
                            className={`p-2 text-xs rounded border text-center transition-all ${
                              formData.businessAge === opt.id 
                                ? 'border-primary bg-primary/10 text-white' 
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.businessAge && <span className="text-xs text-danger block mt-1">{errors.businessAge}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* === STEP 3: Industry & Niche === */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Industry & Business Details</h2>
                    <p className="text-xs text-n8ntext-light">Briefly explain what your business does and the market you operate in.</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white font-medium">What is your industry or niche? <span className="text-primary">*</span></label>
                    <input 
                      type="text" 
                      value={formData.industry} 
                      onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                      placeholder="e.g. Handmade Soaps, Travel Agency, Tax Consultancy" 
                      className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.industry ? 'border-danger' : 'border-n8nfg-light'}`}
                    />
                    {errors.industry && <span className="text-xs text-danger block">{errors.industry}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white font-medium">Briefly describe what your business does <span className="text-primary">*</span></label>
                    <textarea 
                      rows={4}
                      value={formData.description} 
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="e.g. We specialize in organic skincare products crafted using local ingredients. We sell primarily online and run workshops teaching organic soap-making." 
                      className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary resize-none ${errors.description ? 'border-danger' : 'border-n8nfg-light'}`}
                    />
                    <div className="flex justify-between items-center text-[10px] text-n8ntext-light">
                      <span>Minimum 20 characters</span>
                      <span>{formData.description.length} chars</span>
                    </div>
                    {errors.description && <span className="text-xs text-danger block">{errors.description}</span>}
                  </div>
                </div>
              )}

              {/* === STEP 4: Domain === */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Do you already have a domain name?</h2>
                    <p className="text-xs text-n8ntext-light">A domain name is your website address (e.g., marutidigital.in).</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hasDomain: true, willingToPayDomain: '' }))}
                      className={`p-6 rounded-lg border text-center transition-all ${
                        formData.hasDomain === true
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                      }`}
                    >
                      <h3 className="text-sm font-bold block mb-1">Yes, I already own one</h3>
                      <span className="text-xs text-n8ntext-light">We will connect your existing domain.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hasDomain: false }))}
                      className={`p-6 rounded-lg border text-center transition-all ${
                        formData.hasDomain === false
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                      }`}
                    >
                      <h3 className="text-sm font-bold block mb-1">No, I do not have one</h3>
                      <span className="text-xs text-n8ntext-light">We will assist you in acquiring one.</span>
                    </button>
                  </div>
                  {errors.hasDomain && <span className="text-xs text-danger block">{errors.hasDomain}</span>}

                  {formData.hasDomain === false && (
                    <div className="p-4 rounded-lg bg-n8nbg-base border border-n8nfg-light space-y-3 stagger-in">
                      <div className="space-y-1">
                        <p className="text-xs text-slate-300">
                          📌 <strong>Domain cost notice:</strong> Registering a domain name (like .com or .in) usually costs <strong>$10–$20 per year</strong>. This cost goes to registrars (e.g. GoDaddy/Namecheap) and is separate from our free design service.
                        </p>
                        <p className="text-xs font-bold text-white mt-2">Are you willing to purchase one for your website?</p>
                      </div>

                      <div className="flex gap-3">
                        {[
                          { id: 'Yes', label: 'Yes, I am willing to buy a domain' },
                          { id: 'No', label: 'No, I cannot spend on a domain' },
                          { id: 'Need Help', label: 'I need guidance before choosing' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, willingToPayDomain: opt.id }))}
                            className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                              formData.willingToPayDomain === opt.id
                                ? 'border-primary bg-primary/10 text-white'
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.willingToPayDomain && <span className="text-xs text-danger block">{errors.willingToPayDomain}</span>}
                    </div>
                  )}
                </div>
              )}

              {/* === STEP 5: Hosting === */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Do you already have web hosting?</h2>
                    <p className="text-xs text-n8ntext-light">Hosting stores your website files so they can be viewed on the internet.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hasHosting: true, willingToPayHosting: '' }))}
                      className={`p-6 rounded-lg border text-center transition-all ${
                        formData.hasHosting === true
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                      }`}
                    >
                      <h3 className="text-sm font-bold block mb-1">Yes, I already have hosting</h3>
                      <span className="text-xs text-n8ntext-light">We can deploy on your hosting account.</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, hasHosting: false }))}
                      className={`p-6 rounded-lg border text-center transition-all ${
                        formData.hasHosting === false
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                      }`}
                    >
                      <h3 className="text-sm font-bold block mb-1">No, I do not have hosting</h3>
                      <span className="text-xs text-n8ntext-light">We will explain deployment choices.</span>
                    </button>
                  </div>
                  {errors.hasHosting && <span className="text-xs text-danger block">{errors.hasHosting}</span>}

                  {formData.hasHosting === false && (
                    <div className="p-4 rounded-lg bg-n8nbg-base border border-n8nfg-light space-y-3 stagger-in">
                      <div className="space-y-1">
                        <p className="text-xs text-slate-300">
                          📌 <strong>Web hosting cost notice:</strong> Web hosting servers typically cost <strong>$20–$40 per year</strong> for basic business sites. Hosting providers handle server upkeep. This is separate from our free development service.
                        </p>
                        <p className="text-xs font-bold text-white mt-2">Are you willing to pay for hosting setup?</p>
                      </div>

                      <div className="flex gap-3">
                        {[
                          { id: 'Yes', label: 'Yes, I can pay for hosting' },
                          { id: 'No', label: 'No, I need a 100% free server option' },
                          { id: 'Explain Options', label: 'Explain free vs paid hosting' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, willingToPayHosting: opt.id }))}
                            className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                              formData.willingToPayHosting === opt.id
                                ? 'border-primary bg-primary/10 text-white'
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.willingToPayHosting && <span className="text-xs text-danger block">{errors.willingToPayHosting}</span>}
                    </div>
                  )}
                </div>
              )}

              {/* === STEP 6: Logo & Photos === */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Logo & Media</h2>
                    <p className="text-xs text-n8ntext-light">Providing brand assets helps us construct a customized, professional page.</p>
                  </div>

                  {/* Logo assets */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white">Do you have a company/business logo? <span className="text-primary">*</span></label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasLogo: true }))}
                        className={`flex-1 p-3 text-xs rounded border text-center transition-all ${
                          formData.hasLogo === true
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                        }`}
                      >
                        Yes, I have a logo
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, hasLogo: false }));
                          setLogoFile(null);
                          setLogoPreviewUrl(null);
                        }}
                        className={`flex-1 p-3 text-xs rounded border text-center transition-all ${
                          formData.hasLogo === false
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                        }`}
                      >
                        No, I need a basic logo
                      </button>
                    </div>
                    {errors.hasLogo && <span className="text-xs text-danger block">{errors.hasLogo}</span>}
                  </div>

                  {/* File Upload Block (visible if hasLogo is true) */}
                  {formData.hasLogo === true && (
                    <div className="p-4 rounded-lg bg-n8nbg-base border border-dashed border-n8nfg-light flex flex-col items-center justify-center space-y-3 text-center stagger-in">
                      {logoPreviewUrl ? (
                        <div className="relative w-24 h-24 border border-n8nfg-light rounded overflow-hidden bg-n8nbg-lighter flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logoPreviewUrl} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                          <button
                            type="button"
                            onClick={() => {
                              setLogoFile(null);
                              setLogoPreviewUrl(null);
                            }}
                            className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center text-xs text-red-400 font-bold transition-opacity"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="mx-auto w-10 h-10 rounded-full bg-n8nbg-light border border-n8nfg-light flex items-center justify-center text-n8ntext-light">
                            <Upload size={18} />
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-white font-bold">Click to upload logo image</p>
                            <p className="text-[10px] text-n8ntext-light">Supports PNG, JPG or SVG. Max size 2MB.</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                            className="hidden"
                            id="logo-upload-input"
                          />
                          <label
                            htmlFor="logo-upload-input"
                            className="inline-block px-3 py-1.5 rounded bg-n8nbg-light border border-n8nfg-light text-xs font-semibold text-slate-200 cursor-pointer hover:border-primary"
                          >
                            Browse Files
                          </label>
                        </div>
                      )}
                      {errors.logoFile && <span className="text-xs text-danger">{errors.logoFile}</span>}
                    </div>
                  )}

                  {/* Photo assets */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-bold text-white">Do you have high-quality photos of your shop, products, or work? <span className="text-primary">*</span></label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasPhotos: true }))}
                        className={`flex-1 p-3 text-xs rounded border text-center transition-all ${
                          formData.hasPhotos === true
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                        }`}
                      >
                        Yes, I have photos ready
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasPhotos: false }))}
                        className={`flex-1 p-3 text-xs rounded border text-center transition-all ${
                          formData.hasPhotos === false
                            ? 'border-primary bg-primary/10 text-white'
                            : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                        }`}
                      >
                        No, I will need stock images
                      </button>
                    </div>
                    {errors.hasPhotos && <span className="text-xs text-danger block">{errors.hasPhotos}</span>}
                  </div>
                </div>
              )}

              {/* === STEP 7: E-commerce or Service Questions (Conditional) === */}
              {currentStep === 7 && (
                <div className="space-y-4">
                  {(formData.websiteType === 'E-commerce' || formData.websiteType === 'Both') ? (
                    // E-commerce fields
                    <div className="space-y-4 stagger-in">
                      <div className="space-y-1">
                        <h2 className="text-lg font-bold text-white">E-commerce Requirements</h2>
                        <p className="text-xs text-n8ntext-light">Tell us about the online shop you want to launch.</p>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white">How many products do you sell? <span className="text-primary">*</span></label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: '1-10', label: '1 - 10 Products' },
                            { id: '11-50', label: '11 - 50 Products' },
                            { id: '50+', label: '50+ Products' },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, productsCount: opt.id }))}
                              className={`p-3 text-xs rounded border text-center transition-all ${
                                formData.productsCount === opt.id
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                        {errors.productsCount && <span className="text-xs text-danger block">{errors.productsCount}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white">What categories of products? <span className="text-primary">*</span></label>
                        <input
                          type="text"
                          value={formData.productCategories}
                          onChange={(e) => setFormData(prev => ({ ...prev, productCategories: e.target.value }))}
                          placeholder="e.g. Clothing, organic food, digital courses, electronic spares"
                          className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.productCategories ? 'border-danger' : 'border-n8nfg-light'}`}
                        />
                        {errors.productCategories && <span className="text-xs text-danger block">{errors.productCategories}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white">Do you need online payment gateways? <span className="text-primary">*</span></label>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsOnlinePayment: true }))}
                              className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                                formData.needsOnlinePayment === true
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              Yes, need gateway
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsOnlinePayment: false }))}
                              className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                                formData.needsOnlinePayment === false
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              No, COD / Queries only
                            </button>
                          </div>
                          {errors.needsOnlinePayment && <span className="text-xs text-danger block mt-1">{errors.needsOnlinePayment}</span>}
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white">Do you need configured shipping options? <span className="text-primary">*</span></label>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsShippingOptions: true }))}
                              className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                                formData.needsShippingOptions === true
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              Yes, shipping integrations
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsShippingOptions: false }))}
                              className={`flex-1 p-2 text-xs rounded border text-center transition-all ${
                                formData.needsShippingOptions === false
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              No, local pickup / digital
                            </button>
                          </div>
                          {errors.needsShippingOptions && <span className="text-xs text-danger block mt-1">{errors.needsShippingOptions}</span>}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Service business fields
                    <div className="space-y-4 stagger-in">
                      <div className="space-y-1">
                        <h2 className="text-lg font-bold text-white">Service Business Requirements</h2>
                        <p className="text-xs text-n8ntext-light">Briefly explain the services you offer clients.</p>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white">List the services you provide: <span className="text-primary">*</span></label>
                        <textarea
                          rows={3}
                          value={formData.servicesList}
                          onChange={(e) => setFormData(prev => ({ ...prev, servicesList: e.target.value }))}
                          placeholder="e.g. Haircut, hair coloring, spa treatments OR home plumbing repairs, leak testing"
                          className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary resize-none ${errors.servicesList ? 'border-danger' : 'border-n8nfg-light'}`}
                        />
                        {errors.servicesList && <span className="text-xs text-danger block">{errors.servicesList}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white font-medium">Do you want online booking setup? <span className="text-primary">*</span></label>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsOnlineBooking: true }))}
                              className={`flex-1 p-2.5 text-xs rounded border text-center transition-all ${
                                formData.needsOnlineBooking === true
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              Yes, calendar booking
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, needsOnlineBooking: false }))}
                              className={`flex-1 p-2.5 text-xs rounded border text-center transition-all ${
                                formData.needsOnlineBooking === false
                                  ? 'border-primary bg-primary/10 text-white'
                                  : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                              }`}
                            >
                              No, manual booking
                            </button>
                          </div>
                          {errors.needsOnlineBooking && <span className="text-xs text-danger block mt-1">{errors.needsOnlineBooking}</span>}
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-white font-medium">Where do you serve customers? <span className="text-primary">*</span></label>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { id: 'Locally', label: 'Locally' },
                              { id: 'Nationally', label: 'Nationally' },
                              { id: 'Globally', label: 'Globally' },
                            ].map((opt) => (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, serviceArea: opt.id }))}
                                className={`p-2 text-xs rounded border text-center transition-all ${
                                  formData.serviceArea === opt.id
                                    ? 'border-primary bg-primary/10 text-white'
                                    : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          {errors.serviceArea && <span className="text-xs text-danger block mt-1">{errors.serviceArea}</span>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* === STEP 8: Features Wanted === */}
              {currentStep === 8 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Features & Timeline</h2>
                    <p className="text-xs text-n8ntext-light">Select the structural components and timeline requirements.</p>
                  </div>

                  {/* Checklist of Features */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white">Which features do you want on your website? <span className="text-n8ntext-light text-[10px]">(Select all that apply)</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {featureOptions.map((opt) => {
                        const isChecked = formData.featuresWanted.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleFeature(opt.id)}
                            className={`p-2.5 rounded text-left border text-xs flex items-center justify-between transition-all hover:bg-n8nbg-base ${
                              isChecked
                                ? 'border-primary bg-primary/10 text-white'
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ml-2 ${isChecked ? 'border-primary bg-primary text-white' : 'border-n8nfg-light bg-n8nbg-base'}`}>
                              {isChecked && <Check size={10} strokeWidth={3} />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">Is your website content / text ready? <span className="text-primary">*</span></label>
                      <div className="flex flex-col gap-2">
                        {[
                          { id: 'Fully Ready', label: 'Yes, text content is fully ready' },
                          { id: 'Need Help', label: 'No, I need copywriting help' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, contentStatus: opt.id }))}
                            className={`p-2.5 text-xs rounded border text-left transition-all ${
                              formData.contentStatus === opt.id
                                ? 'border-primary bg-primary/10 text-white'
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.contentStatus && <span className="text-xs text-danger block mt-1">{errors.contentStatus}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">How soon do you need the website? <span className="text-primary">*</span></label>
                      <div className="flex flex-col gap-2">
                        {[
                          { id: 'Immediately', label: 'Immediately (within 1-2 weeks)' },
                          { id: '1 Month', label: 'Within 1 month' },
                          { id: 'No Rush', label: 'No rush (1-2 months)' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, timeline: opt.id }))}
                            className={`p-2.5 text-xs rounded border text-left transition-all ${
                              formData.timeline === opt.id
                                ? 'border-primary bg-primary/10 text-white'
                                : 'border-n8nfg-light bg-n8nbg-light text-n8ntext-base hover:bg-n8nbg-base'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      {errors.timeline && <span className="text-xs text-danger block mt-1">{errors.timeline}</span>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Social Media Links <span className="text-n8ntext-light text-[10px]">(Optional, separate with commas)</span></label>
                    <input
                      type="text"
                      value={formData.socialMedia}
                      onChange={(e) => setFormData(prev => ({ ...prev, socialMedia: e.target.value }))}
                      placeholder="e.g. facebook.com/shop, instagram.com/shop"
                      className="w-full p-2.5 rounded border border-n8nfg-light text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* === STEP 9: Final Step === */}
              {currentStep === 9 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">Verification & Final Declarations</h2>
                    <p className="text-xs text-n8ntext-light">You are almost done! Review and accept the checkboxes below.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white">How did you hear about us? <span className="text-n8ntext-light text-[10px]">(Optional)</span></label>
                      <input
                        type="text"
                        value={formData.referralSource}
                        onChange={(e) => setFormData(prev => ({ ...prev, referralSource: e.target.value }))}
                        placeholder="Google, Friends, LinkedIn, YouTube, etc."
                        className="w-full p-2.5 rounded border border-n8nfg-light text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary"
                      />
                    </div>

                    {/* Captcha Security Check */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#f87171]">Security verification <span className="text-primary">*</span></label>
                      <div className="flex gap-2 items-center">
                        <div className="bg-n8nbg-base border border-n8nfg-light rounded px-3 py-2 text-sm text-white font-mono select-none">
                          {num1} + {num2} = ?
                        </div>
                        <input
                          type="text"
                          value={formData.captchaAnswer}
                          onChange={(e) => setFormData(prev => ({ ...prev, captchaAnswer: e.target.value }))}
                          placeholder="Solve sum"
                          className={`w-full p-2.5 rounded border text-sm text-white bg-n8nbg-light focus:outline-none focus:border-primary ${errors.captchaAnswer ? 'border-danger' : 'border-n8nfg-light'}`}
                        />
                      </div>
                      {errors.captchaAnswer && <span className="text-xs text-danger block mt-1">{errors.captchaAnswer}</span>}
                    </div>
                  </div>

                  {/* Honeypot field (hidden from CSS, bots will fill this) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
                      autoComplete="off"
                    />
                  </div>

                  {/* 3 Checkboxes */}
                  <div className="space-y-2 pt-2">
                    {[
                      { 
                        id: 'confirmAccurate', 
                        label: 'I confirm this information is accurate and truthfully represents my business.',
                        field: 'confirmAccurate' as const
                      },
                      { 
                        id: 'confirmCosts', 
                        label: 'I understand domain registration and hosting costs are separate from Maruti Digital\'s free website building service.',
                        field: 'confirmCosts' as const
                      },
                      { 
                        id: 'confirmContact', 
                        label: 'I agree to be contacted about this application via email, WhatsApp, or phone.',
                        field: 'confirmContact' as const
                      },
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-start gap-3 cursor-pointer text-xs text-slate-300 hover:text-white transition-colors">
                        <input
                          type="checkbox"
                          checked={formData[opt.field]}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, [opt.field]: e.target.checked }));
                            setErrors(prev => ({ ...prev, [opt.field]: '' }));
                          }}
                          className="mt-0.5 rounded border-n8nfg-light bg-n8nbg-base text-primary focus:ring-primary w-3.5 h-3.5"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                    {(errors.confirmAccurate || errors.confirmCosts || errors.confirmContact) && (
                      <span className="text-xs text-danger block mt-1">Please agree to all terms before submitting.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Error logs */}
              {submitError && (
                <div className="p-3 bg-danger/10 border border-danger/20 rounded text-xs text-danger stagger-in">
                  ⚠️ {submitError}
                </div>
              )}

              {/* Progress Indicator Loader during upload or submission */}
              {(uploading || isSubmitting) && (
                <div className="py-2 flex items-center justify-center gap-2 text-xs text-slate-300 stagger-in">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span>{uploading ? `Uploading logo asset (${uploadProgress}%)...` : 'Submitting application securely...'}</span>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center pt-4 border-t border-n8nfg-light">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting || uploading}
                    className="btn-ghost py-2 px-4 text-xs font-semibold inline-flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft size={14} />
                    <span>Back</span>
                  </button>
                ) : (
                  <div /> // spacing placeholder
                )}

                {currentStep < 9 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary py-2 px-5 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>Next Step</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || uploading}
                    className="btn-primary py-2.5 px-6 text-xs font-bold inline-flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed bg-orange-600 hover:bg-orange-500 shadow-glow"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                    <Check size={14} strokeWidth={3} />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
