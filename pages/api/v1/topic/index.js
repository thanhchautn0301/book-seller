import axios from "axios"

export default async function handler(req, res) {
    if(req.method === 'GET') {
      const topics = await axios.get(`${process.env.BACKEND_API_URL}/topics`)
      res.status(200).json({ topics: topics.data })
    }
}