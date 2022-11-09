import axios from "axios";

export const getBooks = async () => {
    return await axios.get('/api/v1/book').then( (res) => {
        return res.data.books
      })
}