import axios from "axios";
import {fetcher, useApiHandler} from "./index";
import useSWR from "swr";

const createInvoice = (data) => axios.post('/api/v1/invoices',data)
const updateTopic = (id,data) => axios.patch(`/api/v1/invoices/${id}`,data)

export const useCreateInvoice = () => useApiHandler(createInvoice)
export const useUpdateInvoice = () => useApiHandler(updateTopic)
export const useGetInvoice = (id) => {
    const {data, error, ...rest} = useSWR(id ? `/api/v1/invoices/${id}` : null, fetcher)
    return {data, error, loading: !data && !error, ...rest}
}
