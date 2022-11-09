import axios from "axios"

export default async function handler(req, res) {
    if(req.method === 'GET') {
      const books = await axios.get(`${process.env.BACKEND_API_URL}book?pageSize=9`)
      res.status(200).json({ books: books.data })
    }
    
}