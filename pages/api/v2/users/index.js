import Users from "../../../../lib/api/users";

export default async (req,res)=>{
    try{
        const accessToken = process.env.TOKEN_API
        const data = req.body
        const js = await new Users(accessToken).create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}