import stripe from "../../../../config/stripe";

export default async function checkoutHandler(req, res) {
  try {
    if (req.method === "POST") {
      const { bookList } = req.body;
      const items = bookList.map((book,index) => {
        return {
          price: book.priceId,
          quantity: book.quantity,
        }
      })
      const books = await stripe.products.list({
        active: true,
      });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: items,
        mode: "payment",
        success_url:
          "http://localhost:3000/redirect" +
          "?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000" + "?status=cancel",
      });
      res.status(200).json({ paymentLink: session });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}
