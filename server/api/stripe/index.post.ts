// server/api/stripe/create-checkout.post.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia', // Or latest
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { amount, invoiceNumber, clientName } = body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Invoice #${invoiceNumber} - ${clientName}`,
              description: 'Ironclad Construction & Finishing Services',
            },
            unit_amount: Math.round(amount * 100), // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.PUBLIC_URL}/dashboard/invoices/${invoiceNumber}/success`,
      cancel_url: `${process.env.PUBLIC_URL}/dashboard/invoices/create`,
    });

    return { url: session.url };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});