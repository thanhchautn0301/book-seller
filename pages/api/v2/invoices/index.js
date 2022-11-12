import Invoices from "../../../../lib/api/invoices";

export default async (req,res)=>{
    try{
       // const {accessToken} = await auth0.getSession(req,res)
        const data = req.body
        const js = await new Invoices().create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}