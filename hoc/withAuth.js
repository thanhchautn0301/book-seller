import {useGetUser} from "../actions/users";
import Redirect from "../components/Redirect";
import auth0, {isAuthorized} from "../utils/auth0";
import axios from "axios";

const withAuth = (Component) => role => {
    return async props => {
        let {data, loading} = useGetUser()
        if (!data) {
            // return <Redirect ssr toUrl={'/api/auth/login'}/>
        } else {
            const options = {
                method: "GET",
                url: `https://dev-a0gbljhxj4j8ukvo.us.auth0.com/api/v2/users/${data.sub}/roles`,
                headers: {"authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZZMzVlcXZpS19wMHdSVmF3VVhvYSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hMGdibGpoeGo0ajh1a3ZvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJGZ00zR3BsOVZYdUdta01TTG9LaWhXcTMxMnhmNW41akBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtYTBnYmxqaHhqNGo4dWt2by51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY2ODE4MTQ1NiwiZXhwIjoxNjY4MjY3ODU2LCJhenAiOiJGZ00zR3BsOVZYdUdta01TTG9LaWhXcTMxMnhmNW41aiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.POQAu1HhHF4_KsEHUwn7elaObX2q-Ol-grdZrm6RmXqrKbJxJpPs-7m3HFrvqtcPdnztH3KPVm5HM8P93CzUNa5Heerd2knzjF0nyvXbXlrAxCW9u-PVtuAkyOpS9tu0sKjkZH4ehxcPokpyqV_RhNbBJKlzLo_XdWGVktfhlGd6K3a9cZ5bUtPx5lqBnNEsr1P0ndsvK70KuJfVGMXXEoQ3WNuTGkZxRB0FyD2gv3oSr4FPhzMlTtxrRbLPdCg5S_vdQxcH3MPT06lOx6dsrdK6elHVJUpQIalECkqDBzem1dSrNMnpUy3ALCX4A3u2vgsoBp_Ztnx4WdLruEH6pA"},
            };
            axios(options)
                .then(response => {
                    data.role = response.data[0]?.name;
                    console.log(data)
                })
                .catch(error => {
                    console.log(error);
                });
            console.log(data)
            if (data.role == "Admin") {
                let data = JSON.stringify({
                    "client_id": "mb54YUWrVjUuulUE6PYGCuDu1AHf1bk9",
                    "client_secret": "DV4TH6HlHVSuhCfxPULIGaehY3Fdqmks7LwxVkKYwOH6cF5YbNf-jZzL6pgwYbuh",
                    "audience": "http://localhost:8080/api/v1",
                    "grant_type": "client_credentials"
                });
                let config = {
                    method: 'post',
                    url: 'https://dev-a0gbljhxj4j8ukvo.us.auth0.com/oauth/token',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cookie': 'did=s%3Av0%3A7a70c7a0-61c0-11ed-bb21-f1befd54ad5c.O4KoXDD%2BK4VQOzRBcBGIG9d2DA7I0No0J7HnK%2BCLGXc; did_compat=s%3Av0%3A7a70c7a0-61c0-11ed-bb21-f1befd54ad5c.O4KoXDD%2BK4VQOzRBcBGIG9d2DA7I0No0J7HnK%2BCLGXc'
                    },
                    data: data
                };
                axios(config).then(res => {
                    console.log(res.data)
                })
            }
            if (!isAuthorized(data, role)) {
                // return <Redirect ssr toUrl={'/api/auth/login'}/>
            }
            return <Component user={data} loading={loading} {...props}/>

        }
    }
}

export default withAuth;