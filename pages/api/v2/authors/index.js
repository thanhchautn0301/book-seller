import Authors from "../../../../lib/api/authors";

export default async (req,res)=>{
    try{
        const {accessToken} = await auth0.getSession(req,res)
        const data = req.body
        const js = await new Authors(accessToken).create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}