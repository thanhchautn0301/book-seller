import axios from "axios";

export const getPaymentLink = async () => {
    return await axios.get('/api/v1/stripe/checkout').then( (res) => {
        return res.data.paymentLink
      })
}

export const getCheckoutSession = async (session_id) => {
  return await axios.get(`/api/v1/stripe/${session_id}`).then( (res) => {
      return res.data.checkout_session
    })
}