import axios from "axios";

export const getTopics = async () => {
    return await axios.get('/api/v1/topic').then( (res) => {
        return res.data.topics
      })
}