import Topics from "../../../../lib/api/topics";

export default async function handleInvoice(req,res){
    if(req.method === 'GET'){
        const json = await new Topics().getById(req.query.id)
        return res.json(json.data);
    }
    else if(req.method === 'PATCH'){
        try {
           // const {accessToken} = await auth0.getSession(req,res)
            const json = await new Topics().update(req.query.id,req.body)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
}