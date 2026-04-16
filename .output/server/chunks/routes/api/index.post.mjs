import { d as defineEventHandler, r as readBody, c as createError } from '../../nitro/nitro.mjs';
import Stripe from 'stripe';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-03-25.dahlia"
  // Or latest
});
const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { amount, invoiceNumber, clientName } = body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Invoice #${invoiceNumber} - ${clientName}`,
              description: "Ironclad Construction & Finishing Services"
            },
            unit_amount: Math.round(amount * 100)
            // Stripe uses cents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.PUBLIC_URL}/dashboard/invoices/${invoiceNumber}/success`,
      cancel_url: `${process.env.PUBLIC_URL}/dashboard/invoices/create`
    });
    return { url: session.url };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
