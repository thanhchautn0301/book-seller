import stripe from "../../../../config/stripe";

export default async function (req, res) {
  try {
    if (req.method === "GET") {
      const books = await stripe.products.list({
        active: true,
      });
      res.status(200).json({ books: books });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  } 
}
