import axios from "axios";

export const getBooks = async (keyword) => {
    return await axios.get(`/api/v1/book?keyword=${keyword}`).then( (res) => {
        return res.data.books
      })
}

export const getBook = async (id) => {
  return await axios.get(`/api/v1/book/details?id=${id}`).then( (res) => {
      return res.data.book
    })
}