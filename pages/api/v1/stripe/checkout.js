import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import stripe from "../../../../config/stripe";

export default async function checkoutHandler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1M2H8TBxW21DvjRJcdyAmwqo",
        quantity: 1,
      },
      {
        price: "price_1M2HgEBxW21DvjRJDYEkmf1Z",
        quantity: 2,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/redirect" + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000" + "?status=cancel",
  });
  res.status(200).json({ paymentLink: session });
}
