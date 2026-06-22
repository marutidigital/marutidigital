import React from 'react';

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px', color: '#333', lineHeight: 1.6 }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().getFullYear()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using MarutiDigital (marutidigital.in), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
          <p>
            MarutiDigital provides fixed-price digital services including, but not limited to, website development, design, SEO, and automation. All services are subject to the scope of work defined at the time of purchase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Payment Model (20/80)</h2>
          <p>
            We operate on a 20/80 payment model. You are required to pay a 20% non-refundable advance to commence work. The remaining 80% is due only after you have reviewed and approved the final delivery. Once the final 80% is paid, source files and final deliverables are handed over.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Revisions and Approvals</h2>
          <p>
            We offer unlimited reasonable revisions until you are satisfied, provided the revision requests fall within the original scope of the project. Any requests that significantly expand the scope may incur additional charges, which will be quoted upfront.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p>
            Upon full payment (the final 80%), all intellectual property rights for the deliverables are transferred to you. MarutiDigital retains the right to display the completed work in our portfolio, unless a Non-Disclosure Agreement (NDA) is signed prior to the project start.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p>
            MarutiDigital shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, or any delay in delivery due to circumstances beyond our control.
          </p>
        </section>
      </div>
    </div>
  );
}
