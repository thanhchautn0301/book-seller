import axios from "axios";

class Invoices{
    constructor(accessToken) {
        this.config ={}
        if(accessToken){
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.apiUrl = process.env.BACKEND_API_URL + '/invoices'
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
        return axios.patch(`${this.apiUrl}/${id}`,data,this.config)
    }
}
export default Invoices