import Invoices from "../../../../lib/api/invoices";
import auth0 from "../../../../utils/auth0";
import axios from "axios";

export default async (req,res)=>{
    try{
        const accessToken = process.env.TOKEN_API
        const data = req.body
        const js = await new Invoices(accessToken).create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}