import axios from "axios"

export default async function handler(req, res) {
    if(req.method === 'GET') {
      const { keyword } = req.query
      let keywordCheck = ''
      if(keyword !== 'undefined'){
        keywordCheck = keyword
      }
      const books = await axios.get(encodeURI(`${process.env.BACKEND_API_URL}/search?keyword=${keywordCheck}`))
      res.status(200).json({ books: books.data })
    }
    
}