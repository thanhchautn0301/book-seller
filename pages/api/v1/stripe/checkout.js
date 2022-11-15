import {
  getSession,
  withApiAuthRequired,
} from "@auth0/nextjs-auth0";
import stripe from "../../../../config/stripe";

export default withApiAuthRequired(async function checkoutHandler(req, res) {
  try {
    if (req.method === "POST") {
      const { bookList, userEmail } = req.body;
      const items = bookList.map((book, index) => {
        return {
          price: book.priceId,
          quantity: book.quantity,
        };
      });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items,
        mode: "payment",
        success_url:
          "http://localhost:3000/redirect" +
          "?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000" + "?status=cancel",
        client_reference_id: userEmail,
      });
      res.status(200).json({ paymentLink: session });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});
