import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import stripe from "../../../../config/stripe";
export default withApiAuthRequired(async function handler(req, res) {
  const { id } = req.query;
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID.");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);

    res.status(200).json({ checkout_session: checkout_session });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
