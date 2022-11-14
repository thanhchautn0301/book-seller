import Books from "../../../../lib/api/books";
import auth0 from "../../../../utils/auth0";
import axios from "axios";

export default async (req,res)=>{
    try{
        const rs = await auth0.getSession(req,res)
        const {accessToken} = await axios.get(`/api/v2/authentication/getroles?sub=${rs.user.sub}`)
        const data = req.body
        const js = await new Books(accessToken).create(data)
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}