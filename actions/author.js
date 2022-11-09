import axios from "axios";
import {fetcher, useApiHandler} from "./index";
import useSWR from "swr";

const createAuthor = (data) => axios.post('http://localhost:3000/api/v2/authors',data)

const updateAuthor = (id,data) => axios.patch(`/api/v1/authors/${id}`,data)

export const useCreateAuthor = () => useApiHandler(createAuthor)
export const useUpdateAuthor = () => useApiHandler(updateAuthor)
export const useGetAuthor = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/authors/${id}` : null, fetcher)
    return {data, error, loading: !data && !error, ...rest}
}
