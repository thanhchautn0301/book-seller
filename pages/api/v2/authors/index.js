import Authors from "../../../../lib/api/authors";
import auth0 from "../../../../utils/auth0";
export default async (req,res)=>{
    try{
       // const {accessToken} = await auth0.getSession(req,res)
        const data = req.body
        const js = await new Authors().create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}