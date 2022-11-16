 import Invoices from "../../../../lib/api/invoices";
 import auth0 from "../../../../utils/auth0";
 import axios from "axios";
 import Books from "../../../../lib/api/books";

export default async function handleInvoice(req,res){
    if(req.method === 'GET'){
        const json = await new Invoices().getById(req.query.id)
        return res.json(json.data);
    }
    else if(req.method === 'PATCH'){
        try {
            const accessToken = process.env.TOKEN_API
            const json = await new Invoices(accessToken).update(req.query.id,req.body)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
    else if(req.method === 'DELETE'){
        try{
            const accessToken = process.env.TOKEN_API
            const json = await new Invoices(accessToken).delete(req.query.id)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
}