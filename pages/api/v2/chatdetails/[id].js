import ChatDetails from "../../../../lib/api/chatdetails";

export default async function handleInvoice(req,res){
    if(req.method === 'GET'){
        const json = await new ChatDetails().getById(req.query.id)
        return res.json(json.data);
    }
    else if(req.method === 'PATCH'){
        try {
            const accessToken = process.env.TOKEN_API
            const json = await new ChatDetails(accessToken).update(req.query.id,req.body)
            return res.json(json.data);
        }catch (e){
            return res.status(e.status||422).json(e.response.data)
        }
    }
}