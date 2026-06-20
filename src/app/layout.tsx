import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import AppLayoutWrapper from './AppLayoutWrapper';

export const metadata: Metadata = {
  title: 'MarutiDigital.in — Indian Freelancer & Web Platform',
  description: 'Fixed-Price website rescue desk, developer tools, digital products, SaaS widgets and developer community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
