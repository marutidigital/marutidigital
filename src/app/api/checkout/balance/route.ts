import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, gigTitle, balanceAmount, clientEmail } = body;

    if (!orderId || !balanceAmount || !clientEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json({ url: null, fallback: true });
    }

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-12-18.acacia' as any });

    const balanceCents = Math.round(balanceAmount * 100);
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://marutidigital.in';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: clientEmail,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: balanceCents,
            product_data: {
              name: `80% Balance — ${gigTitle}`,
              description: `Final balance payment for: ${gigTitle}. Your work has been delivered and approved.`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        order_id: orderId,
        gig_title: gigTitle,
        client_email: clientEmail,
        payment_type: 'balance',
      },
      success_url: `${baseUrl}/dashboard/orders?balance=success&order=${orderId}`,
      cancel_url: `${baseUrl}/dashboard/orders?balance=cancelled`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error('Stripe balance checkout error:', error);
    return NextResponse.json({ error: error.message || 'Balance checkout failed' }, { status: 500 });
  }
}
