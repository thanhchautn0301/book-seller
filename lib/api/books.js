import axios from "axios";

class Books{
    constructor(accessToken) {
        this.config ={}
        if(accessToken){
            this.config.headers = {
                authorization: `Bearer ${accessToken}`
            }
        }
        this.apiUrl = process.env.BACKEND_API_URL + 'book'
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
    delete(id,data){
        return axios.delete(`${this.apiUrl}/${id}`,this.config)
    }
}
export default Books