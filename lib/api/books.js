import axios from "axios";

class Books{
    constructor(accessToken) {
        this.config ={}
        if(accessToken){
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.config.headers = {
            authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZZMzVlcXZpS19wMHdSVmF3VVhvYSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hMGdibGpoeGo0ajh1a3ZvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJtYjU0WVVXclZqVXV1bFVFNlBZR0N1RHUxQUhmMWJrOUBjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MSIsImlhdCI6MTY2ODE3NjE1OSwiZXhwIjoxNjY4MjYyNTU5LCJhenAiOiJtYjU0WVVXclZqVXV1bFVFNlBZR0N1RHUxQUhmMWJrOSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.cwgD3svF1djlPbj8cl7oFydLqzkCxoyGcYi76GEVm89s36oxzc_e-nxkGywbfX0J5h5dPRRtuMaIOO6f2lZV71KcHEaJT9RvejVu3CL5UtUp_OVJmQfJgVLaKGQVG_mn1CQzjTR_lR_A23I98hPjccMWrVRFjrNPzL8l5YRXKlzYgKf-F9vHc8TLAUJKlGxtauaTsnRLcpbF9OHX17BoKPiMx6GcCcTbYBlzbrqIVCAoJon7J_VaX-FTMxN-2aM3hAH0vgD4vsHeik4-j8PFJaghwGEDfae09kFo57m3mbb88EE1O-N7qUKwMHLxcoFyOFgfQAgK0BPzRxd11q0XdQ`
        }
        this.apiUrl = process.env.BACKEND_API_URL + '/book'
    }
    getAll(){
        return axios.get(this.apiUrl)
    }
    getById(id){
        return axios.get(`${this.apiUrl}/${id}`)
    }
    create(data){
        return axios.post(`${this.apiUrl}`,data, this.config)
    }
    update(id,data){
        return axios.put(`${this.apiUrl}/${id}`,data,this.config)
    }
}
export default Books