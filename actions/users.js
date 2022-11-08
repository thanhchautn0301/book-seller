import useSWR from "swr";
import {fetcher} from "./index";

export const useGetUser = () => {
    const {data,err,...rest} = useSWR('/api/auth/me',fetcher)
    return {data,err, loading: !data && !err, ...rest}
}