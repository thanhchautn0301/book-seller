import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import axios from "axios";

export default withApiAuthRequired(async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { invoice } = req.body;
      const accessToken = process.env.TOKEN_API;
      const invoiceResult = await axios.post(
        `${process.env.BACKEND_API_URL}invoice`,
        {
          name: invoice.name,
          paymentCode: invoice.payment_code,
          email: invoice.email,
          status: invoice.status,
          total: invoice.total,
          created: invoice.created,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      );
      res.status(200).json({ result: invoiceResult.data });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});
