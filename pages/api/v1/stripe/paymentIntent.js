import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import stripe from "config/stripe";

export  default withApiAuthRequired(async function handler(req,res){
    try {
        const paymentList = await stripe.paymentIntents.list()
        res.status(200).json({paymentList: paymentList.data});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error})
    }
})