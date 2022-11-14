 import Invoices from "../../../../lib/api/invoices";
 import auth0 from "../../../../utils/auth0";
 import axios from "axios";

export default async function handleInvoice(req,res){
    if(req.method === 'GET'){
        const json = await new Invoices().getById(req.query.id)
        return res.json(json.data);
    }
    else if(req.method === 'PATCH'){
        try {
            const rs = await auth0.getSession(req,res)
            const {accessToken} = await axios.get(`/api/v2/authentication/getroles?sub=${rs.user.sub}`)
            const json = await new Invoices(accessToken).update(req.query.id,req.body)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
}