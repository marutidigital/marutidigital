import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px', color: '#333', lineHeight: 1.6 }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().getFullYear()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
          <p>
            When you visit MarutiDigital, we may collect the following information:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Personal Data:</strong> Name, email address, WhatsApp number, and billing details when you place an order.</li>
            <li><strong>Project Data:</strong> Information, files, or credentials you share with us to complete your service.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and interaction data via cookies to improve our platform.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information exclusively to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Process and deliver the digital services you ordered.</li>
            <li>Communicate with you regarding project updates via email or WhatsApp.</li>
            <li>Process payments securely (via Stripe, PayPal, or UPI).</li>
            <li>Send important notices about policy changes or service updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share data only with trusted third-party service providers (like payment processors) necessary to deliver our services. All data is transmitted securely via SSL and stored on secure servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience, track sessions, and analyze site traffic. You can choose to disable cookies through your browser settings, though some site features may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Your Rights</h2>
          <p>
            You have the right to request access, correction, or deletion of your personal data at any time. To exercise these rights, please contact us at <a href="mailto:hello@marutidigital.in" className="text-brand-orange hover:underline">hello@marutidigital.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
