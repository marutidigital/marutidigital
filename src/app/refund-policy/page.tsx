import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px', color: '#333', lineHeight: 1.6 }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().getFullYear()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our 20/80 Risk-Free Model</h2>
          <p>
            At MarutiDigital, we want you to feel completely secure when ordering digital services. This is why we created our 20/80 payment model. You only pay 20% to start, and the remaining 80% is paid <strong>after</strong> you are satisfied with the work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. The 20% Advance</h2>
          <p>
            The initial 20% payment is generally non-refundable, as it covers the immediate allocation of resources, research, and initial setup by our team. However, if we are unable to start your project for any reason on our end, the 20% advance will be refunded in full immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Dissatisfaction with Initial Drafts</h2>
          <p>
            If you are not satisfied with the initial delivery, you are protected. You have not paid the final 80%. We will offer free revisions until the work matches your requirements. If, after multiple revisions, you choose to cancel the project, you simply do not pay the remaining 80%. We will retain the initial 20% to cover the labor already spent, and no files will be transferred.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Final Delivery Refunds</h2>
          <p>
            Once you have approved the work, paid the final 80%, and received the final source files or completed website, refunds are no longer possible. The work is considered complete and accepted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Software and SaaS Products</h2>
          <p>
            For ready-made digital products or SaaS subscriptions purchased through our shop, we offer a 7-day money-back guarantee. If the software does not work as advertised, please contact support within 7 days of purchase for a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>
            If you have any questions regarding a refund or cancellation, please contact us at <a href="mailto:hello@marutidigital.in" className="text-brand-orange hover:underline">hello@marutidigital.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
