import Topics from "../../../../lib/api/topics";
import auth0 from "../../../../utils/auth0";
import axios from "axios";
import Router from 'next/router'


export default async (req,res)=>{
    try{
        const accessToken = process.env.TOKEN_API
        const data = req.body
        const js = await new Topics(accessToken).create(data)
        Router.push("/admin/topic");
        return res.json(js.data)
    }catch (e){
        return res.status(e.status || 422).json(e.response.data)
    }
}