import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import AppLayoutWrapper from './AppLayoutWrapper';

export const metadata: Metadata = {
  title: 'Premium Digital Services by India\'s Best Team | MarutiDigital',
  description: '545+ fixed-price digital services starting from $5. Website fixes, design, SEO, content and automation. Pay 20% upfront. Pay rest after satisfaction. Free website audit for new clients. marutidigital.in',
  keywords: 'digital services India, website development, logo design, SEO, content writing, automation, affordable web services, fixed price digital agency',
  openGraph: {
    title: 'Premium Digital Services by India\'s Best Team | MarutiDigital',
    description: '545+ fixed-price digital services from $5. Pay 20% now, rest after satisfaction. Website fixes, design, SEO, content, automation.',
    url: 'https://marutidigital.in',
    siteName: 'MarutiDigital',
    type: 'website',
    images: [
      {
        url: 'https://marutidigital.in/hero-illustration.png',
        width: 1200,
        height: 630,
        alt: 'MarutiDigital — Premium Digital Services from $5',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Digital Services by India\'s Best Team | MarutiDigital',
    description: '545+ fixed-price digital services from $5. Pay after satisfaction.',
    images: ['https://marutidigital.in/hero-illustration.png'],
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MarutiDigital",
  "url": "https://marutidigital.in",
  "description": "Premium digital services by India's best specialist team. 545+ fixed-price services starting from $5. Website development, design, SEO, content writing, automation.",
  "priceRange": "$5 - $500",
  "areaServed": "Worldwide",
  "serviceType": [
    "Website Development",
    "Graphic Design",
    "SEO",
    "Content Writing",
    "Automation",
    "Website Fixes",
    "Logo Design",
    "Chatbot Setup"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "5",
    "highPrice": "500",
    "priceCurrency": "USD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@marutidigital.in",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased bg-n8nbg-xlight text-n8ntext-base">
        <CartProvider>
          <AppLayoutWrapper>
            {children}
          </AppLayoutWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
