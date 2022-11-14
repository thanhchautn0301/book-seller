import {useGetUser} from "../actions/users";
import Redirect from "../components/Redirect";
import auth0, {isAuthorized} from "../utils/auth0";
import axios from "axios";

const withAuth = Component => role => {
    return props => {
        const {data, loading} = useGetUser()
        if (!data) {
            // return <Redirect ssr toUrl={'/api/auth/login'}/>
        } else {
            if (!isAuthorized(data, role)) {
                // return <Redirect ssr toUrl={'/api/auth/login'}/>
            }
            return <Component user={data} loading={loading} {...props}/>

        }
    }
}

export default withAuth;