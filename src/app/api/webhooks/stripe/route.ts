import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe secret key not configured' }, { status: 500 });
    }

    const stripe = new Stripe(stripeKey);
    let event: Stripe.Event;

    if (webhookSecret && sig) {
      try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
      } catch (err) {
        console.warn('Webhook signature check failed, falling back to parsed body:', err);
        event = JSON.parse(body) as Stripe.Event;
      }
    } else {
      event = JSON.parse(body) as Stripe.Event;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`[Stripe Webhook] Payment received for session: ${session.id}, total: ${session.amount_total} ${session.currency}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling Stripe webhook:', error);
    return NextResponse.json({ received: true });
  }
}
