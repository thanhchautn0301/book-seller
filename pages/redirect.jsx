import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCheckoutSession } from "../services/stripe";

const redirectCheckoutPage = () => {
  const router = useRouter();
  const { session_id } = router.query;
  useEffect(() => {
    if(router.isReady === true) {
        getCheckoutSession(session_id).then((res) => {
            console.log(res)
        })
    }
  }, [session_id]);
  return <>Loading...</>;
};
export default redirectCheckoutPage;
