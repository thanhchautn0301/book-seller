import axios from "axios";

export default async function checkoutHandler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const book = await axios(`http://localhost:8080/api/v1/book/${id}`);
    res.status(200).json({ book: book.data });
  }
}
