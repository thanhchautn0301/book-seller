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
            authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZZMzVlcXZpS19wMHdSVmF3VVhvYSJ9.eyJpc3MiOiJodHRwczovL2Rldi1hMGdibGpoeGo0ajh1a3ZvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJtYjU0WVVXclZqVXV1bFVFNlBZR0N1RHUxQUhmMWJrOUBjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MSIsImlhdCI6MTY2ODI2ODc2MSwiZXhwIjoxNjY4MzU1MTYxLCJhenAiOiJtYjU0WVVXclZqVXV1bFVFNlBZR0N1RHUxQUhmMWJrOSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.KzsBydodpfSv91zSt7b4_Dp_OM-EKAIRhuZKbPpIoY5wjlVG-AZ77-s5DNvOLQoYiggSPAVMkSvQ2aS77uK02k4hAVTjOSGRQkO8hejEYj4i_016CiO7v2KnActoFGwPSVLWtIR4wE0_doyqwvmiy4cfFJuiAmNSnRCcXJXgbowNBZ32C5Yqpz3qaBzMg1l2gVlmW0Aps7JB6hMHoPxCaVcBwbQ9YkOXTjjSMaWuAmqnlnN3Gg73VBUAh2zssVgJTPNYrbHElVDsKsxb2je8RYqRgWaqKzh1FXsZeSLQgpF8jTBW6yQGVtfy9ZYhEDRK5CJ6Lyx5jU9jfywGfysE1w`
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