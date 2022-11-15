import axios from "axios";

export const getPaymentLink = async (bookList, userEmail) => {
  return await axios
    .post("/api/v1/stripe/checkout", {
      bookList: bookList,
      userEmail: userEmail,
    })
    .then((res) => {
      return res.data.paymentLink.url;
    })
    .catch((err) => {
      return "http://localhost:3000/api/auth/login";
    });
};

export const getCheckoutSession = async (session_id) => {
  return await axios.get(`/api/v1/stripe/${session_id}`).then((res) => {
    return res.data;
  });
};

export const saveInvoice = async (invoice) => {
  return await axios
    .post(`/api/v1/invoice`, { invoice: invoice , items: items})
    .then((res) => {
      return res.data;
    });
};
