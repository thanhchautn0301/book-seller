import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCheckoutSession, saveInvoice } from "../services/stripe";

const redirectCheckoutPage = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const { user } = useUser();
  useEffect(() => {
    if (router.isReady === true) {
      getCheckoutSession(session_id).then((res) => {
        const checkout_session = res.checkout_session
        const items = res.listLineItems.data
        const invoice = {
          name: checkout_session.customer_details.name,
          payment_code: checkout_session.payment_intent,
          email: checkout_session.client_reference_id,
          status: checkout_session.payment_status,
          total: checkout_session.amount_total,
          created: new Date(),
        };
        saveInvoice(invoice).then((res) => {
          if (localStorage) {
            const cart = JSON.parse(localStorage.getItem("cart"))?.cart;
            if (cart !== null && cart?.length > 0) {
              localStorage.removeItem("cart");
            }
          }
          router.replace("/");
        });
      });
    }
  }, [session_id]);
  return <>Loading...</>;
};
export default redirectCheckoutPage;
