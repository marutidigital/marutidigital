import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: 'Stripe secret key is not configured.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    const body = await request.json();
    const { amount, clientName, clientEmail, description } = body;

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount < 1) {
      return NextResponse.json(
        { error: 'Please enter a valid amount of at least €1.00 EUR.' },
        { status: 400 }
      );
    }

    if (numericAmount > 50000) {
      return NextResponse.json(
        { error: 'For payments exceeding €50,000, please contact us directly on WhatsApp for bank wire instructions.' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(numericAmount * 100);

    const origin =
      request.headers.get('origin') ||
      request.headers.get('referer')?.replace(/\/[^/]*$/, '') ||
      process.env.NEXT_PUBLIC_APP_URL ||
      'https://marutidigital.in';

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: description?.trim()
                ? `Invoice / Payment: ${description.trim()}`
                : 'Client Project Payment — Maruti Digital',
              description: clientName?.trim()
                ? `Client: ${clientName.trim()} | Professional Digital, Web & Automation Services`
                : 'Professional Digital, Web & Automation Services by Maruti Digital',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: clientEmail?.trim() || undefined,
      metadata: {
        clientName: clientName?.trim() || 'N/A',
        clientEmail: clientEmail?.trim() || 'N/A',
        description: description?.trim() || 'Client Project Payment',
        amountInEur: numericAmount.toFixed(2),
      },
      billing_address_collection: 'auto',
      success_url: `${origin}/pay/success?session_id={CHECKOUT_SESSION_ID}&amount=${numericAmount}`,
      cancel_url: `${origin}/pay?canceled=true`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: 'Could not generate Stripe Checkout URL.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to create payment session. Please try again.',
      },
      { status: 500 }
    );
  }
}
