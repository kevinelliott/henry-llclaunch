import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStateData } from "@/lib/llc-data";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2026-02-25.clover" });
}

export async function POST(req: NextRequest) {
  try {
    const { state, email } = await req.json();
    const stateData = getStateData(state || "CA");
    const stateName = stateData?.name || state || "Your State";

    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://henry-llclaunch.vercel.app";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${stateName} LLC Formation Kit`,
              description: `Complete LLC kit for ${stateName}: Operating Agreement, Articles template, EIN guide, formation checklist, compliance calendar, and bank account guide.`,
              images: [],
            },
            unit_amount: 1999,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?state=${state}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?state=${state}`,
      metadata: { state: state || "CA", email: email || "" },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
