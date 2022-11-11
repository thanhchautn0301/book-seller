import axios from "axios";
import {fetcher, useApiHandler} from "./index";
import useSWR from "swr";

const createTopic = (data) => axios.post('/api/v2/topics',data)
const updateTopic = (id,data) => axios.patch(`/api/v2/topics/${id}`,data)

export const useCreateTopic = () => useApiHandler(createTopic)
export const useUpdateTopic = () => useApiHandler(updateTopic)
export const useGetTopic = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v2/topics/${id}` : null, fetcher)
    return {data, error, loading: !data && !error, ...rest}
}
