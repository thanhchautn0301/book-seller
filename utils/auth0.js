
import { initAuth0 } from '@auth0/nextjs-auth0';
import axios from "axios";

const auth0 = initAuth0({
    clientID: process.env.AUTH0_CLIENT_ID,
    baseURL: process.env.AUTH0_BASE_URL,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,
    authorizationParams: {
        scope: 'openid profile role',
    }
});
export default auth0
export const authorizeUser = async (req,res) => {
    const session = await auth0.getSession(req,res);
    if(!session|| !session.user){
        res.writeHead(302,{
            Location: '/api/v1/login'
        })
        res.end()
        return {props:{}}
    }
    return{
        props: {user: session.user}
    }
}
export const withAuth = getData => role => async({req,res}) =>{
    const session = await auth0.getSession(req,res);
    if(!session|| !session.user || (role && !isAuthorized(session.user,role))){
        res.writeHead(302,{
            Location: '/api/v1/login'
        })
        res.end()
        return {props:{}}
    }
    const data = getData ? await getData({req,res},session.user) : {}
    return{
        props: {user: session.user,...data}
    }
}

export const isAuthorized = (user,role) =>{
    return user
}