import axios from "axios";
import {fetcher, useApiHandler} from "./index";
import useSWR from "swr";

const createBook = (data) => axios.post('/api/v2/books',data)

const updateBook = (id,data) => axios.patch(`/api/v2/books/${id}`,data)

export const useCreateBook = () => useApiHandler(createBook)
export const useUpdateBook = () => useApiHandler(updateBook)
export const useGetBook = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v2/books/${id}` : null, fetcher)
    return {data, error, loading: !data && !error, ...rest}
}
