import ChatDetails from "../../../../lib/api/chatdetails";

export default async (req,res)=>{
    try{
        const accessToken = process.env.TOKEN_API
        const data = req.body
        const js = await new ChatDetails(accessToken).create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}