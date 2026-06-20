import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { gigTitle, gigSlug, depositAmount, totalAmount, clientEmail, clientName, categorySlug } = body;

    if (!gigTitle || !depositAmount || !clientEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if Stripe is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      // Stripe not configured — return a success flag for graceful fallback
      return NextResponse.json({ url: null, fallback: true });
    }

    // Dynamically import Stripe to avoid errors when not configured
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-12-18.acacia' as any });

    const depositCents = Math.round(depositAmount * 100);
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://marutidigital.in';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: clientEmail,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: depositCents,
            product_data: {
              name: `20% Deposit — ${gigTitle}`,
              description: `Service deposit for: ${gigTitle}. Remaining 80% ($${(totalAmount - depositAmount).toFixed(2)}) due after delivery approval.`,
              images: [],
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        gig_slug: gigSlug,
        gig_title: gigTitle,
        category_slug: categorySlug,
        client_email: clientEmail,
        client_name: clientName,
        deposit_amount: depositAmount.toString(),
        total_amount: totalAmount.toString(),
        payment_type: 'deposit',
      },
      success_url: `${baseUrl}/dashboard/orders?deposit=success&gig=${gigSlug}`,
      cancel_url: `${baseUrl}/services/${categorySlug}/${gigSlug}?cancelled=true`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error('Stripe deposit checkout error:', error);
    return NextResponse.json({ error: error.message || 'Checkout failed' }, { status: 500 });
  }
}
