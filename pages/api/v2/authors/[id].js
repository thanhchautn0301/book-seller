import Authors from "../../../../lib/api/authors";
import auth0 from "../../../../utils/auth0";
import axios from "axios";

export default async function handleInvoice(req,res){
    if(req.method === 'GET'){
        const json = await new Authors().getById(req.query.id)
        console.log(res.json(json.data));
        return res.json(json.data);
    }
    else if(req.method === 'PATCH'){
        try {
            const rs = await auth0.getSession(req,res)
            const accessToken = process.env.TOKEN_API
            const json = await new Authors(accessToken).update(req.query.id,req.body)
            return res.json(json.data);
        }catch (e){
             return res.status(e.status||422).json(e.response.data)
        }
    }
    else if(req.method === 'DELETE'){
        try{
            const accessToken = process.env.TOKEN_API
            const json = await new Authors(accessToken).delete(req.query.id)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
}