import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST(req: NextRequest) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 200 });
  }

  const Stripe = (await import('stripe')).default;
  const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-12-18.acacia' as any });

  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  // Init admin Supabase client (service role — bypasses RLS)
  const supabase = supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const metadata = session.metadata || {};
    const paymentType = metadata.payment_type;

    if (!supabase) {
      console.log('Supabase not configured — webhook received but not processed');
      return NextResponse.json({ received: true });
    }

    if (paymentType === 'deposit') {
      // Create or update service order on deposit paid
      const { error } = await supabase.from('service_orders').upsert([{
        client_email: metadata.client_email,
        client_name: metadata.client_name,
        gig_title: metadata.gig_title,
        gig_category: metadata.category_slug,
        gig_id: null,
        total_amount_usd: parseFloat(metadata.total_amount),
        deposit_amount_usd: parseFloat(metadata.deposit_amount),
        balance_amount_usd: parseFloat(metadata.total_amount) - parseFloat(metadata.deposit_amount),
        deposit_stripe_session_id: session.id,
        deposit_paid_at: new Date().toISOString(),
        status: 'deposit_paid',
      }]);
      if (error) console.error('Failed to update order on deposit:', error);

    } else if (paymentType === 'balance') {
      // Update order to balance_paid
      const { error } = await supabase.from('service_orders')
        .update({
          balance_stripe_session_id: session.id,
          balance_paid_at: new Date().toISOString(),
          status: 'complete',
          updated_at: new Date().toISOString(),
        })
        .eq('id', metadata.order_id);
      if (error) console.error('Failed to update order on balance:', error);
    }
  }

  return NextResponse.json({ received: true });
}
